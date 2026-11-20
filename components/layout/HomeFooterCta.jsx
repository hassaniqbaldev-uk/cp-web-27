import { contactLinks } from "@/config/common";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import ContactForm from "../ui/ContactForm";
import { Container } from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const HomeFooterCta = () => {
  return (
    <Container className="relative z-10 pt-[120px] pb-[150px]">
      <SectionHeading
        className="text-center"
        title={
          <>
            <span className="mr-[-0.06em] bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.06em] text-transparent">
              Got something
            </span>
            <br />
            you need to build, fix or grow?
          </>
        }
        titleClassName="text-[65px] leading-[65px] font-extrabold tracking-[-0.06em] text-white"
        subtitle="Tell us what you're trying to achieve. We'll tell you the best way forward, even if it's not with us."
        subtitleClassName="mt-[20px] text-[16px] tracking-[-0.02em] text-white"
      />

      <div className="mt-[45px] flex items-stretch justify-center gap-[30px]">
        <div className="w-[740px] rounded-[20px] bg-white p-[45px]">
          <ContactForm />
        </div>

        <div className="gradient-border flex w-[430px] flex-col items-start rounded-[20px] bg-white/20 p-[45px] backdrop-blur-[10px] [--gradient-border-image:linear-gradient(148.35deg,rgba(255,255,255,0)_11.97%,rgba(255,255,255,0.5)_39.82%,rgba(255,255,255,0)_59.85%)] [--gradient-border-width:1.24px]">
          <div className="flex items-center">
            <Image
              src="/images/home/hassan-contact-avatar.png"
              alt="Hassan, founder of Creative Pixels"
              width={384}
              height={384}
              className="relative z-10 size-[130px] shrink-0 rounded-full object-cover"
            />

            <span className="-ml-[20px] flex size-[130px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)]">
              <Image
                src="/images/home/calender-icon.svg"
                alt=""
                width={62}
                height={70}
              />
            </span>
          </div>

          <p className="mt-[30px] text-[18px] tracking-[-0.02em] text-white">
            Prefer to talk?
          </p>

          <p className="mt-[10px] text-[35px] leading-[40px] font-bold tracking-[-0.06em] text-white">
            Book a 15-min call with Hassan.
          </p>

          <Button
            href="/contact"
            className="mt-[30px] w-full rounded-[60px] bg-white px-[20px] py-[15px] text-[18px] font-extrabold tracking-[-0.02em] text-black uppercase"
          >
            Book a 15-min call
          </Button>

          <span className="my-[30px] block h-px w-full bg-white/30" />

          <ul className="flex w-full flex-col gap-[20px]">
            {contactLinks
              .filter(({ id }) => id !== "schedule")
              .map(({ id, icon: Icon, label, href }) => (
                <li key={id}>
                  <Link
                    href={href}
                    className="flex items-center justify-between gap-[20px] text-white"
                  >
                    <span className="flex items-center gap-[15px]">
                      <Icon size={22} strokeWidth={2} className="shrink-0" />

                      <span className="text-[20px] tracking-[-0.02em]">
                        {label}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={26}
                      strokeWidth={2.5}
                      className="shrink-0"
                    />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default HomeFooterCta;
