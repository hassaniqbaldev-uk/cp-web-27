"use client";

import { useEffect, useRef } from "react";

// Stars per square pixel, capped so a very wide screen does not pay for
// thousands of draws it will never visibly benefit from.
const DENSITY = 0.0075;
const MAX_STARS = 1400;

const MIN_SIZE = 0.4;
const MAX_SIZE = 1;

// Each star oscillates across this range on its own clock, which is what makes
// the field sparkle rather than sit still.
const MIN_OPACITY = 0.1;
const MAX_OPACITY = 1;

// Pixels per second.
const MIN_SPEED = 6;
const MAX_SPEED = 26;

type Star = {
  /**
   * Fractions of the canvas, 0–1, not pixels. A canvas measures 300x150 until
   * CSS lands, so pixel positions seeded at that moment would leave the whole
   * field crammed into a band at one edge. Fractions stay correct at any size.
   */
  x: number;
  y: number;
  radius: number;
  twinkleSpeed: number;
  phase: number;
  vx: number;
  vy: number;
};

const between = (min: number, max: number) => min + Math.random() * (max - min);

/**
 * Averaging two uniform randoms gives a triangular distribution: still 0–1, but
 * clustered around the middle and thinning towards the edges. Cheaper and
 * smoother than rejection-sampling a circle.
 */
const centred = () => (Math.random() + Math.random()) / 2;

export default function Starfield({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let previousTime = 0;
    let clock = 0;
    let inView = true;

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "#ffffff";

      for (const star of stars) {
        // Sampled from each star's own phase, so the field shimmers out of
        // sync. Held at full brightness when motion is off, so it reads as a
        // clean static sky rather than frozen mid-fade.
        const wave = reducedMotion.matches
          ? 1
          : 0.5 + 0.5 * Math.sin(clock * star.twinkleSpeed + star.phase);

        context.globalAlpha = MIN_OPACITY + (MAX_OPACITY - MIN_OPACITY) * wave;
        context.beginPath();
        context.arc(
          star.x * width,
          star.y * height,
          star.radius,
          0,
          Math.PI * 2,
        );
        context.fill();
      }

      context.globalAlpha = 1;
    };

    const step = (delta: number) => {
      for (const star of stars) {
        // Velocities are pixels per second, so they divide back down into the
        // same 0–1 space the positions live in.
        star.x += (star.vx * delta) / width;
        star.y += (star.vy * delta) / height;

        // Wraps on every edge rather than respawning at a fixed one, so a
        // field drifting in all directions never thins out on any side.
        if (star.x < 0) star.x = 1;
        if (star.x > 1) star.x = 0;
        if (star.y < 0) star.y = 1;
        if (star.y > 1) star.y = 0;
      }
    };

    const schedule = () => {
      if (frame || reducedMotion.matches || !inView || document.hidden) return;

      frame = window.requestAnimationFrame(animate);
    };

    function animate(now: number) {
      frame = 0;

      // Clamped so returning to a backgrounded tab does not jump the field
      // forward by however long it was away.
      const elapsed = previousTime ? Math.min(now - previousTime, 64) : 16.67;

      previousTime = now;
      clock += elapsed / 1000;

      step(elapsed / 1000);
      draw();
      schedule();
    }

    const build = () => {
      const rect = canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      if (!width || !height) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(MAX_STARS, Math.round(width * height * DENSITY));

      // Only reseeded when the count actually changes, so a resize does not
      // visibly reshuffle the whole sky.
      if (stars.length === count) {
        draw();
        schedule();
        return;
      }

      stars = Array.from({ length: count }, () => {
        // Any direction rather than a shared flow, so the field drifts like
        // dust instead of scrolling.
        const angle = Math.random() * Math.PI * 2;
        const speed = between(MIN_SPEED, MAX_SPEED);

        return {
          x: centred(),
          y: centred(),
          radius: between(MIN_SIZE, MAX_SIZE),
          twinkleSpeed: between(1.5, 4.5),
          phase: Math.random() * Math.PI * 2,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
        };
      });

      draw();
      schedule();
    };

    const restart = () => {
      window.cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
      draw();
      schedule();
    };

    const resizeObserver = new ResizeObserver(build);
    resizeObserver.observe(canvas);

    const intersectionObserver =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver((entries) => {
            inView = entries[0]?.isIntersecting ?? true;

            if (inView) {
              previousTime = 0;
              schedule();
            } else {
              window.cancelAnimationFrame(frame);
              frame = 0;
            }
          })
        : null;

    intersectionObserver?.observe(canvas);

    reducedMotion.addEventListener("change", restart);
    document.addEventListener("visibilitychange", restart);

    build();

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver?.disconnect();
      reducedMotion.removeEventListener("change", restart);
      document.removeEventListener("visibilitychange", restart);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
    />
  );
}
