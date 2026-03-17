"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MapPin } from "lucide-react"

export function CTA() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-marble-cream via-background to-marble-cream/50" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-marble-brown/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-marble-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block px-4 py-1.5 bg-marble-brown/10 rounded-full mb-6">
            <span className="text-sm font-medium text-marble-brown tracking-wide uppercase">
              Get Started Today
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Visit our showroom in Udaipur to explore our extensive collection of premium
            marble, granite, and designer tiles. Our experts are ready to help you find
            the perfect stone for your project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-[var(--marble-brown)] hover:text-white px-8 py-6 text-base font-medium border border-black transition-all duration-300 group"
            >
              Schedule a Visit
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
             className="bg-white text-black hover:bg-[var(--marble-brown)] hover:text-white px-8 py-6 text-base font-medium border border-black transition-all duration-300 group"
            >
              <Phone className="mr-2 w-4 h-4" />
              +91 7891704729
            </Button>
          </div>

          {/* Location */}
          <div
            className={`inline-flex items-center gap-2 text-muted-foreground transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <MapPin className="w-5 h-5 text-marble-brown" />
            <span>amberi pool near skoda showroom ,sukher, udaipur,Rajasthan,313001</span>
          </div>
        </div>
      </div>
    </section>
  )
}
