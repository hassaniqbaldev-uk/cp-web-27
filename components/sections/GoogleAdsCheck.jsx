import { googleAdsChecks } from "@/config/common";
import { FcGoogle } from "react-icons/fc";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const GoogleAdsCheck = () => {
  return (
    <>
      <Section id="google-ads-check" className="pb-[120px]">
        <Container>
          <div className="bg-dark-pink flex min-h-[423px] items-center justify-between rounded-[30px] pr-[52px] pl-[60px]">
            <div className="flex flex-col items-start">
              <SectionHeading
                title={
                  <>
                    See where your ad <br />
                    budget goes.
                  </>
                }
                titleClassName="text-[45px] leading-[50px] font-extrabold tracking-[-0.06em] whitespace-nowrap text-white"
                subtitle={
                  <>
                    Share your ad account and landing <br />
                    page. We’ll break it down.
                  </>
                }
                subtitleClassName="mt-[20px] text-[22px] leading-[33px] tracking-[-0.02em] whitespace-nowrap text-white"
              />

              <div className="flex">
                <Button
                  href="/contact"
                  className="mt-[62px] rounded-full bg-white px-[30px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] whitespace-nowrap text-black uppercase [&:active]:bg-black! [&:hover]:bg-black!"
                >
                  Get a free ads review
                </Button>
              </div>
            </div>

            <div className="flex items-stretch">
              {/* Example search ad, decorative only. */}
              <div
                aria-hidden="true"
                className="flex h-[323px] w-[292px] flex-col overflow-hidden rounded-[20px] bg-white"
              >
                <div className="flex h-[31px] shrink-0 items-center gap-[7px] bg-[#E7E7E7] px-[17px]">
                  <span className="size-[11px] rounded-full bg-[#F83E3E]" />
                  <span className="size-[11px] rounded-full bg-[#FDBC14]" />
                  <span className="size-[11px] rounded-full bg-[#22C05B]" />
                </div>

                <div className="flex flex-1 flex-col gap-[11px] px-[14px] pt-[14px] pb-[16px]">
                  <div className="flex h-[37px] shrink-0 items-center gap-[13px] rounded-[12px] bg-[#F7F7F7] px-[11px] text-[14px] tracking-[-0.02em] text-black/60">
                    <FcGoogle size={21} className="shrink-0" />
                    plumber near me
                    <HiMagnifyingGlass size={17} className="ml-auto shrink-0" />
                  </div>

                  <div className="bg-grey/60 flex flex-1 flex-col items-start rounded-[17px] p-[20px]">
                    <span className="bg-orange rounded-full px-[10px] py-[2px] text-[11px] leading-[17px] text-white">
                      Ad
                    </span>

                    <span className="mt-[10px] text-[16px] leading-[20px] font-bold tracking-[-0.03em] whitespace-nowrap text-black">
                      Emergency Plumber Near You | Fixed Prices
                    </span>

                    <span className="text-text-body mt-[10px] text-[12px] leading-[18px] tracking-[-0.02em]">
                      Local, qualified plumbers. Clear prices before we start
                      and no hidden call-out fees. Book online in 60 seconds.
                    </span>
                  </div>
                </div>
              </div>

              <ul className="flex flex-col justify-between">
                {googleAdsChecks.map(
                  ({ id, icon: Icon, iconClassName, title }) => (
                    <li key={id} className="flex items-center">
                      <span className="w-[117px] border-t-2 border-dashed border-white" />

                      <span className="z-10 mr-[-5px] ml-[-5px] size-[10px] shrink-0 rounded-full bg-white" />

                      <div className="flex h-[72px] w-[211px] items-center gap-[13px] rounded-[15px] bg-white px-[14px]">
                        <span
                          className={`flex size-[44px] shrink-0 items-center justify-center rounded-full text-white ${iconClassName}`}
                        >
                          <Icon size={22} />
                        </span>

                        <span className="text-[16px] leading-[17px] font-medium tracking-[-0.02em] whitespace-pre-line text-black">
                          {title}
                        </span>
                      </div>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default GoogleAdsCheck;
