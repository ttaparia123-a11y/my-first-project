"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const blogPosts = [
  {
    title: "How to Choose the Perfect Marble for Your Home",
    excerpt:
      "A comprehensive guide to selecting the right marble type, color, and finish for different areas of your home.",
    image: "/images/italian-marble.jpg",
    date: "March 10, 2026",
    category: "Buying Guide",
  },
  {
    title: "Italian vs Indian Marble: A Detailed Comparison",
    excerpt:
      "Understanding the differences between Italian and Indian marble to make an informed decision for your project.",
    image: "/images/indian-marble.jpg",
    date: "March 5, 2026",
    category: "Education",
  },
  {
    title: "Marble Care: Tips to Maintain Your Stone Surfaces",
    excerpt:
      "Essential maintenance tips to keep your marble floors and countertops looking pristine for years to come.",
    image: "/images/portfolio-flooring.jpg",
    date: "February 28, 2026",
    category: "Maintenance",
  },
]

export function Blog() {
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
    <section id="blog" ref={sectionRef} className="py-24 md:py-32 bg-marble-cream/30">
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
                From Our Blog
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Stone Insights & Tips
            </h2>
            <p className="text-lg text-muted-foreground">
              Expert advice and inspiration for your marble and granite projects.
            </p>
          </div>
          <button className="self-start md:self-auto inline-flex items-center text-marble-brown font-medium group">
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={post.title}
              className={`group bg-card border-border/50 hover:border-marble-brown/30 hover:shadow-xl overflow-hidden transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-marble-brown text-primary-foreground text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-marble-brown transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <button className="inline-flex items-center text-marble-brown font-medium text-sm group/btn">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
