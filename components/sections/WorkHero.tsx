import { clientLogos } from "@/config/common";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import DragMarquee from "../ui/DragMarquee";
import ParticleLogo from "../ui/ParticleLogo";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";

const WorkHero = () => {
  return (
    <>
      <Section
        id="work-hero"
        className="max-425:px-[3rem] max-425:pt-[13rem] relative overflow-hidden bg-black pt-[16rem] pb-[4rem]"
      >
        <Starfield className="max-425:top-auto max-425:right-auto max-425:bottom-[-5rem] max-425:left-1/2 max-425:h-[20rem] max-425:w-[77rem] max-425:-translate-x-1/2 absolute top-0 right-[-5rem] z-0 h-full w-[26rem] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

        <Container className="gap-lg max-425:gap-md max-425:flex-col relative z-10 flex items-center justify-between">
          <div className="max-425:w-full max-425:items-center max-425:text-center flex w-[52.3rem] flex-col items-start">
            <SectionHeading
              as="h1"
              label="Our work"
              title={
                <>
                  Work with a{" "}
                  <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                    job to do.
                  </span>
                </>
              }
              // TODO: placeholder, taken from the website review page.
              subtitle="Send us your URL. We will review the page experience, conversion friction and search foundations, then give you a short list of the things we would prioritise first."
              labelClassName="text-body-01 max-425:text-[1.4rem] font-medium tracking-[-0.02em] text-white uppercase"
              titleClassName="text-heading-02 max-425:mx-auto max-425:max-w-[29rem] max-425:text-[4.5rem] max-425:leading-[4.5rem] mt-xs leading-[8rem] font-extrabold tracking-[-0.07em] text-white"
              subtitleClassName="text-body-02 max-425:text-[1.6rem] max-425:leading-[2.4rem] text-grey mt-sm leading-[2.8rem] tracking-[-0.02em]"
            />

            <Button
              href="/contact"
              className="text-body-03 max-425:text-[1.4rem] max-425:w-full max-425:mt-md px-sm py-xs mt-lg rounded-full bg-white font-extrabold tracking-[-0.02em] text-black uppercase"
            >
              Lets talk about your project
            </Button>
          </div>

          <div className="max-425:w-[26rem] w-[45rem] shrink-0">
            <ParticleLogo
              svgSrc="/images/about/hand-particle.svg"
              label="Pointing hand made of drifting particles"
              className="aspect-square w-full"
            />
          </div>
        </Container>

        {/* Clips the track, which is two copies wide. */}
        <div className="mt-xl max-425:mt-lg max-425:-mx-[3rem] relative z-10 overflow-hidden">
          <DragMarquee query={null} pauseOnHover>
            {/* A list, so the logos announce as a set. The second pass is the
                copy the loop needs: hidden from assistive tech, so no client
                is announced twice. */}
            <ul className="gap-sm flex w-max items-center">
              {[false, true].map((isCopy) =>
                clientLogos.map(
                  ({ id, src, alt, href, width, height, className }) => (
                    <li
                      key={isCopy ? `${id}-copy` : id}
                      {...(isCopy && { "aria-hidden": true })}
                      className="shrink-0"
                    >
                      {/* The copy is out of the tab order as well as hidden,
                          so the row offers seven links rather than fourteen. */}
                      <Link
                        href={href}
                        tabIndex={isCopy ? -1 : undefined}
                        className="px-xl max-425:px-md max-425:h-[7rem] flex h-[9.5rem] items-center justify-center rounded-xl bg-[#2E2E2E]"
                      >
                        <Image
                          src={src}
                          alt={isCopy ? "" : alt}
                          width={width}
                          height={height}
                          className={className}
                        />
                      </Link>
                    </li>
                  ),
                ),
              )}
            </ul>
          </DragMarquee>

          {/* The track runs to the viewport's edges, so it fades out either
              side rather than being cut off. pointer-events-none keeps them
              from swallowing a drag on the logos underneath. */}
          <span
            aria-hidden="true"
            className="max-425:w-[6rem] pointer-events-none absolute inset-y-0 left-0 z-10 w-[12rem] bg-linear-to-r from-black to-transparent"
          />

          <span
            aria-hidden="true"
            className="max-425:w-[6rem] pointer-events-none absolute inset-y-0 right-0 z-10 w-[12rem] bg-linear-to-l from-black to-transparent"
          />
        </div>
      </Section>
    </>
  );
};

export default WorkHero;
