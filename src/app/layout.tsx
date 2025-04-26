import type React from "react";
import type { Metadata } from "next";
import { Inter, VT323, Press_Start_2P } from "next/font/google";
import "./globals.css";

// Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});
const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
});

export const metadata: Metadata = {
  title: "Hello!",
  description: "Ray's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${vt323.variable} ${pressStart2P.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
