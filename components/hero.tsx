"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-marble.jpg"
          alt="Marble slabs and natural stone in Udaipur showroom"
          fill
          className="object-cover"
          priority
        />
        {/* Same overlay as about page hero */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0.55), rgba(255,255,255,0.35), rgba(249,246,241,0.80))",
          }}
        />
      </div>

      {/* Subtle particle effect overlay */}
      <div className="absolute inset-0 z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-marble-gold rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-marble-grey rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-marble-cream rounded-full animate-pulse delay-700" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-marble-gold rounded-full animate-pulse delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 pt-24">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-full mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ background: "rgba(255,255,255,0.75)", border: "1px solid rgba(140,107,74,0.25)" }}
          >
            <span className="w-2 h-2 bg-marble-gold rounded-full animate-pulse" />
            <span className="font-nav text-sm text-marble-brown tracking-widest uppercase">
              20+ Years of Excellence
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`font-h1 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mb-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-8 blur-sm"
            }`}
          >
            <span style={{ color: "#1c1a17" }}>
              Premium Marble & Granite Supplier in Udaipur
            </span>
          </h1>

          {/* Tagline */}
          <p
            className={`font-body text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ color: "#847870" }}
          >
            Indian Marble, Italian Marble & Granite for Homes, Builders & Dealers
          </p>

          {/* Trust Line */}
          <p className="font-body text-sm mb-10" style={{ color: "#847870" }}>
            1000+ Happy Customers • 20+ Years Experience
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* PRIMARY CTA */}
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[var(--marble-brown)] text-white hover:bg-black px-8 py-6 text-base font-medium transition-all duration-300 group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            {/* SECONDARY CTA */}
            <Link href="/products">
              <Button
                size="lg"
                
                className="bg-white text-black border-2 border-black hover:bg-[var(--marble-brown)] hover:text-white hover:border-[var(--marble-brown)] px-8 py-6 text-base font-medium transition-all duration-300 group"
              >
                View Products
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-8 mt-20 pt-12 transition-all duration-1000 delay-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ borderTop: "1px solid rgba(140,107,74,0.2)" }}
          >
            <div className="text-center">
              <div className="font-h1 text-4xl md:text-5xl font-normal text-marble-brown mb-2">
                20+
              </div>
              <div className="font-nav text-sm uppercase tracking-widest" style={{ color: "#847870" }}>
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="font-h1 text-4xl md:text-5xl font-normal text-marble-brown mb-2">
                1000+
              </div>
              <div className="font-nav text-sm uppercase tracking-widest" style={{ color: "#847870" }}>
                Happy Customers
              </div>
            </div>
            <div className="text-center">
              <div className="font-h1 text-4xl md:text-5xl font-normal text-marble-brown mb-2">
                50+
              </div>
              <div className="font-nav text-sm uppercase tracking-widest" style={{ color: "#847870" }}>
                Stone Varieties
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 rounded-full flex items-start justify-center p-2" style={{ border: "2px solid rgba(140,107,74,0.3)" }}>
          <div className="w-1 h-2 bg-marble-brown rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}