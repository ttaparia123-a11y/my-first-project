import type { Metadata } from 'next'
import {
  Libre_Baskerville,
  Tenor_Sans,
  DM_Serif_Display,
  Playfair_Display,
  Outfit, Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-brand",
})

const tenorSans = Tenor_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-nav",
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-h1",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-h2",
})

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: 'Dayanand Marbles | Premium Marble & Granite in Udaipur',
  description: 'Dayanand Marbles - Premium marble, granite, and tiles supplier in Udaipur, Rajasthan with over 20 years of experience. Quality stone for luxury interiors.',
  generator: 'v0.app',
  keywords: ['marble', 'granite', 'tiles', 'Udaipur', 'Rajasthan', 'Italian marble', 'Indian marble', 'stone supplier'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className={`
        ${libreBaskerville.variable}
        ${tenorSans.variable}
        ${dmSerifDisplay.variable}
        ${playfairDisplay.variable}
        ${outfit.variable}
        antialiased
      `}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}