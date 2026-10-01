import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const mainFont = Inter({
  subsets: ["latin"],
  variable: "--font-main",
});

const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash",
  weight: "200 700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace",
  description: "Get access to hundreds of courses and build your skills.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${mainFont.variable} ${clashDisplay.variable}`}>
      <body className="bg-gray-50 font-sans text-gray-950 antialiased">
        {children}
      </body>
    </html>
  );
}