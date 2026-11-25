"use client";

import { printEventsItems } from "@/config/common";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Container } from "../ui/Container";
import DragMarquee from "../ui/DragMarquee";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";

// A card plus its gap, and how far a card drops for each one it is from the middle.
const STEP_WIDTH = 400;
const STEP_DROP = 60;
const MAX_DROP = 120;

// Repeated so the marquee always has cards past the right edge of the screen.
const cards = [...printEventsItems, ...printEventsItems];

const PrintEventsItems = () => {
  const marqueeRef = useRef(null);

  // The marquee keeps moving, so each card's drop follows its distance from the
  // middle of the screen.
  useGSAP(
    () => {
      const marquee = marqueeRef.current;

      if (!marquee) return;

      const elements = marquee.getElementsByClassName("print-item");

      const update = () => {
        const { left, width, top, bottom } = marquee.getBoundingClientRect();

        if (bottom < 0 || top > window.innerHeight) return;

        const middle = left + width / 2;

        const drops = Array.from(elements, (card) => {
          const rect = card.getBoundingClientRect();
          const distance = Math.abs(rect.left + rect.width / 2 - middle);

          return Math.min((distance / STEP_WIDTH) * STEP_DROP, MAX_DROP);
        });

        drops.forEach((drop, index) => {
          elements[index].style.transform = `translateY(${drop}px)`;
        });
      };

      gsap.ticker.add(update);

      return () => gsap.ticker.remove(update);
    },
    { scope: marqueeRef },
  );

  return (
    <>
      <Section
        id="print-events-items"
        className="relative overflow-hidden bg-black pt-[120px] pb-[95px]"
      >
        <Starfield className="absolute bottom-[-60px] left-1/2 z-0 h-[340px] w-[1170px] -translate-x-1/2 mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

        <Container className="relative z-10">
          <SectionHeading
            className="text-center"
            title={
              <>
                Everything you hand to <br />
                <span className="text-white/60">
                  someone, put in front of them, <br />
                  or stand next to.
                </span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-white"
            subtitle="We design every touchpoint with purpose, keeping your brand clear, consistent and memorable."
            subtitleClassName="mt-[30px] text-[22px] leading-[33px] tracking-[-0.02em] text-white"
          />
        </Container>

        <div
          ref={marqueeRef}
          className="relative z-10 mt-[80px] mask-[linear-gradient(to_right,transparent_0%,#000_16%,#000_84%,transparent_100%)]"
        >
          <DragMarquee
            pauseOnHover
            trackClassName="flex w-max items-start pb-[120px]"
            slideClassName="shrink-0 pr-[24px]"
          >
            {cards.map(
              (
                { id, icon: Icon, iconClassName, title, description },
                index,
              ) => (
                <div
                  key={`${id}-${index}`}
                  className="print-item flex min-h-[425px] w-[376px] flex-col items-start rounded-[20px] bg-white p-[40px]"
                >
                  <span
                    className={`flex size-[104px] shrink-0 items-center justify-center rounded-full text-white ${iconClassName}`}
                  >
                    <Icon size={50} strokeWidth={1.5} />
                  </span>

                  <h3 className="mt-[30px] text-[35px] leading-[46px] font-bold tracking-[-0.06em] whitespace-pre-line text-black">
                    {title}
                  </h3>

                  <p className="text-text-body mt-[20px] text-[22px] leading-[33px] tracking-[-0.02em]">
                    {description}
                  </p>
                </div>
              ),
            )}
          </DragMarquee>
        </div>
      </Section>
    </>
  );
};

export default PrintEventsItems;
