import { Container } from "../ui/Container";
import Section from "../ui/Section";
import Starfield from "../ui/Starfield";
import BlackFridayQuoteForm from "./BlackFridayQuoteForm";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const checklist = [
  "Flexible milestones, low risk for both",
  "Pay only for stages you sign off",
  "Your clients stay yours, in writing",
  "NDAs and agency references",
];

const BlackFridayHero = () => {
  return (
    <Section
      id="black-friday-hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/black-friday/hero-gradient-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <Starfield className="absolute top-1/2 right-0 h-[916px] w-[245px] -translate-y-1/2" />
      </div>

      <Container className="relative z-10 pt-[180px] pb-[100px]">
        <div className="flex items-center justify-between gap-[60px]">
          <div className="w-[560px] shrink-0">
            <h1 className="text-[75px] leading-[80px] font-extrabold tracking-[-0.07em] text-white">
              Help that doesn’t
              <br />
              <span className="bg-[linear-gradient(90deg,var(--color-dark-pink)_0%,var(--color-orange)_100%)] bg-clip-text pr-[0.07em] text-transparent">
                need fixing.
              </span>
            </h1>

            <p className="mt-[35px] max-w-[440px] text-[18px] leading-[27px] tracking-[-0.02em] text-white">
              White-label design, builds and maintenance on WordPress,
              WooCommerce and Shopify. 14 years behind the scenes for UK and US
              agencies.
            </p>

            <ul className="mt-[30px] flex flex-col gap-[10px]">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-[15px]">
                  <CircleCheck
                    size={31}
                    strokeWidth={2}
                    className="text-dark-pink shrink-0"
                  />

                  <span className="text-[22px] font-extrabold tracking-[-0.04em] text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-[45px] flex items-center gap-[15px] text-[22px] font-bold tracking-[-0.02em] text-white">
              <span className="text-[16px] font-normal">
                Black Friday prices:
              </span>{" "}
              from $30/hr or $1,500/month
              <Link
                href="#prices"
                className="text-[16px] font-normal tracking-[-0.02em] text-white underline underline-offset-2 transition-opacity duration-300 hover:text-white hover:opacity-100"
              >
                See prices
              </Link>
            </p>
          </div>

          <BlackFridayQuoteForm />
        </div>
      </Container>
    </Section>
  );
};

export default BlackFridayHero;
