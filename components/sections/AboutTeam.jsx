"use client";

import { teamHandoffs, teamProfiles } from "@/config/common";
import Image from "next/image";
import { useState } from "react";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const AboutTeam = () => {
  const [index, setIndex] = useState(0);

  const selected = teamProfiles[index];

  return (
    <>
      <Section id="team" className="py-[120px] max-sm:py-[80px]">
        <Container className="max-sm:px-[20px]">
          <div className="flex items-end justify-between gap-[45px] max-sm:flex-col max-sm:items-center max-sm:gap-[16px] max-sm:text-center">
            <SectionHeading
              className="max-w-[490px]"
              title={
                <>
                  Specialists,{" "}
                  <span className="text-black/60">
                    not layers of account management.
                  </span>
                </>
              }
              titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.07em] text-black max-sm:text-[30px] max-sm:leading-[32px]"
            />

            <p className="text-text-body w-[490px] text-[22px] tracking-[-0.02em] max-sm:w-full max-sm:text-[16px] max-sm:leading-[24px]">
              CreativePixels brings together project leadership, UX and visual
              design, WordPress and ecommerce development, custom software and
              growth. You talk to the person leading your project, and
              specialists own the parts they’re best at.
            </p>
          </div>

          <div className="mt-[50px] flex items-start justify-between gap-[45px] max-sm:mt-[30px] max-sm:flex-col max-sm:items-stretch max-sm:gap-[20px]">
            <div className="w-[580px] max-sm:order-2 max-sm:w-full">
              <div className="bg-grey/40 w-[580px] rounded-[20px] p-[30px] max-sm:w-full max-sm:p-[20px]">
                <div className="flex justify-between gap-[20px] max-sm:flex-col max-sm:gap-[16px]">
                  <Image
                    src={selected.image}
                    alt={selected.name}
                    width={202}
                    height={224}
                    className="h-[224px] w-[202px] rounded-[15px] object-cover max-sm:h-[320px] max-sm:w-full max-sm:object-top"
                  />

                  <div className="flex w-[290px] flex-col justify-between gap-[15px] max-sm:w-full">
                    <div>
                      <p className="border-blue text-blue inline-flex rounded-[50px] border px-[20px] py-[10px] text-[16px] font-extrabold tracking-[-0.02em] max-sm:px-[16px] max-sm:py-[6px] max-sm:text-[14px]">
                        {selected.role}
                      </p>

                      <h3 className="text-[45px] leading-[70px] font-bold tracking-[-0.07em] text-black max-sm:mt-[8px] max-sm:text-[32px] max-sm:leading-[38px]">
                        {selected.name}
                      </h3>
                    </div>

                    <p className="flex shrink-0 items-center gap-[20px] rounded-[20px] bg-white px-[30px] py-[20px] max-sm:gap-[14px] max-sm:px-[20px] max-sm:py-[14px]">
                      <span className="text-[35px] font-bold tracking-[-0.07em] text-black max-sm:text-[28px]">
                        {selected.years}
                      </span>

                      <span className="bg-text-body/30 h-[42px] w-px shrink-0" />

                      <span className="text-text-body text-[16px] tracking-[-0.02em]">
                        Years of Experience
                      </span>
                    </p>
                  </div>
                </div>

                <p className="text-text-body mt-[30px] text-[18px] leading-[28px] tracking-[-0.02em] max-sm:mt-[20px] max-sm:text-[16px] max-sm:leading-[24px]">
                  {selected.description}
                </p>
              </div>
            </div>

            <div className="w-[590px] max-sm:order-1 max-sm:w-full">
              <ul className="grid w-full grid-cols-5 gap-[10px] max-sm:gap-[6px]">
                {teamProfiles.map(({ id, image, name, role }, position) => (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={() => setIndex(position)}
                      className={`block cursor-pointer rounded-full p-[5px] transition-opacity duration-300 max-sm:w-full max-sm:p-[3px] ${
                        position === index
                          ? "gradient-border [--gradient-border-image:linear-gradient(180deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] [--gradient-border-width:2px]"
                          : "bg-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${name}, ${role}`}
                        width={100}
                        height={100}
                        className="size-[100px] rounded-full object-cover max-sm:aspect-square max-sm:size-auto max-sm:w-full"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="px-[18px] max-sm:px-0">
            <div className="bg-blue/10 mt-[80px] rounded-[20px] px-[50px] py-[45px] max-sm:mt-[50px] max-sm:px-[20px] max-sm:py-[30px]">
              <p className="text-center text-[22px] font-medium tracking-[-0.02em] text-black uppercase max-sm:text-[16px] max-sm:leading-[22px]">
                How a project moves through the team
              </p>

              <ul className="mt-[30px] flex items-start justify-between max-sm:mt-[24px] max-sm:flex-col max-sm:items-center max-sm:gap-[40px]">
                {teamHandoffs.map(({ id, image, name, text }, index) => (
                  <li
                    key={id}
                    className="relative flex w-[170px] flex-col items-center text-center max-sm:w-full"
                  >
                    {index > 0 && (
                      <span className="absolute top-[50px] right-full h-px w-[60px] bg-black max-sm:top-auto max-sm:right-auto max-sm:bottom-[calc(100%+8px)] max-sm:left-1/2 max-sm:h-[24px] max-sm:w-px" />
                    )}

                    <Image
                      src={image}
                      alt=""
                      width={100}
                      height={100}
                      className="size-[100px] rounded-full object-cover object-top max-sm:size-[80px]"
                    />

                    <p className="mt-[10px] text-[35px] font-bold tracking-[-0.07em] text-black max-sm:text-[26px] max-sm:leading-[30px]">
                      {name}
                    </p>

                    <p className="text-text-body mt-[5px] text-[18px] leading-[28px] tracking-[-0.02em] max-sm:text-[16px] max-sm:leading-[24px]">
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
