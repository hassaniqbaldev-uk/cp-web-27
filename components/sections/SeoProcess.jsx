import { seoProcess } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";

const SeoProcess = () => {
  return (
    <>
      <Section
        id="seo-process"
        className="bg-orange/10 relative overflow-hidden pt-[120px] pb-[110px] max-sm:py-[80px]"
      >
        <Image
          src="/images/services/gradient-bg-seo-process.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none z-0 object-cover"
        />

        <Starfield className="absolute bottom-[-50px] left-1/2 z-0 h-[260px] w-[1260px] -translate-x-1/2 mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

        <Container className="relative z-10 max-sm:px-[20px]">
          <SectionHeading
            className="text-center"
            title={
              <>
                How our <br className="max-sm:hidden" />
                <span className="text-orange">SEO works</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[36px] max-sm:leading-[38px]"
            subtitle="Four steps, in this order. The first month sets the baseline, and the work builds from month two."
            subtitleClassName="text-text-body mx-auto mt-[25px] max-w-[480px] text-[22px] leading-[33px] tracking-[-0.02em] max-sm:mt-[16px] max-sm:text-[16px] max-sm:leading-[24px]"
          />

          {/* Pulled up so the outer circles sit either side of the heading.
              Offsets and overlaps live in the data. On phones they zig-zag
              down in the flow instead, each one over the one above. */}
          <ul className="mt-[-115px] flex items-start justify-center max-sm:mt-[40px] max-sm:flex-col">
            {seoProcess.map(
              ({ id, icon: Icon, title, description, label, className }) => (
                <li
                  key={id}
                  className={`flex size-[348px] shrink-0 flex-col items-center rounded-full bg-white pt-[55px] text-center even:z-10 even:border even:border-white/50 even:bg-white/40 even:backdrop-blur-[10px] ${className} max-sm:relative max-sm:ml-0! max-sm:size-[260px] max-sm:pt-[36px] max-sm:not-first:-mt-[30px]! max-sm:first:mt-0! max-sm:even:z-auto max-sm:even:self-end`}
                >
                  <Icon
                    size={36}
                    className="shrink-0 text-black max-sm:size-[28px]"
                  />

                  <h3 className="mt-[22px] text-[25px] leading-[30px] font-bold tracking-[-0.05em] text-black max-sm:mt-[14px] max-sm:text-[22px] max-sm:leading-[26px]">
                    {title}
                  </h3>

                  <p className="text-text-body mt-[18px] max-w-[235px] text-[18px] leading-[23px] tracking-[-0.02em] max-sm:mt-[10px] max-sm:max-w-[190px] max-sm:text-[15px] max-sm:leading-[19px]">
                    {description}
                  </p>

                  <span className="bg-orange mt-[28px] rounded-full px-[16px] py-[2px] text-[14px] leading-[22px] tracking-[-0.02em] text-white max-sm:mt-[16px] max-sm:text-[13px]">
                    {label}
                  </span>
                </li>
              ),
            )}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default SeoProcess;
