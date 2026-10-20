import { behaviours } from "@/config/common";
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
        <Starfield className="absolute top-0 left-[-50px] z-0 h-[700px] w-[190px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

        <Starfield className="absolute right-[-50px] bottom-0 z-0 h-[700px] w-[190px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

        <Container className="relative z-10">
          <SectionHeading
            label="How we actually operate"
            title={
              <>
                Behaviours, <span className="text-white/50">not values.</span>
              </>
            }
            labelClassName="text-[22px] text-center font-medium tracking-[-0.02em] text-white uppercase"
            titleClassName="text-[85px] leading-[80px] mt-[10px] text-center font-extrabold tracking-[-0.07em] text-white"
          />

          <ul className="mt-[65px] grid grid-cols-2 items-start gap-[30px]">
            {behaviours.map(
              ({ id, icon: Icon, title, description, hoverClassName }) => (
                <li key={id} className="even:mt-[30px]">
                  <div
                    className={`rounded-[20px] bg-[#1A1A1A] p-[45px] transition duration-300 ${hoverClassName}`}
                  >
                    <Icon
                      size={50}
                      strokeWidth={1.5}
                      className="shrink-0 text-white"
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
