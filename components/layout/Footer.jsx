import { contactLinks, ourBrands, socialLinks } from "@/config/common";
import Image from "next/image";
import Link from "next/link";
import FooterNav from "./FooterNav";
import HomeFooterCta from "./HomeFooterCta";
import { Container } from "../ui/Container";

const Footer = ({ cta = <HomeFooterCta /> }) => {
  return (
    <footer className="relative overflow-hidden bg-black">
      <Image
        src="/images/common/gradient-bg-footer.png"
        alt=""
        fill
        className="pointer-events-none z-0 object-cover object-top"
      />

      {cta}

      <div className="relative z-10 mx-[15px] mb-[15px] rounded-[30px] bg-white/15 backdrop-blur-[20px] max-sm:mx-[10px] max-sm:mb-[10px] max-sm:rounded-[20px]">
        <Container className="relative pt-[110px] pb-[45px] max-sm:px-[20px] max-sm:pt-[80px] max-sm:pb-[30px]">
          <Link
            href="/"
            className="absolute top-[-50px] left-0 max-sm:top-[-40px] max-sm:left-[20px]"
          >
            <Image
              src="/images/common/cp-3d-logo-footer.png"
              alt="CreativePixels"
              width={152}
              height={165}
              className="h-[165px] w-auto max-sm:h-[105px]"
            />
          </Link>

          <div className="flex items-end justify-between gap-[45px] max-sm:flex-col max-sm:items-start max-sm:gap-[40px]">
            <ul className="flex flex-col gap-[20px] max-sm:gap-[14px]">
              {contactLinks.map(({ id, icon: Icon, label, href }) => (
                <li key={id}>
                  <Link
                    href={href}
                    className="flex items-center gap-[15px] text-white"
                  >
                    <Icon
                      size={28}
                      strokeWidth={2}
                      className="shrink-0 max-sm:size-[22px]"
                    />

                    <span className="text-[35px] tracking-[-0.05em] max-sm:text-[24px]">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <FooterNav />
          </div>

          <ul className="mt-[100px] grid grid-cols-4 max-sm:mt-[50px] max-sm:grid-cols-2 max-sm:gap-[10px]">
            {socialLinks.map(({ id, icon, label, href, hoverClassName }) => (
              <li key={id}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex h-[95px] items-center justify-center rounded-full bg-white/10 text-[35px] tracking-[-0.05em] text-white transition-colors duration-300 max-sm:h-[60px] max-sm:text-[20px] ${hoverClassName}`}
                >
                  {/* The icon takes no space until hover (or a tap on touch screens),
                      so the label stays centred. */}
                  <span className="flex w-0 overflow-hidden opacity-0 transition-[width,opacity] duration-300 ease-out group-hover:w-[43px] group-hover:opacity-100 group-focus-visible:w-[43px] group-focus-visible:opacity-100 group-active:w-[43px] group-active:opacity-100 max-sm:group-hover:w-[30px] max-sm:group-focus-visible:w-[30px] max-sm:group-active:w-[30px]">
                    <Image
                      src={icon}
                      alt=""
                      width={28}
                      height={28}
                      className="size-[28px] shrink-0 max-sm:size-[20px]"
                    />
                  </span>

                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-[40px] flex items-center justify-between gap-[45px] max-sm:mt-[30px] max-sm:flex-col max-sm:items-start max-sm:gap-[24px]">
            <p className="flex items-center gap-[20px] text-[16px] tracking-[-0.02em] text-white max-sm:gap-[10px] max-sm:text-[14px]">
              2026 &copy; CP Agency Ltd.
              <span>|</span>
              Trading as CreativePixels.
            </p>

            <ul className="flex items-center">
              {ourBrands.map(({ id, src, alt, width, height, href }, index) => (
                <li key={id} className="flex items-center">
                  {index > 0 && (
                    <span className="mx-[20px] h-[35px] w-px bg-white/20" />
                  )}

                  <Link href={href} target="_blank" rel="noopener noreferrer">
                    <Image src={src} alt={alt} width={width} height={height} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
