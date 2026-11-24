"use client";

import { growthNeeds } from "@/config/common";
import Image from "next/image";
import { useState } from "react";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const EASE = "duration-500 ease-out motion-reduce:transition-none";

const GrowthNeeds = () => {
  const [activeId, setActiveId] = useState("grow");

  return (
    <>
      <Section id="growth-needs" className="py-[120px]">
        <Container>
          <SectionHeading
            className="text-center"
            title={
              <>
                Care, Grow or Scale: <br />
                <span className="text-black/50">what does your site need?</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
            subtitle={
              <>
                A site should keep improving after launch, not sit still until
                the next redesign. Once <br />
                real people use it, you learn more in a month than in the whole
                build.
              </>
            }
            subtitleClassName="text-text-body mt-[25px] text-[22px] leading-[33px] tracking-[-0.02em]"
          />

          {/* The hovered, focused or tapped card opens; the others close. */}
          <ul className="mt-[55px] flex min-h-[560px] items-center justify-between">
            {growthNeeds.map(
              (
                { id, icon: Icon, title, description, cta, image, imageAlt },
                index,
              ) => {
                const isActive = id === activeId;

                return (
                  <li
                    key={id}
                    onMouseEnter={() => setActiveId(id)}
                    onFocus={() => setActiveId(id)}
                    onClick={() => setActiveId(id)}
                    className={`bg-grey/60 shrink-0 overflow-hidden rounded-[20px] p-[25px] transition-[width] ${EASE} ${
                      isActive ? "w-[513px]" : "w-[308px]"
                    }`}
                  >
                    <div
                      className={`overflow-hidden rounded-[20px] transition-[height] ${EASE} ${
                        isActive ? "h-[257px]" : "h-[90px]"
                      }`}
                    >
                      <div className="grid h-[257px] w-[459px]">
                        <span
                          className={`col-start-1 row-start-1 pt-[15px] pl-[15px] text-[65px] leading-[65px] font-medium tracking-[-0.06em] text-black transition-opacity ${EASE} ${
                            isActive ? "opacity-0" : "opacity-100"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <Image
                          src={image}
                          alt={imageAlt}
                          width={1121}
                          height={766}
                          sizes="459px"
                          className={`col-start-1 row-start-1 h-[257px] w-[459px] rounded-[20px] object-cover transition-opacity ${EASE} ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      </div>
                    </div>

                    <div className="px-[13px]">
                      <span
                        className={`relative flex size-[76px] items-center justify-center rounded-full bg-white text-black transition-[margin] ${EASE} ${
                          isActive ? "mt-[-40px]" : "mt-[30px]"
                        }`}
                      >
                        <Icon size={36} />
                      </span>

                      <h3 className="mt-[18px] text-[25px] leading-[30px] font-bold tracking-[-0.06em] whitespace-nowrap text-black">
                        {title}
                      </h3>

                      <div
                        className={`grid transition-[grid-template-rows,opacity] ${EASE} ${
                          isActive
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-text-body w-[430px] pt-[22px] text-[18px] leading-[24px] tracking-[-0.02em]">
                            {description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-[35px] mb-[13px] flex">
                        <Button
                          href={cta.href}
                          className={`rounded-full bg-black px-[30px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] whitespace-nowrap text-white uppercase ${
                            isActive ? "w-full" : ""
                          }`}
                        >
                          {cta.label}
                        </Button>
                      </div>
                    </div>
                  </li>
                );
              },
            )}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default GrowthNeeds;
