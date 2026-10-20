"use client";

import { workFilters, workProjects } from "@/config/common";
import Image from "next/image";
import { useState } from "react";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";

const WorkGrid = () => {
  const [activeId, setActiveId] = useState(workFilters[0].id);

  const projects =
    activeId === "all"
      ? workProjects
      : workProjects.filter(({ category }) => category === activeId);

  return (
    <>
      <Section id="work-grid" className="pb-[120px]">
        <Container>
          <ul className="flex flex-wrap items-center justify-center gap-[10px]">
            {workFilters.map(({ id, label }) => {
              const isActive = id === activeId;

              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(id)}
                    className={`cursor-pointer rounded-full px-[30px] py-[10px] text-[18px] font-extrabold tracking-[-0.02em] uppercase transition-colors duration-300 ${
                      isActive
                        ? "bg-black text-white"
                        : "border border-black/20 text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div>
            <ul className="mt-[45px] grid grid-cols-2 items-start gap-[30px]">
              {projects.map(
                ({ id, image, imageAlt, title, subtitle, ctaLabel, href }) => (
                  <li key={id} className="overflow-hidden even:mt-[30px]">
                    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[20px]">
                      <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        sizes="580px"
                        className="object-cover"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-[20px] pt-[20px]">
                      <div>
                        <h3 className="text-[35px] font-bold tracking-[-0.07em] text-black">
                          {title}
                        </h3>

                        <p className="text-text-body text-[16px] font-medium tracking-[-0.02em]">
                          {subtitle}
                        </p>
                      </div>

                      <Button
                        href={href}
                        className="bg-grey shrink-0 rounded-[60px] px-[20px] py-[10px] text-[16px] font-extrabold tracking-[-0.02em] text-black uppercase transition-colors duration-300 hover:bg-black hover:text-white"
                      >
                        {ctaLabel}
                      </Button>
                    </div>
                  </li>
                ),
              )}
            </ul>

            {projects.length === 0 && (
              <p className="text-text-body mt-[80px] text-center text-[18px] tracking-[-0.02em]">
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
