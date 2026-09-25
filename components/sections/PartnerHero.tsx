import { partnerStats } from "@/config/common";
import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

// Kept here rather than in config: four lines that belong to this hero
// alone. The swatch colours are complete class strings, since Tailwind scans
// source files for full class names.
const terms = [
  { id: "nda", text: "NDA before the brief", swatchClassName: "bg-dark-pink" },
  {
    id: "client",
    text: "Your client stays yours",
    swatchClassName: "bg-orange",
  },
  { id: "fit", text: "Yes or no on fit in 48h", swatchClassName: "bg-blue" },
  {
    id: "scope",
    text: "Any part, or all of it",
    swatchClassName: "bg-[#6FDC8C]",
  },
];

// backdrop-filter takes one radius, so a blur that ramps has to be stacked:
// each layer doubles the radius and is masked to start a little lower, and the
// overlap reads as a smooth progression.
const BLUR_LAYERS = [0.7, 1.4, 2.8, 5.6, 11.25, 22.5, 45, 90];

// Where the blur begins, as a share of the layer's height.
const BLUR_START = 12.45;

const PartnerHero = () => {
  return (
    <>
      <Section
        id="partner-hero"
        className="bg-grey/40 relative flex min-h-screen flex-col justify-center pt-[20rem] pb-[8rem]"
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/partner-with-us/hero-mockup-img.png"
            alt=""
            aria-hidden="true"
            width={941}
            height={850}
            className="absolute right-0 bottom-[8rem] shrink-0"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[8rem] left-0 h-[37.1rem] w-full"
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

            <span className="absolute inset-0 bg-[linear-gradient(0deg,#F4F4F4_0%,rgba(244,244,244,0)_100%)]" />
          </div>
        </div>

        <Container className="relative z-10">
          {/* A list, so the four read as a set of terms rather than four loose
              lines. */}
          <ul className="p-md absolute top-[-7rem] right-0 flex flex-col gap-[.8rem] rounded-md bg-white">
            {terms.map(({ id, text, swatchClassName }) => (
              <li key={id} className="gap-xs flex items-center">
                <span
                  aria-hidden="true"
                  className={`size-[.8rem] shrink-0 ${swatchClassName}`}
                />

                <span className="text-body-03 tracking-[-0.02em] text-black">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex w-[56.5rem] flex-col items-start">
            <SectionHeading
              as="h1"
              label="For agencies"
              title={
                <>
                  White-label websites, built{" "}
                  <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                    for agencies.
                  </span>
                </>
              }
              subtitle="Your name on the work, ours on nothing. White label web design and development for agencies: we support you with design, development, ecommerce, apps and specialist work under their brand, without competing for the client relationship."
              labelClassName="text-body-01 font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-heading-02 mt-xs leading-[9rem] font-extrabold tracking-[-0.07em] text-black"
              subtitleClassName="text-body-02 text-text-body mt-sm max-w-[70rem] leading-[2.8rem] tracking-[-0.02em]"
            />

            <Button
              href="/contact"
              className="text-body-03 px-sm py-xs mt-md rounded-full bg-black font-extrabold tracking-[-0.02em] text-white uppercase"
            >
              Tell us what you need
            </Button>
          </div>

          <ul className="mt-[6rem] grid grid-cols-4 gap-[.6rem]">
            {partnerStats.map(({ id, value, label }) => (
              <li
                key={id}
                className="gap-sm p-sm flex items-center rounded-md bg-white"
              >
                <p className="shrink-0 text-[5rem] font-extrabold tracking-[-0.07em] text-black">
                  {value}
                </p>

                <span
                  aria-hidden="true"
                  className="h-[4rem] w-px shrink-0 bg-black"
                />

                <p className="text-text-body leading-[2.2rem] font-medium tracking-[-0.02em]">
                  {label}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default PartnerHero;
