"use client"

import { useEffect, useRef, useState } from "react"
import { Layers, Mountain, Grid3X3, Sparkles, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Layers,
    title: "Marble Supply",
    description:
      "Premium Italian and Indian marble slabs for flooring, walls, countertops, and architectural elements. Wide variety of colors and patterns.",
    features: ["Italian Marble", "Indian Marble", "Custom Cutting", "Worldwide Sourcing"],
  },
  {
    icon: Mountain,
    title: "Granite Supply",
    description:
      "High-quality granite for kitchen countertops, outdoor applications, and commercial projects. Durable and elegant natural stone.",
    features: ["Kitchen Countertops", "Commercial Grade", "Heat Resistant", "Multiple Finishes"],
  },
  {
    icon: Grid3X3,
    title: "Tiles Supply",
    description:
      "Designer tiles including porcelain, ceramic, and natural stone tiles for contemporary and classic interior designs.",
    features: ["Porcelain Tiles", "Ceramic Tiles", "Mosaic Patterns", "Custom Designs"],
  },
  {
    icon: Sparkles,
    title: "Marble Polishing",
    description:
      "Professional marble polishing and restoration services to bring back the original shine and beauty of your stone surfaces.",
    features: ["Deep Cleaning", "Scratch Removal", "Sealing", "Maintenance"],
  },
]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block px-4 py-1.5 bg-marble-brown/10 rounded-full mb-6">
            <span className="text-sm font-medium text-marble-brown tracking-wide uppercase">
              Our Services
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Comprehensive Stone Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From sourcing the finest natural stones to professional installation and
            maintenance, we offer end-to-end services for all your stone needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group bg-card border-border/50 hover:border-marble-brown/30 hover:shadow-xl transition-all duration-500 overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-marble-cream rounded-lg flex items-center justify-center shrink-0 group-hover:bg-marble-brown group-hover:text-primary-foreground transition-colors">
                    <service.icon className="w-7 h-7 text-marble-brown group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-3 group-hover:text-marble-brown transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-marble-cream/60 text-sm text-marble-brown rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <button className="inline-flex items-center text-marble-brown font-medium group/btn">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
