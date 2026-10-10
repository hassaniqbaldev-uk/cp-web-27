"use client";

import { aboutStats } from "@/config/common";
import DragMarquee from "../ui/DragMarquee";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CountUp from "../animations/CountUp";
import FadeUp, { LINE_STAGGER, MaskReveal } from "../animations/FadeUp";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

// The load sequence, in seconds, as the home hero's: the header drops in
// first, over 0.8s, and the heading starts once it is well on its way. The
// photo rises with the title. The button, the card and the stats have no time
// of their own: they take the slots after the title's last line, one after
// another, since how many lines it breaks into depends on the width.
const HEADING_DELAY = 0.5;
const PHOTO_DELAY = 0.6;

// backdrop-filter takes one radius, so a blur that ramps has to be stacked:
// each layer doubles the radius and is masked to start a little lower, and the
// overlap reads as a smooth progression. Ends at 90, as the design specifies.
const BLUR_LAYERS = [0.7, 1.4, 2.8, 5.6, 11.25, 22.5, 45, 90];

// Where the blur begins, as a share of the layer's height.
const BLUR_START = 12.45;

const AboutHero = () => {
  // How many lines the title broke into, once measured. Everything after the
  // heading waits for it, then follows the last line in the same rhythm.
  const [titleLines, setTitleLines] = useState<number | null>(null);

  const isMeasured = titleLines !== null;

  // The label takes the first slot and each title line one more, so the
  // button's is the one after the last line.
  const buttonDelay = HEADING_DELAY + (1 + (titleLines ?? 0)) * LINE_STAGGER;
  const cardDelay = buttonDelay + LINE_STAGGER;
  const statsDelay = cardDelay + LINE_STAGGER;

  // The figures count up once the stats have begun to rise and are actually
  // on screen: on load where they are visible from the start, and on the way
  // down to them where they are not, as at 425, where they sit below the
  // photo. "some" rather than a share, since at 425 the list is the marquee's
  // track, twice the screen's width, of which only part is ever showing.
  const statsRef = useRef<HTMLUListElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: "some" });
  const [haveStatsRisen, setHaveStatsRisen] = useState(false);

  useEffect(() => {
    if (!isMeasured) return;

    const timer = setTimeout(() => setHaveStatsRisen(true), statsDelay * 1000);

    return () => clearTimeout(timer);
  }, [isMeasured, statsDelay]);

  const shouldCount = haveStatsRisen && isStatsInView;

  return (
    <>
      <Section
        id="about-hero"
        className="bg-grey/40 max-425:min-h-auto max-425:pb-[3rem] max-425:pt-xl flex min-h-screen flex-col justify-center pt-[10rem] pb-[8rem]"
      >
        <Container className="relative">
          <div className="gap-lg max-425:gap-md max-425:px-[3rem] max-425:flex-col max-425:items-center max-425:text-center relative z-[12] flex items-center items-start justify-between pt-[6.3rem]">
            <div className="max-425:items-center max-425:w-full flex w-[51rem] flex-col items-start">
              <SectionHeading
                // The page's single h1 — the outline starts here.
                as="h1"
                reveal
                revealDelay={HEADING_DELAY}
                onRevealTitleMeasure={setTitleLines}
                label="About Creative Pixels"
                title={
                  <>
                    {/* pr compensates for the negative tracking, which
                        otherwise pulls the paint box in and clips the last
                        glyph of a gradient span. */}
                    <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                      Strategy first.
                    </span>{" "}
                    Senior people involved.
                  </>
                }
                labelClassName="text-body-01 max-425:text-[1.4rem] font-medium tracking-[-0.02em] text-black uppercase"
                titleClassName="text-heading-02 max-425:mt-[.4rem] max-425:text-[4.5rem] max-425:leading-[4.5rem] max-425:max-w-[27rem] leading-[9rem] font-extrabold tracking-[-0.07em] text-black"
              />

              {/* Rises out of a mask, as the home hero's button does. flex
                  inside it, so no line box is left beneath the button. */}
              <div className="[clip-path:inset(-100vh_-100vw_-0.25em_-100vw)]">
                <MaskReveal
                  as="div"
                  className="flex"
                  play={isMeasured}
                  delay={buttonDelay}
                >
                  <Button
                    href="/contact"
                    className="text-body-03 max-425:text-[1.4rem] px-sm py-xs max-425:mt-[2rem] mt-md rounded-full bg-black font-extrabold tracking-[-0.02em] text-white uppercase"
                  >
                    Tell us what you need
                  </Button>
                </MaskReveal>
              </div>
            </div>

            <FadeUp
              play={isMeasured}
              delay={cardDelay}
              className="px-md pt-md max-425:w-full max-425:p-[2rem] w-[30.5rem] rounded-md bg-white pb-[4rem]"
            >
              {/* h2, since the page's h1 is the heading beside it. */}
              <h2 className="text-subheading-01 max-425:text-[1.6rem] text-text-body font-bold tracking-[-0.07em]">
                Strategy, Design &amp; Technology, Together
              </h2>

              <p className="text-body-03 max-425:text-[1.2rem] text-text-body mt-xs tracking-[-0.02em]">
                CreativePixels is a UK digital agency bringing strategy, design
                and technology together across websites, ecommerce, branding,
                growth and custom digital products. Senior people stay involved
                from the first conversation through launch - and beyond.
              </p>
            </FadeUp>
          </div>

          {/* Clips the track below 425, where the four sit in a row wider than
              the screen. Under reduced motion the animation stops and this
              becomes an ordinary horizontal scroller, so every card stays
              reachable. */}
          <FadeUp
            play={isMeasured}
            delay={statsDelay}
            className="max-425:overflow-hidden max-425:motion-reduce:overflow-x-auto max-425:mt-[29rem] relative z-[12] mt-[14rem]"
          >
            {/* Drives the track below 425, where it can also be grabbed and
                thrown. Its only child must be the track, which is what it
                measures. */}
            <DragMarquee>
              {/* A list, so it announces as four items rather than eight loose
                strings. */}
              <ul
                ref={statsRef}
                className="max-425:w-max max-425:flex-nowrap max-425:flex grid grid-cols-4 gap-[.6rem]"
              >
                {/* The second pass is the copy the loop needs. It is hidden from
                  assistive tech and from every width above the breakpoint, so
                  the grid stays four cards and nothing is announced twice. */}
                {[false, true].map((isCopy) =>
                  aboutStats.map(({ id, value, label }) => (
                    <li
                      key={isCopy ? `${id}-copy` : id}
                      {...(isCopy && { "aria-hidden": true })}
                      className={`gap-sm max-425:gap-xs p-sm max-425:w-[20rem] max-425:shrink-0 max-425:rounded-sm items-center rounded-md bg-white select-none ${
                        isCopy ? "max-425:flex hidden" : "flex"
                      }`}
                    >
                      {/* Counts up from zero; each copy counts with its
                          original. */}
                      <p className="max-425:text-[3.5rem] shrink-0 text-[6.5rem] font-extrabold tracking-[-0.07em] text-black">
                        <CountUp value={value} play={shouldCount} />
                      </p>

                      <span
                        aria-hidden="true"
                        className="max-425:h-[2rem] h-[4rem] w-px shrink-0 bg-black"
                      />

                      <p className="text-body-03 max-425:text-[1.2rem] text-text-body max-425:leading-[1.8rem] leading-[2.4rem] font-medium tracking-[-0.02em]">
                        {label}
                      </p>
                    </li>
                  )),
                )}
              </ul>
            </DragMarquee>
          </FadeUp>
          {/* Anchored to the container rather than the section, so it stays
              centred on the content column at any width. Decorative: nothing
              here depends on recognising the photo.

              The position sits on the wrapper, which is what rises; the image
              only sizes itself inside it. It rises with the title, from
              behind the blur that sits over its foot. */}
          <FadeUp
            play
            delay={PHOTO_DELAY}
            className="max-425:left-1/2 max-425:-translate-x-1/2 max-425:mt-md pointer-events-none absolute bottom-0 left-[42.4rem] z-[10] w-max"
          >
            <Image
              src="/images/about/hassan-hero-img.png"
              alt=""
              aria-hidden="true"
              width={594}
              height={705}
              className="max-425:h-auto max-425:w-[30rem] block"
            />
          </FadeUp>

          {/* After the image in the source, so it paints over it without
              needing a z-index. */}
          <div
            aria-hidden="true"
            className="max-425:h-[16rem] pointer-events-none absolute bottom-0 left-0 z-[11] h-[37.1rem] w-full"
          >
            {BLUR_LAYERS.map((blur, index) => {
              const span = (80 - BLUR_START) / BLUR_LAYERS.length;
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

            {/* The fill sits over the blur, as it does in the design. */}
            <span className="absolute inset-0 bg-[linear-gradient(0deg,#F4F4F4_0%,rgba(244,244,244,0)_100%)]" />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutHero;
