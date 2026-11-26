"use client";

import { testimonials } from "@/config/common";
import { Play, Star } from "lucide-react";
import { ImQuotesLeft } from "react-icons/im";
import Image from "next/image";
import { useRef, useState } from "react";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import DragMarquee from "../ui/DragMarquee";
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
        className="relative overflow-hidden py-[120px] max-sm:py-[80px]"
      >
        <Image
          src="/images/home/gradient-bg-testimonials.png"
          alt=""
          fill
          className="pointer-events-none z-0 object-cover"
        />

        <Container className="relative z-10 flex flex-col items-center max-sm:px-[20px]">
          <SectionHeading
            title="What clients say"
            titleClassName="text-[65px] text-center leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[36px] max-sm:leading-[38px]"
          />

          <div className="mt-[20px] flex items-center gap-[15px] max-sm:mt-[16px] max-sm:gap-[8px]">
            <Image
              src="/images/home/clutch-testimonials-logo.png"
              alt="Clutch"
              width={369}
              height={111}
              className="h-[25px] w-auto max-sm:h-[20px]"
            />

            <span className="bg-text-body/30 h-[20px] w-px max-sm:h-[16px]" />

            <span className="flex">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  size={14}
                  className="fill-[#EF4335] text-[#EF4335] max-sm:size-[11px]"
                />
              ))}
            </span>

            <span className="text-[14px] font-medium tracking-[-0.02em] whitespace-nowrap text-black underline underline-offset-[3px] max-sm:text-[12px]">
              4.9/5 from 120+ Clients
            </span>
          </div>
        </Container>

        <div className="relative z-10 mt-[60px] ml-[max(0px,calc((100%-1200px)/2))] flex items-stretch gap-[30px] max-sm:mt-[40px] max-sm:ml-0 max-sm:flex-col max-sm:gap-[20px]">
          <div className="relative w-[370px] shrink-0 overflow-hidden rounded-[20px] max-sm:mx-[20px] max-sm:h-[440px] max-sm:w-auto">
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
            <DragMarquee
              pauseOnHover
              className="h-full mask-[linear-gradient(to_right,transparent_0%,#000_8%,#000_92%,transparent_100%)]"
              trackClassName="flex h-full w-max items-stretch"
              slideClassName="flex shrink-0 pr-[15px]"
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
                  <figure
                    key={id}
                    className="flex w-[370px] flex-col rounded-[20px] bg-white p-[30px] max-sm:w-[290px] max-sm:p-[22px]"
                  >
                    <div className="flex items-center justify-between gap-[20px]">
                      <Image
                        src={avatar}
                        alt=""
                        draggable={false}
                        width={66}
                        height={66}
                        className="size-[66px] shrink-0 rounded-full object-cover max-sm:size-[52px]"
                      />

                      <span className="flex shrink-0 items-center rounded-[30px] border border-[#E9EBEF] bg-white px-[20px] py-[10px] max-sm:px-[14px] max-sm:py-[8px]">
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
                      className="text-blue mt-[30px] shrink-0 max-sm:mt-[20px] max-sm:size-[24px]"
                    />

                    <blockquote className="text-text-body mt-[20px] text-[22px] leading-[30px] tracking-[-0.02em] max-sm:mt-[14px] max-sm:text-[17px] max-sm:leading-[25px]">
                      {quote}
                    </blockquote>

                    <figcaption className="mt-auto flex items-end justify-between gap-[20px] pt-[30px] max-sm:gap-[12px] max-sm:pt-[20px]">
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
                ),
              )}
            </DragMarquee>
          </div>
        </div>

        <Container className="relative z-10 mt-[50px] max-sm:mt-[40px] max-sm:px-[20px]">
          <div className="bg-blue relative flex items-center justify-between gap-[30px] rounded-[20px] px-[50px] py-[30px] max-sm:flex-col max-sm:gap-[24px] max-sm:p-[24px] max-sm:text-center">
            <div className="flex items-center gap-[30px] max-sm:flex-col max-sm:gap-[16px]">
              <Image
                src="/images/home/testimonials-banner-rocket.png"
                alt=""
                width={82}
                height={122}
                className="h-[122px] w-auto max-sm:h-[90px]"
              />

              <p className="text-[35px] leading-[41px] font-extrabold tracking-[-0.07em] text-white max-sm:text-[24px] max-sm:leading-[30px]">
                Launched isn&apos;t finished. Care from £300 a month,{" "}
                <br className="max-sm:hidden" />
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
