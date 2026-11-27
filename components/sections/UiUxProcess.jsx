import { uiUxProcess } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import CircularTextButton from "../ui/CircularTextButton";
import { Container } from "../ui/Container";
import DragMarquee from "../ui/DragMarquee";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

// Desktop shows these in a row; phones scroll them in a drag marquee.
const cards = uiUxProcess.map(
  ({ id, icon: Icon, label, title, description }) => (
    <div
      key={id}
      className="flex min-h-[279px] w-full flex-col rounded-[20px] bg-white p-[30px] max-sm:min-h-0 max-sm:w-[270px] max-sm:p-[20px]"
    >
      <div className="flex items-start justify-between gap-[10px]">
        <span className="bg-grey flex size-[76px] shrink-0 items-center justify-center rounded-full text-black max-sm:size-[60px]">
          <Icon size={35} className="max-sm:size-[28px]" />
        </span>

        <span className="bg-blue rounded-full px-[16px] py-[2px] text-[14px] leading-[24px] tracking-[-0.02em] whitespace-nowrap text-white">
          {label}
        </span>
      </div>

      <h3 className="mt-[30px] text-[25px] leading-[30px] font-bold tracking-[-0.06em] text-black max-sm:mt-[18px] max-sm:text-[22px] max-sm:leading-[26px]">
        {title}
      </h3>

      <p className="text-text-body mt-[10px] text-[16px] leading-[23px] tracking-[-0.02em] max-sm:mt-[8px] max-sm:text-[15px] max-sm:leading-[21px]">
        {description}
      </p>
    </div>
  ),
);

const UiUxProcess = () => {
  return (
    <>
      <Section
        id="ui-ux-process"
        className="relative overflow-hidden bg-[#0A0616] bg-[radial-gradient(ellipse_500px_540px_at_52%_62%,rgba(236,145,34,0.75)_0%,rgba(236,145,34,0.3)_50%,rgba(236,145,34,0)_100%)] pt-[120px] max-sm:pt-[80px]"
      >
        <Container className="max-sm:px-[20px]">
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
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-white max-sm:text-[32px] max-sm:leading-[34px]"
          />

          <ul className="mt-[60px] grid grid-cols-4 gap-[30px] max-sm:hidden">
            {cards.map((card) => (
              <li key={card.key} className="flex">
                {card}
              </li>
            ))}
          </ul>

          <DragMarquee
            pauseOnHover
            className="-mx-[20px] mt-[30px] hidden max-sm:block"
            trackClassName="flex w-max items-stretch"
            slideClassName="flex shrink-0 pr-[16px]"
          >
            {cards}
          </DragMarquee>
        </Container>

        <div className="relative mt-[75px] flex justify-center max-sm:mt-[60px]">
          <Image
            src="/images/home/smokey-carter-who-we-help-img.png"
            alt="Smokey Carter website on a laptop"
            width={1920}
            height={722}
            className="h-auto w-[1920px] max-w-none shrink-0 max-sm:hidden"
          />

          <Image
            src="/images/home/smokey-carter-who-we-help-img-mobile.png"
            alt="Smokey Carter website on a laptop"
            width={780}
            height={553}
            className="hidden h-auto w-full max-sm:block"
          />

          <div className="absolute top-[85px] left-1/2 ml-[395px] max-sm:top-[-24px] max-sm:right-[20px] max-sm:left-auto max-sm:ml-0">
            <CircularTextButton
              href="/work/smokey-carter"
              image="/images/services/circular-text-live-site-ui-ux-process.png"
              imageWidth={130}
              imageHeight={130}
              className="size-[130px] max-sm:size-[70px]"
              ringClassName="h-auto w-full"
            >
              <ArrowUpRight
                size={30}
                strokeWidth={2.5}
                className="text-white max-sm:size-[20px]"
              />
            </CircularTextButton>
          </div>
        </div>
      </Section>
    </>
  );
};

export default UiUxProcess;
