"use client"

import { useEffect, useRef, useState } from "react"
import { Layers, Mountain, Grid3X3, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Layers,
    title: "Marble Supply",
    tagline: "Timeless beauty, sourced from the world's finest quarries.",
    description:
      "We supply premium Indian and Italian marble slabs in a wide range of colors and finishes. Different marble varieties suit different spaces — some look stunning on flooring, others are perfect for staircases, feature walls, or entrance areas. Our team helps you choose the right marble for the right place, and delivers it directly to your location.",
    features: ["Italian Marble", "Indian Marble", "Custom Cutting", "Worldwide Sourcing"],
    benefits: [
      { title: "Vast Selection", desc: "Over 100+ marble varieties from Carrara, Statuario, Makrana, and more." },
      { title: "Custom Sizing", desc: "Cut-to-size slabs tailored to your exact project requirements." },
      { title: "Quality Assured", desc: "Every slab is inspected for consistency in color, veining, and finish." },
      { title: "Bulk Supply", desc: "Reliable supply for large residential and commercial projects." },
    ],
    type: "full", // has its own detail page
    href: "/services/marble-supply",
  },
  {
    icon: Mountain,
    title: "Granite Supply",
    tagline: "Durable, elegant, and built to last a lifetime.",
    description:
      "Our granite collection offers durable and beautiful natural stone slabs in multiple colors and finishes. Granite works exceptionally well for kitchen platforms, bathroom areas, outdoor spaces, and commercial flooring. We supply granite slabs to dealers and local customers with delivery to your doorstep.",
    features: ["Kitchen Countertops", "Commercial Grade", "Heat Resistant", "Multiple Finishes"],
    benefits: [
      { title: "Extremely Durable", desc: "Granite is one of the hardest natural stones, resistant to scratches and wear." },
      { title: "Heat Resistant", desc: "Ideal for kitchen surfaces — withstands high temperatures with ease." },
      { title: "Commercial Grade", desc: "Suitable for high-traffic commercial spaces and large installations." },
      { title: "Multiple Finishes", desc: "Available in polished, honed, brushed, and leathered finishes." },
    ],
    type: "full", // has its own detail page
    href: "/services/granite-supply",
  },
  {
    icon: Grid3X3,
    title: "Tiles Supply",
    tagline: "Designer tiles for every style and every space.",
    description:
      "Looking for tiles to complement your marble or granite? We help you find the perfect tiles through our trusted partner network. Whether it's porcelain, ceramic, or mosaic — tell us your requirement and we'll guide you to the right option and get it arranged for you.",
    features: ["Porcelain Tiles", "Ceramic Tiles", "Mosaic Patterns", "Partner Network"],
    benefits: [],
    type: "enquiry", // no detail page — goes to contact
    href: "/contact",
  },
]

type Service = (typeof services)[0]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleBack = () => {
    setSelectedService(null)
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 50)
  }

  // Separate marble+granite from tiles for layout
  const mainServices = services.filter((s) => s.type === "full")
  const enquiryServices = services.filter((s) => s.type === "enquiry")

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32">
      <div className="container mx-auto px-6">

        {/* ─── DETAIL VIEW (shown after clicking Learn More) ─── */}
        {selectedService ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Back Button */}
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-sm font-nav text-marble-brown tracking-widest uppercase mb-12 hover:underline underline-offset-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </button>

            {/* Service Header */}
            <div className="flex items-center gap-5 mb-4">
              <div className="w-16 h-16 bg-marble-cream rounded-xl flex items-center justify-center shrink-0">
                <selectedService.icon className="w-8 h-8 text-marble-brown" />
              </div>
              <div>
                <p className="font-nav text-xs text-marble-brown tracking-widest uppercase mb-1">Our Services</p>
                <h2 className="font-h1 text-4xl md:text-5xl font-normal text-foreground">
                  {selectedService.title}
                </h2>
              </div>
            </div>

            <p className="font-body text-xl text-marble-brown italic mb-8">{selectedService.tagline}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {selectedService.features.map((feature) => (
                <span
                  key={feature}
                  className="font-nav px-3 py-1 bg-marble-cream/60 text-xs text-marble-brown rounded-full tracking-wider uppercase"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="border-t border-border/50 mb-10" />

            {/* Description */}
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-16 max-w-3xl">
              {selectedService.description}
            </p>

            {/* Benefits */}
            {selectedService.benefits.length > 0 && (
              <>
                <h3 className="font-h2 text-2xl font-semibold text-foreground mb-8">
                  What We <span className="italic font-normal text-marble-brown">Offer</span>
                </h3>
                <div className="grid sm:grid-cols-2 gap-6 mb-16">
                  {selectedService.benefits.map((benefit) => (
                    <div
                      key={benefit.title}
                      className="flex gap-4 p-6 bg-card border border-border/50 rounded-xl hover:border-marble-brown/30 hover:shadow-md transition-all duration-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-marble-brown shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-h2 text-base font-semibold text-foreground mb-1">{benefit.title}</h4>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* CTA */}
            <div className="bg-marble-cream/40 border border-border/50 rounded-2xl p-10 text-center">
              <h3 className="font-h2 text-2xl font-semibold text-foreground mb-3">
                Interested in{" "}
                <span className="italic font-normal text-marble-brown">{selectedService.title}?</span>
              </h3>
              <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
                Get in touch with our team for pricing, samples, and project consultation. We're happy to help you find the perfect stone for your space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-marble-brown text-primary-foreground hover:bg-marble-dark px-8 py-6 text-base font-medium transition-all duration-300 group"
                  >
                    Get a Free Quote
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-marble-brown text-marble-brown hover:bg-marble-brown hover:text-primary-foreground px-8 py-6 text-base font-medium transition-all duration-300"
                  >
                    View All Products
                  </Button>
                </Link>
              </div>
            </div>

          </div>

        ) : (

          /* ─── CARDS VIEW (default homepage view) ─── */
          <>
            {/* Header */}
            <div
              className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="inline-block px-4 py-1.5 bg-marble-brown/10 rounded-full mb-6">
                <span className="font-nav text-sm text-marble-brown tracking-widest uppercase">
                  Our Services
                </span>
              </div>
              <h2 className="font-h2 text-4xl md:text-5xl font-bold text-foreground mb-6">
                Comprehensive{" "}
                <span className="italic font-normal text-marble-brown">Stone Solutions</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                From sourcing the finest marble & granite to delivering them at your doorstep, we make the buying process simple and reliable.
              </p>
            </div>

            {/* ── Row 1: Marble + Granite (2 columns) ── */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {mainServices.map((service, index) => (
                <Card
                  key={service.title}
                  className={`group bg-card border-border/50 hover:border-marble-brown/30 hover:shadow-xl transition-all duration-500 overflow-hidden ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-marble-cream rounded-lg flex items-center justify-center shrink-0 group-hover:bg-marble-brown transition-colors">
                        <service.icon className="w-7 h-7 text-marble-brown group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-h2 text-2xl font-semibold text-foreground mb-3 group-hover:text-marble-brown transition-colors">
                          {service.title}
                        </h3>
                        <p className="font-body text-muted-foreground leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.features.map((feature) => (
                            <span
                              key={feature}
                              className="font-nav px-3 py-1 bg-marble-cream/60 text-xs text-marble-brown rounded-full tracking-wider uppercase"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        {/* Learn More → goes to full detail page */}
                        <Link
                          href={service.href}
                          className="font-nav inline-flex items-center gap-2 px-5 py-2.5 bg-marble-brown text-primary-foreground text-xs tracking-widest uppercase rounded-md hover:bg-marble-dark transition-all duration-300 group/btn"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* ── Row 2: Tiles — centered, max half width on desktop ── */}
            <div className="flex justify-start">
  {enquiryServices.map((service, index) => (
    <Card
      key={service.title}
      className={`group bg-card border-border/50 hover:border-marble-brown/30 hover:shadow-xl transition-all duration-500 overflow-hidden w-full md:w-1/2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(mainServices.length + index) * 150}ms` }}
    >
      <CardContent className="p-8">
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 bg-marble-cream rounded-lg flex items-center justify-center shrink-0 group-hover:bg-marble-brown transition-colors">
            <service.icon className="w-7 h-7 text-marble-brown group-hover:text-primary-foreground transition-colors" />
          </div>
          <div className="flex-1">
            <h3 className="font-h2 text-2xl font-semibold text-foreground mb-3 group-hover:text-marble-brown transition-colors">
              {service.title}
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {service.features.map((feature) => (
                <span
                  key={feature}
                  className="font-nav px-3 py-1 bg-marble-cream/60 text-xs text-marble-brown rounded-full tracking-wider uppercase"
                >
                  {feature}
                </span>
              ))}
            </div>

            <Link
              href={service.href}
              className="font-nav inline-flex items-center gap-2 px-5 py-2.5 bg-marble-brown text-primary-foreground text-xs tracking-widest uppercase rounded-md hover:bg-marble-dark transition-all duration-300 group/btn"
            >
              Enquire Now
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
          </div>
           </CardContent>
              </Card>
            ))}
              </div>
          </>
        )}

      </div>
    </section>
  )
}