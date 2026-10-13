import { faqs } from "@/config/common";
import type { Faq } from "@/types/common";
import Accordion from "../ui/Accordion";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

/**
 * The home page's copy, kept as the defaults so pages that want it render
 * `<Faqs />` and nothing else. Anywhere else passes its own.
 */
const defaultTitle = (
  <>
    Questions? <span className="text-black/50">We are here to help</span>
  </>
);

type FaqsProps = {
  label?: string;
  /** Accepts nodes, so part of it can be styled. */
  title?: React.ReactNode;
  items?: Faq[];
  /**
   * Unique per page. Two of these on one page would otherwise give the
   * document two elements with the same id, which breaks fragment links.
   */
  id?: string;
  className?: string;
};

const Faqs = ({
  label = "Frequently asked questions",
  title = defaultTitle,
  items = faqs,
  id = "faqs",
  className = "py-3xl max-425:px-[3rem] max-425:py-xl",
}: FaqsProps) => {
  return (
    <>
      <Section id={id} className={className}>
        <Container>
          <div className="gap-lg max-425:gap-md max-425:flex-col flex items-start justify-between">
            {/* The heading comes first in the source and is moved to the right
                visually, so the h2 is still read before the h3 triggers that
                belong to it. Reordering the markup instead would leave the
                questions announced before the thing that names them. */}
            <div className="max-425:order-1 max-425:w-full order-2 w-[48.2rem]">
              <SectionHeading
                label={label}
                title={title}
                labelClassName="text-body-01 max-425:text-[1.4rem] font-medium tracking-[-0.02em] text-black uppercase"
                titleClassName="text-heading-02 max-425:text-[4.5rem] max-425:leading-[4.5rem] mt-xs leading-[8rem] font-extrabold tracking-[-0.07em] text-black"
              />
            </div>

            <div className="max-425:order-2 max-425:w-full order-1 w-[58.5rem]">
              <Accordion
                items={items.map(({ id: faqId, question, answer }) => ({
                  id: faqId,
                  title: (
                    <span className="text-body-01 max-425:text-[1.8rem] font-medium tracking-[-0.07em] text-black">
                      {question}
                    </span>
                  ),
                  content: (
                    <p className="text-body-03 max-425:text-[1.4rem] max-425:leading-[2.2rem] text-text-body leading-[2.6rem] tracking-[-0.02em]">
                      {answer}
                    </p>
                  ),
                }))}
                itemClassName="border-black/20 border-b"
                triggerClassName="py-md max-425:py-sm gap-sm"
                indicatorClassName="size-[3rem] max-425:size-[2.4rem] rounded-full border border-black/30 text-black"
                iconClassName="max-425:size-[1.4rem]"
                contentClassName="pb-md max-425:pb-sm"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Faqs;
