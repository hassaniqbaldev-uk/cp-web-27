"use client";

import { motion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";

type RGB = [number, number, number];

type SourcePath = {
  d: string;
  color: RGB;
};

type RuntimePath = SourcePath & {
  shape: Path2D;
};

type Particle = {
  x: number;
  y: number;
  color: RGB;
  palette: string[];
  influence: number;
  dx: number;
  dy: number;
  vx: number;
  vy: number;
  ax: number;
  ay: number;
  alpha: number;
  phase: number;
  phaseY: number;
  pace: number;
  twinkle: number;
  amplitude: number;
  spreadAngle: number;
};

const SETTINGS = Object.freeze({
  pixelSize: 2,
  gap: 4,
  padding: 72,
  spring: 175,
  damping: 18,
  maxDisplacement: 54,
  ambientAmplitude: 3.6,
  neutral: [245, 247, 250] as RGB,
  interactionRadius: 125,
  fadeDuration: 650,
  opacity: 0.82,
  maxScale: 1.8,
});

const VIEWBOX = {
  x: 0,
  y: 0,
  width: 439,
  height: 460,
};

const SOURCE_PATHS: SourcePath[] = [
  {
    d: "M62.1721 258.228C48.1935 235.309 40.825 208.538 41.0688 181.219C41.0688 138.69 56.456 103.176 87.2576 74.7077C110.23 53.4572 137.483 40.1144 169.043 34.7371V0C120.958 0.258803 80.8101 17.2823 48.654 51.0417C16.227 85.0599 0 127.504 0 178.344C0 211.931 7.42272 242.613 22.214 270.334C36.5989 297.594 57.7293 320.139 83.3024 335.552C109.038 351.253 137.591 359.103 168.989 359.19V329.744C152.003 326.753 135.559 321.059 120.172 312.835C95.6014 299.636 76.259 281.434 62.1721 258.228Z",
    color: [255, 228, 0],
  },
  {
    d: "M111.53 245.748C95.7098 227.718 87.7994 205.432 87.7994 178.948C87.7994 152.464 95.6014 130.408 111.205 112.781C126.701 95.2682 145.962 86.4401 169.07 86.3251V34.7371C137.537 40.1432 110.257 53.4572 87.2847 74.7077C56.5102 103.176 41.0959 138.69 41.0959 181.219C40.8792 208.538 48.2206 235.309 62.2262 258.228C76.2861 281.434 95.6285 299.636 120.226 312.806C135.587 321.031 152.03 326.724 169.016 329.715V272.778C146.341 272.663 127.189 263.663 111.53 245.748Z",
    color: [236, 145, 34],
  },
  {
    d: "M369.484 82.0405C385.169 101.106 395.192 124.657 398.335 149.732C403.59 188.754 393.838 223.462 369.131 253.886C350.683 276.574 327.304 292.591 299.022 301.908L303.302 333.769C347.432 326.839 382.135 305.675 407.491 270.248C433.01 234.504 442.627 193.326 436.342 146.626C432.197 115.8 421.632 88.6831 404.62 65.3046C388.067 42.2999 365.908 24.5287 340.551 13.9466C315.032 3.16314 287.834 -0.115021 258.983 4.1696L262.613 31.2289C278.569 31.6027 294.389 34.5646 309.506 39.9419C333.724 48.6837 353.717 62.7166 369.484 82.0405Z",
    color: [236, 53, 147],
  },
  {
    d: "M325.814 100.329C342.556 114.707 352.552 134.031 355.803 158.33C359.054 182.6 354.611 203.937 342.475 222.312C330.419 240.514 313.786 251.298 292.601 254.633L298.968 301.908C327.25 292.562 350.602 276.574 369.077 253.886C393.811 223.491 403.536 188.754 398.308 149.732C395.138 124.628 385.115 101.106 369.456 82.0405C353.663 62.6878 333.67 48.6837 309.506 39.9994C294.389 34.5933 278.569 31.6602 262.613 31.2864L269.629 83.4783C290.461 80.4589 309.208 86.0951 325.814 100.329Z",
    color: [177, 31, 128],
  },
  {
    d: "M259.95 4.46079L194.403 14.3842L254.221 459.572L319.767 449.648L259.95 4.46079Z",
    color: [236, 53, 147],
  },
];

function randomFor(x: number, y: number, salt: number) {
  const n = Math.sin(x * 127.1 + y * 311.7 + salt * 73.9) * 43758.5453;
  return n - Math.floor(n);
}

function paletteFor(color: RGB, cache: Map<string, string[]>) {
  const key = color.join(",");
  const cached = cache.get(key);
  if (cached) return cached;

  const maximum = Math.max(...color);
  const minimum = Math.min(...color);
  const saturation =
    maximum === 0 ? 0 : Math.min(1, ((maximum - minimum) / maximum) * 1.28);
  const value = Math.min(255, maximum * 1.4);

  const vivid = color.map(
    (channel) =>
      value *
      (1 - (saturation * (maximum - channel)) / (maximum - minimum || 1)),
  ) as RGB;

  const table = Array.from({ length: 129 }, (_, i) => {
    const t = i / 128;
    const rgb = SETTINGS.neutral.map((neutral, channelIndex) =>
      Math.round(neutral + (vivid[channelIndex] - neutral) * t),
    );

    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
  });

  cache.set(key, table);
  return table;
}

export default function SparkleLogo({
  className = "",
}: {
  className?: string;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);
  // Only set when the canvas cannot run, so the static SVG has to stand in.
  const [fallback, setFallback] = useState(false);

  const reactId = useId().replace(/:/g, "");
  const patternId = `cp-dot-grid-${reactId}`;
  const maskId = `cp-silhouette-${reactId}`;

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;

    if (
      !host ||
      !canvas ||
      typeof Path2D === "undefined" ||
      typeof ResizeObserver === "undefined"
    ) {
      setFallback(true);
      return;
    }

    const context = canvas.getContext("2d");
    const hitContext = document.createElement("canvas").getContext("2d");

    if (!context || !hitContext) {
      setFallback(true);
      return;
    }

    const paths: RuntimePath[] = SOURCE_PATHS.map((path) => ({
      ...path,
      shape: new Path2D(path.d),
    }));

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const colorTables = new Map<string, string[]>();
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let previousTime = 0;
    let inView = true;
    let ambientTime = 0;

    const pointer = {
      x: Number.NEGATIVE_INFINITY,
      y: Number.NEGATIVE_INFINITY,
      active: false,
      onLogo: false,
    };

    const ambient = (dot: Particle) => {
      if (reducedMotion.matches) {
        dot.ax = 0;
        dot.ay = 0;
        dot.alpha = SETTINGS.opacity;
        return;
      }

      const t = ambientTime * dot.pace;
      dot.ax =
        dot.amplitude *
        (0.75 * Math.sin(t + dot.phase) +
          0.25 * Math.sin(t * 0.61 + dot.phaseY));
      dot.ay =
        dot.amplitude *
        (0.75 * Math.sin(t * 0.83 + dot.phaseY) +
          0.25 * Math.cos(t * 0.57 + dot.phase));

      const shimmer =
        0.5 + 0.5 * Math.sin(ambientTime * dot.twinkle + dot.phase);
      dot.alpha = 0.26 + 0.66 * shimmer * shimmer;
    };

    const draw = () => {
      const pad = SETTINGS.padding;

      context.clearRect(-pad, -pad, width + pad * 2, height + pad * 2);

      for (const dot of particles) {
        ambient(dot);

        const blend = dot.influence;
        context.fillStyle = dot.palette[Math.round(blend * 128)];
        context.globalAlpha = dot.alpha + (1 - dot.alpha) * blend;

        const size = SETTINGS.pixelSize * (1 + (SETTINGS.maxScale - 1) * blend);

        context.fillRect(
          dot.x + dot.ax + dot.dx - size / 2,
          dot.y + dot.ay + dot.dy - size / 2,
          size,
          size,
        );
      }

      context.globalAlpha = 1;
    };

    const colorAt = (x: number, y: number): RGB | null => {
      const scale = Math.min(width / VIEWBOX.width, height / VIEWBOX.height);

      const sx = (x - (width - VIEWBOX.width * scale) / 2) / scale + VIEWBOX.x;
      const sy =
        (y - (height - VIEWBOX.height * scale) / 2) / scale + VIEWBOX.y;

      for (let i = paths.length - 1; i >= 0; i -= 1) {
        if (hitContext.isPointInPath(paths[i].shape, sx, sy)) {
          return paths[i].color;
        }
      }

      return null;
    };

    const schedule = () => {
      if (!frame && !reducedMotion.matches && inView && !document.hidden) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    const rebuild = () => {
      const bounds = host.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;

      if (!width || !height) return;

      window.cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const pad = SETTINGS.padding;
      const canvasWidth = width + pad * 2;
      const canvasHeight = height + pad * 2;

      canvas.width = Math.round(canvasWidth * dpr);
      canvas.height = Math.round(canvasHeight * dpr);

      const rx = canvas.width / canvasWidth;
      const ry = canvas.height / canvasHeight;

      context.setTransform(rx, 0, 0, ry, pad * rx, pad * ry);

      const step = SETTINGS.pixelSize + SETTINGS.gap;
      const startX =
        SETTINGS.pixelSize / 2 +
        Math.floor(((width - SETTINGS.pixelSize) % step) / 2);
      const startY =
        SETTINGS.pixelSize / 2 +
        Math.floor(((height - SETTINGS.pixelSize) % step) / 2);

      particles = [];

      for (let y = startY; y <= height - SETTINGS.pixelSize / 2; y += step) {
        for (let x = startX; x <= width - SETTINGS.pixelSize / 2; x += step) {
          const color = colorAt(x, y);
          if (!color) continue;

          const interior = [
            [4, 0],
            [-4, 0],
            [0, 4],
            [0, -4],
          ].every(([ox, oy]) => colorAt(x + ox, y + oy));

          particles.push({
            x,
            y,
            color,
            palette: paletteFor(color, colorTables),
            influence: 0,
            dx: 0,
            dy: 0,
            vx: 0,
            vy: 0,
            ax: 0,
            ay: 0,
            alpha: SETTINGS.opacity,
            phase: randomFor(x, y, 1) * Math.PI * 2,
            phaseY: randomFor(x, y, 2) * Math.PI * 2,
            pace: 1.4 + randomFor(x, y, 3) * 1.2,
            twinkle: (Math.PI * 2) / (1.8 + randomFor(x, y, 4) * 1.8),
            amplitude: interior
              ? SETTINGS.ambientAmplitude * (0.65 + randomFor(x, y, 5) * 0.35)
              : 0.85,
            spreadAngle: randomFor(x, y, 6) * Math.PI * 2,
          });
        }
      }

      pointer.active = false;
      draw();
      setReady(true);
      schedule();
    };

    function animate(now: number) {
      frame = 0;

      const elapsed = previousTime ? Math.min(now - previousTime, 64) : 16.67;

      previousTime = now;
      ambientTime += elapsed / 1000;

      const smoothing = 1 - Math.exp((-4 * elapsed) / SETTINGS.fadeDuration);
      const radius = Math.min(SETTINGS.interactionRadius, width * 0.28);

      const steps = Math.ceil(elapsed / (1000 / 120));
      const dt = elapsed / 1000 / steps;

      for (const dot of particles) {
        let target = 0;
        let targetX = 0;
        let targetY = 0;

        if (pointer.active) {
          const dx = pointer.x - dot.x - dot.ax;
          const dy = pointer.y - dot.y - dot.ay;
          const distance = Math.hypot(dx, dy);

          if (distance < radius) {
            const t = 1 - distance / radius;
            const weight = t * t * (3 - 2 * t);

            const colorDistance = Math.hypot(dx - dot.dx, dy - dot.dy);
            const colorT = Math.max(0, 1 - colorDistance / radius);
            const colorWeight = colorT * colorT * (3 - 2 * colorT);

            target = 1 - Math.pow(1 - colorWeight, 3);

            if (pointer.onLogo) {
              const pop = (22 * weight) / Math.max(distance, 1);
              targetX = dx * weight * 0.65 - dx * pop;
              targetY = dy * weight * 0.65 - dy * pop - 11 * weight;
            } else {
              targetX =
                dx * weight * 1.7 + Math.cos(dot.spreadAngle) * 7 * weight;
              targetY =
                dy * weight * 1.7 + Math.sin(dot.spreadAngle) * 7 * weight;
            }

            const length = Math.hypot(targetX, targetY);
            if (length > SETTINGS.maxDisplacement) {
              targetX *= SETTINGS.maxDisplacement / length;
              targetY *= SETTINGS.maxDisplacement / length;
            }
          }
        }

        const colorSmoothing =
          target > dot.influence ? 1 - Math.exp(-elapsed / 90) : smoothing;

        dot.influence += (target - dot.influence) * colorSmoothing;

        if (Math.abs(target - dot.influence) < 0.005) {
          dot.influence = target;
        }

        for (let i = 0; i < steps; i += 1) {
          dot.vx +=
            (SETTINGS.spring * (targetX - dot.dx) - SETTINGS.damping * dot.vx) *
            dt;
          dot.vy +=
            (SETTINGS.spring * (targetY - dot.dy) - SETTINGS.damping * dot.vy) *
            dt;

          dot.dx += dot.vx * dt;
          dot.dy += dot.vy * dt;
        }

        if (
          Math.hypot(dot.dx - targetX, dot.dy - targetY) < 0.008 &&
          Math.hypot(dot.vx, dot.vy) < 0.04
        ) {
          dot.dx = targetX;
          dot.dy = targetY;
          dot.vx = 0;
          dot.vy = 0;
        }
      }

      draw();
      schedule();
    }

    const leave = () => {
      pointer.active = false;
      schedule();
    };

    const reset = () => {
      window.cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
      pointer.active = false;

      particles.forEach((dot) => {
        dot.influence = 0;
        dot.dx = 0;
        dot.dy = 0;
        dot.vx = 0;
        dot.vy = 0;
      });

      draw();
      schedule();
    };

    let activeTouchPointerId: number | null = null;

    const updatePointerFromEvent = (event: PointerEvent) => {
      const bounds = host.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const radius = Math.min(SETTINGS.interactionRadius, width * 0.28);

      const near =
        x > -radius && x < width + radius && y > -radius && y < height + radius;

      if (!near && !pointer.active) return;

      pointer.x = x;
      pointer.y = y;

      // For an active touch/pen drag, keep the interaction alive even if the
      // finger briefly moves outside the normal hover radius.
      pointer.active = activeTouchPointerId === event.pointerId ? true : near;

      pointer.onLogo = near && colorAt(x, y) !== null;
      schedule();
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (reducedMotion.matches || !inView) return;

      // Mouse keeps the original hover behavior. Touch and pen become a
      // captured drag gesture that behaves like desktop hover.
      if (event.pointerType === "touch" || event.pointerType === "pen") {
        activeTouchPointerId = event.pointerId;

        if (host.setPointerCapture) {
          host.setPointerCapture(event.pointerId);
        }

        updatePointerFromEvent(event);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (reducedMotion.matches || !inView) return;

      if (
        (event.pointerType === "touch" || event.pointerType === "pen") &&
        activeTouchPointerId !== event.pointerId
      ) {
        return;
      }

      updatePointerFromEvent(event);
    };

    const finishTouchInteraction = (event: PointerEvent) => {
      if (
        (event.pointerType === "touch" || event.pointerType === "pen") &&
        activeTouchPointerId === event.pointerId
      ) {
        if (
          host.releasePointerCapture &&
          host.hasPointerCapture?.(event.pointerId)
        ) {
          host.releasePointerCapture(event.pointerId);
        }

        activeTouchPointerId = null;
        leave();
      }
    };

    const handlePointerUp = (event: PointerEvent) => {
      finishTouchInteraction(event);
    };

    const handlePointerCancel = (event: PointerEvent) => {
      finishTouchInteraction(event);
    };

    const resizeObserver = new ResizeObserver(rebuild);
    resizeObserver.observe(host);

    const intersectionObserver =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver((entries) => {
            inView = entries[0]?.isIntersecting ?? true;

            if (!inView) {
              reset();
            } else {
              schedule();
            }
          })
        : null;

    intersectionObserver?.observe(host);

    host.addEventListener("pointerdown", handlePointerDown, {
      passive: true,
    });
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    document.documentElement.addEventListener("pointerleave", leave, {
      passive: true,
    });
    window.addEventListener("pointercancel", handlePointerCancel, {
      passive: true,
    });
    window.addEventListener("pointerup", handlePointerUp, {
      passive: true,
    });
    window.addEventListener("blur", leave);
    window.addEventListener("scroll", leave, { passive: true });
    window.addEventListener("resize", rebuild, { passive: true });
    reducedMotion.addEventListener("change", reset);
    document.addEventListener("visibilitychange", reset);

    rebuild();

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver?.disconnect();

      host.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", leave);
      window.removeEventListener("pointercancel", handlePointerCancel);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("blur", leave);
      window.removeEventListener("scroll", leave);
      window.removeEventListener("resize", rebuild);
      reducedMotion.removeEventListener("change", reset);
      document.removeEventListener("visibilitychange", reset);
    };
  }, []);

  return (
    <motion.div
      ref={hostRef}
      role="img"
      aria-label="CP logo formed from square pixels with a four-pixel gap"
      className={[
        "relative isolate aspect-[439/460] touch-none select-none",
        "w-[min(560px,calc(100vw-96px),calc((100svh-96px)*439/460))]",
        className,
      ].join(" ")}
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* The SVG is a stand-in, not part of the reveal: painting it would
          show the finished logo as grey dots before the particles appear.
          It is hidden unless scripting is off (the rule below, which sits
          outside Tailwind's layers and so wins over opacity-0) or the canvas
          could not start. */}
      <noscript>
        <style>{`.cp-logo-fallback{opacity:1}`}</style>
      </noscript>

      <svg
        aria-hidden="true"
        className={[
          "cp-logo-fallback block h-full w-full",
          fallback ? "opacity-100" : "opacity-0",
        ].join(" ")}
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={patternId}
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="2" height="2" fill="#E5E7EB" />
          </pattern>

          <mask
            id={maskId}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="100%"
            height="100%"
            style={{ maskType: "alpha" }}
          >
            <svg width="100%" height="100%" viewBox="0 0 439 460">
              {SOURCE_PATHS.map((path, index) => (
                <path key={index} d={path.d} fill="white" />
              ))}
            </svg>
          </mask>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill={`url(#${patternId})`}
          mask={`url(#${maskId})`}
          opacity="0.82"
        />
      </svg>

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={[
          "pointer-events-none absolute -top-[72px] -left-[72px]",
          "h-[calc(100%+144px)] w-[calc(100%+144px)]",
          ready ? "visible" : "invisible",
        ].join(" ")}
      />
    </motion.div>
  );
}
