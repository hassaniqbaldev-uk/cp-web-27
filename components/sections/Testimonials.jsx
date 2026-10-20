"use client";

import { testimonials } from "@/config/common";
import { Play, Star } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
      <Section id="testimonials" className="overflow-hidden py-[120px]">
        <Container>
          <SectionHeading
            label="Testimonials"
            title={
              <>
                250+ Clients. <br />
                <span className="text-text-body/50">Built on Great Work.</span>
              </>
            }
            labelClassName="text-[22px] text-center font-medium tracking-[-0.02em] text-black uppercase"
            titleClassName="text-[85px] mt-[10px] text-center leading-[90px] font-extrabold tracking-[-0.07em] text-black"
          />
        </Container>

        <div className="mt-[80px] ml-[max(0px,calc((100%-1200px)/2))] flex items-stretch gap-[30px]">
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

          <div className="relative mr-[30px] min-w-0 flex-1">
            <div className="h-full">
              <Swiper
                slidesPerView="auto"
                spaceBetween={30}
                loop
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
                      <figure className="bg-grey/40 flex h-full flex-col rounded-[20px] p-[30px]">
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

                        <Image
                          src="/icons/quote-icon.svg"
                          alt=""
                          width={36}
                          height={27}
                          className="mt-[30px]"
                        />

                        <blockquote className="text-text-body mt-[20px] text-[16px] leading-[26px] tracking-[-0.02em]">
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
                                      ? "fill-orange text-orange"
                                      : "text-text-body/30"
                                  }
                                />
                              ))}
                            </span>

                            <p className="text-orange text-[14px] tracking-[-0.02em]">
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

            <span className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[60px] bg-linear-to-r from-white to-transparent" />

            <span className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[60px] bg-linear-to-l from-white to-transparent" />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Testimonials;
