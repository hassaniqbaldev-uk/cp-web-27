import { uiUxFlowIssues } from "@/config/common";
import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const UiUxFlow = () => {
  return (
    <>
      <Section id="ui-ux-flow" className="pb-[120px] max-sm:pb-[80px]">
        <Container className="max-sm:px-[20px]">
          <div className="bg-blue relative overflow-hidden rounded-[30px] max-sm:rounded-[20px]">
            <Image
              src="/images/services/gradient-bg-ui-ux-flow.png"
              alt=""
              fill
              sizes="1200px"
              className="pointer-events-none z-0 object-cover"
            />

            <div className="relative z-10 flex min-h-[424px] pr-[35px] pl-[60px] max-sm:min-h-0 max-sm:flex-col max-sm:items-center max-sm:px-[16px] max-sm:pt-[45px]">
              <div className="flex flex-1 flex-col items-start justify-between gap-[30px] py-[60px] max-sm:items-center max-sm:gap-[24px] max-sm:py-0 max-sm:text-center">
                <SectionHeading
                  title={
                    <>
                      Have a flow people <br />
                      keep abandoning?
                    </>
                  }
                  titleClassName="text-[45px] leading-[50px] font-extrabold tracking-[-0.06em] text-white max-sm:text-[30px] max-sm:leading-[32px]"
                  subtitle="Send us the link and we will tell you what we would change first."
                  subtitleClassName="mt-[20px] max-w-[350px] text-[22px] leading-[33px] tracking-[-0.02em] text-white max-sm:mt-[14px] max-sm:text-[16px] max-sm:leading-[24px]"
                />

                <div className="flex">
                  <Button
                    href="/website-review"
                    className="rounded-full bg-white px-[30px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase max-sm:px-[24px] max-sm:py-[12px] max-sm:text-[15px]"
                  >
                    Free website audit
                  </Button>
                </div>
              </div>

              <Image
                src="/images/services/browser-ui-ux-flow.png"
                alt="Example online store page in a browser"
                width={413}
                height={374}
                className="mt-[51px] mb-[-2px] h-[374px] w-[413px] shrink-0 self-end object-cover object-top max-sm:order-3 max-sm:mt-[30px] max-sm:h-auto max-sm:w-[280px] max-sm:self-center"
              />

              <ul className="flex shrink-0 flex-col gap-[20px] self-center max-sm:order-2 max-sm:mt-[35px] max-sm:grid max-sm:w-full max-sm:grid-cols-2 max-sm:gap-[10px]">
                {uiUxFlowIssues.map(({ id, icon: Icon, title }) => (
                  <li key={id} className="flex items-center">
                    <span className="w-[95px] border-t border-dashed border-white max-sm:hidden" />

                    <span className="-mr-[3px] size-[6px] rounded-full bg-white max-sm:hidden" />

                    <span className="flex h-[56px] w-[155px] items-center gap-[12px] rounded-full bg-white p-[6px] max-sm:h-[50px] max-sm:w-full max-sm:gap-[8px] max-sm:p-[5px]">
                      <span className="bg-blue flex size-[44px] shrink-0 items-center justify-center rounded-full text-white max-sm:size-[40px]">
                        <Icon size={22} className="max-sm:size-[19px]" />
                      </span>

                      <span className="text-left text-[14px] leading-[16px] font-semibold tracking-[-0.04em] whitespace-pre-line text-black max-sm:text-[13px] max-sm:leading-[15px]">
                        {title}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default UiUxFlow;
