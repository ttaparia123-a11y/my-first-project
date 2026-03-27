"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const blogPosts = [
  {
    title: "How to Choose the Perfect Marble for Your Home",
    slug: "choose-perfect-marble",
    excerpt:
      "A comprehensive guide to selecting the right marble type, color, and finish for different areas of your home.",
    image: "/images/italian-marble.jpg",
    date: "March 10, 2026",
    category: "Buying Guide",
  },
  {
    title: "Italian vs Indian Marble: A Detailed Comparison",
    slug: "italian-vs-indian-marble",
    excerpt:
      "Understanding the differences between Italian and Indian marble to make an informed decision for your project.",
    image: "/images/indian-marble.jpg",
    date: "March 5, 2026",
    category: "Education",
  },
  {
    title: "Marble Care: Tips to Maintain Your Stone Surfaces",
    slug: "marble-care-tips",
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
              <span className="font-nav text-sm text-marble-brown tracking-widest uppercase">
                From Our Blog
              </span>
            </div>

            <h2 className="font-h2 text-4xl md:text-5xl font-bold text-foreground mb-4">
              Stone Insights{" "}
              <span className="italic font-normal text-marble-brown">
                & Tips
              </span>
            </h2>

            <p className="font-body text-lg text-muted-foreground">
              Expert advice and inspiration for your marble and granite projects.
            </p>
          </div>

          <Link
            href="/blog"
            className="font-nav self-start md:self-auto inline-flex items-center text-sm text-marble-brown tracking-widest uppercase group"
          >
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={post.slug}
              className={`group bg-card border-border/50 hover:border-marble-brown/30 hover:shadow-xl overflow-hidden transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="font-nav px-3 py-1 bg-marble-brown text-white text-xs tracking-widest uppercase rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6">
                <div className="font-nav flex items-center gap-2 text-xs text-muted-foreground tracking-wider uppercase mb-3">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>

                <h3 className="font-h2 text-xl font-semibold text-foreground mb-3 group-hover:text-marble-brown transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="font-body text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-5">
                  {post.excerpt}
                </p>

                {/* ✅ Updated Read More Button */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-nav inline-flex items-center justify-center px-5 py-2.5 
                             text-xs tracking-widest uppercase 
                             border border-marble-brown text-marble-brown 
                             rounded-full transition-all duration-300 
                             hover:bg-marble-brown hover:text-white hover:shadow-md group/btn"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}