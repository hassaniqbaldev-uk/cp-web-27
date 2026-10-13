"use client";

import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Popover from "@/components/ui/Popover";
import Section from "@/components/ui/Section";
import ParticleLogo from "@/components/ui/ParticleLogo";
import { clientLogos, heroBadges, heroPopovers } from "@/config/common";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * How much of the cursor's distance from the middle the gradient covers. At 1
 * its own middle sits under the cursor, so it reaches the full way to either
 * edge; below that it only leans.
 */
const GLOW_REACH = 1;

/** Follows loosely rather than exactly, so it drifts after the cursor. */
const GLOW_SPRING = { stiffness: 45, damping: 20, mass: 0.8 };

const Hero = () => {
  // A single id rather than per-popover state, so opening one closes the rest.
  const [openId, setOpenId] = useState<string | null>(null);

  const prefersReducedMotion = useReducedMotion();

  // Where the pointer is, as pixels either side of the middle. A motion value
  // rather than state: this changes on every pointer move, and a render a
  // move would cost more than the move itself.
  const pointerX = useMotionValue(0);
  const glowX = useSpring(pointerX, GLOW_SPRING);

  // The gradient is centred by a half of its own width, so the follow has to
  // be added to that rather than replacing it — one transform, both jobs.
  const glowOffset = useTransform(glowX, (value) => `calc(-50% + ${value}px)`);

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      const fromCentre = event.clientX - window.innerWidth / 2;

      pointerX.set(fromCentre * GLOW_REACH);
    };

    // Passive, so the listener can never delay a scroll.
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [pointerX]);

  // Set once the particles have gathered into the logo, which is when the
  // popover dots are shown.
  const [isLogoFormed, setIsLogoFormed] = useState(false);

  return (
    <>
      <Section className="relative flex min-h-screen items-center overflow-hidden bg-black">
        {/* TEMPORARY: off while we find out why the site will not finish
            loading on an iPhone. A 1303 by 1386 element with a 300px blur,
            rotating, is re-rasterised every frame and the texture a blur that
            size needs is far larger than the element — which a phone's GPU
            may not have. Put it back once that is ruled in or out.

            Sits behind everything the hero draws, and is clipped by the
            section's own overflow where it runs past the viewport.

            Two layers, because transform can only hold one job: this one
            carries the slide towards the cursor, and the one inside carries
            the turn. */}
        {/* <motion.div
          aria-hidden="true"
          style={{ x: prefersReducedMotion ? "-50%" : glowOffset }}
          className="pointer-events-none absolute top-[90rem] left-1/2 z-0 h-[138.6rem] w-[130.3rem]"
        >
          <div className="size-full animate-[spin_30s_linear_infinite] rounded-full bg-[linear-gradient(90deg,#FFE400_0%,#EC9122_45.05%,#EC3593_98.64%)] blur-[30rem] motion-reduce:animate-none" />
        </motion.div> */}

        <Container className="max-425:pt-[13rem] max-425:pb-[6rem] pt-[15rem] pb-[10rem]">
          <div className="max-425:flex-col max-425:items-center flex items-end justify-between gap-[4.5rem]">
            <div className="pb-sm max-425:w-full max-425:items-center max-425:text-center max-425:px-[3rem] flex w-[55rem] flex-col items-start">
              <ul className="gap-sm max-425:gap-xs flex items-center">
                {heroBadges.map(({ id, src, alt, width, height }, index) => (
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
                ))}
              </ul>

              <h1 className="text-heading-01 max-425:text-[7.5rem] max-425:my-xs my-md max-425:leading-[7.5rem] max-425:max-w-[30rem] leading-[11rem] font-bold tracking-[-0.07em] text-white">
                <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_74.04%)] bg-clip-text text-transparent">
                  Growth
                </span>{" "}
                Focused<span className="text-dark-pink">.</span>
              </h1>

              <p className="text-body-02 max-425:text-[1.4rem] max-425:mb-[3.5rem] mb-lg max-425:leading-[2.3rem] max-425:max-w-[32.6rem] leading-[2.8rem] font-normal tracking-[-0.02em] text-white">
                We combine strategy, design and technology to help ambitious
                businesses attract, engage and convert more customers.
              </p>

              {/* flex, so no line box is left beneath the button and w-full
                  still stretches it at 425. */}
              <div className="max-425:w-full flex">
                <Button
                  href="/contact"
                  className="text-body-02 max-425:text-[1.4rem] px-sm py-xs max-425:w-full rounded-xl bg-white font-extrabold tracking-[-0.02em] text-black uppercase"
                >
                  Lets Talk about your project
                </Button>
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

          <div className="mt-3xl max-425:mt-xl w-full">
            <span
              aria-hidden="true"
              className="bg-text-body mb-lg max-425:mb-md block h-px w-full"
            />

            {/* A list, so the logos announce as a set. */}
            <ul className="flex w-max items-center">
              {clientLogos.map(
                ({ id, src, alt, href, width, height, className }) => (
                  <li key={id} className="shrink-0">
                    <Link
                      href={href}
                      className="mx-md max-425:mx-sm block opacity-80 transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100"
                    >
                      <Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        className={className}
                      />
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
