"use client";

import { teamHandoffs, teamProfiles } from "@/config/common";
import Image from "next/image";
import { useState } from "react";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const AboutTeam = () => {
  const [selectedId, setSelectedId] = useState(teamProfiles[0].id);

  const selected =
    teamProfiles.find(({ id }) => id === selectedId) ?? teamProfiles[0];

  return (
    <>
      <Section id="team" className="py-3xl">
        <Container>
          <div className="gap-lg flex items-end justify-between">
            <SectionHeading
              className="w-[65rem]"
              label="The team"
              title={
                <>
                  Specialists,{" "}
                  <span className="text-black/60">
                    not layers of account management.
                  </span>
                </>
              }
              labelClassName="text-body-01 font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-heading-02 leading-[9rem] mt-xs font-extrabold tracking-[-0.07em] text-black"
            />

            <p className="text-body-01 text-text-body w-[48.3rem] tracking-[-0.02em]">
              CreativePixels brings together project leadership, UX and visual
              design, WordPress and ecommerce development, custom application
              engineering and growth expertise. The person leading the
              conversation stays close to the work, while specialists own the
              parts they are best at.
            </p>
          </div>

          <div className="gap-lg mt-2xl flex items-start justify-between">
            <div
              aria-live="polite"
              className="bg-grey/40 w-[58rem] rounded-md px-[3rem] pt-[3rem] pb-[3.5rem]"
            >
              <div className="gap-sm flex justify-between">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  width={202}
                  height={223}
                  className="h-[22rem] w-[20rem] rounded-[1.5rem] object-cover"
                />

                <div className="flex w-[29rem] flex-col justify-between">
                  <div>
                    <p className="py-xs px-sm border-blue text-body-03 text-blue inline-flex rounded-xl border font-extrabold tracking-[-0.02em]">
                      {selected.role}
                    </p>

                    {/* h3, since the section heading above is the h2. */}
                    <h3 className="text-heading-03 leading-[7rem] font-bold tracking-[-0.07em] text-black">
                      {selected.name}
                    </h3>
                  </div>

                  <p className="gap-sm py-sm px-md flex shrink-0 items-center rounded-md bg-white">
                    <span className="text-subheading-02 font-bold tracking-[-0.07em] text-black">
                      {selected.years}
                    </span>

                    <span
                      aria-hidden="true"
                      className="bg-text-body/30 h-[4rem] w-px shrink-0"
                    />

                    <span className="text-body-03 text-text-body tracking-[-0.02em]">
                      Years of Experience
                    </span>
                  </p>
                </div>
              </div>

              <p className="text-body-02 text-text-body mt-md leading-[2.8rem] tracking-[-0.02em]">
                {selected.description}
              </p>
            </div>

            {/* Buttons rather than a tablist: a tablist promises arrow key
                navigation between its tabs, and aria-pressed describes what
                these actually do. */}
            <ul className="gap-xs grid w-[59rem] grid-cols-5">
              {teamProfiles.map(({ id, image, name, role }) => {
                const isSelected = id === selectedId;

                return (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={() => setSelectedId(id)}
                      aria-pressed={isSelected}
                      className={`block cursor-pointer rounded-full p-[0.5rem] transition-opacity duration-300 ${
                        isSelected
                          ? "gradient-border [--gradient-border-image:linear-gradient(180deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] [--gradient-border-width:2px]"
                          : "bg-transparent opacity-60 hover:opacity-100 focus-visible:opacity-100"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${name}, ${role}`}
                        width={100}
                        height={100}
                        className="size-[10rem] rounded-full object-cover"
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bg-blue/10 mt-2xl rounded-md px-[5rem] py-[4.5rem]">
            {/* Deliberately not a heading: it names this box rather than
                opening a new part of the section. */}
            <p className="text-body-01 text-center font-medium tracking-[-0.02em] text-black uppercase">
              How the teams work together
            </p>

            <ul className="mt-md flex items-start justify-between">
              {teamHandoffs.map(({ id, image, name, text }, index) => (
                <li
                  key={id}
                  className="relative flex w-[17rem] flex-col items-center text-center"
                >
                  {/* Joins this portrait to the one before it. right-full ends
                      the rule on the column edge, so the clearance to the
                      portrait comes from the portrait's own inset and holds if
                      either size changes. top is half the 10rem avatar. */}
                  {index > 0 && (
                    <span
                      aria-hidden="true"
                      className="absolute top-[5rem] right-full h-px w-[6rem] bg-black"
                    />
                  )}

                  {/* Decorative: the name is printed right below it. */}
                  <Image
                    src={image}
                    alt=""
                    aria-hidden="true"
                    width={100}
                    height={100}
                    className="size-[10rem] rounded-full object-cover object-top"
                  />

                  <p className="text-subheading-02 mt-xs font-bold tracking-[-0.07em] text-black">
                    {name}
                  </p>

                  <p className="text-body-02 text-text-body mt-[0.5rem] leading-[2.8rem] tracking-[-0.02em]">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutTeam;
