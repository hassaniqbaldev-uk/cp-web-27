"use client";

import { contactLinks } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../ui/ContactForm";
import { Container } from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Starfield from "../ui/Starfield";

const ContactHero = () => {
  return (
    <>
      <Section
        id="contact-hero"
        className="relative overflow-hidden bg-[radial-gradient(105.42%_89.35%_at_98.89%_0%,rgba(0,0,0,0.6)_0%,#000000_100%)] pt-[160px] pb-[120px]"
      >
        <div className="absolute top-0 left-1/2 h-full w-full max-w-[1440px] -translate-x-1/2">
          <Starfield className="absolute bottom-[-50px] left-0 z-0 h-[190px] w-[700px] mask-[radial-gradient(ellipse_at_center,#000_25%,transparent_72%)]" />
        </div>

        <Container className="relative z-10 flex items-start justify-between gap-[45px]">
          <div className="w-[523px]">
            <SectionHeading
              as="h1"
              label="Get in touch"
              title={
                <>
                  Tell us what{" "}
                  <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                    you need.
                  </span>
                </>
              }
              subtitle="Building something new, improving what you have, or not quite sure yet? Send a few details and we will point you in the right direction."
              labelClassName="text-[22px] font-medium tracking-[-0.02em] text-white uppercase"
              titleClassName="text-[85px] mt-[10px] leading-[80px] font-extrabold tracking-[-0.07em] text-white"
              subtitleClassName="text-[18px] text-white mt-[14px] tracking-[-0.02em]"
            />

            <figure className="gradient-border mt-[30px] flex items-start gap-[20px] rounded-[20px] bg-white/10 p-[30px] [--gradient-border-image:linear-gradient(140.55deg,rgba(255,255,255,0)_7.24%,rgba(255,255,255,0.6)_47.59%,rgba(255,255,255,0)_76.61%)] [--gradient-border-width:1.24px]">
              <Image
                src="/images/home/hassan-avatar-img.png"
                alt=""
                width={60}
                height={60}
                className="size-[60px] shrink-0 rounded-full object-cover"
              />

              <div>
                <blockquote className="text-[16px] tracking-[-0.02em] text-white">
                  You do not need a finished brief. A few details are enough for
                  us to suggest the next step.
                </blockquote>

                <figcaption className="text-orange mt-[10px] text-[14px] tracking-[-0.02em]">
                  Hassan Iqbal, Managing Director
                </figcaption>
              </div>
            </figure>

            <p className="mt-[30px] text-[18px] tracking-[-0.02em] text-white/80">
              Prefer another way?
            </p>

            <ul className="mt-[20px] flex flex-col">
              {contactLinks.map(({ id, icon: Icon, label, href }) => (
                <li key={id}>
                  <Link
                    href={href}
                    className="flex items-center justify-between gap-[20px] border-b border-white/20 py-[20px]"
                  >
                    <span className="flex items-center gap-[20px]">
                      <Icon
                        size={30}
                        strokeWidth={2}
                        className="shrink-0 text-white"
                      />

                      <span className="text-[35px] font-medium tracking-[-0.06em] text-white">
                        {label}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={25}
                      strokeWidth={2.5}
                      className="shrink-0 text-white"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-[600px] shrink-0 rounded-[20px] bg-white p-[45px]">
            <ContactForm showAssurances />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ContactHero;
