"use client";

import { Container } from "@/components/ui/Container";
import DragMarquee from "@/components/ui/DragMarquee";
import Section from "@/components/ui/Section";
import { brandLogos } from "@/config/common";
import Image from "next/image";
import Link from "next/link";

const Brands = () => {
  return (
    <Section className="relative overflow-hidden bg-white pt-[80px] max-sm:pt-[60px]">
      <Container>
        <p className="text-center text-[22px] font-medium tracking-[-0.02em] text-black uppercase max-sm:px-[20px] max-sm:text-[16px]">
          Brands that choose Creative Pixels
        </p>

        <div className="relative mt-[50px] max-sm:mt-[30px]">
          <DragMarquee
            pauseOnHover
            trackClassName="flex w-max items-center"
            slideClassName="shrink-0"
          >
            {brandLogos.map(({ id, src, alt, href, width, height }) => (
              <Link
                key={id}
                href={href}
                draggable={false}
                className="mx-[6px] flex h-[96px] w-[190px] items-center justify-center rounded-[110px] bg-[#EDEDED] max-sm:mx-[5px] max-sm:h-[76px] max-sm:w-[150px]"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  draggable={false}
                  className="object-contain opacity-40 max-sm:h-auto max-sm:max-w-[105px]"
                />
              </Link>
            ))}
          </DragMarquee>

          <span className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[120px] bg-linear-to-r from-white to-transparent max-sm:w-[50px]" />

          <span className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[120px] bg-linear-to-l from-white to-transparent max-sm:w-[50px]" />
        </div>
      </Container>
    </Section>
  );
};

export default Brands;
