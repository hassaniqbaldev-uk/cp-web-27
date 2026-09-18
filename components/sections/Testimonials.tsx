"use client";

import { testimonials } from "@/config/common";
import { useReducedMotion } from "framer-motion";
import { Play, Star } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { A11y, Autoplay, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/a11y";

import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

// TODO: swap in the real film, its poster frame and a captions track, and
// move the speaker's details into config once there is more than one.
const clientFilm = {
  src: "/videos/client-testimonial.mp4",
  poster: "/images/home/little-astro-client-video-thumbnail.png",
  name: "Ben",
  role: "Little Astro, Founder",
};

const Testimonials = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <Section id="testimonials" className="py-3xl overflow-hidden">
        <Container>
          <SectionHeading
            label="Testimonials"
            title={
              <>
                250+ Clients. <br />
                <span className="text-text-body/50">Built on Great Work.</span>
              </>
            }
            labelClassName="text-body-01 text-center font-medium tracking-[-0.02em] text-black uppercase"
            titleClassName="text-heading-02 mt-xs text-center leading-[9rem] font-extrabold tracking-[-0.07em] text-black"
          />
        </Container>

        {/* The track starts at the container's own left gutter but runs on to
            the viewport edge, so slides bleed off to the right. max() keeps
            the margin from going negative on a narrow viewport. */}
        <div className="gap-md mt-2xl ml-[max(0px,calc((100%-120rem)/2))] flex items-stretch">
          {/* Its own column beside the track, not a slide, so it stays put
              while the quotes move. */}
          <div className="relative w-[37rem] shrink-0 overflow-hidden rounded-md">
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

            {/* Hidden once playing, so it stops covering the native controls
                and the picture. */}
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

          <div
            // pauseOnMouseEnter only covers pointers. Pausing on focus too
            // means a keyboard reader tabbing into a card does not have it
            // slide away underneath them.
            onFocusCapture={() => swiperRef.current?.autoplay?.stop()}
            onBlurCapture={() => swiperRef.current?.autoplay?.start()}
            // The right margin pulls the track's edge in off the viewport, so
            // the looping cards clear the screen edge instead of running into
            // it. slidesOffsetAfter cannot do this job: a looped track has no
            // last slide to offset from.
            className="mr-md relative min-w-0 flex-1"
          >
            <Swiper
              onSwiper={(instance) => {
                swiperRef.current = instance;
              }}
              modules={[A11y, Autoplay, Keyboard]}
              // Autoplay is switched off entirely for readers who ask for
              // reduced motion, rather than merely slowed down.
              autoplay={
                prefersReducedMotion
                  ? false
                  : {
                      delay: 4000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
              }
              slidesPerView="auto"
              spaceBetween={30}
              // There are only three quotes, which do not fill the row on
              // their own, so the track would end short of the viewport
              // instead of bleeding past it. Looping keeps it full whatever
              // the count, and means the carousel never dead-ends.
              loop
              keyboard={{ enabled: true }}
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
                  // The important flag is needed because Swiper's own
                  // stylesheet sets .swiper-slide to width: 100%, at the same
                  // specificity as this class.
                  <SwiperSlide key={id} className="h-auto! w-[37rem]!">
                    <figure className="bg-grey/40 p-md flex h-full flex-col rounded-md">
                      <div className="gap-sm flex items-center justify-between">
                        {/* Decorative: the attribution below already names
                            the person. */}
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

                      {/* mt-auto pins the attribution to the foot of the card,
                          so it lines up across slides of unequal quote length. */}
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
                          {/* The stars are a picture of the score, so the
                              figure beside them carries it in text. */}
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

            {/* Sit over each end of the track so cards fade out rather than
                being cut off. pointer-events-none keeps them from swallowing
                drags and clicks on the cards underneath. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[6rem] bg-linear-to-r from-white to-transparent"
            />

            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[6rem] bg-linear-to-l from-white to-transparent"
            />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Testimonials;
