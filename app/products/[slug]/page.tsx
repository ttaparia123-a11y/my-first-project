"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface PerfectFor { icon: string; label: string; reason: string }
interface Variety {
  id: string; name: string; image: string; slides: string[]
  description: string; perfectFor: PerfectFor[]; details: Record<string, string>
}
interface Collection {
  title: string; subtitle: string; description: string
  image: string; slides: string[]; details: Record<string, string>; varieties: Variety[]
}

const collections: Record<string, Collection> = {
  "italian-marble": {
    title: "Italian Marble",
    subtitle: "Quarried in Carrara & Brescia",
    description: "Timeless luxury imported from Italy's finest quarries. Each slab carries centuries of geological beauty, shaped by the same mountains that inspired Michelangelo.",
    image: "/images/italian-marble.jpg",
    slides: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1200&q=80",
    ],
    details: {
      Origin: "Italy (Carrara, Brescia)", Finish: "Polished, Honed, Brushed",
      "Best For": "Flooring, Wall Cladding, Countertops",
      "Price Range": "₹150 – ₹400 / sq ft", Thickness: "18mm, 20mm", Availability: "In Stock",
    },
    varieties: [
      {
        id: "carrara-white", name: "Carrara White",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        slides: [
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
          "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
          "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80",
        ],
        description: "Classic white marble with soft grey veining. The world's most recognised marble, beloved for its clean, timeless look.",
        perfectFor: [
          { icon: "🏠", label: "Flooring", reason: "Highly durable under foot traffic. Reflects light beautifully, making rooms look larger and brighter." },
          { icon: "🛁", label: "Bathroom", reason: "Water resistant when sealed. Creates a spa-like luxury feel in bathrooms and wet areas." },
          { icon: "🪜", label: "Staircases", reason: "Elegant veining looks stunning on steps. Polished finish adds a grand, premium entry statement." },
        ],
        details: { Origin: "Carrara, Italy", Finish: "Polished, Honed", "Best For": "Flooring, Bathrooms, Feature Walls", "Price Range": "₹150 – ₹220 / sq ft", Thickness: "18mm, 20mm" },
      },
      {
        id: "calacatta-gold", name: "Calacatta Gold",
        image: "https://images.unsplash.com/photo-1618221118493-53571c9e37a5?w=800&q=80",
        slides: [
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
          "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
        ],
        description: "Rare white marble with bold gold and brown veining. A premium choice that makes any space feel opulent.",
        perfectFor: [
          { icon: "🍳", label: "Kitchen Top", reason: "Bold veining becomes a centrepiece in kitchens. Heat resistant and easy to maintain with proper sealing." },
          { icon: "🪞", label: "Feature Wall", reason: "The dramatic gold veins create a jaw-dropping accent wall in living rooms and lobbies." },
          { icon: "🛁", label: "Bathroom", reason: "Turns any bathroom into a 5-star hotel suite. The gold tones add warmth and luxury." },
        ],
        details: { Origin: "Carrara, Italy", Finish: "Polished, Honed", "Best For": "Countertops, Feature Walls, Luxury Interiors", "Price Range": "₹280 – ₹400 / sq ft", Thickness: "18mm, 20mm" },
      },
      {
        id: "statuario", name: "Statuario",
        image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80",
        slides: [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
          "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80",
          "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80",
        ],
        description: "Bright white with dramatic grey veins. Highly sought after for luxury interiors and architectural statements.",
        perfectFor: [
          { icon: "🏠", label: "Flooring", reason: "The bright white base and bold veins make floors look like a work of art in any room." },
          { icon: "🪜", label: "Staircases", reason: "Dramatic grey veining on pure white creates a striking, architectural staircase statement." },
          { icon: "🪞", label: "Feature Wall", reason: "Used by top architects worldwide as a statement wall in lobbies, living rooms and offices." },
        ],
        details: { Origin: "Carrara, Italy", Finish: "Polished, Honed, Brushed", "Best For": "Sculptures, Luxury Flooring, Wall Panels", "Price Range": "₹220 – ₹350 / sq ft", Thickness: "18mm, 20mm" },
      },
    ],
  },

  "indian-marble": {
    title: "Indian Marble",
    subtitle: "Heritage Stones of Rajasthan",
    description: "Sourced from the legendary quarries of Makrana and Ambaji, Indian marble offers natural warmth and a rich cultural legacy that spans thousands of years.",
    image: "/images/indian-marble.jpg",
    slides: [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1200&q=80",
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=1200&q=80",
    ],
    details: {
      Origin: "Rajasthan & Gujarat, India", Finish: "Polished, Honed, Antique",
      "Best For": "Flooring, Temples, Residential Interiors",
      "Price Range": "₹60 – ₹180 / sq ft", Thickness: "16mm, 18mm, 20mm", Availability: "In Stock",
    },
    varieties: [
      {
        id: "makrana-white", name: "Makrana White",
        image: "https://images.unsplash.com/photo-1566312922674-a4f969d82230?w=800&q=80",
        slides: [
          "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
          "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=800&q=80",
          "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
        ],
        description: "The marble of the Taj Mahal. Pure white and extremely durable — the gold standard of Indian stone.",
        perfectFor: [
          { icon: "🏠", label: "Flooring", reason: "Proven durability over centuries. Stays cool underfoot and looks pristine even after years of use." },
          { icon: "🛕", label: "Temple/Pooja", reason: "Considered sacred and auspicious. The preferred marble for temples, pooja rooms and religious spaces." },
          { icon: "🪜", label: "Staircases", reason: "Extremely hard and scratch resistant — perfect for high traffic areas like stairs and lobbies." },
        ],
        details: { Origin: "Makrana, Rajasthan", Finish: "Polished, Honed", "Best For": "Flooring, Monuments, Heritage Projects", "Price Range": "₹100 – ₹180 / sq ft", Thickness: "18mm, 20mm" },
      },
      {
        id: "ambaji-marble", name: "Ambaji Marble",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
        slides: [
          "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80",
          "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=800&q=80",
          "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
        ],
        description: "Sourced from the sacred hills of Gujarat, this warm white marble has a subtle texture ideal for homes and temples.",
        perfectFor: [
          { icon: "🏠", label: "Flooring", reason: "Warm ivory tone complements Indian home interiors beautifully. Cool in summer, easy to clean." },
          { icon: "🛕", label: "Temple/Pooja", reason: "Widely used in Gujarat temples for its spiritual significance and natural white purity." },
          { icon: "🍳", label: "Kitchen Top", reason: "Subtle texture hides minor scratches. Warm tones pair well with wooden kitchen cabinets." },
        ],
        details: { Origin: "Ambaji, Gujarat", Finish: "Polished, Antique", "Best For": "Temple Floors, Residential Spaces, Staircases", "Price Range": "₹80 – ₹140 / sq ft", Thickness: "16mm, 18mm" },
      },
      {
        id: "rajasthan-green", name: "Rajasthan Green",
        image: "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?w=800&q=80",
        slides: [
          "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
          "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
          "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
        ],
        description: "A unique green-toned marble exclusive to Rajasthan. Adds bold character to decorative surfaces and feature walls.",
        perfectFor: [
          { icon: "🪞", label: "Feature Wall", reason: "The unique green tone creates a bold, nature-inspired accent wall that stands out in any room." },
          { icon: "🏠", label: "Flooring", reason: "Earthy green tones bring a natural, grounding energy to living spaces and corridors." },
          { icon: "🛁", label: "Bathroom", reason: "The green tone evokes a spa-like, organic atmosphere — perfect for premium bathrooms." },
        ],
        details: { Origin: "Rajasthan, India", Finish: "Polished, Honed", "Best For": "Feature Walls, Decorative Panels, Accent Flooring", "Price Range": "₹60 – ₹110 / sq ft", Thickness: "16mm, 18mm" },
      },
    ],
  },

  granite: {
    title: "Granite",
    subtitle: "Industrial Strength, Natural Beauty",
    description: "One of the hardest natural stones on earth — granite brings resilience and drama to every surface. Formed deep within the earth over millions of years.",
    image: "/images/granite.jpg",
    slides: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=1200&q=80",
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=80",
    ],
    details: {
      Origin: "India, Brazil, South Africa", Finish: "Polished, Flamed, Leathered",
      "Best For": "Kitchen Countertops, Outdoor Flooring, Steps",
      "Price Range": "₹70 – ₹250 / sq ft", Thickness: "18mm, 20mm", Availability: "In Stock",
    },
    varieties: [
      {
        id: "black-galaxy", name: "Black Galaxy",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        slides: [
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
          "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
          "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=800&q=80",
        ],
        description: "Deep black granite with sparkling golden speckles. One of the most popular granites for kitchen countertops worldwide.",
        perfectFor: [
          { icon: "🍳", label: "Kitchen Top", reason: "The dark surface hides stains and scratches. Gold speckles add glamour to modern kitchens." },
          { icon: "🏠", label: "Flooring", reason: "Makes a bold, dramatic statement in lobbies, corridors and living rooms. Very easy to maintain." },
          { icon: "🪞", label: "Feature Wall", reason: "The galaxy-like sparkle under light creates a stunning, one-of-a-kind feature wall effect." },
        ],
        details: { Origin: "Andhra Pradesh, India", Finish: "Polished, Leathered", "Best For": "Kitchen Countertops, Bar Tops, Feature Walls", "Price Range": "₹150 – ₹250 / sq ft", Thickness: "18mm, 20mm" },
      },
      {
        id: "tan-brown", name: "Tan Brown",
        image: "https://images.unsplash.com/photo-1600566752547-5c97c6f3ebe2?w=800&q=80",
        slides: [
          "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
          "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80",
        ],
        description: "Rich brown with black and grey flecks. Extremely durable and elegant — a versatile choice for both floors and countertops.",
        perfectFor: [
          { icon: "🍳", label: "Kitchen Top", reason: "Brown tones complement wooden cabinets perfectly. Highly resistant to heat, scratches and stains." },
          { icon: "🏠", label: "Flooring", reason: "Warm earthy tones work beautifully in living rooms and bedrooms, hiding dirt and wear effectively." },
          { icon: "🌿", label: "Outdoor", reason: "Extremely weather resistant. Ideal for outdoor patios, garden paths and exterior flooring." },
        ],
        details: { Origin: "Andhra Pradesh, India", Finish: "Polished, Flamed", "Best For": "Flooring, Countertops, Outdoor Steps", "Price Range": "₹100 – ₹180 / sq ft", Thickness: "18mm, 20mm" },
      },
      {
        id: "kashmir-white", name: "Kashmir White",
        image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=800&q=80",
        slides: [
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
          "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
        ],
        description: "Creamy white with burgundy and grey specks. A beautiful and versatile granite for indoor and outdoor use.",
        perfectFor: [
          { icon: "🍳", label: "Kitchen Top", reason: "Light base with colourful specks hides crumbs and minor stains. Suits both modern and classic kitchens." },
          { icon: "🛁", label: "Bathroom", reason: "Soft creamy tones create a clean, fresh bathroom feel. Easy to pair with any tile colour." },
          { icon: "🌿", label: "Outdoor", reason: "Handles rain, heat and frost with ease. A premium choice for outdoor flooring and wall cladding." },
        ],
        details: { Origin: "Tamil Nadu, India", Finish: "Polished, Honed, Flamed", "Best For": "Kitchen Countertops, Bathroom Vanities, Outdoor Flooring", "Price Range": "₹70 – ₹140 / sq ft", Thickness: "18mm, 20mm" },
      },
    ],
  },
}

function useSlideshow(slides: string[], active: boolean, interval = 1800) {
  const [index, setIndex] = useState(0)
  const timer = useRef<NodeJS.Timeout | null>(null)
  useEffect(() => {
    if (active) {
      setIndex(0)
      timer.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval)
    } else {
      if (timer.current) clearInterval(timer.current)
      setIndex(0)
    }
    return () => { if (timer.current) clearInterval(timer.current) }
  }, [active, slides.length, interval])
  return index
}

function HeroMedia({ slides, image, title }: { slides: string[]; image: string; title: string }) {
  const [active, setActive] = useState(false)
  const slideIndex = useSlideshow(slides, active, 1800)
  return (
    <div className="hero-media" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} onClick={() => setActive(a => !a)}>
      <img src={image} alt={title} className={`hero-img ${active ? "hero-img-hide" : ""}`} />
      {slides.map((src, i) => <img key={i} src={src} alt={`${title} space ${i + 1}`} className={`hero-slide ${active && i === slideIndex ? "slide-show" : ""}`} />)}
      {active && <div className="slide-dots">{slides.map((_, i) => <span key={i} className={`slide-dot ${i === slideIndex ? "dot-active" : ""}`} />)}</div>}
      {!active && <div className="hover-hint">Hover to see in real spaces</div>}
      {active && <div className="now-showing"><span className="live-dot" /> Showing in real spaces</div>}
    </div>
  )
}

function VarietyCard({ variety }: { variety: Variety }) {
  const [active, setActive] = useState(false)
  const [tooltip, setTooltip] = useState<string | null>(null)
  const slideIndex = useSlideshow(variety.slides, active, 1600)
  return (
    <div className="vc">
      <div className="vc-media" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} onClick={() => setActive(a => !a)}>
        <img src={variety.image} alt={variety.name} className={`vc-img ${active ? "vc-img-zoom" : ""}`} />
        <div className={`vc-slides-wrap ${active ? "slides-up" : ""}`}>
          {variety.slides.map((src, i) => <img key={i} src={src} alt={`${variety.name} ${i + 1}`} className={`vc-slide-img ${i === slideIndex ? "vc-slide-show" : ""}`} />)}
          <div className="vc-dots">{variety.slides.map((_, i) => <span key={i} className={`vc-dot ${i === slideIndex ? "vc-dot-active" : ""}`} />)}</div>
          <div className="vc-live-label"><span className="live-dot" /> In your space</div>
        </div>
        {!active && <div className="tap-hint">Tap / Hover to preview</div>}
      </div>
      <div className="vc-body">
        <h3 className="vc-name">{variety.name}</h3>
        <p className="vc-desc">{variety.description}</p>
        <p className="pf-title">✦ Perfect For</p>
        <div className="pf-row">
          {variety.perfectFor.map((pf) => (
            <div key={pf.label} className="pf-wrap">
              <div className="pf-btn" onMouseEnter={() => setTooltip(pf.label)} onMouseLeave={() => setTooltip(null)} onClick={() => setTooltip(tooltip === pf.label ? null : pf.label)}>
                <span className="pf-emoji">{pf.icon}</span>
                <span className="pf-lbl">{pf.label}</span>
              </div>
              {tooltip === pf.label && <div className="pf-tip">{pf.reason}<span className="tip-arrow" /></div>}
            </div>
          ))}
        </div>
        <div className="vc-table">
          {Object.entries(variety.details).map(([k, v]) => (
            <div key={k} className="vc-row"><span className="vc-lbl">{k}</span><span className="vc-val">{v}</span></div>
          ))}
        </div>
        <Link href={`/contact?product=${variety.id}`} className="vc-quote">Get Quote <ArrowRight size={12} /></Link>
      </div>
    </div>
  )
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const data = collections[params.slug as keyof typeof collections]
  if (!data) return <div style={{ textAlign: "center", padding: "100px 20px" }}><h2>Not found</h2><Link href="/products">← Back</Link></div>

  return (
    <>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        body{background:#f9f6f1;color:#3d3530;}
        .back{display:inline-flex;align-items:center;gap:8px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#8c6b4a;text-decoration:none;padding:40px 60px 0;transition:color .2s;}
        .back:hover{color:#3d3530;}
        .hero{display:grid;grid-template-columns:1fr 1fr;min-height:90vh;margin-top:30px;}
        .hero-media{position:relative;overflow:hidden;cursor:pointer;min-height:500px;background:#e8e4dc;}
        .hero-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .8s ease;z-index:2;}
        .hero-img-hide{opacity:0;}
        .hero-slide{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .8s ease;z-index:1;}
        .slide-show{opacity:1;z-index:3;}
        .slide-dots{position:absolute;bottom:20px;left:50%;transform:translateX(-50%);display:flex;gap:6px;z-index:5;}
        .slide-dot{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,0.5);transition:background .3s;}
        .dot-active{background:#fff;}
        .hover-hint{position:absolute;bottom:20px;right:20px;background:rgba(255,255,255,0.15);backdrop-filter:blur(6px);color:#fff;font-size:10px;letter-spacing:2px;text-transform:uppercase;padding:8px 14px;border:1px solid rgba(255,255,255,0.3);z-index:6;pointer-events:none;}
        .now-showing{position:absolute;bottom:20px;left:20px;background:rgba(0,0,0,0.45);color:#fff;font-size:10px;letter-spacing:2px;text-transform:uppercase;padding:8px 14px;border-radius:30px;display:flex;align-items:center;gap:8px;z-index:6;backdrop-filter:blur(4px);pointer-events:none;}
        .live-dot{width:7px;height:7px;background:#ff4444;border-radius:50%;animation:blink 1.2s infinite;flex-shrink:0;}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0.2}}
        .hero-content{background:#ede9e0;padding:80px 60px;display:flex;flex-direction:column;justify-content:center;}
        .badge{font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#8c6b4a;margin-bottom:12px;}
        .hero-title{font-size:48px;font-weight:700;line-height:1.1;margin-bottom:20px;color:#2c2420;}
        .hero-desc{color:#6b5f57;line-height:1.7;margin-bottom:36px;font-size:15px;}
        .d-table{border-top:1px solid #c4b49a;margin-bottom:36px;}
        .d-row{display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid #e0d8cc;}
        .d-lbl{color:#8c6b4a;font-weight:500;text-transform:uppercase;letter-spacing:1px;font-size:11px;}
        .d-val{color:#3d3530;text-align:right;font-size:13px;}
        .main-quote{display:inline-flex;align-items:center;gap:10px;background:#3d3530;color:#f9f6f1;padding:14px 28px;font-size:12px;letter-spacing:2px;text-transform:uppercase;text-decoration:none;transition:background .2s;width:fit-content;}
        .main-quote:hover{background:#8c6b4a;}
        .varieties{padding:80px 60px;background:#f9f6f1;}
        .v-head{text-align:center;margin-bottom:60px;}
        .v-head h2{font-size:38px;font-weight:700;color:#2c2420;margin-bottom:10px;}
        .v-head p{color:#8c6b4a;font-size:11px;letter-spacing:3px;text-transform:uppercase;}
        .v-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;}
        .vc{background:#ede9e0;overflow:hidden;display:flex;flex-direction:column;}
        .vc-media{position:relative;height:280px;overflow:hidden;cursor:pointer;background:#e0dbd3;}
        .vc-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .5s ease;z-index:1;}
        .vc-img-zoom{transform:scale(1.05);}
        .vc-slides-wrap{position:absolute;inset:0;z-index:2;transform:translateY(100%);transition:transform .55s cubic-bezier(0.4,0,0.2,1);}
        .slides-up{transform:translateY(0);}
        .vc-slide-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .7s ease;}
        .vc-slide-show{opacity:1;}
        .vc-dots{position:absolute;bottom:40px;left:50%;transform:translateX(-50%);display:flex;gap:5px;z-index:4;}
        .vc-dot{width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,0.5);transition:background .3s;}
        .vc-dot-active{background:#fff;}
        .vc-live-label{position:absolute;bottom:12px;left:12px;background:rgba(0,0,0,0.45);color:#fff;font-size:9px;letter-spacing:2px;text-transform:uppercase;padding:6px 12px;border-radius:30px;display:flex;align-items:center;gap:6px;backdrop-filter:blur(4px);z-index:4;}
        .tap-hint{position:absolute;top:12px;right:12px;background:rgba(0,0,0,0.4);color:#fff;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;padding:5px 10px;backdrop-filter:blur(4px);z-index:4;pointer-events:none;}
        .vc-body{padding:28px;flex:1;display:flex;flex-direction:column;}
        .vc-name{font-size:20px;font-weight:700;color:#2c2420;margin-bottom:10px;}
        .vc-desc{font-size:13px;color:#6b5f57;line-height:1.6;margin-bottom:20px;}
        .pf-title{font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#8c6b4a;margin-bottom:12px;font-weight:600;}
        .pf-row{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:20px;}
        .pf-wrap{position:relative;}
        .pf-btn{display:flex;flex-direction:column;align-items:center;gap:4px;background:#f9f6f1;border:1px solid #c4b49a;padding:10px 14px;cursor:pointer;transition:background .2s,border-color .2s;min-width:72px;}
        .pf-btn:hover{background:#3d3530;border-color:#3d3530;}
        .pf-btn:hover .pf-lbl{color:#f9f6f1;}
        .pf-emoji{font-size:20px;}
        .pf-lbl{font-size:9px;letter-spacing:1px;text-transform:uppercase;color:#6b5f57;text-align:center;transition:color .2s;}
        .pf-tip{position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%);background:#2c2420;color:#f9f6f1;font-size:11px;line-height:1.5;padding:10px 14px;width:220px;z-index:20;box-shadow:0 4px 20px rgba(0,0,0,0.25);pointer-events:none;}
        .tip-arrow{position:absolute;top:100%;left:50%;transform:translateX(-50%);border:6px solid transparent;border-top-color:#2c2420;}
        .vc-table{border-top:1px solid #c4b49a;margin-bottom:24px;}
        .vc-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #e8e2d9;}
        .vc-lbl{color:#8c6b4a;font-weight:500;text-transform:uppercase;letter-spacing:1px;font-size:10px;}
        .vc-val{color:#3d3530;font-size:12px;text-align:right;}
        .vc-quote{display:inline-flex;align-items:center;gap:8px;background:transparent;color:#3d3530;padding:10px 0;font-size:11px;letter-spacing:2px;text-transform:uppercase;text-decoration:none;border-bottom:1px solid #3d3530;transition:color .2s,border-color .2s;margin-top:auto;width:fit-content;}
        .vc-quote:hover{color:#8c6b4a;border-color:#8c6b4a;}
        @media(max-width:1024px){.v-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:768px){
          .back{padding:30px 20px 0;}.hero{grid-template-columns:1fr;}.hero-media{min-height:350px;}
          .hero-content{padding:40px 20px;}.hero-title{font-size:32px;}
          .varieties{padding:60px 20px;}.v-grid{grid-template-columns:1fr;}
          .pf-tip{width:180px;font-size:10px;}
        }
      `}</style>

      <Header />
      <Link href="/products" className="back"><ArrowLeft size={14} /> Back to Products</Link>

      <section className="hero">
        <HeroMedia slides={data.slides} image={data.image} title={data.title} />
        <div className="hero-content">
          <div className="badge">{data.subtitle}</div>
          <h1 className="hero-title">{data.title}</h1>
          <p className="hero-desc">{data.description}</p>
          <div className="d-table">
            {Object.entries(data.details).map(([k, v]) => (
              <div key={k} className="d-row"><span className="d-lbl">{k}</span><span className="d-val">{v}</span></div>
            ))}
          </div>
          <Link href="/contact" className="main-quote">Get Quote <ArrowRight size={14} /></Link>
        </div>
      </section>

      <section className="varieties">
        <div className="v-head"><p>Explore the Range</p><h2>{data.title} Varieties</h2></div>
        <div className="v-grid">{data.varieties.map((v) => <VarietyCard key={v.id} variety={v} />)}</div>
      </section>

      <Footer />
    </>
  )
}