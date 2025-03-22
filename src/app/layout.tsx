import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Providers from "@/lib/providers";
import SwipeRouter from "@/components/SwiperRouter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "한터글로벌",
  description: "글로벌 K-POP 산업의 리더, 한터글로벌입니다!",
  icons: "/icon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Header />

          <div className="flex flex-col pt-9 min-h-screen">
            <Banner />
            <SwipeRouter>
              <main className="flex-1 flex flex-col w-full max-w-[1200px] mx-auto">{children}</main>
            </SwipeRouter>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
