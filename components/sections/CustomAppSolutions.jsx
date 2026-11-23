"use client";

import { customAppSolutions } from "@/config/common";
import Image from "next/image";
import { useState } from "react";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const CustomAppSolutions = () => {
  const [activeId, setActiveId] = useState(customAppSolutions[0]?.id);

  return (
    <>
      <Section
        id="custom-app-solutions"
        className="relative overflow-hidden py-[120px]"
      >
        <Image
          src="/images/services/gradient-bg-custom-app-solutions.png"
          alt=""
          fill
          className="pointer-events-none z-0 object-cover"
        />

        <Container className="relative z-10">
          <SectionHeading
            className="text-center"
            title={
              <>
                Custom web apps, portals <br />
                <span className="text-black/50">and tools we build</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          <div className="mt-[70px] flex items-stretch justify-between gap-[45px]">
            <ul className="flex w-[554px] shrink-0 flex-col gap-[15px]">
              {customAppSolutions.map(
                ({ id, icon: Icon, iconBgClassName, title, description }) => {
                  const isActive = id === activeId;

                  return (
                    <li key={id} className="relative">
                      <button
                        type="button"
                        aria-expanded={isActive}
                        aria-controls={`${id}-panel`}
                        onClick={() => setActiveId(id)}
                        className="flex w-full cursor-pointer items-start gap-[20px] rounded-[20px] bg-white p-[20px] text-left"
                      >
                        <span
                          className={`flex size-[56px] shrink-0 items-center justify-center rounded-full text-white ${iconBgClassName}`}
                        >
                          <Icon size={30} />
                        </span>

                        <span className="flex min-h-[50px] flex-1 flex-col justify-center">
                          <span className="text-[25px] font-bold tracking-[-0.07em] text-black">
                            {title}
                          </span>

                          <span
                            id={`${id}-panel`}
                            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                              isActive
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <span className="overflow-hidden">
                              <span className="text-text-body block pt-[5px] text-[18px] leading-[22px] tracking-[-0.02em]">
                                {description}
                              </span>
                            </span>
                          </span>
                        </span>
                      </button>

                      <span
                        className={`absolute top-1/2 -right-[20px] size-[27px] -translate-y-1/2 bg-white transition-opacity duration-500 [clip-path:polygon(0_0,100%_50%,0_100%)] ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </li>
                  );
                },
              )}
            </ul>

            <div className="bg-grey relative w-[600px] overflow-hidden rounded-[20px]">
              {customAppSolutions.map(
                ({ id, title, image, imageWidth, imageHeight }) =>
                  image && (
                    <Image
                      key={id}
                      src={image}
                      alt={title}
                      width={imageWidth}
                      height={imageHeight}
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
                        id === activeId ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ),
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default CustomAppSolutions;
