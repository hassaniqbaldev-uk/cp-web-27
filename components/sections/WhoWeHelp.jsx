"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { whoWeHelpCards } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import CircularTextButton from "../ui/CircularTextButton";
import { Container } from "../ui/Container";
import Starfield from "../ui/Starfield";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const WhoWeHelp = () => {
  return (
    <>
      <Section className="relative overflow-hidden bg-black pt-[120px]">
        <Image
          src="/images/home/gradient-bg-who-we-help-left.png"
          alt=""
          width={704}
          height={1446}
          className="pointer-events-none absolute top-0 left-0 z-0 h-full w-auto"
        />

        <Image
          src="/images/home/gradient-bg-who-we-help-right.png"
          alt=""
          width={545}
          height={1446}
          className="pointer-events-none absolute top-0 right-0 z-0 h-full w-auto"
        />

        <Starfield className="absolute top-0 left-[-50px] z-0 h-full w-[260px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

        <Starfield className="absolute top-0 right-[-50px] z-0 h-full w-[260px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

        <Container className="relative z-10">
          <SectionHeading
            title={
              <>
                Who we{" "}
                <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                  help
                </span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] text-center text-white font-extrabold tracking-[-0.06em]"
          />
        </Container>

        <div className="relative z-10 mt-[60px] ml-[max(0px,calc((100%-1200px)/2))]">
          <Swiper
            slidesPerView="auto"
            spaceBetween={10}
            slidesOffsetAfter={0}
            centeredSlides
            breakpoints={{
              426: { centeredSlides: false, slidesOffsetAfter: 30 },
            }}
          >
            {whoWeHelpCards.map(
              ({
                id,
                icon,
                iconWidth,
                iconHeight,
                title,
                description,
                hoverClassName,
              }) => (
                <SwiperSlide key={id} className="w-[380px]!">
                  <div
                    className={`bg-text-body flex h-[380px] w-full flex-col justify-between rounded-[20px] p-[45px] transition duration-300 ${hoverClassName}`}
                  >
                    <Image
                      src={icon}
                      alt=""
                      width={iconWidth}
                      height={iconHeight}
                      className="shrink-0"
                    />

                    <div className="flex flex-col items-start">
                      <h3 className="text-[35px] font-bold tracking-[-0.07em] text-white">
                        {title}
                      </h3>

                      <p className="mt-[20px] text-[18px] leading-[26px] tracking-[-0.02em] text-white">
                        {description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </div>

        <div className="relative z-10 mx-auto mt-[90px] w-full max-w-[1440px]">
          <Image
            src="/images/home/smokey-carter-who-we-help-img.png"
            alt="Smokey Carter website on a laptop"
            width={1440}
            height={722}
            className="h-auto w-full"
          />

          <div className="absolute top-[80px] right-[240px]">
            <CircularTextButton
              href="/work"
              image="/images/home/circular-text-projects-light.png"
              imageWidth={113}
              imageHeight={113}
              className="size-[113px]"
              ringClassName="h-auto w-full"
            >
              <ArrowUpRight
                size={24}
                strokeWidth={2.5}
                className="text-white"
              />
            </CircularTextButton>
          </div>
        </div>
      </Section>
    </>
  );
};

export default WhoWeHelp;
