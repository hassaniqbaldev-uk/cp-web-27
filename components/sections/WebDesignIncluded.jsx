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
      <Section id="web-design-included" className="py-[120px]">
        <Container>
          <div className="bg-grey/40 flex items-start justify-between overflow-hidden rounded-[20px] px-[70px] pt-[70px]">
            {/* contain-size keeps the tall screenshot from setting the card height,
                so this column just stretches to match the accordion. */}
            <div className="min-h-[790px] w-[395px] shrink-0 overflow-hidden rounded-t-[20px] mask-[linear-gradient(to_bottom,#000_65%,transparent_100%)] contain-size">
              <Image
                src="/images/services/sunbox-screen-web-design-hero.png"
                alt="Campervan Converters in Sussex website"
                width={522}
                height={4410}
                sizes="395px"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="w-[570px] pb-[70px]">
              <SectionHeading
                title={
                  <>
                    <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                      What’s included
                    </span>
                    <br />
                    in every website
                  </>
                }
                titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
              />

              <Accordion className="mt-[40px] gap-[10px]">
                {webDesignIncluded.map(({ id, title, description }, index) => (
                  <AccordionItem
                    key={id}
                    value={id}
                    className="rounded-[42px] border-0! bg-white pr-[20px] pl-[40px]"
                  >
                    <AccordionTrigger
                      className="gap-[20px] py-[20px]"
                      indicatorClassName="size-[42px] rounded-full border border-black text-black"
                    >
                      <span className="text-[25px] leading-[30px] font-bold tracking-[-0.06em] text-black">
                        <span className="text-orange">
                          {String(index + 1).padStart(2, "0")}
                        </span>{" "}
                        – {title}
                      </span>
                    </AccordionTrigger>

                    <AccordionContent className="pr-[60px] pb-[25px]">
                      <p className="text-text-body text-[16px] leading-[26px] tracking-[-0.02em]">
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
