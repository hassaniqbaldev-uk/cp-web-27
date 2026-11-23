"use client";

import Matter from "matter-js";
import Image from "next/image";
import { useEffect, useRef } from "react";

const WALL = 400;

const SETTLE_STEPS = 600;

// How far outside a ball the cursor still pushes it.
const PUSH_REACH = 20;

// Push strength per pixel of cursor movement, relative to the ball mass.
const PUSH_STRENGTH = 0.0004;

// Caps the cursor speed so a fast flick does not fling balls off-screen.
const MAX_CURSOR_SPEED = 40;

// Wide enough to stay under every ball whatever the window width.
const FLOOR_WIDTH = 20000;

const TechBalls = ({
  items,
  ballSize = 178,
  spawnWidth = Infinity,
  floorOffset = 0,
  className = "",
}) => {
  const containerRef = useRef(null);
  const ballRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const { Bodies, Body, Composite, Engine, Events, Runner } = Matter;

    let width = container.clientWidth;
    let height = container.clientHeight;
    const radius = ballSize / 2;

    const engine = Engine.create();
    const runner = Runner.create();

    const floor = Bodies.rectangle(
      width / 2,
      height - floorOffset + WALL / 2,
      FLOOR_WIDTH,
      WALL,
      { isStatic: true },
    );
    const leftWall = Bodies.rectangle(-WALL / 2, 0, WALL, height * 6, {
      isStatic: true,
    });
    const rightWall = Bodies.rectangle(width + WALL / 2, 0, WALL, height * 6, {
      isStatic: true,
    });
    const ceiling = Bodies.rectangle(
      width / 2,
      -height * 2,
      FLOOR_WIDTH,
      WALL,
      {
        isStatic: true,
      },
    );

    const walls = [floor, leftWall, rightWall, ceiling];

    // Balls drop in across the centre (spawnWidth), then can roam everywhere.
    const dropWidth = Math.min(width, spawnWidth);
    const dropStart = (width - dropWidth) / 2;
    const spacing = (dropWidth - ballSize) / Math.max(items.length - 1, 1);

    const balls = items.map((_, index) =>
      Bodies.circle(
        dropStart + radius + spacing * index,
        -radius - (index % 3) * ballSize * 0.6,
        radius,
        { restitution: 0.4, friction: 0.05, frictionAir: 0.01 },
      ),
    );

    Composite.add(engine.world, [...walls, ...balls]);

    const cursor = { x: 0, y: 0, dx: 0, dy: 0, active: false };

    const onPointerMove = (event) => {
      const bounds = container.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;

      if (cursor.active) {
        cursor.dx += x - cursor.x;
        cursor.dy += y - cursor.y;
      }

      cursor.x = x;
      cursor.y = y;
      cursor.active = true;
    };

    const onPointerLeave = () => {
      cursor.active = false;
      cursor.dx = 0;
      cursor.dy = 0;
    };

    container.addEventListener("pointermove", onPointerMove, { passive: true });
    container.addEventListener("pointerleave", onPointerLeave);

    // Pushes any ball under the cursor away from it, scaled by how fast the
    // cursor moved since the last physics step.
    const push = () => {
      const speed = Math.min(
        Math.hypot(cursor.dx, cursor.dy),
        MAX_CURSOR_SPEED,
      );

      cursor.dx = 0;
      cursor.dy = 0;

      if (!cursor.active || speed === 0) return;

      balls.forEach((ball) => {
        const offsetX = ball.position.x - cursor.x;
        const offsetY = ball.position.y - cursor.y;
        const distance = Math.hypot(offsetX, offsetY) || 1;

        if (distance > radius + PUSH_REACH) return;

        const force = speed * PUSH_STRENGTH * ball.mass;

        Body.applyForce(ball, ball.position, {
          x: (offsetX / distance) * force,
          y: (offsetY / distance) * force,
        });
      });
    };

    Events.on(engine, "beforeUpdate", push);

    // Keeps the floor and right wall on the section edges when it resizes.
    const onResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;

      Body.setPosition(floor, {
        x: width / 2,
        y: height - floorOffset + WALL / 2,
      });
      Body.setPosition(rightWall, { x: width + WALL / 2, y: 0 });
    };

    window.addEventListener("resize", onResize);

    const sync = () => {
      balls.forEach((ball, index) => {
        const node = ballRefs.current[index];

        if (!node) return;

        node.style.transform = `translate(${ball.position.x - radius}px, ${
          ball.position.y - radius
        }px) rotate(${ball.angle}rad)`;
      });
    };

    Events.on(engine, "afterUpdate", sync);
    sync();

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const start = () => {
      if (reduceMotion) {
        for (let step = 0; step < SETTLE_STEPS; step += 1) {
          Engine.update(engine, 1000 / 60);
        }
      }

      Runner.run(runner, engine);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        start();
        observer.disconnect();
      },
      { threshold: 0.3 },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      Runner.stop(runner);
      Events.off(engine, "beforeUpdate", push);
      Events.off(engine, "afterUpdate", sync);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", onResize);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [items, ballSize, spawnWidth, floorOffset]);

  return (
    <ul
      ref={containerRef}
      className={`relative overflow-hidden select-none ${className}`}
    >
      {items.map(({ id, label, logo, logoWidth, logoHeight }, index) => (
        <li
          key={id}
          ref={(node) => {
            ballRefs.current[index] = node;
          }}
          style={{ width: ballSize, height: ballSize }}
          className="absolute top-0 left-0 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-[10px] will-change-transform"
        >
          <Image
            src={logo}
            alt={label}
            width={logoWidth}
            height={logoHeight}
            draggable={false}
            className="pointer-events-none"
          />
        </li>
      ))}
    </ul>
  );
};

export default TechBalls;
