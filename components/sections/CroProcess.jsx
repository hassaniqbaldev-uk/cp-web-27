import { croProcess } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const CroProcess = () => {
  return (
    <>
      <Section id="cro-process" className="relative overflow-hidden py-[120px]">
        <Image
          src="/images/services/gradient-bg-web-design-case-studies.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none z-0 object-cover"
        />

        <Image
          src="/images/services/globe-cro-process.png"
          alt=""
          width={735}
          height={361}
          className="pointer-events-none absolute bottom-0 left-0 z-0 h-auto w-[735px]"
        />

        <Container className="relative z-10">
          <div className="flex items-start justify-between">
            <SectionHeading
              className="w-[480px]"
              title={
                <>
                  How we decide <br />
                  what to change
                </>
              }
              titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
              subtitle="Without testing for the sake of it. Every change is ranked before it’s made and measured after."
              subtitleClassName="text-text-body mt-[25px] max-w-[400px] text-[22px] leading-[33px] tracking-[-0.02em]"
            />

            <ol className="flex flex-col gap-[9px]">
              {croProcess.map(({ id, title, description }, index) => {
                const colour = index === 0 ? "bg-blue" : "bg-black";

                return (
                  <li key={id} className="flex items-center">
                    <span
                      className={`flex size-[138px] shrink-0 items-center justify-center rounded-full text-[65px] leading-[65px] font-bold tracking-[-0.06em] text-white ${colour}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`ml-[-2px] h-[22px] w-[18px] shrink-0 [clip-path:polygon(0_0,100%_50%,0_100%)] ${colour}`}
                    />

                    <div className="ml-[28px] flex h-[138px] w-[422px] flex-col justify-center rounded-[20px] bg-white px-[40px]">
                      <h3 className="text-[25px] leading-[30px] font-bold tracking-[-0.06em] text-black">
                        {title}
                      </h3>

                      <p className="text-text-body mt-[10px] text-[16px] leading-[24px] tracking-[-0.02em]">
                        {description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default CroProcess;
