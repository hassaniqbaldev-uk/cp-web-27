"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { HiExclamationTriangle, HiLightBulb } from "react-icons/hi2";
import { ImQuotesLeft } from "react-icons/im";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Button from "../ui/Button";
import CircularTextButton from "../ui/CircularTextButton";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

// Names, not components: icons can't be passed from a server page as props.
const pointIcons = { problem: HiExclamationTriangle, built: HiLightBulb };

// Shared project slider (points + client quote) for service pages. Each page
// passes its own id, heading and projects; a project's points default to one
// light bulb row made from its title and description. Subtitle and background
// are optional.
const ServiceProjects = ({
  id,
  title,
  subtitle,
  items,
  background,
  showProjectsLink = false,
  large = false,
}) => {
  return (
    <>
      <Section
        id={id}
        className="relative overflow-hidden pt-[120px] pb-[80px] max-sm:pt-[80px] max-sm:pb-[40px]"
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

        <Container className="relative z-10 max-sm:px-[20px]">
          <div className="relative flex justify-center text-center max-sm:flex-col max-sm:items-center max-sm:gap-[24px]">
            <SectionHeading
              title={title}
              subtitle={subtitle}
              subtitleClassName="text-text-body mt-[20px] text-[22px] leading-[28px] tracking-[-0.02em] max-sm:mt-[16px] max-sm:text-[16px] max-sm:leading-[24px]"
              titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[30px] max-sm:leading-[32px]"
            />

            {showProjectsLink && (
              <div className="absolute top-[-20px] right-[160px] max-sm:static">
                <CircularTextButton
                  href="/work"
                  image="/images/home/circular-text-projects.png"
                  imageWidth={113}
                  imageHeight={113}
                  className="size-[112px] max-sm:size-[90px]"
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

        {/* Same full-bleed, one-at-a-time slider as ServiceCaseStudies. Bullets
            are outlined circles with the active one filled. */}
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          rewind
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          // Autoplay is for phones only; desktop keeps the manual slider.
          onSwiper={(swiper) => {
            if (!window.matchMedia("(max-width: 479.98px)").matches) {
              swiper.autoplay.stop();
            }
          }}
          pagination={{ clickable: true }}
          style={{
            "--swiper-pagination-color": "#000000",
            "--swiper-pagination-bullet-inactive-color": "transparent",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "3px",
            "--swiper-pagination-bottom": "var(--projects-dots-bottom, 40px)",
          }}
          className="overflow-visible! pt-[60px]! pb-[100px]! max-sm:pt-[30px]! max-sm:pb-[70px]! max-sm:[--projects-dots-bottom:20px] [&_.swiper-pagination-bullet]:border [&_.swiper-pagination-bullet]:border-black"
        >
          {items.map(
            ({
              id: projectId,
              image,
              imageWidth,
              imageHeight,
              imageAlt,
              accent,
              title: projectTitle,
              description,
              points = [{ icon: "built", title: projectTitle, description }],
              quote,
              ctaLabel,
              href,
            }) => (
              <SwiperSlide key={projectId} className="h-auto! px-[20px]">
                <div
                  className={`mx-auto flex h-full max-w-[1200px] items-center rounded-[20px] bg-white shadow-[16px_16px_150px_0px_#00000017] max-sm:flex-col max-sm:items-stretch max-sm:gap-[20px] max-sm:p-[16px] ${large ? "gap-[52px] p-[30px]" : "gap-[45px] p-[25px]"}`}
                >
                  <div
                    className={`bg-grey/60 relative w-[560px] shrink-0 overflow-hidden rounded-[15px] max-sm:h-[220px] max-sm:w-full max-sm:rounded-[14px] ${large ? "h-[513px]" : "h-[420px]"}`}
                  >
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

                  <div className="flex flex-1 flex-col items-start pr-[20px] max-sm:px-[4px] max-sm:pb-[8px]">
                    {points.map(
                      (
                        { icon, title: pointTitle, description: text },
                        index,
                      ) => {
                        const Icon = pointIcons[icon];

                        return (
                          <div key={pointTitle} className="w-full">
                            {index > 0 && (
                              <span className="my-[30px] block h-px w-full bg-black/10 max-sm:my-[20px]" />
                            )}

                            <div className="flex items-start gap-[20px] max-sm:gap-[14px]">
                              <span
                                className={`flex shrink-0 items-center justify-center rounded-full text-white max-sm:size-[42px] ${large ? "size-[60px]" : "size-[50px]"}`}
                                style={{ backgroundColor: accent }}
                              >
                                <Icon size={large ? 28 : 24} />
                              </span>

                              <div>
                                <h3 className="text-[25px] leading-[30px] font-bold tracking-[-0.05em] text-black max-sm:text-[20px] max-sm:leading-[25px]">
                                  {pointTitle}
                                </h3>

                                <p className="text-text-body mt-[5px] text-[16px] leading-[24px] tracking-[-0.02em] max-sm:text-[15px] max-sm:leading-[22px]">
                                  {text}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      },
                    )}

                    <span
                      className={`my-[30px] w-full max-sm:my-[20px] ${points.length > 1 ? "mb-0" : "h-px bg-black/10"}`}
                    />

                    <figure className="bg-grey/40 flex w-full items-start gap-[20px] rounded-[15px] p-[25px] max-sm:gap-[12px] max-sm:p-[16px]">
                      <ImQuotesLeft
                        size={22}
                        className="mt-[4px] shrink-0"
                        style={{ color: accent }}
                      />

                      <div>
                        <figcaption className="text-[25px] leading-[30px] font-bold tracking-[-0.05em] text-black max-sm:text-[20px] max-sm:leading-[25px]">
                          {quote.name}
                        </figcaption>

                        <blockquote className="text-text-body mt-[5px] text-[16px] leading-[24px] tracking-[-0.02em] max-sm:text-[15px] max-sm:leading-[22px]">
                          {quote.text}
                        </blockquote>
                      </div>
                    </figure>

                    <div className="flex">
                      <Button
                        href={href}
                        className="mt-[30px] rounded-full bg-black px-[20px] py-[12px] text-[16px] font-extrabold tracking-[-0.02em] text-white uppercase max-sm:mt-[24px] max-sm:text-[15px]"
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

export default ServiceProjects;
