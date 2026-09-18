import { ourBrands, socialLinks } from "@/config/common";
import { footerNavigation } from "@/config/navigation";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";

const Footer = () => {
  return (
    // The footer landmark itself, so it is announced as one and nothing needs
    // a role. It sits outside <main>, below the page's own sections.
    <footer className="bg-black">
      <Container>
        {/* Names the landmark for anyone listing a page's regions, without
            printing a heading the design does not have. */}
        <h2 className="sr-only">Site footer</h2>

        <span aria-hidden="true" className="block h-px w-full bg-white/50" />

        <div className="gap-lg mt-2xl flex justify-between">
          <div className="flex w-[33rem] flex-col items-start">
            <Link href="/" aria-label="Creative Pixels, home">
              {/* Decorative: the link above already carries the name, so the
                  image would otherwise be announced twice. */}
              <Image
                src="/images/common/cp-logo-2.png"
                alt=""
                aria-hidden="true"
                width={182}
                height={70}
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
                className="size-[6.5rem] shrink-0 rounded-full object-cover"
              />

              <span className="flex flex-col items-start">
                <span className="text-body-01 font-extrabold tracking-[-0.02em] text-white">
                  Book a 15 Min Call
                </span>

                <span className="gap-xs text-body-03 flex tracking-[-0.02em] text-white">
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

          {/* A second navigation landmark needs its own name, so it is not
              confused with the header's. */}
          <nav aria-label="Footer" className="gap-lg flex">
            {footerNavigation.map(({ id, title, links }) => (
              <div key={id}>
                {/* A heading rather than a paragraph, so the column can be
                    jumped to, and it names the list beneath it. */}
                <h3
                  id={`footer-${id}`}
                  className="text-body-03 font-bold tracking-[-0.02em] text-white uppercase"
                >
                  {title}
                </h3>

                <ul
                  aria-labelledby={`footer-${id}`}
                  className="mt-md flex flex-col items-start"
                >
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-body-03 leading-[3.6rem] tracking-[-0.02em] text-white/70 transition-colors duration-300 hover:text-white focus-visible:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <span
          aria-hidden="true"
          className="mt-2xl block h-px w-full bg-white/50"
        />

        <div className="gap-lg mt-lg pb-md flex items-center justify-between">
          <p className="text-body-03 gap-md flex items-center tracking-[-0.02em] text-white">
            2026 &copy; CP Agency Ltd.
            {/* Decorative: it separates two statements that are already
                separate to a screen reader. */}
            <span aria-hidden="true" className="text-white">
              |
            </span>
            Trading as CreativePixels.
          </p>

          <div className="gap-sm flex items-center">
            <p className="text-body-03 font-bold tracking-[-0.02em] text-white">
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
