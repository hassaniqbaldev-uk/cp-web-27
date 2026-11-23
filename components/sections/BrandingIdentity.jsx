import { brandingIdentityItems } from "@/config/common";
import Image from "next/image";
import { Container } from "../ui/Container";
import DragMarquee from "../ui/DragMarquee";
import Section from "../ui/Section";

const IdentityVisual = ({ item }) => {
  if (item.type === "typography") {
    return (
      <div className="flex flex-col items-center">
        <span className="text-[180px] leading-[150px] font-bold tracking-[-0.06em] text-black">
          Aa
        </span>

        <span className="mt-[20px] text-[16px] tracking-[-0.02em] text-black">
          abcdefghijklmnopqrstuvwxyz
        </span>
      </div>
    );
  }

  if (item.type === "palette") {
    return (
      <ul className="flex w-full flex-col gap-[15px]">
        {item.colours.map(({ id, hex, className }) => (
          <li
            key={id}
            className={`rounded-full py-[18px] text-center text-[16px] font-semibold tracking-[-0.02em] ${className}`}
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
      className="h-[240px] w-auto object-contain"
    />
  );
};

const BrandingIdentity = () => {
  return (
    <>
      <Section id="branding-identity" className="overflow-hidden py-[120px]">
        <Container>
          <h2 className="text-center font-extrabold tracking-[-0.06em] text-black">
            <span className="block text-[65px] leading-[65px]">
              What&apos;s in a
            </span>

            <span className="mr-[-0.06em] block bg-[linear-gradient(180deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0)_108.38%)] bg-clip-text pr-[0.06em] text-[170px] leading-[170px] text-transparent">
              brand identity
            </span>
          </h2>
        </Container>

        <DragMarquee
          pauseOnHover
          className="mt-[20px]"
          trackClassName="flex w-max items-stretch"
          slideClassName="shrink-0 pr-[30px]"
        >
          {brandingIdentityItems.map((item) => (
            <div
              key={item.id}
              className="bg-grey/40 flex h-[490px] w-[380px] flex-col items-center rounded-[20px] px-[40px] pt-[45px] pb-[40px] text-center"
            >
              <h3 className="text-[35px] leading-[40px] font-bold tracking-[-0.06em] text-black">
                {item.title}
              </h3>

              <p className="text-text-body mt-[15px] max-w-[260px] text-[16px] leading-[22px] tracking-[-0.02em]">
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
