import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";

const WebflowReview = () => {
  return (
    <>
      <Section id="webflow-review" className="py-[120px]">
        <Container>
          <div className="relative flex min-h-[430px] items-center justify-between overflow-hidden rounded-[30px] bg-black pr-[69px] pl-[60px]">
            <Starfield className="absolute top-1/2 right-[-110px] z-0 h-[480px] w-[260px] -translate-y-1/2 mask-[radial-gradient(ellipse_at_center,#000_35%,transparent_75%)]" />

            <div className="relative z-10 flex flex-col items-start">
              <SectionHeading
                title={
                  <>
                    Is Webflow right for <br />
                    your site?
                  </>
                }
                titleClassName="text-[45px] leading-[50px] font-extrabold tracking-[-0.06em] whitespace-nowrap text-white"
                subtitle={
                  <>
                    Send us your current website and tell us <br />
                    who manages it. We’ll let you know if <br />
                    Webflow is the right fit.
                  </>
                }
                subtitleClassName="mt-[20px] text-[22px] leading-[33px] tracking-[-0.02em] whitespace-nowrap text-white"
              />

              <div className="flex">
                <Button
                  href="/website-review"
                  className="mt-[40px] rounded-full bg-white px-[30px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase"
                >
                  Get a free website review
                </Button>
              </div>
            </div>

            <Image
              src="/images/services/browser-webflow-review.png"
              alt="Webflow site in a browser with a website check beside it"
              width={607}
              height={327}
              className="relative z-10 h-auto w-[607px] shrink-0"
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default WebflowReview;
