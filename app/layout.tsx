import type { Metadata } from 'next'
import {
  Libre_Baskerville,
  Tenor_Sans,
  DM_Serif_Display,
  Playfair_Display,
  Outfit,
  Geist,
} from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { cn } from '@/lib/utils'
import WhatsAppButton from '@/components/WhatsappButton.jsx'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-brand',
})

const tenorSans = Tenor_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-nav',
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-h1',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-h2',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dayanandmarbles.com'),
  title: {
    default: 'Dayanand Marbles | Premium Marble & Granite in Udaipur',
    template: '%s | Dayanand Marbles',
  },
  description:
    'Dayanand Marbles — Premium marble, granite, and tiles supplier in Udaipur, Rajasthan with over 20 years of experience. Trusted by 5000+ projects. Call +91 93518 35358.',
  keywords: [
    'marble supplier Udaipur',
    'granite supplier Rajasthan',
    'Italian marble Udaipur',
    'Makrana marble',
    'Indian marble supplier',
    'stone supplier Udaipur',
    'tiles Udaipur',
    'Dayanand Marbles',
    'marble polishing Udaipur',
  ],
  authors: [{ name: 'Dayanand Marbles', url: 'https://www.dayanandmarbles.com' }],
  creator: 'Dayanand Marbles',
  publisher: 'Dayanand Marbles',
  alternates: {
    canonical: 'https://www.dayanandmarbles.com',
  },

  

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.dayanandmarbles.com',
    siteName: 'Dayanand Marbles',
    title: 'Dayanand Marbles | Premium Marble & Granite in Udaipur',
    description:
      'Udaipur\'s most trusted marble & granite supplier since 2004. 5000+ projects. Italian marble, Makrana marble, granite & tiles.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dayanand Marbles — Premium Stone Supplier in Udaipur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dayanand Marbles | Premium Marble & Granite in Udaipur',
    description:
      'Udaipur\'s most trusted marble & granite supplier since 2004. 5000+ projects completed.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn('scroll-smooth', 'font-sans', geist.variable)}
    >
      {/* ✅ Code 1 — GTM Script in <head> */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TW23D8WM');`
          }}
        />
        <meta name="google-site-verification" content="KOUKa_kdmV1W1x_jwYsOjTH7MBwdjcAVm-svUU2gZBU" />
      </head>
      <body
        className={`
          ${libreBaskerville.variable}
          ${tenorSans.variable}
          ${dmSerifDisplay.variable}
          ${playfairDisplay.variable}
          ${outfit.variable}
          antialiased
        `}
      >
        {/* ✅ Code 2 — GTM noscript immediately after <body> opens */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TW23D8WM"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

       {children}
        <Analytics />
        <WhatsAppButton />
      </body>
    </html>
  )
}