"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Children,
  cloneElement,
  Fragment,
  isValidElement,
  useRef,
  useState,
} from "react";

const PIXELS_PER_SECOND = 60;

const SCREENFULS = 2;

const AXIS_SLOP = 8;

const THROW_DURATION = 0.9;

const THROW_REACH = 0.3;

export default function DragMarquee({
  children,
  className = "",
  trackClassName = "",
  slideClassName = "",
  as = "ul",
  speed = PIXELS_PER_SECOND,
  pauseOnHover = false,
}) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const items = Children.toArray(children);
  const count = items.length;
  const [passes, setPasses] = useState(1);

  useGSAP(
    () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;

      if (!viewport || !track) {
        setPasses(1);
        return;
      }

      const children = Array.from(track.children);

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

      const wrapTime = gsap.utils.wrap(0, duration);
      const throwState = { travelled: 0 };

      const canHover = window.matchMedia("(hover: hover)").matches;

      let pointerId = null;
      let axis = "pending";
      let startX = 0;
      let startY = 0;
      let lastX = 0;
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

      const isDragging = () => pointerId !== null && axis === "x";

      const resume = () => {
        if (isDragging()) return;
        if (pauseOnHover && isHovered) return;

        tween.play();
      };

      const moveBy = (pixels) => {
        targetTime = wrapTime(targetTime - pixels / speed);
        needsRender = true;
      };

      const hold = () => {
        gsap.killTweensOf(throwState);
        targetTime = tween.time();
        tween.pause();
      };

      const onPointerDown = (event) => {
        if (pointerId !== null || !event.isPrimary) return;

        pointerId = event.pointerId;
        axis = event.pointerType === "mouse" ? "x" : "pending";
        startX = event.clientX;
        startY = event.clientY;
        lastX = event.clientX;
        lastAt = event.timeStamp;
        velocity = 0;

        hold();
      };

      const onPointerMove = (event) => {
        if (event.pointerId !== pointerId) return;

        if (axis === "pending") {
          const dx = Math.abs(event.clientX - startX);
          const dy = Math.abs(event.clientY - startY);

          if (Math.max(dx, dy) < AXIS_SLOP) return;

          axis = dx > dy ? "x" : "y";

          if (axis === "y") {
            pointerId = null;
            resume();
            return;
          }

          viewport.setPointerCapture(event.pointerId);
          lastX = event.clientX;
          lastAt = event.timeStamp;
        }

        if (axis !== "x") return;

        const delta = event.clientX - lastX;
        const elapsed = event.timeStamp - lastAt;

        moveBy(delta);

        if (elapsed > 0) velocity = (delta / elapsed) * 1000;

        lastX = event.clientX;
        lastAt = event.timeStamp;
      };

      const onPointerUp = (event) => {
        if (event.pointerId !== pointerId) return;

        const wasDragging = axis === "x";
        const held = event.timeStamp - lastAt > 120;

        pointerId = null;
        axis = "pending";

        if (!wasDragging) {
          resume();
          return;
        }

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
    },
    {
      dependencies: [count, passes, pauseOnHover, speed],
      scope: viewportRef,
      revertOnUpdate: true,
    },
  );

  const Track = as;
  const Slide = as === "ul" ? "li" : "div";

  const asCopy = (item) =>
    isValidElement(item) && item.type !== Fragment
      ? cloneElement(item, {})
      : item;

  return (
    <div
      ref={viewportRef}
      className={[
        "cursor-grab touch-pan-y overflow-hidden select-none active:cursor-grabbing [&_a]:cursor-pointer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Track ref={trackRef} className={trackClassName}>
        {Array.from({ length: passes }, (_, pass) =>
          items.map((item, index) => (
            <Slide
              key={`${pass}-${index}`}
              className={slideClassName}
              {...(pass > 0 && {})}
            >
              {pass > 0 ? asCopy(item) : item}
            </Slide>
          )),
        )}
      </Track>
    </div>
  );
}
