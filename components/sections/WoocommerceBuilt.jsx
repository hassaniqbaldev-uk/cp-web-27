import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const WoocommerceBuilt = () => {
  return (
    <>
      <Section id="woocommerce-built" className="py-[120px]">
        <Container>
          <div className="flex min-h-[394px] items-center justify-between rounded-[30px] bg-[linear-gradient(90deg,#973EEF_25.92%,#F6ECFF_100%)] pr-[113px] pl-[80px]">
            <SectionHeading
              title={
                <>
                  Built around your <br />
                  products, not a template.
                </>
              }
              titleClassName="text-[45px] leading-[50px] font-extrabold tracking-[-0.06em] whitespace-nowrap text-white"
              subtitle="Most store themes assume every product has a price, a size and a colour. Real catalogues have made-to-measure pricing, add-ons, trade accounts and bundles. We start with your hardest product and build the store around it, so the easy ones take care of themselves."
              subtitleClassName="mt-[20px] max-w-[500px] text-[18px] leading-[23px] tracking-[-0.02em] text-white"
            />

            {/* Pokes out above the panel. */}
            <Image
              src="/images/services/bag-woocommerce-built.png"
              alt=""
              width={384}
              height={389}
              className="mt-[-25px] mb-[31px] h-auto w-[384px] shrink-0 self-start"
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default WoocommerceBuilt;
