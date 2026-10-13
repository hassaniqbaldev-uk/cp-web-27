"use client";

import { testimonials } from "@/config/common";
import { Play, Star } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { A11y, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/a11y";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <Section
        id="testimonials"
        className="py-3xl max-425:px-[3rem] max-425:py-xl overflow-hidden"
      >
        <Container>
          <SectionHeading
            label="Testimonials"
            title={
              <>
                250+ Clients. <br />
                <span className="text-text-body/50">Built on Great Work.</span>
              </>
            }
            labelClassName="text-body-01 max-425:text-[1.4rem] text-center font-medium tracking-[-0.02em] text-black uppercase"
            titleClassName="text-heading-02 max-425:text-[4.5rem] max-425:leading-[4.5rem] mt-xs text-center leading-[9rem] font-extrabold tracking-[-0.07em] text-black"
          />
        </Container>

        <div className="gap-md max-425:gap-lg max-425:mt-lg max-425:flex-col mt-2xl ml-[max(0px,calc((100%-120rem)/2))] flex items-stretch">
          <div className="max-425:order-2 max-425:h-[45rem] max-425:w-full relative w-[37rem] shrink-0 overflow-hidden rounded-md">
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
              <div className="p-sm gap-sm absolute inset-x-0 bottom-0 flex items-end justify-between">
                <div className="border-l border-white/60 pl-[1.2rem]">
                  <p className="text-body-03 font-bold tracking-[-0.02em] text-white">
                    {clientFilm.name}
                  </p>

                  <p className="text-body-04 tracking-[-0.02em] text-white/80">
                    {clientFilm.role}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => videoRef.current?.play()}
                  aria-label={"Play the testimonial from " + clientFilm.name}
                  className="flex size-[4.5rem] shrink-0 items-center justify-center rounded-full bg-white"
                >
                  <Play
                    aria-hidden="true"
                    size={18}
                    className="ml-[0.2rem] fill-black text-black"
                  />
                </button>
              </div>
            )}
          </div>

          <div className="mr-md max-425:order-1 max-425:mr-0 relative min-w-0 flex-1">
            <div className="h-full">
              <Swiper
                modules={[A11y, Keyboard]}
                slidesPerView="auto"
                spaceBetween={30}
                loop
                keyboard={{ enabled: true }}
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
                    <SwiperSlide
                      key={id}
                      className="max-425:w-full! h-auto! w-[37rem]!"
                    >
                      <figure className="bg-grey/40 p-md flex h-full flex-col rounded-md">
                        <div className="gap-sm flex items-center justify-between">
                          <Image
                            src={avatar}
                            alt=""
                            aria-hidden="true"
                            width={66}
                            height={66}
                            className="size-[6.6rem] shrink-0 rounded-full object-cover"
                          />

                          <span className="px-sm py-xs flex shrink-0 items-center rounded-lg border border-[#E9EBEF] bg-white">
                            <Image
                              src={logo}
                              alt={logoAlt}
                              width={logoWidth}
                              height={logoHeight}
                              className="h-[2rem] w-auto"
                            />
                          </span>
                        </div>

                        <Image
                          src="/icons/quote-icon.svg"
                          alt=""
                          width={36}
                          height={27}
                          className="mt-md"
                        />

                        <blockquote className="text-body-03 text-text-body mt-sm leading-[2.6rem] tracking-[-0.02em]">
                          {quote}
                        </blockquote>

                        <figcaption className="gap-sm pt-md mt-auto flex items-end justify-between">
                          <div className="border-text-body/30 border-l pl-[1.2rem]">
                            <p className="text-body-03 font-bold tracking-[-0.02em] text-black">
                              {name}
                            </p>

                            <p className="text-body-04 text-text-body tracking-[-0.02em]">
                              {role}
                            </p>
                          </div>

                          <div className="flex flex-col items-end">
                            <span aria-hidden="true" className="flex">
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

                            <p className="text-body-04 text-orange tracking-[-0.02em]">
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

            <span
              aria-hidden="true"
              className="max-425:hidden pointer-events-none absolute inset-y-0 left-0 z-10 w-[6rem] bg-linear-to-r from-white to-transparent"
            />

            <span
              aria-hidden="true"
              className="max-425:hidden pointer-events-none absolute inset-y-0 right-0 z-10 w-[6rem] bg-linear-to-l from-white to-transparent"
            />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Testimonials;
