import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { siteInfo } from "@/lib/constants/site-info";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteInfo.name} - ${siteInfo.tagline}`,
    template: `%s | ${siteInfo.name}`,
  },
  description: siteInfo.description,
  keywords: [
    "arriendo casas cumpleaños",
    "trampolín park",
    "fiestas infantiles",
    "cumpleaños niños",
    "chiguayante",
    "concepción",
    "región del biobío",
    "juegos modulares",
    "trampfuns",
  ],
  authors: [{ name: siteInfo.name }],
  creator: siteInfo.name,
  publisher: siteInfo.name,
  openGraph: {
    type: "website",
    locale: siteInfo.meta.locale,
    url: siteInfo.meta.siteUrl,
    siteName: siteInfo.name,
    title: `${siteInfo.name} - ${siteInfo.tagline}`,
    description: siteInfo.description,
    images: [
      {
        url: `${siteInfo.meta.siteUrl}/images/brand/logo.png`,
        width: 1200,
        height: 630,
        alt: `${siteInfo.name} - ${siteInfo.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteInfo.name} - ${siteInfo.tagline}`,
    description: siteInfo.description,
    images: [`${siteInfo.meta.siteUrl}/images/brand/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: siteInfo.meta.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
