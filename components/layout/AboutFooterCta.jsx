import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import ParticleLogo from "../ui/ParticleLogo";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const AboutFooterCta = () => {
  return (
    <Section
      id="about-footer-cta"
      className="relative z-10 pt-[120px] pb-[150px]"
    >
      <Container>
        <div className="flex items-center gap-[45px]">
          <div className="flex w-[453px] flex-col items-start">
            <SectionHeading
              title={
                <>
                  <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                    Want to talk
                  </span>
                  <br />
                  to the people who&apos;d do the work?
                </>
              }
              subtitle="Scoping, payments, reviews, launch and what happens after. Written down, so there are no surprises."
              titleClassName="text-[75px] leading-[75px] font-extrabold tracking-[-0.06em] text-white"
              subtitleClassName="text-[22px] text-grey mt-[20px] leading-[28px] tracking-[-0.02em]"
            />

            <div className="flex">
              <Button
                href="/contact"
                className="mt-[45px] rounded-full bg-white px-[20px] py-[10px] text-[16px] font-extrabold tracking-[-0.02em] text-black uppercase"
              >
                Book a 15-min call
              </Button>
            </div>
          </div>

          <div className="relative w-[680px]">
            <ParticleLogo
              svgSrc="/images/about/hand-particle.svg"
              className="aspect-square w-full"
            />

            <Link
              href="/contact"
              className="gradient-border absolute top-0 left-[45px] z-10 flex w-[211px] flex-col items-start rounded-[15px] bg-white/15 p-[30px] backdrop-blur-[20px] [--gradient-border-image:linear-gradient(148.35deg,rgba(255,255,255,0)_11.97%,rgba(255,255,255,0.5)_39.82%,rgba(255,255,255,0)_59.85%)] [--gradient-border-width:1.24px]"
            >
              <Image
                src="/images/home/hassan-avatar-img.png"
                alt="Hassan, founder of Creative Pixels"
                width={57}
                height={57}
                className="size-[57px] shrink-0 rounded-full object-cover"
              />

              <span className="mt-[20px] text-[20px] leading-[24px] font-bold tracking-[-0.07em] text-white">
                Book a 15-minute call with Hassan.
              </span>

              <span className="mt-[8px] text-[12px] leading-[16px] tracking-[-0.02em] text-white/80">
                No hard sell, just a chance to see if we&apos;re a fit.
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutFooterCta;
