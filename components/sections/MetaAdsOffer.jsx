import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const MetaAdsOffer = () => {
  return (
    <>
      <Section id="meta-ads-offer" className="py-[120px]">
        <Container>
          <div className="flex h-[392px] items-center justify-between rounded-[20px] bg-[linear-gradient(90deg,var(--color-blue)_36%,#BFD5FF_70%)] pr-[77px] pl-[60px]">
            <SectionHeading
              title={
                <>
                  Social ads work when <br />
                  the offer is specific.
                </>
              }
              titleClassName="text-[45px] leading-[50px] font-extrabold tracking-[-0.06em] whitespace-nowrap text-white"
              subtitle="People on Facebook and Instagram were not looking for you. A generic “get in touch” does not survive that. A specific, low-effort offer does: a free review, a sample, a guide, a first lesson. We build the ad, the page and the follow-up around one offer, and we test creative before we test audiences."
              subtitleClassName="mt-[25px] max-w-[490px] text-[18px] leading-[28px] tracking-[-0.02em] text-white"
            />

            {/* Taller than the panel, so it pokes out above and below. */}
            <Image
              src="/images/services/phones-meta-ads-offer.png"
              alt="Example Instagram and Reels ads on two phones"
              width={453}
              height={451}
              className="h-auto w-[453px] shrink-0"
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default MetaAdsOffer;
