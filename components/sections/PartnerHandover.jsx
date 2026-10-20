import { handoverDelivery, handoverGrowth } from "@/config/common";

import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const CardColumn = ({ cards, className }) => (
  <ul className={`flex shrink-0 flex-col gap-[20px] ${className}`}>
    {cards.map(({ id, icon: Icon, iconClassName, title, subtitle }) => (
      <li key={id} className="bg-grey/40 rounded-[20px] p-[30px]">
        <Icon
          size={26}
          strokeWidth={2}
          className={`shrink-0 ${iconClassName}`}
        />

        <h3 className="mt-[20px] text-[25px] font-bold tracking-[-0.04em] text-black">
          {title}
        </h3>

        <p className="text-text-body mt-[10px] text-[16px] leading-[24px] tracking-[-0.02em]">
          {subtitle}
        </p>
      </li>
    ))}
  </ul>
);

const PartnerHandover = () => {
  return (
    <>
      <Section id="handover" className="py-[120px]">
        <Container className="flex items-center justify-between gap-[45px]">
          <CardColumn cards={handoverDelivery} className="w-[310px]" />

          <div className="flex w-[520px] shrink-0 flex-col items-center text-center">
            <SectionHeading
              label="What you can hand over"
              title={
                <>
                  What you can <span className="text-black/50">hand over.</span>
                </>
              }
              subtitle="Every service on this site is available under your brand. Send us Figma and we build to it. Send us a brief and we design. Send us a broken site and we fix it. Pick the pieces you need on each job."
              labelClassName="text-[22px] font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-[85px] mx-auto mt-[10px] leading-[80px] font-extrabold tracking-[-0.07em] max-w-[500px] text-black"
              subtitleClassName="text-[18px] mx-auto text-text-body max-w-[400px] mt-[20px] leading-[28px] tracking-[-0.02em]"
            />

            <div className="flex">
              <Button
                href="/contact"
                className="mt-[45px] rounded-full bg-black px-[20px] py-[10px] text-[16px] font-extrabold tracking-[-0.02em] text-white uppercase"
              >
                Tell us what you need capacity for
              </Button>
            </div>
          </div>

          <CardColumn cards={handoverGrowth} className="w-[300px]" />
        </Container>
      </Section>
    </>
  );
};

export default PartnerHandover;
