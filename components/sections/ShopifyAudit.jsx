import AuditForm from "../ui/AuditForm";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const ShopifyAudit = () => {
  return (
    <>
      <Section id="shopify-audit" className="pt-[120px]">
        <Container>
          <div className="flex items-start justify-between rounded-[20px] bg-[#0A0616] px-[55px] pt-[64px] pb-[55px]">
            <SectionHeading
              label="Free website audit"
              labelClassName="text-[22px] leading-[28px] tracking-[-0.02em] text-white uppercase"
              title={
                <>
                  Not sure what to fix first? <br />
                  <span className="text-blue">Send a URL.</span>
                </>
              }
              titleClassName="mt-[10px] text-[45px] leading-[50px] font-extrabold tracking-[-0.06em] text-white"
              subtitle={
                <>
                  A senior person records a short review of what <br />
                  we would change first. No call, no finished brief.
                </>
              }
              subtitleClassName="mt-[20px] text-[22px] leading-[33px] tracking-[-0.02em] text-white"
            />

            <div className="w-[424px] shrink-0">
              <AuditForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ShopifyAudit;
