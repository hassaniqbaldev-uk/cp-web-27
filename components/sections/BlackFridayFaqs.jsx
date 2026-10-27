import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import Image from "next/image";

const faqs = [
  {
    id: "milestones",
    question: "How do milestones work?",
    answer:
      "We break the work into stages. You see and sign off each one before the next starts, so there are no surprises.",
  },
  {
    id: "guarantee",
    question: "What does the 3-month guarantee cover?",
    answer:
      "Any paid build is covered for 3 months. If something we shipped breaks, we fix it at no extra cost.",
  },
  {
    id: "pay",
    question: "When do I pay?",
    answer:
      "In milestones you’ve signed off, never all upfront. Monthly partnerships are invoiced on the 1st.",
  },
  {
    id: "monthly",
    question: "What’s included in the monthly partnership?",
    answer:
      "Design, builds, maintenance and SEO across the board, with your jobs going first. One price, no timesheets.",
  },
  {
    id: "november-rate",
    question: "How does the November rate work?",
    answer:
      "Book by 30 November and the Black Friday rate is locked in for 6 months.",
  },
  {
    id: "client-know",
    question: "Will my client know you exist?",
    answer:
      "Only if you want them to. We work under your brand, and an NDA is signed before we start.",
  },
  {
    id: "references",
    question: "Can we speak to agencies you work with?",
    answer:
      "Yes. Ask and we’ll put you in touch with UK and US agencies who vouch for us.",
  },
  {
    id: "ownership",
    question: "Who owns the code and designs?",
    answer: "You do. Code, files and accounts are yours, with no lock-in.",
  },
  {
    id: "gdpr",
    question: "How do you handle client data and GDPR?",
    answer:
      "Data is handled under a signed agreement, kept to what’s needed, and processed in line with UK GDPR.",
  },
];

const BlackFridayFaqs = () => {
  return (
    <Section id="faq" className="bg-[#F7F1E7] py-[120px] max-sm:py-[60px]">
      <Container className="max-sm:px-[20px]">
        <div className="flex items-start justify-between gap-[60px] max-sm:flex-col-reverse max-sm:gap-[35px]">
          <div className="w-[626px] shrink-0 max-sm:w-full">
            <Accordion className="gap-[12px]">
              {faqs.map(({ id, question, answer }) => (
                <AccordionItem
                  key={id}
                  value={id}
                  className="rounded-[30px] border-transparent bg-white px-[30px] max-sm:px-[20px]"
                >
                  <AccordionTrigger
                    className="gap-[20px] py-[18px]"
                    indicatorClassName="size-[30px] rounded-full border border-black/25 text-black"
                  >
                    <span className="text-[25px] font-semibold tracking-[-0.07em] text-black max-sm:text-[15px]">
                      {question}
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="pb-[24px]">
                    <p className="text-text-body text-[16px] leading-[22px] tracking-[-0.02em] max-sm:text-[14px]">
                      {answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="w-[420px] shrink-0 max-sm:w-full">
            <p className="text-[22px] tracking-[-0.02em] text-black uppercase max-sm:text-center max-sm:text-[13px]">
              Frequently asked questions
            </p>

            <h2 className="mt-[10px] text-[52px] leading-[60px] font-extrabold tracking-[-0.07em] text-black max-sm:text-center max-sm:text-[30px] max-sm:leading-[34px]">
              What agencies
              <br />
              <span className="text-black/40">ask us first</span>
            </h2>

            <div className="mt-[35px] flex items-center gap-[20px] rounded-[20px] bg-white p-[20px]">
              <Image
                src="/images/black-friday/hassan-avatar.png"
                alt="Hassan, Creative Pixels"
                width={66}
                height={66}
                className="size-[66px] shrink-0 rounded-full object-cover"
              />

              <div>
                <p className="text-[18px] font-bold tracking-[-0.02em] text-black">
                  Got a job waiting?
                </p>

                <p className="text-text-body mt-[6px] text-[14px] tracking-[-0.02em]">
                  Send a URL and a few lines. I’ll reply within 1 working day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BlackFridayFaqs;
