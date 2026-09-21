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
        className="bg-grey/40 flex min-h-screen flex-col justify-center pt-[10rem] pb-[8rem]"
      >
        <Container className="relative">
          <div className="gap-lg relative z-[12] flex items-center items-start justify-between pt-[6.3rem]">
            <div className="flex w-[51rem] flex-col items-start">
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
                labelClassName="text-body-01 font-medium tracking-[-0.02em] text-black uppercase"
                titleClassName="text-heading-02  leading-[9rem] font-extrabold tracking-[-0.07em] text-black"
              />

              <Button
                href="/contact"
                className="text-body-03 px-sm py-xs mt-md rounded-full bg-black font-extrabold tracking-[-0.02em] text-white uppercase"
              >
                Tell us what you need
              </Button>
            </div>

            <div className="px-md pt-md w-[30.5rem] rounded-md bg-white pb-[4rem]">
              {/* h2, since the page's h1 is the heading beside it. */}
              <h2 className="text-subheading-01 text-text-body font-bold tracking-[-0.07em]">
                Strategy, Design &amp; Technology, Together
              </h2>

              <p className="text-body-03 text-text-body mt-xs tracking-[-0.02em]">
                CreativePixels is a UK digital agency bringing strategy, design
                and technology together across websites, ecommerce, branding,
                growth and custom digital products. Senior people stay involved
                from the first conversation through launch - and beyond.
              </p>
            </div>
          </div>

          {/* A list, so it announces as four items rather than eight loose
              strings. */}
          <ul className="relative z-[12] mt-[14rem] grid grid-cols-4 gap-[.6rem]">
            {aboutStats.map(({ id, value, label }) => (
              <li
                key={id}
                className="gap-sm p-sm flex items-center rounded-md bg-white"
              >
                <p className="shrink-0 text-[6.5rem] font-extrabold tracking-[-0.07em] text-black">
                  {value}
                </p>

                <span
                  aria-hidden="true"
                  className="h-[4rem] w-px shrink-0 bg-black"
                />

                <p className="text-body-03 text-text-body leading-[2.4rem] font-medium tracking-[-0.02em]">
                  {label}
                </p>
              </li>
            ))}
          </ul>
          {/* Anchored to the container rather than the section, so it stays
              centred on the content column at any width. Decorative: nothing
              here depends on recognising the photo. */}
          <Image
            src="/images/about/hassan-hero-img.png"
            alt=""
            aria-hidden="true"
            width={594}
            height={705}
            className="pointer-events-none absolute right-[18.3rem] bottom-0 z-[10]"
          />

          {/* After the image in the source, so it paints over it without
              needing a z-index. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 z-[11] h-[37.1rem] w-full"
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

            {/* The fill sits over the blur, as it does in the design. */}
            <span className="absolute inset-0 bg-[linear-gradient(0deg,#F4F4F4_0%,rgba(244,244,244,0)_100%)]" />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutHero;
