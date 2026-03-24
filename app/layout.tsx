import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "Course Designer — Платформа для створення навчальних курсів",
    template: "%s | Course Designer",
  },
  description:
    "Course Designer — вебзастосунок для розроблення навчальних курсів на основі принципів Instructional Design. Бакалаврська робота. Технічний стек: React, Ruby on Rails REST API.",
  keywords: [
    "instructional design",
    "навчальні курси",
    "e-learning",
    "розробка курсів",
    "освітні технології",
    "LMS",
    "course designer",
  ],
  authors: [{ name: "Course Designer" }],
  creator: "Course Designer",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Course Designer — Платформа для створення навчальних курсів",
    description:
      "Вебзастосунок для розроблення навчальних курсів на основі принципів Instructional Design. React + Ruby on Rails REST API.",
    siteName: "Course Designer",
    locale: "uk_UA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Course Designer — Платформа для створення навчальних курсів",
    description:
      "Вебзастосунок для розроблення навчальних курсів на основі принципів Instructional Design.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Course Designer",
  description:
    "Вебзастосунок для розроблення навчальних курсів на основі принципів Instructional Design",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  inLanguage: "uk",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "UAH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${geistSans.variable} h-full scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}
