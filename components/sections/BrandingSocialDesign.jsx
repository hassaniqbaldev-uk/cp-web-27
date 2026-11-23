import { brandingSocialPosts } from "@/config/common";
import Image from "next/image";
import {
  HiBookmark,
  HiHeart,
  HiOutlineChatBubbleOvalLeft,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const BrandingSocialDesign = () => {
  return (
    <>
      <Section id="branding-social-design" className="py-[120px]">
        <Container>
          <div className="flex items-center justify-between gap-[45px]">
            <div className="flex w-[420px] flex-col items-start">
              <SectionHeading
                title={
                  <>
                    Ongoing graphic and <br />
                    <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                      social design
                    </span>
                  </>
                }
                titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black"
                subtitle="Once your brand exists, you’ll need posts, decks, brochures and event material that match it. We do this monthly or per job, so it stays consistent without hiring a full-time designer. From £300 a month."
                subtitleClassName="text-text-body mt-[20px] text-[22px] leading-[33px] tracking-[-0.02em]"
              />

              <div className="flex">
                <Button
                  href="/contact"
                  className="mt-[45px] rounded-full bg-black px-[20px] py-[12px] text-[16px] font-extrabold tracking-[-0.02em] text-white uppercase"
                >
                  See monthly design plans
                </Button>
              </div>
            </div>

            <div className="relative flex w-[720px] shrink-0 gap-[20px]">
              <Image
                src="/images/services/laughing-emoji-branding-social.png"
                alt=""
                width={120}
                height={120}
                className="pointer-events-none absolute top-[-25px] left-[-40px] z-10 size-[70px]"
              />

              {brandingSocialPosts.map(
                ({
                  id,
                  label,
                  avatar,
                  name,
                  handle,
                  image,
                  imageWidth,
                  imageHeight,
                  imageAlt,
                }) => (
                  <article
                    key={id}
                    className="w-[350px] rounded-[20px] bg-white p-[18px] shadow-[16px_16px_124px_0px_#00000021]"
                  >
                    <header className="flex items-center gap-[12px]">
                      <Image
                        src={avatar}
                        alt=""
                        width={90}
                        height={90}
                        className="bg-grey/60 size-[45px] shrink-0 rounded-full object-cover"
                      />

                      <div className="flex flex-col">
                        <span className="text-[18px] leading-[22px] font-bold tracking-[-0.02em] text-black">
                          {name}
                        </span>

                        <span className="text-text-body text-[16px] leading-[20px] tracking-[-0.02em]">
                          {handle}
                        </span>
                      </div>

                      <span className="bg-blue ml-auto rounded-full px-[18px] py-[5px] text-[16px] font-bold tracking-[-0.02em] text-white">
                        {label}
                      </span>
                    </header>

                    <div className="bg-grey/60 mt-[15px] aspect-square overflow-hidden rounded-[10px]">
                      <Image
                        src={image}
                        alt={imageAlt}
                        width={imageWidth}
                        height={imageHeight}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <footer className="mt-[15px] flex items-center gap-[10px] text-black">
                      <HiHeart size={18} className="text-dark-pink" />
                      <HiOutlineChatBubbleOvalLeft size={18} />
                      <HiOutlinePaperAirplane
                        size={17}
                        className="translate-x-[1px] translate-y-[-2px] -rotate-[45deg]"
                      />
                      <HiBookmark size={18} className="ml-auto" />
                    </footer>
                  </article>
                ),
              )}

              <Image
                src="/images/services/heart-emoji-branding-social.png"
                alt=""
                width={140}
                height={140}
                className="pointer-events-none absolute right-[-35px] bottom-[-55px] z-10 size-[80px]"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default BrandingSocialDesign;
