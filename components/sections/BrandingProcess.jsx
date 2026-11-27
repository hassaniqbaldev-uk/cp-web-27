import { brandingProcess } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const BrandingProcess = () => {
  return (
    <>
      <Section
        id="branding-process"
        className="relative overflow-hidden pt-[120px] pb-[120px] max-sm:py-[80px]"
      >
        <Image
          src="/images/services/gradient-bg-branding-process.png"
          alt=""
          fill
          className="pointer-events-none z-0 object-cover"
        />

        {/* Circles are placed absolutely (positions live in the data) to get
            the staggered, overlapping wave around the centred heading. On
            phones they drop into the flow and zig-zag down instead. */}
        <Container className="relative z-10 h-[700px] max-sm:h-auto max-sm:px-[20px]">
          <SectionHeading
            className="relative z-40 mx-auto max-w-[580px] text-center"
            title={
              <>
                How we design your <br />
                <span className="text-blue">brand identity</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[32px] max-sm:leading-[34px]"
            subtitle="A brand is judged in use, not in a presentation. So we design for the places your customers actually see it."
            subtitleClassName="text-text-body mx-auto mt-[30px] max-w-[470px] text-[22px] leading-[28px] tracking-[-0.02em] max-sm:mt-[16px] max-sm:text-[16px] max-sm:leading-[24px]"
          />

          <ul className="max-sm:mt-[40px] max-sm:flex max-sm:flex-col">
            {brandingProcess.map(
              ({ id, icon: Icon, title, description, className }) => (
                <li
                  key={id}
                  className={`absolute flex size-[360px] flex-col items-center justify-center rounded-full bg-white/80 px-[60px] text-center shadow-[16px_16px_124px_0px_#00000012] backdrop-blur-[20px] max-sm:relative max-sm:inset-auto max-sm:size-[260px] max-sm:self-start max-sm:px-[40px] max-sm:not-first:-mt-[40px] max-sm:even:self-end ${className}`}
                >
                  <Icon
                    size={28}
                    className="shrink-0 text-black max-sm:size-[24px]"
                  />

                  <h3 className="mt-[24px] text-[25px] leading-[30px] font-bold tracking-[-0.05em] text-black max-sm:mt-[14px] max-sm:text-[22px] max-sm:leading-[26px]">
                    {title}
                  </h3>

                  <p className="text-text-body mt-[15px] max-w-[230px] text-[18px] leading-[22px] tracking-[-0.02em] max-sm:mt-[10px] max-sm:text-[15px] max-sm:leading-[20px]">
                    {description}
                  </p>
                </li>
              ),
            )}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default BrandingProcess;
