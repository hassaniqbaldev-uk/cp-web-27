"use client";

import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";

const PIXELS_PER_SECOND = 60;

const SCREENFULS = 2;

const TOUCH_SLOP = 6;

type DragMarqueeProps = {
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
  slideClassName?: string;
  as?: "ul" | "div";
  speed?: number;
  pauseOnHover?: boolean;
};

export default function DragMarquee({
  children,
  className = "",
  trackClassName = "",
  slideClassName = "",
  as = "ul",
  speed = PIXELS_PER_SECOND,
  pauseOnHover = false,
}: DragMarqueeProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLElement>(null);

  const prefersReducedMotion = usePrefersReducedMotion();

  const items = Children.toArray(children);
  const count = items.length;
  const [passes, setPasses] = useState(1);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return;

    const children = Array.from(track.children) as HTMLElement[];

    const passWidth =
      passes > 1 && children.length > count
        ? children[count].offsetLeft - children[0].offsetLeft
        : track.scrollWidth;

    if (!passWidth) return;

    const wanted = Math.max(
      2,
      Math.ceil((viewport.clientWidth * SCREENFULS) / passWidth),
    );

    if (wanted !== passes) {
      setPasses(wanted);
      return;
    }

    gsap.registerPlugin(Draggable, InertiaPlugin);

    const context = gsap.context(() => {
      const duration = passWidth / speed;

      const tween = gsap.fromTo(
        track,
        { x: 0 },
        {
          x: -passWidth,
          duration,
          ease: "none",
          repeat: -1,
          force3D: true,
        },
      );

      if (prefersReducedMotion) tween.pause();

      const wrapTime = gsap.utils.wrap(0, duration);
      const proxy = document.createElement("div");

      const canHover = window.matchMedia("(hover: hover)").matches;

      let lastX = 0;
      let isDragging = false;
      let isHovered = false;
      let targetTime = tween.time();
      let needsRender = false;

      const render = () => {
        if (!needsRender) return;

        needsRender = false;
        tween.time(targetTime);
      };

      gsap.ticker.add(render);

      const resume = () => {
        if (isDragging || prefersReducedMotion) return;
        if (pauseOnHover && isHovered) return;

        tween.play();
      };

      const scrub = (x: number) => {
        const delta = x - lastX;

        lastX = x;
        targetTime = wrapTime(targetTime - delta / speed);
        needsRender = true;
      };

      Draggable.create(proxy, {
        type: "x",
        trigger: viewport,
        inertia: true,
        allowNativeTouchScrolling: true,
        lockAxis: true,
        minimumMovement: TOUCH_SLOP,
        onPress() {
          isDragging = true;
          lastX = this.x;
          targetTime = tween.time();
          tween.pause();
        },
        onDrag() {
          scrub(this.x);
        },
        onThrowUpdate() {
          scrub(this.x);
        },
        onRelease() {
          isDragging = false;

          if (!this.isThrowing) resume();
        },
        onThrowComplete() {
          isDragging = false;
          resume();
        },
      });

      if (!pauseOnHover || !canHover) return () => gsap.ticker.remove(render);

      const onEnter = () => {
        isHovered = true;
        gsap.killTweensOf(proxy);
        tween.pause();
      };

      const onLeave = () => {
        isHovered = false;
        resume();
      };

      viewport.addEventListener("mouseenter", onEnter);
      viewport.addEventListener("mouseleave", onLeave);

      return () => {
        gsap.ticker.remove(render);
        viewport.removeEventListener("mouseenter", onEnter);
        viewport.removeEventListener("mouseleave", onLeave);
      };
    }, viewport);

    return () => context.revert();
  }, [count, passes, pauseOnHover, prefersReducedMotion, speed]);

  const Track = as;
  const Slide = as === "ul" ? "li" : "div";

  const asCopy = (item: React.ReactNode) =>
    isValidElement(item)
      ? cloneElement(item as React.ReactElement<Record<string, unknown>>, {
          tabIndex: -1,
          "aria-hidden": true,
        })
      : item;

  return (
    <div
      ref={viewportRef}
      className={`cursor-grab touch-pan-y overflow-hidden select-none active:cursor-grabbing [&_a]:cursor-pointer ${className}`}
    >
      <Track
        ref={trackRef as React.Ref<HTMLUListElement & HTMLDivElement>}
        className={`flex w-max ${trackClassName}`}
      >
        {Array.from({ length: passes }, (_, pass) =>
          items.map((item, index) => (
            <Slide
              key={`${pass}-${index}`}
              className={slideClassName}
              {...(pass > 0 && { "aria-hidden": true })}
            >
              {pass > 0 ? asCopy(item) : item}
            </Slide>
          )),
        )}
      </Track>
    </div>
  );
}
