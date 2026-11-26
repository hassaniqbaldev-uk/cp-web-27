"use client";

import Matter from "matter-js";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const WALL = 400;

const SETTLE_STEPS = 600;

// Wide enough to stay under every ball whatever the window width.
const FLOOR_WIDTH = 20000;

const PHONE_QUERY = "(max-width: 479.98px)";

const TechBalls = ({
  items,
  ballSize: desktopBallSize = 178,
  // Smaller balls on phones so they all fit the narrow box.
  phoneBallSize,
  spawnWidth = Infinity,
  floorOffset = 0,
  className = "",
}) => {
  const containerRef = useRef(null);
  const ballRefs = useRef([]);
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    if (!phoneBallSize) return;

    const query = window.matchMedia(PHONE_QUERY);
    const update = () => setIsPhone(query.matches);

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, [phoneBallSize]);

  const ballSize = isPhone ? phoneBallSize : desktopBallSize;
  const logoScale = ballSize / desktopBallSize;

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
      Events.off(engine, "afterUpdate", sync);
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
            style={
              logoScale === 1
                ? undefined
                : { width: logoWidth * logoScale, height: "auto" }
            }
            className="pointer-events-none"
          />
        </li>
      ))}
    </ul>
  );
};

export default TechBalls;
