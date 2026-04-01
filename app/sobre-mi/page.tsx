"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Heart, Lightbulb, Target, Shield, Star } from "lucide-react"
import type { Metadata } from "next"

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

const valores = [
  { nombre: "Empatía", desc: "Me pongo en tu lugar para entender qué te cuesta y por qué.", Icon: Heart },
  { nombre: "Claridad", desc: "Todo lo que trabajamos lo explicamos de forma simple y concreta.", Icon: Lightbulb },
  { nombre: "Motivación", desc: "Mi objetivo es que veas resultados rápido para que sigas adelante.", Icon: Target },
  { nombre: "Compromiso", desc: "Estoy presente en cada sesión y disponible para consultas.", Icon: Shield },
  { nombre: "Confianza", desc: "Construimos un espacio seguro donde podés equivocarte y crecer.", Icon: Star },
]

export default function SobreMiPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="pt-32 pb-20 lg:pt-40 lg:pb-28"
        style={{ backgroundColor: "#2D6A3F" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Foto */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="flex-shrink-0"
            >
              <div
                className="relative w-56 h-56 rounded-full overflow-hidden border-4 shadow-2xl"
                style={{ borderColor: "#F5E47A" }}
              >
                <Image
                  src="/maria-paz.png"
                  alt="María Paz Escobar — Licenciada en Ciencias de la Educación"
                  fill
                  className="object-cover object-top"
                  style={{ filter: "grayscale(100%)" }}
                  priority
                />
              </div>
            </motion.div>

            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-4 text-center lg:text-left"
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full text-sm font-bold"
                style={{
                  backgroundColor: "rgba(245,228,122,0.2)",
                  color: "#F5E47A",
                  fontFamily: "var(--font-montserrat-var), sans-serif",
                }}
              >
                Lic. en Ciencias de la Educación
              </span>
              <h1
                className="text-4xl sm:text-5xl font-bold text-white"
                style={{ fontFamily: "var(--font-montserrat-var), sans-serif" }}
              >
                Soy María Paz Escobar
              </h1>
              <p
                className="text-white/80 text-lg leading-relaxed max-w-xl"
                style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
              >
                Acompaño a estudiantes de todos los niveles a descubrir cómo aprenden mejor y a construir hábitos de estudio que realmente funcionan.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
            >
              Mi historia
            </h2>
            <div
              className="space-y-5 text-base leading-relaxed"
              style={{ color: "#555", fontFamily: "var(--font-lato-var), sans-serif" }}
            >
              <p>
                Desde chica me fascinó entender cómo aprende la gente. No todos procesamos la información de la misma forma, no todos necesitamos las mismas herramientas. Eso me llevó a estudiar Ciencias de la Educación, donde pude profundizar en los procesos cognitivos, las estrategias de aprendizaje y la psicología educativa.
              </p>
              <p>
                Durante mis años de formación trabajé con estudiantes de distintos niveles y noté siempre lo mismo: el problema no era la inteligencia ni el esfuerzo. Era que nadie les había enseñado <em>cómo</em> estudiar. Pasaban horas con los libros abiertos sin una estrategia clara, y terminaban frustrados.
              </p>
              <p>
                Decidí especializarme en eso: en enseñar a estudiar. Hoy acompaño a estudiantes de secundaria, terciario y universidad a desarrollar técnicas concretas, organizarse mejor y recuperar la confianza en sí mismos.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FORMACIÓN */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#EAF4EC" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
            >
              Formación
            </h2>
            <div className="space-y-4">
              {[
                {
                  titulo: "Licenciatura en Ciencias de la Educación",
                  sub: "Especialización en procesos de aprendizaje y estrategias cognitivas",
                },
                {
                  titulo: "Formación en Técnicas de Estudio y Metacognición",
                  sub: "Metodologías activas para el aprendizaje significativo",
                },
                {
                  titulo: "Capacitación en Educación Online",
                  sub: "Herramientas y estrategias para el aprendizaje a distancia",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl bg-white border-l-4"
                  style={{ borderLeftColor: "#2D6A3F" }}
                >
                  <div className="flex-1">
                    <p
                      className="font-bold text-sm"
                      style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
                    >
                      {item.titulo}
                    </p>
                    <p
                      className="text-sm mt-0.5"
                      style={{ color: "#777", fontFamily: "var(--font-lato-var), sans-serif" }}
                    >
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* POR QUÉ LO HACE */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
            >
              Por qué hago esto
            </h2>
            <div
              className="space-y-5 text-base leading-relaxed"
              style={{ color: "#555", fontFamily: "var(--font-lato-var), sans-serif" }}
            >
              <p>
                Ver a un estudiante pasar de la frustración a la confianza es lo que más me mueve. Cuando alguien me dice &ldquo;nunca había podido estudiar bien&rdquo; y después de nuestras sesiones empieza a rendir distinto, eso es lo que me confirma que estoy haciendo lo que tengo que hacer.
              </p>
              <p>
                No creo en los métodos únicos ni en las recetas mágicas. Creo en el trabajo personalizado, en escuchar a cada estudiante, en entender qué le funciona y qué no. Por eso no doy cursos masivos: trabajo de forma individual para poder hacer ese acompañamiento real.
              </p>
              <p>
                Mi meta es que, al terminar de trabajar conmigo, no me necesités más. Que hayas internalizado las estrategias y puedas aplicarlas solo. Eso es para mí el verdadero éxito.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F4F4F4" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2
              className="text-3xl font-bold"
              style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
            >
              Mis valores
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((valor, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 flex gap-4 shadow-sm">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#EAF4EC" }}
                  >
                    <valor.Icon size={22} color="#2D6A3F" />
                  </div>
                  <div>
                    <h3
                      className="font-bold mb-1"
                      style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
                    >
                      {valor.nombre}
                    </h3>
                    <p
                      className="text-sm text-gray-600 leading-relaxed"
                      style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
                    >
                      {valor.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#2D6A3F" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-montserrat-var), sans-serif" }}
            >
              ¿Querés empezar?
            </h2>
            <p
              className="text-white/80 text-lg mb-8"
              style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
            >
              La primera consulta es sin cargo. Hablamos, entendemos qué necesitás y vemos cómo puedo ayudarte.
            </p>
            <a
              href="https://wa.me/5492494351282"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-base transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "#F5E47A",
                color: "#2D6A3F",
                fontFamily: "var(--font-montserrat-var), sans-serif",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#2D6A3F">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hablame y empecemos →
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
