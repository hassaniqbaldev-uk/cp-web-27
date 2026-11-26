import { behaviours } from "@/config/common";
import Image from "next/image";
import DragMarquee from "../ui/DragMarquee";
import { Container } from "../ui/Container";
import Starfield from "../ui/Starfield";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const BehaviourCard = ({
  icon,
  iconWidth,
  iconHeight,
  title,
  description,
  hoverClassName,
}) => (
  <div
    className={`bg-text-body h-full rounded-[20px] p-[45px] transition duration-300 max-sm:w-[290px] max-sm:p-[24px] ${hoverClassName}`}
  >
    <Image
      src={icon}
      alt=""
      width={iconWidth}
      height={iconHeight}
      draggable={false}
      className="shrink-0 max-sm:h-[44px] max-sm:w-auto"
    />

    <h3 className="mt-[45px] text-[35px] font-bold tracking-[-0.07em] text-white max-sm:mt-[24px] max-sm:text-[26px] max-sm:leading-[30px]">
      {title}
    </h3>

    <p className="mt-[10px] text-[22px] tracking-[-0.02em] text-white max-sm:text-[16px] max-sm:leading-[24px]">
      {description}
    </p>
  </div>
);

const AboutBehaviours = () => {
  return (
    <>
      <Section
        id="behaviours"
        className="relative overflow-hidden bg-black py-[120px] max-sm:py-[80px]"
      >
        <Image
          src="/images/about/gradient-bg-about-behaviours.png"
          alt=""
          width={1440}
          height={506}
          className="pointer-events-none absolute bottom-0 left-0 z-0 h-auto w-full"
        />

        <Starfield className="absolute bottom-[-50px] left-1/2 z-0 h-[184px] w-[1021px] -translate-x-1/2 mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

        <Container className="relative z-10 max-sm:px-[20px]">
          <SectionHeading
            title={
              <>
                Behaviours, <span className="text-white/50">not values.</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] text-center font-extrabold tracking-[-0.07em] text-white max-sm:text-[32px] max-sm:leading-[36px]"
          />

          <ul className="mt-[65px] grid grid-cols-2 items-start gap-[30px] max-sm:hidden">
            {behaviours.map((behaviour) => (
              <li key={behaviour.id} className="even:mt-[30px]">
                <BehaviourCard {...behaviour} />
              </li>
            ))}
          </ul>
        </Container>

        {/* Phones: the cards run in a drag marquee, edge to edge. */}
        <DragMarquee
          pauseOnHover
          className="relative z-10 mt-[30px] hidden max-sm:block"
          trackClassName="flex w-max items-stretch"
          slideClassName="flex shrink-0 pr-[12px]"
        >
          {behaviours.map((behaviour) => (
            <BehaviourCard key={behaviour.id} {...behaviour} />
          ))}
        </DragMarquee>
      </Section>
    </>
  );
};

export default AboutBehaviours;
