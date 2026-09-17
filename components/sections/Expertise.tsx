"use client";

import { useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { A11y, Autoplay, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/a11y";

import { expertiseCards } from "@/config/common";
import { Container } from "../ui/Container";
import Starfield from "../ui/Starfield";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const Expertise = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <Section className="py-3xl relative overflow-hidden bg-black">
        {/* The mask curves the field off at the edges, so it reads as a soft
            cloud rather than a rectangle of stars with hard corners. */}
        <Starfield className="absolute top-0 left-[-5rem] z-0 h-full w-[26rem] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

        <Container className="relative z-10">
          <SectionHeading
            label="Our Expertise"
            title={
              <>
                Digital expertise for <br />
                <span className="text-grey/70">businesses at every stage</span>
              </>
            }
            labelClassName="text-body-01 text-center font-medium tracking-[-0.02em] text-white uppercase"
            titleClassName="text-heading-02 text-center text-white mt-xs font-extrabold tracking-[-0.07em]  leading-[8rem]"
          />
        </Container>

        {/* Starts where the container starts, then runs on to the viewport
            edge so slides bleed off to the right. The margin reproduces the
            container's own left gutter; max() keeps it from going negative
            once the viewport is narrower than the container. */}
        <div
          // pauseOnMouseEnter only covers pointers. Pausing on focus too means
          // a keyboard reader tabbing into a card does not have it slide away
          // underneath them.
          onFocusCapture={() => swiperRef.current?.autoplay?.stop()}
          onBlurCapture={() => swiperRef.current?.autoplay?.start()}
          className="mt-2xl relative z-10 ml-[max(0px,calc((100%-120rem)/2))]"
        >
          <Swiper
            onSwiper={(instance) => {
              swiperRef.current = instance;
            }}
            modules={[A11y, Autoplay, Keyboard]}
            // Autoplay is switched off entirely for readers who ask for
            // reduced motion, rather than merely slowed down.
            autoplay={
              prefersReducedMotion
                ? false
                : {
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
            }
            slidesPerView="auto"
            spaceBetween={10}
            // Extra track past the last slide, so at the end of the carousel
            // the final card stops short of the viewport edge rather than
            // sitting flush against it. A Swiper prop rather than padding, so
            // the snap positions stay correct.
            slidesOffsetAfter={30}
            keyboard={{ enabled: true }}
          >
            {expertiseCards.map(
              ({ id, icon: Icon, title, description, hoverClassName }) => (
                // The important flag is needed because Swiper's own stylesheet
                // sets .swiper-slide to width: 100%, at the same specificity as
                // this class.
                <SwiperSlide key={id} className="w-[38rem]!">
                  <div
                    className={`p-lg flex h-[45rem] w-full flex-col justify-between rounded-md bg-[#454545] transition duration-300 ${hoverClassName}`}
                  >
                    <Icon
                      aria-hidden="true"
                      size={50}
                      strokeWidth={1.5}
                      className="shrink-0 text-white"
                    />

                    <div className="flex flex-col items-start">
                      <h3 className="text-subheading-01 font-bold tracking-[-0.04em] text-white">
                        {title}
                      </h3>

                      <p className="text-body-03 mt-xs leading-[2.6rem] tracking-[-0.02em] text-white/70">
                        {description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ),
            )}
          </Swiper>

          {/* Fades the track into the section at both ends, so slides dissolve
              rather than being cut off. pointer-events-none keeps them from
              swallowing drags and clicks on the cards underneath. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[10rem] bg-linear-to-r from-black to-transparent"
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[10rem] bg-linear-to-l from-black to-transparent"
          />
        </div>
      </Section>
    </>
  );
};

export default Expertise;
