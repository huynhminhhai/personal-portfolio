import type { Metadata } from "next";
import {Outfit} from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huynh Minh Hai",
  description: "Portfolio Website",
};

const outFit = Outfit({subsets: ["latin"]})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={outFit.className}
      >
        {children}
      </body>
    </html>
  );
}
