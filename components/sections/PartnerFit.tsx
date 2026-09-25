import { partnerFit } from "@/config/common";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";

const PartnerFit = () => {
  return (
    <>
      <Section
        id="partner-fit"
        className="py-3xl relative overflow-hidden bg-black"
      >
        <div className="absolute top-0 left-1/2 h-full w-full max-w-[144rem] -translate-x-1/2">
          <Starfield className="absolute bottom-[-5rem] left-1/2 z-0 h-[20rem] w-[77rem] -translate-x-1/2 mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />
        </div>

        <Container className="relative z-10">
          <SectionHeading
            label="Is it a good fit?"
            title={
              <>
                When it is a good fit, <br />
                <span className="text-white/50">and when we will say no.</span>
              </>
            }
            labelClassName="text-body-01 text-center font-medium tracking-[-0.02em] text-white uppercase"
            titleClassName="text-heading-02 mt-xs text-center leading-[8rem] font-extrabold tracking-[-0.07em] text-white"
          />

          <div className="gap-md mt-2xl grid grid-cols-2 items-start">
            {partnerFit.map(
              ({ id, icon: Icon, title, points, note, isPositive }) => (
                <div
                  key={id}
                  // Both cards are dark until pointed at. active: as well as
                  // hover:, since Tailwind gates hover: behind
                  // @media (hover: hover) and a phone never matches it.
                  //
                  // The second card sits lower, so the pair reads as a
                  // preference rather than as two equal options.
                  className={`group p-lg rounded-md bg-[#454545] transition duration-300 hover:bg-white hover:shadow-[0px_4px_84px_0px_#FFFFFFCC] active:bg-white active:shadow-[0px_4px_84px_0px_#FFFFFFCC] ${
                    isPositive ? "" : "mt-md"
                  }`}
                >
                  <Icon
                    aria-hidden="true"
                    size={30}
                    strokeWidth={2}
                    className="shrink-0 text-white transition-colors duration-300 group-hover:text-black group-active:text-black"
                  />

                  {/* h3, since the section heading above is the h2. */}
                  <h3 className="text-subheading-01 mt-md font-bold tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-black group-active:text-black">
                    {title}
                  </h3>

                  <ul className="gap-xs mt-sm flex flex-col">
                    {points.map((point) => (
                      <li key={point} className="gap-xs flex items-start">
                        {/* The marker is drawn rather than left to the list
                            style, so it lines up with the first line of a
                            point that wraps. */}
                        <span
                          aria-hidden="true"
                          className="mt-[1rem] size-[0.4rem] shrink-0 rounded-full bg-white transition-colors duration-300 group-hover:bg-black group-active:bg-black"
                        />

                        <span className="text-body-03 leading-[2.4rem] tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-black group-active:text-black">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {note && (
                    <p className="text-body-04 group-hover:text-text-body group-active:text-text-body mt-md leading-[2rem] tracking-[-0.02em] text-white/60 transition-colors duration-300">
                      {note}
                    </p>
                  )}
                </div>
              ),
            )}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PartnerFit;
