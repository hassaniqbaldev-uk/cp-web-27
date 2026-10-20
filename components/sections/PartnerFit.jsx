import { partnerFit } from "@/config/common";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";

const PartnerFit = () => {
  return (
    <>
      <Section
        id="partner-fit"
        className="relative overflow-hidden bg-black py-[120px]"
      >
        <div className="absolute top-0 left-1/2 h-full w-full max-w-[1440px] -translate-x-1/2">
          <Starfield className="absolute bottom-[-50px] left-1/2 z-0 h-[200px] w-[770px] -translate-x-1/2 mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />
        </div>

        <Container className="relative z-10">
          <SectionHeading
            label="Is it a good fit?"
            title={
              <>
                When it is a good fit, <br />
                <span className="text-white/50">and when we will say no.</span>
              </>
            }
            labelClassName="text-[22px] text-center font-medium tracking-[-0.02em] text-white uppercase"
            titleClassName="text-[85px] mt-[10px] text-center leading-[80px] font-extrabold tracking-[-0.07em] text-white"
          />

          <div className="mt-[80px] grid grid-cols-2 items-start gap-[30px]">
            {partnerFit.map(
              ({ id, icon: Icon, title, points, note, isPositive }) => (
                <div key={id} className={isPositive ? "" : "mt-[30px]"}>
                  <div className="group rounded-[20px] bg-[#454545] p-[45px] transition duration-300 hover:bg-white hover:shadow-[0px_4px_84px_0px_#FFFFFFCC] active:bg-white active:shadow-[0px_4px_84px_0px_#FFFFFFCC]">
                    <Icon
                      size={30}
                      strokeWidth={2}
                      className="shrink-0 text-white transition-colors duration-300 group-hover:text-black group-active:text-black"
                    />

                    <h3 className="mt-[30px] text-[25px] font-bold tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-black group-active:text-black">
                      {title}
                    </h3>

                    <ul className="mt-[20px] flex flex-col gap-[10px]">
                      {points.map((point) => (
                        <li key={point} className="flex items-start gap-[10px]">
                          <span className="mt-[10px] size-[4px] shrink-0 rounded-full bg-white transition-colors duration-300 group-hover:bg-black group-active:bg-black" />

                          <span className="text-[16px] leading-[24px] tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-black group-active:text-black">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {note && (
                      <p className="group-hover:text-text-body group-active:text-text-body mt-[30px] text-[14px] leading-[20px] tracking-[-0.02em] text-white/60 transition-colors duration-300">
                        {note}
                      </p>
                    )}
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

export default PartnerFit;
