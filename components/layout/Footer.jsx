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

      <div className="relative z-10 mx-[15px] mb-[15px] rounded-[30px] bg-white/15 backdrop-blur-[20px]">
        <Container className="relative pt-[110px] pb-[45px]">
          <Link href="/" className="absolute top-[-50px] left-0">
            <Image
              src="/images/common/cp-3d-logo-footer.png"
              alt="CreativePixels"
              width={152}
              height={165}
              className="h-[165px] w-auto"
            />
          </Link>

          <div className="flex items-end justify-between gap-[45px]">
            <ul className="flex flex-col gap-[20px]">
              {contactLinks.map(({ id, icon: Icon, label, href }) => (
                <li key={id}>
                  <Link
                    href={href}
                    className="flex items-center gap-[15px] text-white"
                  >
                    <Icon size={28} strokeWidth={2} className="shrink-0" />

                    <span className="text-[35px] tracking-[-0.05em]">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <FooterNav />
          </div>

          <ul className="mt-[100px] grid grid-cols-4">
            {socialLinks.map(({ id, icon, label, href, hoverClassName }) => (
              <li key={id}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex h-[95px] items-center justify-center rounded-full bg-white/10 text-[35px] tracking-[-0.05em] text-white transition-colors duration-300 ${hoverClassName}`}
                >
                  {/* The icon takes no space until hover, so the label stays centred. */}
                  <span className="flex w-0 overflow-hidden opacity-0 transition-[width,opacity] duration-300 ease-out group-hover:w-[43px] group-hover:opacity-100 group-focus-visible:w-[43px] group-focus-visible:opacity-100">
                    <Image
                      src={icon}
                      alt=""
                      width={28}
                      height={28}
                      className="size-[28px] shrink-0"
                    />
                  </span>

                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-[40px] flex items-center justify-between gap-[45px]">
            <p className="flex items-center gap-[20px] text-[16px] tracking-[-0.02em] text-white">
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
