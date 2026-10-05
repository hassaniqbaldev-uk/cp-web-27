import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SparkleCursor from "@/components/ui/SparkleCursor";
import { DM_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: {
    default: "Agency Name",
    template: "%s | Agency Name",
  },
  description: "Agency website description",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        <Header />

        <main>{children}</main>

        <Footer />

        {/* Change any of these to restyle the cursor across the whole site.
            Colours are full six-digit hex; labelClassName is complete
            Tailwind classes, written out in full. */}
        <SparkleCursor
          arrowFrom="#9D9D9D"
          arrowTo="#B5B5B5"
          sparkleFrom="#9D9D9D"
          sparkleTo="#C4C4C4"
        />
      </body>
    </html>
  );
}
