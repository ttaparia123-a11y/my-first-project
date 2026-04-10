"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react"

const quickLinks = [
  { label: "Home",href: "/"},
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

const productLinks = [
  { label: "Italian Marble", href: "/products" },
  { label: "Indian Marble", href: "/products" },
  { label: "Granite", href: "/products" },
]

export function Footer() {
  return (
    <footer className="bg-marble-dark text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-marble-gold rounded-sm flex items-center justify-center">
                <span className="text-marble-dark font-serif text-lg font-bold">D</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold">
                  Dayanand Marbles
                </span>
               
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Udaipur&apos;s premier destination for premium marble, granite, and 
              transforming spaces with nature&apos;s finest stone for over 20 years.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-marble-gold hover:text-marble-dark transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-marble-gold hover:text-marble-dark transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
           
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-marble-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Our Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-marble-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-marble-gold shrink-0 mt-0.5" />
                 <span className="text-primary-foreground/70">
                  N.H. 8, Sukher, Udaipur,
                  <br />
                  In Front of Skoda Showroom,
                  <br />
                  Rajasthan 313001, India
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-marble-gold shrink-0" />
                <span className="text-primary-foreground/70">+91 93518 35358</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-marble-gold shrink-0" />
                <span className="text-primary-foreground/70">dayanandmarbleindia@gmail.com</span>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-marble-gold shrink-0" />
                <span className="text-primary-foreground/70">
                  Mon - Sat: 9:00 AM - 7:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>&copy; 2026 Dayanand Marbles. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-marble-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-marble-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
