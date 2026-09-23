import { journeySteps } from "@/config/common";
import DragMarquee from "../ui/DragMarquee";
import Starfield from "../ui/Starfield";
import { Container } from "../ui/Container";
import Section from "../ui/Section";

const AboutJourney = () => {
  return (
    <>
      <Section
        id="journey"
        className="max-425:px-[3rem] max-425:items-start max-425:pt-xl relative flex h-[56rem] items-center overflow-hidden bg-black"
      >
        <div className="absolute top-0 left-1/2 h-full w-full max-w-[144rem] -translate-x-1/2">
          <Starfield className="absolute bottom-[-5rem] left-0 z-0 h-[16rem] w-[60rem] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

          <Starfield className="absolute right-0 bottom-0 bottom-[-5rem] z-0 h-[16rem] w-[60rem] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />
        </div>

        {/* The window the track travels through. Hidden from assistive tech
            because the track is duplicated; the readable copy is below. */}
        <div
          aria-hidden="true"
          className="max-425:h-auto max-425:w-full group max-425:-translate-y-0 max-425:top-[24rem] absolute top-1/2 left-1/2 h-full w-[38rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden"
        >
          {/* Drives and drags the track below 425. Its only child must be
              the track, which is what it measures. */}
          <DragMarquee>
            {/* Two identical copies, so travelling half the track's height lands
              the second where the first began and the loop never seams. */}
            <ul className="animate-marquee-up max-425:animate-none max-425:w-max max-425:flex-row flex flex-col group-hover:[animation-play-state:paused] motion-reduce:animate-none">
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
                    className="p-lg max-425:p-md mb-sm max-425:mr-sm max-425:mb-0 max-425:w-[30rem] w-[36rem] shrink-0 rounded-md bg-white"
                  >
                    {/* The pill from the Process section, so a step reads the
                      same wherever it appears. */}
                    <p
                      className={`text-body-01 max-425:text-[1.2rem] px-sm py-xs inline-flex w-fit rounded-full border font-medium tracking-[-0.02em] ${borderClassName} ${textClassName}`}
                    >
                      STEP {step}
                    </p>

                    <p className="text-subheading-02 max-425:text-[2rem] mt-md max-425:mt-xs font-bold tracking-[-0.07em] text-black">
                      {title}
                    </p>

                    <p className="text-body-03 max-425:text-[1.4rem] text-text-body mt-xs leading-[2.4rem]">
                      {description}
                    </p>
                  </li>
                ),
              )}
            </ul>
          </DragMarquee>

          <span className="max-425:inset-x-auto max-425:inset-y-0 max-425:left-0 max-425:h-full max-425:w-[6rem] max-425:bg-linear-to-r pointer-events-none absolute inset-x-0 top-0 z-10 h-[12rem] bg-linear-to-b from-black to-transparent" />

          <span className="max-425:inset-x-auto max-425:inset-y-0 max-425:right-0 max-425:h-full max-425:w-[6rem] max-425:bg-linear-to-l pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[12rem] bg-linear-to-t from-black to-transparent" />
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
          <div className="gap-lg max-425:gap-xs max-425:flex-col max-425:text-center flex items-center justify-between">
            <div className="max-425:w-full max-425:items-center flex w-[38rem] flex-col items-start">
              <p className="text-body-01 max-425:text-[1.4rem] font-medium tracking-[-0.02em] text-white uppercase">
                12+ Years
              </p>

              <h2 className="max-425:text-[4.5rem] max-425:leading-[4.5rem] text-[11rem] leading-[12rem] font-bold tracking-[-0.07em]">
                {/* pr compensates for the negative tracking, which otherwise
                    pulls the paint box in and clips the last glyph. */}
                <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_74.04%)] bg-clip-text pr-[0.07em] text-transparent">
                  Start Building
                </span>
              </h2>
            </div>

            <p className="max-425:w-full max-425:text-[4.5rem] max-425:leading-[4.5rem] max-425:text-center w-[38rem] text-end text-[11rem] leading-[12rem] font-bold tracking-[-0.07em] text-white">
              Kept Building
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutJourney;
