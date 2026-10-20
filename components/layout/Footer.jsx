import { ourBrands, socialLinks } from "@/config/common";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FooterNav from "./FooterNav";
import { Container } from "../ui/Container";

const Footer = () => {
  return (
    <footer className="bg-black">
      <Container>
        <span className="block h-px w-full bg-white/50" />

        <div className="mt-[80px] flex justify-between gap-[45px]">
          <div className="flex w-[330px] flex-col items-start">
            <Link href="/">
              <Image
                src="/images/common/cp-logo-with-text.svg"
                alt=""
                width={171}
                height={65}
                className="h-auto"
              />
            </Link>

            <Link
              href="/contact"
              className="gradient-border mt-[45px] flex w-full items-center gap-[20px] rounded-[20px] bg-white/20 px-[30px] py-[20px] pr-[25px] backdrop-blur-[10px] [--gradient-border-image:linear-gradient(148.35deg,rgba(255,255,255,0)_11.97%,rgba(255,255,255,0.5)_39.82%,rgba(255,255,255,0)_59.85%)] [--gradient-border-width:1.24px]"
            >
              <Image
                src="/images/home/hassan-avatar-img-2.png"
                alt=""
                width={65}
                height={65}
                className="size-[65px] shrink-0 rounded-full object-cover"
              />

              <span className="flex flex-col items-start">
                <span className="text-[22px] font-extrabold tracking-[-0.02em] text-white">
                  Book a 15 Min Call
                </span>

                <span className="flex gap-[10px] text-[16px] tracking-[-0.02em] text-white">
                  with Hassan
                  <MoveRight
                    size={14}
                    strokeWidth={2}
                    className="relative top-[7px] shrink-0"
                  />
                </span>
              </span>
            </Link>

            <ul className="mt-[30px] flex items-center gap-[10px]">
              {socialLinks.map(({ id, href, icon }) => (
                <li key={id}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-grey/30 flex size-[47px] items-center justify-center rounded-full transition-colors duration-300 hover:bg-white"
                  >
                    <span
                      style={{
                        maskImage: `url(${icon})`,
                        WebkitMaskImage: `url(${icon})`,
                      }}
                      className="size-[16px] bg-white mask-contain mask-center mask-no-repeat transition-colors duration-300 group-hover:bg-black"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <FooterNav />
        </div>

        <span className="mt-[80px] block h-px w-full bg-white/50" />

        <div className="mt-[45px] flex items-center justify-between gap-[45px] pb-[30px]">
          <p className="flex items-center gap-[30px] text-[16px] tracking-[-0.02em] text-white">
            2026 &copy; CP Agency Ltd.
            <span className="text-white">|</span>
            Trading as CreativePixels.
          </p>

          <div className="flex items-center gap-[20px]">
            <p className="text-[16px] font-bold tracking-[-0.02em] text-white">
              Our Brands:
            </p>

            <ul className="flex gap-[10px]">
              {ourBrands.map(({ id, src, alt, width, height, href }) => (
                <li key={id}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-grey/30 flex h-full items-center rounded-full px-[20px] py-[10px]"
                  >
                    <Image src={src} alt={alt} width={width} height={height} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
