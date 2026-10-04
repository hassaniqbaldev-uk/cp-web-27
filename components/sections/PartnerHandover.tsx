import { handoverDelivery, handoverGrowth } from "@/config/common";
import type { HandoverCard } from "@/types/common";
import FadeUp, { Stagger } from "../animations/FadeUp";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

type ColumnProps = {
  cards: HandoverCard[];
  className: string;
};

/** The two card columns are identical but for their width and contents. */
const CardColumn = ({ cards, className }: ColumnProps) => (
  // A list, so each column announces as a set rather than three loose blocks.
  // Its three cards follow one another in.
  <Stagger as="ul" className={`gap-sm flex shrink-0 flex-col ${className}`}>
    {cards.map(({ id, icon: Icon, iconClassName, title, subtitle }) => (
      <FadeUp
        as="li"
        key={id}
        className="bg-grey/40 p-md max-425:p-sm max-425:text-center rounded-md"
      >
        <Icon
          aria-hidden="true"
          size={26}
          strokeWidth={2}
          className={`max-425:mx-auto shrink-0 ${iconClassName}`}
        />

        {/* h3, since the section heading between the columns is the h2. */}
        <h3 className="text-subheading-01 max-425:text-[2rem] mt-sm max-425:mt-xs font-bold tracking-[-0.04em] text-black">
          {title}
        </h3>

        <p className="text-body-03 max-425:text-[1.4rem] max-425:leading-[2.2rem] text-text-body mt-xs leading-[2.4rem] tracking-[-0.02em]">
          {subtitle}
        </p>
      </FadeUp>
    ))}
  </Stagger>
);

const PartnerHandover = () => {
  return (
    <>
      <Section id="handover" className="py-3xl max-425:py-xl max-425:px-[3rem]">
        {/* At 425 the heading is lifted to the top and the two columns run on
            beneath it as one list, so the gap between them matches the gap
            between their cards. Order only: the source stays as it is, so
            desktop is untouched. */}
        <Container className="gap-lg max-425:gap-sm max-425:flex-col flex items-center justify-between">
          <CardColumn
            cards={handoverDelivery}
            className="max-425:order-2 max-425:w-full w-[31rem]"
          />

          <div className="max-425:order-1 max-425:mb-md max-425:w-full flex w-[52rem] shrink-0 flex-col items-center text-center">
            <SectionHeading
              reveal
              label="What you can hand over"
              title={
                <>
                  What you can <span className="text-black/50">hand over.</span>
                </>
              }
              subtitle="Every service on this site is available under your brand. Send us Figma and we build to it. Send us a brief and we design. Send us a broken site and we fix it. Pick the pieces you need on each job."
              labelClassName="text-body-01 max-425:text-[1.4rem] font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-heading-02 max-425:max-w-[30rem] max-425:text-[4.5rem] max-425:leading-[4.5rem] mx-auto mt-xs leading-[8rem] font-extrabold tracking-[-0.07em] max-w-[50rem] text-black"
              subtitleClassName="text-body-02 max-425:text-[1.6rem] max-425:leading-[2.4rem] mx-auto text-text-body max-w-[40rem] mt-sm leading-[2.8rem] tracking-[-0.02em]"
            />

            {/* flex, so the wrapper adds no line box beneath the button, and
                full width at 425 so the button still stretches across. */}
            <FadeUp className="max-425:w-full flex">
              <Button
                href="/contact"
                className="text-body-03 max-425:w-full max-425:text-[1.2rem] max-425:mt-md px-sm py-xs mt-lg rounded-full bg-black font-extrabold tracking-[-0.02em] text-white uppercase"
              >
                Tell us what you need capacity for
              </Button>
            </FadeUp>
          </div>

          <CardColumn
            cards={handoverGrowth}
            className="max-425:order-3 max-425:w-full w-[30rem]"
          />
        </Container>
      </Section>
    </>
  );
};

export default PartnerHandover;
