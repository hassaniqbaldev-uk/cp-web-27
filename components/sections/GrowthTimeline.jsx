import { growthTimeline } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const GrowthTimeline = () => {
  return (
    <>
      <Section
        id="growth-timeline"
        className="relative overflow-hidden py-[120px]"
      >
        <Image
          src="/images/services/gradient-bg-web-design-case-studies.png"
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
                What <span className="text-blue">12 months</span> on a <br />
                plan looks like
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          <div className="mt-[60px] flex items-stretch justify-between">
            {/* The line and the steps share one grid cell. */}
            <div className="grid">
              <span className="bg-blue col-start-1 row-start-1 ml-[598px] w-[4px] rounded-full shadow-[4px_4px_12px_0px_#3078FF40]" />

              <ol className="relative col-start-1 row-start-1 flex flex-col gap-[20px]">
                {growthTimeline.map(({ id, label, text }) => (
                  <li key={id} className="flex items-center">
                    <div className="flex h-[148px] w-[487px] flex-col items-center justify-center gap-[18px] rounded-[20px] bg-white px-[30px] text-center">
                      <span className="border-blue text-blue flex h-[35px] w-[184px] items-center justify-center rounded-full border text-[18px] tracking-[-0.02em]">
                        {label}
                      </span>

                      <p className="text-[18px] leading-[24px] tracking-[-0.02em] text-black">
                        {text}
                      </p>
                    </div>

                    <span className="h-[46px] w-[41px] bg-white [clip-path:polygon(0_0,100%_50%,0_100%)]" />

                    <span className="ml-[49px] flex size-[46px] shrink-0 items-center justify-center rounded-full bg-white">
                      <span className="bg-blue size-[26px] rounded-full" />
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <Image
              src="/images/services/ayoa-growth-timeline.png"
              alt="Ayoa website design"
              width={512}
              height={820}
              className="h-[820px] w-[512px] shrink-0 rounded-[30px] object-cover"
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default GrowthTimeline;
