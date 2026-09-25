import { agencyWorkflow } from "@/config/common";
import { Plus } from "lucide-react";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const PartnerWorkflow = () => {
  return (
    <>
      <Section id="partner-workflow" className="py-3xl">
        <Container className="gap-lg flex items-center justify-between">
          {/* A list, so the four read as a set of arrangements rather than
              four loose blocks. */}
          <ul className="gap-xs grid w-[58.5rem] grid-cols-2">
            {agencyWorkflow.map(({ id, icons, showPlus, title, subtitle }) => (
              <li
                key={id}
                className="bg-grey/40 p-md flex flex-col items-start rounded-md"
              >
                {/* The marks are decorative: the title and subtitle below
                    already say what each card is. */}
                <span
                  aria-hidden="true"
                  className="gap-xs mb-md flex h-[5rem] shrink-0 items-center rounded-md bg-white px-[1.4rem]"
                >
                  {icons.map(({ id: iconId, src, width, height }) => (
                    <Image
                      key={iconId}
                      src={src}
                      alt=""
                      width={width}
                      height={height}
                      className="h-[2.4rem] w-auto shrink-0"
                    />
                  ))}

                  {showPlus && (
                    <Plus
                      size={20}
                      strokeWidth={2.5}
                      className="shrink-0 text-black"
                    />
                  )}
                </span>

                {/* h3, since the section heading beside it is the h2. */}
                <h3 className="text-body-01 font-bold tracking-[-0.02em] text-black">
                  {title}
                </h3>

                <p className="text-body-03 text-text-body mt-[0.4rem] leading-[2.4rem] tracking-[-0.02em]">
                  {subtitle}
                </p>
              </li>
            ))}
          </ul>

          <div className="w-[55.8rem]">
            <SectionHeading
              label="How we work with agencies"
              title={
                <>
                  How a normal week{" "}
                  <span className="text-black/50">works.</span>
                </>
              }
              subtitle="Set up per agency: Slack Connect or email, your board or ours, our people on your domain when the client needs a name. The rhythm is the same either way: short messages, staging links, no silence."
              labelClassName="text-body-01 font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-heading-02 mt-xs leading-[8rem] font-extrabold tracking-[-0.07em] text-black"
              subtitleClassName="text-body-02 text-text-body mt-sm leading-[2.8rem] tracking-[-0.02em]"
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PartnerWorkflow;
