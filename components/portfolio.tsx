"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const portfolioItems = [
  {
    title: "Luxury Villa Flooring",
    category: "Residential",
    image: "/images/portfolio-flooring.jpg",
    size: "large",
  },
  {
    title: "Modern Kitchen",
    category: "Countertops",
    image: "/images/portfolio-kitchen.jpg",
    size: "small",
  },
  {
    title: "Marble Staircase",
    category: "Architecture",
    image: "/images/portfolio-stairs.jpg",
    size: "small",
  },
  {
    title: "Spa Bathroom",
    category: "Commercial",
    image: "/images/portfolio-wall.jpg",
    size: "large",
  },
]

export function Portfolio() {
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
    <section id="portfolio" ref={sectionRef} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block px-4 py-1.5 bg-marble-brown/10 rounded-full mb-6">
            <span className="text-sm font-medium text-marble-brown tracking-wide uppercase">
              Our Portfolio
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Inspiring Installations
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our gallery of completed projects showcasing the beauty and
            versatility of natural stone in residential and commercial spaces.
          </p>
        </div>

        {/* Portfolio Grid - Bento Style */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 ${
                item.size === "large" ? "lg:col-span-2 aspect-[2/1]" : "aspect-square"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-marble-dark/0 group-hover:bg-marble-dark/60 transition-colors duration-500" />
              
              {/* Hover Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-marble-gold text-sm font-medium mb-1">
                  {item.category}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-semibold text-primary-foreground">
                    {item.title}
                  </h3>
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-marble-brown transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Bottom label always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-marble-dark/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-primary-foreground/80 text-sm">{item.category}</span>
                <h3 className="font-serif text-lg font-semibold text-primary-foreground">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
