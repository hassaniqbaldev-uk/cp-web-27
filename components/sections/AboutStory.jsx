"use client";

import { Play } from "lucide-react";
import Image from "next/image";
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
      <Section id="origin-story" className="py-[120px]">
        <Container>
          <div className="flex items-end gap-[45px]">
            <div className="w-[540px]">
              <p className="text-[22px] font-medium tracking-[-0.02em] text-black uppercase">
                Origin story
              </p>

              <div className="relative mt-[65px] h-[667px] w-full overflow-hidden rounded-[20px] bg-[#D9D9D9]">
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
            </div>

            <div className="w-[550px] flex-col items-center">
              <SectionHeading
                title={
                  <>
                    Started young.{" "}
                    <span className="text-text-body/60">
                      Built properly over time.
                    </span>
                  </>
                }
                subtitle="I started building websites at 13. That early obsession eventually became CreativePixels - and the same idea still drives the agency now: understand the problem, make the work useful, and care about what happens after launch."
                titleClassName="text-[85px] leading-[90px] font-extrabold tracking-[-0.07em] text-black"
                subtitleClassName="text-[22px] text-text-body mt-[20px] tracking-[-0.02em]"
              />

              <figure className="bg-orange/10 mt-[45px] rounded-[20px] p-[30px]">
                <Image
                  src="/icons/quote-icon.svg"
                  alt=""
                  width={37}
                  height={28}
                />

                <blockquote className="text-text-body my-[20px] text-[22px] tracking-[-0.02em]">
                  &ldquo;That same mindset still drives the team today -
                  thoughtful strategy, functional builds and design that
                  works.&rdquo;
                </blockquote>

                <figcaption className="text-text-body text-[16px] font-medium tracking-[-0.02em]">
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
