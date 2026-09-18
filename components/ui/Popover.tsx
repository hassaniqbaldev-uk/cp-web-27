"use client";

import { useDismiss } from "@/hooks/useDismiss";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const MotionLink = motion.create(Link);

// Grace period for the pointer to travel from the square to the panel.
const CLOSE_DELAY = 180;

const blinkTransition = {
  duration: 1.6,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

const panelVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 12,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 26,
      mass: 0.8,
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: 8,
    filter: "blur(4px)",
    transition: { duration: 0.18, ease: [0.4, 0, 1, 1] as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 28 },
  },
};

type PopoverProps = {
  /** Names the trigger, and titles the default panel. */
  title: string;
  href: string;
  /** Used by the default panel only. */
  image?: string;
  /**
   * Replaces the default image-and-title panel. The panel is still a single
   * link, so this takes content rather than further links.
   */
  children?: React.ReactNode;
  /**
   * Sits inside the trigger. Given one, the trigger stops pulsing and stops
   * rotating: both exist to advertise a bare square as a control, which an
   * icon does on its own.
   */
  trigger?: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
  /** The trigger itself — size, radius, background. */
  squareClassName?: string;
  /** The panel — width, padding, surface. */
  panelClassName?: string;
  /** Where the panel sits relative to the trigger. */
  panelPositionClassName?: string;
  /** Corner the panel grows from, so it appears to come out of the trigger. */
  panelOrigin?: string;
};

export default function Popover({
  title,
  href,
  image,
  children,
  trigger,
  isOpen,
  onOpenChange,
  className = "",
  squareClassName = "bg-dark-pink",
  panelClassName = "gap-sm w-[24rem] flex-col items-center rounded-sm bg-white/20 px-[1rem] pt-[1rem] pb-[2rem] backdrop-blur-[20px]",
  panelPositionClassName = "top-[2rem] right-[2rem]",
  panelOrigin = "top right",
}: PopoverProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // The square is small and easy to miss, so it pulses until it is used. It
  // stops once the panel is open, and never runs for reduced-motion users.
  const blink = !isOpen && !prefersReducedMotion && !trigger;

  const cancelClose = () => {
    if (!closeTimer.current) return;

    clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };

  const open = () => {
    cancelClose();
    onOpenChange(true);
  };

  // The panel sits below the square with a gap between them, so closing has to
  // wait long enough for the pointer to cross that gap.
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => onOpenChange(false), CLOSE_DELAY);
  };

  useEffect(() => cancelClose, []);

  useDismiss(containerRef, () => onOpenChange(false), isOpen);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute ${isOpen ? "z-[110]" : "z-[100]"} ${className}`}
    >
      <motion.button
        type="button"
        onMouseEnter={open}
        onMouseLeave={scheduleClose}
        onFocus={open}
        // Opens rather than toggles: on a touch device there is no hover, so
        // the tap has to open it, and outside-tap/Escape still close it.
        onClick={open}
        aria-label={title}
        aria-expanded={isOpen}
        animate={{
          rotate: !trigger && isOpen ? 45 : 0,
          scale: blink ? [1, 1.6, 1] : 1,
        }}
        transition={{
          rotate: { type: "spring", stiffness: 320, damping: 22 },
          scale: blink ? blinkTransition : { duration: 0.2 },
        }}
        // Keeps the square on its own compositor layer so the scale runs on the
        // GPU. Without it Firefox re-rasterises each frame at this size and the
        // pulse steps rather than glides.
        style={{
          willChange: "transform",
          transformOrigin: "center",
          backfaceVisibility: "hidden",
        }}
        className={`pointer-events-auto absolute top-0 right-0 cursor-pointer ${trigger ? "" : "size-[.5rem]"} ${squareClassName}`}
      >
        {trigger}
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <MotionLink
            href={href}
            onMouseEnter={open}
            onMouseLeave={scheduleClose}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ transformOrigin: panelOrigin }}
            className={`pointer-events-auto absolute flex ${panelPositionClassName} ${panelClassName}`}
          >
            {children ?? (
              <>
                <motion.div
                  variants={itemVariants}
                  className="relative h-[14rem] w-full overflow-hidden rounded-xs bg-amber-500"
                >
                  {image && (
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="22rem"
                      className="object-cover"
                    />
                  )}
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="gap-xs flex w-full items-center justify-between"
                >
                  <p className="text-body-01 font-medium tracking-[-0.02em] text-white">
                    {title}
                  </p>

                  <ArrowUpRight color="white" strokeWidth={2} size={18} />
                </motion.div>
              </>
            )}
          </MotionLink>
        )}
      </AnimatePresence>
    </div>
  );
}
