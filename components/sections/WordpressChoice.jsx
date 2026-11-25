import Image from "next/image";
import { MdFormatQuote } from "react-icons/md";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const WordpressChoice = () => {
  return (
    <>
      <Section id="wordpress-choice" className="py-[120px]">
        <Container>
          <SectionHeading
            title={
              <>
                WordPress is the right choice <br />
                for many sites.
              </>
            }
            titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
            className="text-center"
          />

          {/* The text and portrait share one grid cell so the portrait overlaps the quote. */}
          <div className="mt-[60px] grid rounded-[20px] bg-[linear-gradient(112deg,var(--color-blue)_44%,#D2DAE8_78%)]">
            <div className="col-start-1 row-start-1 px-[50px] pt-[45px] pb-[44px]">
              <p className="max-w-[745px] text-[22px] leading-[32px] tracking-[-0.02em] text-white">
                It suits content-led business sites, WooCommerce stores and
                teams who edit every week. It doesn’t suit a bespoke application
                workflow, and we’ll say so. When it fits, we build it custom,
                keep it fast, and hand it over so your team can run it.
              </p>

              <figure className="mt-[30px] flex min-h-[140px] w-[810px] items-start gap-[25px] rounded-[15px] bg-white p-[30px]">
                <MdFormatQuote
                  viewBox="5 7 14 10"
                  aria-hidden="true"
                  className="text-blue h-[36px] w-[50px] shrink-0 rotate-180"
                />

                <div>
                  <blockquote className="max-w-[590px] text-[16px] leading-[21px] font-bold tracking-[-0.02em] text-black">
                    “The right platform depends on what you need it to do. Where
                    Wordpress fits, we build it fast, keep it flexible, and make
                    it easy for your team to use.”
                  </blockquote>

                  <figcaption className="text-blue mt-[18px] text-[16px] leading-[21px] font-bold tracking-[-0.02em]">
                    Hassan Iqbal, Managing Director
                  </figcaption>
                </div>
              </figure>
            </div>

            <div className="pointer-events-none relative col-start-1 row-start-1 mt-[-15px] mr-[16px] h-[402px] w-[446px] self-end justify-self-end overflow-hidden">
              <Image
                src="/images/about/hassan-hero-img.png"
                alt="Hassan Iqbal"
                fill
                sizes="446px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default WordpressChoice;
