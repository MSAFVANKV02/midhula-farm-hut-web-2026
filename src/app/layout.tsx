import type { Metadata, Viewport } from "next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Midhula Farm Hut | Kerala's Premier Live Fish & Exotic Breeder",
  description:
    "Thrissur's renowned captive breeder of championship Albino Guppies, Electric Blue Crayfish, Exotic Cichlids & Aquatic Plants. 100% Safe Live Delivery across India.",
  keywords: [
    "Midhula Farm Hut",
    "Fish Farm Kerala",
    "Guppy Breeder Thrissur",
    "Albino Full Red Guppy",
    "Electric Blue Crayfish India",
    "Live Aquarium Fish Online Kerala",
    "Nedupuzha Thrissur Fish Farm",
  ],
  authors: [{ name: "Midhun (Midhula Farm Hut)" }],
  openGraph: {
    title: "Midhula Farm Hut - Exotic Fish & Crayfish Breeder | Thrissur, Kerala",
    description:
      "Championship Albino Guppies, Electric Blue Crayfish, and exotic freshwater fish. 100% Live Arrival Guaranteed across India.",
    url: "https://midhulafarmhut.com",
    siteName: "Midhula Farm Hut",
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
