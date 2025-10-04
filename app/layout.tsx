import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: "AI Tools Hub - Professional AI Content Creation Tools",
    template: "%s | AI Tools Hub",
  },
  description: "Generate stunning images, videos, and content with cutting-edge AI technology. Professional tools for creators and businesses.",
  keywords: [
    "AI image generator",
    "AI video creator",
    "AI content writer",
    "artificial intelligence",
    "machine learning",
    "content creation",
  ],
  authors: [{ name: "AI Tools Hub" }],
  creator: "AI Tools Hub",
  publisher: "AI Tools Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aitoolshub.com",
    siteName: "AI Tools Hub",
    title: "AI Tools Hub - Professional AI Content Creation Tools",
    description: "Generate stunning images, videos, and content with cutting-edge AI technology.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Tools Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools Hub - Professional AI Content Creation Tools",
    description: "Generate stunning images, videos, and content with cutting-edge AI technology.",
    images: ["/og-image.jpg"],
    creator: "@aitoolshub",
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
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        <Toaster richColors closeButton position="bottom-right" />
      </body>
    </html>
  );
}
