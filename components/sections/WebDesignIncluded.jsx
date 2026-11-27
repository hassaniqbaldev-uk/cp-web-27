import { webDesignIncluded } from "@/config/common";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const WebDesignIncluded = () => {
  return (
    <>
      <Section id="web-design-included" className="py-[120px] max-sm:py-[80px]">
        <Container className="max-sm:px-[20px]">
          <div className="bg-grey/40 flex items-start justify-between overflow-hidden rounded-[20px] px-[70px] pt-[70px] max-sm:flex-col max-sm:items-stretch max-sm:px-[16px] max-sm:pt-[40px]">
            {/* contain-size keeps the tall screenshot from setting the card height,
                so this column just stretches to match the accordion. On phones
                it sits under the accordion at a fixed height. */}
            <div className="min-h-[790px] w-[395px] shrink-0 overflow-hidden rounded-t-[20px] mask-[linear-gradient(to_bottom,#000_65%,transparent_100%)] contain-size max-sm:order-2 max-sm:mx-auto max-sm:h-[340px] max-sm:min-h-0 max-sm:w-[86%] max-sm:contain-none">
              <Image
                src="/images/services/sunbox-screen-web-design-hero.png"
                alt="Campervan Converters in Sussex website"
                width={522}
                height={4410}
                sizes="395px"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="w-[570px] pb-[70px] max-sm:order-1 max-sm:w-full max-sm:pb-[40px]">
              <SectionHeading
                className="max-sm:text-center"
                title={
                  <>
                    <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                      What’s included
                    </span>
                    <br />
                    in every website
                  </>
                }
                titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[30px] max-sm:leading-[32px]"
              />

              <Accordion className="mt-[40px] gap-[10px] max-sm:mt-[30px] max-sm:gap-[8px]">
                {webDesignIncluded.map(({ id, title, description }, index) => (
                  <AccordionItem
                    key={id}
                    value={id}
                    className="rounded-[42px] border-0! bg-white pr-[20px] pl-[40px] max-sm:rounded-[28px] max-sm:pr-[12px] max-sm:pl-[20px]"
                  >
                    <AccordionTrigger
                      className="gap-[20px] py-[20px] max-sm:gap-[12px] max-sm:py-[14px]"
                      indicatorClassName="size-[42px] rounded-full border border-black text-black max-sm:size-[34px]"
                    >
                      <span className="text-[25px] leading-[30px] font-bold tracking-[-0.06em] text-black max-sm:text-[18px] max-sm:leading-[23px]">
                        <span className="text-orange">
                          {String(index + 1).padStart(2, "0")}
                        </span>{" "}
                        – {title}
                      </span>
                    </AccordionTrigger>

                    <AccordionContent className="pr-[60px] pb-[25px] max-sm:pr-[20px] max-sm:pb-[18px]">
                      <p className="text-text-body text-[16px] leading-[26px] tracking-[-0.02em] max-sm:text-[15px] max-sm:leading-[22px]">
                        {description}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default WebDesignIncluded;
