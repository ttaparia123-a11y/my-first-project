"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  X, ChevronLeft, ChevronRight,
  Users, Building2, Home, Paintbrush,
  ArrowRight, ChevronDown, CheckCircle2,
  ZoomIn, Star, Quote,
} from "lucide-react"

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: `opacity .75s ease ${delay}s, transform .75s ease ${delay}s` }}>
      {children}
    </div>
  )
}

// ─── ALL IMAGES FIXED WITH UNIQUE UNSPLASH URLs ───────────────────────────────
const projects = [
  {
    id: 1, title: "Luxury Villa Flooring", category: "flooring",
    // ✅ Use your actual local image — already exists!
    image: "/images/luxury villa flooring.jpeg",
    description: "Premium Italian marble flooring installation for a luxury villa in Udaipur",
  },
  {
    id: 2, title: "Modern Bathroom Walls", category: "walls",
    // ✅ Unique: white marble bathroom wall
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    description: "Floor-to-ceiling marble wall design with custom detailing",
  },
  {
    id: 3, title: "Grand Staircase", category: "interiors",
    // ✅ Unique: marble staircase
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80",
    description: "Elegant marble staircase with custom detailing and handrails",
  },
  {
    id: 4, title: "Kitchen Countertop", category: "kitchens",
    // ✅ Unique: white marble kitchen island
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    description: "Calacatta marble kitchen island with waterfall edges",
  },
  {
    id: 5, title: "Living Room Interior", category: "interiors",
    // ✅ Unique: marble luxury living room
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    description: "Complete marble interior transformation for a premium residence",
  },
  {
    id: 6, title: "Hotel Lobby Flooring", category: "flooring",
    // ✅ Unique: hotel lobby marble floor pattern
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
    description: "Geometric marble floor pattern for a luxury hotel lobby",
  },
  {
    id: 7, title: "Granite Kitchen", category: "kitchens",
    // ✅ Use your actual local image — already exists!
    image: "/images/the grand palace udaipur.jpeg",
    description: "Premium Black Galaxy granite countertop installation",
  },
  {
    id: 8, title: "Marble Feature Wall", category: "walls",
    // ✅ Unique: dramatic marble feature wall
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    description: "Statement Statuario marble feature wall in a residential project",
  },
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "flooring", label: "Flooring" },
  { id: "walls", label: "Walls" },
  { id: "kitchens", label: "Kitchens" },
  { id: "interiors", label: "Interiors" },
]

const clientTypes = [
  { Icon: Home,       title: "Homeowners",        desc: "Transforming residential spaces with premium marble installations" },
  { Icon: Building2,  title: "Builders",           desc: "Partnering with construction companies for large-scale projects" },
  { Icon: Paintbrush, title: "Interior Designers", desc: "Collaborating on luxury interior design projects" },
  { Icon: Users,      title: "Architects",         desc: "Supporting architectural visions with quality materials" },
]

const stats = [
  { value: "5000+", label: "Projects Completed" },
  { value: "20+",   label: "Years of Excellence" },
  { value: "1000+", label: "Happy Clients" },
  { value: "100%",  label: "Quality Assured" },
]

const testimonials = [
  { id: 1, name: "Rajesh Mehta",    role: "Homeowner, Udaipur",        rating: 5, text: "Dayanand Marbles transformed our living room beyond imagination. The quality of the Calacatta marble was impeccable and the team was incredibly professional.", project: "Luxury Villa Flooring" },
  { id: 2, name: "Priya Sharma",    role: "Interior Designer, Jaipur", rating: 5, text: "I've collaborated on over 15 projects with Dayanand Marbles. Their stone selection is unmatched in Rajasthan and ability to deliver on tight deadlines sets them apart.", project: "Hotel Lobby Flooring" },
  { id: 3, name: "Arjun Singhania", role: "Builder, Jodhpur",          rating: 5, text: "For our premium residential complex they supplied over 5000 sq ft of granite flooring. Flawless quality, competitive pricing, on-time delivery — exactly what we needed.", project: "Granite Kitchen" },
]

const processSteps = [
  { num: "01", title: "Site Visit & Brief",   desc: "We visit your site, understand your vision, budget, and timeline to recommend the most suitable stones." },
  { num: "02", title: "Stone Selection",      desc: "Browse our showroom or we bring samples to you. Every slab hand-selected for your specific project." },
  { num: "03", title: "Precision Cutting",    desc: "Stones are cut and finished to exact specifications — polished, honed, or brushed as required." },
  { num: "04", title: "Installation",         desc: "Our expert team handles delivery and professional installation with meticulous attention to detail." },
]

const featuredProject = {
  title: "The Grand Palace — Udaipur",
  category: "Commercial · Flooring · Walls",
  year: "2023",
  area: "12,000 sq ft",
  stones: "Calacatta Gold + Black Galaxy",
  desc: "Our most ambitious project to date — a complete natural stone transformation of a heritage hotel. Every corridor, lobby, and suite features hand-selected Italian marble paired with dramatic Black Galaxy granite accents.",
  // ✅ Your actual local image
  image: "/images/the grand palace udaipur.jpeg",
}

export default function PortfolioPage() {
  const [activeCategory,  setActiveCategory]  = useState("all")
  const [lightboxOpen,    setLightboxOpen]     = useState(false)
  const [currentImage,    setCurrentImage]     = useState(0)
  const [heroVisible,     setHeroVisible]      = useState(false)
  const [filterChanging,  setFilterChanging]   = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  const filtered = activeCategory === "all" ? projects : projects.filter(p => p.category === activeCategory)

  const handleFilter = (id: string) => {
    if (id === activeCategory) return
    setFilterChanging(true)
    setTimeout(() => { setActiveCategory(id); setFilterChanging(false) }, 280)
  }

  const openLightbox  = (i: number) => { setCurrentImage(i); setLightboxOpen(true) }
  const closeLightbox = () => setLightboxOpen(false)
  const next = () => setCurrentImage(p => (p + 1) % filtered.length)
  const prev = () => setCurrentImage(p => (p - 1 + filtered.length) % filtered.length)

  useEffect(() => {
    if (!lightboxOpen) return
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft")  prev()
      if (e.key === "Escape")     closeLightbox()
    }
    window.addEventListener("keydown", h)
    return () => window.removeEventListener("keydown", h)
  }, [lightboxOpen, filtered.length])

  // ── RENDER IMG: handles both local paths and Unsplash URLs ──
  const renderImg = (src: string, alt: string, fill?: boolean, width?: number, height?: number, className?: string, style?: React.CSSProperties) => {
    if (fill) {
      return <img src={src} alt={alt} className={className} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", ...style }} />
    }
    return <img src={src} alt={alt} width={width} height={height} className={className} style={{ width: "100%", height: "auto", display: "block", ...style }} />
  }

  return (
    <>
      <style>{`
        :root {
          --cream:#f9f6f1; --warm:#ede9e0; --stone:#c4b49a;
          --brown:#8c6b4a; --dark:#1c1a17; --text:#3d3530; --muted:#847870;
        }
        .pr { color:var(--text); background:var(--cream); }

        @keyframes heroFade { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes bounce   { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(7px)} }
        @keyframes pulseD   { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }
        @keyframes fadeIn   { from{opacity:0;transform:scale(.97)} to{opacity:1;transform:scale(1)} }
        @keyframes lbIn     { from{opacity:0;transform:scale(.94)} to{opacity:1;transform:scale(1)} }

        .hero { position:relative;min-height:92vh;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;padding-top:96px; }
        .hero-bg { position:absolute;inset:0;background-image:url('/images/marble-texture.jpg');background-size:cover;background-position:center;filter:brightness(1.04) contrast(0.97); }
        .hero-bg::after { content:'';position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(249,246,241,.15) 0%,rgba(249,246,241,.70) 100%); }
        .hero-content { position:relative;z-index:2;text-align:center;max-width:820px;padding:0 24px; }
        .hero-eyebrow { display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.75);border:1px solid rgba(140,107,74,.25);backdrop-filter:blur(6px);border-radius:100px;padding:6px 20px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--brown);margin-bottom:32px; }
        .hero-eyebrow .dot { width:6px;height:6px;border-radius:50%;background:var(--brown);animation:pulseD 2s infinite; }
        .hero-title { font-size:clamp(68px,11vw,120px);font-weight:400;line-height:.9;color:var(--dark);margin-bottom:16px;letter-spacing:-.01em; }
        .hero-title em { font-style:italic;color:var(--brown); }
        .hero-sub { font-size:clamp(18px,2.5vw,26px);font-weight:400;color:var(--muted);letter-spacing:.06em;margin-bottom:20px; }
        .hero-desc { font-size:15px;line-height:1.85;color:var(--text);max-width:500px;margin:0 auto 48px; }
        .hero-cta { display:inline-flex;align-items:center;gap:10px;background:var(--dark);color:#fff;padding:14px 32px;border-radius:100px;font-size:11px;letter-spacing:.14em;text-transform:uppercase;text-decoration:none;transition:background .3s,transform .2s; }
        .hero-cta:hover { background:var(--brown);transform:translateY(-2px); }
        .hero-scroll { position:absolute;bottom:32px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:6px;color:var(--muted);font-size:10px;letter-spacing:.16em;text-transform:uppercase;animation:bounce 2.2s infinite;z-index:2; }

        .stats-bar { background:var(--dark);padding:28px 0; }
        .stats-inner { max-width:900px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);text-align:center; }
        .stat-item { padding:12px 0; }
        .stat-item+.stat-item { border-left:1px solid rgba(255,255,255,.1); }
        .stat-value { font-size:36px;font-weight:400;color:var(--stone);line-height:1;margin-bottom:4px; }
        .stat-label { font-size:11px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.45); }

        .section-tag { display:inline-flex;align-items:center;gap:8px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--brown);margin-bottom:16px; }
        .section-tag::before { content:'';display:block;width:24px;height:1px;background:var(--brown); }
        .section-title { font-size:clamp(30px,4.5vw,50px);font-weight:700;color:var(--dark);line-height:1.1; }
        .section-title em { font-style:italic;font-weight:400;color:var(--brown); }

        .featured-section { padding:96px 0;background:#fff; }
        .featured-wrap { max-width:1200px;margin:0 auto;padding:0 32px; }
        .featured-card { display:grid;grid-template-columns:1.1fr 0.9fr;border-radius:6px;overflow:hidden;box-shadow:0 24px 72px rgba(0,0,0,.1); }
        @media(max-width:860px){.featured-card{grid-template-columns:1fr;}}
        .feat-img-wrap { position:relative;min-height:500px;overflow:hidden; }
        .feat-img-wrap::after { content:'';position:absolute;inset:0;background:linear-gradient(to right,transparent 60%,rgba(28,26,23,.3)); }
        .feat-label { position:absolute;top:28px;left:28px;background:rgba(255,255,255,.88);backdrop-filter:blur(8px);border:1px solid rgba(140,107,74,.2);border-radius:100px;padding:5px 16px;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--brown);z-index:2; }
        .feat-body { background:var(--dark);padding:56px 48px;display:flex;flex-direction:column;justify-content:center; }
        .feat-yr { font-size:80px;font-weight:400;color:rgba(255,255,255,.04);line-height:1;margin-bottom:-16px; }
        .feat-title { font-size:28px;font-weight:700;color:#fff;line-height:1.2;margin-bottom:8px; }
        .feat-cat { font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--stone);margin-bottom:24px; }
        .feat-desc { font-size:14px;line-height:1.85;color:rgba(255,255,255,.55);margin-bottom:32px; }
        .feat-specs { display:flex;flex-direction:column;gap:12px;margin-bottom:36px; }
        .spec-row { display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,255,255,.07);padding-bottom:10px; }
        .spec-lbl { font-size:11px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.3); }
        .spec-val { font-size:13px;color:rgba(255,255,255,.7); }
        .feat-link { display:inline-flex;align-items:center;gap:8px;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--stone);text-decoration:none;border-bottom:1px solid rgba(196,180,154,.3);padding-bottom:2px;width:fit-content;transition:color .25s,border-color .25s; }
        .feat-link:hover { color:#fff;border-color:#fff; }

        .filter-bar { position:sticky;top:0;z-index:20;background:rgba(249,246,241,.93);backdrop-filter:blur(12px);border-bottom:1px solid rgba(196,180,154,.25); }
        .filter-inner { max-width:1100px;margin:0 auto;padding:0 32px;display:flex;align-items:center;overflow-x:auto;scrollbar-width:none; }
        .filter-inner::-webkit-scrollbar{display:none;}
        .filter-btn { position:relative;padding:20px 24px;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);font-weight:400;background:none;border:none;cursor:pointer;white-space:nowrap;transition:color .25s; }
        .filter-btn::after { content:'';position:absolute;bottom:0;left:50%;right:50%;height:2px;background:var(--brown);transition:left .3s ease,right .3s ease; }
        .filter-btn.active { color:var(--dark); }
        .filter-btn.active::after { left:20%;right:20%; }
        .filter-btn:hover { color:var(--dark); }

        .gallery-section { padding:64px 0 96px;background:var(--cream); }
        .gallery-inner { max-width:1200px;margin:0 auto;padding:0 32px; }
        .masonry-grid { columns:3;column-gap:16px; }
        @media(max-width:860px){.masonry-grid{columns:2;}}
        @media(max-width:560px){.masonry-grid{columns:1;}}
        .masonry-item { break-inside:avoid;margin-bottom:16px;border-radius:4px;overflow:hidden;position:relative;cursor:pointer;animation:fadeIn .45s ease forwards; }
        .masonry-img { width:100%;height:auto;display:block;transition:transform .8s cubic-bezier(.25,.46,.45,.94); }
        .masonry-item:hover .masonry-img { transform:scale(1.06); }
        .masonry-overlay { position:absolute;inset:0;background:linear-gradient(to top,rgba(28,26,23,.82) 0%,rgba(28,26,23,0) 55%);opacity:0;transition:opacity .4s ease;display:flex;flex-direction:column;justify-content:flex-end;padding:24px 22px; }
        .masonry-item:hover .masonry-overlay { opacity:1; }
        .masonry-zoom { position:absolute;top:16px;right:16px;width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.12);backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;opacity:0;transform:translateY(-6px);transition:opacity .35s ease .05s,transform .35s ease .05s; }
        .masonry-item:hover .masonry-zoom { opacity:1;transform:translateY(0); }
        .masonry-cat { font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--stone);margin-bottom:5px;transform:translateY(8px);opacity:0;transition:opacity .35s ease .05s,transform .35s ease .05s; }
        .masonry-item:hover .masonry-cat { opacity:1;transform:translateY(0); }
        .masonry-title { font-size:22px;font-weight:400;font-style:italic;color:#fff;line-height:1.1;transform:translateY(8px);opacity:0;transition:opacity .35s ease .1s,transform .35s ease .1s; }
        .masonry-item:hover .masonry-title { opacity:1;transform:translateY(0); }

        .lb-backdrop { position:fixed;inset:0;z-index:100;background:rgba(28,26,23,.97);display:flex;align-items:center;justify-content:center; }
        .lb-content { position:relative;max-width:min(900px,90vw);animation:lbIn .35s ease; }
        .lb-img { max-height:78vh;width:auto;border-radius:4px;display:block;object-fit:contain; }
        .lb-info { position:absolute;bottom:0;left:0;right:0;background:linear-gradient(to top,rgba(28,26,23,.9),transparent);padding:32px 24px 20px;border-radius:0 0 4px 4px;text-align:center; }
        .lb-title { font-size:26px;font-weight:400;font-style:italic;color:#fff;margin-bottom:4px; }
        .lb-desc { font-size:13px;color:rgba(255,255,255,.55); }
        .lb-close { position:absolute;top:20px;right:20px;width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .25s,transform .2s; }
        .lb-close:hover { background:var(--brown);transform:rotate(90deg); }
        .lb-nav { position:absolute;top:50%;transform:translateY(-50%);width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.7);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .25s,color .25s,transform .25s; }
        .lb-nav:hover { background:var(--brown);color:#fff;transform:translateY(-50%) scale(1.08); }
        .lb-prev{left:-72px;} .lb-next{right:-72px;}
        @media(max-width:1100px){.lb-prev{left:12px;} .lb-next{right:12px;}}
        .lb-counter { position:absolute;bottom:20px;left:50%;transform:translateX(-50%);font-size:11px;font-weight:500;letter-spacing:.16em;color:rgba(255,255,255,.35);text-transform:uppercase; }

        .process-section { padding:96px 0;background:#fff; }
        .process-inner { max-width:1100px;margin:0 auto;padding:0 32px; }
        .process-header { text-align:center;margin-bottom:64px; }
        .process-track { display:grid;grid-template-columns:repeat(4,1fr);gap:24px;position:relative; }
        .process-track::before { content:'';position:absolute;top:36px;left:calc(12.5% + 20px);right:calc(12.5% + 20px);height:1px;background:linear-gradient(to right,var(--stone),var(--brown),var(--stone));opacity:.4;pointer-events:none; }
        @media(max-width:860px){.process-track{grid-template-columns:1fr 1fr;} .process-track::before{display:none;}}
        @media(max-width:480px){.process-track{grid-template-columns:1fr;}}
        .process-card { background:var(--cream);border-radius:12px;padding:36px 28px;text-align:center;transition:box-shadow .3s,transform .3s; }
        .process-card:hover { box-shadow:0 12px 40px rgba(0,0,0,.08);transform:translateY(-4px); }
        .process-num { font-size:52px;font-weight:400;color:var(--stone);opacity:.3;line-height:1;margin-bottom:-8px; }
        .process-title { font-size:22px;font-weight:400;font-style:italic;color:var(--dark);margin-bottom:12px; }
        .process-desc { font-size:13px;line-height:1.85;color:var(--muted); }

        .testi-section { padding:96px 0;background:var(--dark);position:relative;overflow:hidden; }
        .testi-section::before { content:'"';position:absolute;font-size:600px;font-weight:400;color:rgba(255,255,255,.02);top:-60px;left:40px;line-height:1;pointer-events:none; }
        .testi-inner { position:relative;max-width:1100px;margin:0 auto;padding:0 32px; }
        .testi-header { margin-bottom:56px; }
        .testi-header .section-tag { color:var(--stone); }
        .testi-header .section-tag::before { background:var(--stone); }
        .testi-header .section-title { color:#fff; }
        .testi-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:20px; }
        @media(max-width:860px){.testi-grid{grid-template-columns:1fr 1fr;}}
        @media(max-width:560px){.testi-grid{grid-template-columns:1fr;}}
        .testi-card { background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:36px 32px;transition:background .3s,border-color .3s,transform .3s;cursor:default;position:relative; }
        .testi-card:hover { background:rgba(140,107,74,.1);border-color:rgba(140,107,74,.25);transform:translateY(-4px); }
        .testi-quote { position:absolute;top:28px;right:28px;color:rgba(196,180,154,.2); }
        .testi-stars { display:flex;gap:4px;margin-bottom:20px; }
        .testi-stars svg { color:var(--stone);fill:var(--stone); }
        .testi-text { font-size:14px;line-height:1.85;color:rgba(255,255,255,.55);margin-bottom:28px;font-style:italic; }
        .testi-divider { height:1px;background:rgba(255,255,255,.08);margin-bottom:20px; }
        .testi-name { font-size:18px;font-weight:400;font-style:italic;color:#fff;margin-bottom:4px; }
        .testi-role { font-size:11px;letter-spacing:.1em;color:var(--stone);text-transform:uppercase;margin-bottom:8px; }
        .testi-project { font-size:12px;color:rgba(255,255,255,.25); }

        .clients-section { padding:96px 0;background:var(--warm); }
        .clients-inner { max-width:1100px;margin:0 auto;padding:0 32px; }
        .clients-header { margin-bottom:56px; }
        .clients-grid { display:grid;grid-template-columns:repeat(4,1fr);gap:16px; }
        @media(max-width:860px){.clients-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:480px){.clients-grid{grid-template-columns:1fr;}}
        .client-card { background:#fff;border:1px solid rgba(196,180,154,.25);border-radius:12px;padding:36px 24px;text-align:center;transition:box-shadow .3s,transform .3s; }
        .client-card:hover { box-shadow:0 12px 40px rgba(0,0,0,.08);transform:translateY(-4px); }
        .client-icon { width:56px;height:56px;border-radius:50%;background:var(--warm);border:1px solid rgba(196,180,154,.35);display:flex;align-items:center;justify-content:center;margin:0 auto 20px;transition:background .3s; }
        .client-card:hover .client-icon { background:var(--brown); }
        .client-icon svg { color:var(--brown);transition:color .3s; }
        .client-card:hover .client-icon svg { color:#fff; }
        .client-title { font-size:22px;font-weight:400;font-style:italic;color:var(--dark);margin-bottom:10px; }
        .client-desc { font-size:13px;line-height:1.85;color:var(--muted); }

        .cta-section { padding:112px 0;position:relative;overflow:hidden;text-align:center; }
        .cta-bg { position:absolute;inset:0;background-image:url('/images/marble-texture.jpg');background-size:cover;background-position:center;filter:brightness(1.04) contrast(0.97); }
        .cta-bg::after { content:'';position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(249,246,241,.15) 0%,rgba(249,246,241,.78) 100%); }
        .cta-inner { position:relative;max-width:640px;margin:0 auto;padding:0 32px; }
        .cta-title { font-size:clamp(36px,5.5vw,60px);font-weight:700;color:var(--dark);line-height:1.1;margin-bottom:20px; }
        .cta-title em { font-style:italic;font-weight:400;color:var(--brown); }
        .cta-desc { font-size:15px;line-height:1.85;color:var(--muted);margin-bottom:44px; }
        .cta-btns { display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-bottom:48px; }
        .btn-p { display:inline-flex;align-items:center;gap:10px;background:var(--dark);color:#fff;padding:15px 34px;border-radius:100px;font-size:11px;letter-spacing:.14em;text-transform:uppercase;text-decoration:none;transition:background .3s,transform .2s; }
        .btn-p:hover { background:var(--brown);transform:translateY(-2px); }
        .btn-o { display:inline-flex;align-items:center;gap:10px;border:1px solid var(--dark);color:var(--dark);padding:15px 34px;border-radius:100px;font-size:11px;letter-spacing:.14em;text-transform:uppercase;text-decoration:none;transition:background .3s,color .3s,transform .2s; }
        .btn-o:hover { background:var(--dark);color:#fff;transform:translateY(-2px); }
        .cta-badges { display:flex;justify-content:center;gap:32px;flex-wrap:wrap; }
        .cta-badge { display:flex;align-items:center;gap:8px;font-size:11px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--muted); }
        .cta-badge svg { color:var(--brown); }

        @media(max-width:640px){
          .stats-inner{grid-template-columns:repeat(2,1fr);}
          .stat-item:nth-child(3){border-left:none;}
        }
      `}</style>

      <div className="pr">
        <Header />

        {/* HERO */}
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-content">
            <div className="hero-eyebrow" style={{ opacity:heroVisible?1:0, transform:heroVisible?"translateY(0)":"translateY(16px)", transition:"opacity .9s ease .1s,transform .9s ease .1s" }}>
              <span className="dot" /> Dayanand Marbles &mdash; 20+ Years of Excellence
            </div>
            <h1 className="hero-title" style={{ opacity:heroVisible?1:0, transform:heroVisible?"translateY(0)":"translateY(20px)", transition:"opacity .9s ease .3s,transform .9s ease .3s" }}>
              Our<br /><em>Portfolio</em>
            </h1>
            <p className="hero-sub" style={{ opacity:heroVisible?1:0, transform:heroVisible?"translateY(0)":"translateY(20px)", transition:"opacity .9s ease .45s,transform .9s ease .45s" }}>
              Flooring · Walls · Kitchens · Interiors
            </p>
            <p className="hero-desc" style={{ opacity:heroVisible?1:0, transform:heroVisible?"translateY(0)":"translateY(20px)", transition:"opacity .9s ease .6s,transform .9s ease .6s" }}>
              Explore our finest marble and granite installations across residential and commercial spaces — each project a testament to timeless craftsmanship.
            </p>
            <a href="#gallery" className="hero-cta" style={{ opacity:heroVisible?1:0, transform:heroVisible?"translateY(0)":"translateY(20px)", transition:"opacity .9s ease .75s,transform .9s ease .75s" }}>
              View Projects <ArrowRight size={16} />
            </a>
          </div>
          <div className="hero-scroll"><ChevronDown size={18} /><span>Scroll</span></div>
        </section>

        {/* STATS */}
        <div className="stats-bar">
          <div className="stats-inner">
            {stats.map(s => (
              <div className="stat-item" key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURED PROJECT */}
        <section className="featured-section">
          <div className="featured-wrap" style={{ marginBottom:56 }}>
            <Reveal>
              <div className="section-tag">Signature Work</div>
              <h2 className="section-title">Featured <em>Project</em></h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="featured-wrap">
            <div className="featured-card">
              <div className="feat-img-wrap">
                <img src={featuredProject.image} alt={featuredProject.title} style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover" }} />
                <div className="feat-label">Signature Project</div>
              </div>
              <div className="feat-body">
                <div className="feat-yr">{featuredProject.year}</div>
                <h3 className="feat-title">{featuredProject.title}</h3>
                <div className="feat-cat">{featuredProject.category}</div>
                <p className="feat-desc">{featuredProject.desc}</p>
                <div className="feat-specs">
                  <div className="spec-row"><span className="spec-lbl">Year</span><span className="spec-val">{featuredProject.year}</span></div>
                  <div className="spec-row"><span className="spec-lbl">Area</span><span className="spec-val">{featuredProject.area}</span></div>
                  <div className="spec-row"><span className="spec-lbl">Stones Used</span><span className="spec-val">{featuredProject.stones}</span></div>
                </div>
                <Link href="/contact" className="feat-link">Start a Similar Project <ArrowRight size={13} /></Link>
              </div>
            </div>
          </Reveal>
        </section>

        {/* FILTER BAR */}
        <div className="filter-bar" id="gallery">
          <div className="filter-inner">
            {categories.map(cat => (
              <button key={cat.id} className={`filter-btn ${activeCategory===cat.id?"active":""}`} onClick={() => handleFilter(cat.id)}>{cat.label}</button>
            ))}
          </div>
        </div>

        {/* GALLERY */}
        <section className="gallery-section">
          <div className="gallery-inner">
            <div className="masonry-grid" style={{ opacity:filterChanging?0:1, transition:"opacity .28s ease" }}>
              {filtered.map((p, i) => (
                <div key={`${p.id}-${activeCategory}`} className="masonry-item" style={{ animationDelay:`${i*.06}s` }} onClick={() => openLightbox(i)}>
                  <img src={p.image} alt={p.title} className="masonry-img" />
                  <div className="masonry-overlay">
                    <div className="masonry-zoom"><ZoomIn size={16} color="white" /></div>
                    <div className="masonry-cat">{p.category}</div>
                    <div className="masonry-title">{p.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LIGHTBOX */}
        {lightboxOpen && (
          <div className="lb-backdrop" onClick={closeLightbox}>
            <div className="lb-content" onClick={e => e.stopPropagation()}>
              <button className="lb-close" onClick={closeLightbox}><X size={18} /></button>
              <button className="lb-nav lb-prev" onClick={prev}><ChevronLeft size={22} /></button>
              <button className="lb-nav lb-next" onClick={next}><ChevronRight size={22} /></button>
              <img key={currentImage} src={filtered[currentImage].image} alt={filtered[currentImage].title} className="lb-img" style={{ animation:"lbIn .3s ease" }} />
              <div className="lb-info">
                <div className="lb-title">{filtered[currentImage].title}</div>
                <div className="lb-desc">{filtered[currentImage].description}</div>
              </div>
              <div className="lb-counter">{currentImage+1} / {filtered.length}</div>
            </div>
          </div>
        )}

        {/* TESTIMONIALS */}
        <section className="testi-section">
          <div className="testi-inner">
            <Reveal className="testi-header">
              <div className="section-tag">Client Stories</div>
              <h2 className="section-title">What Our <em>Clients Say</em></h2>
            </Reveal>
            <div className="testi-grid">
              {testimonials.map((t, i) => (
                <Reveal key={t.id} delay={i*.1}>
                  <div className="testi-card">
                    <div className="testi-quote"><Quote size={32} /></div>
                    <div className="testi-stars">{Array.from({length:t.rating}).map((_,j) => <Star key={j} size={14} />)}</div>
                    <p className="testi-text">"{t.text}"</p>
                    <div className="testi-divider" />
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                    <div className="testi-project">Project: {t.project}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENTS */}
        <section className="clients-section">
          <div className="clients-inner">
            <Reveal className="clients-header">
              <div className="section-tag">Who We Serve</div>
              <h2 className="section-title">Our <em>Clients</em></h2>
            </Reveal>
            <div className="clients-grid">
              {clientTypes.map((c, i) => (
                <Reveal key={c.title} delay={i*.08}>
                  <div className="client-card">
                    <div className="client-icon"><c.Icon size={24} /></div>
                    <div className="client-title">{c.title}</div>
                    <div className="client-desc">{c.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-bg" />
          <Reveal className="cta-inner">
            <div className="section-tag" style={{ justifyContent:"center" }}>Start Your Project</div>
            <h2 className="cta-title">Ready to Create<br /><em>Something Beautiful?</em></h2>
            <p className="cta-desc">Contact us today to discuss your vision. Our team of experts is ready to help you create stunning marble and granite installations.</p>
            <div className="cta-btns">
              <Link href="/contact" className="btn-p">Get a Quote <ArrowRight size={15} /></Link>
              <Link href="/products" className="btn-o">View Products <ArrowRight size={15} /></Link>
            </div>
            <div className="cta-badges">
              {["Free Consultation","Premium Quality","Expert Installation"].map(b => (
                <span className="cta-badge" key={b}><CheckCircle2 size={14} />{b}</span>
              ))}
            </div>
          </Reveal>
        </section>

        <Footer />
      </div>
    </>
  )
}