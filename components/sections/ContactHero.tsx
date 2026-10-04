"use client";

import { contactLinks } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FadeUp, { LINE_STAGGER, MaskReveal } from "../animations/FadeUp";
import ContactForm from "../ui/ContactForm";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";

// The load sequence, in seconds, as the other heroes': the header drops in
// first, over 0.8s, and the heading starts once it is well on its way. The
// form is the page's purpose, so it rises with the title rather than waiting
// on the column beside it. Everything else in the column has no time of its
// own: it takes the slots after the subtitle's last line, since how many
// lines the title and subtitle break into depends on the width.
const HEADING_DELAY = 0.5;
const FORM_DELAY = 0.6;

/** Gap between one item and the next below the heading, as the scroll
 *  reveals' stagger. */
const ITEM_STAGGER = 0.12;

const ContactHero = () => {
  // How many lines the title and the subtitle broke into, once measured.
  const [titleLines, setTitleLines] = useState<number | null>(null);
  const [subtitleLines, setSubtitleLines] = useState<number | null>(null);

  const isMeasured = titleLines !== null && subtitleLines !== null;

  // The label takes the first slot and each title and subtitle line one more,
  // so the first item below the heading takes the slot after the last line.
  const afterHeading =
    HEADING_DELAY +
    (1 + (titleLines ?? 0) + (subtitleLines ?? 0)) * LINE_STAGGER;

  // The quote, then "Prefer another way?", then each link in turn.
  const slot = (position: number) => afterHeading + position * ITEM_STAGGER;

  return (
    <>
      <Section
        id="contact-hero"
        className="max-425:px-[3rem] max-425:pt-[13rem] max-425:pb-xl relative overflow-hidden bg-[radial-gradient(105.42%_89.35%_at_98.89%_0%,rgba(0,0,0,0.6)_0%,#000000_100%)] pt-[16rem] pb-[12rem]"
      >
        <div className="absolute top-0 left-1/2 h-full w-full max-w-[144rem] -translate-x-1/2">
          <Starfield className="max-425:w-full absolute bottom-[-5rem] left-0 z-0 h-[19rem] w-[70rem] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />
        </div>

        <Container className="gap-lg max-425:gap-xl max-425:flex-col relative z-10 flex items-start justify-between">
          <div className="max-425:w-full w-[52.3rem]">
            <SectionHeading
              // The page's single h1 — the outline starts here.
              as="h1"
              reveal
              revealDelay={HEADING_DELAY}
              onRevealTitleMeasure={setTitleLines}
              onRevealSubtitleMeasure={setSubtitleLines}
              label="Get in touch"
              title={
                <>
                  Tell us what{" "}
                  {/* pr compensates for the negative tracking, which otherwise
                      pulls the paint box in and clips the last glyph of a
                      gradient span. */}
                  <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                    you need.
                  </span>
                </>
              }
              subtitle="Building something new, improving what you have, or not quite sure yet? Send a few details and we will point you in the right direction."
              labelClassName="text-body-01 max-425:text-[1.4rem] max-425:text-center font-medium tracking-[-0.02em] text-white uppercase"
              titleClassName="text-heading-02 max-425:text-[4.5rem] max-425:leading-[4.5rem] max-425:text-center mt-xs leading-[8rem] font-extrabold tracking-[-0.07em] text-white"
              subtitleClassName="text-body-02 max-425:text-[1.6rem] max-425:leading-[2.4rem] max-425:text-center text-white mt-[1.4rem] tracking-[-0.02em]"
            />

            {/* figure and figcaption are the pair that ties a message to the
                person who wrote it. */}
            <FadeUp
              as="figure"
              play={isMeasured}
              delay={slot(0)}
              className="gradient-border gap-sm p-md max-425:p-sm max-425:gap-xs mt-md flex items-start rounded-md bg-white/10 [--gradient-border-image:linear-gradient(140.55deg,rgba(255,255,255,0)_7.24%,rgba(255,255,255,0.6)_47.59%,rgba(255,255,255,0)_76.61%)] [--gradient-border-width:1.24px]"
            >
              {/* Decorative: the caption below already names him. */}
              <Image
                src="/images/home/hassan-avatar-img.png"
                alt=""
                aria-hidden="true"
                width={60}
                height={60}
                className="max-425:size-[4.5rem] size-[6rem] shrink-0 rounded-full object-cover"
              />

              <div>
                <blockquote className="text-body-03 max-425:text-[1.4rem] max-425:leading-[2rem] tracking-[-0.02em] text-white">
                  You do not need a finished brief. A few details are enough for
                  us to suggest the next step.
                </blockquote>

                <figcaption className="text-body-04 max-425:text-[1.2rem] mt-xs text-orange tracking-[-0.02em]">
                  Hassan Iqbal, Managing Director
                </figcaption>
              </div>
            </FadeUp>

            {/* Rises out of a mask, as the labels do. */}
            <p className="text-body-02 max-425:text-[1.4rem] mt-md tracking-[-0.02em] text-white/80 [clip-path:inset(-100vh_-100vw_-0.25em_-100vw)]">
              <MaskReveal play={isMeasured} delay={slot(1)}>
                Prefer another way?
              </MaskReveal>
            </p>

            {/* A list, so the three announce as three ways to reach us rather
                than loose links. One after another, after the label above. */}
            <ul className="mt-sm flex flex-col">
              {contactLinks.map(({ id, icon: Icon, label, href }, index) => (
                <FadeUp
                  as="li"
                  key={id}
                  play={isMeasured}
                  delay={slot(2 + index)}
                >
                  <Link
                    href={href}
                    className="gap-sm max-425:py-xs py-sm flex items-center justify-between border-b border-white/20"
                  >
                    <span className="gap-sm flex items-center">
                      <Icon
                        aria-hidden="true"
                        size={30}
                        strokeWidth={2}
                        className="max-425:size-[2.2rem] shrink-0 text-white"
                      />

                      <span className="text-subheading-02 max-425:text-[1.8rem] font-medium tracking-[-0.06em] text-white">
                        {label}
                      </span>
                    </span>

                    <ArrowUpRight
                      aria-hidden="true"
                      size={25}
                      strokeWidth={2.5}
                      className="max-425:size-[1.8rem] shrink-0 text-white"
                    />
                  </Link>
                </FadeUp>
              ))}
            </ul>
          </div>

          {/* Rises with the title: the form is what the page is for. */}
          <FadeUp
            play
            delay={FORM_DELAY}
            className="p-lg max-425:w-full max-425:p-sm w-[60rem] shrink-0 rounded-md bg-white"
          >
            <ContactForm showAssurances />
          </FadeUp>
        </Container>
      </Section>
    </>
  );
};

export default ContactHero;
