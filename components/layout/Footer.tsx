import { ourBrands, socialLinks } from "@/config/common";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FooterNav from "./FooterNav";
import { Container } from "../ui/Container";

const Footer = () => {
  return (
    // The footer landmark itself, so it is announced as one and nothing needs
    // a role. It sits outside <main>, below the page's own sections.
    <footer className="max-425:px-[3rem] bg-black">
      <Container>
        {/* Names the landmark for anyone listing a page's regions, without
            printing a heading the design does not have. */}
        <h2 className="sr-only">Site footer</h2>

        <span aria-hidden="true" className="block h-px w-full bg-white/50" />

        <div className="gap-lg max-425:mt-lg mt-2xl max-425:flex-col flex justify-between">
          <div className="max-425:w-full max-425:items-center flex w-[33rem] flex-col items-start">
            <Link href="/" aria-label="Creative Pixels, home">
              {/* Decorative: the link above already carries the name, so the
                  image would otherwise be announced twice. */}
              {/* The white wordmark variant, since the footer band is black. */}
              <Image
                src="/images/common/cp-logo-with-text.svg"
                alt=""
                aria-hidden="true"
                width={171}
                height={65}
                className="max-425:h-[3.6rem] h-auto"
              />
            </Link>

            {/* One link around the whole card rather than a nested one on the
                arrow, so there is a single target with a single name. */}
            <Link
              href="/contact"
              className="gradient-border gap-sm py-sm px-md mt-lg flex w-full items-center rounded-md bg-white/20 pr-[2.5rem] backdrop-blur-[10px] [--gradient-border-image:linear-gradient(148.35deg,rgba(255,255,255,0)_11.97%,rgba(255,255,255,0.5)_39.82%,rgba(255,255,255,0)_59.85%)] [--gradient-border-width:1.24px]"
            >
              {/* Decorative: the text beside it already says who it is. */}
              <Image
                src="/images/home/hassan-avatar-img-2.png"
                alt=""
                aria-hidden="true"
                width={65}
                height={65}
                className="max-425:size-[5rem] size-[6.5rem] shrink-0 rounded-full object-cover"
              />

              <span className="flex flex-col items-start">
                <span className="text-body-01 max-425:text-[1.6rem] font-extrabold tracking-[-0.02em] text-white">
                  Book a 15 Min Call
                </span>

                <span className="gap-xs text-body-03 max-425:text-[1.4rem] flex tracking-[-0.02em] text-white">
                  with Hassan
                  <MoveRight
                    aria-hidden="true"
                    size={14}
                    strokeWidth={2}
                    className="relative top-[.7rem] shrink-0"
                  />
                </span>
              </span>
            </Link>

            <ul className="gap-xs mt-md flex items-center">
              {socialLinks.map(({ id, label, href, icon }) => (
                <li key={id}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    // The icon is a picture, so the link is named here —
                    // an icon-only link otherwise announces as nothing.
                    aria-label={label}
                    className="group bg-grey/30 flex size-[4.7rem] items-center justify-center rounded-full transition-colors duration-300 hover:bg-white focus-visible:bg-white"
                  >
                    {/* A mask rather than an <img>: the asset has its fill
                        baked in, and a mask takes its colour from the element,
                        so the glyph can invert with the background. */}
                    <span
                      aria-hidden="true"
                      style={{
                        maskImage: `url(${icon})`,
                        WebkitMaskImage: `url(${icon})`,
                      }}
                      className="size-[1.6rem] bg-white mask-contain mask-center mask-no-repeat transition-colors duration-300 group-hover:bg-black group-focus-visible:bg-black"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <FooterNav />
        </div>

        <span
          aria-hidden="true"
          className="mt-2xl block h-px w-full bg-white/50"
        />

        <div className="gap-lg mt-lg pb-md max-425:flex-col max-425:items-center flex items-center justify-between">
          <p className="text-body-03 max-425:text-[1.2rem] gap-md flex items-center tracking-[-0.02em] text-white">
            2026 &copy; CP Agency Ltd.
            <span aria-hidden="true" className="text-white">
              |
            </span>
            Trading as CreativePixels.
          </p>

          <div className="gap-sm max-425:flex-col flex items-center">
            <p className="text-body-03 max-425:text-[1.4rem] font-bold tracking-[-0.02em] text-white">
              Our Brands:
            </p>

            <ul className="gap-xs flex">
              {ourBrands.map(({ id, src, alt, width, height, href }) => (
                <li key={id}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-grey/30 px-sm py-xs flex h-full items-center rounded-full"
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
