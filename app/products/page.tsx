"use client"

import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react"
import { useEffect, useRef, useState } from "react"

/* ─────────────────────────────────────────
   Scroll-reveal wrapper
───────────────────────────────────────── */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const categories = [
  {
    id: "italian-marble",
    title: "Italian Marble",
    subtitle: "Quarried in Carrara & Brescia",
    description:
      "Timeless luxury imported from Italy's finest quarries. Each slab carries centuries of geological beauty — perfect for statement floors, feature walls and bespoke countertops.",
    image: "/images/italian-marble.jpg",
    tags: ["Carrara White", "Calacatta Gold", "Statuario"],
    accent: "#b5926b",
  },
  {
    id: "indian-marble",
    title: "Indian Marble",
    subtitle: "Heritage stones of Rajasthan",
    description:
      "Sourced from the legendary quarries of Makrana and Ambaji, Indian marble offers natural warmth and character at unmatched value.",
    image: "/images/indian-marble.jpg",
    tags: ["Makrana White", "Ambaji Marble", "Rajasthan Green"],
    accent: "#7a9e82",
  },
  {
    id: "granite",
    title: "Granite",
    subtitle: "Industrial strength, natural beauty",
    description:
      "One of the hardest natural stones on earth — granite brings resilience and drama to kitchens, commercial spaces and outdoor installations.",
    image: "/images/granite.jpg",
    tags: ["Black Galaxy", "Tan Brown", "Kashmir White"],
    accent: "#4a5568",
  },
  
]

const featured = [
  { id: 1, name: "Calacatta Gold", category: "Italian Marble", image: "/images/calacatta-gold.jpg" },
  { id: 2, name: "Black Galaxy",   category: "Granite",         image: "/images/black-galaxy.jpg" },
  { id: 3, name: "Makrana White",  category: "Indian Marble",   image: "/images/makrana-white.jpg" },
]

const stats = [
  { value: "500+", label: "Stone Varieties" },
  { value: "25+",  label: "Years of Trust" },
  { value: "12",   label: "Countries Sourced" },
  { value: "100%", label: "Quality Assured" },
]

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function ProductsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        :root {
          --cream:   #f9f6f1;
          --warm:    #ede9e0;
          --stone:   #c4b49a;
          --brown:   #8c6b4a;
          --dark:    #1c1a17;
          --text:    #3d3530;
          --muted:   #847870;
        }

        .products-root {
          font-family: 'Jost', sans-serif;
          color: var(--text);
          background: var(--cream);
        }

        /* ── Hero ── */
        .hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('/images/marble-texture.jpg');
          background-size: cover;
          background-position: center;
          filter: brightness(1.04) contrast(0.97);
        }
        /* Soft vignette so text reads cleanly on white marble */
        .hero-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(249,246,241,0.15) 0%, rgba(249,246,241,0.70) 100%);
        }
        .hero-content {
          position: relative;
          text-align: center;
          max-width: 780px;
          padding: 0 24px;
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.75);
          border: 1px solid rgba(140,107,74,0.25);
          backdrop-filter: blur(6px);
          border-radius: 100px;
          padding: 6px 20px;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--brown);
          font-weight: 500;
          margin-bottom: 32px;
        }
        .hero-eyebrow span.dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--brown);
          flex-shrink: 0;
        }
        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(64px, 10vw, 110px);
          font-weight: 300;
          line-height: 0.92;
          color: var(--dark);
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }
        .hero-title em {
          font-style: italic;
          color: var(--brown);
        }
        .hero-sub {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 400;
          color: var(--muted);
          letter-spacing: 0.06em;
          margin-bottom: 28px;
        }
        .hero-desc {
          font-size: 15px;
          line-height: 1.75;
          color: var(--text);
          opacity: 0.75;
          max-width: 480px;
          margin: 0 auto 48px;
        }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--dark);
          color: #fff;
          padding: 14px 32px;
          border-radius: 100px;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-decoration: none;
          transition: background 0.3s, transform 0.2s;
        }
        .hero-cta:hover { background: var(--brown); transform: translateY(-2px); }
        .hero-scroll {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: var(--muted);
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(6px); }
        }

        /* ── Stats bar ── */
        .stats-bar {
          background: var(--dark);
          padding: 28px 0;
        }
        .stats-inner {
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          text-align: center;
        }
        .stat-item { padding: 12px 0; }
        .stat-item + .stat-item {
          border-left: 1px solid rgba(255,255,255,0.1);
        }
        .stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 36px;
          font-weight: 600;
          color: var(--stone);
          line-height: 1;
          margin-bottom: 4px;
        }
        .stat-label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }

        /* ── Section shared ── */
        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--brown);
          font-weight: 500;
          margin-bottom: 16px;
        }
        .section-tag::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: var(--brown);
        }
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 300;
          color: var(--dark);
          line-height: 1.1;
        }
        .section-title em { font-style: italic; color: var(--brown); }

        /* ── Categories ── */
        .categories-section {
          padding: 96px 0;
          background: #fff;
        }
        .categories-inner { max-width: 1200px; margin: 0 auto; padding: 0 32px; }
        .categories-header { margin-bottom: 64px; }

        .cat-grid {
          display: grid;
          gap: 2px;
        }

        /* Alternating full-bleed rows */
        .cat-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 420px;
          overflow: hidden;
          border-radius: 4px;
        }
        .cat-card.reverse { direction: rtl; }
        .cat-card.reverse > * { direction: ltr; }

        .cat-image-wrap {
          position: relative;
          overflow: hidden;
        }
        .cat-image-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .cat-card:hover .cat-image-wrap img { transform: scale(1.05); }

        .cat-body {
          background: var(--cream);
          padding: 56px 52px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .cat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 72px;
          font-weight: 300;
          color: var(--stone);
          opacity: 0.35;
          line-height: 1;
          margin-bottom: -8px;
        }
        .cat-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 34px;
          font-weight: 600;
          color: var(--dark);
          margin-bottom: 4px;
        }
        .cat-subtitle {
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--brown);
          margin-bottom: 20px;
        }
        .cat-desc {
          font-size: 14px;
          line-height: 1.8;
          color: var(--muted);
          margin-bottom: 24px;
          max-width: 360px;
        }
        .cat-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 32px;
        }
        .cat-tag {
          padding: 5px 14px;
          border: 1px solid var(--stone);
          border-radius: 100px;
          font-size: 11px;
          letter-spacing: 0.08em;
          color: var(--brown);
        }
        .cat-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--dark);
          font-weight: 500;
          text-decoration: none;
          border-bottom: 1px solid var(--dark);
          padding-bottom: 2px;
          width: fit-content;
          transition: color 0.2s, border-color 0.2s;
        }
        .cat-link:hover { color: var(--brown); border-color: var(--brown); }

        @media (max-width: 768px) {
          .cat-card, .cat-card.reverse {
            grid-template-columns: 1fr;
            direction: ltr;
          }
          .cat-image-wrap { min-height: 260px; }
          .cat-body { padding: 36px 28px; }
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .stat-item:nth-child(3) { border-left: none; }
        }

        /* ── Featured ── */
        .featured-section {
          padding: 96px 0;
          background: var(--dark);
        }
        .featured-inner { max-width: 1200px; margin: 0 auto; padding: 0 32px; }
        .featured-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 56px;
          flex-wrap: wrap;
          gap: 24px;
        }
        .featured-header .section-title { color: #fff; }
        .featured-header .section-tag { color: var(--stone); }
        .featured-header .section-tag::before { background: var(--stone); }
        .view-all {
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--stone);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid var(--stone);
          padding-bottom: 2px;
          white-space: nowrap;
          transition: opacity 0.2s;
        }
        .view-all:hover { opacity: 0.65; }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 768px) {
          .featured-grid { grid-template-columns: 1fr; }
        }

        .feat-card {
          position: relative;
          border-radius: 6px;
          overflow: hidden;
          aspect-ratio: 3/4;
          cursor: pointer;
        }
        .feat-card img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .feat-card:hover img { transform: scale(1.07); }
        .feat-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%);
        }
        .feat-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 28px 24px;
        }
        .feat-cat {
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--stone);
          margin-bottom: 6px;
        }
        .feat-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 600;
          color: #fff;
          line-height: 1.1;
        }

        /* ── CTA ── */
        .cta-section {
          padding: 112px 0;
          background: var(--warm);
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .cta-section::before {
          content: 'DM';
          position: absolute;
          font-family: 'Cormorant Garamond', serif;
          font-size: 320px;
          font-weight: 700;
          color: rgba(140,107,74,0.06);
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          pointer-events: none;
          white-space: nowrap;
        }
        .cta-inner {
          position: relative;
          max-width: 640px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(34px, 5vw, 56px);
          font-weight: 300;
          color: var(--dark);
          line-height: 1.12;
          margin-bottom: 20px;
        }
        .cta-title em { font-style: italic; color: var(--brown); }
        .cta-desc {
          font-size: 15px;
          line-height: 1.75;
          color: var(--muted);
          margin-bottom: 40px;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--dark);
          color: #fff;
          padding: 16px 36px;
          border-radius: 100px;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.3s, transform 0.2s;
          margin-bottom: 48px;
        }
        .cta-btn:hover { background: var(--brown); transform: translateY(-2px); }
        .cta-badges {
          display: flex;
          justify-content: center;
          gap: 36px;
          flex-wrap: wrap;
        }
        .cta-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--muted);
        }
        .cta-badge svg { color: var(--brown); }
      `}</style>

      <div className="products-root">
        <Header />

        {/* ── HERO ── */}
        <section className="hero" style={{ paddingTop: 96 }}>
          <div className="hero-bg" />

          <div className="hero-content">
            <div
              className="hero-eyebrow"
              style={{ opacity: 0, animation: "heroFade 0.9s ease 0.1s forwards" }}
            >
              <span className="dot" />
              Dayanand Marbles &mdash; Our Collection
            </div>

            <h1
              className="hero-title"
              style={{ opacity: 0, animation: "heroFade 0.9s ease 0.3s forwards" }}
            >
              Natural<br /><em>Stone</em>
            </h1>

            <p
              className="hero-sub"
              style={{ opacity: 0, animation: "heroFade 0.9s ease 0.45s forwards" }}
            >
              Marble · Granite 
            </p>

            <p
              className="hero-desc"
              style={{ opacity: 0, animation: "heroFade 0.9s ease 0.6s forwards" }}
            >
              Explore our premium collection of marble, granite sourced from the best quarries worldwide.
            </p>

            <Link
              href="#categories"
              className="hero-cta"
              style={{ opacity: 0, animation: "heroFade 0.9s ease 0.75s forwards" }}
            >
              Explore Categories <ArrowRight size={16} />
            </Link>
          </div>

          <div className="hero-scroll">
            <ChevronDown size={18} />
            <span>Scroll</span>
          </div>

          <style>{`
            @keyframes heroFade {
              from { opacity: 0; transform: translateY(20px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </section>

        {/* ── STATS BAR ── */}
        <div className="stats-bar">
          <div className="stats-inner">
            {stats.map((s) => (
              <div className="stat-item" key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CATEGORIES ── */}
        <section className="categories-section" id="categories">
          <div className="categories-inner">
            <Reveal className="categories-header">
              <div className="section-tag">Product Range</div>
              <h2 className="section-title">
                Our <em>Collections</em>
              </h2>
            </Reveal>

            <div className="cat-grid">
              {categories.map((cat, i) => (
                <Reveal key={cat.id} delay={i * 0.08}>
                  <div className={`cat-card ${i % 2 === 1 ? "reverse" : ""}`}>
                    <div className="cat-image-wrap">
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    <div className="cat-body">
                      <div className="cat-num">0{i + 1}</div>
                      <h3 className="cat-title">{cat.title}</h3>
                      <div className="cat-subtitle">{cat.subtitle}</div>
                      <p className="cat-desc">{cat.description}</p>
                      <div className="cat-tags">
                        {cat.tags.map((t) => (
                          <span className="cat-tag" key={t}>{t}</span>
                        ))}
                      </div>
                      <Link href={`/products/${cat.id}`} className="cat-link">
                        View Collection <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED ── */}
        <section className="featured-section">
          <div className="featured-inner">
            <Reveal className="featured-header">
              <div>
                <div className="section-tag">Editor's Pick</div>
                <h2 className="section-title">
                  Featured <em>Stones</em>
                </h2>
              </div>
              <Link href="/products" className="view-all">
                View All <ArrowRight size={13} />
              </Link>
            </Reveal>

            <div className="featured-grid">
              {featured.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.1}>
                  <div className="feat-card">
                    <Image src={p.image} alt={p.name} fill style={{ objectFit: "cover" }} />
                    <div className="feat-overlay" />
                    <div className="feat-info">
                      <div className="feat-cat">{p.category}</div>
                      <div className="feat-name">{p.name}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section">
          <Reveal className="cta-inner">
            <h2 className="cta-title">
              Find Your<br /><em>Perfect Stone</em>
            </h2>
            <p className="cta-desc">
              Looking for a specific marble or granite? Our experts are ready to help you
              select the ideal material for your project — from flooring to feature walls.
            </p>
            <Link href="/contact" className="cta-btn">
              Contact Our Team <ArrowRight size={15} />
            </Link>
            <div className="cta-badges">
              {["500+ Stone Varieties", "Premium Quality", "Best Pricing"].map((b) => (
                <span className="cta-badge" key={b}>
                  <CheckCircle2 size={14} />
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        <Footer />
      </div>
    </>
  )
}