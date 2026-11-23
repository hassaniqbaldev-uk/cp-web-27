import { customAppScopingNeeds } from "@/config/common";
import Button from "../ui/Button";
import PhoneVideo from "../ui/PhoneVideo";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const CustomAppScoping = () => {
  return (
    <>
      <Section
        id="custom-app-scoping"
        className="relative overflow-hidden py-[130px]"
      >
        <Container className="relative">
          <div className="flex w-[525px] shrink-0 flex-col items-start">
            <SectionHeading
              label="Scoping"
              title={
                <>
                  How we scope a <br />
                  <span className="text-black/50">project (2 min)</span>
                </>
              }
              labelClassName="text-[22px] font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-[65px] mt-[10px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
            />

            <div className="bg-grey/50 mt-[30px] w-full rounded-[20px] p-[40px]">
              <p className="text-[25px] font-bold tracking-[-0.07em] text-black">
                To estimate your first phase, we just need:
              </p>

              <ul className="mt-[20px] flex flex-col gap-[10px]">
                {customAppScopingNeeds.map(({ id, text }) => (
                  <li
                    key={id}
                    className="text-text-body flex items-start gap-[10px] text-[16px] leading-[22px] tracking-[-0.02em]"
                  >
                    <span className="bg-blue mt-[7px] size-[8px] shrink-0 rounded-full" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex">
              <Button
                href="/contact"
                className="mt-[40px] rounded-full bg-black px-[20px] py-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase"
              >
                Plan my first release
              </Button>
            </div>
          </div>

          <PhoneVideo
            mockup="/images/services/phone-mockup-cutom-app-scoping.png"
            mockupWidth={811}
            mockupHeight={960}
            src="/images/services/hassan-video-cutom-app-scoping.mp4"
            poster="/images/services/hassan-video-thumbnail-cutom-app-scoping.png"
            screenClassName="top-[23px] left-[291px] h-[769px] w-[356px]"
            className="absolute! top-[-30px] right-0 w-[811px]"
          />

          <span className="pointer-events-none absolute right-[27px] bottom-[-130px] z-10 h-[151px] w-[650px] bg-[linear-gradient(0deg,#FFFCFC_0%,rgba(255,252,252,0)_100%)]" />
        </Container>
      </Section>
    </>
  );
};

export default CustomAppScoping;
