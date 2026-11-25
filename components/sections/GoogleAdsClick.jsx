import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const GoogleAdsClick = () => {
  return (
    <>
      <Section id="google-ads-click" className="pb-[120px]">
        <Container>
          <div className="flex min-h-[447px] items-center justify-between rounded-[20px] bg-[linear-gradient(90deg,var(--color-blue)_36%,#BFD5FF_70%)] pr-[107px] pl-[60px]">
            <div className="flex flex-col items-start">
              <SectionHeading
                title="The click is only half the job."
                titleClassName="text-[45px] leading-[50px] font-extrabold tracking-[-0.06em] whitespace-nowrap text-white"
                subtitle="A well-managed account still loses money if the ad sends people to a homepage built for something else. We write the ad and the landing page as one thing, so the page says what the search asked for. Then we track what happens next: forms, calls, bookings and sales."
                subtitleClassName="mt-[20px] max-w-[575px] text-[22px] leading-[33px] tracking-[-0.02em] text-white"
              />

              <div className="flex">
                <Button
                  href="/contact"
                  className="mt-[40px] rounded-full bg-white px-[47px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase"
                >
                  Talk through your store
                </Button>
              </div>
            </div>

            {/* Pokes out above the panel; the shadow sits behind the logo's feet. */}
            <div className="mt-[-15px] grid w-[400px] shrink-0 self-start">
              <span className="col-start-1 row-start-1 mb-[-5px] ml-[40px] h-[45px] w-[400px] self-end rounded-[50%] bg-black/20 blur-[22px]" />

              <Image
                src="/images/services/ads-logo-google-ads-click.png"
                alt="Google Ads logo"
                width={400}
                height={396}
                className="relative col-start-1 row-start-1 h-auto w-[400px]"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default GoogleAdsClick;
