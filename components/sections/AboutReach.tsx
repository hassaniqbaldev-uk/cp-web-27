import { reachLocations } from "@/config/common";
import Image from "next/image";
import FadeUp, { Stagger } from "../animations/FadeUp";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const AboutReach = () => {
  return (
    <>
      <Section id="reach" className="py-3xl max-425:py-xl max-425:px-[3rem]">
        <Container>
          <SectionHeading
            reveal
            label="International work, UK accountability"
            title={
              <>
                {/* pr compensates for the negative tracking, which otherwise
                    pulls the paint box in and clips the last glyph of a
                    gradient span. */}
                <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                  Roots in Manchester.
                </span>{" "}
                {/* Decorative: the line reads the same without it. */}
                <Image
                  src="/images/about/bee.png"
                  alt=""
                  aria-hidden="true"
                  width={90}
                  height={72}
                  className="max-425:hidden inline-block align-middle"
                />
                <br />
                Clients in three time zones.
              </>
            }
            subtitle="CreativePixels is UK-based with roots in Manchester and works with businesses across the UK, US and internationally. Remote delivery is normal for us, but projects still have clear ownership, regular communication and named people responsible for the work."
            labelClassName="text-body-01 max-425:text-[1.4rem] text-center font-medium tracking-[-0.02em] text-black uppercase"
            titleClassName="text-heading-02 max-425:max-w-[30rem] max-425:mx-auto max-425:text-[4.5rem] max-425:leading-[4.5rem] mt-xs text-center leading-[8rem] font-extrabold tracking-[-0.07em] text-black"
            subtitleClassName="text-body-03 text-text-body mt-sm mx-auto max-w-[100rem] text-center tracking-[-0.02em]"
          />

          {/* The cards are placed as a share of this box, so they stay on
              their countries however wide the map is drawn. */}
          {/* The map, then the three places, one after another. The box
              itself is the group, rather than the list: on desktop the list
              holds only absolutely placed cards, so it has no height and sits
              beneath the map, and would not start until the map had all but
              scrolled past. The box stays relative, so the cards still place
              themselves against it. */}
          <Stagger className="mt-xl max-425:mt-lg max-425:h-auto relative h-[60rem] w-full">
            {/* Decorative: the places are named in the cards, so the map adds
                nothing for a reader who cannot see it. The wrapper fills the
                box as the image did, so the image still fills it in turn. */}
            <FadeUp className="max-425:hidden h-full w-full">
              <Image
                src="/images/about/dot-map.png"
                alt=""
                aria-hidden="true"
                width={1202}
                height={611}
                className="max-425:hidden h-full w-full object-contain"
              />
            </FadeUp>

            {/* A list, so it announces as three places rather than six loose
                strings scattered over a picture. Each card keeps every class
                it had, its own width among them, so rising cannot resize it. */}
            <ul>
              {reachLocations.map(
                ({ id, image, imageAlt, title, clients, className }) => (
                  <FadeUp
                    as="li"
                    key={id}
                    className={`gap-sm p-xs max-425:static max-425:mx-auto not-last:mb-xs absolute flex w-[29rem] items-center rounded-sm bg-[#f4f4f4] ${className}`}
                  >
                    <Image
                      src={image}
                      alt={imageAlt}
                      width={83}
                      height={83}
                      className="size-[8.3rem] shrink-0 rounded-xs object-cover"
                    />

                    <div>
                      {/* h3, since the section heading above is the h2. */}
                      <h3 className="text-body-02 font-bold tracking-[-0.02em] text-black">
                        {title}
                      </h3>

                      <p className="text-body-04 text-text-body mt-[0.5rem] leading-[2rem] tracking-[-0.02em]">
                        {clients}
                      </p>
                    </div>
                  </FadeUp>
                ),
              )}
            </ul>
          </Stagger>
        </Container>
      </Section>
    </>
  );
};

export default AboutReach;
