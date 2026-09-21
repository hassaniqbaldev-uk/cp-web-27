"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Container } from "../ui/Container";
import Section from "../ui/Section";

// TODO: add the film, its poster frame and a captions track.
const originFilm = {
  src: "/videos/origin-story.mp4",
  poster: "/images/about/hassan-about-img.png",
  name: "Hassan",
  role: "Founder & Managing Director",
};

const AboutStory = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <Section id="origin-story" className="py-3xl">
        <Container>
          <div className="gap-lg flex items-end">
            <div className="w-[54rem]">
              {/* Deliberately not a heading: the section's heading is the
                  title in the next column, and two would split the outline. */}
              <p className="text-body-01 font-medium tracking-[-0.02em] text-black uppercase">
                Origin story
              </p>

              <div className="mt-xl relative h-[66.7rem] w-full overflow-hidden rounded-md bg-[#D9D9D9]">
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

                {/* Hidden once playing, so it stops covering the native
                    controls and the picture. */}
                {!isPlaying && (
                  <div className="p-sm gap-sm absolute inset-x-0 bottom-0 flex items-end justify-between">
                    <div className="border-l border-white/60 pl-[1.2rem]">
                      <p className="text-body-03 font-bold tracking-[-0.02em] text-white">
                        {originFilm.name}
                      </p>

                      <p className="text-body-04 tracking-[-0.02em] text-white/80">
                        {originFilm.role}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => videoRef.current?.play()}
                      aria-label={"Play the story from " + originFilm.name}
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
            </div>

            <div className="w-[55rem]">
              <h2 className="text-heading-02 leading-[9rem] font-extrabold tracking-[-0.07em] text-black">
                Started young.{" "}
                <span className="text-text-body/60">
                  Built properly over time.
                </span>
              </h2>

              <p className="text-body-01 text-text-body mt-sm tracking-[-0.02em]">
                I started building websites at 13. That early obsession
                eventually became CreativePixels - and the same idea still
                drives the agency now: understand the problem, make the work
                useful, and care about what happens after launch.
              </p>

              {/* figure and figcaption are the pair that ties a quote to the
                  person who said it, rather than leaving them as two
                  unrelated paragraphs. */}
              <figure className="bg-orange/10 p-md mt-lg rounded-md">
                <Image
                  src="/icons/quote-icon.svg"
                  alt=""
                  width={37}
                  height={28}
                />

                <blockquote className="text-body-01 text-text-body my-sm tracking-[-0.02em]">
                  &ldquo;That same mindset still drives the team today -
                  thoughtful strategy, functional builds and design that
                  works.&rdquo;
                </blockquote>

                <figcaption className="text-body-03 text-text-body font-medium tracking-[-0.02em]">
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
