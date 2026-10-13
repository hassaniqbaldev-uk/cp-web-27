import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SparkleCursor from "@/components/ui/SparkleCursor";
import { DM_Sans } from "next/font/google";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Agency Name",
    template: "%s | Agency Name",
  },
  description: "Agency website description",
};

const feedbucketKey = process.env.NEXT_PUBLIC_FEEDBUCKET_KEY;

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

        {!feedbucketKey && (
          <SparkleCursor
            arrowFrom="#9D9D9D"
            arrowTo="#B5B5B5"
            sparkleFrom="#9D9D9D"
            sparkleTo="#C4C4C4"
          />
        )}

        {feedbucketKey && (
          <Script
            src="https://cdn.feedbucket.app/assets/feedbucket.js"
            data-feedbucket={feedbucketKey}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
