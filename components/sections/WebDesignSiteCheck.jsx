import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import SiteCheckForm from "../ui/SiteCheckForm";

const WebDesignSiteCheck = () => {
  return (
    <>
      <Section
        id="web-design-site-check"
        className="relative overflow-hidden py-[100px]"
      >
        <Image
          src="/images/services/gradient-bg-web-design-site-check.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none z-0 object-cover"
        />

        <Container className="relative z-10">
          <div className="flex items-center justify-between gap-[45px]">
            <SectionHeading
              className="w-[460px]"
              title={
                <>
                  How does your current site <br />
                  <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                    measure up?
                  </span>
                </>
              }
              titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
              subtitle="Enter your website and we’ll check its mobile speed in seconds. Want the full picture? We’ll record a free video audit of what’s costing you enquiries."
              subtitleClassName="text-text-body mt-[25px] text-[22px] leading-[33px] tracking-[-0.02em]"
            />

            <div className="w-[655px] shrink-0 rounded-[20px] bg-white p-[55px]">
              <SiteCheckForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default WebDesignSiteCheck;
