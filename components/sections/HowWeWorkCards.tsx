"use client";

import { processCards } from "@/config/common";
import { useMediaQuery, usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { useElementProgress } from "@/hooks/useScrollProgress";
import type { ProcessCard } from "@/types/common";
import Image from "next/image";
import { useCallback, useRef } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { A11y, Autoplay, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";

import { Container } from "../ui/Container";
import Section from "../ui/Section";

const SCALE_STEP = 0.04;

const STACK_OFFSET = 3;

const MEDIA_QUERY = "(max-width: 425px)";

const AUTOPLAY_DELAY = 5000;

const CardBody = ({ card }: { card: ProcessCard }) => {
  const { step, title, description, details, image, imageAlt } = card;

  return (
    <div className="gradient-border gap-lg max-425:gap-[3.5rem] max-425:h-full max-425:flex-col max-425:p-[3rem] relative flex items-center justify-between rounded-md bg-[#EAF1FF] p-[6rem] pr-[10rem] [--gradient-border-image:linear-gradient(180deg,var(--color-blue)_0%,rgba(48,120,255,0)_100%)] [--gradient-border-width:1px]">
      <div className="max-425:w-full w-[50rem]">
        <p className="text-subheading-02 max-425:text-[2rem] font-normal tracking-[-0.07em] text-black">
          {step}
        </p>

        <h3 className="text-heading-03 max-425:text-[3.5rem] max-425:leading-[4.3rem] mt-xs leading-[5rem] font-bold tracking-[-0.07em] text-black">
          {title}
        </h3>

        <p className="text-body-02 max-425:text-[1.6rem] max-425:leading-[2.4rem] text-text-body mt-sm leading-[2.5rem] tracking-[-0.02em]">
          {description}
        </p>

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
};

const StackedCard = ({ card, index }: StackedCardProps) => {
  return (
    <li className="sticky top-[12rem]">
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
  const stackRef = useRef<HTMLUListElement>(null);
  const isNarrow = useMediaQuery(MEDIA_QUERY);
  const prefersReducedMotion = usePrefersReducedMotion();

  const total = processCards.length;

  const shrink = useCallback(
    (progress: number) => {
      const node = stackRef.current;

      if (!node) return;

      const cards = node.querySelectorAll<HTMLElement>("[data-card]");
      const span = Math.max(total - 1, 1);

      cards.forEach((card, index) => {
        if (prefersReducedMotion) {
          card.style.scale = "";
          return;
        }

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
    [prefersReducedMotion, total],
  );

  useElementProgress(stackRef, shrink);

  return (
    <>
      <Section
        id="card-stack"
        className="max-425:px-[3rem] max-425:pb-[0rem] max-425:pt-[34rem] pt-[40rem] pb-[16rem]"
      >
        <Container>
          <h2 className="sr-only">Our process in detail</h2>

          {isNarrow ? (
            <Swiper
              modules={[A11y, Autoplay, Keyboard]}
              slidesPerView={1}
              spaceBetween={10}
              keyboard={{ enabled: true }}
              autoplay={
                prefersReducedMotion
                  ? false
                  : { delay: AUTOPLAY_DELAY, disableOnInteraction: false }
              }
              onTouchStart={(swiper: SwiperClass) => swiper.autoplay?.pause()}
              onTouchEnd={(swiper: SwiperClass) => swiper.autoplay?.resume()}
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
            <ul ref={stackRef} className="gap-md flex flex-col">
              {processCards.map((card, index) => (
                <StackedCard key={card.id} card={card} index={index} />
              ))}
            </ul>
          )}
        </Container>
      </Section>
    </>
  );
};

export default HowWeWorkCards;
