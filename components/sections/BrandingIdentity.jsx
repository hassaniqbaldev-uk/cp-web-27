import { brandingIdentityItems } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import DragMarquee from "../ui/DragMarquee";
import Section from "../ui/Section";

const IdentityVisual = ({ item }) => {
  if (item.type === "typography") {
    return (
      <div className="flex flex-col items-center">
        <span className="text-[180px] leading-[150px] font-bold tracking-[-0.06em] text-black max-sm:text-[130px] max-sm:leading-[110px]">
          Aa
        </span>

        <span className="mt-[20px] text-[16px] tracking-[-0.02em] text-black max-sm:mt-[14px] max-sm:text-[14px]">
          abcdefghijklmnopqrstuvwxyz
        </span>
      </div>
    );
  }

  if (item.type === "palette") {
    return (
      <ul className="flex w-full flex-col gap-[15px] max-sm:gap-[12px]">
        {item.colours.map(({ id, hex, className }) => (
          <li
            key={id}
            className={`rounded-full py-[18px] text-center text-[16px] font-semibold tracking-[-0.02em] max-sm:py-[13px] ${className}`}
          >
            {hex}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Image
      src={item.image}
      alt={item.imageAlt}
      width={item.imageWidth}
      height={item.imageHeight}
      className="h-[240px] w-auto object-contain max-sm:h-[180px]"
    />
  );
};

const BrandingIdentity = () => {
  return (
    <>
      <Section
        id="branding-identity"
        className="overflow-hidden py-[120px] max-sm:py-[80px]"
      >
        <Container className="max-sm:px-[20px]">
          <h2 className="text-center font-extrabold tracking-[-0.06em] text-black">
            <span className="block text-[65px] leading-[65px] max-sm:text-[36px] max-sm:leading-[38px]">
              What&apos;s in a
            </span>

            <span className="mr-[-0.06em] block bg-[linear-gradient(180deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0)_108.38%)] bg-clip-text pr-[0.06em] text-[170px] leading-[170px] text-transparent max-sm:text-[46px] max-sm:leading-[50px]">
              brand identity
            </span>
          </h2>
        </Container>

        <DragMarquee
          pauseOnHover
          className="mt-[20px] max-sm:mt-[30px]"
          trackClassName="flex w-max items-stretch"
          slideClassName="shrink-0 pr-[30px] max-sm:pr-[16px]"
        >
          {brandingIdentityItems.map((item) => (
            <div
              key={item.id}
              className="bg-grey/40 flex h-[490px] w-[380px] flex-col items-center rounded-[20px] px-[40px] pt-[45px] pb-[40px] text-center max-sm:h-[400px] max-sm:w-[280px] max-sm:px-[24px] max-sm:pt-[30px] max-sm:pb-[30px]"
            >
              <h3 className="text-[35px] leading-[40px] font-bold tracking-[-0.06em] text-black max-sm:text-[26px] max-sm:leading-[30px]">
                {item.title}
              </h3>

              <p className="text-text-body mt-[15px] max-w-[260px] text-[16px] leading-[22px] tracking-[-0.02em] max-sm:mt-[10px] max-sm:text-[15px] max-sm:leading-[21px]">
                {item.description}
              </p>

              <div className="mt-auto flex w-full justify-center">
                <IdentityVisual item={item} />
              </div>
            </div>
          ))}
        </DragMarquee>
      </Section>
    </>
  );
};

export default BrandingIdentity;
