"use client";

import { partnerStats } from "@/config/common";
import Image from "next/image";
import { useState } from "react";
import FadeUp, { LINE_STAGGER, MaskReveal } from "../animations/FadeUp";
import Button from "../ui/Button";
import DragMarquee from "../ui/DragMarquee";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

// Kept here rather than in config: four lines that belong to this hero
// alone. The swatch colours are complete class strings, since Tailwind scans
// source files for full class names.
const terms = [
  { id: "nda", text: "NDA before the brief", swatchClassName: "bg-dark-pink" },
  {
    id: "client",
    text: "Your client stays yours",
    swatchClassName: "bg-orange",
  },
  { id: "fit", text: "Yes or no on fit in 48h", swatchClassName: "bg-blue" },
  {
    id: "scope",
    text: "Any part, or all of it",
    swatchClassName: "bg-[#6FDC8C]",
  },
];

// backdrop-filter takes one radius, so a blur that ramps has to be stacked:
// each layer doubles the radius and is masked to start a little lower, and the
// overlap reads as a smooth progression.
const BLUR_LAYERS = [0.7, 1.4, 2.8, 5.6, 11.25, 22.5, 45, 90];

// Where the blur begins, as a share of the layer's height.
const BLUR_START = 12.45;

// The load sequence, in seconds, as the other heroes': the header drops in
// first, over 0.8s, and the heading starts once it is well on its way. The
// mockup rises with the title. The button, the terms and the stats have no
// time of their own: they take the slots after the subtitle's last line, one
// after another, since how many lines the heading breaks into depends on the
// width.
const HEADING_DELAY = 0.5;
const MOCKUP_DELAY = 0.6;

/** Gap between one item and the next below the heading, as the scroll
 *  reveals' stagger. */
const ITEM_STAGGER = 0.12;

const PartnerHero = () => {
  // How many lines the title and the subtitle broke into, once measured.
  const [titleLines, setTitleLines] = useState<number | null>(null);
  const [subtitleLines, setSubtitleLines] = useState<number | null>(null);

  const isMeasured = titleLines !== null && subtitleLines !== null;

  // The label takes the first slot and each title and subtitle line one more,
  // so the button takes the slot after the subtitle's last line.
  const afterHeading =
    HEADING_DELAY +
    (1 + (titleLines ?? 0) + (subtitleLines ?? 0)) * LINE_STAGGER;

  // The button, then the terms, then the stats.
  const slot = (position: number) => afterHeading + position * ITEM_STAGGER;

  return (
    <>
      <Section
        id="partner-hero"
        className="bg-grey/40 max-425:min-h-auto max-425:pt-[13rem] max-425:pb-[3rem] relative flex min-h-screen flex-col justify-center pt-[20rem] pb-[8rem]"
      >
        <div className="absolute inset-0 overflow-hidden">
          {/* At 425 it is centred and sits on the section's bottom padding,
              so the stats run across the foot of it, as the about hero's
              photo does.

              The position sits on the wrapper, which is what rises; w-max
              holds the wrapper to the image's own width, which an absolute
              box would otherwise shrink away from. */}
          <FadeUp
            play
            delay={MOCKUP_DELAY}
            className="max-425:right-auto max-425:left-1/2 max-425:-translate-x-1/2 max-425:bottom-[3rem] absolute right-0 bottom-[8rem] w-max"
          >
            <Image
              src="/images/partner-with-us/hero-mockup-img.png"
              alt=""
              aria-hidden="true"
              width={941}
              height={850}
              className="max-425:h-auto max-425:w-[40rem] max-425:max-w-none block shrink-0"
            />
          </FadeUp>

          <div
            aria-hidden="true"
            className="max-425:bottom-[3rem] max-425:h-[16rem] pointer-events-none absolute bottom-[8rem] left-0 h-[37.1rem] w-full"
          >
            {BLUR_LAYERS.map((blur, index) => {
              const span = (100 - BLUR_START) / BLUR_LAYERS.length;
              const from = BLUR_START + span * index;
              const mask = `linear-gradient(to bottom, transparent ${from}%, black ${from + span}%, black 100%)`;

              return (
                <span
                  key={blur}
                  className="absolute inset-0"
                  style={{
                    backdropFilter: `blur(${blur}px)`,
                    WebkitBackdropFilter: `blur(${blur}px)`,
                    maskImage: mask,
                    WebkitMaskImage: mask,
                  }}
                />
              );
            })}

            <span className="absolute inset-0 bg-[linear-gradient(0deg,#F4F4F4_0%,rgba(244,244,244,0)_100%)]" />
          </div>
        </div>

        <Container className="relative z-10">
          <div className="max-425:w-full max-425:px-[3rem] max-425:items-center max-425:text-center flex w-[56.5rem] flex-col items-start">
            <SectionHeading
              as="h1"
              reveal
              revealDelay={HEADING_DELAY}
              onRevealTitleMeasure={setTitleLines}
              onRevealSubtitleMeasure={setSubtitleLines}
              label="For agencies"
              title={
                <>
                  White-label websites, built{" "}
                  <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                    for agencies.
                  </span>
                </>
              }
              subtitle="Your name on the work, ours on nothing. White label web design and development for agencies: we support you with design, development, ecommerce, apps and specialist work under their brand, without competing for the client relationship."
              labelClassName="text-body-01 max-425:text-[1.4rem] font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-heading-02 max-425:mt-[.4rem] max-425:mx-auto max-425:max-w-[30rem] max-425:text-[4.5rem] max-425:leading-[4.5rem] mt-xs leading-[9rem] font-extrabold tracking-[-0.07em] text-black"
              subtitleClassName="text-body-02 max-425:text-[1.6rem] max-425:leading-[2.4rem] text-text-body mt-sm max-w-[70rem] leading-[2.8rem] tracking-[-0.02em]"
            />

            {/* Rises out of a mask, as the other heroes' buttons do. flex
                inside it, so no line box is left beneath the button. */}
            <div className="[clip-path:inset(-100vh_-100vw_-0.25em_-100vw)]">
              <MaskReveal
                as="div"
                className="flex"
                play={isMeasured}
                delay={slot(0)}
              >
                <Button
                  href="/contact"
                  className="text-body-03 max-425:text-[1.4rem] max-425:mt-[2rem] px-sm py-xs mt-md rounded-full bg-black font-extrabold tracking-[-0.02em] text-white uppercase"
                >
                  Tell us what you need
                </Button>
              </MaskReveal>
            </div>
          </div>

          {/* A list, so the four read as a set of terms rather than four loose
              lines. After the heading in the source, so the h1 is read first;
              above 425 it is absolute, so its place in the source moves
              nothing, and at 425 it drops into the flow beneath the heading.

              It rises itself, with every class it had, rather than inside a
              wrapper, so its absolute box is sized exactly as before. */}
          <FadeUp
            as="ul"
            play={isMeasured}
            delay={slot(1)}
            className="p-md max-425:static max-425:mx-[3rem] max-425:mt-md max-425:p-[2rem] absolute top-[-7rem] right-0 flex flex-col gap-[.8rem] rounded-md bg-white"
          >
            {terms.map(({ id, text, swatchClassName }) => (
              <li key={id} className="gap-xs flex items-center">
                <span
                  aria-hidden="true"
                  className={`size-[.8rem] shrink-0 ${swatchClassName}`}
                />

                <span className="text-body-03 max-425:text-[1.4rem] tracking-[-0.02em] text-black">
                  {text}
                </span>
              </li>
            ))}
          </FadeUp>

          {/* Clips the track below 425, where the four sit in a row wider than
              the screen. Under reduced motion the animation stops and this
              becomes an ordinary horizontal scroller, so every card stays
              reachable. */}
          <FadeUp
            play={isMeasured}
            delay={slot(2)}
            className="max-425:overflow-hidden max-425:motion-reduce:overflow-x-auto max-425:mt-[22rem] mt-[6rem]"
          >
            {/* Drives the track below 425, where it can also be grabbed and
                thrown. Its only child must be the track, which is what it
                measures. */}
            <DragMarquee>
              <ul className="max-425:w-max max-425:flex-nowrap max-425:flex grid grid-cols-4 gap-[.6rem]">
                {/* The second pass is the copy the loop needs. It is hidden
                    from assistive tech and from every width above the
                    breakpoint, so the grid stays four cards and nothing is
                    announced twice. */}
                {[false, true].map((isCopy) =>
                  partnerStats.map(({ id, value, label }) => (
                    <li
                      key={isCopy ? `${id}-copy` : id}
                      {...(isCopy && { "aria-hidden": true })}
                      className={`gap-sm max-425:gap-xs p-sm max-425:w-[20rem] max-425:shrink-0 max-425:rounded-sm items-center rounded-md bg-white select-none ${
                        isCopy ? "max-425:flex hidden" : "flex"
                      }`}
                    >
                      <p className="max-425:text-[3.5rem] shrink-0 text-[5rem] font-extrabold tracking-[-0.07em] text-black">
                        {value}
                      </p>

                      <span
                        aria-hidden="true"
                        className="max-425:h-[2rem] h-[4rem] w-px shrink-0 bg-black"
                      />

                      <p className="max-425:text-[1.2rem] max-425:leading-[1.8rem] text-text-body leading-[2.2rem] font-medium tracking-[-0.02em]">
                        {label}
                      </p>
                    </li>
                  )),
                )}
              </ul>
            </DragMarquee>
          </FadeUp>
        </Container>
      </Section>
    </>
  );
};

export default PartnerHero;
