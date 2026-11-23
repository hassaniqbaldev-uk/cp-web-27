import { behaviours } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import Starfield from "../ui/Starfield";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const AboutBehaviours = () => {
  return (
    <>
      <Section
        id="behaviours"
        className="relative overflow-hidden bg-black py-[120px]"
      >
        <Image
          src="/images/about/gradient-bg-about-behaviours.png"
          alt=""
          width={1440}
          height={506}
          className="pointer-events-none absolute bottom-0 left-0 z-0 h-auto w-full"
        />

        <Starfield className="absolute bottom-[-50px] left-1/2 z-0 h-[184px] w-[1021px] -translate-x-1/2 mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

        <Container className="relative z-10">
          <SectionHeading
            title={
              <>
                Behaviours, <span className="text-white/50">not values.</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] text-center font-extrabold tracking-[-0.07em] text-white"
          />

          <ul className="mt-[65px] grid grid-cols-2 items-start gap-[30px]">
            {behaviours.map(
              ({
                id,
                icon,
                iconWidth,
                iconHeight,
                title,
                description,
                hoverClassName,
              }) => (
                <li key={id} className="even:mt-[30px]">
                  <div
                    className={`bg-text-body rounded-[20px] p-[45px] transition duration-300 ${hoverClassName}`}
                  >
                    <Image
                      src={icon}
                      alt=""
                      width={iconWidth}
                      height={iconHeight}
                      className="shrink-0"
                    />

                    <h3 className="mt-[45px] text-[35px] font-bold tracking-[-0.07em] text-white">
                      {title}
                    </h3>

                    <p className="mt-[10px] text-[22px] tracking-[-0.02em] text-white">
                      {description}
                    </p>
                  </div>
                </li>
              ),
            )}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default AboutBehaviours;
