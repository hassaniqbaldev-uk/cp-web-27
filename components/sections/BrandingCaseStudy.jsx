"use client";

import { brandingCaseStudies } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { HiLightBulb } from "react-icons/hi2";
import { ImQuotesLeft } from "react-icons/im";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Button from "../ui/Button";
import CircularTextButton from "../ui/CircularTextButton";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const BrandingCaseStudy = () => {
  return (
    <>
      <Section
        id="branding-case-study"
        className="overflow-hidden pt-[120px] pb-[80px]"
      >
        <Container>
          <div className="relative flex justify-center text-center">
            <SectionHeading
              title={
                <>
                  Brand identity <br />
                  <span className="text-black/50">projects, shown in use</span>
                </>
              }
              titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
            />

            <div className="absolute top-[-20px] right-[160px]">
              <CircularTextButton
                href="/work"
                image="/images/home/circular-text-projects.png"
                imageWidth={113}
                imageHeight={113}
                className="size-[112px]"
                ringClassName="h-auto w-full"
              >
                <ArrowUpRight
                  size={28}
                  strokeWidth={2.5}
                  className="text-black"
                />
              </CircularTextButton>
            </div>
          </div>
        </Container>

        {/* Same full-bleed, one-at-a-time slider as ServiceCaseStudies. Bullets
            are outlined circles with the active one filled. */}
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          style={{
            "--swiper-pagination-color": "#000000",
            "--swiper-pagination-bullet-inactive-color": "transparent",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "3px",
            "--swiper-pagination-bottom": "40px",
          }}
          className="overflow-visible! pt-[60px]! pb-[100px]! [&_.swiper-pagination-bullet]:border [&_.swiper-pagination-bullet]:border-black"
        >
          {brandingCaseStudies.map(
            ({
              id,
              image,
              imageWidth,
              imageHeight,
              imageAlt,
              accent,
              title,
              description,
              quote,
              ctaLabel,
              href,
            }) => (
              <SwiperSlide key={id} className="h-auto! px-[20px]">
                <div className="mx-auto flex h-full max-w-[1200px] items-center gap-[45px] rounded-[20px] bg-white p-[25px] shadow-[16px_16px_150px_0px_#00000017]">
                  <div className="bg-grey/60 relative h-[420px] w-[560px] shrink-0 overflow-hidden rounded-[15px]">
                    {image && (
                      <Image
                        src={image}
                        alt={imageAlt}
                        width={imageWidth}
                        height={imageHeight}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>

                  <div className="flex flex-1 flex-col items-start pr-[20px]">
                    <div className="flex items-start gap-[20px]">
                      <span
                        className="flex size-[50px] shrink-0 items-center justify-center rounded-full text-white"
                        style={{ backgroundColor: accent }}
                      >
                        <HiLightBulb size={24} />
                      </span>

                      <div>
                        <h3 className="text-[25px] leading-[30px] font-bold tracking-[-0.05em] text-black">
                          {title}
                        </h3>

                        <p className="text-text-body mt-[5px] text-[16px] leading-[24px] tracking-[-0.02em]">
                          {description}
                        </p>
                      </div>
                    </div>

                    <span className="my-[30px] h-px w-full bg-black/10" />

                    <figure className="bg-grey/40 flex w-full items-start gap-[20px] rounded-[15px] p-[25px]">
                      <ImQuotesLeft
                        size={22}
                        className="mt-[4px] shrink-0"
                        style={{ color: accent }}
                      />

                      <div>
                        <figcaption className="text-[25px] leading-[30px] font-bold tracking-[-0.05em] text-black">
                          {quote.name}
                        </figcaption>

                        <blockquote className="text-text-body mt-[5px] text-[16px] leading-[24px] tracking-[-0.02em]">
                          {quote.text}
                        </blockquote>
                      </div>
                    </figure>

                    <div className="flex">
                      <Button
                        href={href}
                        className="mt-[30px] rounded-full bg-black px-[20px] py-[12px] text-[16px] font-extrabold tracking-[-0.02em] text-white uppercase"
                      >
                        {ctaLabel}
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </Section>
    </>
  );
};

export default BrandingCaseStudy;
