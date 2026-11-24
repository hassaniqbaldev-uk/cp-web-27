import { croNeeds } from "@/config/common";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const CroNeeds = () => {
  return (
    <>
      <Section id="cro-needs" className="py-[120px]">
        <Container>
          <SectionHeading
            className="text-center"
            title={
              <>
                CRO review, ongoing CRO or a <br />
                checkout fix:{" "}
                <span className="text-black/50">what do you need?</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
            subtitle={
              <>
                Everyone has an opinion on why a page doesn’t convert. We’d
                rather watch the recordings, read the <br />
                form drop-off and use the page on a phone first.
              </>
            }
            subtitleClassName="text-text-body mt-[25px] text-[22px] leading-[33px] tracking-[-0.02em]"
          />

          <ul className="mt-[60px] flex items-start justify-between">
            {croNeeds.map(
              ({ id, icon: Icon, title, description, className }) => (
                <li
                  key={id}
                  className={`group bg-grey/60 hover:bg-dark-pink flex min-h-[347px] w-[380px] flex-col items-start rounded-[20px] p-[45px] text-black transition-colors duration-300 ease-out hover:text-white ${className}`}
                >
                  <Icon
                    size={50}
                    strokeWidth={1.5}
                    className="text-dark-pink transition-colors duration-300 ease-out group-hover:text-white"
                  />

                  <h3 className="mt-[50px] text-[35px] leading-[35px] font-bold tracking-[-0.07em] whitespace-pre-line">
                    {title}
                  </h3>

                  <p className="text-text-body mt-[20px] text-[18px] leading-[23px] tracking-[-0.02em] transition-colors duration-300 ease-out group-hover:text-white">
                    {description}
                  </p>
                </li>
              ),
            )}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default CroNeeds;
