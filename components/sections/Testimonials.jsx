"use client";

import { testimonials } from "@/config/common";
import { Play, Star } from "lucide-react";
import { ImQuotesLeft } from "react-icons/im";
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const clientFilm = {
  src: "/videos/client-testimonial.mp4",
  poster: "/images/home/little-astro-client-video-thumbnail.png",
  name: "Ben",
  role: "Little Astro, Founder",
};

const Testimonials = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <Section
        id="testimonials"
        className="relative overflow-hidden py-[120px]"
      >
        <Image
          src="/images/home/gradient-bg-testimonials.png"
          alt=""
          fill
          className="pointer-events-none z-0 object-cover"
        />

        <Container className="relative z-10 flex flex-col items-center">
          <SectionHeading
            title="What clients say"
            titleClassName="text-[65px] text-center leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          <div className="mt-[20px] flex items-center gap-[15px]">
            <Image
              src="/images/home/clutch-testimonials-logo.png"
              alt="Clutch"
              width={369}
              height={111}
              className="h-[25px] w-auto"
            />

            <span className="bg-text-body/30 h-[20px] w-px" />

            <span className="flex">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  size={14}
                  className="fill-[#EF4335] text-[#EF4335]"
                />
              ))}
            </span>

            <span className="text-[14px] font-medium tracking-[-0.02em] text-black underline underline-offset-[3px]">
              4.9/5 from 120+ Clients
            </span>
          </div>
        </Container>

        <div className="relative z-10 mt-[60px] ml-[max(0px,calc((100%-1200px)/2))] flex items-stretch gap-[30px]">
          <div className="relative w-[370px] shrink-0 overflow-hidden rounded-[20px]">
            <video
              ref={videoRef}
              playsInline
              preload="metadata"
              poster={clientFilm.poster}
              controls={isPlaying}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="h-full w-full object-cover"
            >
              <source src={clientFilm.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-[20px] p-[20px]">
                <div className="border-l border-white/60 pl-[12px]">
                  <p className="text-[16px] font-bold tracking-[-0.02em] text-white">
                    {clientFilm.name}
                  </p>

                  <p className="text-[14px] tracking-[-0.02em] text-white/80">
                    {clientFilm.role}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => videoRef.current?.play()}
                  className="flex size-[45px] shrink-0 items-center justify-center rounded-full bg-white"
                >
                  <Play size={18} className="ml-[2px] fill-black text-black" />
                </button>
              </div>
            )}
          </div>

          <div className="relative min-w-0 flex-1">
            <div className="h-full">
              <Swiper
                slidesPerView="auto"
                spaceBetween={15}
                centeredSlides
                breakpoints={{ 426: { centeredSlides: false } }}
                className="h-full"
              >
                {testimonials.map(
                  ({
                    id,
                    avatar,
                    logo,
                    logoAlt,
                    logoWidth,
                    logoHeight,
                    quote,
                    name,
                    role,
                    rating,
                  }) => (
                    <SwiperSlide key={id} className="h-auto! w-[370px]!">
                      <figure className="flex h-full flex-col rounded-[20px] bg-white p-[30px]">
                        <div className="flex items-center justify-between gap-[20px]">
                          <Image
                            src={avatar}
                            alt=""
                            width={66}
                            height={66}
                            className="size-[66px] shrink-0 rounded-full object-cover"
                          />

                          <span className="flex shrink-0 items-center rounded-[30px] border border-[#E9EBEF] bg-white px-[20px] py-[10px]">
                            <Image
                              src={logo}
                              alt={logoAlt}
                              width={logoWidth}
                              height={logoHeight}
                              className="h-[20px] w-auto"
                            />
                          </span>
                        </div>

                        <ImQuotesLeft
                          size={30}
                          aria-hidden="true"
                          className="text-blue mt-[30px] shrink-0"
                        />

                        <blockquote className="text-text-body mt-[20px] text-[22px] leading-[30px] tracking-[-0.02em]">
                          {quote}
                        </blockquote>

                        <figcaption className="mt-auto flex items-end justify-between gap-[20px] pt-[30px]">
                          <div className="border-text-body/30 border-l pl-[12px]">
                            <p className="text-[16px] font-bold tracking-[-0.02em] text-black">
                              {name}
                            </p>

                            <p className="text-text-body text-[14px] tracking-[-0.02em]">
                              {role}
                            </p>
                          </div>

                          <div className="flex flex-col items-end">
                            <span className="flex">
                              {Array.from({ length: 5 }, (_, index) => (
                                <Star
                                  key={index}
                                  size={12}
                                  className={
                                    index < Math.round(rating)
                                      ? "fill-[#FF3D2E] text-[#FF3D2E]"
                                      : "text-text-body/30"
                                  }
                                />
                              ))}
                            </span>

                            <p className="text-[14px] tracking-[-0.02em] text-[#FF3D2E]">
                              {rating.toFixed(1)} Rating
                            </p>
                          </div>
                        </figcaption>
                      </figure>
                    </SwiperSlide>
                  ),
                )}
              </Swiper>
            </div>

            {/* <span className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[60px] bg-linear-to-r from-white to-transparent" />

            <span className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[60px] bg-linear-to-l from-white to-transparent" /> */}
          </div>
        </div>

        <Container className="relative z-10 mt-[50px]">
          <div className="bg-blue relative flex items-center justify-between gap-[30px] rounded-[20px] px-[50px] py-[30px]">
            <div className="flex items-center gap-[30px]">
              <Image
                src="/images/home/testimonials-banner-rocket.png"
                alt=""
                width={82}
                height={122}
                className="h-[122px] w-auto"
              />

              <p className="text-[35px] leading-[41px] font-extrabold tracking-[-0.07em] text-white">
                Launched isn&apos;t finished. Care from £300 a month, <br />
                Grow from £750 a month. Rolling, no lock-in.
              </p>
            </div>

            <div className="flex shrink-0">
              <Button
                href="/services"
                className="rounded-[60px] bg-white px-[20px] py-[10px] text-[16px] font-extrabold tracking-[-0.02em] text-black uppercase"
              >
                See the plans
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Testimonials;
