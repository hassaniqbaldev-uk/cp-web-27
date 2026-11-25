import { wordpressFit } from "@/config/common";
import Image from "next/image";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const WordpressFit = () => {
  return (
    <>
      <Section
        id="wordpress-fit"
        className="bg-orange/10 relative overflow-hidden py-[120px]"
      >
        <Image
          src="/images/services/gradient-bg-ai-automate.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none z-0 object-cover"
        />

        <Container className="relative z-10">
          <SectionHeading
            className="text-center"
            title={
              <>
                Wordpress is a good fit, <br />
                <span className="text-black/50">and when it’s not</span>
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
          />

          <ul className="mt-[70px] grid grid-cols-2 gap-[30px]">
            {wordpressFit.map(
              ({ id, icon: Icon, title, points, note, cta, featured }) => (
                <li
                  key={id}
                  className={`flex min-h-[555px] flex-col items-start rounded-[20px] p-[45px] shadow-[0px_4px_74px_0px_#00000014] ${
                    featured ? "bg-orange text-white" : "bg-white text-black"
                  }`}
                >
                  <Icon size={56} className="ml-[-4px] shrink-0" />

                  <h3 className="mt-[45px] text-[35px] leading-[42px] font-bold tracking-[-0.06em]">
                    {title}
                  </h3>

                  <ul
                    className={`mt-[12px] list-disc pl-[33px] text-[22px] leading-[41px] tracking-[-0.02em] ${
                      featured ? "" : "text-text-body"
                    }`}
                  >
                    {points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  {note && (
                    <p className="text-text-body mt-[15px] text-[16px] leading-[24px] tracking-[-0.02em]">
                      {note}
                    </p>
                  )}

                  <div className="mt-auto flex w-full pt-[40px]">
                    <Button
                      href={cta.href}
                      className={`w-full rounded-full px-[20px] py-[13px] text-[18px] font-extrabold tracking-[-0.02em] uppercase ${
                        featured ? "bg-white text-black" : "bg-black text-white"
                      }`}
                    >
                      {cta.label}
                    </Button>
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

export default WordpressFit;
