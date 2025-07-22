import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RupeeCashback - Earn Real Money Every Time You Shop",
  description: "Your RupeeCashback is always real money, ready to spend the moment you earn it. No points, no waiting - just instant cash rewards for every purchase.",
  keywords: "cashback, real money, instant rewards, shopping, earn money",
  openGraph: {
    title: "RupeeCashback - Earn Real Money Every Time You Shop",
    description: "Your RupeeCashback is always real money, ready to spend the moment you earn it. No points, no waiting - just instant cash rewards for every purchase.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: '/RupeeCashbackLogo.svg',
        type: 'image/svg+xml',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
