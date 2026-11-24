import { aiNeeds } from "@/config/common";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const AiNeeds = () => {
  return (
    <>
      <Section id="ai-needs" className="py-[120px]">
        <Container>
          <SectionHeading
            className="text-center"
            title={
              <>
                Workflow, AI agent or connected <br />
                systems:{" "}
                <span className="text-black/50">what do you need?</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          <ul className="mt-[55px] flex items-start justify-between">
            {aiNeeds.map(
              ({ id, icon: Icon, title, description, cta, featured }) => (
                <li
                  key={id}
                  className={`flex w-[380px] flex-col items-start rounded-[20px] p-[30px] ${
                    featured
                      ? "bg-blue min-h-[402px] text-white"
                      : "bg-grey/60 mt-[60px] min-h-[376px] text-black"
                  }`}
                >
                  <span className="flex size-[76px] shrink-0 items-center justify-center rounded-full bg-white text-black">
                    <Icon size={40} />
                  </span>

                  <h3 className="mt-[35px] text-[25px] leading-[30px] font-bold tracking-[-0.06em]">
                    {title}
                  </h3>

                  <p
                    className={`mt-[15px] mb-[25px] text-[18px] leading-[24px] tracking-[-0.02em] ${
                      featured ? "text-white" : "text-text-body"
                    }`}
                  >
                    {description}
                  </p>

                  <div className="mt-auto flex w-full">
                    <Button
                      href={cta.href}
                      className={`w-full rounded-full px-[10px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] whitespace-nowrap uppercase ${
                        featured ? "bg-white text-black" : "bg-black text-white"
                      }`}
                    >
                      {cta.label}
                    </Button>
                  </div>
                </li>
              ),
            )}
          </ul>

          <div className="mt-[45px] flex justify-center">
            <Button
              href="/services/custom-app-development"
              className="rounded-full border border-black px-[30px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase"
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
