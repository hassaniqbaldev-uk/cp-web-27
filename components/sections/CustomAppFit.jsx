import { customAppFit } from "@/config/common";
import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const CustomAppFit = () => {
  return (
    <>
      <Section id="custom-app-fit" className="py-[120px]">
        <Container>
          <SectionHeading
            className="text-center"
            title={
              <>
                Is custom software <br />
                <span className="text-black/50">right for your business?</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
            subtitle="We’d rather tell you now than after the invoice. Here’s when custom makes sense, and when it doesn’t."
            subtitleClassName="text-text-body mt-[20px] text-[22px] leading-[28px] tracking-[-0.02em]"
          />

          <ul className="mt-[45px] grid grid-cols-2 gap-[30px]">
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
                  className="bg-grey/30 flex flex-col rounded-[20px] p-[45px]"
                >
                  <h3 className="text-[35px] leading-[50px] font-bold tracking-[-0.07em] text-black">
                    {title}
                  </h3>

                  <ul className="mt-[25px] flex flex-col gap-[30px]">
                    {points.map(({ id: pointId, text }) => (
                      <li
                        key={pointId}
                        className="text-text-body flex items-start gap-[10px] text-[18px] leading-[23px] tracking-[-0.02em]"
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
                        className="mt-[45px] rounded-full bg-black px-[20px] py-[12px] text-[16px] font-extrabold tracking-[-0.02em] text-white uppercase"
                      >
                        {cta.label}
                      </Button>
                    </div>
                  )}

                  {image && (
                    <div className="mt-auto pt-[45px]">
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
