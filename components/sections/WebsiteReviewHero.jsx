import { reviewPoints } from "@/config/common";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";
import WebsiteReviewForm from "../ui/WebsiteReviewForm";

const WebsiteReviewHero = () => {
  return (
    <>
      <Section
        id="website-review-hero"
        className="relative overflow-hidden bg-black pt-[160px] pb-[100px]"
      >
        <Starfield className="absolute top-0 right-[-50px] z-0 h-full w-[260px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

        <Container className="relative z-10 flex items-start justify-between gap-[45px]">
          <div className="w-[523px]">
            <SectionHeading
              as="h1"
              label="Website review"
              title={
                <>
                  Want more enquiries?{" "}
                  <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                    Find out why.
                  </span>
                </>
              }
              subtitle="Send us your URL. We will review the page experience, conversion friction and search foundations, then give you a short list of the things we would prioritise first."
              labelClassName="text-[22px] font-medium tracking-[-0.02em] text-white uppercase"
              titleClassName="text-[85px] mt-[10px] leading-[80px] font-extrabold tracking-[-0.07em] text-white"
              subtitleClassName="text-[18px] text-grey mt-[20px] leading-[28px] tracking-[-0.02em]"
            />

            <div className="relative mt-[65px]">
              <ul className="grid grid-cols-2 gap-[30px]">
                {reviewPoints.map(
                  ({ id, title, subtitle, swatchClassName }) => (
                    <li key={id}>
                      <p className="flex items-center gap-[10px]">
                        <span
                          className={`size-[8px] shrink-0 ${swatchClassName}`}
                        />

                        <span className="text-[22px] font-bold tracking-[-0.02em] text-white">
                          {title}
                        </span>
                      </p>

                      <p className="text-grey mt-[10px] text-[14px] leading-[20px] tracking-[-0.02em]">
                        {subtitle}
                      </p>
                    </li>
                  ),
                )}
              </ul>

              <span className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/20" />

              <span className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/20" />
            </div>
          </div>

          <div className="w-[600px] shrink-0 rounded-[20px] bg-white p-[45px]">
            <WebsiteReviewForm />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default WebsiteReviewHero;
