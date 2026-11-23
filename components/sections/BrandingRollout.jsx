import { brandingRollout } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const BrandingRollout = () => {
  return (
    <>
      <Section
        id="branding-rollout"
        className="relative overflow-hidden py-[100px]"
      >
        <Image
          src="/images/services/gradient-bg-branding-rollout.png"
          alt=""
          fill
          className="pointer-events-none z-0 object-cover"
        />

        {/* Cards are placed absolutely (positions live in the data) around the
            centred heading, three down each side in a V. */}
        <Container className="relative z-10 h-[625px]">
          <SectionHeading
            className="absolute top-[36px] left-1/2 w-[400px] -translate-x-1/2 text-center"
            title={
              <>
                <span className="text-orange">
                  Brand <br />
                  guidelines
                </span>
                <br />
                and rollout <br />
                what you get
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          <ul>
            {brandingRollout.map(
              ({ id, icon: Icon, title, description, className }) => (
                <li
                  key={id}
                  className={`absolute flex w-[310px] flex-col items-start rounded-[15px] bg-white p-[25px] shadow-[16px_16px_124px_0px_#00000012] ${className}`}
                >
                  <Icon size={28} className="text-blue/70 shrink-0" />

                  <h3 className="mt-[15px] text-[22px] leading-[28px] font-bold tracking-[-0.05em] text-black">
                    {title}
                  </h3>

                  <p className="text-text-body mt-[10px] text-[14px] leading-[20px] tracking-[-0.02em]">
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

export default BrandingRollout;
