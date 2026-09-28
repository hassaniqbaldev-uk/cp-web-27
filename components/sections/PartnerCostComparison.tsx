import { costComparison } from "@/config/common";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const PartnerCostComparison = () => {
  return (
    <>
      <Section
        id="cost-comparison"
        className="bg-blue/10 py-3xl max-425:py-xl max-425:px-[3rem]"
      >
        <Container>
          <SectionHeading
            label="Cost comparison"
            title={
              <>
                Hiring in-house compared with{" "}
                <span className="text-black/50">a partner agency.</span>
              </>
            }
            className="max-425:text-center"
            labelClassName="text-body-01 max-425:text-[1.4rem] font-medium tracking-[-0.02em] text-black uppercase"
            titleClassName="text-heading-02 max-425:mx-auto max-425:max-w-[30rem] max-425:text-[4.5rem] max-425:leading-[4.5rem] mt-xs max-w-[100rem] leading-[8rem] font-extrabold tracking-[-0.07em] text-black"
          />

          <div className="gap-md max-425:mt-lg max-425:grid-cols-1 mt-2xl grid grid-cols-2 items-start">
            {costComparison.map(
              ({ id, title, rows, totalLabel, totalValue, isFeatured }) => (
                <div
                  key={id}
                  className={`p-md max-425:p-sm rounded-md border border-[#CCCCCC] ${
                    isFeatured ? "bg-blue" : "bg-white"
                  }`}
                >
                  {/* h3, since the section heading above is the h2. */}
                  <h3
                    className={`text-subheading-01 max-425:text-[2rem] font-bold tracking-[-0.04em] ${
                      isFeatured ? "text-white" : "text-black"
                    }`}
                  >
                    {title}
                  </h3>

                  <div
                    className={`p-md mt-md max-425:p-sm max-425:mt-sm rounded-md ${
                      isFeatured ? "bg-white" : "bg-grey/30"
                    }`}
                  >
                    {/* A description list, so each figure is tied to the thing
                        it is the cost of rather than sitting beside it. */}
                    <dl className="flex flex-col divide-y divide-[#CCCCCC]">
                      {rows.map(({ id: rowId, label, value }) => (
                        <div
                          key={rowId}
                          className="gap-sm max-425:py-[1.4rem] py-sm flex items-center justify-between"
                        >
                          <dt className="text-body-03 max-425:text-[1.4rem] text-text-body tracking-[-0.02em]">
                            {label}
                          </dt>

                          {/* Free to wrap at 425, where the longer values no
                              longer fit beside their label on one line. */}
                          <dd className="text-body-03 max-425:text-[1.4rem] max-425:shrink max-425:text-right shrink-0 font-bold tracking-[-0.02em] text-black">
                            {value}
                          </dd>
                        </div>
                      ))}

                      {/* The line the column exists to make, so it sits apart
                          from the rows rather than as another one of them. */}
                      <div
                        className={`gap-sm px-sm py-sm max-425:px-[1.4rem] max-425:py-[1.4rem] mt-sm flex items-center justify-between rounded-sm ${
                          isFeatured
                            ? "bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)]"
                            : "bg-grey/60"
                        }`}
                      >
                        <dt
                          className={`text-body-03 max-425:text-[1.4rem] tracking-[-0.02em] ${
                            isFeatured ? "text-white" : "text-text-body"
                          }`}
                        >
                          {totalLabel}
                        </dt>

                        <dd
                          className={`text-body-01 max-425:text-[1.8rem] max-425:shrink max-425:text-right shrink-0 font-bold tracking-[-0.02em] ${
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
