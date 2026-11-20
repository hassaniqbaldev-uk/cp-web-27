import { customAppTechStack } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";
import TechBalls from "../ui/TechBalls";

const CustomAppTechStack = () => {
  return (
    <>
      <Section
        id="custom-app-tech-stack"
        className="relative overflow-hidden bg-black py-[120px]"
      >
        <Image
          src="/images/services/gradient-bg-custom-app-tech-stack.png"
          alt=""
          fill
          className="pointer-events-none z-0 object-cover"
        />

        <Starfield className="absolute bottom-[-50px] left-1/2 z-0 h-[204px] w-[760px] -translate-x-1/2 mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

        <Container className="pointer-events-none relative z-10">
          <TechBalls
            items={customAppTechStack}
            className="pointer-events-auto absolute! inset-0 z-10"
          />

          <SectionHeading
            className="relative z-20 text-center"
            title={
              <>
                Built on proven tech, <br />
                <span className="text-white/50">connected to your tools</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-white"
          />

          <div aria-hidden="true" className="mt-[80px] h-[365px]" />
        </Container>
      </Section>
    </>
  );
};

export default CustomAppTechStack;
