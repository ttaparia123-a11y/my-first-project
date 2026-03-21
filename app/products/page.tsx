"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: "italian-marble",
    title: "Italian Marble",
    subtitle: "Quarried in Carrara & Brescia",
    description:
      "Timeless luxury imported from Italy's finest quarries. Each slab carries centuries of geological beauty.",
    image: "/images/italian-marble.jpg",
    tags: ["Carrara White", "Calacatta Gold", "Statuario"],
  },
  {
    id: "indian-marble",
    title: "Indian Marble",
    subtitle: "Heritage stones of Rajasthan",
    description:
      "Sourced from the legendary quarries of Makrana and Ambaji, Indian marble offers natural warmth.",
    image: "/images/indian-marble.jpg",
    tags: ["Makrana White", "Ambaji Marble", "Rajasthan Green"],
  },
  {
    id: "granite",
    title: "Granite",
    subtitle: "Industrial strength, natural beauty",
    description:
      "One of the hardest natural stones on earth — granite brings resilience and drama.",
    image: "/images/granite.jpg",
    tags: ["Black Galaxy", "Tan Brown", "Kashmir White"],
  },
]

export default function ProductsPage() {
  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }

        .page {
          background: #f9f6f1;
          color: #3d3530;
        }

        .section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
        }

        .section.reverse {
          direction: rtl;
        }
        .section.reverse > * {
          direction: ltr;
        }

        .image {
          position: relative;
        }

        .content {
          background: #ede9e0;
          padding: 80px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .number {
          font-size: 70px;
          opacity: 0.2;
          margin-bottom: -10px;
        }

        .title {
          font-size: 36px;
          font-weight: bold;
        }

        .subtitle {
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #8c6b4a;
          margin-bottom: 20px;
        }

        .desc {
          margin-bottom: 20px;
          color: #6b5f57;
        }

        .tags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }

        .tag {
          border: 1px solid #c4b49a;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 12px;
        }

        .view-link {
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 2px;
          border-bottom: 1px solid #3d3530;
          width: fit-content;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #3d3530;
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s;
        }

        .view-link:hover {
          color: #8c6b4a;
          border-color: #8c6b4a;
        }

        @media(max-width:768px){
          .section {
            grid-template-columns: 1fr;
          }
          .content {
            padding: 40px 20px;
          }
        }
      `}</style>

      <div className="page">
        <Header />

        {/* HERO */}
        <section style={{ padding: "120px 20px", textAlign: "center" }}>
          <h1 style={{ fontSize: "60px", marginBottom: "10px" }}>
            Our <em style={{ color: "#8c6b4a" }}>Collections</em>
          </h1>
          <p>Explore our premium marble & granite collection</p>
        </section>

        {/* SECTIONS */}
        {categories.map((cat, i) => (
          <section
            key={cat.id}
            id={cat.id}
            className={`section ${i % 2 === 1 ? "reverse" : ""}`}
          >
            {/* IMAGE */}
            <div className="image">
              <Image src={cat.image} alt={cat.title} fill style={{ objectFit: "cover" }} />
            </div>

            {/* CONTENT */}
            <div className="content">
              <div className="number">0{i + 1}</div>
              <h2 className="title">{cat.title}</h2>
              <div className="subtitle">{cat.subtitle}</div>
              <p className="desc">{cat.description}</p>

              <div className="tags">
                {cat.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              {/* ✅ NOW A REAL LINK TO THE COLLECTION PAGE */}
              <Link href={`/products/${cat.id}`} className="view-link">
                View Collection <ArrowRight size={14} />
              </Link>
            </div>
          </section>
        ))}

        <Footer />
      </div>
    </>
  )
}