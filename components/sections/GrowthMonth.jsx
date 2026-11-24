import { growthMonth } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";

const TICKS = [24, 18, 14, 24, 16, 24];

const Ticks = () => (
  <span aria-hidden="true" className="flex w-[37px] items-center gap-[4px]">
    {TICKS.map((height, index) => (
      <span
        key={index}
        className="w-[3px] shrink-0 rounded-full bg-black/25"
        style={{ height }}
      />
    ))}
  </span>
);

const GrowthMonth = () => {
  return (
    <>
      <Section
        id="growth-month"
        className="relative overflow-hidden py-[120px]"
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
            title={
              <>
                What a month of <br />
                <span className="text-orange">support looks like</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          {/* Each card carries its connector on the left; the row hangs out by
              one connector on both sides. */}
          <ol className="mx-[-57px] mt-[55px] flex items-center">
            {growthMonth.map(({ id, label, title, description }) => (
              <li key={id} className="flex shrink-0 items-center">
                <Ticks />

                <span className="relative z-10 mr-[-21px] flex size-[41px] shrink-0 items-center justify-center rounded-full border border-black/5 bg-white/80">
                  <span className="bg-orange size-[10px] rounded-full" />
                </span>

                <div className="flex h-[364px] w-[257px] flex-col items-start rounded-[20px] bg-white p-[40px]">
                  <span className="border-dark-pink text-dark-pink flex h-[50px] items-center rounded-full border px-[20px] text-[20px] tracking-[-0.02em] whitespace-nowrap">
                    {label}
                  </span>

                  <h3 className="text-text-body mt-[38px] text-[35px] leading-[40px] font-medium tracking-[-0.06em]">
                    {title}
                  </h3>

                  <p className="text-text-body mt-[12px] text-[18px] leading-[23px] tracking-[-0.02em]">
                    {description}
                  </p>
                </div>
              </li>
            ))}

            <li aria-hidden="true">
              <Ticks />
            </li>
          </ol>

          <div className="relative mt-[40px] flex items-center justify-between overflow-hidden rounded-[20px] bg-[linear-gradient(90deg,var(--color-orange)_0%,#FFB55E_100%)] px-[49px] py-[40px]">
            <Starfield className="absolute right-0 bottom-[-40px] z-0 h-[129px] w-[624px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

            <div className="relative z-10">
              <h3 className="text-[45px] leading-[50px] font-bold tracking-[-0.07em] text-white">
                See exactly what you’d get.
              </h3>

              <p className="mt-[10px] text-[20px] leading-[28px] font-bold tracking-[-0.02em] text-white">
                Download a sample monthly report.
              </p>
            </div>

            {/* Markup only, not wired to an API yet. */}
            <form className="relative z-10 flex w-[519px] flex-col gap-[16px]">
              <label htmlFor="growth-report-email" className="sr-only">
                Your email address
              </label>

              <input
                id="growth-report-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your email address"
                className="placeholder:text-text-body h-[61px] w-full rounded-full bg-white px-[28px] text-[18px] tracking-[-0.02em] text-black focus:ring-2 focus:ring-black focus:outline-none"
              />

              <button
                type="submit"
                className="flex h-[53px] w-full cursor-pointer items-center justify-center gap-[10px] rounded-full bg-black text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase"
              >
                Get the sample report
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default GrowthMonth;
