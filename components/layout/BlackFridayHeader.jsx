import { Container } from "../ui/Container";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "What you get", href: "#what-you-get" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Prices", href: "#prices" },
  { label: "FAQ", href: "#faq" },
];

const BlackFridayHeader = () => {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="bg-[linear-gradient(90deg,#EC4899_0%,#F7931E_100%)] py-[12px]">
        <p className="text-center text-[15px] font-bold tracking-[-0.02em] text-white">
          Black Friday: 25% off for 6 months. 10 spots only.{" "}
          <Link href="#prices" className="underline underline-offset-2">
            See offer
          </Link>
        </p>
      </div>

      <Container className="flex items-center justify-between py-[25px]">
        <Link href="/black-friday" aria-label="Creative Pixels home">
          <Image
            src="/images/common/cp-logo-with-text.svg"
            alt="Creative Pixels"
            width={197}
            height={70}
            priority
            className="h-[70px] w-auto"
          />
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-[40px]">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[18px] font-semibold tracking-[-0.02em] text-white capitalize transition-opacity duration-300 hover:opacity-60"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default BlackFridayHeader;
