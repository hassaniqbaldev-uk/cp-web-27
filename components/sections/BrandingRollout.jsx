import { brandingRollout } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import DragMarquee from "../ui/DragMarquee";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const cardClassName =
  "flex flex-col items-start rounded-[15px] bg-white p-[25px] shadow-[16px_16px_124px_0px_#00000012]";

const RolloutCardBody = ({ icon: Icon, title, description }) => (
  <>
    <Icon size={28} className="text-blue/70 shrink-0 max-sm:size-[24px]" />

    <h3 className="mt-[15px] text-[22px] leading-[28px] font-bold tracking-[-0.05em] text-black max-sm:mt-[12px] max-sm:text-[20px] max-sm:leading-[25px]">
      {title}
    </h3>

    <p className="text-text-body mt-[10px] text-[14px] leading-[20px] tracking-[-0.02em]">
      {description}
    </p>
  </>
);

const BrandingRollout = () => {
  return (
    <>
      <Section
        id="branding-rollout"
        className="relative overflow-hidden py-[100px] max-sm:py-[80px]"
      >
        <Image
          src="/images/services/gradient-bg-branding-rollout.png"
          alt=""
          fill
          className="pointer-events-none z-0 object-cover"
        />

        {/* Cards are placed absolutely (positions live in the data) around the
            centred heading, three down each side in a V. On phones the
            heading drops into the flow and the cards scroll in a marquee. */}
        <Container className="relative z-10 h-[625px] max-sm:h-auto max-sm:px-[20px]">
          <SectionHeading
            className="absolute top-[36px] left-1/2 w-[400px] -translate-x-1/2 text-center max-sm:static max-sm:w-full max-sm:translate-x-0"
            title={
              <>
                <span className="text-orange">
                  Brand <br className="max-sm:hidden" />
                  guidelines
                </span>
                <br />
                and rollout <br className="max-sm:hidden" />
                what you get
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[30px] max-sm:leading-[32px]"
          />

          <ul className="max-sm:hidden">
            {brandingRollout.map(({ id, className, ...card }) => (
              <li
                key={id}
                className={`absolute w-[310px] ${cardClassName} ${className}`}
              >
                <RolloutCardBody {...card} />
              </li>
            ))}
          </ul>

          <DragMarquee
            pauseOnHover
            className="-mx-[20px] -mt-[20px] -mb-[50px] hidden py-[50px] max-sm:block"
            trackClassName="flex w-max items-stretch"
            slideClassName="flex shrink-0 pr-[16px]"
          >
            {brandingRollout.map(({ id, className, ...card }) => (
              <div
                key={id}
                className={`w-[260px] ${cardClassName} max-sm:p-[20px] max-sm:shadow-[8px_8px_40px_0px_#00000014]`}
              >
                <RolloutCardBody {...card} />
              </div>
            ))}
          </DragMarquee>
        </Container>
      </Section>
    </>
  );
};

export default BrandingRollout;
