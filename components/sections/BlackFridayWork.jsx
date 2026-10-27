"use client";

import { Container } from "../ui/Container";
import Section from "../ui/Section";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";

const projects = [
  {
    id: "ivy-duke",
    image: "/images/black-friday/ivy-duke-thumbnail.jpg",
    title: "Ivy & Duke",
    category: "WooCommerce",
    href: "/work/ivy-duke",
  },
  {
    id: "fultons",
    image: "/images/black-friday/fultons-thumbnail.jpg",
    title: "Fultons Jewellery",
    category: "WooCommerce",
    href: "/work/fultons",
  },
  {
    id: "smokey-carter",
    image: "/images/black-friday/smokey-carter-thumbnail.jpg",
    title: "The Smokey Carter",
    category: "WooCommerce",
    href: "/work/the-smokey-carter",
  },
  {
    id: "peter-jones",
    image: "/images/black-friday/peter-jones-thumbnail.jpg",
    title: "Peter Jones Foundation",
    category: "Dashboard",
    href: "/work/peter-jones-foundation",
  },
  {
    id: "minessak",
    image: "/images/black-friday/minessak-thumbnail.jpg",
    title: "Minessak",
    category: "Figma design",
    href: "/work/minessak",
  },
  {
    id: "lola-blake",
    image: "/images/black-friday/lola-thumbnail.jpg",
    title: "lola & blake",
    category: "Wordpress",
    href: "/work/lola-and-blake",
  },
];

const WorkCard = ({ image, title, category, href }) => (
  <Link href={href} className="group block">
    <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
      <Image
        src={image}
        alt={`${title} project`}
        fill
        sizes="(max-width: 480px) 85vw, (max-width: 1200px) 33vw, 380px"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
    </div>

    <div className="mt-[16px] flex items-center justify-between gap-[20px]">
      <h3 className="text-[20px] font-bold tracking-[-0.02em] text-black max-sm:text-[18px]">
        {title}
      </h3>

      <span className="text-[14px] text-[#555555] max-sm:text-[12px]">
        {category}
      </span>
    </div>
  </Link>
);

const BlackFridayWork = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <Section id="black-friday-work" className="py-[80px] max-xl:py-[60px]">
      <Container className="max-xl:px-[40px] max-sm:pr-0 max-sm:pl-[20px]">
        <p className="text-center text-[22px] font-medium tracking-[-0.02em] text-black uppercase max-sm:pr-[20px] max-sm:text-[14px]">
          Our work
        </p>

        <h2 className="mt-[20px] text-center text-[52px] leading-[56px] font-extrabold tracking-[-0.07em] text-black max-sm:mx-auto max-sm:max-w-[256px] max-sm:pr-[20px] max-sm:text-[30px] max-sm:leading-[34px]">
          Stores, sites and dashboards
          <br />
          <span className="text-black/40">we’ve designed and built.</span>
        </h2>

        <div className="mt-[50px] grid grid-cols-3 gap-x-[24px] gap-y-[32px] max-xl:hidden">
          {projects.map((project) => (
            <WorkCard key={project.id} {...project} />
          ))}
        </div>

        <div className="hidden max-xl:mt-[40px] max-xl:block max-sm:mt-[30px]">
          <Swiper
            onSwiper={setSwiper}
            loop
            slidesPerView="auto"
            spaceBetween={16}
            slidesOffsetAfter={20}
            breakpoints={{
              480: { slidesPerView: 2, slidesOffsetAfter: 0 },
              1024: { slidesPerView: 3, slidesOffsetAfter: 0 },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="max-sm:w-[82%]!">
                <WorkCard {...project} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-[45px] flex justify-end max-sm:pr-[20px]">
            <button
              type="button"
              onClick={() => swiper?.slideNext()}
              className="text-text-body cursor-pointer text-[14px] tracking-[-0.02em]"
            >
              Swipe for more →
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BlackFridayWork;
