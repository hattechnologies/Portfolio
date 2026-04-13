import {  Geist_Mono, Montserrat } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Navigation } from "@/components/Navigation";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"

const geistMonoHeading = Geist_Mono({subsets:['latin'],variable:'--font-heading'});

const montserrat = Montserrat({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata:Metadata = {
  title: "HAT | Humanized Automated Technologies",
  description:
    "Ready to transform your business? Let's build something extraordinary together.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png", // if you add later
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", montserrat.variable, geistMonoHeading.variable)}
    >
      <body>
        <Analytics/>
        <ThemeProvider>
          <Navigation/>
          {children}
          <Footer/>
          <SmoothCursor/>
          </ThemeProvider>
      </body>
    </html>
  )
}
