"use client";

import Button from "../ui/Button";
import { useEffect, useState } from "react";

const BlackFridayStickyBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Two thresholds (hysteresis) so Lenis' smoothed scrollY can't flicker the
    // bar on/off as it settles around a single boundary.
    const onScroll = () => {
      const y = window.scrollY;

      setShow((prev) => {
        if (!prev && y > window.innerHeight * 0.75) return true;
        if (prev && y < window.innerHeight * 0.5) return false;
        return prev;
      });
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-[30px] left-1/2 z-[90] -translate-x-1/2 transition-all duration-300 max-sm:right-[20px] max-sm:bottom-[20px] max-sm:left-[20px] max-sm:translate-x-0 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-[20px] opacity-0"
      }`}
    >
      <div className="flex items-center justify-between gap-[30px] rounded-full bg-black py-[12px] pr-[12px] pl-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.35)] max-sm:gap-[16px] max-sm:pl-[20px]">
        <div>
          <p className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text text-[14px] font-bold tracking-[-0.02em] text-transparent max-sm:text-[12px]">
            Black Friday: 25% off
          </p>

          <p className="text-[18px] font-bold tracking-[-0.02em] text-white max-sm:text-[16px]">
            From $30/hr
          </p>
        </div>

        <Button
          href="#black-friday-hero"
          className="shrink-0 rounded-full bg-white px-[24px] py-[14px] text-[14px] font-extrabold tracking-[-0.02em] text-black uppercase max-sm:px-[18px] max-sm:py-[12px] max-sm:text-[12px]"
        >
          Send a job
        </Button>
      </div>
    </div>
  );
};

export default BlackFridayStickyBar;
