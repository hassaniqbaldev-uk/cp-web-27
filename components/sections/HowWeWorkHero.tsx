import { workflowSteps } from "@/config/common";
import Image from "next/image";
import DragMarquee from "../ui/DragMarquee";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";

// backdrop-filter takes one radius, so a blur that ramps has to be stacked:
// each layer doubles the radius and is masked to start a little lower, and the
// overlap reads as a smooth progression.
const BLUR_LAYERS = [0.7, 1.4, 2.8, 5.6, 11.25, 22.5, 45, 90];

// Where the blur begins, as a share of the layer's height.
const BLUR_START = 12.45;

const HowWeWorkHero = () => {
  return (
    <>
      <Section
        id="how-we-work-hero"
        className="mb-lg relative h-[80rem] bg-black"
      >
        <div className="absolute inset-0 overflow-hidden">
          <Starfield className="absolute top-1/2 right-[-5rem] z-0 h-[80rem] w-[21.4rem] -translate-y-1/2 mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

          <Image
            src="/images/how-we-work/hero-mockup-img.png"
            alt=""
            aria-hidden="true"
            width={729}
            height={649}
            className="max-425:hidden absolute right-0 bottom-0 shrink-0"
          />

          {/* The mockup's own crop for this width, in the same layer as the
              one above so the blur still passes over it. Decorative:
              nothing depends on recognising the screen it shows. */}
          <Image
            src="/images/how-we-work/hero-mockup-img-mobile.png"
            alt=""
            aria-hidden="true"
            width={1560}
            height={1726}
            className="max-425:block absolute bottom-0 left-1/2 hidden h-auto w-full -translate-x-1/2"
          />

          <div
            aria-hidden="true"
            className="max-425:h-[14rem] pointer-events-none absolute bottom-0 left-0 h-[37.1rem] w-full"
          >
            {BLUR_LAYERS.map((blur, index) => {
              const span = (100 - BLUR_START) / BLUR_LAYERS.length;
              const from = BLUR_START + span * index;
              const mask = `linear-gradient(to bottom, transparent ${from}%, black ${from + span}%, black 100%)`;

              return (
                <span
                  key={blur}
                  className="absolute inset-0"
                  style={{
                    backdropFilter: `blur(${blur}px)`,
                    WebkitBackdropFilter: `blur(${blur}px)`,
                    maskImage: mask,
                    WebkitMaskImage: mask,
                  }}
                />
              );
            })}

            {/* The fill sits over the blur, as it does in the design — black
                here, since this hero's band is black rather than off white. */}
            <span className="absolute inset-0 bg-[linear-gradient(0deg,#000000_0%,rgba(0,0,0,0)_100%)]" />
          </div>
        </div>

        <Container className="pt-section-lg max-425:pt-[10rem] relative z-[20] flex flex-col items-start">
          <div className="max-425:w-full max-425:px-[3rem] w-[58.2rem]">
            <SectionHeading
              // The page's single h1 — the outline starts here.
              as="h1"
              label="How we work"
              title={
                <>
                  {/* pr compensates for the negative tracking, which otherwise
                      pulls the paint box in and clips the last glyph of a
                      gradient span. */}
                  <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                    A clear process.
                  </span>{" "}
                  Senior people involved.
                </>
              }
              labelClassName="text-body-01 max-425:text-center max-425:text-[1.4rem] font-medium tracking-[-0.02em] text-white uppercase"
              titleClassName="text-heading-02 max-425:mt-[.5rem] max-425:mx-auto max-425:max-w-[30rem] max-425:text-center max-425:text-[3.5rem] max-425:leading-[3.5rem] leading-[9rem] font-extrabold tracking-[-0.07em] text-white"
            />

            <p className="text-body-02 max-425:text-[1.6rem] max-425:text-center max-425:mx-auto text-grey max-425:mt-sm mt-md max-w-[48.3rem] leading-[2.8rem] tracking-[-0.02em]">
              What happens before a proposal, what is fixed before work starts,
              how the build runs, and what we still do after launch. No mystery,
              no six-week silence.
            </p>
          </div>

          {/* Clips the track at 425, where the four steps sit in a row
              wider than the screen. */}
          <div className="max-425:overflow-hidden max-425:mt-[40rem] mt-2xl w-full">
            {/* Drives and drags the track below 425. Its only child must be
                the track, which is what it measures. */}
            <DragMarquee>
              <ul className="gap-xs max-425:w-max max-425:flex-nowrap max-425:flex grid w-full grid-cols-4">
                {/* The second pass is the copy the loop needs. It is kept from
                    assistive tech and from every width above the breakpoint, so
                    the grid stays four cards and no step is announced twice. */}
                {[false, true].map((isCopy) =>
                  workflowSteps.map(({ id, step, title, details }) => (
                    <li
                      key={isCopy ? `${id}-copy` : id}
                      {...(isCopy && { "aria-hidden": true })}
                      className={`p-md bg-grey/70 max-425:w-[30rem] max-425:shrink-0 rounded-md backdrop-blur-[20px] ${
                        isCopy ? "max-425:block hidden" : ""
                      }`}
                    >
                      <p className="text-body-01 max-425:text-body-02 py-xs px-sm inline-flex w-fit rounded-xl bg-white font-medium tracking-[-0.02em]">
                        STEP {step}
                      </p>

                      <h2 className="text-subheading-02 max-425:text-[3.5rem] mt-md max-425:mt-sm font-bold tracking-[-0.07em]">
                        {title}
                      </h2>

                      <ul className="gap-sm mt-xs flex flex-col">
                        {details.map((detail) => (
                          <li key={detail.id}>
                            <p className="text-body-04 font-extrabold">
                              {detail.title}
                            </p>

                            <p className="text-body-03 text-text-body leading-[2.4rem]">
                              {detail.subtitle}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )),
                )}
              </ul>
            </DragMarquee>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default HowWeWorkHero;
