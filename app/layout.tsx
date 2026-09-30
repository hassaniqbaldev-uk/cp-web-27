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
          label="you"
          labelClassName="bg-blue text-white"
          arrowFrom="#3078FF"
          arrowTo="#7AA8FF"
          sparkleFrom="#3078FF"
          sparkleTo="#A9C8FF"
        />
      </body>
    </html>
  );
}
