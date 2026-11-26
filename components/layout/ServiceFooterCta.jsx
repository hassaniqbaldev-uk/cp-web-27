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
  services,
}) => {
  return (
    <Section
      id="service-footer-cta"
      className="relative z-10 pt-[120px] pb-[150px] max-sm:pt-[80px] max-sm:pb-[100px]"
    >
      <Container className="max-sm:px-[20px]">
        <div className="flex items-center justify-between gap-[45px] max-sm:flex-col max-sm:items-stretch max-sm:gap-[35px]">
          <div className="flex w-[480px] flex-col items-start max-sm:w-full">
            <SectionHeading
              className="max-sm:text-center"
              title={title}
              subtitle={subtitle}
              titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-white max-sm:text-[36px] max-sm:leading-[38px]"
              subtitleClassName="text-[18px] text-grey mt-[20px] leading-[28px] tracking-[-0.02em] max-sm:mt-[16px] max-sm:text-[16px] max-sm:leading-[24px]"
            />

            <p className="border-dark-pink mt-[30px] border-l-2 pl-[20px] text-[18px] leading-[26px] font-bold tracking-[-0.02em] text-white max-sm:mt-[24px] max-sm:pl-[16px] max-sm:text-[16px] max-sm:leading-[24px]">
              {quote}
            </p>
          </div>

          <div className="w-[600px] rounded-[20px] bg-white p-[45px] max-sm:w-full max-sm:p-[20px]">
            <ServiceContactForm submitLabel={submitLabel} services={services} />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ServiceFooterCta;
