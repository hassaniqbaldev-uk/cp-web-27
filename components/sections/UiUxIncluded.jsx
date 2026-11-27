import { uiUxIncluded } from "@/config/common";
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

const UiUxIncluded = () => {
  return (
    <>
      <Section
        id="ui-ux-included"
        className="relative overflow-hidden py-[120px] max-sm:py-[80px]"
      >
        <Image
          src="/images/services/gradient-bg-ui-ux-included.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none z-0 object-cover"
        />

        <Container className="relative z-10 max-sm:px-[20px]">
          <div className="flex items-center justify-between max-sm:flex-col max-sm:items-stretch max-sm:gap-[40px]">
            <Image
              src="/images/services/smokey-carter-ui-ux-included.png"
              alt="Smokey Carter BBQ store website"
              width={556}
              height={710}
              className="h-[710px] w-[556px] shrink-0 rounded-[30px] object-cover max-sm:order-2 max-sm:h-[420px] max-sm:w-full max-sm:rounded-[20px]"
            />

            <div className="flex w-[582px] flex-col items-center max-sm:order-1 max-sm:w-full">
              <SectionHeading
                className="text-center"
                title={
                  <>
                    What’s included in <br />
                    <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                      UI/UX design
                    </span>
                  </>
                }
                titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[30px] max-sm:leading-[32px]"
                subtitle={
                  <>
                    The interface includes every state, <br />
                    not just the main screen.
                  </>
                }
                subtitleClassName="text-text-body mt-[20px] text-[22px] leading-[33px] tracking-[-0.02em] max-sm:mt-[16px] max-sm:text-[16px] max-sm:leading-[24px]"
              />

              <Accordion
                defaultValue={[uiUxIncluded[0].id]}
                className="mt-[30px] items-center gap-[15px] max-sm:gap-[10px]"
              >
                {uiUxIncluded.map(({ id, title, description }) => (
                  <AccordionItem
                    key={id}
                    value={id}
                    className="w-fit rounded-[43px] border-0! bg-white px-[30px] transition-[border-radius] duration-550 data-open:rounded-[20px] max-sm:max-w-full max-sm:px-[20px]"
                  >
                    <AccordionTrigger
                      className="gap-[15px] py-[23px] max-sm:gap-[12px] max-sm:py-[14px]"
                      indicatorClassName="size-[40px] max-sm:size-[34px] rounded-full border border-black text-black group-data-panel-open/accordion-trigger:bg-black group-data-panel-open/accordion-trigger:text-white"
                    >
                      <span className="text-text-body text-[35px] leading-[40px] font-medium tracking-[-0.06em] max-sm:text-[20px] max-sm:leading-[24px]">
                        {title}
                      </span>
                    </AccordionTrigger>

                    {/* w-0 + min-w-full: the text wraps to the title's width
                        instead of stretching the pill. */}
                    <AccordionContent className="w-0 min-w-full pb-[25px] max-sm:pb-[16px]">
                      <p className="text-text-body text-center text-[16px] leading-[22px] tracking-[-0.02em] max-sm:text-[15px] max-sm:leading-[21px]">
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

export default UiUxIncluded;
