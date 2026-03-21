"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const products = [
  {
    title: "Italian Marble",
    slug: "italian-marble",
    description: "Exquisite Carrara, Calacatta, and Statuario marble",
    image: "/images/italian-marble.jpg",
    count: "50+ Varieties",
  },
  {
    title: "Indian Marble",
    slug: "indian-marble",
    description: "Premium Makrana and Rajasthan marble",
    image: "/images/indian-marble.jpg",
    count: "30+ Varieties",
  },
  {
    title: "Granite",
    slug: "granite",
    description: "Durable and elegant granite",
    image: "/images/granite.jpg",
    count: "40+ Varieties",
  },
]

export function Products() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 bg-marble-cream/30">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold">
            Explore <span className="italic text-marble-brown">Collection</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}  // ✅ IMPORTANT
              className={`group relative aspect-[3/4] rounded-lg overflow-hidden transition ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Image src={product.image} alt={product.title} fill className="object-cover group-hover:scale-110 transition" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-0 p-6 text-white">
                <span className="text-xs tracking-widest text-yellow-400">
                  {product.count}
                </span>
                <h3 className="text-2xl font-semibold">
                  {product.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-xs uppercase">
                  Explore Collection <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}