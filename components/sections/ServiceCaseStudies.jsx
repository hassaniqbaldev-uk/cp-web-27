"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Button from "../ui/Button";
import CircularTextButton from "../ui/CircularTextButton";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

// Shared case study slider for service pages. Each page passes its own id,
// heading and projects; background, projects link and dot style are optional.
const ServiceCaseStudies = ({
  id,
  title,
  items,
  background,
  showProjectsLink = false,
  outlinedDots = false,
}) => {
  return (
    <>
      <Section
        id={id}
        className="relative overflow-hidden pt-[120px] pb-[80px]"
      >
        {background && (
          <Image
            src={background}
            alt=""
            fill
            sizes="100vw"
            className="pointer-events-none z-0 object-cover"
          />
        )}

        <Container className="relative z-10">
          <div className="relative flex justify-center text-center">
            <SectionHeading
              title={title}
              titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
            />

            {showProjectsLink && (
              <div className="absolute top-[-70px] right-[300px]">
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
            )}
          </div>
        </Container>

        {/* Full-bleed slider: each slide spans the full width (one at a time),
            with the card centred at Container width. overflow-visible keeps the
            shadow uncut; the Section's overflow-hidden stops horizontal scroll. */}
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          style={{
            "--swiper-pagination-color": "#000000",
            "--swiper-pagination-bullet-inactive-color": outlinedDots
              ? "transparent"
              : "#000000",
            "--swiper-pagination-bullet-inactive-opacity": outlinedDots
              ? "1"
              : "0.2",
            ...(outlinedDots && {
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-horizontal-gap": "3px",
            }),
            "--swiper-pagination-bottom": "40px",
          }}
          className={`overflow-visible! pt-[60px]! pb-[100px]! ${
            outlinedDots
              ? "[&_.swiper-pagination-bullet]:border [&_.swiper-pagination-bullet]:border-black"
              : ""
          }`}
        >
          {items.map(
            ({
              id: projectId,
              image,
              imageWidth,
              imageHeight,
              imageAlt,
              tags,
              title,
              ctaLabel,
              href,
            }) => (
              <SwiperSlide key={projectId} className="h-auto! px-[20px]">
                <div className="mx-auto flex h-full max-w-[1200px] items-center gap-[60px] rounded-[20px] bg-white p-[45px] shadow-[16px_16px_150px_0px_#00000017]">
                  <div className="bg-grey/60 relative h-[380px] w-[560px] shrink-0 overflow-hidden rounded-[20px]">
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

                  <div className="flex w-[470px] flex-col items-start">
                    <ul className="flex flex-wrap items-center gap-[10px]">
                      {tags.map((tag) => (
                        <li
                          key={tag}
                          className="bg-blue/10 text-blue rounded-full px-[25px] py-[12px] text-[18px] font-semibold tracking-[-0.02em] uppercase"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <h3 className="mt-[25px] text-[45px] leading-[55px] font-bold tracking-[-0.07em] text-black">
                      {title}
                    </h3>

                    <div className="flex">
                      <Button
                        href={href}
                        className="mt-[40px] rounded-full bg-black px-[20px] py-[12px] text-[16px] font-extrabold tracking-[-0.02em] text-white uppercase"
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

export default ServiceCaseStudies;
