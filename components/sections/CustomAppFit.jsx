import { customAppFit } from "@/config/common";
import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const CustomAppFit = () => {
  return (
    <>
      <Section id="custom-app-fit" className="py-[120px] max-sm:py-[80px]">
        <Container className="max-sm:px-[20px]">
          <SectionHeading
            className="text-center"
            title={
              <>
                Is custom software <br />
                <span className="text-black/50">right for your business?</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[30px] max-sm:leading-[32px]"
            subtitle="We’d rather tell you now than after the invoice. Here’s when custom makes sense, and when it doesn’t."
            subtitleClassName="text-text-body mt-[20px] text-[22px] leading-[28px] tracking-[-0.02em] max-sm:mt-[16px] max-sm:text-[16px] max-sm:leading-[24px]"
          />

          <ul className="mt-[45px] grid grid-cols-2 gap-[30px] max-sm:mt-[30px] max-sm:grid-cols-1 max-sm:gap-[16px]">
            {customAppFit.map(
              ({
                id,
                title,
                icon: Icon,
                iconClassName,
                points,
                cta,
                image,
                imageWidth,
                imageHeight,
                imageAlt,
              }) => (
                <li
                  key={id}
                  className="bg-grey/30 flex flex-col rounded-[20px] p-[45px] max-sm:p-[24px]"
                >
                  <h3 className="text-[35px] leading-[50px] font-bold tracking-[-0.07em] text-black max-sm:text-[26px] max-sm:leading-[30px]">
                    {title}
                  </h3>

                  <ul className="mt-[25px] flex flex-col gap-[30px] max-sm:mt-[20px] max-sm:gap-[16px]">
                    {points.map(({ id: pointId, text }) => (
                      <li
                        key={pointId}
                        className="text-text-body flex items-start gap-[10px] text-[18px] leading-[23px] tracking-[-0.02em] max-sm:text-[16px] max-sm:leading-[22px]"
                      >
                        <Icon
                          size={16}
                          className={`mt-[4px] shrink-0 ${iconClassName}`}
                        />
                        {text}
                      </li>
                    ))}
                  </ul>

                  {cta && (
                    <div className="flex">
                      <Button
                        href={cta.href}
                        className="mt-[45px] rounded-full bg-black px-[20px] py-[12px] text-[16px] font-extrabold tracking-[-0.02em] text-white uppercase max-sm:mt-[30px] max-sm:text-[15px]"
                      >
                        {cta.label}
                      </Button>
                    </div>
                  )}

                  {image && (
                    <div className="mt-auto pt-[45px] max-sm:pt-[30px]">
                      <Image
                        src={image}
                        alt={imageAlt}
                        width={imageWidth}
                        height={imageHeight}
                        className="h-auto w-full"
                      />
                    </div>
                  )}
                </li>
              ),
            )}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default CustomAppFit;
