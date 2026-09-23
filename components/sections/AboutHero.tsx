import { aboutStats } from "@/config/common";
import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

// backdrop-filter takes one radius, so a blur that ramps has to be stacked:
// each layer doubles the radius and is masked to start a little lower, and the
// overlap reads as a smooth progression. Ends at 90, as the design specifies.
const BLUR_LAYERS = [0.7, 1.4, 2.8, 5.6, 11.25, 22.5, 45, 90];

// Where the blur begins, as a share of the layer's height.
const BLUR_START = 12.45;

const AboutHero = () => {
  return (
    <>
      <Section
        id="about-hero"
        className="bg-grey/40 max-425:min-h-auto max-425:pb-[3rem] max-425:pt-[5rem] flex min-h-screen flex-col justify-center pt-[10rem] pb-[8rem]"
      >
        <Container className="relative">
          <div className="gap-lg max-425:px-[3rem] max-425:flex-col max-425:items-center max-425:text-center relative z-[12] flex items-center items-start justify-between pt-[6.3rem]">
            <div className="max-425:items-center max-425:w-full flex w-[51rem] flex-col items-start">
              <SectionHeading
                // The page's single h1 — the outline starts here.
                as="h1"
                label="About Creative Pixels"
                title={
                  <>
                    {/* pr compensates for the negative tracking, which
                        otherwise pulls the paint box in and clips the last
                        glyph of a gradient span. */}
                    <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                      Strategy first.
                    </span>{" "}
                    Senior people involved.
                  </>
                }
                labelClassName="text-body-01 max-425:text-[1.4rem] font-medium tracking-[-0.02em] text-black uppercase"
                titleClassName="text-heading-02 max-425:mt-[.4rem] max-425:text-[4.5rem] max-425:leading-[4.5rem] max-425:max-w-[27rem] leading-[9rem] font-extrabold tracking-[-0.07em] text-black"
              />

              <Button
                href="/contact"
                className="text-body-03 max-425:text-[1.4rem] px-sm py-xs max-425:mt-[2rem] mt-md rounded-full bg-black font-extrabold tracking-[-0.02em] text-white uppercase"
              >
                Tell us what you need
              </Button>
            </div>

            <div className="px-md pt-md max-425:w-full max-425:p-[2rem] w-[30.5rem] rounded-md bg-white pb-[4rem]">
              {/* h2, since the page's h1 is the heading beside it. */}
              <h2 className="text-subheading-01 max-425:text-[1.6rem] text-text-body font-bold tracking-[-0.07em]">
                Strategy, Design &amp; Technology, Together
              </h2>

              <p className="text-body-03 max-425:text-[1.2rem] text-text-body mt-xs tracking-[-0.02em]">
                CreativePixels is a UK digital agency bringing strategy, design
                and technology together across websites, ecommerce, branding,
                growth and custom digital products. Senior people stay involved
                from the first conversation through launch - and beyond.
              </p>
            </div>
          </div>

          {/* Clips the track below 425, where the four sit in a row wider than
              the screen. Under reduced motion the animation stops and this
              becomes an ordinary horizontal scroller, so every card stays
              reachable. */}
          <div className="max-425:overflow-hidden max-425:motion-reduce:overflow-x-auto max-425:mt-[30rem] relative z-[12] mt-[14rem]">
            {/* A list, so it announces as four items rather than eight loose
                strings. */}
            {/* Held while a finger is down, and while a pointer is over it
                for anyone reading on a desktop at this width. */}
            <ul className="max-425:animate-marquee-left max-425:w-max max-425:flex-nowrap max-425:[--marquee-gap:0.6rem] max-425:flex max-425:active:[animation-play-state:paused] max-425:hover:[animation-play-state:paused] grid grid-cols-4 gap-[.6rem] motion-reduce:animate-none">
              {/* The second pass is the copy the loop needs. It is hidden from
                  assistive tech and from every width above the breakpoint, so
                  the grid stays four cards and nothing is announced twice. */}
              {[false, true].map((isCopy) =>
                aboutStats.map(({ id, value, label }) => (
                  <li
                    key={isCopy ? `${id}-copy` : id}
                    {...(isCopy && { "aria-hidden": true })}
                    className={`gap-sm max-425:gap-xs p-sm max-425:w-[20rem] max-425:shrink-0 max-425:rounded-sm items-center rounded-md bg-white ${
                      isCopy ? "max-425:flex hidden" : "flex"
                    }`}
                  >
                    <p className="max-425:text-[3.5rem] shrink-0 text-[6.5rem] font-extrabold tracking-[-0.07em] text-black">
                      {value}
                    </p>

                    <span
                      aria-hidden="true"
                      className="max-425:h-[2rem] h-[4rem] w-px shrink-0 bg-black"
                    />

                    <p className="text-body-03 max-425:text-[1.2rem] text-text-body max-425:leading-[1.8rem] leading-[2.4rem] font-medium tracking-[-0.02em]">
                      {label}
                    </p>
                  </li>
                )),
              )}
            </ul>
          </div>
          {/* Anchored to the container rather than the section, so it stays
              centred on the content column at any width. Decorative: nothing
              here depends on recognising the photo.

              At 425 it leaves the absolute layer and returns to the flow. It
              already sits after the stats in the source, so it lands beneath
              them with nothing to overlap. */}
          <Image
            src="/images/about/hassan-hero-img.png"
            alt=""
            aria-hidden="true"
            width={594}
            height={705}
            className="max-425:left-1/2 max-425:-translate-x-1/2 max-425:mt-md max-425:h-auto max-425:w-[30rem] pointer-events-none absolute bottom-0 left-[42.4rem] z-[10]"
          />

          {/* After the image in the source, so it paints over it without
              needing a z-index. */}
          <div
            aria-hidden="true"
            className="max-425:h-[16rem] pointer-events-none absolute bottom-0 left-0 z-[11] h-[37.1rem] w-full"
          >
            {BLUR_LAYERS.map((blur, index) => {
              const span = (80 - BLUR_START) / BLUR_LAYERS.length;
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

            {/* The fill sits over the blur, as it does in the design. */}
            <span className="absolute inset-0 bg-[linear-gradient(0deg,#F4F4F4_0%,rgba(244,244,244,0)_100%)]" />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutHero;
