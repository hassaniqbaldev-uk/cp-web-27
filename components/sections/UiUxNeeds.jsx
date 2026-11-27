import { uiUxNeeds } from "@/config/common";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const UiUxNeeds = () => {
  return (
    <>
      <Section id="ui-ux-needs" className="py-[120px] max-sm:py-[80px]">
        <Container className="max-sm:px-[20px]">
          <SectionHeading
            className="text-center"
            title={
              <>
                UX audit, redesign or product UX: <br />
                <span className="text-black/50">what do you need?</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[36px] max-sm:leading-[38px]"
          />

          <ul className="mt-[85px] flex justify-between max-sm:mt-[50px] max-sm:flex-col max-sm:items-center max-sm:gap-[45px]">
            {uiUxNeeds.map(({ id, title, description, cta }, index) => (
              <li
                key={id}
                className="bg-grey/60 flex size-[380px] shrink-0 flex-col items-center rounded-full text-center max-sm:size-[320px]"
              >
                <span className="border-grey/60 mt-[-24px] flex size-[102px] shrink-0 items-center justify-center rounded-full border-[3px] bg-white text-[45px] leading-[50px] font-bold tracking-[-0.06em] text-black max-sm:mt-[-20px] max-sm:size-[80px] max-sm:text-[36px] max-sm:leading-[40px]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-[36px] text-[25px] leading-[30px] font-bold tracking-[-0.06em] text-black max-sm:mt-[26px] max-sm:text-[22px] max-sm:leading-[26px]">
                  {title}
                </h3>

                <p className="text-text-body mt-[15px] min-h-[66px] max-w-[255px] text-[16px] leading-[22px] tracking-[-0.02em] max-sm:mt-[10px] max-sm:min-h-[63px] max-sm:max-w-[230px] max-sm:text-[15px] max-sm:leading-[21px]">
                  {description}
                </p>

                <div className="flex">
                  <Button
                    href={cta.href}
                    className="mt-[25px] rounded-full bg-black px-[30px] py-[14px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase max-sm:mt-[18px] max-sm:px-[22px] max-sm:py-[11px] max-sm:text-[15px]"
                  >
                    {cta.label}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default UiUxNeeds;
