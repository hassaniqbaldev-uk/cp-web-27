import { webDesignProcess } from "@/config/common";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const WebDesignProcess = () => {
  return (
    <>
      <Section id="web-design-process" className="py-[120px] max-sm:py-[80px]">
        <Container className="max-sm:px-[20px]">
          <div className="bg-blue/10 rounded-[30px] px-[45px] pt-[80px] pb-[70px] max-sm:rounded-[20px] max-sm:px-[16px] max-sm:pt-[45px] max-sm:pb-[40px]">
            <SectionHeading
              className="text-center"
              title={
                <>
                  How we design and build <br className="max-sm:hidden" />
                  your website
                </>
              }
              titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[30px] max-sm:leading-[32px]"
            />

            {/* Circles overlap by 35px; the translucent (even) ones sit on top. On
                phones they zig-zag down, each one over the one above, so every
                label stays visible. */}
            <ul className="mt-[80px] flex justify-center max-sm:mt-[44px] max-sm:flex-col max-sm:items-start">
              {webDesignProcess.map(
                ({ id, icon: Icon, label, title, description }) => (
                  <li
                    key={id}
                    className="flex size-[283px] shrink-0 flex-col items-center rounded-full bg-white text-center not-first:-ml-[35px] even:z-10 even:bg-white/50 even:backdrop-blur-[10px] max-sm:relative max-sm:size-[240px] max-sm:not-first:-mt-[30px] max-sm:not-first:ml-0 max-sm:even:z-auto max-sm:even:self-end"
                  >
                    <span className="bg-blue mt-[-14px] rounded-full px-[16px] py-[2px] text-[14px] leading-[24px] tracking-[-0.02em] text-white">
                      {label}
                    </span>

                    <Icon
                      size={32}
                      className="mt-[44px] shrink-0 text-black max-sm:mt-[36px] max-sm:size-[28px]"
                    />

                    <h3 className="mt-[18px] text-[25px] leading-[30px] font-bold tracking-[-0.05em] text-black max-sm:mt-[14px] max-sm:text-[22px] max-sm:leading-[26px]">
                      {title}
                    </h3>

                    <p className="text-text-body mt-[10px] max-w-[185px] text-[16px] leading-[19px] tracking-[-0.02em] max-sm:mt-[8px] max-sm:max-w-[170px] max-sm:text-[15px] max-sm:leading-[18px]">
                      {description}
                    </p>
                  </li>
                ),
              )}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default WebDesignProcess;
