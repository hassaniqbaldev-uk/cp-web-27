import { metaAdsProcess } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const MetaAdsProcess = () => {
  return (
    <>
      <Section
        id="meta-ads-process"
        className="relative overflow-hidden py-[120px]"
      >
        <Image
          src="/images/services/gradient-bg-web-design-case-studies.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none z-0 object-cover"
        />

        <Container className="relative z-10">
          <SectionHeading
            className="text-center"
            title={
              <>
                Offer, creative, <br />
                <span className="text-black/50">landing page, follow-up.</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          <ol className="mt-[60px] grid grid-cols-2 gap-[34px]">
            {metaAdsProcess.map(({ id, title, description }, index) => {
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

                  <div className="ml-[28px] flex min-h-[203px] flex-1 flex-col justify-center rounded-[20px] bg-white py-[25px] pr-[25px] pl-[38px]">
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
        </Container>
      </Section>
    </>
  );
};

export default MetaAdsProcess;
