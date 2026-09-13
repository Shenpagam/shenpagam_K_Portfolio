import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Ibarra_Real_Nova } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibarraRealNova = Ibarra_Real_Nova({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-ibarra-real-nova",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shenpagam K | Full-Stack Web Developer – MERN, Next.js, WordPress & SEO",
  description:
    "Portfolio of Shenpagam K, a full-stack web developer working across MERN, Next.js, WordPress, and SEO. Explore real projects and get in touch.",
  keywords: [
    "Full-Stack Web Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "WordPress Developer",
    "Web Developer with SEO Skills",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Web Development Portfolio",
  ],
  authors: [{ name: "Shenpagam K" }],
  metadataBase: new URL("https://shenpagam.dev"),
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shenpagam K – Full-Stack Web Developer | MERN, Next.js, WordPress & SEO",
    description:
      "Full-stack web developer with a strong MERN foundation and growing experience in Next.js, WordPress, and SEO. Explore projects and get in touch.",
    url: "https://shenpagam.dev",
    siteName: "Shenpagam K Portfolio",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "Shenpagam K, full-stack web developer logo",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shenpagam K – Full-Stack Web Developer",
    description:
      "Full-stack web developer with a strong MERN foundation and growing experience in Next.js, WordPress, and SEO.",
    images: ["/logo.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#EFF6FE",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shenpagam K",
    jobTitle: "Full-Stack Web Developer",
    url: "https://shenpagam.dev",
    sameAs: ["https://github.com/Shenpagam"],
    email: "mailto:shenpagam200318@gmail.com",
    telephone: "+91 63827 12815",
    description:
      "Full-stack web developer specializing in MERN stack development, Next.js, WordPress, and SEO optimization.",
  };

  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${ibarraRealNova.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-lightBg text-brand-navy min-h-screen antialiased selection:bg-brand-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
