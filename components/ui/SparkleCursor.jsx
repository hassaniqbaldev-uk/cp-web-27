"use client";

import { useEffect, useRef, useState } from "react";

const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";

const ACTIVE_CLASS = "has-sparkle-cursor";

const ARROW_OUTLINE = [
  [0, 0],
  [0, 17],
  [4.2, 13.2],
  [7.2, 19.8],
  [9.8, 18.7],
  [6.9, 12.3],
  [12.2, 12.3],
];

const ARROW = {
  scale: 1.35,
  pitch: 1.8,
  size: 1.4,
  jitter: 0.35,
};

const SETTINGS = {
  restRate: 50,

  moveRate: 0.22,

  minSpeed: 6,
  maxSpeed: 10,

  minLife: 450,
  maxLife: 1000,

  minSize: 1.5,
  maxSize: 2.6,

  maxSparkles: 260,

  labelX: 8,
  labelGap: 6,

  fade: 0.2,
};

const toRgb = (hex) => [
  parseInt(hex.slice(1, 3), 16),
  parseInt(hex.slice(3, 5), 16),
  parseInt(hex.slice(5, 7), 16),
];

const mix = (from, to, t) =>
  `rgb(${from.map((c, i) => Math.round(c + (to[i] - c) * t)).join(",")})`;

const between = (min, max) => min + Math.random() * (max - min);

const isInside = (x, y, outline) => {
  let inside = false;

  for (let i = 0, j = outline.length - 1; i < outline.length; j = i++) {
    const [xi, yi] = outline[i];
    const [xj, yj] = outline[j];

    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }

  return inside;
};

const buildArrow = (from, to) => {
  const outline = ARROW_OUTLINE.map(([x, y]) => [
    x * ARROW.scale,
    y * ARROW.scale,
  ]);

  const width = Math.max(...outline.map(([x]) => x));
  const height = Math.max(...outline.map(([, y]) => y));

  const particles = [];

  for (let y = ARROW.pitch / 2; y < height; y += ARROW.pitch) {
    for (let x = ARROW.pitch / 2; x < width; x += ARROW.pitch) {
      if (!isInside(x, y, outline)) continue;

      particles.push({
        x,
        y,
        color: mix(from, to, Math.min(1, (x + y) / (width + height))),
        phase: Math.random() * Math.PI * 2,
        twinkle: between(3, 7),
      });
    }
  }

  return { particles, height };
};

export default function SparkleCursor({
  label,
  labelClassName = "bg-blue text-white",
  arrowFrom = "#3078FF",
  arrowTo = "#7AA8FF",
  sparkleFrom = "#3078FF",
  sparkleTo = "#A9C8FF",
}) {
  const [isEnabled, setIsEnabled] = useState(false);

  const canvasRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia(FINE_POINTER_QUERY);

    const sync = () => setIsEnabled(fine.matches);

    sync();

    fine.addEventListener("change", sync);

    return () => {
      fine.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const pill = labelRef.current;
    const context = canvas?.getContext("2d");

    if (!isEnabled || !canvas || !context) return;

    const root = document.documentElement;
    root.classList.add(ACTIVE_CLASS);

    const arrow = buildArrow(toRgb(arrowFrom), toRgb(arrowTo));
    const sparkleStart = toRgb(sparkleFrom);
    const sparkleEnd = toRgb(sparkleTo);

    let sparkles = [];
    let frame = 0;
    let lastTime = 0;
    let clock = 0;

    const tip = { x: 0, y: 0 };
    let hasPosition = false;
    let isPointerInside = false;

    let visibility = 0;

    let pending = 0;
    let moved = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = () => {
      const seat =
        arrow.particles[Math.floor(Math.random() * arrow.particles.length)];
      const heading = Math.random() * Math.PI * 2;
      const speed = between(SETTINGS.minSpeed, SETTINGS.maxSpeed);

      sparkles.push({
        x: tip.x + seat.x,
        y: tip.y + seat.y,
        vx: Math.cos(heading) * speed,
        vy: Math.sin(heading) * speed,
        age: 0,
        life: between(SETTINGS.minLife, SETTINGS.maxLife),
        size: between(SETTINGS.minSize, SETTINGS.maxSize),
        color: mix(sparkleStart, sparkleEnd, Math.random()),
        twinkle: between(10, 22),
        phase: Math.random() * Math.PI * 2,
      });
    };

    const animate = (now) => {
      frame = requestAnimationFrame(animate);

      const elapsed = lastTime ? Math.min(now - lastTime, 64) : 16.67;
      lastTime = now;
      clock += elapsed / 1000;

      const frames = elapsed / (1000 / 60);

      visibility +=
        ((isPointerInside ? 1 : 0) - visibility) *
        (1 - Math.pow(1 - SETTINGS.fade, frames));

      if (hasPosition && isPointerInside) {
        pending +=
          (SETTINGS.restRate * elapsed) / 1000 + moved * SETTINGS.moveRate;
        moved = 0;

        while (pending >= 1 && sparkles.length < SETTINGS.maxSparkles) {
          spawn();
          pending -= 1;
        }

        pending = Math.min(pending, 1);
      }

      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      sparkles = sparkles.filter((sparkle) => {
        sparkle.age += elapsed;

        if (sparkle.age >= sparkle.life) return false;

        sparkle.x += (sparkle.vx * elapsed) / 1000;
        sparkle.y += (sparkle.vy * elapsed) / 1000;

        const fade = 1 - sparkle.age / sparkle.life;
        const flicker =
          0.55 +
          0.45 *
            Math.sin((sparkle.age / 1000) * sparkle.twinkle + sparkle.phase);

        context.globalAlpha = fade * flicker;
        context.fillStyle = sparkle.color;
        context.fillRect(
          sparkle.x - sparkle.size / 2,
          sparkle.y - sparkle.size / 2,
          sparkle.size,
          sparkle.size,
        );

        return true;
      });

      if (hasPosition && visibility > 0.01) {
        for (const particle of arrow.particles) {
          const wave = Math.sin(clock * particle.twinkle + particle.phase);

          context.globalAlpha = visibility * (0.7 + 0.3 * wave);
          context.fillStyle = particle.color;
          context.fillRect(
            tip.x + particle.x + ARROW.jitter * wave - ARROW.size / 2,
            tip.y +
              particle.y +
              ARROW.jitter * Math.cos(clock * particle.twinkle) -
              ARROW.size / 2,
            ARROW.size,
            ARROW.size,
          );
        }
      }

      context.globalAlpha = 1;

      if (pill) {
        pill.style.transform = `translate3d(${tip.x + SETTINGS.labelX}px, ${
          tip.y + arrow.height + SETTINGS.labelGap
        }px, 0)`;
      }
    };

    const show = (isVisible) => {
      isPointerInside = isVisible;
      if (pill) pill.style.opacity = isVisible ? "1" : "0";
    };

    const onPointerMove = (event) => {
      if (event.pointerType !== "mouse") return;

      if (hasPosition) {
        moved += Math.hypot(event.clientX - tip.x, event.clientY - tip.y);
      }

      tip.x = event.clientX;
      tip.y = event.clientY;
      hasPosition = true;

      show(true);
    };

    const onPointerOut = (event) => {
      if (!event.relatedTarget) show(false);
    };

    const onVisibilityChange = () => {
      cancelAnimationFrame(frame);
      lastTime = 0;

      if (!document.hidden) frame = requestAnimationFrame(animate);
    };

    resize();
    frame = requestAnimationFrame(animate);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerout", onPointerOut);
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      cancelAnimationFrame(frame);
      root.classList.remove(ACTIVE_CLASS);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [isEnabled, arrowFrom, arrowTo, sparkleFrom, sparkleTo]);

  if (!isEnabled) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[10000] h-full w-full"
      />

      {label && (
        <span
          ref={labelRef}
          className={`pointer-events-none fixed top-0 left-0 z-[10000] rounded-full px-[12px] py-[5px] text-[12px] font-bold tracking-[-0.02em] whitespace-nowrap opacity-0 transition-opacity duration-300 will-change-transform ${labelClassName}`}
        >
          {label}
        </span>
      )}
    </>
  );
}
