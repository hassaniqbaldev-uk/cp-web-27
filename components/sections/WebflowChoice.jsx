import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const WebflowChoice = () => {
  return (
    <>
      <Section id="webflow-choice" className="py-[120px]">
        <Container>
          <div className="flex min-h-[443px] items-center justify-between overflow-hidden rounded-[20px] bg-[linear-gradient(90deg,var(--color-blue)_30%,#94B9FF_75%)] pl-[60px]">
            <SectionHeading
              title={
                <>
                  Webflow is the right tool <br />
                  when the marketing team <br />
                  wants to own the site.
                </>
              }
              titleClassName="text-[45px] leading-[50px] font-extrabold tracking-[-0.06em] whitespace-nowrap text-white"
              subtitle="It gives designers and marketers a visual editor that does not break the design, with hosting, SSL and performance handled. It is less suited to complex product logic, large stores or heavy custom functionality, where WordPress or a custom build fits better. We will say which before you commit."
              subtitleClassName="mt-[20px] max-w-[492px] text-[18px] leading-[28px] tracking-[-0.02em] text-white"
            />

            {/* Runs off the right edge of the panel, fading as it goes. */}
            <Image
              src="/images/services/laptop-webflow-choice.png"
              alt="Cortax website on a laptop"
              width={585}
              height={444}
              className="h-auto w-[585px] shrink-0 mask-[linear-gradient(to_right,#000_70%,transparent_100%)]"
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default WebflowChoice;
