import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import ServiceContactForm from "../ui/ServiceContactForm";

// Shared footer CTA for service pages. Defaults are the Custom App copy; other
// pages pass their own.
const ServiceFooterCta = ({
  title = (
    <>
      Tell us what&apos;s stuck in{" "}
      <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
        spreadsheets.
      </span>
    </>
  ),
  subtitle = "Describe how it works today. We'll tell you if custom software is the right answer and what the smallest useful first phase looks like.",
  quote = "We manage bookings in a spreadsheet and copy them into Xero by hand",
  submitLabel,
}) => {
  return (
    <Section
      id="service-footer-cta"
      className="relative z-10 pt-[120px] pb-[150px]"
    >
      <Container>
        <div className="flex items-center justify-between gap-[45px]">
          <div className="flex w-[453px] flex-col items-start">
            <SectionHeading
              title={title}
              subtitle={subtitle}
              titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-white"
              subtitleClassName="text-[18px] text-grey mt-[20px] leading-[28px] tracking-[-0.02em]"
            />

            <p className="border-dark-pink mt-[30px] border-l-2 pl-[20px] text-[18px] leading-[26px] font-bold tracking-[-0.02em] text-white">
              {quote}
            </p>
          </div>

          <div className="w-[600px] rounded-[20px] bg-white p-[45px]">
            <ServiceContactForm submitLabel={submitLabel} />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ServiceFooterCta;
