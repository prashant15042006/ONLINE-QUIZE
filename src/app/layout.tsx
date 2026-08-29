import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://online-quize-eh1w.vercel.app"),
  title: "ExamiQ | Advanced Real-Time Quiz & Exam Prep",
  description:
    "Prepare for GATE, JEE, NEET, SSC, and Railway exams with real-time timers, adaptive difficulty, and comprehensive step-by-step AI solutions.",
  keywords: [
    "GATE exam prep",
    "JEE preparation",
    "NEET quiz",
    "SSC CGL practice",
    "online quiz",
    "competitive exam",
    "AI exam prep",
  ],
  authors: [{ name: "ExamiQ Team" }],
  creator: "ExamiQ",
  applicationName: "ExamiQ",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "ExamiQ",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://online-quize-eh1w.vercel.app",
    siteName: "ExamiQ",
    title: "ExamiQ | Advanced Real-Time Quiz & Exam Prep",
    description:
      "Prepare for GATE, JEE, NEET, SSC exams with real-time timers, adaptive difficulty, and comprehensive step-by-step AI solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "ExamiQ – Smart Competitive Exam Prep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ExamiQ | Advanced Real-Time Quiz & Exam Prep",
    description:
      "Ace GATE, JEE, NEET & SSC with real-time quizzes, AI explanations and adaptive practice.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/icon-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* PWA Core */}
        <meta name="theme-color" content="#080710" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="ExamiQ" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function () {
                  navigator.serviceWorker.register('/sw.js').catch(function(err) {
                    console.warn('SW registration failed:', err);
                  });
                });
              }
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[#080710] text-slate-100 selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
