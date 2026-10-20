"use client";

import { processCards } from "@/config/common";
import { useElementProgress } from "@/hooks/useScrollProgress";

import Image from "next/image";
import { useCallback, useRef } from "react";

import { Container } from "../ui/Container";
import Section from "../ui/Section";

const SCALE_STEP = 0.04;

const STACK_OFFSET = 3;

const CardBody = ({ card }) => {
  const { step, title, description, details, image, imageAlt } = card;

  return (
    <div className="gradient-border relative flex items-center justify-between gap-[45px] rounded-[20px] bg-[#EAF1FF] p-[60px] pr-[100px] [--gradient-border-image:linear-gradient(180deg,var(--color-blue)_0%,rgba(48,120,255,0)_100%)] [--gradient-border-width:1px]">
      <div className="w-[500px]">
        <p className="text-[35px] font-normal tracking-[-0.07em] text-black">
          {step}
        </p>

        <h3 className="mt-[10px] text-[45px] leading-[50px] font-bold tracking-[-0.07em] text-black">
          {title}
        </h3>

        <p className="text-text-body mt-[20px] text-[18px] leading-[25px] tracking-[-0.02em]">
          {description}
        </p>

        <ul className="mt-[45px] flex flex-col divide-y divide-black/30">
          {details.map(
            ({ id: detailId, icon: Icon, iconClassName, ...detail }) => (
              <li
                key={detailId}
                className="flex items-start gap-[20px] py-[30px] first:pt-0 last:pb-0"
              >
                <Icon
                  size={58}
                  strokeWidth={2}
                  className={`shrink-0 ${iconClassName}`}
                />

                <div>
                  <p className="text-[22px] font-extrabold tracking-[-0.04em] text-black">
                    {detail.title}
                  </p>

                  <p className="text-text-body mt-[3px] text-[18px] leading-[25px] tracking-[-0.02em]">
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
        className="shrink-0 rounded-[20px]"
      />
    </div>
  );
};

const StackedCard = ({ card, index }) => {
  return (
    <li className="sticky top-[120px]">
      <div
        data-card
        style={{ top: `${index * STACK_OFFSET}rem` }}
        className="relative origin-top"
      >
        <CardBody card={card} />
      </div>
    </li>
  );
};

const HowWeWorkCards = () => {
  const stackRef = useRef(null);

  const total = processCards.length;

  const shrink = useCallback(
    (progress) => {
      const node = stackRef.current;

      if (!node) return;

      const cards = node.querySelectorAll("[data-card]");
      const span = Math.max(total - 1, 1);

      cards.forEach((card, index) => {
        const target = 1 - (total - index - 1) * SCALE_STEP;
        const start = index / span;

        if (start >= 1) {
          card.style.scale = "";
          return;
        }

        const reached = Math.min(
          1,
          Math.max(0, (progress - start) / (1 - start)),
        );

        card.style.scale = String(1 + (target - 1) * reached);
      });
    },
    [total],
  );

  useElementProgress(stackRef, shrink);

  return (
    <>
      <Section id="card-stack" className="pt-[400px] pb-[160px]">
        <Container>
          <ul ref={stackRef} className="flex flex-col gap-[30px]">
            {processCards.map((card, index) => (
              <StackedCard key={card.id} card={card} index={index} />
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default HowWeWorkCards;
