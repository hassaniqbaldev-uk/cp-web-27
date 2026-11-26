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
      className="relative z-10 pt-[120px] pb-[150px] max-sm:pt-[80px] max-sm:pb-[60px]"
    >
      <Container className="max-sm:px-[20px]">
        <div className="flex items-center gap-[45px] max-sm:flex-col max-sm:gap-[40px]">
          <div className="flex w-[453px] flex-col items-start max-sm:w-full max-sm:items-center max-sm:text-center">
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
              titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-white max-sm:text-[36px] max-sm:leading-[38px]"
              subtitleClassName="text-[22px] text-grey mt-[20px] leading-[28px] tracking-[-0.02em] max-sm:mt-[16px] max-sm:text-[17px] max-sm:leading-[25px]"
            />

            <div className="flex">
              <Button
                href="/contact"
                className="mt-[45px] rounded-full bg-white px-[20px] py-[10px] text-[16px] font-extrabold tracking-[-0.02em] text-black uppercase max-sm:mt-[30px]"
              >
                Book a 15-min call
              </Button>
            </div>
          </div>

          <div className="relative w-[680px] max-sm:w-full">
            <ParticleLogo
              svgSrc="/images/about/hand-particle.svg"
              className="aspect-square w-full"
            />

            <Link
              href="/contact"
              className="gradient-border absolute top-0 left-[45px] z-10 flex w-[211px] flex-col items-start rounded-[15px] bg-white/15 p-[30px] backdrop-blur-[20px] [--gradient-border-image:linear-gradient(148.35deg,rgba(255,255,255,0)_11.97%,rgba(255,255,255,0.5)_39.82%,rgba(255,255,255,0)_59.85%)] [--gradient-border-width:1.24px] max-sm:hidden"
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
