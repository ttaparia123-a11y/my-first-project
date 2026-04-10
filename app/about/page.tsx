"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  Award,
  Users,
  Shield,
  Truck,
  CheckCircle2,
  Star,
  Target,
  Eye,
  ChevronDown,
  MapPin,
} from "lucide-react"

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

const stats = [
  { value: "2004",  label: "Founded" },
  { value: "20+",   label: "Years of Trust" },
  { value: "1000+", label: "Happy Clients" },
]

const missionPoints = [
  "Source only the finest quality stones",
  "Maintain competitive and transparent pricing",
  "Provide expert consultation for every project",
 
]

const visionPoints = [
  "Become the leading stone supplier in Western India",
  "Expand our collection with rare and exotic stones",
  "Embrace sustainable and eco-friendly practices",
  "Build lasting relationships with our clients",
]

const trustFactors = [
  { Icon: Award,        title: "Premium Quality",         desc: "Every piece is handpicked from the finest quarries, ensuring exceptional quality and natural beauty." },
  { Icon: Users,        title: "Expert Team",             desc: "Our experienced team provides personalised guidance to help you choose the perfect stone for your project." },
  { Icon: Shield,       title: "Authenticity Guaranteed", desc: "We guarantee the authenticity of all our products with proper documentation and certification." },
  { Icon: Truck,        title: "Reliable Delivery",       desc: "Timely delivery across India with careful handling to ensure your stone arrives in perfect condition." },
  { Icon: Star,         title: "Competitive Pricing",     desc: "Direct sourcing from quarries allows us to offer premium quality at the most competitive prices." },
  
]

const showroomPerks = [
  "Over 100+ varieties of marble and granite on display",
  "Expert consultation with our stone specialists",
  "See and feel the quality before you buy",
  "Virtual room visualisation available",
]

export default function AboutPage() {
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <style>{`
        :root {
          --cream:  #f9f6f1;
          --warm:   #ede9e0;
          --stone:  #c4b49a;
          --brown:  #8c6b4a;
          --dark:   #1c1a17;
          --text:   #3d3530;
          --muted:  #847870;
        }

        .about-root {
          font-family: var(--font-body);
          color: var(--text);
          background: var(--cream);
        }

        @keyframes heroFade {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(7px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.8); }
        }

        .hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding-top: 96px;
        }
        .hero-img { object-fit: cover; }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(255,255,255,0.55), rgba(255,255,255,0.35), rgba(249,246,241,0.80));
        }
        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 760px;
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
          font-family: var(--font-nav);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--brown);
          font-weight: 500;
          margin-bottom: 32px;
        }
        .hero-eyebrow .dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--brown);
          animation: pulse 2s infinite;
        }
        .hero-title {
          font-family: var(--font-h1);
          font-size: clamp(62px, 10vw, 108px);
          font-weight: 400;
          line-height: 0.92;
          color: var(--dark);
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }
        .hero-title em { font-style: italic; color: var(--brown); }
        .hero-sub {
          font-family: var(--font-h2);
          font-size: clamp(18px, 2.5vw, 26px);
          font-weight: 400;
          color: var(--muted);
          letter-spacing: 0.06em;
          margin-bottom: 28px;
        }
        .hero-desc {
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.8;
  color: var(--text);
  max-width: 480px;
  margin: 0 auto 30px; /* 👈 reduced from 48px */
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--dark);
  color: #fff;
  padding: 14px 32px;
  border-radius: 100px;
  font-family: var(--font-nav);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.3s, transform 0.2s;
  margin-top: -10px; /* 👈 slight upward shift */
}
        .hero-cta:hover { background: var(--brown); transform: translateY(-2px); }
        .hero-scroll {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          color: var(--muted);
          font-family: var(--font-nav);
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          animation: bounce 2.2s infinite;
          z-index: 20;
        }

        .stats-bar { background: var(--dark); padding: 28px 0; }
        .stats-inner {
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          text-align: center;
        }
        .stat-item { padding: 12px 0; }
        .stat-item + .stat-item { border-left: 1px solid rgba(255,255,255,0.1); }
        .stat-value {
          font-family: var(--font-h1);
          font-size: 36px;
          font-weight: 400;
          color: var(--stone);
          line-height: 1;
          margin-bottom: 4px;
        }
        .stat-label {
          font-family: var(--font-nav);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }

        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-nav);
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
          width: 24px; height: 1px;
          background: var(--brown);
        }
        .section-title {
          font-family: var(--font-h2);
          font-size: clamp(30px, 4.5vw, 50px);
          font-weight: 700;
          color: var(--dark);
          line-height: 1.1;
        }
        .section-title em {
          font-style: italic;
          font-weight: 400;
          color: var(--brown);
        }

        .story-section { padding: 96px 0; background: #fff; }
        .story-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 860px) {
          .story-inner { grid-template-columns: 1fr; gap: 48px; }
        }
        .story-img-wrap { position: relative; border-radius: 6px; overflow: visible; }
        .story-img-inner {
          position: relative;
          aspect-ratio: 4/3;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0,0,0,0.12);
        }
        .story-badge {
          position: absolute;
          bottom: -28px; right: -28px;
          background: var(--dark);
          color: #fff;
          border-radius: 14px;
          padding: 24px 28px;
          text-align: center;
          animation: floatUp 4s ease-in-out infinite;
          z-index: 2;
        }
        .story-badge-val {
          font-family: var(--font-h1);
          font-size: 38px;
          font-weight: 400;
          color: var(--stone);
          line-height: 1;
          margin-bottom: 4px;
        }
        .story-badge-label {
          font-family: var(--font-nav);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }
        .story-text p {
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 1.9;
          color: var(--muted);
          margin-bottom: 18px;
        }

        .mv-section { padding: 96px 0; background: #ffffff; }
        .mv-inner { max-width: 1100px; margin: 0 auto; padding: 0 32px; }
        .mv-header { margin-bottom: 56px; }
        .mv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 760px) { .mv-grid { grid-template-columns: 1fr; } }
        .mv-card {
          background: #fff;
          border-radius: 6px;
          padding: 52px 48px;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .mv-card:hover {
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
          transform: translateY(-4px);
        }
        .mv-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--stone), var(--brown), var(--stone));
          background-size: 200% 100%;
          animation: shimmer 3s ease infinite;
        }
        .mv-icon-wrap {
          width: 56px; height: 56px;
          border-radius: 14px;
          background: var(--warm);
          border: 1px solid rgba(196,180,154,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }
        .mv-icon-wrap svg { color: var(--brown); }
        .mv-title {
          font-family: var(--font-h2);
          font-size: 28px;
          font-weight: 600;
          color: var(--dark);
          margin-bottom: 14px;
        }
        .mv-desc {
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 1.85;
          color: var(--muted);
          margin-bottom: 28px;
        }
        .mv-list { display: flex; flex-direction: column; gap: 10px; }
        .mv-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--text);
        }
        .mv-item svg { color: var(--brown); flex-shrink: 0; margin-top: 1px; }

        .why-section {
          padding: 96px 0;
          background: var(--dark);
          position: relative;
          overflow: hidden;
        }
        .why-section::before {
          content: '';
          position: absolute;
          font-family: var(--font-h1);
          font-size: 420px;
          font-weight: 700;
          color: rgba(255,255,255,0.02);
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          pointer-events: none;
          white-space: nowrap;
        }
        .why-inner {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .why-header { margin-bottom: 56px; }
        .why-header .section-tag  { color: var(--stone); }
        .why-header .section-tag::before { background: var(--stone); }
        .why-header .section-title { color: #fff; }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 860px) { .why-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) { .why-grid { grid-template-columns: 1fr; } }
        .why-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          padding: 32px 28px;
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
          cursor: default;
        }
        .why-card:hover {
          background: rgba(140,107,74,0.12);
          border-color: rgba(140,107,74,0.3);
          transform: translateY(-4px);
        }
        .why-card:hover .why-icon-wrap { background: var(--brown); }
        .why-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: background 0.3s;
        }
        .why-icon-wrap svg { color: var(--stone); }
        .why-card:hover .why-icon-wrap svg { color: #fff; }
        .why-card-title {
          font-family: var(--font-h2);
          font-size: 22px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 10px;
        }
        .why-card-desc {
          font-family: var(--font-body);
          font-size: 13px;
          line-height: 1.8;
          color: rgba(255,255,255,0.5);
        }

        .showroom-section { padding: 96px 0; background: var(--cream); }
        .showroom-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 860px) {
          .showroom-inner { grid-template-columns: 1fr; gap: 48px; }
        }
        .showroom-text p {
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 1.9;
          color: var(--muted);
          margin-bottom: 28px;
        }
        .showroom-list { display: flex; flex-direction: column; gap: 12px; margin-bottom: 36px; }
        .showroom-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--text);
        }
        .showroom-item svg { color: var(--brown); flex-shrink: 0; margin-top: 2px; }
        .showroom-btns { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--dark);
          color: #fff;
          padding: 14px 30px;
          border-radius: 100px;
          font-family: var(--font-nav);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.3s, transform 0.2s;
        }
        .btn-primary:hover { background: var(--brown); transform: translateY(-2px); }
        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid var(--dark);
          color: var(--dark);
          padding: 14px 30px;
          border-radius: 100px;
          font-family: var(--font-nav);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.3s, color 0.3s, transform 0.2s;
        }
        .btn-outline:hover {
          background: var(--brown);
          color: #fff;
          border-color: var(--brown);
          transform: translateY(-2px);
        }
        .showroom-imgs { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .showroom-img-a {
          position: relative;
          aspect-ratio: 3/4;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0,0,0,0.12);
        }
        .showroom-img-b {
          position: relative;
          aspect-ratio: 3/4;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0,0,0,0.12);
          margin-top: 32px;
        }

        .cta-section {
          padding: 112px 0;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .cta-bg {
          position: absolute;
          inset: 0;
          background-image: url('/images/marble-texture.jpg');
          background-size: cover;
          background-position: center;
          filter: brightness(1.04) contrast(0.97);
        }
        .cta-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(249,246,241,0.2) 0%, rgba(249,246,241,0.78) 100%);
        }
        .cta-inner {
          position: relative;
          max-width: 640px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .cta-title {
          font-family: var(--font-h2);
          font-size: clamp(36px, 5.5vw, 60px);
          font-weight: 700;
          color: var(--dark);
          line-height: 1.1;
          margin-bottom: 20px;
        }
        .cta-title em {
          font-style: italic;
          font-weight: 400;
          color: var(--brown);
        }
        .cta-desc {
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.8;
          color: var(--muted);
          margin-bottom: 44px;
        }
        .cta-btns {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }
        .cta-badges {
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }
        .cta-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-nav);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .cta-badge svg { color: var(--brown); }

        @media (max-width: 640px) {
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .stat-item:nth-child(3) { border-left: none; }
        }
      `}</style>

      <div className="about-root">
        <Header />

        <section className="hero">
          <Image
            src="/images/hero-marble.jpg"
            alt="Premium marble texture"
            fill
            className="hero-img"
            priority
          />
          <div className="hero-overlay" />

          <div className="hero-content">
            <div
              className="hero-eyebrow"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s" }}
            >
              <span className="dot" />
              Dayanand Marbles &mdash; Our Story
            </div>

            <h1
              className="hero-title"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s" }}
            >
              About<br /><em>Us</em>
            </h1>

            <p
              className="hero-sub"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.9s ease 0.45s, transform 0.9s ease 0.45s" }}
            >
              Est. 2004 &nbsp;·&nbsp; Udaipur, Rajasthan
            </p>

            <p
              className="hero-desc"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.9s ease 0.6s, transform 0.9s ease 0.6s" }}
            >
              Two decades of excellence in bringing the finest natural stone to homes
              and businesses across Rajasthan and beyond.
            </p>

            <Link
              href="#story"
              className="hero-cta"
              style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.9s ease 0.75s, transform 0.9s ease 0.75s" }}
            >
              Discover Our Story <ArrowRight size={16} />
            </Link>
          </div>

          <div className="hero-scroll">
            <ChevronDown size={18} />
            <span>Scroll</span>
          </div>
        </section>

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

        <section className="story-section" id="story">
          <div className="story-inner">
            <Reveal>
              <div className="story-img-wrap">
                <div className="story-img-inner">
                  <Image src="/images/about.jpg" alt="Dayanand Marbles showroom" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="story-badge">
                  <div className="story-badge-val">2004</div>
                  <div className="story-badge-label">Founded In</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="story-text">
              <div className="section-tag">Our Journey</div>
              <h2 className="section-title" style={{ marginBottom: 28 }}>
                A Legacy Built<br /><em>on Stone</em>
              </h2>
              <p>
                What began as a small marble trading business in Udaipur has grown into one of Rajasthan's trusted names in natural stone. Founded by Shri Jagdish Prasad Taparia, our company was built on a simple belief — provide good quality stone at honest prices.
               Located in Udaipur, Rajasthan, we source Indian and Italian marble and granite from trusted parties and supply them to dealers and local customers. We deliver directly to your location across Udaipur, Rajasthan, Maharashtra and nearby states.
              </p>
              
            </Reveal>
          </div>
        </section>

        <section className="mv-section">
          <div className="mv-inner">
            <Reveal className="mv-header">
              <div className="section-tag">Purpose & Direction</div>
              <h2 className="section-title">
                Mission &amp; <em>Vision</em>
              </h2>
            </Reveal>

            <div className="mv-grid">
              <Reveal delay={0.05}>
                <div className="mv-card">
                  <div className="mv-icon-wrap"><Target size={24} /></div>
                  <div className="mv-title">Our Mission</div>
                  <p className="mv-desc">
                    Our mission is to provide quality marble and granite at honest prices, with reliable delivery and helpful guidance so every customer finds the right stone for their needs.
                  </p>
                  <div className="mv-list">
                    {missionPoints.map((pt) => (
                      <div className="mv-item" key={pt}>
                        <CheckCircle2 size={14} />{pt}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mv-card">
                  <div className="mv-icon-wrap"><Eye size={24} /></div>
                  <div className="mv-title">Our Vision</div>
                  <p className="mv-desc">
                    To be the most trusted marble and granite supplier in Udaipur and Rajasthan, known for quality, fair pricing and long-term relationships with our dealers and customers.
                  </p>
                  <div className="mv-list">
                    {visionPoints.map((pt) => (
                      <div className="mv-item" key={pt}>
                        <CheckCircle2 size={14} />{pt}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="why-section">
          <div className="why-inner">
            <Reveal className="why-header">
              <div className="section-tag">Our Edge</div>
              <h2 className="section-title">
                Why Our Clients <em>Trust Us</em>
              </h2>
            </Reveal>

            <div className="why-grid">
              {trustFactors.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.07}>
                  <div className="why-card">
                    <div className="why-icon-wrap">
                      <f.Icon size={22} strokeWidth={1.5} />
                    </div>
                    <div className="why-card-title">{f.title}</div>
                    <div className="why-card-desc">{f.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="showroom-section">
          <div className="showroom-inner">
            <Reveal className="showroom-text">
              <div className="section-tag">Visit Us</div>
              <h2 className="section-title" style={{ marginBottom: 24 }}>
                Experience Our <em>Showroom</em>
              </h2>
              <p>
                Come visit our shop in Udaipur and see our collection of marble and granite in person. Our team is happy to help you choose the right stone for your project.
              </p>
              <div className="showroom-list">
                {showroomPerks.map((perk) => (
                  <div className="showroom-item" key={perk}>
                    <CheckCircle2 size={14} />{perk}
                  </div>
                ))}
              </div>
              <div className="showroom-btns">
                <Link href="/contact" className="btn-primary">
                  Schedule a Visit <ArrowRight size={14} />
                </Link>
                <Link href="/contact#map" className="btn-outline">
                  <MapPin size={14} /> Get Directions
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="showroom-imgs">
                <div className="showroom-img-a">
                  <Image src="/images/showroom.png" alt="Dayanand Marbles showroom" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="showroom-img-b">
                  <Image src="/images/our expert team.png" alt="Our expert team" fill style={{ objectFit: "cover" }} />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-bg" />
          <Reveal className="cta-inner">
            <div className="section-tag" style={{ justifyContent: "center" }}>
              Ready to Transform Your Space?
            </div>
            <h2 className="cta-title">
              Explore Our<br /><em>Collection</em>
            </h2>
            <p className="cta-desc">
              Browse our extensive range of premium marbles, granites, and tiles. Let us help
              you bring your vision to life with the finest natural stone.
            </p>
            <div className="cta-btns">
              <Link href="/products" className="btn-primary">
                Explore Products <ArrowRight size={15} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us <ArrowRight size={15} />
              </Link>
            </div>
            <div className="cta-badges">
              {["Free Consultation", "Quality Guaranteed", "Expert Guidance"].map((b) => (
                <span className="cta-badge" key={b}>
                  <CheckCircle2 size={14} />{b}
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