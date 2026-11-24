"use client";

import { aiResult } from "@/config/common";
import { Tabs } from "@base-ui/react/tabs";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineClock } from "react-icons/hi2";
import { ImQuotesLeft } from "react-icons/im";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const AiResult = () => {
  const { tabs, stat, quote, cta } = aiResult;
  const [activeId, setActiveId] = useState("after");

  return (
    <>
      <Section id="ai-result" className="relative overflow-hidden py-[120px]">
        <Image
          src="/images/services/gradient-bg-web-design-case-studies.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none z-0 object-cover"
        />

        <Container className="relative z-10">
          <SectionHeading
            className="text-center"
            title={
              <>
                How Casa Botanica went <br />
                from 3 days to 1 day
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          <div className="mt-[55px] flex items-stretch justify-between rounded-[30px] bg-white p-[40px] shadow-[16px_16px_124px_0px_#00000017]">
            <Tabs.Root
              value={activeId}
              onValueChange={setActiveId}
              className="w-[592px]"
            >
              <div className="flex items-center gap-[25px]">
                <Tabs.List
                  aria-label="Before and after"
                  className="flex rounded-full border border-black/10 p-[4px]"
                >
                  {tabs.map(({ id, label }) => (
                    <Tabs.Tab
                      key={id}
                      value={id}
                      className={`h-[42px] cursor-pointer rounded-full px-[22px] text-[18px] font-bold tracking-[-0.04em] transition-colors duration-300 ${
                        id === activeId
                          ? "bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] text-white shadow-[0px_6px_16px_0px_#EC359340]"
                          : "text-black"
                      }`}
                    >
                      {label}
                    </Tabs.Tab>
                  ))}
                </Tabs.List>

                <span className="h-[25px] w-px bg-black/10" />

                <p className="text-text-body text-[18px] tracking-[-0.02em]">
                  Manual → Automated
                </p>
              </div>

              {tabs.map(({ id, steps }) => (
                <Tabs.Panel
                  key={id}
                  value={id}
                  className="mt-[44px] grid grid-cols-2 gap-[30px]"
                >
                  {steps.map(({ id: stepId, icon: Icon, title, text }) => (
                    <div
                      key={stepId}
                      className="bg-grey/60 flex h-[119px] items-center gap-[20px] rounded-[20px] px-[25px]"
                    >
                      <span className="flex size-[70px] shrink-0 items-center justify-center rounded-full bg-white text-black">
                        <Icon size={32} />
                      </span>

                      <span className="flex flex-col">
                        <span className="text-[18px] leading-[23px] font-bold tracking-[-0.04em] text-black">
                          {title}
                        </span>

                        <span className="text-text-body text-[18px] leading-[23px] tracking-[-0.02em]">
                          {text}
                        </span>
                      </span>
                    </div>
                  ))}
                </Tabs.Panel>
              ))}
            </Tabs.Root>

            <div className="flex min-h-[531px] w-[495px] flex-col items-start rounded-[30px] bg-[linear-gradient(45deg,var(--color-dark-pink)_35%,var(--color-orange)_100%)] p-[50px] text-white">
              <span className="flex size-[75px] shrink-0 items-center justify-center rounded-[15px] bg-white text-black">
                <HiOutlineClock size={42} />
              </span>

              <p className="mt-[25px] text-[45px] leading-[50px] font-bold tracking-[-0.06em] whitespace-nowrap">
                {stat.value}
              </p>

              <p className="mt-[5px] text-[16px] leading-[24px] tracking-[-0.02em]">
                {stat.description}
              </p>

              <span className="my-[30px] h-px w-full bg-white/50" />

              <figure>
                <ImQuotesLeft size={18} />

                <blockquote className="mt-[12px] text-[18px] leading-[26px] tracking-[-0.02em] italic">
                  {quote.text}
                </blockquote>

                <figcaption className="mt-[15px] text-[13px] leading-[18px] tracking-[-0.02em]">
                  — {quote.author}
                </figcaption>
              </figure>

              <div className="mt-auto flex pt-[25px]">
                <Button
                  href={cta.href}
                  className="rounded-full bg-white px-[30px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] whitespace-nowrap text-black uppercase"
                >
                  {cta.label}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AiResult;
