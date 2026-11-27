import { HiOutlineClock } from "react-icons/hi2";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import SeoCheckForm from "../ui/SeoCheckForm";

const SeoCheck = () => {
  return (
    <>
      <Section id="seo-check" className="py-[120px] max-sm:py-[80px]">
        <Container className="max-sm:px-[20px]">
          <div className="bg-blue flex items-stretch justify-between rounded-[30px] pt-[62px] pr-[68px] pb-[72px] pl-[55px] max-sm:flex-col max-sm:gap-[30px] max-sm:rounded-[20px] max-sm:px-[16px] max-sm:pt-[45px] max-sm:pb-[35px]">
            <div className="flex w-[468px] flex-col justify-between max-sm:contents">
              <SectionHeading
                className="max-sm:order-1 max-sm:text-center"
                label="SEO audit"
                labelClassName="text-[22px] leading-[28px] tracking-[-0.02em] text-white uppercase max-sm:text-[15px] max-sm:leading-[20px]"
                title="Get a free SEO check."
                titleClassName="mt-[10px] text-[45px] leading-[50px] font-extrabold tracking-[-0.06em] text-white max-sm:mt-[8px] max-sm:text-[30px] max-sm:leading-[32px]"
                subtitle="Send your website and the three searches you most want to be found for. We’ll tell you where you stand and what we’d fix first."
                subtitleClassName="mt-[20px] text-[22px] leading-[33px] tracking-[-0.02em] text-white max-sm:mt-[14px] max-sm:text-[16px] max-sm:leading-[24px]"
              />

              {/* Divider and note line up with the last fields and the button. */}
              <div className="border-t border-white pt-[29px] max-sm:order-3 max-sm:pt-[20px]">
                <p className="flex h-[53px] items-center gap-[12px] text-[22px] tracking-[-0.02em] whitespace-nowrap text-white max-sm:h-auto max-sm:gap-[10px] max-sm:text-[15px] max-sm:leading-[21px] max-sm:whitespace-normal">
                  <HiOutlineClock
                    size={30}
                    className="shrink-0 max-sm:size-[22px]"
                  />
                  <span>
                    Usually within 2 working days. <br className="sm:hidden" />
                    No obligation.
                  </span>
                </p>
              </div>
            </div>

            <div className="w-[533px] max-sm:order-2 max-sm:w-full">
              <SeoCheckForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default SeoCheck;
