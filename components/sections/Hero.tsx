"use client";

import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Popover from "@/components/ui/Popover";
import Section from "@/components/ui/Section";
import DragMarquee from "@/components/ui/DragMarquee";
import ParticleLogo from "@/components/ui/ParticleLogo";
import { clientLogos, heroBadges, heroPopovers } from "@/config/common";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FadeUp, {
  LINE_STAGGER,
  LineReveal,
  MaskReveal,
} from "../animations/FadeUp";

// The load sequence, in seconds. The header drops in first, over 0.8s, and the
// content starts once it is well on its way. Set as times rather than left to
// a stagger, since the title and the paragraph play a line at a time and how
// many lines they break into depends on the width. The button has no time of
// its own: it takes the slot after the paragraph's last line.
const HERO_BADGES_DELAY = 0.5;
const HERO_TITLE_DELAY = 0.62;
const HERO_PARAGRAPH_DELAY = 0.9;
const HERO_MARQUEE_DELAY = 0.3;

const Hero = () => {
  // A single id rather than per-popover state, so opening one closes the rest.
  const [openId, setOpenId] = useState<string | null>(null);

  // Set once the particles have gathered into the logo, which is when the
  // popover dots are shown.
  const [isLogoFormed, setIsLogoFormed] = useState(false);

  // How many lines the paragraph broke into, once measured. The button waits
  // for it, then follows the last line in the same rhythm.
  const [paragraphLines, setParagraphLines] = useState<number | null>(null);

  return (
    <>
      <Section className="relative flex min-h-screen items-center overflow-hidden bg-black">
        {/* Sits behind everything the hero draws, and is clipped by the
            section's own overflow where it runs past the viewport. */}
        {/* <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[95rem] left-1/2 z-0 h-[138.6rem] w-[130.3rem] -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,#FFE400_0%,#EC9122_45.05%,#EC3593_98.64%)] blur-[30rem]"
        /> */}

        <Container className="max-425:pt-[13rem] max-425:pb-[6rem] pt-[15rem] pb-[10rem]">
          <div className="max-425:flex-col max-425:items-center flex items-end justify-between gap-[4.5rem]">
            {/* Plays on load, a beat after the header starts dropping in:
                the badges, then the title and the paragraph a line at a time,
                then the button, each rising out of its own mask. Each mask is
                a clip-path that cuts only below its bottom edge, with room
                left for descenders, as SectionHeading's is. */}
            <div className="pb-sm max-425:w-full max-425:items-center max-425:text-center max-425:px-[3rem] flex w-[55rem] flex-col items-start">
              <div className="[clip-path:inset(-100vh_-100vw_-0.25em_-100vw)]">
                <MaskReveal as="div" playOnMount delay={HERO_BADGES_DELAY}>
                  <ul className="gap-sm max-425:gap-xs flex items-center">
                    {heroBadges.map(
                      ({ id, src, alt, width, height }, index) => (
                        <li key={id} className="gap-sm flex items-center">
                          <Image
                            src={src}
                            alt={alt}
                            width={width}
                            height={height}
                            className="max-425:h-[2rem] h-[3.5rem] w-auto"
                          />

                          {index < heroBadges.length - 1 && (
                            <span
                              aria-hidden="true"
                              className="bg-text-body max-425:h-[2.2rem] h-[3.5rem] w-px"
                            />
                          )}
                        </li>
                      ),
                    )}
                  </ul>
                </MaskReveal>
              </div>

              {/* Each line brings its own mask, so the title itself clips
                  nothing. */}
              <h1 className="text-heading-01 max-425:text-[7.5rem] max-425:my-xs my-md max-425:leading-[7.5rem] max-425:max-w-[30rem] leading-[11rem] font-bold tracking-[-0.07em] text-white">
                <LineReveal delay={HERO_TITLE_DELAY}>
                  <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_74.04%)] bg-clip-text text-transparent">
                    Growth
                  </span>{" "}
                  Focused<span className="text-dark-pink">.</span>
                </LineReveal>
              </h1>

              <p className="text-body-02 max-425:text-[1.4rem] max-425:mb-[3.5rem] mb-lg max-425:leading-[2.3rem] max-425:max-w-[32.6rem] leading-[2.8rem] font-normal tracking-[-0.02em] text-white">
                <LineReveal
                  delay={HERO_PARAGRAPH_DELAY}
                  onMeasure={setParagraphLines}
                >
                  We combine strategy, design and technology to help ambitious
                  businesses attract, engage and convert more customers.
                </LineReveal>
              </p>

              {/* flex inside the mask, so no line box is left beneath the
                  button and w-full still stretches it at 425. */}
              <div className="max-425:w-full [clip-path:inset(-100vh_-100vw_-0.25em_-100vw)]">
                <MaskReveal
                  as="div"
                  className="flex"
                  play={paragraphLines !== null}
                  delay={
                    HERO_PARAGRAPH_DELAY + (paragraphLines ?? 0) * LINE_STAGGER
                  }
                >
                  <Button
                    href="/contact"
                    className="text-body-02 max-425:text-[1.4rem] px-sm py-xs max-425:w-full rounded-xl bg-white font-extrabold tracking-[-0.02em] text-black uppercase"
                  >
                    Lets Talk about your project
                  </Button>
                </MaskReveal>
              </div>
            </div>

            <div className="relative">
              {/* The dots wait for the logo to finish forming, then fade in.
                  invisible as well as transparent until then, so they cannot
                  be hovered, tapped or tabbed to before they are seen. The
                  layer covers the logo exactly, so each popover's position is
                  still measured from the same box. */}
              <div
                className={`pointer-events-none absolute inset-0 z-10 transition-[opacity,visibility] duration-700 ${
                  isLogoFormed ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                {heroPopovers.map(
                  ({
                    id,
                    title,
                    href,
                    image,
                    className,
                    squareClassName,
                    panelPositionClassName,
                  }) => (
                    <Popover
                      key={id}
                      title={title}
                      href={href}
                      image={image}
                      className={className}
                      squareClassName={squareClassName}
                      panelPositionClassName={panelPositionClassName}
                      isOpen={openId === id}
                      onOpenChange={(open) => setOpenId(open ? id : null)}
                    />
                  ),
                )}
              </div>

              {/* The sizing lives here rather than in the component, which is
                  shared with the other particle fields on the site. */}
              <ParticleLogo
                intro
                onIntroComplete={() => setIsLogoFormed(true)}
                svgSrc="/images/common/cp-logo-particle.svg"
                label="CP logo formed from square pixels with a four-pixel gap"
                className="aspect-[439/460] w-[min(560px,calc(100vw-96px),calc((100svh-96px)*439/460))]"
              />
            </div>
          </div>

          {/* Last in, once the content above has landed. */}
          <FadeUp
            delay={HERO_MARQUEE_DELAY}
            className="mt-3xl max-425:mt-xl w-full"
          >
            <span
              aria-hidden="true"
              className="bg-text-body mb-lg max-425:mb-md block h-px w-full"
            />

            {/* Clips the track, which is two copies wide. */}
            <div className="overflow-hidden">
              <DragMarquee query={null} pauseOnHover>
                {/* A list, so the logos announce as a set. The second pass is
                    the copy the loop needs: hidden from assistive tech, and
                    with nothing focusable in it, so no link is duplicated in
                    the tab order. */}
                <ul className="flex w-max items-center">
                  {[false, true].map((isCopy) =>
                    clientLogos.map(
                      ({ id, src, alt, href, width, height, className }) => (
                        <li
                          key={isCopy ? `${id}-copy` : id}
                          {...(isCopy && { "aria-hidden": true })}
                          className="shrink-0"
                        >
                          <Link
                            href={href}
                            tabIndex={isCopy ? -1 : undefined}
                            className="mx-md max-425:mx-sm block opacity-80 transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100"
                          >
                            <Image
                              src={src}
                              alt={isCopy ? "" : alt}
                              width={width}
                              height={height}
                              className={className}
                            />
                          </Link>
                        </li>
                      ),
                    ),
                  )}
                </ul>
              </DragMarquee>
            </div>
          </FadeUp>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
