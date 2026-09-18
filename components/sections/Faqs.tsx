import { faqs } from "@/config/common";
import Accordion from "../ui/Accordion";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const Faqs = () => {
  return (
    <>
      <Section id="faqs" className="py-3xl">
        <Container>
          <div className="gap-lg flex items-start justify-between">
            {/* The heading comes first in the source and is moved to the right
                visually, so the h2 is still read before the h3 triggers that
                belong to it. Reordering the markup instead would leave the
                questions announced before the thing that names them. */}
            <div className="order-2 w-[48.2rem]">
              <SectionHeading
                label="Frequently asked questions"
                title={
                  <>
                    Questions?{" "}
                    <span className="text-black/50">We are here to help</span>
                  </>
                }
                labelClassName="text-body-01 font-medium tracking-[-0.02em] text-black uppercase"
                titleClassName="text-heading-02 mt-xs leading-[8rem] font-extrabold tracking-[-0.07em] text-black"
              />
            </div>

            <div className="order-1 w-[58.5rem]">
              <Accordion
                items={faqs.map(({ id, question, answer }) => ({
                  id,
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
