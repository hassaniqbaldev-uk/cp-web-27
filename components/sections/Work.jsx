"use client";

import { homeWorkProjects } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Button from "../ui/Button";
import CircularTextButton from "../ui/CircularTextButton";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const WorkCard = ({ image, imageAlt, tag, title, ctaLabel, href }) => (
  <>
    <div className="relative aspect-[585/383] w-full overflow-hidden rounded-[20px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 479px) 100vw, 585px"
        className="object-cover"
      />

      <span className="absolute bottom-[15px] left-[15px] rounded-[60px] bg-white/20 px-[15px] py-[6px] text-[12px] font-semibold tracking-[-0.02em] text-white uppercase backdrop-blur-[20px] max-sm:bg-black/25 max-sm:backdrop-blur-[8px]">
        {tag}
      </span>
    </div>

    <div className="flex items-center justify-between gap-[20px] pt-[20px] max-sm:flex-col max-sm:items-start max-sm:gap-[14px] max-sm:pt-[16px]">
      <h3 className="max-w-[360px] text-[25px] leading-[31px] font-bold tracking-[-0.05em] text-black max-sm:text-[20px] max-sm:leading-[26px]">
        {title}
      </h3>

      <Button
        href={href}
        className="shrink-0 rounded-[60px] bg-black px-[20px] py-[10px] text-[16px] font-extrabold tracking-[-0.02em] text-white uppercase max-sm:text-[15px]"
      >
        {ctaLabel}
      </Button>
    </div>
  </>
);

const Work = () => {
  return (
    <>
      <Section id="work" className="py-[120px] max-sm:py-[80px]">
        <Container className="max-sm:px-[20px]">
          <div className="relative flex justify-center text-center max-sm:flex-col max-sm:items-center max-sm:gap-[24px]">
            <SectionHeading
              title="Work with a job to do"
              titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[34px] max-sm:leading-[36px]"
            />

            <div className="absolute top-[-70px] right-[190px] max-sm:static">
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
          </div>

          <ul className="mt-[80px] grid grid-cols-2 items-start gap-[30px] max-sm:hidden">
            {homeWorkProjects.map((project) => (
              <li key={project.id} className="overflow-hidden even:mt-[45px]">
                <WorkCard {...project} />
              </li>
            ))}
          </ul>

          {/* Phones: one full card at a time. */}
          <div className="mt-[40px] hidden max-sm:block">
            <Swiper
              modules={[Autoplay, Pagination]}
              loop
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              slidesPerView={1}
              spaceBetween={16}
              pagination={{ clickable: true }}
              style={{
                "--swiper-pagination-color": "#1A1A1A",
                "--swiper-pagination-bullet-inactive-color": "#1A1A1A",
                "--swiper-pagination-bullet-inactive-opacity": "0.2",
              }}
              className="pb-[40px]!"
            >
              {homeWorkProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <WorkCard {...project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Work;
