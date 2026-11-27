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
      <Section
        id="branding-social-design"
        className="py-[120px] max-sm:py-[80px]"
      >
        <Container className="max-sm:px-[20px]">
          <div className="flex items-center justify-between gap-[45px] max-sm:flex-col max-sm:items-stretch max-sm:gap-[50px]">
            <div className="flex w-[420px] flex-col items-start max-sm:w-full max-sm:items-center max-sm:text-center">
              <SectionHeading
                title={
                  <>
                    Ongoing graphic and <br />
                    <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
                      social design
                    </span>
                  </>
                }
                titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-black max-sm:text-[30px] max-sm:leading-[32px]"
                subtitle="Once your brand exists, you’ll need posts, decks, brochures and event material that match it. We do this monthly or per job, so it stays consistent without hiring a full-time designer. From £300 a month."
                subtitleClassName="text-text-body mt-[20px] text-[22px] leading-[33px] tracking-[-0.02em] max-sm:mt-[16px] max-sm:text-[16px] max-sm:leading-[24px]"
              />

              <div className="flex">
                <Button
                  href="/contact"
                  className="mt-[45px] rounded-full bg-black px-[20px] py-[12px] text-[16px] font-extrabold tracking-[-0.02em] text-white uppercase max-sm:mt-[30px] max-sm:text-[15px]"
                >
                  See monthly design plans
                </Button>
              </div>
            </div>

            <div className="relative flex w-[720px] shrink-0 gap-[20px] max-sm:w-full max-sm:gap-[10px]">
              <Image
                src="/images/services/laughing-emoji-branding-social.png"
                alt=""
                width={120}
                height={120}
                className="pointer-events-none absolute top-[-25px] left-[-40px] z-10 size-[70px] max-sm:top-[-26px] max-sm:left-[-14px] max-sm:size-[36px]"
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
                    className="w-[350px] rounded-[20px] bg-white p-[18px] shadow-[16px_16px_124px_0px_#00000021] max-sm:w-auto max-sm:min-w-0 max-sm:flex-1 max-sm:basis-0 max-sm:rounded-[12px] max-sm:p-[8px]"
                  >
                    <header className="flex items-center gap-[12px] max-sm:gap-[5px]">
                      <Image
                        src={avatar}
                        alt=""
                        width={90}
                        height={90}
                        className="bg-grey/60 size-[45px] shrink-0 rounded-full object-cover max-sm:size-[24px]"
                      />

                      <div className="flex min-w-0 flex-col">
                        <span className="text-[18px] leading-[22px] font-bold tracking-[-0.02em] text-black max-sm:truncate max-sm:text-[12px] max-sm:leading-[15px]">
                          {name}
                        </span>

                        <span className="text-text-body text-[16px] leading-[20px] tracking-[-0.02em] max-sm:truncate max-sm:text-[10px] max-sm:leading-[13px]">
                          {handle}
                        </span>
                      </div>

                      <span className="bg-blue ml-auto rounded-full px-[18px] py-[5px] text-[16px] font-bold tracking-[-0.02em] text-white max-sm:shrink-0 max-sm:px-[6px] max-sm:py-[2px] max-sm:text-[10px]">
                        {label}
                      </span>
                    </header>

                    <div className="bg-grey/60 mt-[15px] aspect-square overflow-hidden rounded-[10px] max-sm:mt-[8px] max-sm:rounded-[6px]">
                      <Image
                        src={image}
                        alt={imageAlt}
                        width={imageWidth}
                        height={imageHeight}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <footer className="mt-[15px] flex items-center gap-[10px] text-black max-sm:mt-[8px] max-sm:gap-[6px] max-sm:[&_svg]:size-[13px]">
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
                className="pointer-events-none absolute right-[-35px] bottom-[-55px] z-10 size-[80px] max-sm:right-[-10px] max-sm:bottom-[-34px] max-sm:size-[40px]"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default BrandingSocialDesign;
