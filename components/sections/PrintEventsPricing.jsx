import { printEventsPricing } from "@/config/common";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const columns = ["Piece", "Price", "Notes"];

const PrintEventsPricing = () => {
  return (
    <>
      <Section id="print-events-pricing" className="overflow-hidden pt-[120px]">
        <Container>
          <SectionHeading
            className="text-center"
            title={
              <>
                How much does <br />
                <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                  print design cost?
                </span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
            subtitle="Print design from £150 a piece, or monthly from £300."
            subtitleClassName="text-text-body mt-[20px] text-[22px] leading-[28px] tracking-[-0.02em]"
          />

          <div className="mt-[60px] rounded-[30px] bg-white p-[20px] shadow-[16px_16px_150px_0px_#00000017]">
            <table className="w-full table-fixed border-separate border-spacing-0 text-left">
              <colgroup>
                <col className="w-[395px]" />
                <col className="w-[370px]" />
                <col />
              </colgroup>

              <thead>
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="pb-[8px] first:pr-[24px] last:pl-[24px]"
                    >
                      <span className="flex h-[76px] items-center rounded-[15px] bg-black px-[30px] text-[35px] leading-[42px] font-bold tracking-[-0.06em] text-white">
                        {column}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* The first column's cells share one gradient panel. */}
              <tbody>
                {printEventsPricing.map(
                  ({ id, piece, price, suffix, notes }) => (
                    <tr key={id} className="group">
                      <th scope="row" className="h-[90px] p-0 pr-[24px]">
                        <span className="flex h-full bg-[linear-gradient(90deg,#000000_0%,#5F5F5F_100%)] px-[30px] group-first:rounded-t-[15px] group-last:rounded-b-[15px]">
                          <span className="flex h-[90px] w-full items-center border-b border-white/40 text-[20px] leading-[26px] font-bold tracking-[-0.02em] text-white group-last:border-b-0">
                            {piece}
                          </span>
                        </span>
                      </th>

                      <td className="border-r border-b border-black/20 px-[30px] text-[22px] leading-[30px] tracking-[-0.02em] text-black group-last:border-b-0">
                        From <span className="text-blue">{price}</span> {suffix}
                      </td>

                      <td className="text-text-body border-b border-black/20 pr-[20px] pl-[54px] text-[16px] leading-[23px] tracking-[-0.02em] group-last:border-b-0">
                        {notes}
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>

          <p className="text-text-body mt-[60px] text-center text-[22px] leading-[28px] tracking-[-0.02em]">
            UK agencies charge £75 to £150+ an hour for design. Our prices are
            fixed per piece.
          </p>
        </Container>
      </Section>
    </>
  );
};

export default PrintEventsPricing;
