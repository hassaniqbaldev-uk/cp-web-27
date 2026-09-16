"use client";

import { Container } from "@/components/ui/Container";
import Popover from "@/components/ui/Popover";
import Section from "@/components/ui/Section";
import SparkleLogo from "@/components/ui/SparkleLogo";
import { heroPopovers } from "@/config/common";
import { useState } from "react";

const Hero = () => {
  // A single id rather than per-popover state, so opening one closes the rest.
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
      <Section className="flex h-screen items-center overflow-hidden bg-black">
        <Container className="flex items-end justify-between gap-[2.4rem]">
          <div className="h-[45rem] w-[55rem] bg-amber-300">1</div>

          <div className="relative">
            {heroPopovers.map(({ id, title, href, image, className }) => (
              <Popover
                key={id}
                title={title}
                href={href}
                image={image}
                className={className}
                isOpen={openId === id}
                onOpenChange={(open) => setOpenId(open ? id : null)}
              />
            ))}

            <SparkleLogo />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
