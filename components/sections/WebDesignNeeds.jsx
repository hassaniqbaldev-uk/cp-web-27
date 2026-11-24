import { webDesignNeeds } from "@/config/common";
import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const WebDesignNeeds = () => {
  return (
    <>
      <Section id="web-design-needs" className="py-[120px]">
        <Container>
          <SectionHeading
            className="text-center"
            title={
              <>
                Redesign, new site or online store: <br />
                <span className="text-black/50">what do you need?</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
            subtitle={
              <>
                Most of our web work is redesigning sites that already exist.{" "}
                <br />A redesign has to do more than look new.
              </>
            }
            subtitleClassName="text-text-body mt-[20px] text-[22px] leading-[33px] tracking-[-0.02em]"
          />

          <ul className="mt-[60px] grid grid-cols-3 gap-[30px]">
            {webDesignNeeds.map(
              ({
                id,
                title,
                description,
                cta,
                image,
                imageWidth,
                imageHeight,
                imageAlt,
                className,
              }) => (
                <li
                  key={id}
                  className={`flex flex-col items-center overflow-hidden rounded-[20px] pt-[45px] text-center ${className}`}
                >
                  <h3 className="text-[25px] leading-[30px] font-bold tracking-[-0.06em] text-black">
                    {title}
                  </h3>

                  <p className="text-text-body mt-[15px] max-w-[300px] text-[18px] leading-[23px] tracking-[-0.02em]">
                    {description}
                  </p>

                  <div className="flex">
                    <Button
                      href={cta.href}
                      className="mt-[30px] rounded-full bg-black px-[30px] py-[14px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase"
                    >
                      {cta.label}
                    </Button>
                  </div>

                  <div className="mt-auto w-full">
                    <Image
                      src={image}
                      alt={imageAlt}
                      width={imageWidth}
                      height={imageHeight}
                      className="pointer-events-none mt-[-40px] h-auto w-full"
                    />
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

export default WebDesignNeeds;
