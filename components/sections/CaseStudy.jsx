import { caseStudyMetrics, caseStudyStats } from "@/config/common";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

// Home page Ivy & Duke case study. Other pages can swap the background, the
// image on the right and the stats (icon: an image path or an icon component).
const CaseStudy = ({
  className = "relative overflow-hidden bg-black pt-[80px] pb-[120px] max-sm:pt-[60px] max-sm:pb-[80px]",
  background = (
    <Image
      src="/images/home/gradient-bg-casestudy.png"
      alt=""
      fill
      priority
      className="pointer-events-none absolute top-0 left-0 z-0 h-[587px] w-full object-cover"
    />
  ),
  stats = caseStudyStats,
  media = (
    <Image
      src="/images/home/ivy-duke-casestudy-img.png"
      alt="Ivy & Duke website on a laptop"
      width={585}
      height={451}
      className="h-auto w-[585px] shrink-0 max-sm:w-full"
    />
  ),
}) => {
  return (
    <Section className={className}>
      {background}

      <Container className="relative z-10 max-sm:px-[20px]">
        <div className="flex items-center justify-between gap-[17px] max-sm:flex-col max-sm:items-center max-sm:gap-[40px]">
          <div className="flex w-[600px] flex-col items-start max-sm:w-full max-sm:items-center max-sm:text-center">
            <SectionHeading
              title={
                <>
                  How Ivy & Duke grew revenue{" "}
                  <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                    15%
                  </span>{" "}
                  in a week
                </>
              }
              titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-white max-sm:text-[32px] max-sm:leading-[34px]"
              subtitle="A family-run maker of handmade dog beds. 4 in 5 visitors shopped on a phone, but phones converted at about a third of the desktop rate."
              subtitleClassName="mt-[24px] max-w-[560px] text-[22px] leading-[28px] font-normal tracking-[-0.02em] text-white max-sm:mt-[16px] max-sm:text-[18px] max-sm:leading-[26px]"
            />

            <div className="mt-[40px] flex items-center gap-[17px] max-sm:mt-[30px] max-sm:w-full max-sm:flex-col max-sm:gap-[12px]">
              <Button
                href="/work/ivy-duke"
                className="rounded-[60px] bg-white px-[20px] py-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase max-sm:w-full max-sm:py-[12px] max-sm:text-[16px]"
              >
                Read the full case study
              </Button>

              <Button
                href="/contact"
                className="hover:border-dark-pink rounded-[60px] border border-white px-[20px] py-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase max-sm:w-full max-sm:py-[12px] max-sm:text-[16px]"
              >
                Get a review like this
              </Button>
            </div>
          </div>

          {media}
        </div>

        <ul className="my-[50px] flex items-stretch max-sm:my-[40px] max-sm:flex-col">
          {caseStudyMetrics.map(
            (
              { id, label, labelClassName, value, valueClassName, description },
              index,
            ) => (
              <li key={id} className="flex flex-1 items-center max-sm:flex-col">
                <div className="bg-text-body flex h-full w-full flex-col rounded-[20px] p-[30px] max-sm:p-[20px]">
                  <div className="flex items-center justify-between gap-[20px]">
                    <span
                      className={`rounded-[60px] px-[20px] py-[8px] text-[16px] font-bold tracking-[-0.02em] text-white uppercase max-sm:px-[16px] max-sm:text-[14px] ${labelClassName}`}
                    >
                      {label}
                    </span>

                    <span
                      className={`text-[45px] font-bold tracking-[-0.07em] max-sm:text-[36px] ${valueClassName}`}
                    >
                      {value}
                    </span>
                  </div>

                  <p className="mt-[30px] text-[16px] leading-[22px] tracking-[-0.02em] text-white max-sm:mt-[20px]">
                    {description}
                  </p>
                </div>

                {index < caseStudyMetrics.length - 1 && (
                  <span className="bg-text-body relative left-[-1px] flex h-[40px] w-[25px] shrink-0 items-center [clip-path:polygon(0_0,100%_50%,0_100%)] max-sm:left-0 max-sm:-my-[8px] max-sm:rotate-90">
                    <ChevronRight
                      size={14}
                      strokeWidth={3}
                      className="text-white"
                    />
                  </span>
                )}
              </li>
            ),
          )}
        </ul>

        <ul className="flex items-center justify-between gap-[40px] max-sm:flex-col max-sm:items-start max-sm:gap-[24px]">
          {stats.map(
            (
              {
                id,
                icon: Icon,
                iconAlt,
                width,
                height,
                iconBgClassName,
                iconClassName,
                value,
                description,
              },
              index,
            ) => (
              <li key={id} className="flex flex-1 items-center gap-[40px]">
                <div className="flex items-center gap-[20px]">
                  <span
                    className={`flex size-[60px] shrink-0 items-center justify-center rounded-full ${iconBgClassName}`}
                  >
                    {typeof Icon === "string" ? (
                      <Image
                        src={Icon}
                        alt={iconAlt}
                        width={width}
                        height={height}
                        className="shrink-0 object-contain"
                      />
                    ) : (
                      <Icon size={30} className={`shrink-0 ${iconClassName}`} />
                    )}
                  </span>

                  <div className="flex flex-col">
                    <span className="text-[30px] font-bold tracking-[-0.07em] text-white max-sm:text-[26px]">
                      {value}
                    </span>

                    <p className="text-[16px] tracking-[-0.02em] text-white">
                      {description}
                    </p>
                  </div>
                </div>

                {index < stats.length - 1 && (
                  <span className="ml-auto h-[60px] w-px shrink-0 bg-white/30 max-sm:hidden" />
                )}
              </li>
            ),
          )}
        </ul>
      </Container>
    </Section>
  );
};

export default CaseStudy;
