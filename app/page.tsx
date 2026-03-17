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
