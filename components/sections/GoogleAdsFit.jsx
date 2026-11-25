import { googleAdsFit } from "@/config/common";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const GoogleAdsFit = () => {
  return (
    <>
      <Section id="google-ads-fit" className="py-[120px]">
        <Container>
          <SectionHeading
            className="text-center"
            title="Is Google Ads right for you?"
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          {/* The number circles poke out above the cards. */}
          <ul className="mt-[92px] grid grid-cols-3 gap-[30px]">
            {googleAdsFit.map(({ id, title, description, cta }, index) => (
              <li
                key={id}
                className="bg-grey/60 flex aspect-square flex-col items-center rounded-full pb-[52px] text-center"
              >
                <span className="border-grey/60 mt-[-20px] flex size-[99px] shrink-0 items-center justify-center rounded-full border-2 bg-white text-[45px] leading-[45px] font-bold tracking-[-0.06em] text-black">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-[19px] text-[25px] leading-[30px] font-bold tracking-[-0.06em] text-black">
                  {title}
                </h3>

                <p className="text-text-body mt-[12px] max-w-[264px] text-[16px] leading-[21px] tracking-[-0.02em]">
                  {description}
                </p>

                <div className="mt-auto flex">
                  <Button
                    href={cta.href}
                    className="rounded-full bg-black px-[30px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase"
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

export default GoogleAdsFit;
