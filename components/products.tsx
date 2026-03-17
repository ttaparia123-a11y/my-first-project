"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    title: "Italian Marble",
    description: "Exquisite Carrara, Calacatta, and Statuario marble from Italy's finest quarries",
    image: "/images/italian-marble.jpg",
    count: "50+ Varieties",
  },
  {
    title: "Indian Marble",
    description: "Premium Makrana and Rajasthan marble renowned for their timeless beauty",
    image: "/images/indian-marble.jpg",
    count: "30+ Varieties",
  },
  {
    title: "Granite",
    description: "Durable and elegant granite for countertops, flooring, and outdoor spaces",
    image: "/images/granite.jpg",
    count: "40+ Varieties",
  },
  {
    title: "Designer Tiles",
    description: "Contemporary porcelain and ceramic tiles for modern interior aesthetics",
    image: "/images/designer-tiles.jpg",
    count: "100+ Designs",
  },
]

export function Products() {
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
    <section id="products" ref={sectionRef} className="py-24 md:py-32 bg-marble-cream/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-marble-brown/10 rounded-full mb-6">
              <span className="text-sm font-medium text-marble-brown tracking-wide uppercase">
                Product Categories
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Explore Our Collection
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover our extensive range of premium natural stones sourced from the world&apos;s finest quarries.
            </p>
          </div>
          <Button
            variant="outline"
            className="self-start md:self-auto border-marble-brown text-marble-brown hover:bg-marble-brown hover:text-primary-foreground"
          >
            View All Products
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-marble-dark/90 via-marble-dark/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-marble-gold text-sm font-medium mb-2">
                  {product.count}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-primary-foreground mb-2 group-hover:text-marble-gold transition-colors">
                  {product.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore Collection
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
