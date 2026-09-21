import { journeySteps } from "@/config/common";
import Starfield from "../ui/Starfield";
import { Container } from "../ui/Container";
import Section from "../ui/Section";

const AboutJourney = () => {
  return (
    <>
      <Section
        id="journey"
        className="relative flex h-[56rem] items-center overflow-hidden bg-black"
      >
        <div className="absolute top-0 left-1/2 h-full w-full max-w-[144rem] -translate-x-1/2">
          <Starfield className="absolute bottom-[-5rem] left-0 z-0 h-[16rem] w-[60rem] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

          <Starfield className="absolute right-0 bottom-0 bottom-[-5rem] z-0 h-[16rem] w-[60rem] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />
        </div>

        {/* The window the track travels through. Hidden from assistive tech
            because the track is duplicated; the readable copy is below. */}
        <div
          aria-hidden="true"
          className="group absolute top-1/2 left-1/2 h-full w-[38rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden"
        >
          {/* Two identical copies, so travelling half the track's height lands
              the second where the first began and the loop never seams. */}
          <ul className="animate-marquee-up flex flex-col group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[...journeySteps, ...journeySteps].map(
              (
                {
                  id,
                  step,
                  title,
                  description,
                  borderClassName,
                  textClassName,
                },
                index,
              ) => (
                <li
                  // The copies repeat the same ids, so the key carries the
                  // position as well.
                  key={`${id}-${index}`}
                  className="p-lg mb-sm w-[36rem] shrink-0 rounded-md bg-white"
                >
                  {/* The pill from the Process section, so a step reads the
                      same wherever it appears. */}
                  <p
                    className={`text-body-01 px-sm py-xs inline-flex w-fit rounded-full border font-medium tracking-[-0.02em] ${borderClassName} ${textClassName}`}
                  >
                    STEP {step}
                  </p>

                  <p className="text-subheading-02 mt-md font-bold tracking-[-0.07em] text-black">
                    {title}
                  </p>

                  <p className="text-body-03 text-text-body mt-xs leading-[2.4rem]">
                    {description}
                  </p>
                </li>
              ),
            )}
          </ul>

          <span className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[12rem] bg-linear-to-b from-black to-transparent" />

          <span className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[12rem] bg-linear-to-t from-black to-transparent" />
        </div>

        {/* The readable copy of the marquee, since the scrolling track is
                duplicated and cannot be read in order. */}
        <ol className="sr-only">
          {journeySteps.map(({ id, step, title, description }) => (
            <li key={id}>
              Step {step}. {title}. {description}
            </li>
          ))}
        </ol>

        <Container className="relative z-10">
          <div className="gap-lg flex items-center justify-between">
            <div className="flex w-[38rem] flex-col items-start">
              <p className="text-body-01 font-medium tracking-[-0.02em] text-white uppercase">
                12+ Years
              </p>

              <h2 className="text-[11rem] leading-[12rem] font-bold tracking-[-0.07em]">
                {/* pr compensates for the negative tracking, which otherwise
                    pulls the paint box in and clips the last glyph. */}
                <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_74.04%)] bg-clip-text pr-[0.07em] text-transparent">
                  Start Building
                </span>
              </h2>
            </div>

            <p className="w-[38rem] text-end text-[11rem] leading-[12rem] font-bold tracking-[-0.07em] text-white">
              Kept Building
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutJourney;
