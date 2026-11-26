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
        className="relative overflow-hidden py-[120px] max-sm:py-[80px]"
      >
        <Image
          src="/images/services/gradient-bg-custom-app-solutions.png"
          alt=""
          fill
          className="pointer-events-none z-0 object-cover"
        />

        <Container className="relative z-10 max-sm:px-[20px]">
          <SectionHeading
            className="text-center"
            title={
              <>
                Custom web apps, portals <br />
                <span className="text-black/50">and tools we build</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[28px] max-sm:leading-[32px]"
          />

          <div className="mt-[70px] flex items-stretch justify-between gap-[45px] max-sm:mt-[30px] max-sm:flex-col max-sm:gap-[16px]">
            <ul className="flex w-[554px] shrink-0 flex-col gap-[15px] max-sm:order-2 max-sm:w-full max-sm:gap-[10px]">
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
                        className="flex w-full cursor-pointer items-start gap-[20px] rounded-[20px] bg-white p-[20px] text-left max-sm:gap-[14px] max-sm:p-[16px]"
                      >
                        <span
                          className={`flex size-[56px] shrink-0 items-center justify-center rounded-full text-white max-sm:size-[44px] ${iconBgClassName}`}
                        >
                          <Icon size={30} className="max-sm:size-[22px]" />
                        </span>

                        <span className="flex min-h-[50px] flex-1 flex-col justify-center max-sm:min-h-[44px]">
                          <span className="text-[25px] font-bold tracking-[-0.07em] text-black max-sm:text-[20px] max-sm:leading-[24px]">
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
                              <span className="text-text-body block pt-[5px] text-[18px] leading-[22px] tracking-[-0.02em] max-sm:text-[15px] max-sm:leading-[21px]">
                                {description}
                              </span>
                            </span>
                          </span>
                        </span>
                      </button>

                      <span
                        className={`absolute top-1/2 -right-[20px] size-[27px] -translate-y-1/2 bg-white transition-opacity duration-500 [clip-path:polygon(0_0,100%_50%,0_100%)] max-sm:hidden ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </li>
                  );
                },
              )}
            </ul>

            <div className="bg-grey relative w-[600px] overflow-hidden rounded-[20px] max-sm:order-1 max-sm:h-[260px] max-sm:w-full">
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
