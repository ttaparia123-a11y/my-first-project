"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import GooeyNav from "./GooeyNav"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

const gooeyItems = navLinks.map((link) => ({
  label: link.label,
  href: link.href,
}))

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // sync active pill with current route
  const activeIndex = Math.max(
    navLinks.findIndex((link) => link.href === pathname),
    0
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/dayanand-marbles-logo.jpeg"
            alt="Dayanand Marbles"
            width={50}
            height={50}
            priority
          />
          <div className="flex flex-col">
            <span className="font-brand text-xl font-bold tracking-wide">
              Dayanand <span className="italic font-normal">Marbles</span>
            </span>
          </div>
        </Link>

        {/* Desktop GooeyNav */}
        <div className="hidden lg:flex items-center justify-center">
          <div
            style={{
              position: "relative",
              height: "70px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <GooeyNav
              items={gooeyItems}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={activeIndex}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>
        </div>

        {/* Desktop Get Quote Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-marble-brown text-marble-brown hover:bg-marble-brown hover:text-primary-foreground transition-all"
            >
              Get Quote
            </Button>
          </Link>
        </div>

       <button
        className="lg:hidden p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
        style={{
        zIndex: 60,
         position: "relative",
         color: isMobileMenuOpen ? "#c8a96e" : "inherit",
         transition: "color 0.3s",
         }}
         >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

     {/* Mobile Navigation - Staggered Fullscreen */}
      <div
        className="lg:hidden"
        style={{
          position: "fixed",
          inset: 0,
          background: "#1a1a1a",
          zIndex: 40,
          display: "flex",
          flexDirection: "column",
          padding: "100px 30px 40px",
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.77,0,0.18,1)",
        }}
      >
        <nav style={{ display: "flex", flexDirection: "column" }}>
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontSize: "clamp(28px, 8vw, 40px)",
                fontWeight: 500,
                color: pathname === link.href ? "#c8a96e" : "#ffffff",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateX(0)" : "translateX(40px)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
                transitionDelay: isMobileMenuOpen ? `${0.15 + index * 0.07}s` : "0s",
              }}
            >
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>
                0{index + 1}
              </span>
              {link.label}
              {pathname === link.href && (
                <span
                  style={{
                    marginLeft: "auto",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#c8a96e",
                  }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Get Quote Button */}
        <div
          style={{
            marginTop: "30px",
            opacity: isMobileMenuOpen ? 1 : 0,
            transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
            transitionDelay: isMobileMenuOpen
              ? `${0.15 + navLinks.length * 0.07}s`
              : "0s",
          }}
        >
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button
              style={{
                width: "100%",
                background: "#c8a96e",
                color: "#fff",
                border: "none",
                padding: "14px",
                fontSize: "15px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Get Quote
            </Button>
          </Link>
        </div>

        {/* Social Links */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            gap: "20px",
            opacity: isMobileMenuOpen ? 1 : 0,
            transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
            transitionDelay: isMobileMenuOpen ? "0.6s" : "0s",
          }}
        >
          {["Instagram", "WhatsApp", "Facebook"].map((s) => (
            <span
              key={s}
              style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}