"use client";

import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Popover from "@/components/ui/Popover";
import Section from "@/components/ui/Section";
import SparkleLogo from "@/components/ui/SparkleLogo";
import { heroBadges, heroPopovers } from "@/config/common";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  // A single id rather than per-popover state, so opening one closes the rest.
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
      <Section className="flex min-h-screen items-center overflow-hidden bg-black">
        <Container className="py-3xl flex items-center justify-between gap-[2.4rem]">
          <div className="flex w-[55rem] flex-col items-start">
            <ul className="gap-sm flex items-center">
              {heroBadges.map(({ id, src, alt, width, height }, index) => (
                <li key={id} className="gap-sm flex items-center">
                  <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="h-[3.5rem] w-auto"
                  />

                  {index < heroBadges.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="bg-text-body h-[3.5rem] w-px"
                    />
                  )}
                </li>
              ))}
            </ul>

            <h1 className="text-heading-01 my-md leading-[11rem] font-bold tracking-[-0.07em] text-white">
              <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_74.04%)] bg-clip-text text-transparent">
                Growth
              </span>{" "}
              Focused<span className="text-dark-pink">.</span>
            </h1>

            <p className="text-body-02 mb-lg leading-[2.8rem] font-normal tracking-[-0.02em] text-white">
              We combine strategy, design and technology to help ambitious
              businesses attract, engage and convert more customers.
            </p>

            <Button
              href="/contact"
              className="text-body-02 px-sm py-xs rounded-xl bg-white font-extrabold tracking-[-0.02em] text-black uppercase"
            >
              Lets Talk about your project
            </Button>
          </div>

          <div className="relative">
            {heroPopovers.map(
              ({ id, title, href, image, className, squareClassName }) => (
                <Popover
                  key={id}
                  title={title}
                  href={href}
                  image={image}
                  className={className}
                  squareClassName={squareClassName}
                  isOpen={openId === id}
                  onOpenChange={(open) => setOpenId(open ? id : null)}
                />
              ),
            )}

            <SparkleLogo />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
