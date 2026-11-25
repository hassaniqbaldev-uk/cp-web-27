import { webflowFit } from "@/config/common";
import Image from "next/image";
import Link from "next/link";
import { LuCircleCheckBig } from "react-icons/lu";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const WebflowFit = () => {
  return (
    <>
      <Section
        id="webflow-fit"
        className="bg-grey/40 overflow-hidden py-[120px]"
      >
        <Container>
          <SectionHeading
            className="text-center"
            title={
              <>
                Webflow, or something <br />
                <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                  else for your next website?
                </span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          {/* The shadows sit behind both cards so one never tints the other. */}
          <ul className="isolate mt-[65px] grid grid-cols-2 gap-[30px]">
            {webflowFit.map(
              ({
                id,
                title,
                points,
                image,
                imageAlt,
                className,
                iconClassName,
              }) => (
                <li
                  key={id}
                  className={`relative flex min-h-[671px] flex-col rounded-[20px] px-[60px] pt-[70px] pb-[62px] before:absolute before:inset-0 before:-z-10 before:rounded-[20px] ${className}`}
                >
                  <h3 className="text-[45px] leading-[50px] font-bold tracking-[-0.06em] whitespace-nowrap">
                    {title}
                  </h3>

                  <ul className="mt-[26px] flex flex-col gap-[14px]">
                    {points.map(({ text, link }) => (
                      <li
                        key={text}
                        className="flex items-start gap-[14px] text-[18px] leading-[25px] tracking-[-0.02em] whitespace-nowrap"
                      >
                        <LuCircleCheckBig
                          size={20}
                          className={`mt-[2px] shrink-0 ${iconClassName}`}
                        />

                        <span>
                          {text}
                          {link && (
                            <>
                              {" "}
                              <Link
                                href={link.href}
                                className="text-blue underline underline-offset-2 hover:no-underline"
                              >
                                {link.label}
                              </Link>
                            </>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Image
                    src={image}
                    alt={imageAlt}
                    width={464}
                    height={253}
                    className="mt-auto h-auto w-[464px]"
                  />
                </li>
              ),
            )}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default WebflowFit;
