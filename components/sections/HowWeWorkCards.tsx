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
import { useRef } from "react";
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

  const { step, title, description, details, image, imageAlt } = card;

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
        className="gradient-border gap-lg relative flex origin-top items-center justify-between rounded-md bg-[#EAF1FF] p-[6rem] pr-[10rem] [--gradient-border-image:linear-gradient(180deg,var(--color-blue)_0%,rgba(48,120,255,0)_100%)] [--gradient-border-width:1px]"
      >
        <div className="w-[50rem]">
          <p className="text-subheading-02 font-normal tracking-[-0.07em] text-black">
            {step}
          </p>

          {/* h3, since the sr-only heading above is the h2. */}
          <h3 className="text-heading-03 mt-xs leading-[5rem] font-bold tracking-[-0.07em] text-black">
            {title}
          </h3>

          <p className="text-body-02 text-text-body mt-sm leading-[2.5rem] tracking-[-0.02em]">
            {description}
          </p>

          {/* divide-y draws the rule between the two rather than around them,
              so neither end trails a stray line, and the padding either side
              centres it between them. */}
          <ul className="mt-lg flex flex-col divide-y divide-black/30">
            {details.map(
              ({ id: detailId, icon: Icon, iconClassName, ...detail }) => (
                <li
                  key={detailId}
                  className="gap-sm py-md flex items-start first:pt-0 last:pb-0"
                >
                  <Icon
                    aria-hidden="true"
                    size={58}
                    strokeWidth={2}
                    className={`shrink-0 ${iconClassName}`}
                  />

                  <div>
                    <p className="text-body-01 font-extrabold tracking-[-0.04em] text-black">
                      {detail.title}
                    </p>

                    <p className="text-body-02 text-text-body mt-[0.3rem] leading-[2.5rem] tracking-[-0.02em]">
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
          className="shrink-0 rounded-md"
        />
      </motion.div>
    </li>
  );
};

const HowWeWorkCards = () => {
  const stackRef = useRef<HTMLUListElement>(null);

  // Runs from the moment the stack's top meets the viewport's top to the moment
  // its bottom does, so the whole stack completes exactly across this list.
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <Section id="card-stack" className="pt-[40rem] pb-[16rem]">
        <Container>
          {/* Names the group, since the cards below are headings and the
              outline would otherwise jump from the page h1 to a run of h2s
              with nothing introducing them. */}
          <h2 className="sr-only">Our process in detail</h2>

          {/* A list, so six cards announce as six items rather than a run of
              unrelated blocks. */}
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
        </Container>
      </Section>
    </>
  );
};

export default HowWeWorkCards;
