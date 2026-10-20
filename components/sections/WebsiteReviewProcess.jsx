import { reviewPriorities, reviewSteps } from "@/config/common";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const WebsiteReviewProcess = () => {
  return (
    <>
      <Section id="review-process" className="py-[120px]">
        <Container className="bg-grey/40 flex justify-between gap-[45px] rounded-[20px] p-[45px]">
          <div className="relative w-[535px] shrink-0">
            <div className="relative h-[494px] w-[535px] overflow-hidden rounded-[20px]">
              <Image
                src="/images/website-review/teleqo-tech-project.png"
                alt="A reviewed homepage with its problems marked up"
                fill

                className="object-cover"
              />
            </div>

            <div className="absolute right-[20px] bottom-[10px] left-[20px] rounded-[20px] bg-white p-[30px]">
              <p className="text-[16px] font-bold tracking-[-0.02em] text-black">
                Top Priorities
              </p>

              <ul className="mt-[10px] grid grid-cols-2 gap-[10px]">
                {reviewPriorities.map((priority) => (
                  <li key={priority} className="flex items-center gap-[10px]">
                    <CircleCheck
                      size={16}
                      strokeWidth={2}
                      className="fill-blue shrink-0 text-white"
                    />

                    <span className="text-text-body text-[12px] tracking-[-0.02em]">
                      {priority}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-[485px]">
            <SectionHeading
              label="What a review looks like"
              title={
                <>
                  Annotated,{" "}
                  <span className="text-black/50">prioritised, short.</span>
                </>
              }
              labelClassName="text-[22px] font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-[85px] mt-[10px] leading-[80px] font-extrabold tracking-[-0.07em] text-black"
            />

            <ol className="mt-[45px] flex flex-col">
              {reviewSteps.map(({ id, step, text }, index) => (
                <li key={id} className="flex items-center gap-[20px]">
                  <span className="inline-flex h-[50px] w-[130px] shrink-0 items-center justify-center rounded-full bg-white px-[20px] text-center text-[22px] font-medium tracking-[-0.02em] text-black uppercase">
                    Step {step}
                  </span>

                  <span className="flex w-[10px] shrink-0 flex-col items-center self-stretch">
                    <span
                      className={`h-[30px] w-px ${index > 0 ? "bg-blue/40" : ""}`}
                    />

                    <span className="bg-blue size-[17px] shrink-0 rounded-full" />

                    <span
                      className={`h-[30px] w-px ${
                        index < reviewSteps.length - 1 ? "bg-blue/40" : ""
                      }`}
                    />
                  </span>

                  <p className="text-[22px] leading-[24px] font-bold tracking-[-0.04em] text-black">
                    {text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default WebsiteReviewProcess;
