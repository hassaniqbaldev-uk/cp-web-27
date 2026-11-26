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
  className = "py-[120px] max-sm:py-[80px]",
}) => {
  return (
    <>
      <Section id={id} className={className}>
        <Container className="max-sm:px-[20px]">
          <div className="flex items-start justify-between gap-[45px] max-sm:flex-col max-sm:items-stretch max-sm:gap-[30px]">
            <div className="w-[525px] shrink-0 max-sm:w-full">
              <SectionHeading
                title={title}
                titleClassName="text-[65px] max-w-[410px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:mx-auto max-sm:text-center max-sm:text-[36px] max-sm:leading-[38px]"
              />

              <div className="bg-blue mt-[35px] flex items-center gap-[30px] rounded-[20px] p-[20px] max-sm:mt-[30px] max-sm:gap-[16px] max-sm:p-[14px]">
                <div className="relative shrink-0 overflow-hidden rounded-[10px] bg-white">
                  <Image
                    src="/images/home/hassan-faqs-img.png"
                    alt="Hassan, founder of Creative Pixels"
                    width={150}
                    height={158}
                    className="h-[158px] w-[150px] object-cover object-top max-sm:h-[120px] max-sm:w-[110px]"
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
                  <p className="text-[25px] font-bold tracking-[-0.04em] text-white max-sm:text-[20px] max-sm:leading-[24px]">
                    Question not here?
                  </p>

                  <p className="text-[16px] tracking-[-0.02em] text-white">
                    Ask Hassan directly
                  </p>

                  <span className="my-[20px] block h-px w-full bg-black/15 max-sm:my-[12px]" />

                  <Link
                    href="mailto:hassan@cp.agency"
                    className="flex items-center gap-[10px] text-[16px] tracking-[-0.02em] text-white max-sm:gap-[6px] max-sm:text-[14px]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="size-[20px] shrink-0 max-sm:size-[16px]"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                    hassan@cp.agency
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-[585px] max-sm:w-full">
              <Accordion className="gap-[10px]">
                {items.map(({ id: faqId, question, answer }) => (
                  <AccordionItem
                    key={faqId}
                    value={faqId}
                    className="bg-grey/60 rounded-[30px] border-0! px-[30px] max-sm:rounded-[24px] max-sm:px-[20px]"
                  >
                    <AccordionTrigger
                      className="gap-[20px] py-[15px] max-sm:gap-[12px] max-sm:py-[14px]"
                      indicatorClassName="size-[30px] rounded-full border border-black text-black max-sm:size-[28px] max-sm:[&_svg]:size-[14px]"
                    >
                      <span className="text-[20px] font-medium tracking-[-0.04em] text-black max-sm:text-[17px] max-sm:leading-[22px]">
                        {question}
                      </span>
                    </AccordionTrigger>

                    <AccordionContent className="pb-[20px] max-sm:pb-[16px]">
                      <p className="text-text-body text-[16px] leading-[26px] tracking-[-0.02em] max-sm:text-[15px] max-sm:leading-[23px]">
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
