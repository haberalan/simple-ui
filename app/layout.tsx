import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import { Inter, IBM_Plex_Mono as ibmPlexMono } from "next/font/google";
import { Header, Footer } from "./_components";
import { AlertProvider, ThemeProvider } from "@/components/ui";

const interFont = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmFont = ibmPlexMono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "simple-ui",
  description: "A simple UI library for Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.variable} ${ibmFont.variable}`}>
        <ThemeProvider>
          <AlertProvider>
            <Header />
            {children}
            <Footer />
          </AlertProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
