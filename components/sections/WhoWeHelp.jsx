import { whoWeHelpCards } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import CircularTextButton from "../ui/CircularTextButton";
import { Container } from "../ui/Container";
import DragMarquee from "../ui/DragMarquee";
import Starfield from "../ui/Starfield";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const WhoWeHelp = () => {
  return (
    <>
      <Section className="relative overflow-hidden bg-black pt-[120px] max-sm:pt-[80px]">
        <Image
          src="/images/home/gradient-bg-who-we-help.png"
          alt=""
          width={1441}
          height={1343}
          className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full"
        />

        <Starfield className="absolute top-0 left-[-50px] z-0 h-full w-[260px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)] max-sm:w-[140px]" />

        <Starfield className="absolute top-0 right-[-50px] z-0 h-full w-[260px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)] max-sm:w-[140px]" />

        <Container className="relative z-10 max-sm:px-[20px]">
          <SectionHeading
            title={
              <>
                Who we{" "}
                <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                  help
                </span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] text-center text-white font-extrabold tracking-[-0.06em] max-sm:text-[36px] max-sm:leading-[38px]"
          />
        </Container>

        <DragMarquee
          pauseOnHover
          className="relative z-10 mt-[60px] max-sm:mt-[40px]"
          trackClassName="flex w-max items-stretch"
          slideClassName="shrink-0 pr-[10px]"
        >
          {whoWeHelpCards.map(
            ({
              id,
              icon,
              iconWidth,
              iconHeight,
              title,
              description,
              hoverClassName,
            }) => (
              <div
                key={id}
                className={`bg-text-body flex h-[380px] w-[380px] flex-col justify-between rounded-[20px] p-[45px] transition duration-300 max-sm:h-[300px] max-sm:w-[280px] max-sm:p-[24px] ${hoverClassName}`}
              >
                <Image
                  src={icon}
                  alt=""
                  width={iconWidth}
                  height={iconHeight}
                  draggable={false}
                  className="shrink-0 max-sm:h-[46px] max-sm:w-auto max-sm:self-start"
                />

                <div className="flex flex-col items-start">
                  <h3 className="text-[35px] font-bold tracking-[-0.07em] text-white max-sm:text-[26px] max-sm:leading-[30px]">
                    {title}
                  </h3>

                  <p className="mt-[20px] text-[18px] leading-[26px] tracking-[-0.02em] text-white max-sm:mt-[12px] max-sm:text-[16px] max-sm:leading-[24px]">
                    {description}
                  </p>
                </div>
              </div>
            ),
          )}
        </DragMarquee>

        <div className="relative z-10 mx-auto mt-[90px] w-full max-w-[1920px] max-sm:mt-[50px]">
          <Image
            src="/images/home/smokey-carter-who-we-help-img.png"
            alt="Smokey Carter website on a laptop"
            width={1920}
            height={722}
            className="h-auto w-full"
          />

          <div className="absolute top-[80px] right-[450px] max-sm:top-[8%] max-sm:right-[18%]">
            <CircularTextButton
              href="/work"
              image="/images/home/circular-text-projects-light.png"
              imageWidth={113}
              imageHeight={113}
              className="size-[113px] max-sm:size-[64px]"
              ringClassName="h-auto w-full"
            >
              <ArrowUpRight
                size={24}
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

export default WhoWeHelp;
