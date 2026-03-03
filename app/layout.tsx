import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/header-section/header";
import Footer from "@/components/sections/Footer-section/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata:Metadata = {
    metadataBase: new URL("https://www.ashishent.com"),

    title: {
        default:
            "Textile Importer in India | Hosiery Rags, Carpets & Fabrics",
        template: "%s | Ashish Enterprises",
    },

    description:
        "Leading textile import company in India specializing in hosiery rags, Chinese carpets, knitted & woven fabrics, PVC coated fabric and PU fabric. Bulk wholesale supply with reliable global sourcing.",

    keywords: [
        "Textile importer in India",
        "Hosiery rags importer",
        "Chinese carpets wholesale supplier",
        "Bulk fabric supplier India",
        "Polyester knitted fabric importer",
        "PVC coated fabric supplier",
        "PU fabric wholesale",
        "Industrial textile importer",
    ],

    authors: [{ name: "Ashish Enterprises" }],
    creator: "Ashish Enterprises",
    publisher: "Ashish Enterprises",

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

    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://www.ashishent.com",
        title:
            "Textile Importer in India | Bulk Hosiery Rags & Fabrics",
        description:
            "Trusted importer of hosiery rags, Chinese carpets, knitted & woven fabrics, PVC & PU fabrics. Wholesale textile supply across India.",
        siteName: "Ashish Enterprises",
        images: [
            {
                url: "/images/logo/logo.png",
                width: 1200,
                height: 630,
                alt: "Ashish Enterprises Textile Import Company",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Bulk Textile Importer in India | Ashish Enterprises",
        description:
            "Wholesale hosiery rags, carpets, knitted fabrics, PVC & PU fabrics importer.",
        images: ["/images/logo/logo.png"],
    },

    alternates: {
        canonical: "https://www.ashishent.com",
    },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Header />
      {children}
      <Footer/>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  name: "Ashish Enterprises",
                  url: "https://www.yourdomain.com",
                  industry: "Textile Import & Wholesale",
                  address: {
                      "@type": "PostalAddress",
                      addressCountry: "IN",
                  },
              }),
          }}
      />
      </body>
    </html>
  );
}
