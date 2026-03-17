"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Clock,
  User,
  Tag,
  Search,
  BookOpen,
  ChevronRight,
} from "lucide-react"

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
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity .75s ease ${delay}s, transform .75s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const articles = [
  {
    id: 1,
    slug: "best-marble-for-home-flooring",
    title: "Best Marble for Home Flooring",
    excerpt:
      "Choosing the right marble for your home flooring can be overwhelming. We break down the top varieties — from classic Makrana White to luxurious Calacatta Gold — and explain what suits each space best.",
    image: "/images/portfolio/flooring-1.jpg",
    category: "Marble Guides",
    author: "Dayanand Marbles",
    date: "March 2, 2025",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    slug: "marble-vs-granite-comparison",
    title: "Marble vs Granite: Which is Right for You?",
    excerpt:
      "Both marble and granite are stunning natural stones, but they differ in durability, maintenance, and aesthetics. Here's a complete side-by-side comparison to help you decide.",
    image: "/images/granite.jpg",
    category: "Comparisons",
    author: "Dayanand Marbles",
    date: "February 18, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 3,
    slug: "how-to-maintain-marble-floors",
    title: "How to Maintain Marble Floors",
    excerpt:
      "Marble is timeless but requires care. Learn professional maintenance tips — from daily cleaning to deep polishing — that will keep your marble floors gleaming for decades.",
    image: "/images/portfolio/flooring-2.jpg",
    category: "Care & Maintenance",
    author: "Dayanand Marbles",
    date: "February 5, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    slug: "top-interior-marble-design-ideas",
    title: "Top Interior Marble Design Ideas for 2025",
    excerpt:
      "From dramatic marble accent walls to book-matched slabs in living rooms, discover the most inspiring interior design trends using natural stone this year.",
    image: "/images/portfolio/interior-1.jpg",
    category: "Design Inspiration",
    author: "Dayanand Marbles",
    date: "January 22, 2025",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 5,
    slug: "italian-marble-guide",
    title: "A Complete Guide to Italian Marble",
    excerpt:
      "Carrara, Calacatta, Statuario — Italian marble varieties each carry a unique character. Explore the world of Italian stone and find out which quarry produces your perfect slab.",
    image: "/images/italian-marble.jpg",
    category: "Marble Guides",
    author: "Dayanand Marbles",
    date: "January 10, 2025",
    readTime: "9 min read",
    featured: false,
  },
  {
    id: 6,
    slug: "granite-kitchen-countertops",
    title: "Why Granite is Perfect for Kitchen Countertops",
    excerpt:
      "Heat-resistant, scratch-proof, and endlessly beautiful — granite is the undisputed king of kitchen countertops. Here's everything you need to know before choosing your slab.",
    image: "/images/portfolio/kitchen-1.jpg",
    category: "Granite Guides",
    author: "Dayanand Marbles",
    date: "December 28, 2024",
    readTime: "5 min read",
    featured: false,
  },
]

const categories = [
  { name: "Marble Guides",      count: 12 },
  { name: "Granite Guides",     count: 8  },
  { name: "Care & Maintenance", count: 6  },
  { name: "Design Inspiration", count: 15 },
  { name: "Comparisons",        count: 4  },
  { name: "Industry News",      count: 9  },
]

const recentPosts = articles.slice(0, 4)

const stats = [
  { value: "50+",  label: "Articles Published" },
  { value: "20+",  label: "Years of Knowledge" },
  { value: "1000+", label: "Happy Readers" },
  { value: "100%", label: "Expert Insight" },
]

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function BlogPage() {
  const [heroVisible,     setHeroVisible]     = useState(false)
  const [activeCategory,  setActiveCategory]  = useState("All")
  const [searchQuery,     setSearchQuery]     = useState("")

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  const allCats = ["All", ...categories.map(c => c.name)]

  const filtered = articles.filter(a => {
    const matchesCat  = activeCategory === "All" || a.category === activeCategory
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          a.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  const featured = articles.find(a => a.featured)
  const gridArticles = filtered.filter(a => !a.featured || activeCategory !== "All" || searchQuery !== "")

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        :root {
          --cream:#f9f6f1; --warm:#ede9e0; --stone:#c4b49a;
          --brown:#8c6b4a; --dark:#1c1a17; --text:#3d3530; --muted:#847870;
        }
        .blog-root{ font-family:'Jost',sans-serif; color:var(--text); background:var(--cream); }

        /* ── keyframes ── */
        @keyframes pulseD{ 0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)} }
        @keyframes bounce{ 0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(7px)} }
        @keyframes shimmer{ 0%{background-position:-200% center}100%{background-position:200% center} }
        @keyframes fadeIn{ from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)} }

        /* ── HERO ── */
        .hero{
          position:relative; min-height:92vh;
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          overflow:hidden; padding-top:96px;
        }
        .hero-bg{
          position:absolute; inset:0;
          background-image:url('/images/marble-texture.jpg');
          background-size:cover; background-position:center;
          filter:brightness(1.04) contrast(0.97);
        }
        .hero-bg::after{
          content:''; position:absolute; inset:0;
          background:radial-gradient(ellipse at center,rgba(249,246,241,.15) 0%,rgba(249,246,241,.70) 100%);
        }
        .hero-content{ position:relative; z-index:2; text-align:center; max-width:820px; padding:0 24px; }
        .hero-eyebrow{
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(255,255,255,.75); border:1px solid rgba(140,107,74,.25);
          backdrop-filter:blur(6px); border-radius:100px; padding:6px 20px;
          font-size:11px; letter-spacing:.18em; text-transform:uppercase;
          color:var(--brown); font-weight:500; margin-bottom:32px;
        }
        .hero-eyebrow .dot{ width:6px;height:6px;border-radius:50%;background:var(--brown);animation:pulseD 2s infinite; }
        .hero-title{
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(68px,11vw,120px); font-weight:300;
          line-height:.9; color:var(--dark); margin-bottom:16px; letter-spacing:-.01em;
        }
        .hero-title em{ font-style:italic; color:var(--brown); }
        .hero-sub{
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(18px,2.5vw,26px); font-weight:400;
          color:var(--muted); letter-spacing:.06em; margin-bottom:20px;
        }
        .hero-desc{ font-size:15px; line-height:1.8; color:var(--text); max-width:500px; margin:0 auto 48px; }

        /* search bar in hero */
        .hero-search{
          display:flex; align-items:center; gap:0;
          background:rgba(255,255,255,.88); backdrop-filter:blur(8px);
          border:1px solid rgba(140,107,74,.2); border-radius:100px;
          padding:6px 6px 6px 24px;
          max-width:460px; margin:0 auto;
          opacity:0; animation:fadeIn .9s ease .8s forwards;
        }
        .hero-search input{
          flex:1; border:none; background:transparent;
          font-family:'Jost',sans-serif; font-size:14px; color:var(--dark);
          outline:none; padding:8px 0;
        }
        .hero-search input::placeholder{ color:var(--muted); }
        .hero-search-btn{
          display:flex; align-items:center; justify-content:center;
          width:44px; height:44px; border-radius:100px;
          background:var(--dark); color:#fff; border:none; cursor:pointer;
          transition:background .25s;
          flex-shrink:0;
        }
        .hero-search-btn:hover{ background:var(--brown); }

        .hero-scroll{
          position:absolute; bottom:32px; left:50%; transform:translateX(-50%);
          display:flex; flex-direction:column; align-items:center; gap:6px;
          color:var(--muted); font-size:10px; letter-spacing:.16em; text-transform:uppercase;
          animation:bounce 2.2s infinite; z-index:2;
        }

        /* ── STATS BAR ── */
        .stats-bar{ background:var(--dark); padding:28px 0; }
        .stats-inner{
          max-width:900px; margin:0 auto;
          display:grid; grid-template-columns:repeat(4,1fr); text-align:center;
        }
        .stat-item{ padding:12px 0; }
        .stat-item+.stat-item{ border-left:1px solid rgba(255,255,255,.1); }
        .stat-value{ font-family:'Cormorant Garamond',serif; font-size:36px; font-weight:600; color:var(--stone); line-height:1; margin-bottom:4px; }
        .stat-label{ font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:rgba(255,255,255,.45); }

        /* ── SHARED ── */
        .section-tag{
          display:inline-flex; align-items:center; gap:8px;
          font-size:11px; letter-spacing:.18em; text-transform:uppercase;
          color:var(--brown); font-weight:500; margin-bottom:16px;
        }
        .section-tag::before{ content:''; display:block; width:24px; height:1px; background:var(--brown); }
        .section-title{
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(30px,4.5vw,50px); font-weight:300; color:var(--dark); line-height:1.1;
        }
        .section-title em{ font-style:italic; color:var(--brown); }

        /* ── FEATURED ARTICLE ── */
        .featured-section{ padding:96px 0; background:#fff; }
        .featured-wrap{ max-width:1200px; margin:0 auto; padding:0 32px; }
        .featured-card{
          display:grid; grid-template-columns:1.2fr 0.8fr;
          border-radius:6px; overflow:hidden;
          box-shadow:0 24px 72px rgba(0,0,0,.1);
        }
        @media(max-width:860px){ .featured-card{grid-template-columns:1fr;} }
        .feat-img-wrap{ position:relative; min-height:480px; overflow:hidden; }
        .feat-img-wrap img{ object-fit:cover; transition:transform .8s cubic-bezier(.25,.46,.45,.94); }
        .featured-card:hover .feat-img-wrap img{ transform:scale(1.04); }
        .feat-img-wrap::after{
          content:''; position:absolute; inset:0;
          background:linear-gradient(to top, rgba(28,26,23,.5) 0%, transparent 60%);
        }
        .feat-badge{
          position:absolute; top:24px; left:24px; z-index:2;
          background:var(--brown); color:#fff;
          border-radius:100px; padding:5px 16px;
          font-size:10px; letter-spacing:.16em; text-transform:uppercase;
        }
        .feat-body{
          background:var(--dark); padding:56px 48px;
          display:flex; flex-direction:column; justify-content:center;
        }
        .feat-cat{
          font-size:11px; letter-spacing:.16em; text-transform:uppercase;
          color:var(--stone); margin-bottom:16px;
        }
        .feat-title{
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(26px,3vw,36px); font-weight:600; color:#fff; line-height:1.15; margin-bottom:20px;
        }
        .feat-excerpt{ font-size:14px; line-height:1.85; color:rgba(255,255,255,.5); margin-bottom:32px; }
        .feat-meta{ display:flex; gap:20px; margin-bottom:32px; }
        .feat-meta-item{ display:flex; align-items:center; gap:6px; font-size:12px; color:rgba(255,255,255,.35); }
        .feat-meta-item svg{ flex-shrink:0; }
        .feat-link{
          display:inline-flex; align-items:center; gap:8px;
          font-size:12px; letter-spacing:.12em; text-transform:uppercase;
          color:var(--stone); text-decoration:none;
          border-bottom:1px solid rgba(196,180,154,.3); padding-bottom:2px; width:fit-content;
          transition:color .25s,border-color .25s;
        }
        .feat-link:hover{ color:#fff; border-color:#fff; }

        /* ── MAIN CONTENT AREA (grid + sidebar) ── */
        .content-section{ padding:80px 0 96px; background:var(--cream); }
        .content-wrap{
          max-width:1200px; margin:0 auto; padding:0 32px;
          display:grid; grid-template-columns:1fr 320px; gap:48px; align-items:start;
        }
        @media(max-width:1024px){ .content-wrap{grid-template-columns:1fr;} }

        /* filter strip */
        .filter-strip{
          display:flex; gap:8px; flex-wrap:wrap; margin-bottom:48px;
        }
        .filter-pill{
          padding:8px 18px; border-radius:100px;
          font-size:11px; letter-spacing:.12em; text-transform:uppercase; font-weight:500;
          border:1px solid rgba(196,180,154,.4); background:transparent; color:var(--muted);
          cursor:pointer; transition:background .25s,color .25s,border-color .25s;
        }
        .filter-pill.active{ background:var(--dark); color:#fff; border-color:var(--dark); }
        .filter-pill:hover:not(.active){ border-color:var(--brown); color:var(--brown); }

        /* blog grid */
        .blog-grid{
          display:grid; grid-template-columns:repeat(2,1fr); gap:24px;
        }
        @media(max-width:680px){ .blog-grid{grid-template-columns:1fr;} }

        .blog-card{
          background:#fff; border-radius:6px; overflow:hidden;
          transition:box-shadow .35s, transform .35s;
          cursor:pointer;
        }
        .blog-card:hover{ box-shadow:0 16px 48px rgba(0,0,0,.1); transform:translateY(-4px); }

        .blog-card-img{
          position:relative; aspect-ratio:16/10; overflow:hidden;
        }
        .blog-card-img img{
          width:100%; height:100%; object-fit:cover;
          transition:transform .8s cubic-bezier(.25,.46,.45,.94);
        }
        .blog-card:hover .blog-card-img img{ transform:scale(1.06); }
        .blog-card-cat{
          position:absolute; top:14px; left:14px;
          background:rgba(249,246,241,.9); backdrop-filter:blur(4px);
          border-radius:100px; padding:4px 12px;
          font-size:10px; letter-spacing:.14em; text-transform:uppercase; color:var(--brown);
        }

        .blog-card-body{ padding:28px; }
        .blog-card-title{
          font-family:'Cormorant Garamond',serif;
          font-size:22px; font-weight:600; color:var(--dark); line-height:1.2; margin-bottom:10px;
          transition:color .2s;
        }
        .blog-card:hover .blog-card-title{ color:var(--brown); }
        .blog-card-excerpt{ font-size:13px; line-height:1.8; color:var(--muted); margin-bottom:20px; }
        .blog-card-meta{
          display:flex; align-items:center; gap:16px;
          padding-top:16px; border-top:1px solid rgba(196,180,154,.2);
        }
        .blog-meta-item{ display:flex; align-items:center; gap:5px; font-size:11px; color:var(--muted); }
        .blog-meta-item svg{ flex-shrink:0; color:var(--stone); }
        .blog-read-link{
          margin-left:auto; display:flex; align-items:center; gap:4px;
          font-size:11px; letter-spacing:.1em; text-transform:uppercase; font-weight:500;
          color:var(--brown); text-decoration:none;
          transition:gap .2s;
        }
        .blog-card:hover .blog-read-link{ gap:8px; }

        /* empty state */
        .empty-state{
          grid-column:1/-1; text-align:center; padding:64px 0;
          color:var(--muted); font-size:15px; line-height:1.8;
        }
        .empty-state-title{
          font-family:'Cormorant Garamond',serif;
          font-size:32px; font-weight:300; color:var(--dark); margin-bottom:12px;
        }

        /* ── SIDEBAR ── */
        .sidebar{ display:flex; flex-direction:column; gap:32px; }

        .sidebar-widget{
          background:#fff; border-radius:6px; padding:32px; overflow:hidden; position:relative;
        }
        .sidebar-widget::before{
          content:''; position:absolute; top:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,var(--stone),var(--brown),var(--stone));
          background-size:200% 100%; animation:shimmer 3s ease infinite;
        }
        .sidebar-widget-title{
          font-family:'Cormorant Garamond',serif;
          font-size:22px; font-weight:600; color:var(--dark); margin-bottom:24px;
          padding-bottom:14px; border-bottom:1px solid rgba(196,180,154,.25);
        }

        /* categories widget */
        .cat-list{ display:flex; flex-direction:column; gap:0; }
        .cat-item{
          display:flex; justify-content:space-between; align-items:center;
          padding:12px 0; border-bottom:1px solid rgba(196,180,154,.15);
          cursor:pointer; transition:color .2s;
          font-size:14px; color:var(--text);
          text-decoration:none;
        }
        .cat-item:hover{ color:var(--brown); }
        .cat-item:last-child{ border-bottom:none; }
        .cat-count{
          font-size:11px; color:var(--muted);
          background:var(--warm); border-radius:100px; padding:2px 10px;
        }

        /* recent posts widget */
        .recent-list{ display:flex; flex-direction:column; gap:20px; }
        .recent-item{ display:flex; gap:14px; align-items:flex-start; text-decoration:none; }
        .recent-thumb{
          position:relative; width:64px; height:64px; border-radius:4px;
          overflow:hidden; flex-shrink:0;
        }
        .recent-thumb img{ object-fit:cover; transition:transform .4s; }
        .recent-item:hover .recent-thumb img{ transform:scale(1.08); }
        .recent-info{ flex:1; }
        .recent-title{
          font-family:'Cormorant Garamond',serif;
          font-size:16px; font-weight:600; color:var(--dark); line-height:1.25; margin-bottom:4px;
          transition:color .2s;
        }
        .recent-item:hover .recent-title{ color:var(--brown); }
        .recent-date{ font-size:11px; color:var(--muted); }

        /* search widget */
        .sidebar-search{
          display:flex; align-items:center; gap:0;
          background:var(--warm); border:1px solid rgba(196,180,154,.3);
          border-radius:100px; padding:4px 4px 4px 18px; margin-bottom:0;
        }
        .sidebar-search input{
          flex:1; border:none; background:transparent;
          font-family:'Jost',sans-serif; font-size:13px; color:var(--dark); outline:none; padding:8px 0;
        }
        .sidebar-search input::placeholder{ color:var(--muted); }
        .sidebar-search-btn{
          width:36px; height:36px; border-radius:100px;
          background:var(--dark); color:#fff; border:none; cursor:pointer;
          display:flex; align-items:center; justify-content:center;
          transition:background .25s;
        }
        .sidebar-search-btn:hover{ background:var(--brown); }

        /* CTA widget */
        .cta-widget{
          background:var(--dark); border-radius:6px; padding:36px 28px;
          text-align:center; position:relative; overflow:hidden;
        }
        .cta-widget::before{
          content:'DM';
          position:absolute; font-family:'Cormorant Garamond',serif;
          font-size:180px; font-weight:700; color:rgba(255,255,255,.03);
          bottom:-24px; right:-16px; line-height:1; pointer-events:none;
        }
        .cta-widget-title{
          font-family:'Cormorant Garamond',serif;
          font-size:24px; font-weight:600; color:#fff; line-height:1.2; margin-bottom:12px;
        }
        .cta-widget-title em{ font-style:italic; color:var(--stone); }
        .cta-widget-desc{ font-size:13px; line-height:1.75; color:rgba(255,255,255,.5); margin-bottom:24px; }
        .cta-widget-btn{
          display:inline-flex; align-items:center; gap:8px;
          background:var(--brown); color:#fff;
          padding:12px 24px; border-radius:100px;
          font-size:12px; letter-spacing:.1em; text-transform:uppercase; font-weight:500;
          text-decoration:none; transition:background .25s,transform .2s;
        }
        .cta-widget-btn:hover{ background:#7a5c3c; transform:translateY(-2px); }

        /* ── NEWSLETTER ── */
        .newsletter-section{ padding:80px 0; background:var(--warm); }
        .newsletter-inner{ max-width:640px; margin:0 auto; padding:0 32px; text-align:center; }
        .newsletter-title{
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(32px,5vw,48px); font-weight:300; color:var(--dark); margin-bottom:16px;
        }
        .newsletter-title em{ font-style:italic; color:var(--brown); }
        .newsletter-desc{ font-size:15px; line-height:1.75; color:var(--muted); margin-bottom:36px; }
        .newsletter-form{
          display:flex; gap:0;
          background:#fff; border:1px solid rgba(196,180,154,.3); border-radius:100px;
          padding:6px 6px 6px 24px;
        }
        .newsletter-form input{
          flex:1; border:none; background:transparent;
          font-family:'Jost',sans-serif; font-size:14px; color:var(--dark); outline:none; padding:10px 0;
        }
        .newsletter-form input::placeholder{ color:var(--muted); }
        .newsletter-submit{
          display:inline-flex; align-items:center; gap:8px;
          background:var(--dark); color:#fff;
          padding:12px 24px; border-radius:100px;
          font-size:12px; letter-spacing:.1em; text-transform:uppercase; font-weight:500;
          border:none; cursor:pointer; white-space:nowrap;
          transition:background .25s;
        }
        .newsletter-submit:hover{ background:var(--brown); }
        .newsletter-note{ font-size:12px; color:var(--muted); margin-top:14px; }

        /* ── CTA SECTION ── */
        .cta-section{ padding:112px 0; position:relative; overflow:hidden; text-align:center; }
        .cta-bg{
          position:absolute; inset:0;
          background-image:url('/images/marble-texture.jpg');
          background-size:cover; background-position:center;
          filter:brightness(1.04) contrast(0.97);
        }
        .cta-bg::after{
          content:''; position:absolute; inset:0;
          background:radial-gradient(ellipse at center,rgba(249,246,241,.15) 0%,rgba(249,246,241,.78) 100%);
        }
        .cta-inner{ position:relative; max-width:640px; margin:0 auto; padding:0 32px; }
        .cta-title{
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(36px,5.5vw,60px); font-weight:300; color:var(--dark); line-height:1.1; margin-bottom:20px;
        }
        .cta-title em{ font-style:italic; color:var(--brown); }
        .cta-desc{ font-size:15px; line-height:1.8; color:var(--muted); margin-bottom:44px; }
        .cta-btns{ display:flex; gap:16px; justify-content:center; flex-wrap:wrap; margin-bottom:48px; }
        .btn-p{
          display:inline-flex; align-items:center; gap:10px;
          background:var(--dark); color:#fff;
          padding:15px 34px; border-radius:100px;
          font-size:12px; letter-spacing:.12em; text-transform:uppercase; font-weight:500; text-decoration:none;
          transition:background .3s,transform .2s;
        }
        .btn-p:hover{ background:var(--brown); transform:translateY(-2px); }
        .btn-o{
          display:inline-flex; align-items:center; gap:10px;
          border:1px solid var(--dark); color:var(--dark);
          padding:15px 34px; border-radius:100px;
          font-size:12px; letter-spacing:.12em; text-transform:uppercase; font-weight:500; text-decoration:none;
          transition:background .3s,color .3s,transform .2s;
        }
        .btn-o:hover{ background:var(--dark); color:#fff; transform:translateY(-2px); }
        .cta-badges{ display:flex; justify-content:center; gap:32px; flex-wrap:wrap; }
        .cta-badge{ display:flex; align-items:center; gap:8px; font-size:12px; color:var(--muted); }
        .cta-badge svg{ color:var(--brown); }

        @media(max-width:640px){
          .stats-inner{ grid-template-columns:repeat(2,1fr); }
          .stat-item:nth-child(3){ border-left:none; }
          .newsletter-form{ flex-direction:column; border-radius:12px; padding:16px; }
          .newsletter-submit{ border-radius:8px; justify-content:center; }
        }
      `}</style>

      <div className="blog-root">
        <Header />

        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-content">
            <div className="hero-eyebrow"
              style={{ opacity:heroVisible?1:0, transform:heroVisible?"translateY(0)":"translateY(16px)", transition:"opacity .9s ease .1s,transform .9s ease .1s" }}>
              <span className="dot" /> Dayanand Marbles &mdash; Stone Knowledge Hub
            </div>
            <h1 className="hero-title"
              style={{ opacity:heroVisible?1:0, transform:heroVisible?"translateY(0)":"translateY(20px)", transition:"opacity .9s ease .3s,transform .9s ease .3s" }}>
              Our<br /><em>Blog</em>
            </h1>
            <p className="hero-sub"
              style={{ opacity:heroVisible?1:0, transform:heroVisible?"translateY(0)":"translateY(20px)", transition:"opacity .9s ease .45s,transform .9s ease .45s" }}>
              Marble · Granite · Design · Care
            </p>
            <p className="hero-desc"
              style={{ opacity:heroVisible?1:0, transform:heroVisible?"translateY(0)":"translateY(20px)", transition:"opacity .9s ease .6s,transform .9s ease .6s" }}>
              Expert insights, design inspiration and stone care guides — straight from
              Rajasthan's most trusted marble specialists.
            </p>
            {/* Search bar */}
            <div className="hero-search">
              <input
                type="text"
                placeholder="Search articles…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <button className="hero-search-btn"><Search size={16} /></button>
            </div>
          </div>
          <div className="hero-scroll"><ChevronDown size={18} /><span>Scroll</span></div>
        </section>

        {/* ── STATS BAR ── */}
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

        {/* ── FEATURED ARTICLE ── */}
        {!searchQuery && activeCategory === "All" && featured && (
          <section className="featured-section">
            <div className="featured-wrap" style={{ marginBottom:56 }}>
              <Reveal>
                <div className="section-tag">Featured Article</div>
                <h2 className="section-title">Editor's <em>Pick</em></h2>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="featured-wrap">
              <div className="featured-card">
                <div className="feat-img-wrap">
                  <Image src={featured.image} alt={featured.title} fill />
                  <div className="feat-badge">Featured</div>
                </div>
                <div className="feat-body">
                  <div className="feat-cat">{featured.category}</div>
                  <h2 className="feat-title">{featured.title}</h2>
                  <p className="feat-excerpt">{featured.excerpt}</p>
                  <div className="feat-meta">
                    <span className="feat-meta-item"><User size={12} />{featured.author}</span>
                    <span className="feat-meta-item"><Clock size={12} />{featured.readTime}</span>
                    <span className="feat-meta-item"><Tag size={12} />{featured.date}</span>
                  </div>
                  <Link href={`/blog/${featured.slug}`} className="feat-link">
                    Read Article <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </section>
        )}

        {/* ── CONTENT + SIDEBAR ── */}
        <section className="content-section" id="articles">
          <div className="content-wrap">
            {/* Main column */}
            <div>
              {/* Filter pills */}
              <Reveal>
                <div className="filter-strip">
                  {allCats.map(cat => (
                    <button
                      key={cat}
                      className={`filter-pill ${activeCategory === cat ? "active" : ""}`}
                      onClick={() => setActiveCategory(cat)}
                    >{cat}</button>
                  ))}
                </div>
              </Reveal>

              {/* Grid */}
              <div className="blog-grid">
                {gridArticles.length === 0 && (
                  <div className="empty-state">
                    <div className="empty-state-title">No articles found</div>
                    Try a different search term or browse all categories.
                  </div>
                )}
                {gridArticles.map((article, i) => (
                  <Reveal key={article.id} delay={i * 0.07}>
                    <Link href={`/blog/${article.slug}`} style={{ textDecoration:"none" }}>
                      <div className="blog-card">
                        <div className="blog-card-img">
                          <Image src={article.image} alt={article.title} fill />
                          <div className="blog-card-cat">{article.category}</div>
                        </div>
                        <div className="blog-card-body">
                          <h3 className="blog-card-title">{article.title}</h3>
                          <p className="blog-card-excerpt">{article.excerpt}</p>
                          <div className="blog-card-meta">
                            <span className="blog-meta-item"><Clock size={12} />{article.readTime}</span>
                            <span className="blog-meta-item"><Tag size={12} />{article.date}</span>
                            <span className="blog-read-link">Read <ChevronRight size={13} /></span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="sidebar">
              {/* Search */}
              <Reveal>
                <div className="sidebar-widget">
                  <div className="sidebar-widget-title">Search Articles</div>
                  <div className="sidebar-search">
                    <input
                      type="text"
                      placeholder="Type to search…"
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                    />
                    <button className="sidebar-search-btn"><Search size={14} /></button>
                  </div>
                </div>
              </Reveal>

              {/* Categories */}
              <Reveal delay={0.05}>
                <div className="sidebar-widget">
                  <div className="sidebar-widget-title">Categories</div>
                  <div className="cat-list">
                    {categories.map(cat => (
                      <span key={cat.name} className="cat-item"
                        onClick={() => setActiveCategory(cat.name)}>
                        {cat.name}
                        <span className="cat-count">{cat.count}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Recent Posts */}
              <Reveal delay={0.1}>
                <div className="sidebar-widget">
                  <div className="sidebar-widget-title">Recent Posts</div>
                  <div className="recent-list">
                    {recentPosts.map(post => (
                      <Link key={post.id} href={`/blog/${post.slug}`} className="recent-item">
                        <div className="recent-thumb">
                          <Image src={post.image} alt={post.title} fill />
                        </div>
                        <div className="recent-info">
                          <div className="recent-title">{post.title}</div>
                          <div className="recent-date">{post.date}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* CTA widget */}
              <Reveal delay={0.15}>
                <div className="cta-widget">
                  <BookOpen size={28} style={{ color:"var(--stone)", marginBottom:16 }} />
                  <div className="cta-widget-title">
                    Need Premium <em>Stone?</em>
                  </div>
                  <p className="cta-widget-desc">
                    Our experts are ready to help you find the perfect marble or granite for your project.
                  </p>
                  <Link href="/contact" className="cta-widget-btn">
                    Get in Touch <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            </aside>
          </div>
        </section>

        {/* ── NEWSLETTER ── */}
        <section className="newsletter-section">
          <Reveal className="newsletter-inner">
            <div className="section-tag" style={{ justifyContent:"center" }}>Stay Updated</div>
            <h2 className="newsletter-title">
              Subscribe to Our <em>Newsletter</em>
            </h2>
            <p className="newsletter-desc">
              Get the latest marble care tips, design trends, and exclusive product guides
              delivered straight to your inbox — no spam, ever.
            </p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address…" />
              <button className="newsletter-submit">Subscribe <ArrowRight size={14} /></button>
            </div>
            <p className="newsletter-note">Join 1,000+ readers. Unsubscribe anytime.</p>
          </Reveal>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section">
          <div className="cta-bg" />
          <Reveal className="cta-inner">
            <div className="section-tag" style={{ justifyContent:"center" }}>Ready to Shop?</div>
            <h2 className="cta-title">
              Bring Your Vision<br /><em>to Life</em>
            </h2>
            <p className="cta-desc">
              Browse our extensive collection of premium marbles, granites, and tiles.
              Let us help you select the perfect stone for your next project.
            </p>
            <div className="cta-btns">
              <Link href="/products" className="btn-p">Explore Products <ArrowRight size={15} /></Link>
              <Link href="/contact" className="btn-o">Contact Us <ArrowRight size={15} /></Link>
            </div>
            <div className="cta-badges">
              {["Free Consultation","Premium Quality","Expert Guidance"].map(b => (
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
