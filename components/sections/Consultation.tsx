import { consultationBenefits } from "@/config/common";
import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";

const Consultation = () => {
  return (
    <>
      <Section
        id="consultation"
        className="py-3xl relative overflow-hidden bg-[radial-gradient(117.98%_100%_at_76.32%_0%,rgba(0,0,0,0.6)_0%,#000000_45%)]"
      >
        {/* The mask curves the field off at its edges, so it reads as a soft
            cloud in the corner rather than a rectangle of stars. */}
        <Starfield className="absolute right-0 bottom-[-5rem] z-0 h-[20rem] w-[77rem] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

        <Container className="relative z-10">
          <div className="gap-lg flex items-center justify-between">
            <div className="flex w-[64rem] flex-col items-start">
              <SectionHeading
                label="Book your September slot"
                title={
                  <>
                    {/* pr compensates for the negative tracking, which
                        otherwise pulls the paint box in and clips the last
                        glyph of a gradient span. */}
                    <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                      Got something
                    </span>{" "}
                    <br />
                    You need to build, <br />
                    fix or grow?
                  </>
                }
                subtitle="Tell us what you're trying to achieve and we'll help you figure out the best way forward."
                labelClassName="text-body-01 font-medium tracking-[-0.02em] text-white uppercase"
                titleClassName="text-heading-02 mt-xs mb-md leading-[8rem] font-extrabold tracking-[-0.07em] text-white"
                subtitleClassName="text-body-02 text-white  max-w-[38rem] leading-[2.8rem] tracking-[-0.02em]"
              />

              <Button
                href="/contact"
                className="text-body-03 px-sm py-xs mt-lg rounded-xl bg-white font-extrabold tracking-[-0.02em] text-black uppercase"
              >
                Request a growth review
              </Button>
            </div>

            <div className="gradient-border p-lg w-[45rem] rounded-md bg-white/20 backdrop-blur-[10px] [--gradient-border-image:linear-gradient(140.55deg,rgba(255,255,255,0)_7.24%,rgba(255,255,255,0.6)_47.59%,rgba(255,255,255,0)_76.61%)] [--gradient-border-width:1.24px]">
              <div className="gap-sm flex items-center">
                {/* Decorative: the name is already in the text beside it. */}
                <Image
                  src="/images/home/hassan-avatar-img.png"
                  alt=""
                  aria-hidden="true"
                  width={96}
                  height={96}
                  className="size-[9.6rem] shrink-0 rounded-full object-cover"
                />

                <div>
                  <p className="text-subheading-02 leading-[3.5rem] font-bold tracking-[-0.07em] text-white">
                    15 Min Call
                  </p>

                  <p className="text-body-02 tracking-[-0.02em] text-white">
                    with Hassan
                  </p>

                  <p className="mt-xs gap-xs flex items-center">
                    <span
                      aria-hidden="true"
                      className="size-[1.2rem] shrink-0 animate-pulse rounded-full bg-[#6FDC8C] motion-reduce:animate-none"
                    />

                    <span className="text-body-03 tracking-[-0.02em] text-white">
                      Available this week
                    </span>
                  </p>
                </div>
              </div>

              <Button
                href="/contact"
                className="text-body-03 py-xs mt-md w-full rounded-xl bg-white font-extrabold tracking-[-0.02em] text-black uppercase"
              >
                Book a call
              </Button>

              {/* The rules are drawn over the grid rather than as borders on
                  the items, so each one runs unbroken across the gaps instead
                  of stopping at every cell edge. */}
              <div className="mt-md relative">
                <ul className="gap-md grid grid-cols-2">
                  {consultationBenefits.map(
                    ({ id, icon: Icon, title, subtitle }) => (
                      <li key={id} className="gap-xs flex items-center">
                        <Icon
                          aria-hidden="true"
                          size={28}
                          strokeWidth={2}
                          className="shrink-0 text-white"
                        />

                        <div>
                          <p className="text-body-02 leading-[2rem] font-bold tracking-[-0.02em] text-white">
                            {title}
                          </p>

                          <p className="text-body-03 tracking-[-0.02em] text-white">
                            {subtitle}
                          </p>
                        </div>
                      </li>
                    ),
                  )}
                </ul>

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-[17rem] w-px bg-white/30"
                />

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/30"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Consultation;
