import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const title = "beware.dog: the AI guard dog for your business";
const description =
  "24/7 AI security that watches your inbox, phone lines, and files, barks the moment something looks wrong, and helps you shut it down. Built for small businesses that cannot afford a security team.";

export const metadata: Metadata = {
  metadataBase: new URL("https://beware.dog"),
  title,
  description,
  applicationName: "beware.dog",
  keywords: [
    "small business cybersecurity",
    "phishing protection",
    "ransomware protection",
    "AI security",
    "managed security for small business",
  ],
  openGraph: {
    title,
    description:
      "24/7 AI security for small businesses. It watches, it warns, it never sleeps.",
    url: "https://beware.dog",
    siteName: "beware.dog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "beware.dog",
    description:
      "The AI guard dog for your business. It watches, it warns, it never sleeps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
