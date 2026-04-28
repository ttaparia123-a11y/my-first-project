import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Products } from "@/components/products"
import { Portfolio } from "@/components/portfolio"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Blog } from "@/components/blog"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Dayanand Marbles — Premium marble, granite and tiles supplier in Udaipur, Rajasthan. 20+ years experience, 5000+ projects completed. Visit our showroom or call +91 93518 35358.",
  alternates: {
    canonical: "https://www.dayanandmarbles.com",
  },
  openGraph: {
    title: "Dayanand Marbles | Premium Marble & Granite in Udaipur",
    description:
      "Premium marble, granite and tiles supplier in Udaipur. 20+ years experience, 5000+ projects completed.",
    url: "https://www.dayanandmarbles.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dayanand Marbles Showroom Udaipur",
      },
    ],
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Portfolio />
      <WhyChooseUs />
      <Blog />
      <CTA />
      <Footer />
    </main>
  )
}