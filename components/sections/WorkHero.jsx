import { clientLogos } from "@/config/common";
import DragMarquee from "../ui/DragMarquee";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import ParticleLogo from "../ui/ParticleLogo";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";

const WorkHero = () => {
  return (
    <>
      <Section
        id="work-hero"
        className="relative overflow-hidden bg-black pt-[160px] pb-[40px]"
      >
        <Starfield className="absolute top-0 right-[-50px] z-0 h-full w-[260px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

        <Container className="relative z-10 flex items-center justify-between gap-[45px]">
          <div className="flex w-[523px] flex-col items-start">
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
              subtitle="Send us your URL. We will review the page experience, conversion friction and search foundations, then give you a short list of the things we would prioritise first."
              labelClassName="text-[22px] font-medium tracking-[-0.02em] text-white uppercase"
              titleClassName="text-[85px] mt-[10px] leading-[80px] font-extrabold tracking-[-0.07em] text-white"
              subtitleClassName="text-[18px] text-grey mt-[20px] leading-[28px] tracking-[-0.02em]"
            />

            <Button
              href="/contact"
              className="mt-[45px] rounded-full bg-white px-[20px] py-[10px] text-[16px] font-extrabold tracking-[-0.02em] text-black uppercase"
            >
              Lets talk about your project
            </Button>
          </div>

          <div className="w-[450px] shrink-0">
            <ParticleLogo
              svgSrc="/images/about/hand-particle.svg"
              className="aspect-square w-full"
            />
          </div>
        </Container>

        <div className="relative z-10 mt-[65px] overflow-hidden">
          <DragMarquee
            pauseOnHover
            trackClassName="gap-[20px] flex w-max items-center"
            slideClassName="shrink-0"
          >
            {clientLogos.map(
              ({ id, src, alt, href, width, height, className }) => (
                <Link
                  key={id}
                  href={href}
                  draggable={false}
                  className="flex h-[95px] items-center justify-center rounded-[60px] bg-[#2E2E2E] px-[65px]"
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    draggable={false}
                    className={className}
                  />
                </Link>
              ),
            )}
          </DragMarquee>

          <span className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[120px] bg-linear-to-r from-black to-transparent" />

          <span className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[120px] bg-linear-to-l from-black to-transparent" />
        </div>
      </Section>
    </>
  );
};

export default WorkHero;
