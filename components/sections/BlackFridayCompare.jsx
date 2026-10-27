"use client";

import { Container } from "../ui/Container";
import Section from "../ui/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const comparisonRows = [
  {
    id: "when-you-pay",
    label: "When you pay",
    typical: "Usually upfront",
    creativePixels: "In milestones you’ve signed off",
  },
  {
    id: "guarantee",
    label: "Guarantee",
    typical: "Often short, or none",
    creativePixels: "3 months on paid work, fixed free",
  },
  {
    id: "commitment",
    label: "Commitment",
    typical: "A monthly plan or a block of hours",
    creativePixels: "None. Send a job when you have one",
  },
  {
    id: "who-you-deal-with",
    label: "Who you deal with",
    typical: "A coordinator or ticket queue",
    creativePixels: "UK-based founder Hassan and one named contact",
  },
  {
    id: "your-clients",
    label: "Your clients",
    typical: "NDA if you ask",
    creativePixels: "NDA as standard, never contacted, in writing",
  },
  {
    id: "whats-covered",
    label: "What’s covered",
    typical: "Mostly WordPress",
    creativePixels: "Design, builds, maintenance, SEO and print",
  },
];

const rowClassName =
  "grid grid-cols-[240px_1fr_1.1fr] items-start gap-[20px] px-[30px]";

const CompareCard = ({ label, creativePixels, typical }) => (
  <div className="flex h-full flex-col rounded-[20px] border border-black/10 bg-white p-[30px]">
    <p className="text-text-body text-[14px] font-semibold tracking-[-0.02em]">
      {label}
    </p>

    <p className="text-dark-pink mt-[10px] text-[13px] font-semibold tracking-[-0.02em]">
      CreativePixels
    </p>

    <p className="mt-[4px] text-[16px] leading-[22px] font-bold tracking-[-0.02em] text-black">
      {creativePixels}
    </p>

    <p className="text-text-body mt-[20px] text-[13px] tracking-[-0.02em]">
      Typical service
    </p>

    <p className="mt-[4px] text-[16px] leading-[22px] tracking-[-0.02em] text-[#555555]">
      {typical}
    </p>
  </div>
);

const BlackFridayCompare = () => {
  return (
    <Section id="black-friday-compare" className="py-[120px] max-xl:py-[60px]">
      <Container className="max-xl:px-[40px] max-sm:pr-0 max-sm:pl-[20px]">
        <p className="text-center text-[22px] font-medium tracking-[-0.02em] text-black uppercase max-sm:pr-[20px] max-sm:text-[14px]">
          How we compare
        </p>

        <h2 className="mt-[10px] text-center text-[52px] leading-[56px] font-extrabold tracking-[-0.07em] text-black max-sm:pr-[20px] max-sm:text-[30px] max-sm:leading-[34px]">
          Most white-label services
          <br />
          <span className="text-black/40">want paying first.</span>
        </h2>

        <div className="mx-auto mt-[50px] max-w-[1200px] overflow-hidden rounded-[20px] border border-black/10 max-xl:hidden">
          <div className={`${rowClassName} bg-black py-[20px]`}>
            <span />

            <span className="text-[18px] font-medium tracking-[-0.02em] text-white">
              Typical white-label service
            </span>

            <span className="text-orange text-[18px] font-bold tracking-[-0.02em]">
              CreativePixels
            </span>
          </div>

          {comparisonRows.map(({ id, label, typical, creativePixels }) => (
            <div
              key={id}
              className={`${rowClassName} border-t border-black/5 py-[20px]`}
            >
              <span className="text-[22px] leading-[28px] font-bold text-black">
                {label}
              </span>

              <span className="text-[20px] leading-[28px] text-[#555555]">
                {typical}
              </span>

              <span className="text-[20px] leading-[28px] font-semibold text-black">
                {creativePixels}
              </span>
            </div>
          ))}
        </div>

        <div className="hidden max-xl:mt-[40px] max-xl:block max-sm:mt-[30px]">
          <Swiper
            modules={[Pagination]}
            slidesPerView="auto"
            spaceBetween={16}
            slidesOffsetAfter={20}
            breakpoints={{
              480: { slidesPerView: 2, slidesOffsetAfter: 0 },
              1024: { slidesPerView: 3, slidesOffsetAfter: 0 },
            }}
            pagination={{ clickable: true }}
            style={{
              "--swiper-pagination-color": "#1A1A1A",
              "--swiper-pagination-bullet-inactive-color": "#1A1A1A",
              "--swiper-pagination-bullet-inactive-opacity": "0.2",
            }}
            className="pb-[40px]!"
          >
            {comparisonRows.map((row) => (
              <SwiperSlide key={row.id} className="h-auto! max-sm:w-[82%]!">
                <CompareCard {...row} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </Section>
  );
};

export default BlackFridayCompare;
