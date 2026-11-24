import { croFixes } from "@/config/common";
import { Container } from "../ui/Container";
import DragMarquee from "../ui/DragMarquee";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const CroFixes = () => {
  return (
    <>
      <Section id="cro-fixes" className="overflow-hidden py-[120px]">
        <Container>
          <SectionHeading
            className="text-center"
            title={
              <>
                What we look <span className="text-black/50">at and fix</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />
        </Container>

        <DragMarquee
          pauseOnHover
          className="mt-[60px]"
          trackClassName="flex w-max items-stretch"
          slideClassName="shrink-0 pr-[30px]"
        >
          {croFixes.map(
            ({
              id,
              icon: Icon,
              iconClassName,
              title,
              description,
              className,
            }) => (
              <div
                key={id}
                className={`flex h-[286px] w-[589px] items-center justify-between gap-[25px] rounded-[30px] pr-[43px] pl-[50px] ${className}`}
              >
                <div className="w-[300px]">
                  <h3 className="text-[35px] leading-[42px] font-bold tracking-[-0.07em] whitespace-pre-line text-black">
                    {title}
                  </h3>

                  <p className="text-text-body mt-[20px] text-[18px] leading-[28px] tracking-[-0.02em]">
                    {description}
                  </p>
                </div>

                <span className="flex size-[172px] shrink-0 items-center justify-center rounded-full bg-white">
                  <Icon size={75} className={iconClassName} />
                </span>
              </div>
            ),
          )}
        </DragMarquee>
      </Section>
    </>
  );
};

export default CroFixes;
