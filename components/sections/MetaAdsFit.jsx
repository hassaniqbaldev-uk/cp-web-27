import { metaAdsFit } from "@/config/common";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const MetaAdsFit = () => {
  return (
    <>
      <Section id="meta-ads-fit" className="py-[120px]">
        <Container>
          <div className="bg-grey/40 overflow-hidden rounded-[20px] px-[70px] pt-[80px] pb-[70px]">
            <SectionHeading
              className="text-center"
              title={
                <>
                  Where Meta Ads <br />
                  <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                    deliver, and don’t.
                  </span>
                </>
              }
              titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
            />

            <div className="mt-[60px] flex items-start rounded-[20px] bg-white py-[25px] pl-[25px] shadow-[16px_16px_150px_0px_#00000017]">
              {metaAdsFit.map(({ id, title, points, note, featured }) => (
                <div
                  key={id}
                  className={`p-[45px] ${
                    featured
                      ? "bg-orange min-h-[456px] w-[521px] shrink-0 rounded-[20px] text-white"
                      : "flex-1 text-black"
                  }`}
                >
                  <h3 className="text-[35px] leading-[42px] font-bold tracking-[-0.06em]">
                    {title}
                  </h3>

                  <ul className="mt-[12px] list-disc pl-[27px] text-[18px] leading-[39px] tracking-[-0.02em]">
                    {points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  {note && (
                    <p className="mt-[15px] text-[16px] leading-[24px] tracking-[-0.02em] text-black/50">
                      {note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default MetaAdsFit;
