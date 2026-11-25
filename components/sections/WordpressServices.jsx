import { wordpressServices } from "@/config/common";
import { Container } from "../ui/Container";
import DragMarquee from "../ui/DragMarquee";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const WordpressServices = () => {
  return (
    <>
      <Section id="wordpress-services" className="overflow-hidden py-[120px]">
        <Container>
          <SectionHeading
            className="text-center"
            title={
              <>
                Our Wordpress <span className="text-black/50">services</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />
        </Container>

        <DragMarquee
          pauseOnHover
          className="mt-[60px]"
          trackClassName="flex w-max items-stretch"
          slideClassName="shrink-0 pr-[30px]"
        >
          {wordpressServices.map(
            ({
              id,
              icon: Icon,
              iconClassName,
              title,
              description,
              className,
            }) => (
              <div
                key={id}
                className={`flex min-h-[507px] w-[380px] flex-col rounded-[20px] p-[30px] ${className}`}
              >
                <span className="flex h-[236px] w-full shrink-0 items-center justify-center rounded-[15px] bg-white">
                  {/* The mask breaks the icon up into small dots. */}
                  <Icon
                    size={160}
                    className={`mask-[radial-gradient(circle,#000_50%,transparent_62%)] mask-size-[4px_4px] ${iconClassName}`}
                  />
                </span>

                <div className="px-[20px] pt-[30px] pb-[10px]">
                  <h3 className="text-[35px] leading-[42px] font-bold tracking-[-0.06em] whitespace-pre-line text-black">
                    {title}
                  </h3>

                  <p className="text-text-body mt-[18px] text-[16px] leading-[23px] tracking-[-0.02em]">
                    {description}
                  </p>
                </div>
              </div>
            ),
          )}
        </DragMarquee>
      </Section>
    </>
  );
};

export default WordpressServices;
