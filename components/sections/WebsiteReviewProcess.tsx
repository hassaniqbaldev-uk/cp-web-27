import { reviewPriorities, reviewSteps } from "@/config/common";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const WebsiteReviewProcess = () => {
  return (
    <>
      <Section
        id="review-process"
        className="py-3xl max-425:py-xl max-425:px-[3rem]"
      >
        <Container className="bg-grey/40 gap-lg max-425:gap-lg max-425:flex-col-reverse max-425:p-sm max-425:pb-2xl p-lg flex justify-between rounded-md">
          <div className="max-425:w-full relative w-[53.5rem] shrink-0">
            {/* Fixed ratio box, so the space is reserved before the artwork
                loads and the card below it never jumps. */}
            <div className="max-425:aspect-[804/742] max-425:h-auto max-425:w-full relative h-[49.4rem] w-[53.5rem] overflow-hidden rounded-md">
              <Image
                src="/images/website-review/teleqo-tech-project.png"
                alt="A reviewed homepage with its problems marked up"
                fill

                className="object-cover"
              />
            </div>

            {/* Overlaps the foot of the artwork, as the design has it. */}
            <div className="p-md max-425:p-xs max-425:right-[1rem] max-425:left-[1rem] max-425:bottom-[-5rem] max-425:rounded-sm absolute right-[2rem] bottom-[1rem] left-[2rem] rounded-md bg-white">
              {/* Deliberately not a heading: it names this box rather than
                  opening a new part of the section. */}
              <p className="text-body-03 font-bold tracking-[-0.02em] text-black">
                Top Priorities
              </p>

              <ul className="gap-xs mt-xs grid grid-cols-2">
                {reviewPriorities.map((priority) => (
                  <li key={priority} className="gap-xs flex items-center">
                    <CircleCheck
                      aria-hidden="true"
                      size={16}
                      strokeWidth={2}
                      className="fill-blue shrink-0 text-white"
                    />

                    <span className="text-text-body text-[1.2rem] tracking-[-0.02em]">
                      {priority}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-425:w-full max-425:text-center w-[48.5rem]">
            <SectionHeading
              label="What a review looks like"
              title={
                <>
                  Annotated,{" "}
                  <span className="text-black/50">prioritised, short.</span>
                </>
              }
              labelClassName="text-body-01 max-425:text-[1.4rem] font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-heading-02 max-425:mx-auto max-425:max-w-[30rem] max-425:text-[4.5rem] max-425:leading-[4.5rem] mt-xs leading-[8rem] font-extrabold tracking-[-0.07em] text-black"
            />

            {/* An ordered list, since the three happen in sequence. */}
            <ol className="mt-lg max-425:mt-md max-425:text-left flex flex-col">
              {reviewSteps.map(({ id, step, text }, index) => (
                <li key={id} className="gap-sm flex items-center">
                  {/* The number is decoration: the list already carries the
                      order, and it would otherwise be read out twice. A set
                      width, so the three pills match however long the figure
                      runs. */}
                  <span
                    aria-hidden="true"
                    className="text-body-01 px-sm max-425:text-[1.4rem] max-425:h-[4rem] max-425:w-[10rem] max-425:px-xs inline-flex h-[5rem] w-[13rem] shrink-0 items-center justify-center rounded-full bg-white text-center font-medium tracking-[-0.02em] text-black uppercase"
                  >
                    Step {step}
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex w-[1rem] shrink-0 flex-col items-center self-stretch"
                  >
                    <span
                      className={`h-[3rem] w-px ${index > 0 ? "bg-blue/40" : ""}`}
                    />

                    <span className="bg-blue size-[1.7rem] shrink-0 rounded-full" />

                    <span
                      className={`h-[3rem] w-px ${
                        index < reviewSteps.length - 1 ? "bg-blue/40" : ""
                      }`}
                    />
                  </span>

                  <p className="text-body-01 max-425:text-[1.6rem] max-425:leading-[2rem] leading-[2.4rem] font-bold tracking-[-0.04em] text-black">
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
