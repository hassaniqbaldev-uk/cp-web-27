"use client";

import { useMediaQuery, usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import gsap from "gsap";
import {
  Children,
  cloneElement,
  Fragment,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";

const PIXELS_PER_SECOND = 40;

const SCREENFULS = 2;

const THROW_DURATION = 0.9;

const THROW_REACH = 0.3;

type VerticalDragMarqueeProps = {
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
  slideClassName?: string;
  as?: "ul" | "div";
  speed?: number;
  query?: string | null;
  pauseOnHover?: boolean;
};

export default function VerticalDragMarquee({
  children,
  className = "",
  trackClassName = "",
  slideClassName = "",
  as = "ul",
  speed = PIXELS_PER_SECOND,
  query = null,
  pauseOnHover = false,
}: VerticalDragMarqueeProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLElement>(null);

  const prefersReducedMotion = usePrefersReducedMotion();
  const isActive = useMediaQuery(query ?? "all");

  const items = Children.toArray(children);
  const count = items.length;
  const [passes, setPasses] = useState(1);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track || !isActive) {
      setPasses(1);
      return;
    }

    const children = Array.from(track.children) as HTMLElement[];

    const passHeight =
      passes > 1 && children.length > count
        ? children[count].offsetTop - children[0].offsetTop
        : track.scrollHeight;

    if (!passHeight) return;

    const wanted = Math.max(
      2,
      Math.ceil((viewport.clientHeight * SCREENFULS) / passHeight),
    );

    if (wanted !== passes) {
      setPasses(wanted);
      return;
    }

    const context = gsap.context(() => {
      const duration = passHeight / speed;

      const tween = gsap.fromTo(
        track,
        { y: 0 },
        {
          y: -passHeight,
          duration,
          ease: "none",
          repeat: -1,
          force3D: true,
        },
      );

      if (prefersReducedMotion) tween.pause();

      const wrapTime = gsap.utils.wrap(0, duration);
      const throwState = { travelled: 0 };

      const canHover = window.matchMedia("(hover: hover)").matches;

      let pointerId: number | null = null;
      let lastY = 0;
      let lastAt = 0;
      let velocity = 0;
      let isHovered = false;
      let targetTime = 0;
      let needsRender = false;

      const render = () => {
        if (!needsRender) return;

        needsRender = false;
        tween.time(targetTime);
      };

      gsap.ticker.add(render);

      const resume = () => {
        if (pointerId !== null || prefersReducedMotion) return;
        if (pauseOnHover && isHovered) return;

        tween.play();
      };

      const moveBy = (pixels: number) => {
        targetTime = wrapTime(targetTime - pixels / speed);
        needsRender = true;
      };

      const hold = () => {
        gsap.killTweensOf(throwState);
        targetTime = tween.time();
        tween.pause();
      };

      const onPointerDown = (event: PointerEvent) => {
        if (pointerId !== null || !event.isPrimary) return;
        if (event.pointerType === "touch") return;

        pointerId = event.pointerId;
        lastY = event.clientY;
        lastAt = event.timeStamp;
        velocity = 0;

        viewport.setPointerCapture(event.pointerId);
        hold();
      };

      const onPointerMove = (event: PointerEvent) => {
        if (event.pointerId !== pointerId) return;

        const delta = event.clientY - lastY;
        const elapsed = event.timeStamp - lastAt;

        moveBy(delta);

        if (elapsed > 0) velocity = (delta / elapsed) * 1000;

        lastY = event.clientY;
        lastAt = event.timeStamp;
      };

      const onPointerUp = (event: PointerEvent) => {
        if (event.pointerId !== pointerId) return;

        const held = event.timeStamp - lastAt > 120;

        pointerId = null;

        if (held || !velocity) {
          resume();
          return;
        }

        throwState.travelled = 0;

        let applied = 0;

        gsap.to(throwState, {
          travelled: velocity * THROW_REACH,
          duration: THROW_DURATION,
          ease: "power2.out",
          onUpdate() {
            moveBy(throwState.travelled - applied);
            applied = throwState.travelled;
          },
          onComplete: resume,
          onInterrupt: resume,
        });
      };

      viewport.addEventListener("pointerdown", onPointerDown);
      viewport.addEventListener("pointermove", onPointerMove);
      viewport.addEventListener("pointerup", onPointerUp);
      viewport.addEventListener("pointercancel", onPointerUp);

      const onEnter = () => {
        isHovered = true;
        hold();
      };

      const onLeave = () => {
        isHovered = false;
        resume();
      };

      if (pauseOnHover && canHover) {
        viewport.addEventListener("mouseenter", onEnter);
        viewport.addEventListener("mouseleave", onLeave);
      }

      return () => {
        gsap.ticker.remove(render);
        viewport.removeEventListener("pointerdown", onPointerDown);
        viewport.removeEventListener("pointermove", onPointerMove);
        viewport.removeEventListener("pointerup", onPointerUp);
        viewport.removeEventListener("pointercancel", onPointerUp);
        viewport.removeEventListener("mouseenter", onEnter);
        viewport.removeEventListener("mouseleave", onLeave);
      };
    }, viewport);

    return () => context.revert();
  }, [count, isActive, passes, pauseOnHover, prefersReducedMotion, speed]);

  const Track = as;
  const Slide = as === "ul" ? "li" : "div";

  const asCopy = (item: React.ReactNode) =>
    isValidElement(item) && item.type !== Fragment
      ? cloneElement(item as React.ReactElement<Record<string, unknown>>, {
          tabIndex: -1,
          "aria-hidden": true,
        })
      : item;

  return (
    <div
      ref={viewportRef}
      className={
        [
          isActive &&
            "cursor-ns-resize touch-pan-y overflow-hidden select-none [&_a]:cursor-pointer",
          className,
        ]
          .filter(Boolean)
          .join(" ") || undefined
      }
    >
      <Track
        ref={trackRef as React.Ref<HTMLUListElement & HTMLDivElement>}
        className={trackClassName}
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
