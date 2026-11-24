"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Children, useRef } from "react";

const PIXELS_PER_SECOND = 40;

const AXIS_SLOP = 8;

const THROW_REACH = 0.3;

const THROW_DURATION = 0.9;

// Circular version of DragMarquee: slides sit on a wheel that turns slowly and
// can be dragged or thrown. `step` is the angle between slides and should
// divide 360 so the repeated slides fill the wheel without a seam. Only the
// slides take the pointer, so the empty space around them isn't draggable.
export default function DragWheel({
  children,
  radius,
  step = 30,
  startIndex = 0,
  centerY,
  speed = PIXELS_PER_SECOND,
  pauseOnHover = false,
  className = "",
  wheelClassName = "",
}) {
  const viewportRef = useRef(null);
  const wheelRef = useRef(null);

  const items = Children.toArray(children);
  const total = Math.round(360 / step);

  useGSAP(
    () => {
      const viewport = viewportRef.current;
      const wheel = wheelRef.current;

      if (!viewport || !wheel) return;

      const setRotation = gsap.quickSetter(wheel, "rotation", "deg");
      const toDegrees = (pixels) => (pixels / radius) * (180 / Math.PI);

      const canHover = window.matchMedia("(hover: hover)").matches;
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const throwState = { travelled: 0 };

      let rotation = 0;
      let pointerId = null;
      let slide = null;
      let axis = "pending";
      let startX = 0;
      let startY = 0;
      let lastX = 0;
      let lastAt = 0;
      let velocity = 0;
      let isHovered = false;
      let isThrowing = false;

      const turnBy = (pixels) => {
        rotation = (rotation + toDegrees(pixels)) % 360;
        setRotation(rotation);
      };

      const tick = (time, deltaTime) => {
        if (reducedMotion || pointerId !== null || isThrowing) return;
        if (pauseOnHover && isHovered) return;

        turnBy((-speed * deltaTime) / 1000);
      };

      gsap.ticker.add(tick);

      const onPointerDown = (event) => {
        if (pointerId !== null || !event.isPrimary || event.button !== 0) {
          return;
        }

        gsap.killTweensOf(throwState);
        isThrowing = false;

        pointerId = event.pointerId;
        slide = event.target.closest("li");
        axis = event.pointerType === "mouse" ? "x" : "pending";
        startX = event.clientX;
        startY = event.clientY;
        lastX = event.clientX;
        lastAt = event.timeStamp;
        velocity = 0;

        if (axis === "x") slide.setPointerCapture(pointerId);
      };

      const onPointerMove = (event) => {
        if (event.pointerId !== pointerId) return;

        if (axis === "pending") {
          const dx = Math.abs(event.clientX - startX);
          const dy = Math.abs(event.clientY - startY);

          if (Math.max(dx, dy) < AXIS_SLOP) return;

          if (dy >= dx) {
            pointerId = null;
            return;
          }

          axis = "x";
          slide.setPointerCapture(pointerId);
          lastX = event.clientX;
          lastAt = event.timeStamp;
        }

        const delta = event.clientX - lastX;
        const elapsed = event.timeStamp - lastAt;

        turnBy(delta);

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

        if (!wasDragging || held || !velocity) return;

        let applied = 0;

        throwState.travelled = 0;
        isThrowing = true;

        gsap.to(throwState, {
          travelled: velocity * THROW_REACH,
          duration: THROW_DURATION,
          ease: "power2.out",
          onUpdate() {
            turnBy(throwState.travelled - applied);
            applied = throwState.travelled;
          },
          onComplete() {
            isThrowing = false;
          },
        });
      };

      const onEnter = () => {
        isHovered = true;
      };

      const onLeave = () => {
        isHovered = false;
      };

      viewport.addEventListener("pointerdown", onPointerDown);
      viewport.addEventListener("pointermove", onPointerMove);
      viewport.addEventListener("pointerup", onPointerUp);
      viewport.addEventListener("pointercancel", onPointerUp);

      if (pauseOnHover && canHover) {
        viewport.addEventListener("mouseenter", onEnter);
        viewport.addEventListener("mouseleave", onLeave);
      }

      return () => {
        gsap.ticker.remove(tick);
        gsap.killTweensOf(throwState);
        viewport.removeEventListener("pointerdown", onPointerDown);
        viewport.removeEventListener("pointermove", onPointerMove);
        viewport.removeEventListener("pointerup", onPointerUp);
        viewport.removeEventListener("pointercancel", onPointerUp);
        viewport.removeEventListener("mouseenter", onEnter);
        viewport.removeEventListener("mouseleave", onLeave);
      };
    },
    {
      dependencies: [radius, speed, pauseOnHover],
      scope: viewportRef,
      revertOnUpdate: true,
    },
  );

  return (
    <div
      ref={viewportRef}
      className={`pointer-events-none relative overflow-hidden select-none ${className}`}
    >
      <div className={`absolute inset-0 ${wheelClassName}`}>
        <ul
          ref={wheelRef}
          className="absolute left-1/2 size-0 will-change-transform"
          style={{ top: centerY + radius }}
        >
          {Array.from({ length: total }, (_, index) => (
            <li
              key={index}
              aria-hidden={index >= items.length || undefined}
              className="pointer-events-auto absolute top-0 left-0 cursor-grab touch-pan-y active:cursor-grabbing"
              style={{
                transform: `translate(-50%, -50%) rotate(${(index - startIndex) * step}deg) translateY(${-radius}px)`,
              }}
            >
              {items[index % items.length]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
