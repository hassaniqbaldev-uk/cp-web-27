import { wordpressProcess } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";

const WordpressProcess = () => {
  return (
    <>
      <Section id="wordpress-process" className="py-[120px]">
        <Container>
          <div className="relative min-h-[880px] overflow-hidden rounded-[30px] bg-[radial-gradient(46%_52%_at_50%_90%,rgba(47,121,255,0.75)_0%,rgba(47,121,255,0.5)_35%,rgba(47,121,255,0.14)_75%,rgba(47,121,255,0)_100%),linear-gradient(180deg,#EAF2FF_0%,#D3E3FF_100%)] pt-[100px] pb-[118px]">
            <Starfield className="absolute bottom-[-20px] left-1/2 z-0 h-[222px] w-[1071px] -translate-x-1/2 mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

            <SectionHeading
              className="relative z-10 text-center"
              title={
                <>
                  How we build your <br />
                  <span className="text-blue">Wordpress site</span>
                </>
              }
              titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
            />

            {/* Logo, arc and steps share one grid cell so the numbers sit on the arc. */}
            <div className="relative z-10 mt-[66px] grid">
              <svg
                viewBox="0 0 456 260"
                width={456}
                height={260}
                fill="none"
                aria-hidden="true"
                className="col-start-1 row-start-1 mt-[122px] justify-self-center"
              >
                <defs>
                  <linearGradient
                    id="wordpress-process-arc"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop stopColor="var(--color-blue)" stopOpacity="0.35" />
                    <stop offset="1" stopColor="var(--color-blue)" />
                  </linearGradient>
                </defs>

                <path
                  d="M3.9 5A225 225 0 1 0 452.1 5"
                  stroke="url(#wordpress-process-arc)"
                  strokeWidth="5"
                />
              </svg>

              <Image
                src="/images/services/wordpress-icon-web-design-hero.png"
                alt=""
                width={298}
                height={298}
                className="col-start-1 row-start-1 mt-[-4px] size-[298px] justify-self-center rounded-full"
              />

              <ol className="col-start-1 row-start-1 grid grid-cols-2 gap-y-[98px]">
                {wordpressProcess.map(
                  (
                    {
                      id,
                      title,
                      description,
                      className,
                      cardClassName,
                      numberClassName,
                    },
                    index,
                  ) => (
                    <li key={id} className={`flex items-start ${className}`}>
                      <div
                        className={`flex min-h-[184px] flex-col items-center justify-center rounded-[20px] bg-white px-[28px] py-[25px] text-center ${cardClassName}`}
                      >
                        <h3 className="text-[20px] leading-[23px] font-bold tracking-[-0.05em] whitespace-pre-line text-black">
                          {title}
                        </h3>

                        <p className="text-text-body mt-[14px] text-[16px] leading-[21px] tracking-[-0.02em]">
                          {description}
                        </p>
                      </div>

                      <span
                        className={`bg-blue flex size-[85px] shrink-0 items-center justify-center rounded-full text-[35px] leading-[35px] font-bold tracking-[-0.06em] text-white ${numberClassName}`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </li>
                  ),
                )}
              </ol>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default WordpressProcess;
