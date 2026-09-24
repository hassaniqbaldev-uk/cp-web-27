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
        className="py-3xl max-425:px-[3rem] max-425:py-xl relative overflow-hidden bg-[radial-gradient(117.98%_100%_at_76.32%_0%,rgba(0,0,0,0.6)_0%,#000000_45%)]"
      >
        {/* The mask curves the field off at its edges, so it reads as a soft
            cloud in the corner rather than a rectangle of stars. */}
        <div className="absolute top-0 left-1/2 h-full w-full max-w-[144rem] -translate-x-1/2">
          <Starfield className="max-425:right-auto max-425:left-1/2 max-425:-translate-x-1/2 absolute right-0 bottom-[-5rem] z-0 h-[20rem] w-[77rem] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />
        </div>

        <Container className="relative z-10">
          <div className="gap-lg max-425:flex-col max-425:items-center max-425:text-center flex items-center justify-between">
            <div className="max-425:w-full max-425:items-center flex w-[64rem] flex-col items-start">
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
                labelClassName="text-body-01 max-425:text-[1.4rem] font-medium tracking-[-0.02em] text-white uppercase"
                titleClassName="text-heading-02 max-425:text-[4.5rem] max-425:leading-[4.5rem] max-425:mb-sm mt-xs mb-md leading-[8rem] font-extrabold tracking-[-0.07em] text-white"
                subtitleClassName="text-body-02 max-425:text-[1.6rem] max-425:leading-[2.4rem] text-white max-w-[38rem] leading-[2.8rem] tracking-[-0.02em]"
              />

              <Button
                href="/contact"
                className="text-body-03 max-425:text-[1.4rem] max-425:w-full max-425:mt-md px-sm py-xs mt-lg rounded-xl bg-white font-extrabold tracking-[-0.02em] text-black uppercase"
              >
                Request a growth review
              </Button>
            </div>

            <div className="gradient-border p-lg max-425:w-full max-425:p-md w-[45rem] rounded-md bg-white/20 backdrop-blur-[10px] [--gradient-border-image:linear-gradient(140.55deg,rgba(255,255,255,0)_7.24%,rgba(255,255,255,0.6)_47.59%,rgba(255,255,255,0)_76.61%)] [--gradient-border-width:1.24px]">
              <div className="gap-sm max-425:text-left flex items-center">
                {/* Decorative: the name is already in the text beside it. */}
                <Image
                  src="/images/home/hassan-avatar-img.png"
                  alt=""
                  aria-hidden="true"
                  width={96}
                  height={96}
                  className="max-425:size-[6.5rem] size-[9.6rem] shrink-0 rounded-full object-cover"
                />

                <div>
                  <p className="text-subheading-02 max-425:text-[2.2rem] max-425:leading-[2.6rem] leading-[3.5rem] font-bold tracking-[-0.07em] text-white">
                    15 Min Call
                  </p>

                  <p className="text-body-02 max-425:text-[1.4rem] tracking-[-0.02em] text-white">
                    with Hassan
                  </p>

                  <p className="mt-xs gap-xs flex items-center">
                    <span
                      aria-hidden="true"
                      className="size-[1.2rem] shrink-0 animate-pulse rounded-full bg-[#6FDC8C] motion-reduce:animate-none"
                    />

                    <span className="text-body-03 max-425:text-[1.2rem] tracking-[-0.02em] text-white">
                      Available this week
                    </span>
                  </p>
                </div>
              </div>

              <Button
                href="/contact"
                className="text-body-03 max-425:text-[1.4rem] py-xs mt-md w-full rounded-xl bg-white font-extrabold tracking-[-0.02em] text-black uppercase"
              >
                Book a call
              </Button>

              {/* The rules are drawn over the grid rather than as borders on
                  the items, so each one runs unbroken across the gaps instead
                  of stopping at every cell edge. */}
              <div className="mt-md relative">
                <ul className="gap-md max-425:gap-sm max-425:gap-y-md grid grid-cols-2">
                  {consultationBenefits.map(
                    ({ id, icon: Icon, title, subtitle }) => (
                      <li
                        key={id}
                        className="gap-xs max-425:text-left flex items-center"
                      >
                        <Icon
                          aria-hidden="true"
                          size={28}
                          strokeWidth={2}
                          className="max-425:size-[2rem] shrink-0 text-white"
                        />

                        <div>
                          <p className="text-body-02 max-425:text-[1.3rem] leading-[2rem] font-bold tracking-[-0.02em] text-white">
                            {title}
                          </p>

                          <p className="text-body-03 max-425:text-[1.2rem] tracking-[-0.02em] text-white">
                            {subtitle}
                          </p>
                        </div>
                      </li>
                    ),
                  )}
                </ul>

                <span
                  aria-hidden="true"
                  className="max-425:left-1/2 max-425:-translate-x-1/2 pointer-events-none absolute inset-y-0 left-[17rem] w-px bg-white/30"
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
