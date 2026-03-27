"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Instagram,
  Facebook,
  Youtube,
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
const contactInfo = [
  {
    Icon: MapPin,
    title: "Visit Our Showroom",
    lines: ["N.H. 8, Sukher, Udaipur, In Front of Skoda Showroom, Rajasthan 313001"],
  },
  {
    Icon: Phone,
    title: "Call Us",
    lines: ["+91 9351835358", "+91 7891704729"],
  },
  {
    Icon: Mail,
    title: "Email Us",
    lines: ["dayanandmarbleindia@gmail.com"],
  },
  {
    Icon: Clock,
    title: "Working Hours",
    lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sunday: 10:00 AM – 5:00 PM"],
  },
]

const stats = [
  { value: "25+",   label: "Years of Trust" },
  { value: "500+",  label: "Stone Varieties" },
  { value: "5000+", label: "Projects Done" },
  { value: "100%",  label: "Quality Assured" },
]

const reasons = [
  "Direct sourcing — no middlemen",
  "500+ premium stone varieties in stock",
  "Free expert consultation",
  "Delivery across India",
  "Professional installation support",
  "Quality guarantee on every slab",
]

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function ContactPage() {
  const [heroVisible, setHeroVisible] = useState(false)
  const [formState, setFormState]     = useState({ name:"", email:"", phone:"", subject:"", message:"" })
  const [submitted, setSubmitted]     = useState(false)
  const [sending, setSending]         = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setSending(true)

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })

    const data = await res.json()

    if (data.success) {
      setSubmitted(true)
      setFormState({ name: "", email: "", phone: "", subject: "", message: "" })
    } else {
      alert("Error sending message")
    }
  } catch (err) {
    console.error(err)
    alert("Something went wrong")
  }

  setSending(false)
}
  return (
    <>
      <style>{`
        /*
         * FONT SYSTEM
         * --------------------------------------------------
         * var(--font-h1)   → DM Serif Display   — H1 hero, stat values, decorative watermarks
         * var(--font-h2)   → Playfair Display    — H2 headings Bold 700, H3 card/form titles Italic 400
         * var(--font-nav)  → Tenor Sans          — Eyebrows, buttons, tags, labels, links, social label
         * var(--font-body) → Outfit              — Body text, form inputs, descriptions, badges, info lines
         */

        :root {
          --cream:#f9f6f1; --warm:#ede9e0; --stone:#c4b49a;
          --brown:#8c6b4a; --dark:#1c1a17; --text:#3d3530; --muted:#847870;
        }

        /* Outfit as base */
        .ct-root {
          font-family: var(--font-body);   /* Outfit */
          color:var(--text); background:var(--cream);
        }

        @keyframes pulseD  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }
        @keyframes bounce  { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(7px)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes checkPop{ 0%{transform:scale(0)} 70%{transform:scale(1.2)} 100%{transform:scale(1)} }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

        /* ─────────────────────────────────────────
           HERO
        ───────────────────────────────────────── */
        .hero {
          position:relative; min-height:92vh;
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          overflow:hidden; padding-top:96px;
        }
        .hero-bg {
          position:absolute; inset:0;
          background-image:url('/images/marble-texture.jpg');
          background-size:cover; background-position:center;
          filter:brightness(1.04) contrast(0.97);
        }
        .hero-bg::after {
          content:''; position:absolute; inset:0;
          background:radial-gradient(ellipse at center,rgba(249,246,241,.15) 0%,rgba(249,246,241,.70) 100%);
        }
        .hero-content { position:relative; z-index:2; text-align:center; max-width:820px; padding:0 24px; }

        /* Tenor Sans — eyebrow pill */
        .hero-eyebrow {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(255,255,255,.75); border:1px solid rgba(140,107,74,.25);
          backdrop-filter:blur(6px); border-radius:100px; padding:6px 20px;
          font-family: var(--font-nav);    /* Tenor Sans */
          font-size:11px; letter-spacing:.18em; text-transform:uppercase;
          color:var(--brown); font-weight:400; margin-bottom:32px;
        }
        .hero-eyebrow .dot { width:6px; height:6px; border-radius:50%; background:var(--brown); animation:pulseD 2s infinite; }

        /* DM Serif Display — H1 */
        .hero-title {
          font-family: var(--font-h1);     /* DM Serif Display */
          font-size:clamp(68px,11vw,120px);
          font-weight:400;                 /* Regular 400 */
          line-height:.9; color:var(--dark); margin-bottom:16px; letter-spacing:-.01em;
        }
        .hero-title em { font-style:italic; color:var(--brown); }

        /* Playfair Display — hero sub */
        .hero-sub {
          font-family: var(--font-h2);     /* Playfair Display */
          font-size:clamp(18px,2.5vw,26px); font-weight:400;
          color:var(--muted); letter-spacing:.06em; margin-bottom:20px;
        }

        /* Outfit Regular — hero description */
        .hero-desc {
          font-family: var(--font-body);   /* Outfit */
          font-size:15px; line-height:1.85;
          color:var(--text); max-width:500px; margin:0 auto 48px;
        }

        /* Tenor Sans — CTA button */
        .hero-cta {
          display:inline-flex; align-items:center; gap:10px;
          background:var(--dark); color:#fff;
          padding:14px 32px; border-radius:100px;
          font-family: var(--font-nav);    /* Tenor Sans */
          font-size:11px; letter-spacing:.14em; text-transform:uppercase;
          text-decoration:none; transition:background .3s,transform .2s;
        }
        .hero-cta:hover { background:var(--brown); transform:translateY(-2px); }

        /* Tenor Sans — scroll label */
        .hero-scroll {
          position:absolute; bottom:32px; left:50%; transform:translateX(-50%);
          display:flex; flex-direction:column; align-items:center; gap:6px;
          color:var(--muted);
          font-family: var(--font-nav);    /* Tenor Sans */
          font-size:10px; letter-spacing:.16em; text-transform:uppercase;
          animation:bounce 2.2s infinite; z-index:2;
        }

        /* ─────────────────────────────────────────
           STATS BAR
        ───────────────────────────────────────── */
        .stats-bar { background:var(--dark); padding:28px 0; }
        .stats-inner {
          max-width:900px; margin:0 auto;
          display:grid; grid-template-columns:repeat(4,1fr); text-align:center;
        }
        .stat-item { padding:12px 0; }
        .stat-item+.stat-item { border-left:1px solid rgba(255,255,255,.1); }

        /* DM Serif Display — large stat numbers */
        .stat-value {
          font-family: var(--font-h1);     /* DM Serif Display */
          font-size:36px; font-weight:400;
          color:var(--stone); line-height:1; margin-bottom:4px;
        }

        /* Outfit Medium caps — stat labels */
        .stat-label {
          font-family: var(--font-body);   /* Outfit */
          font-size:11px; font-weight:500;
          letter-spacing:.18em; text-transform:uppercase; color:rgba(255,255,255,.45);
        }

        /* ─────────────────────────────────────────
           SHARED SECTION ELEMENTS
        ───────────────────────────────────────── */

        /* Tenor Sans — section eyebrow tags */
        .section-tag {
          display:inline-flex; align-items:center; gap:8px;
          font-family: var(--font-nav);    /* Tenor Sans */
          font-size:11px; letter-spacing:.18em; text-transform:uppercase;
          color:var(--brown); font-weight:400; margin-bottom:16px;
        }
        .section-tag::before { content:''; display:block; width:24px; height:1px; background:var(--brown); }

        /* Playfair Display Bold 700 — H2 section headings */
        .section-title {
          font-family: var(--font-h2);     /* Playfair Display */
          font-size:clamp(30px,4.5vw,50px);
          font-weight:700;                 /* Bold 700 */
          color:var(--dark); line-height:1.1;
        }
        .section-title em { font-style:italic; font-weight:400; color:var(--brown); }

        /* ─────────────────────────────────────────
           CONTACT SECTION
        ───────────────────────────────────────── */
        .contact-section { padding:96px 0; background:#fff; }
        .contact-wrap { max-width:1200px; margin:0 auto; padding:0 32px; }
        .contact-grid {
          display:grid; grid-template-columns:1fr 1.4fr; gap:56px; align-items:start;
        }
        @media(max-width:900px) { .contact-grid{grid-template-columns:1fr; gap:48px;} }

        .info-cards { display:flex; flex-direction:column; gap:16px; }
        .info-card {
          display:flex; gap:20px; align-items:flex-start;
          background:var(--cream); border:1px solid rgba(196,180,154,.25);
          border-radius:12px; padding:28px 24px;
          transition:box-shadow .3s,transform .3s;
          position:relative; overflow:hidden;
        }
        .info-card::before {
          content:''; position:absolute; top:0; left:0; bottom:0; width:3px;
          background:linear-gradient(to bottom,var(--stone),var(--brown));
          opacity:0; transition:opacity .3s;
        }
        .info-card:hover { box-shadow:0 8px 32px rgba(0,0,0,.07); transform:translateX(4px); }
        .info-card:hover::before { opacity:1; }
        .info-icon {
          width:48px; height:48px; border-radius:12px;
          background:var(--dark); display:flex; align-items:center; justify-content:center;
          flex-shrink:0;
        }
        .info-icon svg { color:var(--stone); }

        /* Playfair Display Italic — info card title (H3 level) */
        .info-title {
          font-family: var(--font-h2);     /* Playfair Display */
          font-size:18px; font-weight:400; font-style:italic; /* H3 card style */
          color:var(--dark); margin-bottom:6px;
        }

        /* Outfit Regular — info lines */
        .info-line {
          font-family: var(--font-body);   /* Outfit */
          font-size:13px; line-height:1.75; color:var(--muted);
        }

        .social-row { display:flex; gap:12px; margin-top:24px; }
        .social-btn {
          width:44px; height:44px; border-radius:50%;
          background:var(--warm); border:1px solid rgba(196,180,154,.3);
          display:flex; align-items:center; justify-content:center;
          color:var(--brown); text-decoration:none;
          transition:background .25s,color .25s,transform .2s;
        }
        .social-btn:hover { background:var(--dark); color:#fff; transform:translateY(-2px); }

        /* ─────────────────────────────────────────
           FORM CARD
        ───────────────────────────────────────── */
        .form-card {
          background:var(--cream); border:1px solid rgba(196,180,154,.25);
          border-radius:12px; padding:48px 40px;
          position:relative; overflow:hidden;
        }
        .form-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,var(--stone),var(--brown),var(--stone));
          background-size:200% 100%; animation:shimmer 3s ease infinite;
        }

        /* Playfair Display Bold — form title (H2 level) */
        .form-title {
          font-family: var(--font-h2);     /* Playfair Display */
          font-size:32px; font-weight:700; /* Bold 700 */
          color:var(--dark); margin-bottom:8px;
        }

        /* Outfit Regular — form subtitle */
        .form-subtitle {
          font-family: var(--font-body);   /* Outfit */
          font-size:14px; color:var(--muted); margin-bottom:36px;
        }

        .form-row { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        @media(max-width:560px) { .form-row{grid-template-columns:1fr;} }

        .field { display:flex; flex-direction:column; gap:6px; margin-bottom:16px; }

        /* Outfit Medium caps — form labels */
        .field label {
          font-family: var(--font-body);   /* Outfit */
          font-size:11px; font-weight:500;
          letter-spacing:.14em; text-transform:uppercase; color:var(--muted);
        }

        /* Outfit Regular — form inputs */
        .field input,
        .field textarea,
        .field select {
          background:#fff; border:1px solid rgba(196,180,154,.35);
          border-radius:8px; padding:13px 16px;
          font-family: var(--font-body);   /* Outfit */
          font-size:14px; color:var(--dark);
          outline:none; transition:border-color .25s,box-shadow .25s;
          width:100%;
        }
        .field input:focus,
        .field textarea:focus,
        .field select:focus {
          border-color:var(--brown);
          box-shadow:0 0 0 3px rgba(140,107,74,.1);
        }
        .field textarea { resize:vertical; min-height:120px; }
        .field select { appearance:none; cursor:pointer; }

        /* Tenor Sans — submit button */
        .submit-btn {
          display:inline-flex; align-items:center; gap:10px;
          background:var(--dark); color:#fff;
          padding:15px 36px; border-radius:100px;
          font-family: var(--font-nav);    /* Tenor Sans */
          font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:400;
          border:none; cursor:pointer; width:100%; justify-content:center;
          transition:background .3s,transform .2s; margin-top:8px;
        }
        .submit-btn:hover:not(:disabled) { background:var(--brown); transform:translateY(-2px); }
        .submit-btn:disabled { opacity:.7; cursor:not-allowed; }

        /* Success state */
        .success-state {
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          text-align:center; padding:48px 24px; gap:20px; animation:fadeUp .6s ease;
        }
        .success-icon {
          width:72px; height:72px; border-radius:50%;
          background:rgba(140,107,74,.12); border:2px solid var(--brown);
          display:flex; align-items:center; justify-content:center;
          animation:checkPop .5s ease;
        }
        .success-icon svg { color:var(--brown); }

        /* Playfair Display — success title */
        .success-title {
          font-family: var(--font-h2);     /* Playfair Display */
          font-size:32px; font-weight:700;
          color:var(--dark);
        }

        /* Outfit Regular — success description */
        .success-desc {
          font-family: var(--font-body);   /* Outfit */
          font-size:14px; line-height:1.85; color:var(--muted); max-width:320px;
        }

        /* ─────────────────────────────────────────
           MAP SECTION
        ───────────────────────────────────────── */
        .map-section { padding:96px 0; background:var(--warm); }
        .map-wrap { max-width:1200px; margin:0 auto; padding:0 32px; }
        .map-header { margin-bottom:48px; }

        /* Outfit Regular — map subtitle */
        .map-sub {
          font-family: var(--font-body);   /* Outfit */
          margin-top:12px; font-size:15px; line-height:1.75;
          color:var(--muted); max-width:480px;
        }

        .map-container {
          border-radius:12px; overflow:hidden;
          box-shadow:0 24px 64px rgba(0,0,0,.1);
          position:relative;
        }
        .map-container iframe { display:block; }
        .map-overlay {
          position:absolute; top:24px; left:24px;
          background:rgba(255,255,255,.92); backdrop-filter:blur(8px);
          border:1px solid rgba(196,180,154,.3); border-radius:12px;
          padding:20px 24px; box-shadow:0 8px 32px rgba(0,0,0,.1);
        }

        /* Playfair Display Italic — map overlay name (H3 level) */
        .map-overlay-name {
          font-family: var(--font-h2);     /* Playfair Display */
          font-size:20px; font-weight:400; font-style:italic;
          color:var(--dark); margin-bottom:6px;
        }

        /* Outfit Regular — map overlay address */
        .map-overlay-addr {
          font-family: var(--font-body);   /* Outfit */
          font-size:13px; color:var(--muted); line-height:1.6;
        }

        /* Tenor Sans — map directions link */
        .map-overlay-link {
          display:inline-flex; align-items:center; gap:6px;
          font-family: var(--font-nav);    /* Tenor Sans */
          font-size:11px; letter-spacing:.12em; text-transform:uppercase;
          color:var(--brown); text-decoration:none; margin-top:10px;
          border-bottom:1px solid rgba(140,107,74,.3); padding-bottom:1px;
          transition:color .2s,border-color .2s;
        }
        .map-overlay-link:hover { color:var(--dark); border-color:var(--dark); }

        /* ─────────────────────────────────────────
           WHY VISIT SECTION
        ───────────────────────────────────────── */
        .visit-section { padding:96px 0; background:var(--dark); position:relative; overflow:hidden; }

        /* DM Serif Display — decorative watermark */
        .visit-section::before {
          content:'DM'; position:absolute;
          font-family: var(--font-h1);     /* DM Serif Display */
          font-size:420px; font-weight:400;
          color:rgba(255,255,255,.02);
          top:50%; left:50%; transform:translate(-50%,-50%);
          pointer-events:none; white-space:nowrap;
        }
        .visit-inner { position:relative; max-width:1100px; margin:0 auto; padding:0 32px; }
        .visit-header { margin-bottom:56px; }
        .visit-header .section-tag { color:var(--stone); }
        .visit-header .section-tag::before { background:var(--stone); }
        .visit-header .section-title { color:#fff; }
        .visit-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        @media(max-width:860px) { .visit-grid{grid-template-columns:1fr 1fr;} }
        @media(max-width:560px) { .visit-grid{grid-template-columns:1fr;} }
        .visit-card {
          background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.07);
          border-radius:12px; padding:28px 24px;
          display:flex; align-items:center; gap:16px;
          transition:background .3s,border-color .3s,transform .3s;
        }
        .visit-card:hover { background:rgba(140,107,74,.12); border-color:rgba(140,107,74,.3); transform:translateY(-3px); }
        .visit-dot { width:10px; height:10px; border-radius:50%; background:var(--brown); flex-shrink:0; }

        /* Outfit Regular — visit reason labels */
        .visit-label {
          font-family: var(--font-body);   /* Outfit */
          font-size:13px; color:rgba(255,255,255,.7);
        }

        /* Tenor Sans — "Follow Us" label */
        .social-follow-label {
          font-family: var(--font-nav);    /* Tenor Sans */
          font-size:11px; letter-spacing:.14em; text-transform:uppercase;
          color:var(--muted); margin-bottom:12px;
        }

        /* ─────────────────────────────────────────
           CTA SECTION
        ───────────────────────────────────────── */
        .cta-section { padding:112px 0; position:relative; overflow:hidden; text-align:center; }
        .cta-bg {
          position:absolute; inset:0;
          background-image:url('/images/marble-texture.jpg');
          background-size:cover; background-position:center;
          filter:brightness(1.04) contrast(0.97);
        }
        .cta-bg::after {
          content:''; position:absolute; inset:0;
          background:radial-gradient(ellipse at center,rgba(249,246,241,.15) 0%,rgba(249,246,241,.78) 100%);
        }
        .cta-inner { position:relative; max-width:640px; margin:0 auto; padding:0 32px; }

        /* Playfair Display Bold 700 — CTA H2 */
        .cta-title {
          font-family: var(--font-h2);     /* Playfair Display */
          font-size:clamp(36px,5.5vw,60px);
          font-weight:700;                 /* Bold 700 */
          color:var(--dark); line-height:1.1; margin-bottom:20px;
        }
        .cta-title em { font-style:italic; font-weight:400; color:var(--brown); }

        /* Outfit Regular — CTA description */
        .cta-desc {
          font-family: var(--font-body);   /* Outfit */
          font-size:15px; line-height:1.85; color:var(--muted); margin-bottom:44px;
        }

        .cta-btns { display:flex; gap:16px; justify-content:center; flex-wrap:wrap; margin-bottom:48px; }

        /* Tenor Sans — primary button */
        .btn-p {
          display:inline-flex; align-items:center; gap:10px;
          background:var(--dark); color:#fff;
          padding:15px 34px; border-radius:100px;
          font-family: var(--font-nav);    /* Tenor Sans */
          font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:400;
          text-decoration:none; transition:background .3s,transform .2s;
        }
        .btn-p:hover { background:var(--brown); transform:translateY(-2px); }

        /* Tenor Sans — outline button */
        .btn-o {
          display:inline-flex; align-items:center; gap:10px;
          border:1px solid var(--dark); color:var(--dark);
          padding:15px 34px; border-radius:100px;
          font-family: var(--font-nav);    /* Tenor Sans */
          font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:400;
          text-decoration:none; transition:background .3s,color .3s,transform .2s;
        }
        .btn-o:hover { background:var(--dark); color:#fff; transform:translateY(-2px); }

        .cta-badges { display:flex; justify-content:center; gap:32px; flex-wrap:wrap; }

        /* Outfit Medium caps — trust badges */
        .cta-badge {
          display:flex; align-items:center; gap:8px;
          font-family: var(--font-body);   /* Outfit */
          font-size:11px; font-weight:500;
          letter-spacing:.14em; text-transform:uppercase; color:var(--muted);
        }
        .cta-badge svg { color:var(--brown); }

        @media(max-width:640px) {
          .stats-inner { grid-template-columns:repeat(2,1fr); }
          .stat-item:nth-child(3) { border-left:none; }
          .form-card { padding:32px 20px; }
        }
      `}</style>

      <div className="ct-root">
        <Header />

        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-content">
            {/* Tenor Sans eyebrow */}
            <div className="hero-eyebrow"
              style={{ opacity:heroVisible?1:0, transform:heroVisible?"translateY(0)":"translateY(16px)", transition:"opacity .9s ease .1s,transform .9s ease .1s" }}>
              <span className="dot" /> Dayanand Marbles &mdash; Udaipur, Rajasthan
            </div>
            {/* DM Serif Display H1 */}
            <h1 className="hero-title"
              style={{ opacity:heroVisible?1:0, transform:heroVisible?"translateY(0)":"translateY(20px)", transition:"opacity .9s ease .3s,transform .9s ease .3s" }}>
              Contact<br /><em>Us</em>
            </h1>
            {/* Playfair Display sub */}
            <p className="hero-sub"
              style={{ opacity:heroVisible?1:0, transform:heroVisible?"translateY(0)":"translateY(20px)", transition:"opacity .9s ease .45s,transform .9s ease .45s" }}>
              Visit · Call · Write
            </p>
            {/* Outfit body */}
            <p className="hero-desc"
              style={{ opacity:heroVisible?1:0, transform:heroVisible?"translateY(0)":"translateY(20px)", transition:"opacity .9s ease .6s,transform .9s ease .6s" }}>
              We'd love to hear from you. Reach out to discuss your project, get a free
              quote, or simply visit our showroom in the marble capital of India.
            </p>
            {/* Tenor Sans CTA */}
            <a href="#contact" className="hero-cta"
              style={{ opacity:heroVisible?1:0, transform:heroVisible?"translateY(0)":"translateY(20px)", transition:"opacity .9s ease .75s,transform .9s ease .75s" }}>
              Get in Touch <ArrowRight size={16} />
            </a>
          </div>
          {/* Tenor Sans scroll */}
          <div className="hero-scroll"><ChevronDown size={18} /><span>Scroll</span></div>
        </section>

        {/* ── STATS BAR ── */}
        <div className="stats-bar">
          <div className="stats-inner">
            {stats.map(s => (
              <div className="stat-item" key={s.label}>
                {/* DM Serif Display */}
                <div className="stat-value">{s.value}</div>
                {/* Outfit Medium caps */}
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CONTACT INFO + FORM ── */}
        <section className="contact-section" id="contact">
          <div className="contact-wrap">
            <Reveal style={{ marginBottom: 64 }}>
              {/* Tenor Sans tag */}
              <div className="section-tag">Get In Touch</div>
              {/* Playfair Display Bold H2 */}
              <h2 className="section-title">We're Here to <em>Help You</em></h2>
            </Reveal>

            <div className="contact-grid">
              {/* Left — info cards */}
              <Reveal className="info-cards" delay={0.05}>
                {contactInfo.map((item) => (
                  <div className="info-card" key={item.title}>
                    <div className="info-icon"><item.Icon size={22} strokeWidth={1.5} /></div>
                    <div className="info-body">
                      {/* Playfair Display Italic — H3 card title */}
                      <div className="info-title">{item.title}</div>
                      {/* Outfit Regular — info lines */}
                      {item.lines.map((line, i) => (
                        <div className="info-line" key={i}>{line}</div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Social icons */}
                <div>
                  {/* Tenor Sans — "Follow Us" label */}
                  <div className="social-follow-label">Follow Us</div>
                  <div className="social-row">
                    <a href="#" className="social-btn" aria-label="Instagram"><Instagram size={18} /></a>
                    <a href="#" className="social-btn" aria-label="Facebook"><Facebook size={18} /></a>
                    <a href="#" className="social-btn" aria-label="YouTube"><Youtube size={18} /></a>
                  </div>
                </div>
              </Reveal>

              {/* Right — form */}
              <Reveal delay={0.12}>
                <div className="form-card">
                  {submitted ? (
                    <div className="success-state">
                      <div className="success-icon"><CheckCircle2 size={32} /></div>
                      {/* Playfair Display Bold */}
                      <div className="success-title">Message Sent!</div>
                      {/* Outfit Regular */}
                      <p className="success-desc">
                        Thank you for reaching out. Our team will get back to you within 24 hours.
                      </p>
                      {/* Tenor Sans button */}
                      <button
                        className="submit-btn"
                        style={{ maxWidth:240 }}
                        onClick={() => { setSubmitted(false); setFormState({ name:"", email:"", phone:"", subject:"", message:"" }) }}
                      >
                        Send Another
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Playfair Display Bold 700 — form title */}
                      <div className="form-title">Send Us a Message</div>
                      {/* Outfit Regular — subtitle */}
                      <div className="form-subtitle">We typically respond within one business day.</div>

                      <form onSubmit={handleSubmit}>
                        <div className="form-row">
                          <div className="field">
                            {/* Outfit Medium caps label */}
                            <label htmlFor="name">Full Name *</label>
                            {/* Outfit input */}
                            <input id="name" name="name" type="text" placeholder="Rajesh Mehta"
                              value={formState.name} onChange={handleChange} required />
                          </div>
                          <div className="field">
                            <label htmlFor="email">Email Address *</label>
                            <input id="email" name="email" type="email" placeholder="you@email.com"
                              value={formState.email} onChange={handleChange} required />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="field">
                            <label htmlFor="phone">Phone Number</label>
                            <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210"
                              value={formState.phone} onChange={handleChange} />
                          </div>
                          <div className="field">
                            <label htmlFor="subject">I'm Interested In</label>
                            <select id="subject" name="subject" value={formState.subject} onChange={handleChange}>
                              <option value="">Select a topic…</option>
                              <option>Italian Marble</option>
                              <option>Indian Marble</option>
                              <option>Granite</option>
                              <option>Designer Tiles</option>
                              <option>Marble Polishing</option>
                              <option>General Enquiry</option>
                            </select>
                          </div>
                        </div>

                        <div className="field">
                          <label htmlFor="message">Your Message *</label>
                          <textarea id="message" name="message"
                            placeholder="Tell us about your project — stone type, area, timeline, budget…"
                            value={formState.message} onChange={handleChange} required />
                        </div>

                        {/* Tenor Sans submit button */}
                        <button type="submit" className="submit-btn" disabled={sending}>
                          {sending ? <>Sending…</> : <>Send Message <Send size={15} /></>}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── MAP SECTION ── */}
        <section className="map-section">
          <div className="map-wrap">
            <Reveal className="map-header">
              {/* Tenor Sans tag */}
              <div className="section-tag">Find Us</div>
              {/* Playfair Display Bold H2 */}
              <h2 className="section-title">Our <em>Showroom</em></h2>
              {/* Outfit Regular subtitle */}
              <p className="map-sub">
                Located in the heart of Udaipur's marble district — India's stone capital.
                Come see our collection in person.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.2!2d73.7139!3d24.5854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56c8f8f2c3d%3A0x1b3e7b3e7b3e7b3e!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="480"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dayanand Marbles Location"
                />
                <div className="map-overlay">
                  {/* Playfair Display Italic — overlay name */}
                  <div className="map-overlay-name">Dayanand Marbles</div>
                  {/* Outfit Regular — address */}
                  <div className="map-overlay-addr">
                    Near Marble Market, Udaipur<br />Rajasthan — 313001
                  </div>
                  {/* Tenor Sans — directions link */}
                  <a
                    href="https://maps.google.com/?q=Udaipur+Rajasthan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-overlay-link"
                  >
                    Get Directions <ArrowRight size={11} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── WHY VISIT ── */}
        <section className="visit-section">
          <div className="visit-inner">
            <Reveal className="visit-header">
              {/* Tenor Sans tag (stone on dark) */}
              <div className="section-tag">Why Visit Us</div>
              {/* Playfair Display Bold H2 (white on dark) */}
              <h2 className="section-title">
                Reasons to Choose <em>Dayanand</em>
              </h2>
            </Reveal>
            <div className="visit-grid">
              {reasons.map((r, i) => (
                <Reveal key={r} delay={i * 0.07}>
                  <div className="visit-card">
                    <div className="visit-dot" />
                    {/* Outfit Regular */}
                    <div className="visit-label">{r}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="cta-section">
          <div className="cta-bg" />
          <Reveal className="cta-inner">
            {/* Tenor Sans tag */}
            <div className="section-tag" style={{ justifyContent:"center" }}>Ready to Begin?</div>
            {/* Playfair Display Bold H2 */}
            <h2 className="cta-title">
              Visit Our<br /><em>Showroom Today</em>
            </h2>
            {/* Outfit Regular */}
            <p className="cta-desc">
              See our full collection in person. Our stone experts are ready to guide
              you through 500+ varieties of marble, granite, and designer tiles.
            </p>
            <div className="cta-btns">
              {/* Tenor Sans buttons */}
              <Link href="/products" className="btn-p">Explore Products <ArrowRight size={15} /></Link>
              <Link href="/about" className="btn-o">About Us <ArrowRight size={15} /></Link>
            </div>
            {/* Outfit Medium caps badges */}
            <div className="cta-badges">
              {["Free Consultation","No Obligation","Expert Guidance"].map(b => (
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