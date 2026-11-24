import { HiOutlineClock } from "react-icons/hi2";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import SeoCheckForm from "../ui/SeoCheckForm";

const SeoCheck = () => {
  return (
    <>
      <Section id="seo-check" className="py-[120px]">
        <Container>
          <div className="bg-blue flex items-stretch justify-between rounded-[30px] pt-[62px] pr-[68px] pb-[72px] pl-[55px]">
            <div className="flex w-[468px] flex-col justify-between">
              <SectionHeading
                label="SEO audit"
                labelClassName="text-[22px] leading-[28px] tracking-[-0.02em] text-white uppercase"
                title="Get a free SEO check."
                titleClassName="mt-[10px] text-[45px] leading-[50px] font-extrabold tracking-[-0.06em] text-white"
                subtitle="Send your website and the three searches you most want to be found for. We’ll tell you where you stand and what we’d fix first."
                subtitleClassName="mt-[20px] text-[22px] leading-[33px] tracking-[-0.02em] text-white"
              />

              {/* Divider and note line up with the last fields and the button. */}
              <div className="border-t border-white pt-[29px]">
                <p className="flex h-[53px] items-center gap-[12px] text-[22px] tracking-[-0.02em] whitespace-nowrap text-white">
                  <HiOutlineClock size={30} className="shrink-0" />
                  Usually within 2 working days. No obligation.
                </p>
              </div>
            </div>

            <div className="w-[533px]">
              <SeoCheckForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default SeoCheck;
