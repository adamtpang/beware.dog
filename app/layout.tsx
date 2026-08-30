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

const title = "beware.dog: fraud monitoring for small business";
const description =
  "beware.dog watches for lookalike domains built to scam you, then drills your team monthly against fake-invoice email and voice-clone phone scams.";

export const metadata: Metadata = {
  metadataBase: new URL("https://beware.dog"),
  title,
  description,
  applicationName: "beware.dog",
  alternates: {
    canonical: "https://beware.dog",
  },
  keywords: [
    "small business fraud monitoring",
    "lookalike domain monitoring",
    "invoice fraud training",
    "voice-clone fraud drills",
  ],
  openGraph: {
    title,
    description:
      "Weekly lookalike-domain monitoring, monthly fraud drills, and one plain-English report for small businesses.",
    url: "https://beware.dog",
    siteName: "beware.dog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "beware.dog",
    description:
      "A weekly fraud watch with monthly drills for the people who move your business's money.",
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
      sameAs: [
        "https://anchormarianas.com",
        "https://github.com/adamtpang/beware.dog",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://beware.dog/#website",
      url: "https://beware.dog",
      name: title,
      description,
      publisher: { "@id": "https://beware.dog/#organization" },
      author: { "@id": "https://beware.dog/#organization" },
      mainEntity: {
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
