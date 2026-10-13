"use client";

import { processCards } from "@/config/common";
import type { MotionValue } from "framer-motion";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { ProcessCard } from "@/types/common";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { A11y, Autoplay, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";

import { Container } from "../ui/Container";
import Section from "../ui/Section";

/**
 * How far the card beneath shrinks for each card that lands on top of it. Low,
 * because these cards are tall: at the reference's 0.1 the first of six would
 * end up half size.
 */
const SCALE_STEP = 0.04;

/** How far each card sits below the one before it once stacked. */
const STACK_OFFSET = 3;

/** Below this the stack becomes a carousel: there is no room to pile cards up. */
const MEDIA_QUERY = "(max-width: 425px)";

/** How long each card is held before the carousel moves on. */
const AUTOPLAY_DELAY = 5000;

/**
 * The card itself, shared by both layouts. Only its surroundings differ: a
 * sticky, scaling wrapper on desktop, a slide at 425.
 */
const CardBody = ({ card }: { card: ProcessCard }) => {
  const { step, title, description, details, image, imageAlt } = card;

  return (
    <div className="gradient-border gap-lg max-425:gap-[3.5rem] max-425:h-full max-425:flex-col max-425:p-[3rem] relative flex items-center justify-between rounded-md bg-[#EAF1FF] p-[6rem] pr-[10rem] [--gradient-border-image:linear-gradient(180deg,var(--color-blue)_0%,rgba(48,120,255,0)_100%)] [--gradient-border-width:1px]">
      <div className="max-425:w-full w-[50rem]">
        <p className="text-subheading-02 max-425:text-[2rem] font-normal tracking-[-0.07em] text-black">
          {step}
        </p>

        {/* h3, since the sr-only heading above is the h2. */}
        <h3 className="text-heading-03 max-425:text-[3.5rem] max-425:leading-[4.3rem] mt-xs leading-[5rem] font-bold tracking-[-0.07em] text-black">
          {title}
        </h3>

        <p className="text-body-02 max-425:text-[1.6rem] max-425:leading-[2.4rem] text-text-body mt-sm leading-[2.5rem] tracking-[-0.02em]">
          {description}
        </p>

        {/* divide draws the rule between the two rather than around them, so
            neither end trails a stray line, and it turns with them: down the
            list on desktop, across it at 425. */}
        <ul className="mt-lg max-425:mt-sm max-425:flex-row max-425:divide-x max-425:divide-y-0 flex flex-col divide-y divide-black/30">
          {details.map(
            ({ id: detailId, icon: Icon, iconClassName, ...detail }) => (
              <li
                key={detailId}
                className="gap-sm max-425:gap-xs max-425:flex-1 max-425:flex-col max-425:px-sm max-425:py-0 max-425:first:pl-0 max-425:last:pr-0 py-md flex items-start first:pt-0 last:pb-0"
              >
                <Icon
                  aria-hidden="true"
                  size={58}
                  strokeWidth={2}
                  className={`max-425:size-[3rem] shrink-0 ${iconClassName}`}
                />

                <div>
                  <p className="text-body-01 max-425:text-[1.4rem] font-extrabold tracking-[-0.04em] text-black">
                    {detail.title}
                  </p>

                  <p className="text-body-02 max-425:text-[1.2rem] max-425:leading-[2rem] text-text-body mt-[0.3rem] leading-[2.5rem] tracking-[-0.02em]">
                    {detail.subtitle}
                  </p>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>

      <Image
        src={image}
        alt={imageAlt}
        width={396}
        height={378}
        className="max-425:mx-auto max-425:h-auto max-425:w-[16rem] shrink-0 rounded-md"
      />
    </div>
  );
};

type StackedCardProps = {
  card: ProcessCard;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

/**
 * Its own component because each card derives a motion value with a hook, which
 * cannot be done inside a map callback.
 */
const StackedCard = ({ card, index, total, progress }: StackedCardProps) => {
  const prefersReducedMotion = useReducedMotion();

  // The card shrinks from where it reaches the top until the stack is complete,
  // so the ones underneath recede as the next arrives. The last card never
  // scales: nothing lands on top of it.
  const targetScale = 1 - (total - index - 1) * SCALE_STEP;

  const scale = useTransform(
    progress,
    [index / Math.max(total - 1, 1), 1],
    [1, targetScale],
    { clamp: true },
  );

  return (
    // The sticky wrapper holds the card in place; the card itself is what
    // scales, so the two jobs do not fight over one transform.
    <li className="sticky top-[12rem]">
      <motion.div
        style={{
          scale: prefersReducedMotion ? 1 : scale,
          top: `${index * STACK_OFFSET}rem`,
        }}
        className="relative origin-top"
      >
        <CardBody card={card} />
      </motion.div>
    </li>
  );
};

const HowWeWorkCards = () => {
  const stackRef = useRef<HTMLUListElement>(null);
  const [isNarrow, setIsNarrow] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Runs from the moment the stack's top meets the viewport's top to the moment
  // its bottom does, so the whole stack completes exactly across this list.
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const narrow = window.matchMedia(MEDIA_QUERY);

    const sync = () => setIsNarrow(narrow.matches);

    sync();

    narrow.addEventListener("change", sync);

    return () => narrow.removeEventListener("change", sync);
  }, []);

  return (
    <>
      <Section
        id="card-stack"
        className="max-425:px-[3rem] max-425:pb-[0rem] max-425:pt-[34rem] pt-[40rem] pb-[16rem]"
      >
        <Container>
          {/* Names the group, since the cards below are headings and the
              outline would otherwise jump from the page h1 to a run of h2s
              with nothing introducing them. */}
          <h2 className="sr-only">Our process in detail</h2>

          {/* A real branch rather than breakpoint classes: piling cards up
              needs sticky positioning and the page's own scroll, which a
              carousel cannot share. */}
          {isNarrow ? (
            <Swiper
              modules={[A11y, Autoplay, Keyboard]}
              slidesPerView={1}
              spaceBetween={10}
              keyboard={{ enabled: true }}
              // Off entirely for anyone who has asked for less motion, rather
              // than merely slowed down.
              autoplay={
                prefersReducedMotion
                  ? false
                  : { delay: AUTOPLAY_DELAY, disableOnInteraction: false }
              }
              // Held while a finger is down. pauseOnMouseEnter would not do
              // it: that waits on an emulated mouse event a touch screen may
              // never send.
              onTouchStart={(swiper: SwiperClass) => swiper.autoplay?.pause()}
              onTouchEnd={(swiper: SwiperClass) => swiper.autoplay?.resume()}
              // Slides are as tall as the tallest card rather than their own
              // content, so the height does not jump between them.
              autoHeight={false}
              onSwiper={(instance: SwiperClass) => instance.update()}
            >
              {processCards.map((card) => (
                <SwiperSlide key={card.id} className="h-auto!">
                  <CardBody card={card} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            /* A list, so six cards announce as six items rather than a run of
               unrelated blocks. */
            <ul ref={stackRef} className="gap-md flex flex-col">
              {processCards.map((card, index) => (
                <StackedCard
                  key={card.id}
                  card={card}
                  index={index}
                  total={processCards.length}
                  progress={scrollYProgress}
                />
              ))}
            </ul>
          )}
        </Container>
      </Section>
    </>
  );
};

export default HowWeWorkCards;
