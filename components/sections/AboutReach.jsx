import { reachLocations } from "@/config/common";
import Image from "next/image";
import DragMarquee from "../ui/DragMarquee";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const LocationBody = ({ image, imageAlt, title, clients }) => (
  <>
    <Image
      src={image}
      alt={imageAlt}
      width={83}
      height={83}
      draggable={false}
      className="size-[83px] shrink-0 rounded-[5px] object-cover max-sm:size-[70px]"
    />

    <div>
      <h3 className="text-[18px] font-bold tracking-[-0.02em] text-black">
        {title}
      </h3>

      <p className="text-text-body mt-[5px] text-[14px] leading-[20px] tracking-[-0.02em]">
        {clients}
      </p>
    </div>
  </>
);

const AboutReach = () => {
  return (
    <>
      <Section id="reach" className="py-[120px] max-sm:py-[80px]">
        <Container className="max-sm:px-[20px]">
          <SectionHeading
            label="INTERNATIONAL WORK, UK ACCOUNTABILITY"
            title={
              <>
                <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                  Led from Manchester.{" "}
                </span>{" "}
                <Image
                  src="/images/about/bee.png"
                  alt=""
                  width={90}
                  height={72}
                  className="inline-block align-middle max-sm:hidden"
                />
                <br />
                Built by our own team.
              </>
            }
            subtitle="CreativePixels is a UK company, led by Hassan from Manchester. Our design and development team are our own employees, based in Karachi, Pakistan, and our clients are in the UK, the US and further afield. You get one UK point of contact, named people on your project, and working hours that overlap with the UK and US."
            labelClassName="text-[22px] text-center font-medium tracking-[-0.02em] text-black uppercase max-sm:text-[14px] max-sm:leading-[20px]"
            titleClassName="text-[65px] mt-[10px] text-center leading-[65px] font-extrabold tracking-[-0.07em] text-black max-sm:text-[32px] max-sm:leading-[36px]"
            subtitleClassName="text-[16px] text-text-body mt-[20px] mx-auto max-w-[960px] text-center tracking-[-0.02em] max-sm:mt-[16px] max-sm:text-[15px] max-sm:leading-[23px]"
          />

          <div className="relative mt-[65px] h-[600px] w-full max-sm:mt-[30px] max-sm:h-auto">
            <div className="h-full w-full">
              <Image
                src="/images/about/dot-map.png"
                alt=""
                width={1202}
                height={611}
                className="h-full w-full object-contain"
              />
            </div>

            <ul className="max-sm:hidden">
              {reachLocations.map(({ id, className, ...location }) => (
                <li
                  key={id}
                  className={`absolute flex w-[290px] items-center gap-[20px] rounded-[10px] bg-[#f4f4f4] p-[10px] not-last:mb-[10px] ${className}`}
                >
                  <LocationBody {...location} />
                </li>
              ))}
            </ul>
          </div>
        </Container>

        {/* Phones: the location cards run in a drag marquee under the map. */}
        <DragMarquee
          pauseOnHover
          className="mt-[24px] hidden max-sm:block"
          trackClassName="flex w-max items-stretch"
          slideClassName="flex shrink-0 pr-[10px]"
        >
          {reachLocations.map(({ id, className: _position, ...location }) => (
            <div
              key={id}
              className="flex w-[290px] items-center gap-[16px] rounded-[10px] bg-[#f4f4f4] p-[10px]"
            >
              <LocationBody {...location} />
            </div>
          ))}
        </DragMarquee>
      </Section>
    </>
  );
};

export default AboutReach;
