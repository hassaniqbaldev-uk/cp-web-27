"use client";

import { useEffect, useRef } from "react";

const FIELD_OF_VIEW = 24;

// World units visible from top to bottom of the canvas.
const VIEW_HEIGHT = 11.6;

const CENTRE_Y = -1.6;

// Resting pose, turned like the original artwork.
const POSE = { body: -0.34, head: -0.1, headTilt: 0.1, headRoll: 0.03 };

// Three.js robot: floats, blinks and looks towards the cursor (or a finger on
// touch screens). three is loaded on demand, so it stays out of the page's
// main bundle.
const Robot3D = ({ label, className = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let cancelled = false;
    let cleanup = () => {};

    const start = async () => {
      const [THREE, { RoomEnvironment }, { createRobot, disposeScene }] =
        await Promise.all([
          import("three"),
          import("three/examples/jsm/environments/RoomEnvironment.js"),
          import("./createRobot"),
        ]);

      if (cancelled) return;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.NeutralToneMapping;
      renderer.toneMappingExposure = 1;
      renderer.domElement.style.display = "block";
      container.append(renderer.domElement);

      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const room = new RoomEnvironment();
      const environment = pmrem.fromScene(room, 0.04);
      scene.environment = environment.texture;
      scene.environmentIntensity = 0.5;
      room.dispose();
      pmrem.dispose();

      const key = new THREE.DirectionalLight("#ffffff", 1.9);
      key.position.set(-5, 7, 8);
      const fill = new THREE.DirectionalLight("#7ba4ff", 1.1);
      fill.position.set(7, -2, 4);
      const rim = new THREE.DirectionalLight("#cfdcff", 1.2);
      rim.position.set(3, 5, -6);
      scene.add(key, fill, rim);

      const camera = new THREE.PerspectiveCamera(FIELD_OF_VIEW, 1, 1, 100);
      const distance =
        VIEW_HEIGHT / 2 / Math.tan(THREE.MathUtils.degToRad(FIELD_OF_VIEW / 2));
      camera.position.set(0, CENTRE_Y + 2.2, distance);
      camera.lookAt(0, CENTRE_Y, 0);

      const { robot, head, arms, setEyes } = createRobot();
      scene.add(robot);

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const target = { x: 0, y: 0 };
      const look = { x: 0, y: 0 };

      const onPointerMove = (event) => {
        const rect = container.getBoundingClientRect();
        const clamp = THREE.MathUtils.clamp;

        target.x = clamp(
          (event.clientX - rect.left - rect.width / 2) / window.innerWidth,
          -1,
          1,
        );
        target.y = clamp(
          (event.clientY - rect.top - rect.height * 0.35) / window.innerHeight,
          -1,
          1,
        );
      };

      // Touch: look at the finger while it is down, then ease back to rest.
      const onTouchEnd = (event) => {
        if (event.pointerType === "mouse") return;
        target.x = 0;
        target.y = 0;
      };

      const pose = (time) => {
        look.x += (target.x - look.x) * 0.06;
        look.y += (target.y - look.y) * 0.06;

        robot.rotation.y = POSE.body + look.x * 0.35;
        robot.position.y = Math.sin(time * 1.4) * 0.12;
        head.rotation.set(
          POSE.headTilt + look.y * 0.35,
          POSE.head + look.x * 0.5,
          POSE.headRoll + Math.sin(time * 0.9) * 0.02,
        );

        arms.forEach((arm, index) => {
          arm.rotation.x = Math.sin(time * 1.4 + index * 1.2) * 0.06;
        });

        // A quick blink about every four seconds.
        const blink = (time % 4) - 3.8;
        setEyes(
          blink > 0
            ? +Math.abs(Math.cos((blink / 0.2) * Math.PI)).toFixed(2)
            : 1,
        );
      };

      const clock = { last: 0, time: 0 };

      const frame = (now) => {
        const delta = clock.last ? Math.min((now - clock.last) / 1000, 0.1) : 0;
        clock.last = now;
        clock.time += delta;
        pose(clock.time);
        renderer.render(scene, camera);
      };

      const renderStill = () => {
        pose(0);
        renderer.render(scene, camera);
      };

      const resize = () => {
        const { clientWidth: width, clientHeight: height } = container;

        if (!width || !height) return;

        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderStill();
      };

      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(container);
      resize();

      let viewObserver;

      if (!reducedMotion) {
        window.addEventListener("pointermove", onPointerMove, {
          passive: true,
        });
        container.addEventListener("pointerdown", onPointerMove);
        container.addEventListener("pointerup", onTouchEnd);
        container.addEventListener("pointercancel", onTouchEnd);

        // Only animate while the hero is on screen.
        viewObserver = new IntersectionObserver(([entry]) => {
          clock.last = 0;
          renderer.setAnimationLoop(entry.isIntersecting ? frame : null);
        });
        viewObserver.observe(container);
      }

      cleanup = () => {
        renderer.setAnimationLoop(null);
        resizeObserver.disconnect();
        viewObserver?.disconnect();
        window.removeEventListener("pointermove", onPointerMove);
        container.removeEventListener("pointerdown", onPointerMove);
        container.removeEventListener("pointerup", onTouchEnd);
        container.removeEventListener("pointercancel", onTouchEnd);
        disposeScene(scene);
        environment.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    };

    start().catch((error) => {
      // No WebGL: leave the space empty rather than break the hero.
      console.warn("Robot3D could not start", error);
    });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label={label}
      className={`pointer-events-none touch-pan-y select-none [-webkit-touch-callout:none] [@media(hover:none)]:pointer-events-auto ${className}`}
    />
  );
};

export default Robot3D;
