import { aiNeeds } from "@/config/common";
import Button from "../ui/Button";
import PhoneSlider from "../ui/PhoneSlider";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const AiNeeds = () => {
  const cards = aiNeeds.map(
    ({ id, icon: Icon, title, description, cta, featured }) => (
      <div
        key={id}
        className={`flex w-[380px] flex-col items-start rounded-[20px] p-[30px] max-sm:h-full max-sm:min-h-0 max-sm:w-full max-sm:p-[22px] ${
          featured
            ? "bg-blue min-h-[402px] text-white"
            : "bg-grey/60 mt-[60px] min-h-[376px] text-black max-sm:mt-0"
        }`}
      >
        <span className="flex size-[76px] shrink-0 items-center justify-center rounded-full bg-white text-black max-sm:size-[60px]">
          <Icon size={40} className="max-sm:size-[30px]" />
        </span>

        <h3 className="mt-[35px] text-[25px] leading-[30px] font-bold tracking-[-0.06em] max-sm:mt-[20px] max-sm:text-[22px] max-sm:leading-[26px]">
          {title}
        </h3>

        <p
          className={`mt-[15px] mb-[25px] text-[18px] leading-[24px] tracking-[-0.02em] max-sm:mt-[10px] max-sm:mb-[20px] max-sm:text-[16px] max-sm:leading-[22px] ${
            featured ? "text-white" : "text-text-body"
          }`}
        >
          {description}
        </p>

        <div className="mt-auto flex w-full">
          <Button
            href={cta.href}
            className={`w-full rounded-full px-[10px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] whitespace-nowrap uppercase max-sm:py-[12px] max-sm:text-[15px] ${
              featured ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            {cta.label}
          </Button>
        </div>
      </div>
    ),
  );

  return (
    <>
      <Section id="ai-needs" className="py-[120px] max-sm:py-[80px]">
        <Container className="max-sm:px-[20px]">
          <SectionHeading
            className="text-center"
            title={
              <>
                Workflow, AI agent or connected <br className="max-sm:hidden" />
                systems:{" "}
                <span className="text-black/50">what do you need?</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[34px] max-sm:leading-[36px]"
          />

          <ul className="mt-[55px] flex items-start justify-between max-sm:hidden">
            {cards.map((card) => (
              <li key={card.key}>{card}</li>
            ))}
          </ul>

          {/* Phones: one card at a time. */}
          <PhoneSlider className="mt-[30px] hidden max-sm:block">
            {cards}
          </PhoneSlider>

          <div className="mt-[45px] flex justify-center max-sm:mt-[30px]">
            <Button
              href="/services/custom-app-development"
              className="rounded-full border border-black px-[30px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase max-sm:px-[24px] max-sm:py-[12px] max-sm:text-[15px]"
            >
              See custom software.
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AiNeeds;
