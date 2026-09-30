import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import IntroLoader from "@/components/shared/IntroLoader";
import CustomCursor from "@/components/shared/CustomCursor";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FloatingIcons from "@/components/shared/FloatingIcons";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://md-jahirul-islam-redoy.vercel.app"),
  title: {
    default: "MD Jahirul Islam Redoy (Hridoy / Ridoy) — Full Stack Developer",
    template: "%s | MD Jahirul Islam Redoy",
  },
  description:
    "Portfolio of MD Jahirul Islam Redoy (also known as MD Zahirul Islam, JI Redoy, Hridoy, or Ridoy) — Full Stack Developer from Bangladesh specializing in Next.js, React, TypeScript, MongoDB, and modern web development.",
  keywords: [
    "MD Jahirul Islam Redoy",
    "MD Jahirul Islam",
    "Md. Jahirul Islam Redoy",
    "Jahirul Islam Redoy",
    "Jahirul Redoy",
    "JI Redoy",
    "MD Zahirul Islam Redoy",
    "MD Zahirul Islam",
    "Zahirul Islam Redoy",
    "Zahirul Redoy",
    "Md Zahirul",
    "MD Jahirul Islam Hridoy",
    "Jahirul Islam Hridoy",
    "Jahirul Hridoy",
    "JI Hridoy",
    "Hridoy",
    "Md Hridoy",
    "MD Jahirul Islam Ridoy",
    "Jahirul Islam Ridoy",
    "Jahirul Ridoy",
    "JI Ridoy",
    "Ridoy",
    "Md Ridoy",
    "Md Jahirul",
    "Md Redoy",
    "Full Stack Developer",
    "Full Stack Developer Bangladesh",
    "Next.js Developer",
    "React Developer",
    "MERN Stack Developer",
    "TypeScript Developer",
    "Frontend Developer Bangladesh",
    "Web Developer Dhaka",
    "Web Developer Bangladesh",
    "Portfolio",
    "React Portfolio",
    "Next.js Portfolio",
    "Developer Portfolio Bangladesh",
  ],
  authors: [
    {
      name: "MD Jahirul Islam Redoy",
      url: "https://md-jahirul-islam-redoy.vercel.app",
    },
    { name: "MD Zahirul Islam Redoy" },
    { name: "MD Jahirul Islam Hridoy" },
    { name: "MD Jahirul Islam Ridoy" },
  ],
  creator: "MD Jahirul Islam Redoy",
  publisher: "MD Jahirul Islam Redoy",
  alternates: {
    canonical: "https://md-jahirul-islam-redoy.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://md-jahirul-islam-redoy.vercel.app",
    siteName: "MD Jahirul Islam Redoy — Portfolio",
    title: "MD Jahirul Islam Redoy (Hridoy / Ridoy) — Full Stack Developer",
    description:
      "Portfolio of MD Jahirul Islam Redoy (also MD Zahirul Islam, JI Redoy, Hridoy, Ridoy) — Full Stack Developer from Bangladesh specializing in Next.js, React, TypeScript, and MongoDB.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MD Jahirul Islam Redoy — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Jahirul Islam Redoy (Hridoy / Ridoy) — Full Stack Developer",
    description:
      "Portfolio of MD Jahirul Islam Redoy (also MD Zahirul Islam, JI Redoy, Hridoy, Ridoy) — Full Stack Developer.",
    images: ["/og-image.png"],
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
};

const themeScript = `
  (function() {
    try {
      var mode = localStorage.getItem('portfolio-mode') || 'dark';
      var darkColor = localStorage.getItem('portfolio-dark-color') || 'lime';
      var lightColor = localStorage.getItem('portfolio-light-color') || 'blue';
      var color = mode === 'dark' ? darkColor : lightColor;
      document.documentElement.setAttribute('data-theme', mode + '-' + color);
    } catch (e) {}
  })();
`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "MD Jahirul Islam Redoy",
  alternateName: [
    "MD Jahirul Islam",
    "Md. Jahirul Islam Redoy",
    "Jahirul Islam Redoy",
    "Jahirul Redoy",
    "JI Redoy",
    "MD Zahirul Islam Redoy",
    "MD Zahirul Islam",
    "Zahirul Islam Redoy",
    "Zahirul Redoy",
    "MD Jahirul Islam Hridoy",
    "Jahirul Islam Hridoy",
    "Jahirul Hridoy",
    "JI Hridoy",
    "Hridoy",
    "MD Jahirul Islam Ridoy",
    "Jahirul Islam Ridoy",
    "Jahirul Ridoy",
    "JI Ridoy",
    "Ridoy",
    "Md Jahirul",
    "Md Zahirul",
    "Md Redoy",
    "Md Hridoy",
    "Md Ridoy",
  ],
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer from Bangladesh specializing in Next.js, React, TypeScript, and MongoDB. Also known as Zahirul Islam, Hridoy, or Ridoy.",
  url: "https://md-jahirul-islam-redoy.vercel.app",
  image: "https://md-jahirul-islam-redoy.vercel.app/portfolioImg.png",
  sameAs: [
    "https://github.com/JI-REDOY",
    "https://linkedin.com/in/ji-redoy",
    "https://www.facebook.com/ji.redoy.25",
    "https://codelab.serve.bd/u/mdjahirul",
    "https://wa.me/8801535798573",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Full Stack Development",
    "Web Development",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Bangladesh University",
    },
    {
      "@type": "EducationalOrganization",
      name: "Programming Hero",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "Bangladesh",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark-lime"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative flex min-h-full flex-col overflow-x-clip bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <ThemeProvider>
          <FloatingIcons />
          <IntroLoader />
          <CustomCursor />
          <Navbar />
          <main className="flex-1 pt-16 lg:pb-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}