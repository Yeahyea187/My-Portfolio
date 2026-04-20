import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Yeahyea Jam — Developer Portfolio",
  description:
    "Full-stack developer & CS student at AIUB. Building web apps, Android applications, and exploring data science. Check out my projects on GitHub.",
  keywords: [
    "Md Yeahyea Jam",
    "yeahyea187",
    "portfolio",
    "developer",
    "AIUB",
    "software engineer",
    "full stack",
    "Android",
    "JavaScript",
    "Kotlin",
  ],
  authors: [{ name: "Md Yeahyea Jam", url: "https://github.com/yeahyea187" }],
  openGraph: {
    title: "Md Yeahyea Jam — Developer Portfolio",
    description: "Full-stack developer & CS student at AIUB.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Yeahyea Jam — Developer Portfolio",
    description: "Full-stack developer & CS student at AIUB.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
