import { seoNeeds } from "@/config/common";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const SeoNeeds = () => {
  return (
    <>
      <Section id="seo-needs" className="py-[120px] max-sm:py-[80px]">
        <Container className="max-sm:px-[20px]">
          <SectionHeading
            className="text-center"
            title={
              <>
                SEO Audits, SEO & Migrations: <br />
                <span className="text-black/50">what do you need?</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[36px] max-sm:leading-[38px]"
          />

          <ul className="mt-[60px] flex justify-between max-sm:mt-[40px] max-sm:flex-col max-sm:gap-[40px]">
            {seoNeeds.map(({ id, title, description, cta }, index) => (
              <li
                key={id}
                className="flex w-[380px] items-stretch max-sm:w-full"
              >
                {/* Number and slash share one grid cell. The clip-path follows the
                    slash, so the number is cut off along it. Phones scale the
                    whole thing to 100 x 168. */}
                <div className="grid w-[130px] shrink-0 max-sm:w-[100px]">
                  <span className="col-start-1 row-start-1 h-[219px] w-[130px] [clip-path:polygon(0_-24px,144px_-24px,1px_218px,0_218px)] max-sm:h-[168px] max-sm:w-[100px] max-sm:[clip-path:polygon(0_-18px,111px_-18px,1px_167px,0_167px)]">
                    <span className="mt-[-12px] ml-[20px] block h-[124px] bg-[linear-gradient(180deg,rgba(48,120,255,0.4)_0%,rgba(48,120,255,0)_145.44%)] bg-clip-text text-[140px] leading-[124px] font-bold tracking-[-0.06em] text-transparent max-sm:mt-[-9px] max-sm:ml-[15px] max-sm:h-[95px] max-sm:text-[108px] max-sm:leading-[95px]">
                      {index + 1}
                    </span>
                  </span>

                  <svg
                    viewBox="0 0 130 219"
                    fill="none"
                    aria-hidden="true"
                    className="text-blue col-start-1 row-start-1 h-[219px] w-[130px] max-sm:h-[168px] max-sm:w-[100px]"
                  >
                    <path
                      d="M129 1L1 218"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div className="flex flex-col items-start justify-between pt-[26px] max-sm:min-w-0 max-sm:flex-1 max-sm:pt-[14px]">
                  <div>
                    <h3 className="ml-[20px] text-[25px] leading-[30px] font-bold tracking-[-0.06em] text-black max-sm:ml-[12px] max-sm:text-[22px] max-sm:leading-[26px]">
                      {title}
                    </h3>

                    <p className="text-text-body mt-[15px] max-w-[230px] text-[16px] leading-[21px] tracking-[-0.02em] max-sm:mt-[10px] max-sm:text-[15px] max-sm:leading-[20px]">
                      {description}
                    </p>
                  </div>

                  <div className="flex">
                    <Button
                      href={cta.href}
                      className="rounded-full bg-black px-[22px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] whitespace-nowrap text-white uppercase max-sm:mt-[16px] max-sm:px-[18px] max-sm:py-[11px] max-sm:text-[14px]"
                    >
                      {cta.label}
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default SeoNeeds;
