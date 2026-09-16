"use client";

import { useDismiss } from "@/hooks/useDismiss";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const MotionLink = motion.create(Link);

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
  title: string;
  href: string;
  image: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
};

export default function Popover({
  title,
  href,
  image,
  isOpen,
  onOpenChange,
  className = "",
}: PopoverProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useDismiss(containerRef, () => onOpenChange(false), isOpen);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute ${isOpen ? "z-[110]" : "z-[100]"} ${className}`}
    >
      <button
        type="button"
        onClick={() => onOpenChange(!isOpen)}
        className="pointer-events-auto absolute top-0 right-0 inline-flex size-[2rem] items-center justify-center rounded-full bg-white/20 backdrop-blur-[20px]"
      >
        <motion.span
          className="inline-flex"
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
        >
          <Plus color="white" strokeWidth={1.5} size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <MotionLink
            href={href}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ transformOrigin: "top right" }}
            className="gap-sm pointer-events-auto absolute top-[2rem] right-[2rem] flex w-[24rem] flex-col items-center rounded-sm bg-white/20 px-[1rem] pt-[1rem] pb-[2rem] backdrop-blur-[20px]"
          >
            <motion.div
              variants={itemVariants}
              className="relative h-[14rem] w-full overflow-hidden rounded-xs bg-amber-500"
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="22rem"
                className="object-cover"
              />
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
          </MotionLink>
        )}
      </AnimatePresence>
    </div>
  );
}
