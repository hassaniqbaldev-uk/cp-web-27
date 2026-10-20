"use client";

import { useEffect, useRef } from "react";

const DENSITY = 0.0075;
const MAX_STARS = 1400;

const MIN_SIZE = 0.4;
const MAX_SIZE = 1;

const MIN_OPACITY = 0.1;
const MAX_OPACITY = 1;

const MIN_SPEED = 6;
const MAX_SPEED = 26;

const between = (min, max) => min + Math.random() * (max - min);

const centred = () => (Math.random() + Math.random()) / 2;

export default function Starfield({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    let stars = [];
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
        const wave =
          0.5 + 0.5 * Math.sin(clock * star.twinkleSpeed + star.phase);

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

    const step = (delta) => {
      for (const star of stars) {
        star.x += (star.vx * delta) / width;
        star.y += (star.vy * delta) / height;

        if (star.x < 0) star.x = 1;
        if (star.x > 1) star.x = 0;
        if (star.y < 0) star.y = 1;
        if (star.y > 1) star.y = 0;
      }
    };

    const schedule = () => {
      if (frame || !inView || document.hidden) return;

      frame = window.requestAnimationFrame(animate);
    };

    function animate(now) {
      frame = 0;

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

      if (stars.length === count) {
        draw();
        schedule();
        return;
      }

      stars = Array.from({ length: count }, () => {
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
    document.addEventListener("visibilitychange", restart);

    build();

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver?.disconnect();
      document.removeEventListener("visibilitychange", restart);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className={`pointer-events-none ${className}`} />
  );
}
