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
      <Section id="team" className="py-[120px]">
        <Container>
          <div className="flex items-end justify-between gap-[45px]">
            <SectionHeading
              className="max-w-[650px]"
              label="The team"
              title={
                <>
                  Specialists,{" "}
                  <span className="text-black/60">
                    not layers of account management.
                  </span>
                </>
              }
              labelClassName="text-[22px] font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-[85px] leading-[90px]  mt-[10px] font-extrabold tracking-[-0.07em] text-black"
            />

            <p className="text-text-body w-[483px] text-[22px] tracking-[-0.02em]">
              CreativePixels brings together project leadership, UX and visual
              design, WordPress and ecommerce development, custom application
              engineering and growth expertise. The person leading the
              conversation stays close to the work, while specialists own the
              parts they are best at.
            </p>
          </div>

          <div className="mt-[80px] flex items-start justify-between gap-[45px]">
            <div className="w-[580px]">
              <div className="bg-grey/40 w-[580px] rounded-[20px] px-[30px] pt-[30px] pb-[35px]">
                <div className="flex justify-between gap-[20px]">
                  <Image
                    src={selected.image}
                    alt={selected.name}
                    width={202}
                    height={223}
                    className="h-[220px] w-[200px] rounded-[15px] object-cover"
                  />

                  <div className="flex w-[290px] flex-col justify-between">
                    <div>
                      <p className="border-blue text-blue inline-flex rounded-[60px] border px-[20px] py-[10px] text-[16px] font-extrabold tracking-[-0.02em]">
                        {selected.role}
                      </p>

                      <h3 className="text-[45px] leading-[70px] font-bold tracking-[-0.07em] text-black">
                        {selected.name}
                      </h3>
                    </div>

                    <p className="flex shrink-0 items-center gap-[20px] rounded-[20px] bg-white px-[30px] py-[20px]">
                      <span className="text-[35px] font-bold tracking-[-0.07em] text-black">
                        {selected.years}
                      </span>

                      <span className="bg-text-body/30 h-[40px] w-px shrink-0" />

                      <span className="text-text-body text-[16px] tracking-[-0.02em]">
                        Years of Experience
                      </span>
                    </p>
                  </div>
                </div>

                <p className="text-text-body mt-[30px] text-[18px] leading-[28px] tracking-[-0.02em]">
                  {selected.description}
                </p>
              </div>
            </div>

            <div className="w-[590px]">
              <ul className="grid w-full grid-cols-5 gap-[10px]">
                {teamProfiles.map(({ id, image, name, role }, position) => (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={() => setIndex(position)}
                      className={`block cursor-pointer rounded-full p-[5px] transition-opacity duration-300 ${
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
                        className="size-[100px] rounded-full object-cover"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="px-[18px]">
            <div className="bg-blue/10 mt-[80px] rounded-[20px] px-[50px] py-[45px]">
              <p className="text-center text-[22px] font-medium tracking-[-0.02em] text-black uppercase">
                How the teams work together
              </p>

              <ul className="mt-[30px] flex items-start justify-between">
                {teamHandoffs.map(({ id, image, name, text }, index) => (
                  <li
                    key={id}
                    className="relative flex w-[170px] flex-col items-center text-center"
                  >
                    {index > 0 && (
                      <span className="absolute top-[50px] right-full h-px w-[60px] bg-black" />
                    )}

                    <Image
                      src={image}
                      alt=""
                      width={100}
                      height={100}
                      className="size-[100px] rounded-full object-cover object-top"
                    />

                    <p className="mt-[10px] text-[35px] font-bold tracking-[-0.07em] text-black">
                      {name}
                    </p>

                    <p className="text-text-body mt-[5px] text-[18px] leading-[28px] tracking-[-0.02em]">
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
