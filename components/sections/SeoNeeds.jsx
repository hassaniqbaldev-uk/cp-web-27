import { seoNeeds } from "@/config/common";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const SeoNeeds = () => {
  return (
    <>
      <Section id="seo-needs" className="py-[120px]">
        <Container>
          <SectionHeading
            className="text-center"
            title={
              <>
                SEO Audits, SEO & Migrations: <br />
                <span className="text-black/50">what do you need?</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          <ul className="mt-[60px] flex justify-between">
            {seoNeeds.map(({ id, title, description, cta }, index) => (
              <li key={id} className="flex w-[380px] items-stretch">
                {/* Number and slash share one grid cell. The clip-path follows the
                    slash, so the number is cut off along it. */}
                <div className="grid w-[130px] shrink-0">
                  <span className="col-start-1 row-start-1 h-[219px] w-[130px] [clip-path:polygon(0_-24px,144px_-24px,1px_218px,0_218px)]">
                    <span className="mt-[-12px] ml-[20px] block h-[124px] bg-[linear-gradient(180deg,rgba(48,120,255,0.4)_0%,rgba(48,120,255,0)_145.44%)] bg-clip-text text-[140px] leading-[124px] font-bold tracking-[-0.06em] text-transparent">
                      {index + 1}
                    </span>
                  </span>

                  <svg
                    viewBox="0 0 130 219"
                    fill="none"
                    aria-hidden="true"
                    className="text-blue col-start-1 row-start-1 h-[219px] w-[130px]"
                  >
                    <path
                      d="M129 1L1 218"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div className="flex flex-col items-start justify-between pt-[26px]">
                  <div>
                    <h3 className="ml-[20px] text-[25px] leading-[30px] font-bold tracking-[-0.06em] text-black">
                      {title}
                    </h3>

                    <p className="text-text-body mt-[15px] max-w-[230px] text-[16px] leading-[21px] tracking-[-0.02em]">
                      {description}
                    </p>
                  </div>

                  <div className="flex">
                    <Button
                      href={cta.href}
                      className="rounded-full bg-black px-[22px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] whitespace-nowrap text-white uppercase"
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
