import { reachLocations } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const AboutReach = () => {
  return (
    <>
      <Section id="reach" className="py-[120px]">
        <Container>
          <SectionHeading
            label="International work, UK accountability"
            title={
              <>
                <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                  Roots in Manchester.
                </span>{" "}
                <Image
                  src="/images/about/bee.png"
                  alt=""
                  width={90}
                  height={72}
                  className="inline-block align-middle"
                />
                <br />
                Clients in three time zones.
              </>
            }
            subtitle="CreativePixels is UK-based with roots in Manchester and works with businesses across the UK, US and internationally. Remote delivery is normal for us, but projects still have clear ownership, regular communication and named people responsible for the work."
            labelClassName="text-[22px] text-center font-medium tracking-[-0.02em] text-black uppercase"
            titleClassName="text-[85px] mt-[10px] text-center leading-[80px] font-extrabold tracking-[-0.07em] text-black"
            subtitleClassName="text-[16px] text-text-body mt-[20px] mx-auto max-w-[1000px] text-center tracking-[-0.02em]"
          />

          <div className="relative mt-[65px] h-[600px] w-full">
            <div className="h-full w-full">
              <Image
                src="/images/about/dot-map.png"
                alt=""
                width={1202}
                height={611}
                className="h-full w-full object-contain"
              />
            </div>

            <ul>
              {reachLocations.map(
                ({ id, image, imageAlt, title, clients, className }) => (
                  <li
                    key={id}
                    className={`absolute flex w-[290px] items-center gap-[20px] rounded-[10px] bg-[#f4f4f4] p-[10px] not-last:mb-[10px] ${className}`}
                  >
                    <Image
                      src={image}
                      alt={imageAlt}
                      width={83}
                      height={83}
                      className="size-[83px] shrink-0 rounded-[5px] object-cover"
                    />

                    <div>
                      <h3 className="text-[18px] font-bold tracking-[-0.02em] text-black">
                        {title}
                      </h3>

                      <p className="text-text-body mt-[5px] text-[14px] leading-[20px] tracking-[-0.02em]">
                        {clients}
                      </p>
                    </div>
                  </li>
                ),
              )}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutReach;
