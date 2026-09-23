"use client";

import { useEffect, useRef, useState } from "react";

const SETTINGS = {
  /** Side of each square, and the space between them. */
  pixelSize: 2,
  gap: 4,
  /** Slack around the host, so particles pushed outwards are not clipped. */
  padding: 72,
  spring: 175,
  damping: 18,
  maxDisplacement: 54,
  ambientAmplitude: 3.6,
  /** Resting colour; each particle lerps to its own sampled colour on hover. */
  neutral: [245, 247, 250],
  interactionRadius: 175,
  motionRadius: 125,

  /** How long after the last real pointer the field starts driving itself. */
  autoDelay: 1800,

  /** Laps per second of the idle path. Slow, or it reads as a loading state. */
  autoSpeed: 0.1,

  /** How much of the field the idle path covers, per axis. */
  autoReach: 0.34,

  fadeDuration: 650,
  opacity: 0.82,
  maxScale: 1.8,
};

type Particle = {
  x: number;
  y: number;
  vivid: number[];
  /** Spring displacement and its velocity. */
  dx: number;
  dy: number;
  vx: number;
  vy: number;
  /** Ambient drift, which is what keeps the field alive when nothing hovers. */
  ax: number;
  ay: number;
  influence: number;
  alpha: number;
  phase: number;
  phaseY: number;
  pace: number;
  twinkle: number;
  amplitude: number;
  spreadAngle: number;
};

/** Cheap deterministic hash, so a particle's drift is stable across rebuilds. */
const seed = (x: number, y: number, salt: number) => {
  const n = Math.sin(x * 127.1 + y * 311.7 + salt * 73.9) * 43758.5453;
  return n - Math.floor(n);
};

/** Pushes a sampled colour towards its saturated, brighter self. */
const vivid = (color: number[]) => {
  const max = Math.max(...color);
  const min = Math.min(...color);
  const saturation = Math.min(1, ((max - min) / Math.max(max, 1)) * 1.28);
  const value = Math.min(255, max * 1.4);

  return color.map(
    (c) => value * (1 - (saturation * (max - c)) / (max - min || 1)),
  );
};

type ParticleLogoProps = {
  /**
   * Source SVG markup, as paths to fill or as a grid of rects that are already
   * the particles. Paths are sampled offscreen, so their own colour survives.
   */
  svg?: string;
  /**
   * The same, fetched at runtime. Artwork of a thousand rects belongs in a
   * cacheable file rather than inlined into the page's JavaScript.
   */
  svgSrc?: string;
  /**
   * Colour for rect artwork, laid left to right, since a stipple exported flat
   * carries a silhouette but no colour of its own.
   */
  gradientFrom?: string;
  gradientTo?: string;
  /** Names the whole field, which is one image rather than thousands. */
  label: string;
  className?: string;
};

/** "#EC3593" to [236, 53, 147]. */
const toRgb = (hex: string) => [
  parseInt(hex.slice(1, 3), 16),
  parseInt(hex.slice(3, 5), 16),
  parseInt(hex.slice(5, 7), 16),
];

export default function ParticleLogo({
  svg,
  svgSrc,
  gradientFrom = "#EC3593",
  gradientTo = "#FFE400",
  label,
  className = "",
}: ParticleLogoProps) {
  // Whichever form the artwork arrived in, as something CSS can point at.
  const artworkUrl =
    svgSrc ?? `data:image/svg+xml,${encodeURIComponent(svg ?? "")}`;

  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Only set when the field cannot run, so the still artwork has to stand in.
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!host || !canvas || !context) {
      setHasFailed(true);
      return;
    }

    let vx = 0;
    let vy = 0;
    let vw = 0;
    let vh = 0;

    let shapes: { path: Path2D; rule: CanvasFillRule }[] = [];

    // Rect artwork is already sampled: every rect is one particle, so there is
    // no grid to lay over it and nothing to hit test. Laying our own grid on
    // top would catch some rects and miss others, which reads as moire.
    let points: { x: number; y: number }[] = [];
    let occupied = new Set<string>();
    let pitch = 6;

    const from = toRgb(gradientFrom);
    const to = toRgb(gradientTo);

    const key = (x: number, y: number) =>
      `${Math.round(x / pitch)},${Math.round(y / pitch)}`;

    // A throwaway context purely for hit testing, and a second one for reading
    // back pixels — separate because the sampler is resized on every rebuild.
    const mask = document.createElement("canvas").getContext("2d");
    const sampling = document.createElement("canvas");
    const sampler = sampling.getContext("2d", { willReadFrequently: true });

    if (!mask || !sampler) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let scale = 1;
    let offsetX = 0;
    let offsetY = 0;
    let frame = 0;
    let lastTime = 0;
    let clock = 0;
    let inView = true;
    let ready = false;

    // Starts at zero rather than now, so the field is already running its
    // own pass by the time anyone looks at it.
    let lastPointerAt = 0;

    const pointer = {
      x: -Infinity,
      y: -Infinity,
      active: false,
      onShape: false,
    };

    const insideLogo = (x: number, y: number) => {
      const sx = (x - offsetX) / scale + vx;
      const sy = (y - offsetY) / scale + vy;

      if (sx < vx || sy < vy || sx > vx + vw || sy > vy + vh) return false;

      // A set lookup rather than a scan of a thousand rects, so a pointer move
      // costs the same however dense the artwork is.
      if (points.length) return occupied.has(key(sx, sy));

      return shapes.some(({ path, rule }) =>
        mask.isPointInPath(path, sx, sy, rule),
      );
    };

    const drift = (p: Particle) => {
      if (reduced.matches) {
        p.ax = 0;
        p.ay = 0;
        p.alpha = SETTINGS.opacity;
        return;
      }

      const t = clock * p.pace;

      p.ax =
        p.amplitude *
        (0.75 * Math.sin(t + p.phase) + 0.25 * Math.sin(t * 0.61 + p.phaseY));
      p.ay =
        p.amplitude *
        (0.75 * Math.sin(t * 0.83 + p.phaseY) +
          0.25 * Math.cos(t * 0.57 + p.phase));

      const a = 0.5 + 0.5 * Math.sin(clock * p.twinkle + p.phase);
      p.alpha = 0.26 + 0.66 * a * a;
    };

    const draw = () => {
      const pad = SETTINGS.padding;

      context.clearRect(-pad, -pad, width + pad * 2, height + pad * 2);

      for (const p of particles) {
        drift(p);

        const b = p.influence;
        const rgb = SETTINGS.neutral.map((c, i) =>
          Math.round(c + (p.vivid[i] - c) * b),
        );

        context.fillStyle = `rgb(${rgb.join(",")})`;
        context.globalAlpha = p.alpha + (1 - p.alpha) * b;

        const size = SETTINGS.pixelSize * (1 + (SETTINGS.maxScale - 1) * b);

        context.fillRect(
          p.x + p.ax + p.dx - size / 2,
          p.y + p.ay + p.dy - size / 2,
          size,
          size,
        );
      }
    };

    const schedule = () => {
      if (!frame && ready && inView && !reduced.matches && !document.hidden) {
        frame = requestAnimationFrame(animate);
      }
    };

    function animate(now: number) {
      frame = 0;

      const elapsed = lastTime ? Math.min(now - lastTime, 64) : 16.67;
      lastTime = now;
      clock += elapsed / 1000;

      const smoothing = 1 - Math.exp((-4 * elapsed) / SETTINGS.fadeDuration);
      const radius = Math.min(SETTINGS.interactionRadius, width * 0.4);
      const motionRadius = Math.min(SETTINGS.motionRadius, width * 0.28);
      // Sub-stepped so a slow frame cannot let the spring overshoot.
      const steps = Math.ceil(elapsed / (1000 / 120));

      // With nothing on it, the field runs a cursor of its own: a slow figure
      // of eight across the artwork, so the colour keeps moving rather than
      // sitting still until someone arrives. A real pointer takes over the
      // moment it moves, since that resets the clock this reads.
      const isAuto = now - lastPointerAt > SETTINGS.autoDelay;

      if (isAuto) {
        const t = clock * SETTINGS.autoSpeed * Math.PI * 2;

        pointer.x = width / 2 + Math.sin(t) * width * SETTINGS.autoReach;
        pointer.y = height / 2 + Math.sin(t * 2) * height * SETTINGS.autoReach;
        pointer.onShape = insideLogo(pointer.x, pointer.y);
        pointer.active = true;
      }
      const dt = elapsed / 1000 / steps;

      for (const p of particles) {
        let target = 0;
        let tx = 0;
        let ty = 0;

        if (pointer.active) {
          const dx = pointer.x - p.x - p.ax;
          const dy = pointer.y - p.y - p.ay;
          const d = Math.hypot(dx, dy);

          if (d < radius) {
            const t = Math.max(0, 1 - d / motionRadius);
            const w = t * t * (3 - 2 * t);
            const ct = Math.max(
              0,
              1 - Math.hypot(dx - p.dx, dy - p.dy) / radius,
            );
            const cw = ct * ct * (3 - 2 * ct);

            target = 1 - Math.pow(1 - cw, 3);

            if (pointer.onShape) {
              // Over the shape the particles bulge away from the cursor.
              const pop = (22 * w) / Math.max(d, 1);
              tx = dx * w * 0.65 - dx * pop;
              ty = dy * w * 0.65 - dy * pop - 11 * w;
            } else {
              // Outside it they are drawn towards the cursor instead.
              tx = dx * w * 1.7 + Math.cos(p.spreadAngle) * 7 * w;
              ty = dy * w * 1.7 + Math.sin(p.spreadAngle) * 7 * w;
            }

            // Its own pass only lights the particles up. Moving them as well
            // would leave the artwork shifting about with nobody touching it.
            if (isAuto) {
              tx = 0;
              ty = 0;
            }

            const length = Math.hypot(tx, ty);

            if (length > SETTINGS.maxDisplacement) {
              tx *= SETTINGS.maxDisplacement / length;
              ty *= SETTINGS.maxDisplacement / length;
            }
          }
        }

        // Colour rushes in faster than it drains away.
        p.influence +=
          (target - p.influence) *
          (target > p.influence ? 1 - Math.exp(-elapsed / 90) : smoothing);

        if (Math.abs(target - p.influence) < 0.005) p.influence = target;

        for (let i = 0; i < steps; i += 1) {
          p.vx +=
            (SETTINGS.spring * (tx - p.dx) - SETTINGS.damping * p.vx) * dt;
          p.vy +=
            (SETTINGS.spring * (ty - p.dy) - SETTINGS.damping * p.vy) * dt;
          p.dx += p.vx * dt;
          p.dy += p.vy * dt;
        }

        // Snap once the spring is close enough, so it stops costing frames.
        if (
          Math.hypot(p.dx - tx, p.dy - ty) < 0.008 &&
          Math.hypot(p.vx, p.vy) < 0.04
        ) {
          p.dx = tx;
          p.dy = ty;
          p.vx = 0;
          p.vy = 0;
        }
      }

      draw();
      schedule();
    }

    const rebuild = () => {
      const box = host.getBoundingClientRect();
      width = box.width;
      height = box.height;

      if (!ready || !width || !height) return;

      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;

      scale = Math.min(width / vw, height / vh);
      offsetX = (width - vw * scale) / 2;
      offsetY = (height - vh * scale) / 2;

      // Capped, because a 3x buffer costs three times the fill for no visible
      // gain on squares this small.
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const pad = SETTINGS.padding;

      canvas.width = Math.round((width + pad * 2) * dpr);
      canvas.height = Math.round((height + pad * 2) * dpr);

      const rx = canvas.width / (width + pad * 2);
      const ry = canvas.height / (height + pad * 2);

      context.setTransform(rx, 0, 0, ry, pad * rx, pad * ry);

      // Path artwork is rasterised offscreen so each particle can read the
      // colour underneath it, which is how its own gradient survives. Rect
      // artwork has no colour to read, so it is skipped.
      let raster: Uint8ClampedArray | null = null;

      if (!points.length) {
        sampling.width = Math.ceil(width * 2);
        sampling.height = Math.ceil(height * 2);
        sampler.setTransform(2, 0, 0, 2, 0, 0);
        sampler.drawImage(image, offsetX, offsetY, vw * scale, vh * scale);

        raster = sampler.getImageData(
          0,
          0,
          sampling.width,
          sampling.height,
        ).data;
      }

      particles = [];

      const step = SETTINGS.pixelSize + SETTINGS.gap;
      const startX = 1 + Math.floor(((width - 2) % step) / 2);
      const startY = 1 + Math.floor(((height - 2) % step) / 2);

      // Rect artwork places one particle per rect; path artwork walks a grid
      // and keeps the points that land inside the shape.
      const seats = points.length
        ? points.map(({ x, y }) => ({
            x: offsetX + (x - vx) * scale,
            y: offsetY + (y - vy) * scale,
            sx: x,
            sy: y,
          }))
        : (() => {
            const grid = [];

            for (let y = startY; y <= height - 1; y += step) {
              for (let x = startX; x <= width - 1; x += step) {
                if (insideLogo(x, y)) grid.push({ x, y, sx: 0, sy: 0 });
              }
            }

            return grid;
          })();

      for (const { x, y, sx, sy } of seats) {
        {
          let color: number[];

          if (raster) {
            const index =
              (Math.floor(y * 2) * sampling.width + Math.floor(x * 2)) * 4;
            color = [raster[index], raster[index + 1], raster[index + 2]];
          } else {
            // Position across the artwork rather than the box, so the gradient
            // stays anchored to the shape however it is letterboxed.
            const t = Math.min(1, Math.max(0, (sx - vx) / Math.max(vw, 1)));
            color = from.map((c, i) => c + (to[i] - c) * t);
          }

          // Particles on the outline drift less, so the silhouette stays legible.
          const interior = points.length
            ? [
                [pitch, 0],
                [-pitch, 0],
                [0, pitch],
                [0, -pitch],
              ].every(([dx, dy]) => occupied.has(key(sx + dx, sy + dy)))
            : [
                [4, 0],
                [-4, 0],
                [0, 4],
                [0, -4],
              ].every(([dx, dy]) => insideLogo(x + dx, y + dy));

          particles.push({
            x,
            y,
            vivid: vivid(color),
            dx: 0,
            dy: 0,
            vx: 0,
            vy: 0,
            ax: 0,
            ay: 0,
            influence: 0,
            alpha: SETTINGS.opacity,
            phase: seed(x, y, 1) * Math.PI * 2,
            phaseY: seed(x, y, 2) * Math.PI * 2,
            pace: 1.4 + seed(x, y, 3) * 1.2,
            twinkle: (Math.PI * 2) / (1.8 + seed(x, y, 4) * 1.8),
            amplitude: interior
              ? SETTINGS.ambientAmplitude * (0.65 + seed(x, y, 5) * 0.35)
              : 0.85,
            spreadAngle: seed(x, y, 6) * Math.PI * 2,
          });
        }
      }

      pointer.active = false;
      draw();
      schedule();
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (reduced.matches || !inView) return;

      const box = host.getBoundingClientRect();

      pointer.x = event.clientX - box.left;
      pointer.y = event.clientY - box.top;
      pointer.active = true;
      pointer.onShape = insideLogo(pointer.x, pointer.y);
      lastPointerAt = performance.now();

      schedule();
    };

    const leave = () => {
      pointer.active = false;
      schedule();
    };

    const resetMotion = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
      pointer.active = false;

      particles.forEach((p) => {
        p.influence = 0;
        p.dx = 0;
        p.dy = 0;
        p.vx = 0;
        p.vy = 0;
      });

      draw();
      schedule();
    };

    const handlePointerUp = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") leave();
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", leave);
    window.addEventListener("blur", leave);
    window.addEventListener("scroll", leave, { passive: true });
    window.addEventListener("resize", rebuild, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", resetMotion);
    reduced.addEventListener("change", resetMotion);

    const resizeObserver = new ResizeObserver(rebuild);
    resizeObserver.observe(host);

    // Idle while off screen, so a field this dense costs nothing until it is
    // actually being looked at.
    const intersectionObserver = new IntersectionObserver((entries) => {
      inView = entries[0].isIntersecting;
      if (inView) schedule();
      else resetMotion();
    });

    intersectionObserver.observe(host);

    // Guards the fetch: a slow response must not build into a torn down host.
    const state = { cancelled: false };

    const image = new Image();

    image.onload = () => {
      ready = true;
      rebuild();
    };

    const start = (markup: string) => {
      if (state.cancelled) return;

      const parsed = new DOMParser().parseFromString(markup, "image/svg+xml");
      const viewBox = parsed.documentElement.getAttribute("viewBox");

      if (!viewBox) return;

      [vx, vy, vw, vh] = viewBox.split(/\s+/).map(Number);

      const rects = [...parsed.querySelectorAll("rect")];

      if (rects.length) {
        points = rects.map((rect) => ({
          x:
            Number(rect.getAttribute("x")) +
            Number(rect.getAttribute("width")) / 2,
          y:
            Number(rect.getAttribute("y")) +
            Number(rect.getAttribute("height")) / 2,
        }));

        // The spacing the artwork was exported on, read off the file rather
        // than assumed, so a differently sampled export still lines up.
        const xs = [...new Set(points.map(({ x }) => x))].sort((a, b) => a - b);
        pitch = xs.length > 1 ? Math.round(xs[1] - xs[0]) : 6;

        occupied = new Set(points.map(({ x, y }) => key(x, y)));

        // Nothing to rasterise: the rects are the particles.
        ready = true;
        rebuild();
        return;
      }

      shapes = [...parsed.querySelectorAll("path")].map((path) => ({
        path: new Path2D(path.getAttribute("d") ?? ""),
        rule: (path.getAttribute("fill-rule") ?? "nonzero") as CanvasFillRule,
      }));

      image.src = `data:image/svg+xml,${encodeURIComponent(markup)}`;
    };

    if (svgSrc) {
      fetch(svgSrc)
        .then((response) => response.text())
        .then(start)
        .catch(() => setHasFailed(true));
    } else if (svg) {
      start(svg);
    }

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", leave);
      window.removeEventListener("blur", leave);
      window.removeEventListener("scroll", leave);
      window.removeEventListener("resize", rebuild);
      document.documentElement.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", resetMotion);
      reduced.removeEventListener("change", resetMotion);
      image.onload = null;
    };
  }, [svg, svgSrc, gradientFrom, gradientTo]);

  return (
    // One image as far as assistive tech is concerned, not thousands of squares.
    <div
      ref={hostRef}
      role="img"
      aria-label={label}
      className={`relative ${className}`}
    >
      {/* A stand-in for the field: the artwork's own silhouette, filled
          with the same grid of dots. Not part of the reveal — painting it
          otherwise would show the finished logo as grey dots before the
          particles arrive — so it waits until scripting is off (the rule
          below sits outside Tailwind's layers and so beats opacity-0) or
          the canvas could not start. */}
      <noscript>
        <style>{`.particle-logo-fallback{opacity:1}`}</style>
      </noscript>

      <span
        aria-hidden="true"
        style={{
          maskImage: `url("${artworkUrl}")`,
          WebkitMaskImage: `url("${artworkUrl}")`,
        }}
        className={`particle-logo-fallback absolute inset-0 block bg-[radial-gradient(circle_at_center,#E5E7EB_1px,transparent_1px)] bg-[length:6px_6px] mask-contain mask-center mask-no-repeat ${
          hasFailed ? "opacity-100" : "opacity-0"
        }`}
      />

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        // Overhangs the host on every side, so particles pushed outwards by the
        // cursor are not cut off at the edge.
        className="pointer-events-none absolute top-[-7.2rem] left-[-7.2rem] h-[calc(100%+14.4rem)] w-[calc(100%+14.4rem)]"
      />
    </div>
  );
}
