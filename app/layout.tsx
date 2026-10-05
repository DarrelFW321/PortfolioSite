import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Darrel Wihandi — Portfolio",
  description:
    "Software engineer working on systems, compilers, and AI infrastructure. Software Engineering at the University of Waterloo.",
  openGraph: {
    title: "Darrel Wihandi — Portfolio",
    description: "Software engineer working on systems, compilers, and AI infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
