import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Footer from "@/shared/components/footer";

import type { Metadata } from "next";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "오늘의 집 클론",
    template: "%s | 오늘의 집 클론",
  },
  description: "오늘의 집 클론 코딩 사이트입니다.",
  openGraph: {
    title: "오늘의 집 클론",
    description: "오늘의 집 클론 코딩 사이트입니다.",
    images: [
      "https://s3-ap-northeast-1.amazonaws.com/bucketplace-v2-development/uploads/default_images/open_graph_icon_2.png",
    ],
  },
  icons: {
    icon: "/logo-image.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background font-sans", fontSans.variable)}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
