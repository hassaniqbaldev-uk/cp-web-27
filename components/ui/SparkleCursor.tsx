"use client";

import { useEffect, useRef, useState } from "react";

// Only where there is a real pointer to replace, and only for anyone who has
// not asked for less motion. Everywhere else the system cursor stays.
const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

// Set on <html> while the sparkles are the cursor, which is what hides the
// system one in globals.css.
const ACTIVE_CLASS = "has-sparkle-cursor";

/**
 * The classic pointer, tip at the origin, in pixels before scaling. Walked
 * round from the tip: down the left edge, into the notch, down the tail and
 * back up to the right-hand point.
 */
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
  /** Drawn at this multiple of the outline above. */
  scale: 1.35,
  /** Space between particle centres, in pixels. */
  pitch: 1.8,
  /** Side of each particle, in pixels. Short of the pitch, so a sliver of
   *  gap still shows between them and it reads as sparkles, not a solid. */
  size: 1.4,
  /** How far each particle wanders from its seat, in pixels. */
  jitter: 0.35,
};

const SETTINGS = {
  /** Loose sparkles a second while the pointer is still. */
  restRate: 50,

  /** Extra loose sparkles per pixel moved, which is what draws the trail. */
  moveRate: 0.22,

  /** Drift speed range of a loose sparkle, in pixels a second. */
  minSpeed: 6,
  maxSpeed: 10,

  /** Lifetime range of a loose sparkle, in milliseconds. */
  minLife: 450,
  maxLife: 1000,

  /** Side range of a loose sparkle, in pixels. */
  minSize: 1.5,
  maxSize: 2.6,

  /** Cap, so a frantic flick cannot pile up thousands. */
  maxSparkles: 260,

  /** The label's place, from the tip: a little right, and clear below. */
  labelX: 8,
  labelGap: 6,

  /** How quickly the arrow fades in and out as the pointer comes and goes,
   *  as a share closed each 60fps frame. */
  fade: 0.2,
};

/** "#3078FF" to [48, 120, 255]. */
const toRgb = (hex: string) => [
  parseInt(hex.slice(1, 3), 16),
  parseInt(hex.slice(3, 5), 16),
  parseInt(hex.slice(5, 7), 16),
];

const mix = (from: number[], to: number[], t: number) =>
  `rgb(${from.map((c, i) => Math.round(c + (to[i] - c) * t)).join(",")})`;

const between = (min: number, max: number) => min + Math.random() * (max - min);

/** Ray casting: whether a point falls inside the outline. */
const isInside = (x: number, y: number, outline: number[][]) => {
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

type ArrowParticle = {
  /** Offset from the tip, in pixels. */
  x: number;
  y: number;
  color: string;
  phase: number;
  twinkle: number;
};

/** The arrow laid out as a grid of particles, coloured from its tip to its
 *  tail. Built once per set of colours, since the shape never changes. */
const buildArrow = (from: number[], to: number[]) => {
  const outline = ARROW_OUTLINE.map(([x, y]) => [
    x * ARROW.scale,
    y * ARROW.scale,
  ]);

  const width = Math.max(...outline.map(([x]) => x));
  const height = Math.max(...outline.map(([, y]) => y));

  const particles: ArrowParticle[] = [];

  // Half a pitch in, so the first row and column sit on the tip's edges
  // rather than outside them.
  for (let y = ARROW.pitch / 2; y < height; y += ARROW.pitch) {
    for (let x = ARROW.pitch / 2; x < width; x += ARROW.pitch) {
      if (!isInside(x, y, outline)) continue;

      particles.push({
        x,
        y,
        // The tip colour at the tip, turning to the tail colour down it.
        color: mix(from, to, Math.min(1, (x + y) / (width + height))),
        phase: Math.random() * Math.PI * 2,
        twinkle: between(3, 7),
      });
    }
  }

  return { particles, height };
};

type Sparkle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  age: number;
  life: number;
  size: number;
  color: string;
  twinkle: number;
  phase: number;
};

type SparkleCursorProps = {
  /** The words in the pill under the cursor. Left out, there is no pill. */
  label?: string;
  /**
   * The pill's colours, as Tailwind classes, e.g. "bg-blue text-white".
   * Keep it a complete, literal class string — Tailwind scans source files
   * for full class names, so anything built by concatenation will not be
   * generated.
   */
  labelClassName?: string;
  /** The arrow's colour at its tip, and at its tail, as hex. Both want to be
   *  dark enough to read on the site's white sections. */
  arrowFrom?: string;
  arrowTo?: string;
  /** The range the loose sparkles pick from, as hex. These only have to
   *  glint, so the far end can be paler than the arrow's. */
  sparkleFrom?: string;
  sparkleTo?: string;
};

/**
 * A cursor made of the site's sparkles: the pointer itself drawn in twinkling
 * particles, loose ones breaking off it, and a label beneath. Replaces the
 * system cursor across the whole site on devices with a mouse; touch screens
 * and reduced motion keep the ordinary one.
 *
 * Defaults to the site's blue, run lighter down the arrow and paler still in
 * the loose sparkles.
 */
export default function SparkleCursor({
  label,
  labelClassName = "bg-blue text-white",
  arrowFrom = "#3078FF",
  arrowTo = "#7AA8FF",
  sparkleFrom = "#3078FF",
  sparkleTo = "#A9C8FF",
}: SparkleCursorProps) {
  const [isEnabled, setIsEnabled] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fine = window.matchMedia(FINE_POINTER_QUERY);
    const reduced = window.matchMedia(REDUCED_MOTION_QUERY);

    const sync = () => setIsEnabled(fine.matches && !reduced.matches);

    sync();

    fine.addEventListener("change", sync);
    reduced.addEventListener("change", sync);

    return () => {
      fine.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
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

    let sparkles: Sparkle[] = [];
    let frame = 0;
    let lastTime = 0;
    let clock = 0;

    // The tip follows the pointer exactly, with no lag: this is what the
    // visitor aims with, so it has to point at what a click will hit.
    const tip = { x: 0, y: 0 };
    let hasPosition = false;
    let isPointerInside = false;

    // Eased towards 1 while the pointer is in the window and 0 once it
    // leaves, so the arrow fades rather than blinking out.
    let visibility = 0;

    // Carried between frames, so fractions of a sparkle are not lost.
    let pending = 0;
    let moved = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // A loose sparkle breaks off from somewhere on the arrow.
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

    const animate = (now: number) => {
      frame = requestAnimationFrame(animate);

      // Clamped, so coming back to a backgrounded tab does not jump.
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

        // Fades over its life, and flickers on its own clock as it does.
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

      // The arrow over its own sparkles, each particle shimmering in place
      // like the logo's: a gentle twinkle, and a wander too small to blur
      // the outline.
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

      // Written straight to the element rather than through state, since a
      // render a frame would cost more than the move itself.
      if (pill) {
        pill.style.transform = `translate3d(${tip.x + SETTINGS.labelX}px, ${
          tip.y + arrow.height + SETTINGS.labelGap
        }px, 0)`;
      }
    };

    const show = (isVisible: boolean) => {
      isPointerInside = isVisible;
      if (pill) pill.style.opacity = isVisible ? "1" : "0";
    };

    const onPointerMove = (event: PointerEvent) => {
      // A pen or a finger on a hybrid screen keeps its own feedback.
      if (event.pointerType !== "mouse") return;

      if (hasPosition) {
        moved += Math.hypot(event.clientX - tip.x, event.clientY - tip.y);
      }

      tip.x = event.clientX;
      tip.y = event.clientY;
      hasPosition = true;

      show(true);
    };

    // Leaving the window takes the cursor with it; the sparkles already out
    // simply finish fading.
    const onPointerOut = (event: PointerEvent) => {
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
      {/* Above everything, the header included, and never in the way of a
          click. Decorative: the real pointer is still what does the work. */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[10000] h-full w-full"
      />

      {label && (
        <span
          ref={labelRef}
          aria-hidden="true"
          className={`pointer-events-none fixed top-0 left-0 z-[10000] rounded-full px-[1.2rem] py-[0.5rem] text-[1.2rem] font-bold tracking-[-0.02em] whitespace-nowrap opacity-0 transition-opacity duration-300 will-change-transform ${labelClassName}`}
        >
          {label}
        </span>
      )}
    </>
  );
}
