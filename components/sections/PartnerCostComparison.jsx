import { costComparison } from "@/config/common";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const PartnerCostComparison = () => {
  return (
    <>
      <Section id="cost-comparison" className="bg-blue/10 py-[120px]">
        <Container>
          <SectionHeading
            label="Cost comparison"
            title={
              <>
                Hiring in-house compared with{" "}
                <span className="text-black/50">a partner agency.</span>
              </>
            }
            className=""
            labelClassName="text-[22px] font-medium tracking-[-0.02em] text-black uppercase"
            titleClassName="text-[85px] mt-[10px] max-w-[1000px] leading-[80px] font-extrabold tracking-[-0.07em] text-black"
          />

          <div className="mt-[80px] grid grid-cols-2 items-start gap-[30px]">
            {costComparison.map(
              ({ id, title, rows, totalLabel, totalValue, isFeatured }) => (
                <div
                  key={id}
                  className={`rounded-[20px] border border-[#CCCCCC] p-[30px] ${
                    isFeatured ? "bg-blue" : "bg-white"
                  }`}
                >
                  <h3
                    className={`text-[25px] font-bold tracking-[-0.04em] ${
                      isFeatured ? "text-white" : "text-black"
                    }`}
                  >
                    {title}
                  </h3>

                  <div
                    className={`mt-[30px] rounded-[20px] p-[30px] ${
                      isFeatured ? "bg-white" : "bg-grey/30"
                    }`}
                  >
                    <dl className="flex flex-col divide-y divide-[#CCCCCC]">
                      {rows.map(({ id: rowId, label, value }) => (
                        <div
                          key={rowId}
                          className="flex items-center justify-between gap-[20px] py-[20px]"
                        >
                          <dt className="text-text-body text-[16px] tracking-[-0.02em]">
                            {label}
                          </dt>

                          <dd className="shrink-0 text-[16px] font-bold tracking-[-0.02em] text-black">
                            {value}
                          </dd>
                        </div>
                      ))}

                      <div
                        className={`mt-[20px] flex items-center justify-between gap-[20px] rounded-[10px] px-[20px] py-[20px] ${
                          isFeatured
                            ? "bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)]"
                            : "bg-grey/60"
                        }`}
                      >
                        <dt
                          className={`text-[16px] tracking-[-0.02em] ${
                            isFeatured ? "text-white" : "text-text-body"
                          }`}
                        >
                          {totalLabel}
                        </dt>

                        <dd
                          className={`shrink-0 text-[22px] font-bold tracking-[-0.02em] ${
                            isFeatured ? "text-white" : "text-black"
                          }`}
                        >
                          {totalValue}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              ),
            )}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PartnerCostComparison;
