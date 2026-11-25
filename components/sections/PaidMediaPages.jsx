import { paidMediaPages } from "@/config/common";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";

// From the ad card's right edge to just before each tile.
const lines = [
  "M0 106H33Q45 106 45 94V45Q45 33 57 33H129",
  "M0 125H43Q55 125 55 113Q55 102 67 102H129",
  "M0 157H43Q55 157 55 168Q55 179 67 179H129",
  "M0 179H33Q45 179 45 191V239Q45 251 57 251H129",
];

const lineEnds = [33, 102, 179, 251];

const PaidMediaPages = () => {
  return (
    <>
      <Section
        id="paid-media-pages"
        className="relative overflow-hidden bg-[#0A0616] bg-[radial-gradient(60%_45%_at_50%_100%,#77757A_0%,rgba(119,117,122,0)_100%)] pt-[120px] pb-[130px]"
      >
        <Starfield className="absolute bottom-[-60px] left-1/2 z-0 h-[320px] w-[1170px] -translate-x-1/2 mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

        <Container className="relative z-10">
          <SectionHeading
            className="text-center"
            title={
              <>
                <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                  Landing pages for
                </span>{" "}
                <br />
                search and for social.
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-white"
          />

          <ul className="mt-[75px] grid grid-cols-2 gap-[30px]">
            {paidMediaPages.map(
              ({
                id,
                tag,
                tagClassName,
                title,
                description,
                cta,
                ad,
                features,
              }) => {
                const { icon: AdIcon } = ad;

                return (
                  <li
                    key={id}
                    className="flex min-h-[730px] flex-col items-start rounded-[20px] bg-white p-[40px]"
                  >
                    <span
                      className={`rounded-full px-[20px] py-[9px] text-[18px] leading-[25px] font-semibold tracking-[-0.02em] uppercase ${tagClassName}`}
                    >
                      {tag}
                    </span>

                    <h3 className="mt-[27px] text-[35px] leading-[42px] font-bold tracking-[-0.06em] whitespace-pre-line text-black">
                      {title}
                    </h3>

                    <p className="text-text-body mt-[14px] text-[18px] leading-[23px] tracking-[-0.02em]">
                      {description}
                    </p>

                    <div className="mt-[35px] flex w-full">
                      <Button
                        href={cta.href}
                        className="w-full rounded-full bg-black px-[30px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase"
                      >
                        {cta.label}
                      </Button>
                    </div>

                    <div className="mt-auto flex w-full items-center pt-[40px]">
                      <div className="flex h-[185px] w-[157px] shrink-0 flex-col items-start rounded-[12px] bg-[#0A0616] p-[19px] text-white">
                        <AdIcon
                          size={28}
                          className={`shrink-0 ${ad.iconClassName ?? ""}`}
                        />

                        <span className="mt-[6px] text-[16px] leading-[20px] font-bold tracking-[-0.03em]">
                          {ad.title}
                        </span>

                        <span className="mt-[8px] text-[11px] leading-[16px] tracking-[-0.02em] whitespace-pre-line text-white/80">
                          {ad.text}
                        </span>

                        <span
                          className={`mt-auto rounded-full bg-white px-[9px] py-[2px] text-[11px] leading-[16px] ${ad.intentClassName}`}
                        >
                          {ad.intent}
                        </span>
                      </div>

                      <svg
                        viewBox="0 0 152 285"
                        aria-hidden="true"
                        fill="none"
                        className="h-[285px] w-[152px] shrink-0"
                      >
                        {lines.map((line) => (
                          <path
                            key={line}
                            d={line}
                            stroke="black"
                            strokeDasharray="4 4"
                          />
                        ))}

                        {lineEnds.map((y) => (
                          <circle key={y} cx="129" cy={y} r="3" fill="black" />
                        ))}
                      </svg>

                      <ul className="flex flex-1 flex-col gap-[7px]">
                        {features.map(
                          ({
                            id: featureId,
                            icon: Icon,
                            className,
                            name,
                            text,
                          }) => (
                            <li
                              key={featureId}
                              className="bg-grey/50 flex h-[66px] items-center gap-[19px] rounded-[10px] px-[20px]"
                            >
                              <Icon
                                size={27}
                                className={`shrink-0 ${className}`}
                              />

                              <span className="text-[14px] leading-[18px] tracking-[-0.02em] whitespace-nowrap text-black">
                                <span className="block font-bold whitespace-pre-line">
                                  {name}
                                </span>
                                {text}
                              </span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </li>
                );
              },
            )}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default PaidMediaPages;
