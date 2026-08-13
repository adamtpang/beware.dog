import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://beware.dog/#organization",
      name: "beware.dog",
      url: "https://beware.dog",
      logo: "https://beware.dog/icon.svg",
      description,
      email: "hello@beware.dog",
      founder: {
        "@type": "Person",
        name: "Adam Pangelinan",
      },
      sameAs: ["https://anchormarianas.com"],
    },
    {
      "@type": "WebSite",
      "@id": "https://beware.dog/#website",
      url: "https://beware.dog",
      name: title,
      description,
      publisher: { "@id": "https://beware.dog/#organization" },
    },
    {
      "@type": "Service",
      "@id": "https://beware.dog/#the-watch",
      name: "The Watch",
      serviceType: "Fraud and impersonation monitoring for small business",
      description:
        "Weekly lookalike-domain scans, monthly phishing and voice-clone drills for the staff who move money, and a one-page monthly report.",
      provider: { "@id": "https://beware.dog/#organization" },
      areaServed: { "@type": "Country", name: "United States" },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Small businesses of 5 to 50 people that move money by email: title and escrow companies, bookkeepers, accounting firms, agencies, clinics",
      },
      offers: {
        "@type": "Offer",
        price: "149",
        priceCurrency: "USD",
        description: "Founding rate, locked for life. Standard rate is $299/mo.",
        url: "https://beware.dog/#offer",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body className="grain">
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD for SEO
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
