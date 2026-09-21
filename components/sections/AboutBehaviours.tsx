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
        className="py-3xl relative overflow-hidden bg-black"
      >
        {/* The mask curves each field off at its edges, so it reads as a soft
            cloud rather than a rectangle of stars. */}
        <Starfield className="absolute top-0 left-[-5rem] z-0 h-[70rem] w-[19rem] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

        <Starfield className="absolute right-[-5rem] bottom-0 z-0 h-[70rem] w-[19rem] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

        <Container className="relative z-10">
          <SectionHeading
            label="How we actually operate"
            title={
              <>
                Behaviours, <span className="text-white/50">not values.</span>
              </>
            }
            labelClassName="text-body-01 text-center font-medium tracking-[-0.02em] text-white uppercase"
            titleClassName="text-heading-02 leading-[8rem] mt-xs text-center font-extrabold tracking-[-0.07em] text-white"
          />

          <ul className="gap-md mt-xl grid grid-cols-2 items-start">
            {behaviours.map(
              ({ id, icon: Icon, title, description, hoverClassName }) => (
                // even:mt picks out the second and fourth cards, so the two
                // columns stagger rather than reading as flat rows.
                <li
                  key={id}
                  className={`p-lg rounded-md bg-white/10 transition duration-300 even:mt-[3rem] ${hoverClassName}`}
                >
                  <Icon
                    aria-hidden="true"
                    size={50}
                    strokeWidth={1.5}
                    className="shrink-0 text-white"
                  />

                  {/* h3, since the section heading above is the h2. */}
                  <h3 className="text-subheading-02 mt-lg font-bold tracking-[-0.07em] text-white">
                    {title}
                  </h3>

                  <p className="text-body-01 mt-xs tracking-[-0.02em] text-white">
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

export default AboutBehaviours;
