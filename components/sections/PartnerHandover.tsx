import { handoverDelivery, handoverGrowth } from "@/config/common";
import type { HandoverCard } from "@/types/common";
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
  <ul className={`gap-sm flex shrink-0 flex-col ${className}`}>
    {cards.map(({ id, icon: Icon, iconClassName, title, subtitle }) => (
      <li key={id} className="bg-grey/40 p-md rounded-md">
        <Icon
          aria-hidden="true"
          size={26}
          strokeWidth={2}
          className={`shrink-0 ${iconClassName}`}
        />

        {/* h3, since the section heading between the columns is the h2. */}
        <h3 className="text-subheading-01 mt-sm font-bold tracking-[-0.04em] text-black">
          {title}
        </h3>

        <p className="text-body-03 text-text-body mt-xs leading-[2.4rem] tracking-[-0.02em]">
          {subtitle}
        </p>
      </li>
    ))}
  </ul>
);

const PartnerHandover = () => {
  return (
    <>
      <Section id="handover" className="py-3xl">
        <Container className="gap-lg flex items-center justify-between">
          <CardColumn cards={handoverDelivery} className="w-[31rem]" />

          <div className="flex w-[52rem] shrink-0 flex-col items-center text-center">
            <SectionHeading
              label="What you can hand over"
              title={
                <>
                  What you can <span className="text-black/50">hand over.</span>
                </>
              }
              subtitle="Every service on this site is available under your brand. Send us Figma and we build to it. Send us a brief and we design. Send us a broken site and we fix it. Pick the pieces you need on each job."
              labelClassName="text-body-01 font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-heading-02 mx-auto mt-xs leading-[8rem] font-extrabold tracking-[-0.07em] max-w-[50rem] text-black"
              subtitleClassName="text-body-02 mx-auto text-text-body max-w-[40rem] mt-sm leading-[2.8rem] tracking-[-0.02em]"
            />

            <Button
              href="/contact"
              className="text-body-03 px-sm py-xs mt-lg rounded-full bg-black font-extrabold tracking-[-0.02em] text-white uppercase"
            >
              Tell us what you need capacity for
            </Button>
          </div>

          <CardColumn cards={handoverGrowth} className="w-[30rem]" />
        </Container>
      </Section>
    </>
  );
};

export default PartnerHandover;
