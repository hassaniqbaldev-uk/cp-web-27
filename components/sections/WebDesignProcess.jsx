import { webDesignProcess } from "@/config/common";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const WebDesignProcess = () => {
  return (
    <>
      <Section id="web-design-process" className="py-[120px]">
        <Container>
          <div className="bg-blue/10 rounded-[30px] px-[45px] pt-[80px] pb-[70px]">
            <SectionHeading
              className="text-center"
              title={
                <>
                  How we design and build <br />
                  your website
                </>
              }
              titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
            />

            {/* Circles overlap by 35px; the translucent (even) ones sit on top. */}
            <ul className="mt-[80px] flex justify-center">
              {webDesignProcess.map(
                ({ id, icon: Icon, label, title, description }) => (
                  <li
                    key={id}
                    className="flex size-[283px] shrink-0 flex-col items-center rounded-full bg-white text-center not-first:-ml-[35px] even:z-10 even:bg-white/50 even:backdrop-blur-[10px]"
                  >
                    <span className="bg-blue mt-[-14px] rounded-full px-[16px] py-[2px] text-[14px] leading-[24px] tracking-[-0.02em] text-white">
                      {label}
                    </span>

                    <Icon size={32} className="mt-[44px] shrink-0 text-black" />

                    <h3 className="mt-[18px] text-[25px] leading-[30px] font-bold tracking-[-0.05em] text-black">
                      {title}
                    </h3>

                    <p className="text-text-body mt-[10px] max-w-[185px] text-[16px] leading-[19px] tracking-[-0.02em]">
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
