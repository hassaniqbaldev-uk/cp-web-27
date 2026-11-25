import { googleAdsProcess } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const GoogleAdsProcess = () => {
  return (
    <>
      <Section
        id="google-ads-process"
        className="bg-orange/10 relative overflow-hidden py-[120px]"
      >
        <Image
          src="/images/services/gradient-bg-ai-automate.png"
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
                Keywords, ads, landing page, <br />
                <span className="text-black/50">conversion tracking.</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          <ul className="mt-[70px] grid grid-cols-4 gap-[13px]">
            {googleAdsProcess.map(({ id, icon: Icon, title, description }) => (
              <li
                key={id}
                className="flex min-h-[349px] flex-col items-start rounded-[20px] bg-white p-[30px]"
              >
                <Icon
                  size={70}
                  strokeWidth={1.25}
                  className="text-blue ml-[-6px] shrink-0"
                />

                <h3 className="mt-[40px] text-[25px] leading-[33px] font-bold tracking-[-0.06em] whitespace-pre-line text-black">
                  {title}
                </h3>

                <p className="text-text-body mt-[14px] text-[16px] leading-[24px] tracking-[-0.02em]">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default GoogleAdsProcess;
