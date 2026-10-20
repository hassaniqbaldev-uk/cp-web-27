import { faqs } from "@/config/common";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const defaultTitle = (
  <>
    Questions? <span className="text-black/50">We are here to help</span>
  </>
);

const Faqs = ({
  label = "Frequently asked questions",
  title = defaultTitle,
  items = faqs,
  id = "faqs",
  className = "py-[120px]",
}) => {
  return (
    <>
      <Section id={id} className={className}>
        <Container>
          <div className="flex items-start justify-between gap-[45px]">
            <div className="order-2 w-[482px]">
              <SectionHeading
                label={label}
                title={title}
                labelClassName="text-[22px] font-medium tracking-[-0.02em] text-black uppercase"
                titleClassName="text-[85px] mt-[10px] leading-[80px] font-extrabold tracking-[-0.07em] text-black"
              />
            </div>

            <div className="order-1 w-[585px]">
              <Accordion>
                {items.map(({ id: faqId, question, answer }) => (
                  <AccordionItem
                    key={faqId}
                    value={faqId}
                    className="border-b border-black/20"
                  >
                    <AccordionTrigger
                      className="gap-[20px] py-[30px]"
                      indicatorClassName="size-[30px] rounded-full border border-black/30 text-black"
                    >
                      <span className="text-[22px] font-medium tracking-[-0.07em] text-black">
                        {question}
                      </span>
                    </AccordionTrigger>

                    <AccordionContent className="pb-[30px]">
                      <p className="text-text-body text-[16px] leading-[26px] tracking-[-0.02em]">
                        {answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Faqs;
