import { Container } from "../ui/Container";
import Section from "../ui/Section";
import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Send a small job",
    description:
      "A URL and a few lines is enough. NDA signed first if you need it.",
  },
  {
    num: "02",
    title: "Get a fixed quote",
    description: "In writing within 1 working day, so you can add your margin.",
  },
  {
    num: "03",
    title: "Review, sign off, then pay",
    description:
      "Check it on staging with two rounds of changes. Then a 3-month guarantee.",
  },
];

const toolsRowOne = [
  {
    id: "clickup",
    src: "/images/black-friday/clickup-logo.png",
    alt: "ClickUp",
    width: 320,
    height: 96,
  },
  {
    id: "monday",
    src: "/images/black-friday/monday-logo.png",
    alt: "monday.com",
    width: 494,
    height: 88,
  },
  {
    id: "slack",
    src: "/images/black-friday/slack-logo.png",
    alt: "Slack",
    width: 320,
    height: 96,
  },
  {
    id: "email",
    src: "/images/black-friday/email-logo.png",
    alt: "Email",
    width: 316,
    height: 96,
  },
  {
    id: "whatsapp",
    src: "/images/black-friday/whatsapp-logo.png",
    alt: "WhatsApp",
    width: 496,
    height: 96,
  },
  {
    id: "umbrella",
    src: "/images/black-friday/unbrella-logo.png",
    alt: "Umbrella",
    width: 510,
    height: 81,
  },
];

const toolsRowTwo = [
  {
    id: "managewp",
    src: "/images/black-friday/managewp-logo.png",
    alt: "ManageWP",
    width: 444,
    height: 96,
  },
  {
    id: "spark",
    src: "/images/black-friday/spark-logo.png",
    alt: "Spark",
    width: 332,
    height: 96,
  },
  {
    id: "feedbucket",
    src: "/images/black-friday/feedbucket-logo.png",
    alt: "Feedbucket",
    width: 610,
    height: 88,
  },
];

const ToolLogo = ({ src, alt, width, height }) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className="h-[26px] w-auto object-contain"
  />
);

const BlackFridayProcess = () => {
  return (
    <Section id="how-it-works" className="bg-[#EAF0FF] py-[80px]">
      <Container>
        <p className="text-center text-[22px] font-medium tracking-[-0.02em] text-black uppercase">
          How it works
        </p>

        <h2 className="mt-[10px] text-center text-[52px] leading-[56px] font-extrabold tracking-[-0.07em] text-black">
          Start small. <span className="text-black/40">Pay as we go.</span>
        </h2>

        <div className="relative mt-[94px]">
          <div className="grid grid-cols-3">
            {steps.map(({ num }) => (
              <span
                key={num}
                className="bg-[linear-gradient(180deg,#A8C6FF_-32.95%,rgba(168,198,255,0)_134.08%)] bg-clip-text text-center text-[135px] leading-none font-extrabold tracking-[-0.07em] text-transparent"
              >
                {num}
              </span>
            ))}
          </div>

          <div className="relative my-[24px]">
            <span
              style={{
                boxShadow: "0px 4px 15px 0px #3078FF80",
              }}
              className="bg-blue absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2"
            />

            <div className="relative grid grid-cols-3">
              {steps.map(({ num }) => (
                <span
                  key={num}
                  className="mx-auto flex size-[45px] items-center justify-center rounded-full bg-white"
                >
                  <span className="bg-blue size-[25px] rounded-full" />
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-[40px]">
            {steps.map(({ num, title, description }) => (
              <div key={num} className="mx-auto max-w-[220px] text-center">
                <h3 className="text-[30px] leading-[35px] font-bold tracking-[-0.07em] text-black">
                  {title}
                </h3>

                <p className="text-text-body mt-[5px] text-[18px] tracking-[-0.02em]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[60px] rounded-[20px] bg-white p-[40px]">
          <p className="text-text-body text-center text-[16px] tracking-[-0.02em]">
            <span className="font-bold text-black">
              We work in the tools you already use.
            </span>{" "}
            Send a brief at the end of your day, and it’s moving by morning.
          </p>

          <div className="mt-[30px] flex flex-wrap items-center justify-center gap-[40px]">
            {toolsRowOne.map((tool) => (
              <ToolLogo key={tool.id} {...tool} />
            ))}
          </div>

          <div className="mt-[20px] flex flex-wrap items-center justify-center gap-[40px]">
            {toolsRowTwo.map((tool) => (
              <ToolLogo key={tool.id} {...tool} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BlackFridayProcess;
