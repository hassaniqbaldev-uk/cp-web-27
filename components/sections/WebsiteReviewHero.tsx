import { reviewPoints } from "@/config/common";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";
import WebsiteReviewForm from "../ui/WebsiteReviewForm";

const WebsiteReviewHero = () => {
  return (
    <>
      <Section
        id="website-review-hero"
        className="max-425:px-[3rem] max-425:pt-[13rem] max-425:pb-xl relative overflow-hidden bg-black pt-[16rem] pb-[10rem]"
      >
        <Starfield className="max-425:top-auto max-425:right-auto max-425:bottom-[-5rem] max-425:left-1/2 max-425:h-[20rem] max-425:w-[77rem] max-425:-translate-x-1/2 absolute top-0 right-[-5rem] z-0 h-full w-[26rem] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

        <Container className="gap-lg max-425:gap-xl max-425:flex-col relative z-10 flex items-start justify-between">
          <div className="max-425:w-full w-[52.3rem]">
            <SectionHeading
              // The page's single h1 — the outline starts here.
              as="h1"
              label="Website review"
              title={
                <>
                  Want more enquiries?{" "}
                  {/* pr compensates for the negative tracking, which otherwise
                      pulls the paint box in and clips the last glyph of a
                      gradient span. */}
                  <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                    Find out why.
                  </span>
                </>
              }
              subtitle="Send us your URL. We will review the page experience, conversion friction and search foundations, then give you a short list of the things we would prioritise first."
              labelClassName="text-body-01 max-425:text-[1.4rem] max-425:text-center font-medium tracking-[-0.02em] text-white uppercase"
              titleClassName="text-heading-02 max-425:text-[4.5rem] max-425:leading-[4.5rem] max-425:text-center mt-xs leading-[8rem] font-extrabold tracking-[-0.07em] text-white"
              subtitleClassName="text-body-02 max-425:text-[1.6rem] max-425:leading-[2.4rem] max-425:text-center text-grey mt-sm leading-[2.8rem] tracking-[-0.02em]"
            />

            {/* The rules are drawn over the grid rather than as borders on the
                items, so each one runs unbroken across the gaps instead of
                stopping at every cell edge. */}
            <div className="mt-xl max-425:mt-lg relative">
              {/* A list, so the four read as a set of what we look at rather
                  than four loose blocks. */}
              <ul className="gap-md max-425:gap-sm max-425:grid-cols-1 grid grid-cols-2">
                {reviewPoints.map(
                  ({ id, title, subtitle, swatchClassName }) => (
                    <li key={id}>
                      <p className="gap-xs flex items-center">
                        <span
                          aria-hidden="true"
                          className={`size-[.8rem] shrink-0 ${swatchClassName}`}
                        />

                        <span className="text-body-01 max-425:text-[1.8rem] font-bold tracking-[-0.02em] text-white">
                          {title}
                        </span>
                      </p>

                      <p className="text-body-04 max-425:text-[1.2rem] text-grey mt-xs leading-[2rem] tracking-[-0.02em]">
                        {subtitle}
                      </p>
                    </li>
                  ),
                )}
              </ul>

              <span
                aria-hidden="true"
                className="max-425:hidden pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/20"
              />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/20"
              />
            </div>
          </div>

          <div className="p-lg max-425:w-full max-425:p-sm w-[60rem] shrink-0 rounded-md bg-white">
            <WebsiteReviewForm />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default WebsiteReviewHero;
