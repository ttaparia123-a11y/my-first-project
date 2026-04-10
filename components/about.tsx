"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Award, Users, Building, Gem } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Hand-selected stones from the finest quarries worldwide",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled craftsmen with decades of experience",
  },
  {
    icon: Building,
    title: "Major Projects",
    description: "Trusted by architects and interior designers",
  },
  {
    icon: Gem,
    title: "Rare Collections",
    description: "Exclusive access to rare and exotic stone varieties",
  },
]

export function About() {
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
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-marble-cream/30"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Dayanand Marbles showroom"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-lg shadow-xl max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-marble-brown rounded-full flex items-center justify-center">
                  <span className="font-h1 text-2xl font-normal text-white">
                    20+
                  </span>
                </div>
                <div>
                  <div className="font-h2 text-lg font-semibold text-foreground">
                    Years of Trust
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    Serving Rajasthan since 2004
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Badge */}
            <div className="inline-block px-4 py-1.5 bg-marble-brown/10 rounded-full mb-6">
              <span className="font-nav text-sm text-marble-brown tracking-widest uppercase">
                About Us
              </span>
            </div>

            {/* Section Heading */}
            <h2 className="font-h2 text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Crafting Luxury Spaces with{" "}
              <span className="italic font-normal text-marble-brown">
                Nature&apos;s Finest Stone
              </span>
            </h2>

            {/* Paragraphs */}
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              Dayanand Marbles is a trusted name in Udaipur, Rajasthan for premium marble and granite slabs.
               With over 20 years in the business, we source quality Indian and Italian marble and granite from reliable parties and supply them to dealers, builders, and local customers across the region. 
               We deliver goods directly to your location, making the process simple and hassle-free. Whether you are building a new home or running a construction business, 
              we are here to help you get the right stone at the right price.
            </p>


            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex gap-4 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-marble-cream rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-marble-brown" />
                  </div>
                  <div>
                    <h3 className="font-h2 text-base font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}