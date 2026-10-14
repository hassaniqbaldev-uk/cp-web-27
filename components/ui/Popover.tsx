"use client";

import { useDismiss } from "@/hooks/useDismiss";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const CLOSE_DELAY = 180;

const DURATION = 0.35;

const EASE = "power3.out";

const OFFSET = 12;

export type PopoverOrientation = "top" | "bottom" | "left" | "right";

const PLACEMENT: Record<PopoverOrientation, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-[1rem] max-425:mb-[.5rem]",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-[1rem] max-425:mt-[.5rem]",
  left: "right-full top-1/2 -translate-y-1/2 mr-[1rem] max-425:mr-[.5rem]",
  right: "left-full top-1/2 -translate-y-1/2 ml-[1rem] max-425:ml-[.5rem]",
};

const ORIGIN: Record<PopoverOrientation, string> = {
  top: "bottom center",
  bottom: "top center",
  left: "right center",
  right: "left center",
};

const FROM: Record<PopoverOrientation, { x: number; y: number }> = {
  top: { x: 0, y: OFFSET },
  bottom: { x: 0, y: -OFFSET },
  left: { x: OFFSET, y: 0 },
  right: { x: -OFFSET, y: 0 },
};

type PopoverProps = {
  label: string;
  children: React.ReactNode;
  trigger?: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  orientation?: PopoverOrientation;
  className?: string;
  triggerClassName?: string;
  squareClassName?: string;
  panelClassName?: string;
};

export default function Popover({
  label,
  children,
  trigger,
  isOpen,
  onOpenChange,
  orientation = "bottom",
  className = "",
  triggerClassName = "p-[1rem] max-425:p-[.6rem] rounded-full bg-white/50",
  squareClassName = "size-[.8rem] max-425:size-[.6rem] bg-white",
  panelClassName = "rounded-sm bg-white/20 p-[1rem] backdrop-blur-[20px]",
}: PopoverProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isOpenRef = useRef(isOpen);
  const isFirstPass = useRef(true);

  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    const panel = panelRef.current;

    if (!panel) return;

    const duration = isFirstPass.current || prefersReducedMotion ? 0 : DURATION;

    isFirstPass.current = false;

    const from = FROM[orientation];

    gsap.to(panel, {
      autoAlpha: isOpen ? 1 : 0,
      scale: isOpen ? 1 : 0.94,
      x: isOpen ? 0 : from.x,
      y: isOpen ? 0 : from.y,
      duration,
      ease: EASE,
      overwrite: true,
    });
  }, [isOpen, orientation, prefersReducedMotion]);

  const cancelClose = () => {
    if (!closeTimer.current) return;

    clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };

  const open = () => {
    cancelClose();
    onOpenChange(true);
  };

  const scheduleClose = () => {
    cancelClose();

    closeTimer.current = setTimeout(() => {
      if (isOpenRef.current) onOpenChange(false);
    }, CLOSE_DELAY);
  };

  useEffect(() => cancelClose, []);

  useDismiss(containerRef, () => onOpenChange(false), isOpen);

  return (
    <div
      ref={containerRef}
      onMouseEnter={open}
      onMouseLeave={scheduleClose}
      className={`absolute ${isOpen ? "z-[110]" : "z-[100]"} ${className}`}
    >
      <button
        type="button"
        onFocus={open}
        onClick={() => onOpenChange(!isOpen)}
        aria-label={label}
        aria-expanded={isOpen}
        className="relative block cursor-pointer"
      >
        {!trigger && (
          <div
            className={`absolute top-1/2 left-1/2 -translate-1/2 animate-ping motion-reduce:animate-none ${triggerClassName}`}
          />
        )}

        <div className={`relative ${squareClassName}`}>{trigger}</div>
      </button>

      <div
        ref={panelRef}
        inert={!isOpen}
        style={{ transformOrigin: ORIGIN[orientation] }}
        className={`invisible absolute w-max opacity-0 ${PLACEMENT[orientation]} ${panelClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
