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
      <Section className="py-3xl max-425:py-xl max-425:px-[3rem] relative overflow-hidden bg-black">
        <Starfield className="max-425:top-auto max-425:bottom-[-30rem] max-425:left-1/2 max-425:-translate-x-1/2 absolute top-0 left-[-5rem] z-0 h-full w-[26rem] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

        <Container className="relative z-10">
          <SectionHeading
            label="Our Expertise"
            title={
              <>
                Digital expertise for <br />
                <span className="text-grey/70">businesses at every stage</span>
              </>
            }
            labelClassName="text-body-01 text-center max-425:text-[1.4rem] font-medium tracking-[-0.02em] text-white uppercase"
            titleClassName="text-heading-02 max-425:text-[4.5rem] max-425:leading-[4.5rem] text-center max-425:mx-auto max-425:max-w-[30rem] text-white mt-xs font-extrabold tracking-[-0.07em]  leading-[8rem]"
          />
        </Container>

        <div
          onFocusCapture={() => swiperRef.current?.autoplay?.stop()}
          onBlurCapture={() => swiperRef.current?.autoplay?.start()}
          className="mt-2xl max-425:mt-lg relative z-10 ml-[max(0px,calc((100%-120rem)/2))]"
        >
          <Swiper
            onSwiper={(instance) => {
              swiperRef.current = instance;
            }}
            modules={[A11y, Autoplay, Keyboard]}

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
            slidesOffsetAfter={0}
            keyboard={{ enabled: true }}
            // Swiper's breakpoints are min-width, so the narrow state is the
            // base and anything above 425 restores the wide one — the opposite
            // way round to the max-* variants everywhere else.
            centeredSlides
            breakpoints={{
              426: { centeredSlides: false, slidesOffsetAfter: 30 },
            }}
          >
            {expertiseCards.map(
              ({ id, icon: Icon, title, description, hoverClassName }) => (
                <SwiperSlide key={id} className="max-425:w-full! w-[38rem]!">
                  <div
                    className={`p-lg max-425:p-md max-425:h-[30rem] flex h-[45rem] w-full flex-col justify-between rounded-md bg-[#454545] transition duration-300 ${hoverClassName}`}
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

          <span
            aria-hidden="true"
            className="max-425:hidden pointer-events-none absolute inset-y-0 left-0 z-20 w-[10rem] bg-linear-to-r from-black to-transparent opacity-85"
          />

          <span
            aria-hidden="true"
            className="max-425:hidden pointer-events-none absolute inset-y-0 right-0 z-20 w-[10rem] bg-linear-to-l from-black to-transparent opacity-85"
          />
        </div>
      </Section>
    </>
  );
};

export default Expertise;
