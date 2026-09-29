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
  title: "JI REDOY — Full Stack Developer",
  description:
    "Portfolio of MD Jahirul Islam Redoy — Full Stack Developer specializing in Next.js, React, and modern web experiences.",
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