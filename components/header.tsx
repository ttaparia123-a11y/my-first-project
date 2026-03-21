"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label:"Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-nav text-sm tracking-widest text-foreground transition-colors hover:text-marble-brown
            after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
            after:bg-marble-brown after:transition-all after:duration-300
            hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ✅ Desktop Get Quote Button → links to /contact */}
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
        <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-nav text-foreground text-lg py-2 border-b border-border/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* ✅ Mobile Get Quote Button → links to /contact */}
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="mt-4 w-full bg-marble-brown hover:bg-marble-dark text-primary-foreground">
              Get Quote
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}