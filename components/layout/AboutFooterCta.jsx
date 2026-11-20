import Image from "next/image";
import Link from "next/link";
import BookCall from "../sections/BookCall";
import ParticleLogo from "../ui/ParticleLogo";

const AboutFooterCta = () => {
  return (
    <BookCall
      id="about-footer-cta"
      className="relative z-10 pt-[120px] pb-[150px]"
      label={null}
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
      ctaLabel="Book a 15-min call"
      ctaHref="/contact"
      aside={
        <>
          <ParticleLogo
            svgSrc="/images/about/hand-particle.svg"
            className="aspect-square w-full"
          />

          <Link
            href="/contact"
            className="gradient-border absolute top-0 left-0 z-10 flex w-[220px] flex-col items-start rounded-[15px] bg-white/15 p-[20px] backdrop-blur-[20px] [--gradient-border-image:linear-gradient(148.35deg,rgba(255,255,255,0)_11.97%,rgba(255,255,255,0.5)_39.82%,rgba(255,255,255,0)_59.85%)] [--gradient-border-width:1.24px]"
          >
            <Image
              src="/images/home/hassan-avatar-img.png"
              alt="Hassan, founder of Creative Pixels"
              width={384}
              height={384}
              className="size-[45px] shrink-0 rounded-full object-cover"
            />

            <span className="mt-[20px] text-[20px] leading-[24px] font-bold tracking-[-0.04em] text-white">
              Book a 15-minute call with Hassan.
            </span>

            <span className="mt-[10px] text-[12px] leading-[16px] tracking-[-0.02em] text-white/80">
              No hard sell, just a chance to see if we&apos;re a fit.
            </span>
          </Link>
        </>
      }
    />
  );
};

export default AboutFooterCta;
