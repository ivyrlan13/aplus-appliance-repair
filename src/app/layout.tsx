import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | A Plus Appliance Repair",
    default: "A Plus Appliance Repair | Bradenton & Sarasota FL",
  },
  description:
    "A Plus Appliance Repair provides fast, reliable appliance repair services throughout Bradenton, Sarasota, and surrounding areas. 20+ years experience. LG Authorized. Call (941) 527-2206.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aplusappliancerepairbradenton.com",
    siteName: "A Plus Appliance Repair",
    title: "A Plus Appliance Repair | Bradenton & Sarasota FL",
    description:
      "Fast, reliable appliance repair in Bradenton & Sarasota FL. 20+ years experience, LG Authorized, 4.9 stars. Call (941) 527-2206.",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Plus Appliance Repair | Bradenton & Sarasota FL",
    description:
      "Fast, reliable appliance repair in Bradenton & Sarasota FL. 20+ years experience, LG Authorized, 4.9 stars. Call (941) 527-2206.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
