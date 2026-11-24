"use client";

import { webDesignPlatforms } from "@/config/common";
import { Tabs } from "@base-ui/react/tabs";
import Image from "next/image";
import { useState } from "react";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const WebDesignPlatforms = () => {
  const [activeId, setActiveId] = useState(webDesignPlatforms[0].id);

  return (
    <>
      <Section
        id="web-design-platforms"
        className="relative overflow-hidden bg-[#0A0616] py-[120px]"
      >
        <Image
          src="/images/services/gradient-bg-web-design-platforms.png"
          alt=""
          width={1920}
          height={663}
          className="pointer-events-none absolute bottom-0 left-1/2 z-0 -translate-x-1/2"
        />

        <Container className="relative z-10">
          <SectionHeading
            className="text-center"
            title={
              <>
                WordPress, Shopify or Webflow: <br />
                <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                  which platform fits.
                </span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-white"
            subtitle="Enter your website and we’ll check its mobile speed in seconds. Want the full picture? We’ll record a free video audit of what’s costing you enquiries."
            subtitleClassName="mx-auto mt-[25px] max-w-[760px] text-[22px] leading-[33px] tracking-[-0.02em] text-white"
          />

          <Tabs.Root value={activeId} onValueChange={setActiveId}>
            <Tabs.List
              aria-label="Website platforms"
              className="mt-[50px] flex justify-center gap-[10px]"
            >
              {webDesignPlatforms.map(({ id, name, icon: Icon }) => (
                <div key={id} className="flex flex-col items-center">
                  <Tabs.Tab
                    value={id}
                    aria-label={name}
                    className={`gradient-border flex size-[138px] cursor-pointer items-center justify-center rounded-full text-white transition-colors duration-300 hover:bg-white/30 ${
                      id === activeId ? "bg-white/30" : "bg-white/20"
                    }`}
                  >
                    <Icon size={65} />
                  </Tabs.Tab>

                  <span
                    className={`mt-[18px] h-[31px] w-[36px] bg-white transition-opacity duration-300 [clip-path:polygon(50%_0,100%_100%,0_100%)] ${
                      id === activeId ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              ))}
            </Tabs.List>

            {webDesignPlatforms.map(
              ({ id, name, description, bestFor, cta }) => (
                <Tabs.Panel
                  key={id}
                  value={id}
                  className="mx-auto flex min-h-[363px] w-[1068px] items-stretch rounded-[30px] bg-white py-[58px] pr-[65px] pl-[68px]"
                >
                  <div className="flex flex-1 flex-col justify-between gap-[30px]">
                    <h3 className="mt-[10px] text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black">
                      {name}
                    </h3>

                    <p className="text-text-body max-w-[385px] text-[22px] leading-[33px] tracking-[-0.02em]">
                      {description}
                    </p>
                  </div>

                  <span className="w-px shrink-0 bg-black/20" />

                  <div className="flex w-[460px] shrink-0 flex-col items-start justify-between gap-[30px] pl-[128px]">
                    <div>
                      <p className="text-[22px] leading-[28px] font-bold tracking-[-0.02em] text-black uppercase">
                        Best for:
                      </p>

                      <ul className="mt-[15px] flex flex-col gap-[8px]">
                        {bestFor.map((item) => (
                          <li
                            key={item}
                            className="text-text-body flex items-center gap-[20px] text-[25px] leading-[31px] tracking-[-0.04em]"
                          >
                            <span className="bg-blue size-[15px] shrink-0 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex">
                      <Button
                        href={cta.href}
                        className="rounded-full bg-black px-[25px] py-[14px] text-[16px] font-extrabold tracking-[-0.02em] whitespace-nowrap text-white uppercase"
                      >
                        {cta.label}
                      </Button>
                    </div>
                  </div>
                </Tabs.Panel>
              ),
            )}
          </Tabs.Root>
        </Container>
      </Section>
    </>
  );
};

export default WebDesignPlatforms;
