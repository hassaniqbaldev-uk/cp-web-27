"use client";

import { Play } from "lucide-react";
import { ImQuotesLeft } from "react-icons/im";
import { useRef, useState } from "react";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const originFilm = {
  src: "/videos/origin-story.mp4",
  poster: "/images/about/hassan-about-img.png",
  name: "Hassan",
  role: "Founder & Managing Director",
};

const AboutStory = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <Section id="origin-story" className="py-[120px] max-sm:py-[80px]">
        <Container className="max-sm:px-[20px]">
          {/* Phones: heading, then the film, then the quote. */}
          <div className="flex gap-[45px] max-sm:flex-col max-sm:gap-[30px]">
            <div className="relative h-[700px] w-[540px] overflow-hidden rounded-[20px] bg-[#D9D9D9] max-sm:order-2 max-sm:h-[460px] max-sm:w-full">
              <video
                ref={videoRef}
                playsInline
                preload="metadata"
                poster={originFilm.poster}
                controls={isPlaying}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="h-full w-full object-cover"
              >
                <source src={originFilm.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {!isPlaying && (
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-[20px] p-[20px]">
                  <div className="border-l border-white/60 pl-[12px]">
                    <p className="text-[16px] font-bold tracking-[-0.02em] text-white">
                      {originFilm.name}
                    </p>

                    <p className="text-[14px] tracking-[-0.02em] text-white/80">
                      {originFilm.role}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => videoRef.current?.play()}
                    className="flex size-[45px] shrink-0 items-center justify-center rounded-full bg-white"
                  >
                    <Play
                      size={18}
                      className="ml-[2px] fill-black text-black"
                    />
                  </button>
                </div>
              )}
            </div>

            <div className="w-[550px] flex-col items-center max-sm:contents">
              <SectionHeading
                className="max-sm:order-1 max-sm:text-center"
                title={
                  <>
                    Started young.{" "}
                    <span className="text-text-body/60">
                      Built properly over time.
                    </span>
                  </>
                }
                subtitle="I started building websites at 13. That early obsession eventually became CreativePixels, and the same idea still drives the agency now: understand the problem, make the work useful, and care about what happens after launch."
                titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.07em] text-black max-sm:text-[36px] max-sm:leading-[38px]"
                subtitleClassName="text-[22px] text-text-body mt-[20px] tracking-[-0.02em] max-sm:mt-[16px] max-sm:text-[17px] max-sm:leading-[25px]"
              />

              <figure className="bg-orange/10 mt-[45px] rounded-[20px] p-[30px] max-sm:order-3 max-sm:mt-0 max-sm:p-[24px]">
                <ImQuotesLeft
                  size={30}
                  aria-hidden="true"
                  className="text-orange shrink-0 max-sm:size-[24px]"
                />

                <blockquote className="text-text-body my-[20px] text-[22px] tracking-[-0.02em] max-sm:my-[14px] max-sm:text-[18px] max-sm:leading-[26px]">
                  &ldquo;a new line with something specific, not a repeat of the
                  body&rdquo;
                </blockquote>

                <figcaption className="text-text-body text-[16px] font-medium tracking-[-0.02em] max-sm:text-[14px]">
                  Hassan Iqbal, Founder &amp; Managing Director
                </figcaption>
              </figure>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutStory;
