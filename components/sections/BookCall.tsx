import Button from "../ui/Button";
import { Container } from "../ui/Container";
import ParticleLogo from "../ui/ParticleLogo";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const HEADSET_ARTWORK = "/images/common/headset-particle.svg";

const defaultTitle = (
  <>
    Book a free <br />
    <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
      15 minute call
    </span>{" "}
    <br />
    no hard sell.
  </>
);

type BookCallProps = {
  label?: string;
  title?: React.ReactNode;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  logoSvg?: string;
  logoSvgSrc?: string;
  logoLabel?: string;
  aside?: React.ReactNode;
  id?: string;
  className?: string;
};

const BookCall = ({
  label = "Let's work together",
  title = defaultTitle,
  subtitle = "just a chance to see if working together makes sense.",
  ctaLabel = "Get free consultation",
  ctaHref = "/contact",
  logoSvg,
  logoSvgSrc = HEADSET_ARTWORK,
  logoLabel = "Headset made of drifting particles",
  aside,
  id = "book-call",
  className = "py-xl max-425:px-[3rem] max-425:overflow-hidden bg-black",
}: BookCallProps) => {
  return (
    <>
      <Section id={id} className={className}>
        <Container>
          <div className="gap-lg max-425:grid-cols-1 grid grid-cols-2 items-center">
            <div className="max-425:items-center flex flex-col items-start">
              <SectionHeading
                label={label}
                title={title}
                subtitle={subtitle}
                labelClassName="text-body-01 max-425:text-center max-425:text-[1.4rem] font-medium tracking-[-0.02em] text-white uppercase"
                titleClassName="text-heading-02 max-425:text-center max-425:mx-auto max-425:text-[4.5rem] max-425:leading-[4.5rem] max-425:max-w-[30rem] mt-xs leading-[8rem] font-extrabold tracking-[-0.07em] text-white"
                subtitleClassName="text-body-02 max-425:text-body-03 max-425:text-center text-grey mt-sm max-w-[45rem] leading-[2.8rem] tracking-[-0.02em]"
              />

              <div className="flex">
                <Button
                  href={ctaHref}
                  className="text-body-03 max-425:text-body-04 px-sm py-xs mt-lg rounded-full bg-white font-extrabold tracking-[-0.02em] text-black uppercase"
                >
                  {ctaLabel}
                </Button>
              </div>
            </div>

            <div className="relative w-full">
              {aside}

              {!aside && (
                <ParticleLogo
                  svg={logoSvg}
                  svgSrc={logoSvg ? undefined : logoSvgSrc}
                  label={logoLabel}
                  className="aspect-square w-full"
                />
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default BookCall;
