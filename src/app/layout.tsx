import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xpr Technologies Ltd | Artificial Intelligence R&D, Software & Technical Training Nigeria",
  description:
    "Xpr Nigeria Limited operates at the intersection of innovation and education. We build AI & digital solutions for local & global challenges while empowering individuals, schools, and children through tech bootcamps, consultancy, and career counseling.",
  keywords: [
    "Xpr Technologies",
    "Xpr Nigeria Limited",
    "AI Research Nigeria",
    "Software Development Lagos",
    "Coding Bootcamps Nigeria",
    "Kids STEM Education",
    "Technical Consultancy",
    "Career Counseling Tech",
    "Transformative Technology Hub Africa",
  ],
  icons: {
    icon: "/images/logo_main.png",
    shortcut: "/images/logo_main.png",
    apple: "/images/logo_main.png",
  },
  authors: [{ name: "Xpr Technologies Limited" }],
  openGraph: {
    title: "Xpr Technologies Ltd — AI Research & Digital Education Hub",
    description: "Bridging high-level R&D with practical tech skills to establish Nigeria as a global technology hub.",
    url: "https://xprtechnologies.com",
    siteName: "Xpr Technologies",
    images: [
      {
        url: "/images/hero_banner.png",
        width: 1200,
        height: 630,
        alt: "Xpr Nigeria Limited AI Hub",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xpr Technologies — Pioneering AI & Empowering Talent",
    description: "AI Research, Software Engineering & Personalized Tech Training in Nigeria.",
    images: ["/images/hero_banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrains.variable} dark scroll-smooth`}>
      <body className="bg-[#070a08] text-slate-100 font-sans selection:bg-[#10b981] selection:text-black antialiased">
        {children}
      </body>
    </html>
  );
}
