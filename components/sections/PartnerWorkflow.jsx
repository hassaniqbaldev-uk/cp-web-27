import { agencyWorkflow } from "@/config/common";
import { Plus } from "lucide-react";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const PartnerWorkflow = () => {
  return (
    <>
      <Section id="partner-workflow" className="py-[120px]">
        <Container className="flex items-center justify-between gap-[45px]">
          <ul className="grid w-[585px] grid-cols-2 gap-[10px]">
            {agencyWorkflow.map(({ id, icons, showPlus, title, subtitle }) => (
              <li
                key={id}
                className="bg-grey/40 flex flex-col items-start rounded-[20px] p-[30px]"
              >
                <span className="mb-[30px] flex h-[50px] shrink-0 items-center gap-[10px] rounded-[20px] bg-white px-[14px]">
                  {icons.map(({ id: iconId, src, width, height }) => (
                    <Image
                      key={iconId}
                      src={src}
                      alt=""
                      width={width}
                      height={height}
                      className="h-[24px] w-auto shrink-0"
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

                <h3 className="text-[22px] font-bold tracking-[-0.02em] text-black">
                  {title}
                </h3>

                <p className="text-text-body mt-[4px] text-[16px] leading-[24px] tracking-[-0.02em]">
                  {subtitle}
                </p>
              </li>
            ))}
          </ul>

          <div className="w-[558px]">
            <SectionHeading
              label="How we work with agencies"
              title={
                <>
                  How a normal week{" "}
                  <span className="text-black/50">works.</span>
                </>
              }
              subtitle="Set up per agency: Slack Connect or email, your board or ours, our people on your domain when the client needs a name. The rhythm is the same either way: short messages, staging links, no silence."
              labelClassName="text-[22px] font-medium tracking-[-0.02em] text-black uppercase"
              titleClassName="text-[85px] mt-[10px] leading-[80px] font-extrabold tracking-[-0.07em] text-black"
              subtitleClassName="text-[18px] text-text-body mt-[20px] leading-[28px] tracking-[-0.02em]"
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PartnerWorkflow;
