import { webDesignNeeds } from "@/config/common";
import Image from "next/image";
import Button from "../ui/Button";
import PhoneSlider from "../ui/PhoneSlider";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const WebDesignNeeds = () => {
  const cards = webDesignNeeds.map(
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
      <div
        key={id}
        className={`flex h-full flex-col items-center overflow-hidden rounded-[20px] pt-[45px] text-center max-sm:px-[20px] max-sm:pt-[35px] ${className}`}
      >
        <h3 className="text-[25px] leading-[30px] font-bold tracking-[-0.06em] text-black max-sm:text-[24px] max-sm:leading-[28px]">
          {title}
        </h3>

        <p className="text-text-body mt-[15px] max-w-[300px] text-[18px] leading-[23px] tracking-[-0.02em] max-sm:mt-[10px] max-sm:text-[16px] max-sm:leading-[22px]">
          {description}
        </p>

        <div className="flex">
          <Button
            href={cta.href}
            className="mt-[30px] rounded-full bg-black px-[30px] py-[14px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase max-sm:mt-[24px] max-sm:px-[24px] max-sm:py-[12px] max-sm:text-[15px]"
          >
            {cta.label}
          </Button>
        </div>

        <div className="mt-auto w-full max-sm:-mx-[20px] max-sm:w-[calc(100%+40px)]">
          <Image
            src={image}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="pointer-events-none mt-[-40px] h-auto w-full"
          />
        </div>
      </div>
    ),
  );

  return (
    <>
      <Section id="web-design-needs" className="py-[120px] max-sm:py-[80px]">
        <Container className="max-sm:px-[20px]">
          <SectionHeading
            className="text-center"
            title={
              <>
                Redesign, new site or online store: <br />
                <span className="text-black/50">what do you need?</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[36px] max-sm:leading-[38px]"
            subtitle={
              <>
                Most of our web work is redesigning sites that already exist.{" "}
                <br className="max-sm:hidden" />A redesign has to do more than
                look new.
              </>
            }
            subtitleClassName="text-text-body mt-[20px] text-[22px] leading-[33px] tracking-[-0.02em] max-sm:mt-[16px] max-sm:text-[16px] max-sm:leading-[24px]"
          />

          <ul className="mt-[60px] grid grid-cols-3 gap-[30px] max-sm:hidden">
            {cards.map((card) => (
              <li key={card.key}>{card}</li>
            ))}
          </ul>

          {/* Phones: one card at a time. */}
          <PhoneSlider className="mt-[30px] hidden max-sm:block">
            {cards}
          </PhoneSlider>
        </Container>
      </Section>
    </>
  );
};

export default WebDesignNeeds;
