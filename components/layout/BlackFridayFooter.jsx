import { Container } from "../ui/Container";
import Image from "next/image";
import Link from "next/link";

const legalLinks = [
  { id: "terms", label: "Terms", href: "/legal/terms" },
  { id: "nda", label: "NDA", href: "/legal/nda" },
  { id: "privacy", label: "Privacy", href: "/legal/privacy-policy" },
  { id: "cookies", label: "Cookies", href: "/legal/cookies-policy" },
];

const BlackFridayFooter = () => {
  return (
    <footer>
      <div className="relative z-10 mx-auto h-px w-full max-w-[1200px] bg-white/30" />

      <Container className="relative z-10 flex items-center justify-between gap-[40px] py-[40px] max-sm:flex-col max-sm:items-center max-sm:gap-[20px] max-sm:px-[20px] max-sm:py-[30px]">
        <Link href="/black-friday" aria-label="Creative Pixels home">
          <Image
            src="/images/common/cp-logo-with-text.svg"
            alt="Creative Pixels"
            width={161}
            height={62}
            className="h-[62px] w-auto max-sm:h-[48px]"
          />
        </Link>

        <div className="text-left max-sm:text-center">
          <p className="text-[16px] tracking-[-0.02em] text-[#E4E4E4] max-sm:text-[13px]">
            CP Agency Ltd, trading as CreativePixels · Company no. [NUMBER] ·
            Bartle House, Oxford Court, Manchester, M2 3WQ
          </p>

          <p className="text-[16px] tracking-[-0.02em] text-[#E4E4E4] max-sm:mt-[6px] max-sm:text-[13px]">
            {legalLinks.map(({ id, label, href }, index) => (
              <span key={id}>
                <Link
                  href={href}
                  className="transition-colors hover:text-white"
                >
                  {label}
                </Link>

                {index < legalLinks.length - 1 && " · "}
              </span>
            ))}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default BlackFridayFooter;
