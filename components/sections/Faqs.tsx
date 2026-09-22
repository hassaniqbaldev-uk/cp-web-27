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
  className = "py-3xl",
}: FaqsProps) => {
  return (
    <>
      <Section id={id} className={className}>
        <Container>
          <div className="gap-lg flex items-start justify-between">
            {/* The heading comes first in the source and is moved to the right
                visually, so the h2 is still read before the h3 triggers that
                belong to it. Reordering the markup instead would leave the
                questions announced before the thing that names them. */}
            <div className="order-2 w-[48.2rem]">
              <SectionHeading
                label={label}
                title={title}
                labelClassName="text-body-01 font-medium tracking-[-0.02em] text-black uppercase"
                titleClassName="text-heading-02 mt-xs leading-[8rem] font-extrabold tracking-[-0.07em] text-black"
              />
            </div>

            <div className="order-1 w-[58.5rem]">
              <Accordion
                items={items.map(({ id: faqId, question, answer }) => ({
                  id: faqId,
                  title: (
                    <span className="text-body-01 font-medium tracking-[-0.07em] text-black">
                      {question}
                    </span>
                  ),
                  content: (
                    <p className="text-body-03 text-text-body leading-[2.6rem] tracking-[-0.02em]">
                      {answer}
                    </p>
                  ),
                }))}
                itemClassName="border-black/20 border-b"
                triggerClassName="py-md gap-sm"
                indicatorClassName="size-[3rem] rounded-full border border-black/30 text-black"
                contentClassName="pb-md"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Faqs;
