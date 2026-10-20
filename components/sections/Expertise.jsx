"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { expertiseCards } from "@/config/common";
import { Container } from "../ui/Container";
import Starfield from "../ui/Starfield";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const Expertise = () => {
  return (
    <>
      <Section className="relative overflow-hidden bg-black py-[120px]">
        <Starfield className="absolute top-0 left-[-50px] z-0 h-full w-[260px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

        <Container className="relative z-10">
          <SectionHeading
            label="Our Expertise"
            title={
              <>
                Digital expertise for <br />
                <span className="text-grey/70">businesses at every stage</span>
              </>
            }
            labelClassName="text-[22px] text-center font-medium tracking-[-0.02em] text-white uppercase"
            titleClassName="text-[85px] text-center text-white mt-[10px] font-extrabold tracking-[-0.07em]  leading-[80px]"
          />
        </Container>

        <div className="relative z-10 mt-[80px] ml-[max(0px,calc((100%-1200px)/2))]">
          <Swiper
            slidesPerView="auto"
            spaceBetween={10}
            slidesOffsetAfter={0}
            centeredSlides
            breakpoints={{
              426: { centeredSlides: false, slidesOffsetAfter: 30 },
            }}
          >
            {expertiseCards.map(
              ({ id, icon: Icon, title, description, hoverClassName }) => (
                <SwiperSlide key={id} className="w-[380px]!">
                  <div
                    className={`flex h-[450px] w-full flex-col justify-between rounded-[20px] bg-[#454545] p-[45px] transition duration-300 ${hoverClassName}`}
                  >
                    <Icon
                      size={50}
                      strokeWidth={1.5}
                      className="shrink-0 text-white"
                    />

                    <div className="flex flex-col items-start">
                      <h3 className="text-[25px] font-bold tracking-[-0.04em] text-white">
                        {title}
                      </h3>

                      <p className="mt-[10px] text-[16px] leading-[26px] tracking-[-0.02em] text-white/70">
                        {description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ),
            )}
          </Swiper>

          <span className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[100px] bg-linear-to-r from-black to-transparent opacity-85" />

          <span className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[100px] bg-linear-to-l from-black to-transparent opacity-85" />
        </div>
      </Section>
    </>
  );
};

export default Expertise;
