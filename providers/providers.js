"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Keeps ScrollTrigger in step with Lenis' smoothed scroll position.
const ScrollTriggerSync = () => {
  useLenis(ScrollTrigger.update);

  return null;
};

const Providers = ({ children }) => {
  const lenisRef = useRef(null);

  // Lenis runs on GSAP's ticker, so smooth scroll and GSAP share one frame loop.
  useEffect(() => {
    const update = (time) => lenisRef.current?.lenis?.raf(time * 1000);

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{ lerp: 0.1, duration: 1, syncTouch: true, autoRaf: false }}
    >
      <ScrollTriggerSync />

      {children}
    </ReactLenis>
  );
};

export default Providers;
