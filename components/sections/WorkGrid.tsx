"use client";

import { workFilters, workProjects } from "@/config/common";
import Image from "next/image";
import { useState } from "react";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";

const WorkGrid = () => {
  // The first filter, which is "all".
  const [activeId, setActiveId] = useState(workFilters[0].id);

  const projects =
    activeId === "all"
      ? workProjects
      : workProjects.filter(({ category }) => category === activeId);

  return (
    <>
      <Section
        id="work-grid"
        className="pb-3xl max-425:pb-xl max-425:px-[3rem]"
      >
        <Container>
          {/* Names the group, since each project below carries a heading and
              the outline would otherwise jump from the page h1 to a run of h3s
              with nothing introducing them. */}
          <h2 className="sr-only">All work</h2>

          {/* Buttons with aria-pressed rather than a tablist: these filter a
              list in place, they do not switch between panels, and a tablist
              would promise arrow-key navigation this does not have. */}
          <ul className="gap-xs max-425:gap-[0.6rem] flex flex-wrap items-center justify-center">
            {workFilters.map(({ id, label }) => {
              const isActive = id === activeId;

              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(id)}
                    aria-pressed={isActive}
                    className={`text-body-02 max-425:text-[1.2rem] px-md max-425:px-sm py-xs cursor-pointer rounded-full font-extrabold tracking-[-0.02em] uppercase transition-colors duration-300 ${
                      isActive
                        ? "bg-black text-white"
                        : "border border-black/20 text-black hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Polite, so a filter announces how much is left rather than
              changing the page silently under a screen reader. */}
          <div aria-live="polite">
            <ul className="gap-md max-425:gap-lg mt-lg max-425:mt-md max-425:grid-cols-1 grid grid-cols-2 items-start">
              {projects.map(
                ({ id, image, imageAlt, title, subtitle, ctaLabel, href }) => (
                  <li
                    key={id}
                    className="even:mt-md max-425:even:mt-0 overflow-hidden"
                  >
                    {/* Fixed ratio box so every thumbnail reserves the same
                        space and the grid does not shift as images load. */}
                    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-md">
                      <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        sizes="(max-width: 425px) 100vw, 58rem"
                        className="object-cover"
                      />
                    </div>

                    <div className="gap-sm pt-sm flex items-center justify-between">
                      <div>
                        {/* h3, since the sr-only heading above is the h2. */}
                        <h3 className="text-subheading-02 max-425:text-[2.2rem] font-bold tracking-[-0.07em] text-black">
                          {title}
                        </h3>

                        <p className="text-body-03 max-425:text-[1.4rem] text-text-body font-medium tracking-[-0.02em]">
                          {subtitle}
                        </p>
                      </div>

                      {/* Identical labels would be indistinguishable in a list
                          of links, so each one names its own project. */}
                      <Button
                        href={href}
                        aria-label={`Visit the ${title} live site`}
                        className="text-body-03 max-425:text-[1.2rem] px-sm max-425:px-xs py-xs bg-grey shrink-0 rounded-xl font-extrabold tracking-[-0.02em] text-black uppercase transition-colors duration-300 hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white"
                      >
                        {ctaLabel}
                      </Button>
                    </div>
                  </li>
                ),
              )}
            </ul>

            {projects.length === 0 && (
              <p className="text-body-02 max-425:text-[1.6rem] text-text-body mt-2xl max-425:mt-lg text-center tracking-[-0.02em]">
                Nothing here yet.
              </p>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default WorkGrid;
