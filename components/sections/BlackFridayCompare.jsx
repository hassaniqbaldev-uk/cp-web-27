import { Container } from "../ui/Container";
import Section from "../ui/Section";

const comparisonRows = [
  {
    id: "when-you-pay",
    label: "When you pay",
    typical: "Usually upfront",
    creativePixels: "In milestones you’ve signed off",
  },
  {
    id: "guarantee",
    label: "Guarantee",
    typical: "Often short, or none",
    creativePixels: "3 months on paid work, fixed free",
  },
  {
    id: "commitment",
    label: "Commitment",
    typical: "A monthly plan or a block of hours",
    creativePixels: "None. Send a job when you have one",
  },
  {
    id: "who-you-deal-with",
    label: "Who you deal with",
    typical: "A coordinator or ticket queue",
    creativePixels: "UK-based founder Hassan and one named contact",
  },
  {
    id: "your-clients",
    label: "Your clients",
    typical: "NDA if you ask",
    creativePixels: "NDA as standard, never contacted, in writing",
  },
  {
    id: "whats-covered",
    label: "What’s covered",
    typical: "Mostly WordPress",
    creativePixels: "Design, builds, maintenance, SEO and print",
  },
];

const rowClassName =
  "grid grid-cols-[240px_1fr_1.1fr] items-start gap-[20px] px-[30px]";

const BlackFridayCompare = () => {
  return (
    <Section id="black-friday-compare" className="py-[120px]">
      <Container>
        <p className="text-center text-[22px] font-medium tracking-[-0.02em] text-black uppercase">
          How we compare
        </p>

        <h2 className="mt-[10px] text-center text-[52px] leading-[56px] font-extrabold tracking-[-0.07em] text-black">
          Most white-label services
          <br />
          <span className="text-black/40">want paying first.</span>
        </h2>

        <div className="mx-auto mt-[50px] max-w-[1200px] overflow-hidden rounded-[20px] border border-black/10">
          <div className={`${rowClassName} bg-black py-[20px]`}>
            <span />

            <span className="text-[18px] font-medium tracking-[-0.02em] text-white">
              Typical white-label service
            </span>

            <span className="text-orange text-[18px] font-bold tracking-[-0.02em]">
              CreativePixels
            </span>
          </div>

          {comparisonRows.map(({ id, label, typical, creativePixels }) => (
            <div
              key={id}
              className={`${rowClassName} border-t border-black/5 py-[20px]`}
            >
              <span className="text-[22px] leading-[28px] font-bold text-black">
                {label}
              </span>

              <span className="text-[20px] leading-[28px] text-[#555555]">
                {typical}
              </span>

              <span className="text-[20px] leading-[28px] font-semibold text-black">
                {creativePixels}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default BlackFridayCompare;
