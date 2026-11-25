import { printEventsProcess } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const PrintEventsProcess = () => {
  return (
    <>
      <Section
        id="print-events-process"
        className="bg-orange/10 relative overflow-hidden py-[120px]"
      >
        <Image
          src="/images/services/gradient-bg-ai-automate.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none z-0 object-cover"
        />

        <Container className="relative z-10">
          <SectionHeading
            className="text-center"
            label="Process"
            labelClassName="text-[22px] leading-[28px] tracking-[-0.02em] text-black uppercase"
            title={
              <>
                Brief to <span className="text-black/50">print-ready.</span>
              </>
            }
            titleClassName="mt-[10px] text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          {/* The narrow and wide cards swap sides on the second row. */}
          <ol className="mt-[60px] flex flex-wrap gap-x-[33px] gap-y-[41px]">
            {printEventsProcess.map(
              ({
                id,
                title,
                description,
                image,
                imageAlt,
                width,
                height,
                imageFirst,
                className,
              }) => (
                <li
                  key={id}
                  className={`flex rounded-[20px] bg-white pr-[25px] pl-[50px] ${
                    imageFirst
                      ? "min-h-[412px] flex-col-reverse justify-end gap-[36px] pt-[37px] pb-[45px]"
                      : "min-h-[464px] flex-col justify-between gap-[30px] pt-[50px] pb-[49px]"
                  } ${className}`}
                >
                  <div>
                    <h3 className="text-[45px] leading-[50px] font-bold tracking-[-0.06em] whitespace-nowrap text-black">
                      {title}
                    </h3>

                    <p className="text-text-body mt-[20px] max-w-[590px] text-[18px] leading-[28px] tracking-[-0.02em]">
                      {description}
                    </p>
                  </div>

                  <div
                    className={`flex items-center ${
                      imageFirst ? "h-[170px]" : "h-[190px]"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={imageAlt}
                      width={width}
                      height={height}
                      className="h-auto max-h-full object-contain object-left"
                    />
                  </div>
                </li>
              ),
            )}
          </ol>
        </Container>
      </Section>
    </>
  );
};

export default PrintEventsProcess;
