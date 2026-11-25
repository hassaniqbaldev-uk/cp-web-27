import Image from "next/image";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const tiles = [
  {
    id: "hassan",
    image: "/images/home/hassan-contact-avatar.png",
    alt: "Hassan Iqbal",
    imageClassName: "size-full rounded-full object-cover",
    name: "Hassan Iqbal",
    nameClassName:
      "bg-dark-pink mt-[20px] ml-[-111px] rounded-full rounded-br-none",
  },
  {
    id: "illustrator",
    image: "/images/services/illustrator-icon-ui-ux-hero.png",
    alt: "Adobe Illustrator",
    imageClassName: "h-auto w-[69px]",
  },
  {
    id: "photoshop",
    image: "/images/services/photoshop-icon-ui-ux-hero.png",
    alt: "Adobe Photoshop",
    imageClassName: "h-auto w-[69px]",
  },
  {
    id: "john",
    image: "/images/services/john-avatar-print-events-brand.png",
    alt: "John Smith",
    imageClassName: "size-full rounded-full object-cover",
    name: "John Smith",
    nameClassName: "bg-blue mt-[59px] ml-[111px] rounded-full rounded-tl-none",
  },
];

const PrintEventsBrand = () => {
  return (
    <>
      <Section id="print-events-brand" className="py-[120px]">
        <Container>
          <div className="bg-blue/10 flex min-h-[418px] items-center justify-between rounded-[20px] pr-[156px] pl-[60px]">
            <SectionHeading
              title={
                <>
                  Print is where an <br />
                  <span className="text-blue">
                    inconsistent brand <br />
                    shows first.
                  </span>
                </>
              }
              titleClassName="text-[45px] leading-[50px] font-extrabold tracking-[-0.06em] whitespace-nowrap text-black"
              subtitle="A website can be fixed quietly. A box of 5,000 flyers with the wrong blue cannot. We design print from the same guidelines as the site, proof it properly and talk to the printer about stock, finish and colour before anything goes to press."
              subtitleClassName="text-text-body mt-[25px] max-w-[515px] text-[18px] leading-[23px] tracking-[-0.02em]"
            />

            {/* Each name label shares its circle's grid cell. */}
            <ul className="grid shrink-0 grid-cols-2 gap-x-[8px] gap-y-[20px]">
              {tiles.map(
                ({ id, image, alt, imageClassName, name, nameClassName }) => (
                  <li key={id} className="grid size-[141px]">
                    <span className="col-start-1 row-start-1 flex size-[141px] items-center justify-center rounded-full bg-white">
                      <Image
                        src={image}
                        alt={alt}
                        width={141}
                        height={141}
                        className={imageClassName}
                      />
                    </span>

                    {name && (
                      <span
                        className={`z-10 col-start-1 row-start-1 flex h-[51px] w-max items-center self-start px-[22px] text-[16px] tracking-[-0.02em] whitespace-nowrap text-white ${nameClassName}`}
                      >
                        {name}
                      </span>
                    )}
                  </li>
                ),
              )}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PrintEventsBrand;
