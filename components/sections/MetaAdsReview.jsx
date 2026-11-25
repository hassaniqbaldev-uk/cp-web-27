import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";

const MetaAdsReview = () => {
  return (
    <>
      <Section id="meta-ads-review" className="py-[120px]">
        <Container>
          <div className="relative flex min-h-[439px] items-center justify-between overflow-hidden rounded-[20px] bg-[linear-gradient(90deg,#0A0616_25%,#00338F_85%)] pr-[80px] pl-[70px]">
            <Starfield className="absolute top-[-60px] right-[30px] z-0 h-[240px] w-[560px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

            <Starfield className="absolute right-[30px] bottom-[-60px] z-0 h-[240px] w-[560px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

            <div className="relative z-10 flex flex-col items-start">
              <SectionHeading
                title={
                  <>
                    Where are you losing the <br />
                    lead?
                  </>
                }
                titleClassName="text-[45px] leading-[50px] font-extrabold tracking-[-0.06em] whitespace-nowrap text-white"
                subtitle="Send us the ad, the landing page, and what happens after someone fills in the form. We’ll identify which part of the journey is costing you leads."
                subtitleClassName="mt-[20px] max-w-[515px] text-[22px] leading-[33px] tracking-[-0.02em] text-white"
              />

              <div className="flex">
                <Button
                  href="/contact"
                  className="mt-[35px] rounded-full bg-white px-[30px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase"
                >
                  Get a free ads review
                </Button>
              </div>
            </div>

            <Image
              src="/images/services/target-meta-ads-review.png"
              alt="Target, rising bars and an upward arrow"
              width={454}
              height={309}
              className="relative z-10 mb-[20px] h-auto w-[454px] shrink-0"
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default MetaAdsReview;
