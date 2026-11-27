import { aiSafetySteps, aiSafetyTiles, aiSafetyTools } from "@/config/common";
import Image from "next/image";
import { LuLockKeyhole } from "react-icons/lu";
import Button from "../ui/Button";
import PhoneSlider from "../ui/PhoneSlider";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const cardClassName =
  "bg-grey/60 flex w-[585px] flex-col justify-between gap-[45px] rounded-[30px] p-[60px] max-sm:h-full max-sm:w-full max-sm:justify-start max-sm:gap-[30px] max-sm:rounded-[20px] max-sm:p-[22px]";

// The diagrams are drawn at desktop size; phones zoom them down to fit the card.
const diagramClassName = "max-sm:self-center max-sm:[zoom:0.6]";

const dashedLine = {
  stroke: "currentColor",
  strokeDasharray: "6 5",
  fill: "none",
};

const AiSafety = () => {
  const cards = [
    <div key="data" className={cardClassName}>
      <div>
        <h3 className="text-[35px] leading-[40px] font-bold tracking-[-0.06em] text-black max-sm:text-[24px] max-sm:leading-[28px]">
          Your data stays yours
        </h3>

        <p className="text-text-body mt-[25px] text-[18px] leading-[28px] tracking-[-0.02em] max-sm:mt-[12px] max-sm:text-[16px] max-sm:leading-[24px]">
          Workflows run in your own accounts or on a private server, not ours.
          We only connect the tools you approve, with the least access needed.
          Business data isn’t used to train AI models. UK and EU hosting is
          available.
        </p>
      </div>

      <div className={`flex items-center ${diagramClassName}`}>
        <div className="flex size-[150px] shrink-0 flex-col items-center justify-center rounded-[15px] bg-black text-center text-white">
          <LuLockKeyhole size={30} />

          <span className="mt-[12px] text-[16px] leading-[20px] font-bold tracking-[-0.02em]">
            Your Data
          </span>

          <span className="text-[16px] leading-[20px] tracking-[-0.02em]">
            Your Account
          </span>
        </div>

        <svg
          viewBox="0 0 205 286"
          aria-hidden="true"
          className="h-[286px] w-[205px] shrink-0 text-black"
        >
          <path
            d="M0 122H40Q54 122 54 108V52Q54 38 68 38H200"
            {...dashedLine}
          />
          <path d="M0 143H200" {...dashedLine} />
          <path
            d="M0 164H40Q54 164 54 178V234Q54 248 68 248H200"
            {...dashedLine}
          />

          {[38, 143, 248].map((y) => (
            <circle key={y} cx="201" cy={y} r="3" fill="currentColor" />
          ))}

          <g
            textAnchor="middle"
            className="fill-text-body text-[18px] tracking-[-0.02em]"
          >
            <text x="140" y="92">
              Your control
            </text>
            <text x="140" y="201">
              What shared
            </text>
          </g>
        </svg>

        <ul className="ml-[32px] flex flex-col gap-[29px]">
          {aiSafetyTools.map(({ id, icon, iconAlt }) => (
            <li
              key={id}
              className="flex size-[76px] items-center justify-center rounded-[20px] bg-white shadow-[6px_8px_24px_0px_#0000000F]"
            >
              <Image
                src={icon}
                alt={iconAlt}
                width={42}
                height={42}
                className="size-[42px] object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>,
    <div key="human" className={cardClassName}>
      <div>
        <h3 className="text-[35px] leading-[40px] font-bold tracking-[-0.06em] text-black max-sm:text-[24px] max-sm:leading-[28px]">
          A human stays in loop
        </h3>

        <p className="text-text-body mt-[25px] text-[18px] leading-[28px] tracking-[-0.02em] max-sm:mt-[12px] max-sm:text-[16px] max-sm:leading-[24px]">
          Anything customer-facing or financial goes through a review step. AI
          agents can suggest, draft and sort, but people have the final say
          before anything goes out. We sign an NDA as standard and work in line
          with GDPR.
        </p>
      </div>

      {/* Lines and steps share one grid cell. */}
      <div className={`grid ${diagramClassName}`}>
        <svg
          viewBox="0 0 463 286"
          aria-hidden="true"
          className="col-start-1 row-start-1 h-[286px] w-[463px] text-black"
        >
          <path d="M34 76V129Q34 143 48 143H128" {...dashedLine} />
          <path d="M167 181V234Q167 248 181 248H262" {...dashedLine} />
          <circle cx="129" cy="143" r="3" fill="currentColor" />
          <circle cx="263" cy="248" r="3" fill="currentColor" />
        </svg>

        <ol className="col-start-1 row-start-1 flex flex-col gap-[29px]">
          {aiSafetySteps.map(
            ({ id, icon: Icon, iconClassName, title, text, className }) => (
              <li
                key={id}
                className={`flex h-[76px] w-[195px] items-center gap-[20px] rounded-[15px] bg-white p-[10px] ${className}`}
              >
                <span
                  className={`flex size-[56px] shrink-0 items-center justify-center rounded-[10px] ${iconClassName}`}
                >
                  <Icon size={32} />
                </span>

                <span className="flex flex-col">
                  <span className="text-text-body text-[18px] leading-[23px] font-bold tracking-[-0.04em]">
                    {title}
                  </span>

                  <span className="text-text-body text-[16px] leading-[20px] tracking-[-0.02em]">
                    {text}
                  </span>
                </span>
              </li>
            ),
          )}
        </ol>
      </div>
    </div>,
  ];

  return (
    <>
      <Section id="ai-safety" className="py-[120px] max-sm:py-[80px]">
        <Container className="max-sm:px-[20px]">
          <SectionHeading
            className="text-center"
            title={
              <>
                How we keep your{" "}
                <span className="text-black/50">data safe</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[32px] max-sm:leading-[34px] max-sm:text-balance"
          />

          <div className="mt-[45px] flex items-stretch justify-between max-sm:hidden">
            {cards}
          </div>

          {/* Phones: one card at a time. */}
          <PhoneSlider className="mt-[30px] hidden max-sm:block">
            {cards}
          </PhoneSlider>

          <div className="mt-[30px] flex items-center justify-between rounded-[30px] bg-black p-[60px] max-sm:mt-[16px] max-sm:flex-col max-sm:items-stretch max-sm:gap-[30px] max-sm:rounded-[20px] max-sm:p-[22px]">
            <div className="flex flex-col items-start">
              <h3 className="text-[35px] leading-[45px] font-bold tracking-[-0.06em] text-white max-sm:text-[24px] max-sm:leading-[29px]">
                Describe the process as it happens{" "}
                <br className="max-sm:hidden" />
                today, awkward bits included.
              </h3>

              <p className="mt-[15px] text-[18px] leading-[28px] tracking-[-0.02em] text-white max-sm:mt-[12px] max-sm:text-[16px] max-sm:leading-[24px]">
                We will tell you what can be automated and what should not be.
              </p>

              <div className="flex">
                <Button
                  href="/contact"
                  className="mt-[35px] rounded-full bg-white px-[30px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase max-sm:mt-[24px] max-sm:px-[20px] max-sm:py-[12px] max-sm:text-[14px] max-sm:whitespace-nowrap"
                >
                  Show us the manual process
                </Button>
              </div>
            </div>

            <ul className="flex gap-[30px] max-sm:grid max-sm:grid-cols-2 max-sm:gap-[14px]">
              {aiSafetyTiles.map(({ id, image, imageAlt }) => (
                <li key={id}>
                  <Image
                    src={image}
                    alt={imageAlt}
                    width={228}
                    height={228}
                    className="size-[228px] object-contain max-sm:h-auto max-sm:w-full"
                  />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AiSafety;
