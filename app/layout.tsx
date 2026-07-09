import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "beware.dog",
  description: "Something is being built here. Beware.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
