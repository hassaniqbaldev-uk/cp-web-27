import { growthChecks } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";

const dashedLine = {
  stroke: "#ffffff",
  strokeWidth: 2,
  strokeDasharray: "5 4",
  fill: "none",
};

const GrowthCheck = () => {
  return (
    <>
      <Section id="growth-check" className="py-[120px]">
        <Container>
          <div className="bg-blue relative overflow-hidden rounded-[30px]">
            <Image
              src="/images/services/gradient-bg-ui-ux-flow.png"
              alt=""
              fill
              sizes="1200px"
              className="pointer-events-none z-0 object-cover"
            />

            <Starfield className="absolute top-[-70px] right-[40px] z-0 h-[240px] w-[660px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

            <Starfield className="absolute right-[40px] bottom-[-70px] z-0 h-[240px] w-[660px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />

            <div className="relative z-10 flex min-h-[506px] items-center justify-between pr-[60px] pl-[67px]">
              <div className="w-[386px]">
                <SectionHeading
                  title={
                    <>
                      Has your <br />
                      website been <br />
                      left untouched?
                    </>
                  }
                  titleClassName="text-[45px] leading-[50px] font-extrabold tracking-[-0.06em] text-white"
                  subtitle="Send us the URL. We’ll run a free health check and tell you what we’d tackle first, even if we didn’t build it."
                  subtitleClassName="mt-[15px] max-w-[345px] text-[16px] leading-[21px] tracking-[-0.02em] text-white"
                />

                {/* Markup only, not wired to an API yet. */}
                <form className="mt-[30px] flex flex-col gap-[13px]">
                  <label htmlFor="growth-check-url" className="sr-only">
                    Website URL
                  </label>

                  <input
                    id="growth-check-url"
                    name="url"
                    type="text"
                    inputMode="url"
                    autoComplete="url"
                    required
                    placeholder="Website URL"
                    className="h-[55px] w-full rounded-full border border-white bg-transparent px-[25px] text-[18px] tracking-[-0.02em] text-white placeholder:text-white focus:ring-1 focus:ring-white focus:outline-none"
                  />

                  <button
                    type="submit"
                    className="flex h-[53px] w-full cursor-pointer items-center justify-center gap-[10px] rounded-full bg-white text-[18px] font-extrabold tracking-[-0.02em] whitespace-nowrap text-black uppercase"
                  >
                    Show us the campaign and page
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </button>
                </form>
              </div>

              {/* Lines, browser and labels share one grid cell. */}
              <div className="grid h-[397px] w-[625px]">
                <svg
                  viewBox="0 0 625 397"
                  aria-hidden="true"
                  className="col-start-1 row-start-1 h-[397px] w-[625px]"
                >
                  <path d="M79 118V272Q79 290 97 290H178" {...dashedLine} />
                  <path d="M447 107H525Q543 107 543 125V280" {...dashedLine} />
                </svg>

                <Image
                  src="/images/services/browser-growth-check.png"
                  alt="Example online store page in a browser"
                  width={269}
                  height={299}
                  className="col-start-1 row-start-1 mt-[49px] ml-[178px] h-[299px] w-[269px] object-contain"
                />

                {growthChecks.map(({ id, className, items }) => (
                  <ul
                    key={id}
                    className={`col-start-1 row-start-1 flex w-[158px] flex-col gap-[8px] ${className}`}
                  >
                    {items.map(
                      ({ id: itemId, icon: Icon, iconClassName, title }) => (
                        <li
                          key={itemId}
                          className="flex h-[55px] items-center gap-[10px] rounded-[15px] bg-white px-[11px]"
                        >
                          <span
                            className={`flex size-[34px] shrink-0 items-center justify-center rounded-full text-white ${iconClassName}`}
                          >
                            <Icon size={17} />
                          </span>

                          <span className="text-[12px] leading-[13px] font-medium tracking-[-0.02em] text-black">
                            {title}
                          </span>
                        </li>
                      ),
                    )}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default GrowthCheck;
