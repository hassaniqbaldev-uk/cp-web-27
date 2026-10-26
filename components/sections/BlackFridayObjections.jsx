import { Container } from "../ui/Container";
import Section from "../ui/Section";

const objections = [
  {
    id: "redo",
    question: "I’ll end up redoing it.",
    answer:
      "You check every stage before sign-off. Then it’s covered by our 3-month guarantee.",
  },
  {
    id: "paid",
    question: "What if it goes wrong and I’ve already paid?",
    answer:
      "Work is split into milestones. You only pay for stages you’ve signed off.",
  },
  {
    id: "clients",
    question: "They’ll go after my clients.",
    answer: "We never contact your clients. NDA signed before we start.",
  },
  {
    id: "steady",
    question: "I don’t have steady work for someone.",
    answer: "No minimums, no retainer. Send a job when you have one.",
  },
  {
    id: "chasing",
    question: "I’ll be chasing updates.",
    answer:
      "You check every stage before sign-off. Then it’s covered by our 3-month guarantee.",
  },
  {
    id: "good",
    question: "How do I know you’re any good?",
    answer: "Start with one small job, and ask us for agency references.",
  },
];

const BlackFridayObjections = () => {
  return (
    <Section id="black-friday-objections" className="bg-[#FAF3E8] py-[120px]">
      <Container>
        <h2 className="text-center text-[52px] leading-[56px] font-extrabold tracking-[-0.07em] text-black">
          Worried about handing work over?
          <br />
          <span className="text-black/40">So were most of our partners.</span>
        </h2>

        <div className="mt-[60px] grid grid-cols-3 gap-[33px]">
          {objections.map(({ id, question, answer }) => (
            <div key={id} className="rounded-[20px] bg-white p-[35px]">
              <h3 className="text-[22px] font-bold tracking-[-0.02em] text-black">
                “{question}”
              </h3>

              <p className="mt-[20px] text-[18px] tracking-[-0.02em] text-black">
                {answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default BlackFridayObjections;
