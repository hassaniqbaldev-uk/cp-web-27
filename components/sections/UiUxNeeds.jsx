import { uiUxNeeds } from "@/config/common";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const UiUxNeeds = () => {
  return (
    <>
      <Section id="ui-ux-needs" className="py-[120px]">
        <Container>
          <SectionHeading
            className="text-center"
            title={
              <>
                UX audit, redesign or product UX: <br />
                <span className="text-black/50">what do you need?</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          <ul className="mt-[85px] flex justify-between">
            {uiUxNeeds.map(({ id, title, description, cta }, index) => (
              <li
                key={id}
                className="bg-grey/60 flex size-[380px] shrink-0 flex-col items-center rounded-full text-center"
              >
                <span className="border-grey/60 mt-[-24px] flex size-[102px] shrink-0 items-center justify-center rounded-full border-[3px] bg-white text-[45px] leading-[50px] font-bold tracking-[-0.06em] text-black">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-[36px] text-[25px] leading-[30px] font-bold tracking-[-0.06em] text-black">
                  {title}
                </h3>

                <p className="text-text-body mt-[15px] min-h-[66px] max-w-[255px] text-[16px] leading-[22px] tracking-[-0.02em]">
                  {description}
                </p>

                <div className="flex">
                  <Button
                    href={cta.href}
                    className="mt-[25px] rounded-full bg-black px-[30px] py-[14px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase"
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
