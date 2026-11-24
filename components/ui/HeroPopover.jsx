"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const openOnHoverOrTap = (open, { reason, event, cancel }) => {
  if (!open || (reason !== "trigger-press" && reason !== "trigger-focus")) {
    return;
  }

  const isTouch =
    event?.pointerType === "touch" ||
    !window.matchMedia("(hover: hover)").matches;

  if (!isTouch) cancel();
};

// Hotspot used by the hero sections: a pinging marker (children) that opens an
// image card on hover or tap.
const HeroPopover = ({
  title,
  href,
  image,
  orientation = "bottom",
  className = "",
  children,
}) => {
  return (
    <Popover onOpenChange={openOnHoverOrTap}>
      <div className={`absolute z-[100] ${className}`}>
        <PopoverTrigger
          openOnHover
          delay={0}
          closeDelay={180}
          aria-label={title.trim()}
          className="relative block cursor-pointer"
        >
          <span className="absolute top-1/2 left-1/2 -translate-1/2 animate-ping rounded-full bg-white/50 p-[10px]" />

          {children}
        </PopoverTrigger>
      </div>

      <PopoverContent
        side={orientation}
        sideOffset={10}
        className="flex w-[240px] flex-col items-center gap-[20px] rounded-[10px] bg-white/20 px-[10px] pt-[10px] pb-[20px] shadow-none ring-0 backdrop-blur-[20px] duration-350"
      >
        <Link href={href} className="contents">
          <span className="relative block h-[146px] w-[219px] overflow-hidden rounded-[5px]">
            <Image
              src={image}
              alt=""
              fill
              sizes="219px"
              className="object-cover"
            />
          </span>

          <span className="flex w-full items-center justify-between gap-[10px]">
            <span className="text-[22px] font-medium tracking-[-0.02em] text-white">
              {title}
            </span>

            <ArrowUpRight
              color="white"
              strokeWidth={2}
              size={18}
              className=""
            />
          </span>
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default HeroPopover;
