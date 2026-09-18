"use client";

import { useEffect, useRef } from "react";

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
  /** Source SVG markup. Sampled offscreen, so its own gradient is preserved. */
  svg: string;
  /** Names the whole field, which is one image rather than thousands. */
  label: string;
  className?: string;
};

export default function ParticleLogo({
  svg,
  label,
  className = "",
}: ParticleLogoProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!host || !canvas || !context) return;

    const parsed = new DOMParser().parseFromString(svg, "image/svg+xml");
    const viewBox = parsed.documentElement.getAttribute("viewBox");

    if (!viewBox) return;

    const [vx, vy, vw, vh] = viewBox.split(/\s+/).map(Number);

    const shapes = [...parsed.querySelectorAll("path")].map((path) => ({
      path: new Path2D(path.getAttribute("d") ?? ""),
      rule: (path.getAttribute("fill-rule") ?? "nonzero") as CanvasFillRule,
    }));

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

      // The source is rasterised offscreen so each particle can read the colour
      // underneath it, which is how the artwork's own gradient survives.
      sampling.width = Math.ceil(width * 2);
      sampling.height = Math.ceil(height * 2);
      sampler.setTransform(2, 0, 0, 2, 0, 0);
      sampler.drawImage(image, offsetX, offsetY, vw * scale, vh * scale);

      const raster = sampler.getImageData(
        0,
        0,
        sampling.width,
        sampling.height,
      ).data;

      particles = [];

      const step = SETTINGS.pixelSize + SETTINGS.gap;
      const startX = 1 + Math.floor(((width - 2) % step) / 2);
      const startY = 1 + Math.floor(((height - 2) % step) / 2);

      for (let y = startY; y <= height - 1; y += step) {
        for (let x = startX; x <= width - 1; x += step) {
          if (!insideLogo(x, y)) continue;

          const index =
            (Math.floor(y * 2) * sampling.width + Math.floor(x * 2)) * 4;
          const color = [raster[index], raster[index + 1], raster[index + 2]];

          // Particles on the outline drift less, so the silhouette stays legible.
          const interior = [
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

    const image = new Image();

    image.onload = () => {
      ready = true;
      rebuild();
    };

    image.src = `data:image/svg+xml,${encodeURIComponent(svg)}`;

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
  }, [svg]);

  return (
    // One image as far as assistive tech is concerned, not thousands of squares.
    <div
      ref={hostRef}
      role="img"
      aria-label={label}
      className={`relative ${className}`}
    >
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
