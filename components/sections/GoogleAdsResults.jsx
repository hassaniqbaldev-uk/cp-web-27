import { googleAdsResults } from "@/config/common";
import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const GoogleAdsResults = () => {
  return (
    <>
      <Section id="google-ads-results" className="overflow-hidden py-[120px]">
        <Container>
          <SectionHeading
            className="text-center"
            title={
              <>
                <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                  Google Ads
                </span>{" "}
                results
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
            subtitle="What you get every month: spend, enquiries, cost per enquiry, and what we’re changing next."
            subtitleClassName="text-text-body mt-[20px] text-[22px] leading-[28px] tracking-[-0.02em]"
          />

          {/* The shadows sit behind both cards so one never darkens the other. */}
          <ul className="isolate mt-[65px] grid grid-cols-2 gap-[30px]">
            {googleAdsResults.map(
              ({ id, image, imageAlt, title, description, stats }) => (
                <li
                  key={id}
                  className="relative flex flex-col rounded-[20px] bg-white p-[30px] pb-[50px] before:absolute before:inset-0 before:-z-10 before:rounded-[20px] before:shadow-[16px_16px_150px_0px_#00000017]"
                >
                  <div className="bg-orange/10 relative h-[387px] overflow-hidden rounded-[20px]">
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      sizes="525px"
                      className="object-cover"
                    />
                  </div>

                  <div className="px-[30px]">
                    <h3 className="mt-[32px] text-[35px] leading-[42px] font-bold tracking-[-0.06em] text-black">
                      {title}
                    </h3>

                    <p className="text-text-body mt-[8px] max-w-[445px] text-[22px] leading-[33px] tracking-[-0.02em]">
                      {description}
                    </p>

                    <ul className="mt-[40px] flex">
                      {stats.map(({ id: statId, icon: Icon, value, label }) => (
                        <li
                          key={statId}
                          className="flex flex-col items-start border-l border-black/20 px-[41px] first:border-l-0 first:pl-0 last:pr-0"
                        >
                          <span className="flex size-[45px] items-center justify-center rounded-full bg-[#1FAF6B]/15 text-[#1FAF6B]">
                            <Icon size={20} />
                          </span>

                          <span className="mt-[8px] text-[35px] leading-[42px] font-bold tracking-[-0.06em] whitespace-nowrap text-black">
                            {value}
                          </span>

                          <span className="text-text-body text-[18px] leading-[26px] tracking-[-0.02em]">
                            {label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ),
            )}
          </ul>

          <div className="mt-[70px] flex justify-center">
            <Button
              href="/work"
              className="rounded-full bg-black px-[58px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase"
            >
              View all results
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default GoogleAdsResults;
