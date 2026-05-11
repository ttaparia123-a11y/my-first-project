"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
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
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/dayanand-marbles-logo.jpeg"
                alt="Dayanand Marbles"
                width={50}
                height={50}
                className="rounded-sm"
              />
              <span className="font-serif text-xl font-semibold text-gray-900">
                Dayanand Marbles
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed mb-6">
              Udaipur&apos;s premier destination for premium marble, granite, and
              transforming spaces with nature&apos;s finest stone for over 20 years.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-marble-gold hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-marble-gold hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-marble-brown transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gray-900 mb-6">Our Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-marble-brown transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gray-900 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-marble-gold shrink-0 mt-0.5" />
                <span className="text-gray-500">
                  N.H. 8, Sukher, Udaipur,
                  <br />
                  In Front of Skoda Showroom,
                  <br />
                  Rajasthan 313001, India
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-marble-gold shrink-0" />
                <span className="text-gray-500">+91 7891704729</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-marble-gold shrink-0" />
                <span className="text-gray-500">dayanandmarbleindia@gmail.com</span>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-marble-gold shrink-0" />
                <span className="text-gray-500">Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>&copy; 2026 Dayanand Marbles. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-marble-brown transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-marble-brown transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}