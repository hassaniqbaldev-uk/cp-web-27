import { uiUxProcess } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import CircularTextButton from "../ui/CircularTextButton";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const UiUxProcess = () => {
  return (
    <>
      <Section
        id="ui-ux-process"
        className="relative overflow-hidden bg-[#0A0616] bg-[radial-gradient(ellipse_500px_540px_at_52%_62%,rgba(236,145,34,0.75)_0%,rgba(236,145,34,0.3)_50%,rgba(236,145,34,0)_100%)] pt-[120px]"
      >
        <Container>
          <SectionHeading
            className="text-center"
            title={
              <>
                How a{" "}
                <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                  UX project
                </span>{" "}
                runs
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-white"
          />

          <ul className="mt-[60px] grid grid-cols-4 gap-[30px]">
            {uiUxProcess.map(
              ({ id, icon: Icon, label, title, description }) => (
                <li
                  key={id}
                  className="flex min-h-[279px] flex-col rounded-[20px] bg-white p-[30px]"
                >
                  <div className="flex items-start justify-between gap-[10px]">
                    <span className="bg-grey flex size-[76px] shrink-0 items-center justify-center rounded-full text-black">
                      <Icon size={35} />
                    </span>

                    <span className="bg-blue rounded-full px-[16px] py-[2px] text-[14px] leading-[24px] tracking-[-0.02em] whitespace-nowrap text-white">
                      {label}
                    </span>
                  </div>

                  <h3 className="mt-[30px] text-[25px] leading-[30px] font-bold tracking-[-0.06em] text-black">
                    {title}
                  </h3>

                  <p className="text-text-body mt-[10px] text-[16px] leading-[23px] tracking-[-0.02em]">
                    {description}
                  </p>
                </li>
              ),
            )}
          </ul>
        </Container>

        <div className="relative mt-[75px] flex justify-center">
          <Image
            src="/images/home/smokey-carter-who-we-help-img.png"
            alt="Smokey Carter website on a laptop"
            width={1920}
            height={722}
            className="h-auto w-[1920px] max-w-none shrink-0"
          />

          <div className="absolute top-[85px] left-1/2 ml-[395px]">
            <CircularTextButton
              href="/work/smokey-carter"
              image="/images/services/circular-text-live-site-ui-ux-process.png"
              imageWidth={130}
              imageHeight={130}
              className="size-[130px]"
              ringClassName="h-auto w-full"
            >
              <ArrowUpRight
                size={30}
                strokeWidth={2.5}
                className="text-white"
              />
            </CircularTextButton>
          </div>
        </div>
      </Section>
    </>
  );
};

export default UiUxProcess;
