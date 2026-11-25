import { paidMediaChannels } from "@/config/common";
import { FaMeta } from "react-icons/fa6";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import GoogleAdsLogo from "../ui/GoogleAdsLogo";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const MetaLogo = () => (
  <FaMeta size={80} role="img" aria-label="Meta" className="text-[#0081FB]" />
);

const logos = { google: GoogleAdsLogo, meta: MetaLogo };

const PaidMediaChannels = () => {
  return (
    <>
      <Section id="paid-media-channels" className="py-[120px]">
        <Container>
          <SectionHeading
            className="text-center"
            title={
              <>
                <span className="text-dark-pink">Google,</span>{" "}
                <span className="text-blue">Meta</span> or Both?
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          <ul className="mt-[65px] grid grid-cols-3 gap-[30px]">
            {paidMediaChannels.map(
              ({ id, logos: names, title, description, cta }) => (
                <li
                  key={id}
                  className="bg-grey/50 flex min-h-[547px] flex-col items-center rounded-[20px] px-[40px] py-[50px] text-center"
                >
                  <div className="flex gap-[12px]">
                    {names.map((name) => {
                      const Logo = logos[name];

                      return (
                        <span
                          key={name}
                          className="flex size-[134px] items-center justify-center rounded-[20px] bg-white"
                        >
                          <Logo />
                        </span>
                      );
                    })}
                  </div>

                  <h3 className="mt-[38px] text-[45px] leading-[50px] font-bold tracking-[-0.06em] whitespace-nowrap text-black">
                    {title}
                  </h3>

                  <p className="text-text-body mt-[20px] max-w-[281px] text-[18px] leading-[28px] tracking-[-0.02em]">
                    {description}
                  </p>

                  <div className="mt-auto flex pt-[30px]">
                    <Button
                      href={cta.href}
                      className="rounded-full bg-black px-[30px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] whitespace-nowrap text-white uppercase"
                    >
                      {cta.label}
                    </Button>
                  </div>
                </li>
              ),
            )}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default PaidMediaChannels;
