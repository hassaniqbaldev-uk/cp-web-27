import { ecommerceFeaturedWork, ecommerceWork } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const EcommerceWork = () => {
  const { image, imageAlt, tags, title, description, facts, cta } =
    ecommerceFeaturedWork;

  return (
    <>
      <Section id="ecommerce-work" className="py-[120px]">
        <Container>
          <SectionHeading
            title={
              <>
                <span className="text-blue">Online stores</span> <br />
                we’ve built and improved
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
            className="text-center"
          />

          <div className="mt-[55px] flex items-stretch gap-[10px]">
            <div className="relative min-h-[531px] w-[514px] shrink-0 overflow-hidden rounded-[20px]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="514px"
                className="object-cover"
              />
            </div>

            <div className="bg-grey/40 flex flex-1 flex-col items-start rounded-[20px] p-[45px]">
              <ul className="flex flex-wrap gap-[10px]">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-black/20 px-[20px] py-[10px] text-[14px] leading-[20px] font-medium tracking-[-0.02em] text-black"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <h3 className="mt-[30px] max-w-[500px] text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black">
                {title}
              </h3>

              <p className="text-text-body mt-[20px] max-w-[520px] text-[18px] leading-[26px] tracking-[-0.02em]">
                {description}
              </p>

              <dl className="mt-[30px] flex flex-wrap gap-[10px]">
                {facts.map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-[10px] rounded-full bg-white px-[20px] py-[12px] text-[14px] leading-[20px] tracking-[-0.02em]"
                  >
                    <dt className="text-black/50 uppercase">{label}</dt>
                    <dd className="font-bold text-black">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-auto flex pt-[30px]">
                <Button
                  href={cta.href}
                  className="rounded-full bg-black px-[30px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] text-white uppercase"
                >
                  {cta.label}
                </Button>
              </div>
            </div>
          </div>

          <ul className="mt-[30px] grid grid-cols-2 gap-[30px]">
            {ecommerceWork.map(
              ({ id, image, imageAlt, title, subtitle, cta }) => (
                <li key={id}>
                  <div className="relative h-[485px] overflow-hidden rounded-[20px]">
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      sizes="585px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-[20px] pt-[20px]">
                    <div>
                      <h3 className="text-[35px] leading-[42px] font-bold tracking-[-0.06em] text-black">
                        {title}
                      </h3>

                      <p className="text-text-body text-[18px] leading-[26px] tracking-[-0.02em]">
                        {subtitle}
                      </p>
                    </div>

                    <Link
                      href={cta.href}
                      className="group hover:text-dark-pink active:text-dark-pink flex shrink-0 items-center gap-[10px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase transition-colors duration-300"
                    >
                      {cta.label}

                      <ArrowUpRight
                        size={18}
                        strokeWidth={2.5}
                        className="shrink-0 transition-[rotate] duration-300 ease-out group-hover:rotate-45"
                      />
                    </Link>
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

export default EcommerceWork;
