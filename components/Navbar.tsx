"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const links = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/tecnicas", label: "Técnicas" },
  { href: "/niveles", label: "Niveles" },
  { href: "/recursos", label: "Recursos" },
  { href: "/contacto", label: "Contacto" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: "#2D6A3F",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.15)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt="Estudia con Sentido"
              width={44}
              height={44}
              className="rounded-full object-contain bg-white"
            />
            <span
              className="text-white font-bold text-lg leading-tight hidden sm:block"
              style={{ fontFamily: "var(--font-montserrat-var), sans-serif" }}
            >
              Estudia con Sentido
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
                style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-200"
                  style={{ backgroundColor: "#F5E47A" }}
                />
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contacto"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "#F5E47A",
                color: "#2D6A3F",
                fontFamily: "var(--font-montserrat-var), sans-serif",
              }}
            >
              Quiero empezar
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Abrir menú"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
            style={{ backgroundColor: "#2D6A3F", borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
                    style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.05 }}
                className="mt-2 px-4"
              >
                <Link
                  href="/contacto"
                  className="block w-full text-center px-5 py-3 rounded-lg font-bold text-sm transition-all duration-200"
                  style={{
                    backgroundColor: "#F5E47A",
                    color: "#2D6A3F",
                    fontFamily: "var(--font-montserrat-var), sans-serif",
                  }}
                >
                  Quiero empezar
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
