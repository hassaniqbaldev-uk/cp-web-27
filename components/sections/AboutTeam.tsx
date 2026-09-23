"use client";

import { teamHandoffs, teamProfiles } from "@/config/common";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

/** Must match the transition on the track, or the snap is seen. */
const SLIDE_DURATION = 300;

/** How long each profile is held before the carousel moves on. */
const AUTOPLAY_INTERVAL = 3500;

// Autoplay belongs to the carousel, which only exists below this width.
const MEDIA_QUERY = "(max-width: 425px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const AboutTeam = () => {
  // Allowed to run past either end of the list: the track holds three copies
  // of the profiles, so there is always a neighbour to slide onto, and the
  // index is brought back into range once the slide has finished.
  const [index, setIndex] = useState(0);

  // Set only for the frame in which the index is brought back, so the jump
  // between copies is not animated and therefore not seen.
  const [isSnapping, setIsSnapping] = useState(false);

  // Off until the media queries have been read, so nothing moves on a wide
  // screen or for anyone who has asked for less motion.
  const [isPlaying, setIsPlaying] = useState(false);

  // Held while the carousel is being used, by pointer or by keyboard.
  const [isPaused, setIsPaused] = useState(false);

  const total = teamProfiles.length;

  // Where the index lands once folded back into the list.
  const selectedPosition = ((index % total) + total) % total;

  const selected = teamProfiles[selectedPosition];

  // The position in the tripled track. The middle copy is the real one, so
  // an untouched carousel starts there.
  const slide = index + total;

  useEffect(() => {
    if (index >= 0 && index < total) return;

    const timer = setTimeout(() => {
      setIsSnapping(true);
      setIndex(((index % total) + total) % total);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [index, total]);

  useEffect(() => {
    if (!isSnapping) return;

    // A frame later, so the browser has painted the snapped position before
    // transitions come back on.
    const frame = requestAnimationFrame(() => setIsSnapping(false));

    return () => cancelAnimationFrame(frame);
  }, [isSnapping]);

  useEffect(() => {
    const narrow = window.matchMedia(MEDIA_QUERY);
    const reduced = window.matchMedia(REDUCED_MOTION_QUERY);

    const sync = () => setIsPlaying(narrow.matches && !reduced.matches);

    sync();

    narrow.addEventListener("change", sync);
    reduced.addEventListener("change", sync);

    return () => {
      narrow.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!isPlaying || isPaused) return;

    const timer = setInterval(
      () => setIndex((current) => current + 1),
      AUTOPLAY_INTERVAL,
    );

    return () => clearInterval(timer);
  }, [isPlaying, isPaused]);

  return (
    <>
      <Section id="team" className="max-425:py-xl py-3xl">
        <Container>
          <div className="gap-lg max-425:gap-sm max-425:px-[3rem] max-425:flex-col max-425:items-center max-425:text-center flex items-end justify-between">
            <SectionHeading
              className="max-425:max-w-[30rem] max-w-[65rem]"
              label="The team"
              title={
                <>
                  Specialists,{" "}
                  <span className="text-black/60">
                    not layers of account management.
                  </span>
                </>
              }
              labelClassName="text-body-01 max-425:text-[1.4rem] font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-heading-02 leading-[9rem] max-425:text-[3.5rem] max-425:leading-[3.5rem]  mt-xs font-extrabold tracking-[-0.07em] text-black"
            />

            <p className="text-body-01 max-425:text-[1.6rem] text-text-body max-425:w-full max-425:max-w-[35rem] w-[48.3rem] tracking-[-0.02em]">
              CreativePixels brings together project leadership, UX and visual
              design, WordPress and ecommerce development, custom application
              engineering and growth expertise. The person leading the
              conversation stays close to the work, while specialists own the
              parts they are best at.
            </p>
          </div>

          <div className="gap-lg max-425:gap-sm max-425:mt-[3.5rem] mt-2xl max-425:flex-col-reverse max-425:px-[1.8rem] flex items-start justify-between">
            <div
              // Silent while the carousel is moving on its own, or every
              // profile would be read out unasked; it speaks again as soon
              // as a person is the one driving it.
              aria-live={isPlaying && !isPaused ? "off" : "polite"}
              className="bg-grey/40 max-425:w-full max-425:p-[2rem] w-[58rem] rounded-md px-[3rem] pt-[3rem] pb-[3.5rem]"
            >
              <div className="gap-sm max-425:gap-[1.6rem] flex justify-between">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  width={202}
                  height={223}
                  className="max-425:w-[12.2rem] max-425:rounded-[1rem] max-425:h-[12.6rem] h-[22rem] w-[20rem] rounded-[1.5rem] object-cover"
                />

                <div className="max-425:w-[17.4rem] flex w-[29rem] flex-col justify-between">
                  <div>
                    <p className="py-xs max-425:py-[.6rem] max-425:px-[1.3rem] max-425:text-[1rem] px-sm border-blue text-body-03 text-blue inline-flex rounded-xl border font-extrabold tracking-[-0.02em]">
                      {selected.role}
                    </p>

                    {/* h3, since the section heading above is the h2. */}
                    <h3 className="text-heading-03 max-425:text-[2rem] max-425:leading-[4rem] leading-[7rem] font-bold tracking-[-0.07em] text-black">
                      {selected.name}
                    </h3>
                  </div>

                  <p className="gap-sm max-425:py-[.8rem] max-425:rounded-[1.2rem] max-425:px-[1.5rem] max-425:gap-[1.2rem] py-sm px-md flex shrink-0 items-center rounded-md bg-white">
                    <span className="text-subheading-02 max-425:text-[2.2rem] font-bold tracking-[-0.07em] text-black">
                      {selected.years}
                    </span>

                    <span
                      aria-hidden="true"
                      className="bg-text-body/30 max-425:h-[2.5rem] h-[4rem] w-px shrink-0"
                    />

                    <span className="text-body-03 max-425:text-[1rem] text-text-body tracking-[-0.02em]">
                      Years of Experience
                    </span>
                  </p>
                </div>
              </div>

              <p className="text-body-02 text-text-body max-425:text-[1.2rem] max-425:leading-[1.6rem] mt-md max-425:mt-sm leading-[2.8rem] tracking-[-0.02em]">
                {selected.description}
              </p>
            </div>

            {/* A grid on desktop; at 425 a track three slots wide with the
                middle slot active. The profiles are laid down three times over,
                so a step off either end lands on a copy rather than on nothing
                and the carousel can go round for ever. */}
            <div
              // Autoplay stops while the carousel is being used and starts
              // again when it is let go. Capture, so it also covers focus
              // moving onto the arrows or an avatar.
              onPointerEnter={() => setIsPaused(true)}
              onPointerLeave={() => setIsPaused(false)}
              onPointerDown={() => setIsPaused(true)}
              onFocusCapture={() => setIsPaused(true)}
              onBlurCapture={() => setIsPaused(false)}
              className="max-425:w-full max-425:gap-xs max-425:flex max-425:items-center max-425:justify-center w-[59rem]"
            >
              <button
                type="button"
                onClick={() => setIndex((current) => current - 1)}
                aria-label="Previous team member"
                aria-controls="team-profiles"
                className="max-425:flex hidden size-[3.2rem] shrink-0 cursor-pointer items-center justify-center rounded-full text-black"
              >
                <ArrowLeft size={18} strokeWidth={2.5} aria-hidden="true" />
              </button>

              <div className="max-425:w-[27rem] max-425:overflow-hidden">
                <ul
                  id="team-profiles"
                  // The offset is a custom property so the movement can stay in
                  // a breakpoint-scoped class; an inline transform would apply
                  // at every width and break the grid.
                  style={{ "--slide": slide } as React.CSSProperties}
                  className={`gap-xs max-425:gap-0 max-425:w-max max-425:flex max-425:px-[9rem] max-425:translate-x-[calc(var(--slide)_*_-9rem)] grid w-full grid-cols-5 ${
                    isSnapping
                      ? ""
                      : "max-425:transition-transform max-425:duration-300 max-425:motion-reduce:transition-none"
                  }`}
                >
                  {/* The outer copies exist only to be slid onto. They are kept
                      from assistive tech and from every width above the
                      breakpoint, so the grid stays twenty avatars and no name
                      is announced three times. */}
                  {[0, 1, 2].flatMap((pass) =>
                    teamProfiles.map(({ id, image, name, role }, position) => {
                      const isCopy = pass !== 1;
                      const slot = pass * total + position;

                      return (
                        <li
                          key={`${id}-${pass}`}
                          {...(isCopy && { "aria-hidden": true })}
                          className={`max-425:w-[9rem] max-425:shrink-0 max-425:justify-center ${
                            isCopy ? "max-425:flex hidden" : "max-425:flex"
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() => setIndex(slot - total)}
                            tabIndex={isCopy ? -1 : undefined}
                            aria-pressed={
                              !isCopy && position === selectedPosition
                            }
                            className={`block cursor-pointer rounded-full p-[0.5rem] transition-opacity duration-300 ${
                              slot === slide
                                ? "gradient-border [--gradient-border-image:linear-gradient(180deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] [--gradient-border-width:2px]"
                                : "bg-transparent opacity-60 hover:opacity-100 focus-visible:opacity-100"
                            }`}
                          >
                            <Image
                              src={image}
                              alt={`${name}, ${role}`}
                              width={100}
                              height={100}
                              className="max-425:size-[8rem] size-[10rem] rounded-full object-cover"
                            />
                          </button>
                        </li>
                      );
                    }),
                  )}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => setIndex((current) => current + 1)}
                aria-label="Next team member"
                aria-controls="team-profiles"
                className="max-425:flex hidden size-[3.2rem] shrink-0 cursor-pointer items-center justify-center rounded-full text-black"
              >
                <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="px-[1.8rem]">
            <div className="bg-blue/10 max-425:mt-lg mt-2xl rounded-md px-[5rem] py-[4.5rem]">
              {/* Deliberately not a heading: it names this box rather than
                opening a new part of the section. */}
              <p className="text-body-01 max-425:text-[1.6rem] text-center font-medium tracking-[-0.02em] text-black uppercase">
                How the teams work together
              </p>

              <ul className="mt-md max-425:flex-col max-425:items-center max-425:gap-2xl flex items-start justify-between">
                {teamHandoffs.map(({ id, image, name, text }, index) => (
                  <li
                    key={id}
                    className="relative flex w-[17rem] flex-col items-center text-center"
                  >
                    {index > 0 && (
                      <span
                        aria-hidden="true"
                        className="max-425:rotate-90 max-425:top-[-4rem] max-425:right-[5.5rem] absolute top-[5rem] right-full h-px w-[6rem] bg-black"
                      />
                    )}

                    {/* Decorative: the name is printed right below it. */}
                    <Image
                      src={image}
                      alt=""
                      aria-hidden="true"
                      width={100}
                      height={100}
                      className="max-425:size-[8rem] size-[10rem] rounded-full object-cover object-top"
                    />

                    <p className="text-subheading-02 max-425:text-[2.2rem] mt-xs font-bold tracking-[-0.07em] text-black">
                      {name}
                    </p>

                    <p className="text-body-02 max-425:text-[1.6rem] text-text-body max-425:leading-[2.4rem] mt-[0.5rem] leading-[2.8rem] tracking-[-0.02em]">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutTeam;
