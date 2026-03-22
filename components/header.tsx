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

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
<div
  className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border transition-all duration-300 ${
    isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
>
  <nav className="container mx-auto px-6 py-6 flex flex-col gap-2">
    {navLinks.map((link, index) => (
      <Link
        key={link.href}
        href={link.href}
        className={`font-nav text-foreground text-lg py-3 border-b border-border/50 flex items-center justify-between
          transition-all duration-300
          ${isMobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-8"
          }
          ${pathname === link.href ? "text-marble-brown font-semibold" : ""}
        `}
        style={{
          transitionDelay: isMobileMenuOpen ? `${index * 60}ms` : "0ms"
        }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <span>{link.label}</span>
        {pathname === link.href && (
          <span className="w-1.5 h-1.5 rounded-full bg-marble-brown" />
        )}
      </Link>
    ))}

    {/* CTA Button */}
    <div
      className={`transition-all duration-300 ${
        isMobileMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      }`}
      style={{
        transitionDelay: isMobileMenuOpen
          ? `${navLinks.length * 60}ms`
          : "0ms"
      }}
    >
      <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
        <Button className="mt-4 w-full bg-marble-brown hover:bg-marble-dark text-primary-foreground">
          Get Quote
        </Button>
      </Link>
    </div>
  </nav>
</div>
    </header>
  )
}