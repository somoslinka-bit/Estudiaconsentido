"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import {
  Highlighter,
  Network,
  Clock,
  HelpCircle,
  Timer,
  Lightbulb,
  Table2,
} from "lucide-react"
import { tecnicas } from "@/lib/tecnicas"

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Highlighter,
  Network,
  Clock,
  HelpCircle,
  Timer,
  Lightbulb,
  Table2,
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function TecnicasPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="pt-32 pb-20 lg:pt-40 lg:pb-28"
        style={{ backgroundColor: "#2D6A3F" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4"
              style={{
                backgroundColor: "rgba(245,228,122,0.2)",
                color: "#F5E47A",
                fontFamily: "var(--font-montserrat-var), sans-serif",
              }}
            >
              7 técnicas probadas
            </span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-montserrat-var), sans-serif" }}
            >
              Técnicas de estudio
            </h1>
            <p
              className="text-white/80 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
            >
              No existe una única forma correcta de estudiar. Estas técnicas están elegidas por su efectividad y adaptadas para estudiantes de todos los niveles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F4F4F4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tecnicas.map((tec, i) => {
              const Icon = iconMap[tec.icono]
              return (
                <FadeIn key={tec.slug} delay={i * 0.08}>
                  <Link
                    href={`/tecnicas/${tec.slug}`}
                    className="group block bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 h-full border border-transparent hover:border-green-100"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: "#EAF4EC" }}
                    >
                      {Icon && <Icon size={24} color="#2D6A3F" />}
                    </div>
                    <h2
                      className="text-xl font-bold mb-2"
                      style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
                    >
                      {tec.nombre}
                    </h2>
                    <p
                      className="text-sm text-gray-600 leading-relaxed mb-4"
                      style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
                    >
                      {tec.descripcion}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-xs px-2 py-1 rounded-full font-medium"
                        style={{ backgroundColor: "#EAF4EC", color: "#2D6A3F", fontFamily: "var(--font-lato-var), sans-serif" }}
                      >
                        {tec.nivelIdeal}
                      </span>
                      <span
                        className="text-sm font-bold group-hover:underline"
                        style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
                      >
                        Ver técnica →
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#F5E47A" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-3"
              style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
            >
              ¿Querés aprender a aplicarlas?
            </h2>
            <p
              className="mb-6"
              style={{ color: "#2D6A3F", fontFamily: "var(--font-lato-var), sans-serif" }}
            >
              En las sesiones trabajamos con las técnicas que mejor se adapten a tus materias y tu forma de aprender.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center px-7 py-3.5 rounded-lg font-bold text-base transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "#2D6A3F",
                color: "white",
                fontFamily: "var(--font-montserrat-var), sans-serif",
              }}
            >
              Quiero empezar
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
