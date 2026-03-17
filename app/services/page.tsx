"use client"
 
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Diamond,
  Mountain,
  LayoutGrid,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Phone,
  ClipboardList,
  Truck,
  BadgeCheck,
  ChevronDown,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
 
/* ─────────────────────────────────────────
   Scroll-reveal wrapper (matches ProductsPage)
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
const services = [
  {
    id: "marble",
    Icon: Diamond,
    title: "Marble Supply",
    subtitle: "Timeless Elegance",
    description:
      "Premium Italian and Indian marbles sourced from the finest quarries worldwide. From classic Carrara to exotic varieties, we provide the perfect stone for your vision.",
    features: ["Wide variety of colors & patterns", "Cut-to-size options", "International sourcing", "Quality certification"],
    num: "01",
  },
  {
    id: "granite",
    Icon: Mountain,
    title: "Granite Supply",
    subtitle: "Strength & Beauty",
    description:
      "Durable and stunning granite selections for countertops, flooring, and facades. Our collection features rare colors and patterns that transform any space.",
    features: ["Extreme durability", "Heat resistant", "Multiple finishes available", "Custom fabrication"],
    num: "02",
  },
  {
    id: "polishing",
    Icon: Sparkles,
    title: "Marble Polishing",
    subtitle: "Restore & Refresh",
    description:
      "Professional marble restoration and polishing services to bring back the original luster of your stone surfaces. We breathe new life into dull, scratched, or stained marble.",
    features: ["Scratch removal", "Stain treatment", "High-gloss finishing", "Protective sealing"],
    num: "04",
  },
]
 
const processSteps = [
  {
    step: 1,
    Icon: Phone,
    title: "Consultation",
    description:
      "Share your requirements with our experts. We help you understand options and provide tailored recommendations based on your project needs and budget.",
  },
  {
    step: 2,
    Icon: ClipboardList,
    title: "Selection & Quote",
    description:
      "Visit our showroom to see samples in person. Our team provides a detailed quote including all specifications and transparent pricing.",
  },
  {
    step: 3,
    Icon: Truck,
    title: "Delivery",
    description:
      "We handle careful transportation across India. Your stone arrives safely packaged and on schedule, every time.",
  },
  {
    step: 4,
    Icon: BadgeCheck,
    title: "Quality Assurance",
    description:
      "Final inspection ensures everything meets our premium standards. We provide care guidelines and full warranty documentation.",
  },
]
 
const whyUs = [
  "25+ years of industry expertise",
  "Direct sourcing from premium quarries",
  "Competitive pricing — no middlemen",
  "Expert guidance throughout your project",
  "Quality guarantee on all products",
  "Timely delivery across India",
]
 
const stats = [
  { value: "25+", label: "Years of Trust" },
  { value: "500+", label: "Stone Varieties" },
  { value: "12", label: "Countries Sourced" },
  { value: "100%", label: "Quality Assured" },
]
 
/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
 
        :root {
          --cream:  #f9f6f1;
          --warm:   #ede9e0;
          --stone:  #c4b49a;
          --brown:  #8c6b4a;
          --dark:   #1c1a17;
          --text:   #3d3530;
          --muted:  #847870;
        }
 
        .svc-root {
          font-family: 'Jost', sans-serif;
          color: var(--text);
          background: var(--cream);
        }
 
        /* ── keyframes ── */
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
          100% { background-position: 200% center; }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 100%; }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
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
          padding-top: 96px;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('/images/marble-texture.jpg');
          background-size: cover;
          background-position: center;
          filter: brightness(1.04) contrast(0.97);
        }
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
          opacity: 0;
          animation: heroFade 0.9s ease 0.1s forwards;
        }
        .hero-eyebrow .dot {
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
          opacity: 0;
          animation: heroFade 0.9s ease 0.3s forwards;
        }
        .hero-title em {
          font-style: italic;
          color: var(--brown);
        }
        .hero-sub {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(18px, 2.5vw, 26px);
          font-weight: 400;
          color: var(--muted);
          letter-spacing: 0.06em;
          margin-bottom: 28px;
          opacity: 0;
          animation: heroFade 0.9s ease 0.45s forwards;
        }
        .hero-desc {
          font-size: 15px;
          line-height: 1.8;
          color: var(--text);
          opacity: 0;
          animation: heroFade 0.9s ease 0.6s forwards;
          max-width: 500px;
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
          opacity: 0;
          animation: heroFade 0.9s ease 0.75s forwards;
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
          text-align: center;
        }
        .stat-item { padding: 12px 0; }
        .stat-item + .stat-item { border-left: 1px solid rgba(255,255,255,0.1); }
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
 
        /* ── SERVICES GRID ── */
        .services-section {
          padding: 96px 0;
          background: #fff;
        }
        .services-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .services-header { margin-bottom: 72px; }
 
        .svc-grid {
          display: grid;
          gap: 2px;
        }
 
        /* Each service card alternates layout like product page */
        .svc-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 380px;
          overflow: hidden;
          border-radius: 4px;
          background: var(--cream);
          transition: box-shadow 0.3s;
        }
        .svc-card:hover { box-shadow: 0 12px 48px rgba(0,0,0,0.08); }
        .svc-card.reverse { direction: rtl; }
        .svc-card.reverse > * { direction: ltr; }
 
        /* Icon / visual side */
        .svc-visual {
          position: relative;
          background: var(--dark);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          min-height: 340px;
        }
        /* animated marble-like shimmer on icon panel */
        .svc-visual::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(196,180,154,0.08) 50%, transparent 70%);
          background-size: 200% 100%;
          animation: shimmer 3.5s ease infinite;
        }
        .svc-visual-num {
          position: absolute;
          top: 24px;
          left: 28px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 80px;
          font-weight: 700;
          color: rgba(255,255,255,0.05);
          line-height: 1;
          user-select: none;
        }
        .svc-icon-wrap {
          position: relative;
          width: 96px;
          height: 96px;
          border-radius: 24px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(196,180,154,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s, background 0.4s;
        }
        .svc-card:hover .svc-icon-wrap {
          transform: scale(1.08) rotate(-3deg);
          background: rgba(140,107,74,0.25);
        }
        .svc-icon-wrap svg { color: var(--stone); }
 
        .svc-body {
          padding: 52px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .svc-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 72px;
          font-weight: 300;
          color: var(--stone);
          opacity: 0.3;
          line-height: 1;
          margin-bottom: -8px;
        }
        .svc-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 600;
          color: var(--dark);
          margin-bottom: 4px;
        }
        .svc-subtitle {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--brown);
          margin-bottom: 18px;
        }
        .svc-desc {
          font-size: 14px;
          line-height: 1.8;
          color: var(--muted);
          margin-bottom: 24px;
          max-width: 340px;
        }
        .svc-features {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 32px;
        }
        .svc-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: var(--text);
        }
        .svc-feature svg { color: var(--brown); flex-shrink: 0; }
 
        /* animated underline on hover */
        .svc-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--dark);
          font-weight: 500;
          text-decoration: none;
          position: relative;
          width: fit-content;
          padding-bottom: 3px;
        }
        .svc-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          height: 1px;
          width: 100%;
          background: var(--dark);
          transform-origin: left;
          transition: background 0.25s;
        }
        .svc-link:hover { color: var(--brown); }
        .svc-link:hover::after { background: var(--brown); }
 
        @media (max-width: 768px) {
          .svc-card, .svc-card.reverse {
            grid-template-columns: 1fr;
            direction: ltr;
          }
          .svc-visual { min-height: 220px; }
          .svc-body { padding: 36px 28px; }
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .stat-item:nth-child(3) { border-left: none; }
        }
 
        /* ── EXPERTISE STRIP ── */
        .expertise-section {
          padding: 96px 0;
          position: relative;
          overflow: hidden;
        }
        .expertise-bg {
          position: absolute;
          inset: 0;
          background-image: url('/images/marble-texture.jpg');
          background-size: cover;
          background-position: center;
        }
        .expertise-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.82);
        }
        .expertise-inner {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .expertise-inner { grid-template-columns: 1fr; gap: 48px; }
        }
        .expertise-text p {
          font-size: 14px;
          line-height: 1.9;
          color: var(--muted);
          margin-bottom: 20px;
        }
        .expertise-badges {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .exp-badge {
          background: #fff;
          border: 1px solid rgba(196,180,154,0.3);
          border-radius: 16px;
          padding: 28px 24px;
          text-align: center;
          animation: floatBadge 4s ease-in-out infinite;
        }
        .exp-badge:nth-child(2) { animation-delay: 1s; }
        .exp-badge:nth-child(3) { animation-delay: 2s; }
        .exp-badge:nth-child(4) { animation-delay: 3s; }
        .exp-badge-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          font-weight: 600;
          color: var(--brown);
          line-height: 1;
          margin-bottom: 6px;
        }
        .exp-badge-label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
        }
 
        /* ── WHY US ── */
        .why-section {
          padding: 96px 0;
          background: var(--dark);
          position: relative;
          overflow: hidden;
        }
        .why-section::before {
          content: 'DM';
          position: absolute;
          font-family: 'Cormorant Garamond', serif;
          font-size: 420px;
          font-weight: 700;
          color: rgba(255,255,255,0.02);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
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
        .why-header .section-tag { color: var(--stone); }
        .why-header .section-tag::before { background: var(--stone); }
        .why-header .section-title { color: #fff; }
 
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr; }
        }
 
        .why-item {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          padding: 22px 20px;
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
          cursor: default;
        }
        .why-item:hover {
          background: rgba(140,107,74,0.12);
          border-color: rgba(140,107,74,0.3);
          transform: translateY(-3px);
        }
        .why-icon {
          width: 40px; height: 40px;
          border-radius: 50%;
          background: var(--brown);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .why-label {
          font-size: 13px;
          color: rgba(255,255,255,0.8);
          font-weight: 400;
          letter-spacing: 0.02em;
        }
 
        /* ── PROCESS ── */
        .process-section {
          padding: 96px 0;
          background: var(--warm);
        }
        .process-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .process-header { text-align: center; margin-bottom: 64px; }
 
        .process-track {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        /* connecting line */
        .process-track::before {
          content: '';
          position: absolute;
          top: 40px;
          left: calc(12.5% + 24px);
          right: calc(12.5% + 24px);
          height: 1px;
          background: linear-gradient(to right, var(--stone), var(--brown), var(--stone));
          opacity: 0.4;
          pointer-events: none;
        }
        @media (max-width: 900px) {
          .process-track {
            grid-template-columns: 1fr 1fr;
          }
          .process-track::before { display: none; }
        }
        @media (max-width: 560px) {
          .process-track { grid-template-columns: 1fr; }
        }
 
        .process-card {
          background: #fff;
          border-radius: 16px;
          padding: 36px 28px;
          text-align: center;
          position: relative;
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .process-card:hover {
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
          transform: translateY(-4px);
        }
        .process-step-circle {
          width: 64px; height: 64px;
          border-radius: 50%;
          background: var(--dark);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          position: relative;
        }
        .process-step-circle svg { color: #fff; }
        .process-step-num {
          position: absolute;
          top: -6px; right: -6px;
          width: 22px; height: 22px;
          border-radius: 50%;
          background: var(--brown);
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .process-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 600;
          color: var(--dark);
          margin-bottom: 12px;
        }
        .process-desc {
          font-size: 13px;
          line-height: 1.8;
          color: var(--muted);
        }
 
        /* ── CTA ── */
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
          background: radial-gradient(ellipse at center, rgba(249,246,241,0.2) 0%, rgba(249,246,241,0.75) 100%);
        }
        .cta-inner {
          position: relative;
          max-width: 640px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 5.5vw, 60px);
          font-weight: 300;
          color: var(--dark);
          line-height: 1.1;
          margin-bottom: 20px;
        }
        .cta-title em { font-style: italic; color: var(--brown); }
        .cta-desc {
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
        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--dark);
          color: #fff;
          padding: 15px 34px;
          border-radius: 100px;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.3s, transform 0.2s;
        }
        .cta-btn-primary:hover { background: var(--brown); transform: translateY(-2px); }
        .cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: var(--dark);
          padding: 15px 34px;
          border-radius: 100px;
          border: 1px solid var(--dark);
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.3s, color 0.3s, transform 0.2s;
        }
        .cta-btn-secondary:hover {
        background: var(--brown);
        color: #fff;
        border-color: var(--brown);
        transform: translateY(-2px);
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
          font-size: 12px;
          letter-spacing: 0.06em;
          color: var(--muted);
        }
        .cta-badge svg { color: var(--brown); }
      `}</style>
 
      <div className="svc-root">
        <Header />
 
        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-bg" />
 
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="dot" />
              Dayanand Marbles &mdash; Our Services
            </div>
 
            <h1 className="hero-title">
              Expert<br /><em>Services</em>
            </h1>
 
            <p className="hero-sub">
              Supply · Polishing · Restoration
            </p>
 
            <p className="hero-desc">
              From premium stone supply to professional marble polishing, we deliver
              excellence at every step of your natural stone journey.
            </p>
 
            <Link href="#services" className="hero-cta">
              Explore Services <ArrowRight size={16} />
            </Link>
          </div>
 
          <div className="hero-scroll">
            <ChevronDown size={18} />
            <span>Scroll</span>
          </div>
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
 
        {/* ── SERVICES ── */}
        <section className="services-section" id="services">
          <div className="services-inner">
            <Reveal className="services-header">
              <div className="section-tag">What We Offer</div>
              <h2 className="section-title">
                Our <em>Services</em>
              </h2>
            </Reveal>
 
            <div className="svc-grid">
              {services.map((svc, i) => (
                <Reveal key={svc.id} delay={i * 0.08}>
                  <div className={`svc-card ${i % 2 === 1 ? "reverse" : ""}`}>
                    {/* Visual / icon panel */}
                    <div className="svc-visual">
                      <div className="svc-visual-num">{svc.num}</div>
                      <div className="svc-icon-wrap">
                        <svc.Icon size={40} strokeWidth={1.2} />
                      </div>
                    </div>
 
                    {/* Text panel */}
                    <div className="svc-body">
                      <div className="svc-num">{svc.num}</div>
                      <h3 className="svc-title">{svc.title}</h3>
                      <div className="svc-subtitle">{svc.subtitle}</div>
                      <p className="svc-desc">{svc.description}</p>
                      <div className="svc-features">
                        {svc.features.map((f) => (
                          <div className="svc-feature" key={f}>
                            <CheckCircle2 size={14} />
                            {f}
                          </div>
                        ))}
                      </div>
                      <Link href={`/contact?service=${svc.id}`} className="svc-link">
                        Enquire Now <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
 
        {/* ── EXPERTISE ── */}
        <section className="expertise-section">
          <div className="expertise-bg" />
          <div className="expertise-inner">
            <Reveal className="expertise-text">
              <div className="section-tag">Our Story</div>
              <h2 className="section-title" style={{ marginBottom: 28 }}>
                Crafting Spaces<br /><em>with Natural Stone</em>
              </h2>
              <p>
                With over 25 years of experience, Dayanand Marbles has established itself
                as a trusted name for premium marble, granite, and tiles. Our journey began
                with a simple mission: to bring the finest natural stones to homes and
                businesses across India.
              </p>
              <p>
                We maintain direct relationships with quarries in Italy, Turkey, Brazil,
                and across Rajasthan — ensuring our clients receive the highest quality
                stones at competitive prices. Every slab is hand-selected for its unique
                character and superior quality.
              </p>
              <p>
                Our stone experts guide clients through every step — from understanding
                stone properties to choosing the perfect finish for their application.
              </p>
            </Reveal>
 
            <Reveal delay={0.15} className="expertise-badges">
              {stats.map((s, i) => (
                <div
                  className="exp-badge"
                  key={s.label}
                  style={{ animationDelay: `${i}s` }}
                >
                  <div className="exp-badge-val">{s.value}</div>
                  <div className="exp-badge-label">{s.label}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
 
        {/* ── WHY US ── */}
        <section className="why-section">
          <div className="why-inner">
            <Reveal className="why-header">
              <div className="section-tag">Our Edge</div>
              <h2 className="section-title">
                The Dayanand <em>Difference</em>
              </h2>
            </Reveal>
 
            <div className="why-grid">
              {whyUs.map((item, i) => (
                <Reveal key={item} delay={i * 0.08}>
                  <div className="why-item">
                    <div className="why-icon">
                      <CheckCircle2 size={16} color="#fff" />
                    </div>
                    <span className="why-label">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
 
        {/* ── PROCESS ── */}
        <section className="process-section">
          <div className="process-inner">
            <Reveal className="process-header">
              <div className="section-tag">How It Works</div>
              <h2 className="section-title">
                Your Journey to <em>Premium Stone</em>
              </h2>
              <p
                style={{
                  marginTop: 16,
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: "var(--muted)",
                  maxWidth: 520,
                  margin: "16px auto 0",
                }}
              >
                We've streamlined every step — from first consultation to final
                installation — making it simple, transparent, and enjoyable.
              </p>
            </Reveal>
 
            <div className="process-track">
              {processSteps.map((step, i) => (
                <Reveal key={step.step} delay={i * 0.12}>
                  <div className="process-card">
                    <div className="process-step-circle">
                      <step.Icon size={26} strokeWidth={1.5} />
                      <div className="process-step-num">{step.step}</div>
                    </div>
                    <div className="process-title">{step.title}</div>
                    <div className="process-desc">{step.description}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
 
        {/* ── CTA ── */}
        <section className="cta-section">
          <div className="cta-bg" />
          <Reveal className="cta-inner">
            <div className="section-tag" style={{ justifyContent: "center" }}>
              Ready to Transform Your Space?
            </div>
            <h2 className="cta-title">
              Request Your<br /><em>Free Quote Today</em>
            </h2>
            <p className="cta-desc">
              Whether you're renovating your home or planning a large commercial project,
              our team is ready to help you find the perfect stone solution.
            </p>
            <div className="cta-btns">
              <Link href="/contact" className="cta-btn-primary">
                Get Free Quote <ArrowRight size={15} />
              </Link>
              <Link href="/gallery" className="cta-btn-secondary">
                View Gallery <ArrowRight size={15} />
              </Link>
            </div>
            <div className="cta-badges">
              {["Free Consultation", "No Obligation", "Expert Guidance"].map((b) => (
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