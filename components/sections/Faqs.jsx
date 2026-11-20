import { faqs } from "@/config/common";
import Image from "next/image";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import WhatsappIcon from "../ui/WhatsappIcon";

const defaultTitle = (
  <>
    Questions? <span className="text-black/50">We are here to help</span>
  </>
);

const Faqs = ({
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
            <div className="w-[525px] shrink-0">
              <SectionHeading
                title={title}
                titleClassName="text-[65px] max-w-[410px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
              />

              <div className="bg-blue mt-[35px] flex items-center gap-[30px] rounded-[20px] p-[20px]">
                <div className="relative shrink-0 overflow-hidden rounded-[10px] bg-white">
                  <Image
                    src="/images/home/hassan-faqs-img.png"
                    alt="Hassan, founder of Creative Pixels"
                    width={150}
                    height={158}
                    className="h-[158px] w-[150px] object-cover object-top"
                  />

                  <Link
                    href="https://wa.me/441618202667"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Message Hassan on WhatsApp"
                    className="absolute right-[10px] bottom-[10px] flex size-[25px] items-center justify-center rounded-full bg-[#25D366] text-white"
                  >
                    <WhatsappIcon className="size-[18px]" />
                  </Link>
                </div>

                <div className="flex flex-1 flex-col">
                  <p className="text-[25px] font-bold tracking-[-0.04em] text-white">
                    Question not here?
                  </p>

                  <p className="text-[16px] tracking-[-0.02em] text-white">
                    Ask Hassan directly
                  </p>

                  <span className="my-[20px] block h-px w-full bg-black/15" />

                  <Link
                    href="mailto:hassan@cp.agency"
                    className="flex items-center gap-[10px] text-[16px] tracking-[-0.02em] text-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="size-[20px] shrink-0"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                    hassan@cp.agency
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-[585px]">
              <Accordion className="gap-[10px]">
                {items.map(({ id: faqId, question, answer }) => (
                  <AccordionItem
                    key={faqId}
                    value={faqId}
                    className="bg-grey/60 rounded-[30px] border-0! px-[30px]"
                  >
                    <AccordionTrigger
                      className="gap-[20px] py-[15px]"
                      indicatorClassName="size-[30px] rounded-full border border-black text-black"
                    >
                      <span className="text-[20px] font-medium tracking-[-0.04em] text-black">
                        {question}
                      </span>
                    </AccordionTrigger>

                    <AccordionContent className="pb-[20px]">
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
