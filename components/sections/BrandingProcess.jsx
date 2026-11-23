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
        className="relative overflow-hidden pt-[120px] pb-[120px]"
      >
        <Image
          src="/images/services/gradient-bg-branding-process.png"
          alt=""
          fill
          className="pointer-events-none z-0 object-cover"
        />

        {/* Circles are placed absolutely (positions live in the data) to get
            the staggered, overlapping wave around the centred heading. */}
        <Container className="relative z-10 h-[700px]">
          <SectionHeading
            className="relative z-40 mx-auto max-w-[580px] text-center"
            title={
              <>
                How we design your <br />
                <span className="text-blue">brand identity</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
            subtitle="A brand is judged in use, not in a presentation. So we design for the places your customers actually see it."
            subtitleClassName="text-text-body mx-auto mt-[30px] max-w-[470px] text-[22px] leading-[28px] tracking-[-0.02em]"
          />

          <ul>
            {brandingProcess.map(
              ({ id, icon: Icon, title, description, className }) => (
                <li
                  key={id}
                  className={`absolute flex size-[360px] flex-col items-center justify-center rounded-full bg-white/80 px-[60px] text-center shadow-[16px_16px_124px_0px_#00000012] backdrop-blur-[20px] ${className}`}
                >
                  <Icon size={28} className="shrink-0 text-black" />

                  <h3 className="mt-[24px] text-[25px] leading-[30px] font-bold tracking-[-0.05em] text-black">
                    {title}
                  </h3>

                  <p className="text-text-body mt-[15px] max-w-[230px] text-[18px] leading-[22px] tracking-[-0.02em]">
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
