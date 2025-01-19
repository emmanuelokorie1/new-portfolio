"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { useEffect, useState } from "react";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "Okorie Emmanuel's Portfolio",
  description:
    "Welcome to Okorie Emmanuel's Portfolio - Showcasing innovative Mobile and Web frontend development, and creative projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Ensures the component is rendered only after hydration
    setHydrated(true);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  bg-black-100 antialiased`}
      >
        <FloatingNav navItems={navItems} />
        <div>
          {hydrated ? (
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          ) : (
            children // Render children without theme provider during SSR
          )}
        </div>

        <Footer />
      </body>
    </html>
  );
}
