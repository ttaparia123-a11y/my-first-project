"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Palette, Clock, Heart, CheckCircle } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Every stone is hand-inspected for quality, ensuring only the finest materials reach your project.",
    highlights: ["Grade A Materials", "Quality Certified", "Defect-Free Guarantee"],
  },
  {
    icon: Palette,
    title: "Wide Variety",
    description:
      "From classic whites to exotic greens, our collection spans hundreds of colors, patterns, and finishes.",
    highlights: ["200+ Stone Options", "Rare Collections", "Custom Sourcing"],
  },
  {
    icon: Clock,
    title: "Trusted Experience",
    description:
      "With over 20 years in the industry, we bring expertise and reliability to every project.",
    highlights: ["20+ Years", "5000+ Projects", "Expert Guidance"],
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    description:
      "Our commitment to service excellence has earned us the trust of thousands of happy customers.",
    highlights: ["Dedicated Support", "After-Sales Service", "Long-term Relationships"],
  },
]

export function WhyChooseUs() {
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-marble-dark text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block px-4 py-1.5 bg-primary-foreground/10 rounded-full mb-6">
            <span className="text-sm font-medium text-marble-gold tracking-wide uppercase">
              Why Choose Us
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
            The Dayanand Marbles Difference
          </h2>
          <p className="text-lg text-primary-foreground/70">
            We don&apos;t just supply stone - we deliver excellence, trust, and a
            partnership that lasts beyond your project.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`group p-8 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 hover:border-marble-gold/30 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-marble-gold/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-marble-gold group-hover:scale-110 transition-all">
                  <reason.icon className="w-7 h-7 text-marble-gold group-hover:text-marble-dark transition-colors" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-3 group-hover:text-marble-gold transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-primary-foreground/70 leading-relaxed mb-6">
                    {reason.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {reason.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-primary-foreground/80"
                      >
                        <CheckCircle className="w-4 h-4 text-marble-gold" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
