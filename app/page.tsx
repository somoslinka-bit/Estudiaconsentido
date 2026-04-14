"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  ClipboardList,
  BookOpen,
  Users,
  Highlighter,
  Network,
  Clock,
  HelpCircle,
  Timer,
  Lightbulb,
  Table2,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react"
import PomodoroTimer from "@/components/PomodoroTimer"

// ------- Reutilizable: animación fade-in al hacer scroll -------
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
  const inView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ------- Datos -------
const tecnicasPreview = [
  { nombre: "Subrayado y Resumen", desc: "Identificá ideas clave y resumí con tus palabras.", icon: Highlighter, slug: "subrayado-y-resumen" },
  { nombre: "Mapa Conceptual", desc: "Conectá conceptos y visualizá el conocimiento.", icon: Network, slug: "mapa-conceptual" },
  { nombre: "Línea de Tiempo", desc: "Organizá eventos y procesos cronológicos.", icon: Clock, slug: "linea-de-tiempo" },
  { nombre: "Pregunta y Respuesta", desc: "Transformá el contenido en preguntas para repasar.", icon: HelpCircle, slug: "pregunta-y-respuesta" },
  { nombre: "Técnica Pomodoro", desc: "Bloques de 25 min de foco con pausas estratégicas.", icon: Timer, slug: "tecnica-pomodoro" },
  { nombre: "Método Feynman", desc: "Explicá como si enseñaras para entender de verdad.", icon: Lightbulb, slug: "metodo-feynman" },
  { nombre: "Cuadro Comparativo", desc: "Organizá y comparé conceptos en tabla.", icon: Table2, slug: "cuadro-comparativo" },
]

const testimonios = [
  { nombre: "Lucía M.", nivel: "Universitaria · Derecho", texto: "Antes perdía horas estudiando sin resultados. Con María Paz aprendí a usar mapas conceptuales y el método Feynman. Aprobé Constitucional con el mejor promedio de mi historia.", stars: 5 },
  { nombre: "Mateo G.", nivel: "Secundario · 5to año", texto: "No sabía cómo organizar el tiempo antes de los exámenes. La técnica Pomodoro me cambió la vida. Ahora estudio menos tiempo y rindo mucho mejor.", stars: 5 },
  { nombre: "Valentina R.", nivel: "Terciaria · Enfermería", texto: "Las sesiones son súper personalizadas. No es un curso genérico, es trabajo real con tus materias y tus dificultades específicas. Lo recomiendo a todos.", stars: 5 },
  { nombre: "Pablo S.", nivel: "Universitario · Ingeniería", texto: "El cuadro comparativo para Análisis Matemático me pareció increíble. Nunca había entendido tan bien la diferencia entre conceptos hasta que lo visualicé.", stars: 5 },
]

const faqs = [
  { pregunta: "¿Cuánto dura cada sesión?", respuesta: "Las sesiones tienen una duración de 60 minutos. En algunos casos, especialmente al principio, podemos extendernos un poco más para el diagnóstico inicial sin costo adicional." },
  { pregunta: "¿Trabajamos de forma presencial u online?", respuesta: "Trabajo en ambas modalidades. Las sesiones presenciales son en un espacio cómodo y tranquilo. Las sesiones online se realizan vía videollamada con materiales digitales compartidos en pantalla." },
  { pregunta: "¿A partir de qué edad trabajás?", respuesta: "Trabajo principalmente con estudiantes de secundaria, terciario y universidad, desde los 13 años en adelante. Para estudiantes de primaria mayores podemos evaluar el caso." },
  { pregunta: "¿Cuántas sesiones se necesitan para ver resultados?", respuesta: "Depende de cada estudiante, pero la mayoría nota mejoras concretas a partir de la tercera o cuarta sesión. Para un cambio de hábitos más profundo, recomiendo un proceso de 8 a 12 sesiones." },
  { pregunta: "¿Cómo agendo una consulta inicial?", respuesta: "Podés contactarme directamente por WhatsApp o a través del formulario de contacto en esta página. La primera consulta es sin cargo y dura aproximadamente 30 minutos." },
  { pregunta: "¿Las sesiones son individuales o grupales?", respuesta: "La mayoría de las sesiones son individuales para poder personalizar el trabajo. También ofrezco talleres grupales para instituciones educativas. Consultame para más información." },
]

// ------- SECCIÓN 1: HERO -------
function SectionHero() {
  return (
    <section
      className="min-h-screen flex items-center pt-20"
      style={{ backgroundColor: "#2D6A3F" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6">
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
                Aprendé a estudiar
              </span>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-montserrat-var), sans-serif" }}
              >
                Estudiar tiene sentido cuando{" "}
                <span style={{ color: "#F5E47A" }}>sabés cómo</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-lg text-white/80 leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
            >
              Técnicas de estudio probadas para estudiantes de primaria, secundaria y superior. Presencial y online.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/tecnicas"
                className="inline-flex items-center justify-center px-7 py-4 rounded-lg font-bold text-base transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  backgroundColor: "#F5E47A",
                  color: "#2D6A3F",
                  fontFamily: "var(--font-montserrat-var), sans-serif",
                }}
              >
                Conocé las técnicas
              </Link>
              <a
                href="https://wa.me/5492494351282"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-4 rounded-lg font-bold text-base transition-all duration-200 hover:bg-white/10 active:scale-95 border-2"
                style={{
                  borderColor: "rgba(255,255,255,0.6)",
                  color: "#fff",
                  fontFamily: "var(--font-montserrat-var), sans-serif",
                }}
              >
                Hablame por WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Logo hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm xl:max-w-md flex items-center justify-center">
              {/* Halo de profundidad detrás del logo */}
              <div
                className="absolute inset-0 rounded-full scale-75 blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(245,228,122,0.18) 0%, transparent 70%)" }}
              />
              {/* Anillo decorativo exterior */}
              <div
                className="absolute inset-4 rounded-full opacity-20 border"
                style={{ borderColor: "#F5E47A" }}
              />
              <Image
                src="/logo.png"
                alt="Logo Estudia con Sentido"
                width={420}
                height={420}
                priority
                className="relative z-10 w-full h-auto select-none"
                style={{ filter: "drop-shadow(0 8px 48px rgba(245,228,122,0.25)) drop-shadow(0 2px 12px rgba(0,0,0,0.3))" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ------- SECCIÓN 2: PROBLEMA/SOLUCIÓN -------
function SectionProblema() {
  const cards = [
    { problema: "Leés sin entender", solucion: "Te enseño a subrayar con criterio", Icono: BookOpen },
    { problema: "No sabés organizar la información", solucion: "Mapas conceptuales que funcionan", Icono: Network },
    { problema: "Se te va el tiempo", solucion: "Técnica Pomodoro + gestión real del tiempo", Icono: Timer },
  ]

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
          >
            ¿Estudiás mucho y no te va bien?
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
          >
            El problema no es que sos malo estudiando. Es que nadie te enseñó cómo hacerlo.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div
                className="rounded-2xl p-6 border-l-4 h-full"
                style={{ backgroundColor: "#EAF4EC", borderLeftColor: "#2D6A3F" }}
              >
                <div className="mb-4">
                  <card.Icono size={36} color="#2D6A3F" />
                </div>
                <p
                  className="text-base font-bold mb-3 line-through opacity-50"
                  style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
                >
                  {card.problema}
                </p>
                <p
                  className="text-lg font-bold"
                  style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
                >
                  {card.solucion}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ------- SECCIÓN 3: CÓMO TRABAJO -------
function SectionComoTrabajo() {
  const pasos = [
    { num: "01", titulo: "Diagnóstico inicial", desc: "Entendemos cómo estudiás hoy, qué funciona y qué no.", Icon: ClipboardList },
    { num: "02", titulo: "Plan personalizado", desc: "Técnicas seleccionadas según tu nivel, materia y estilo de aprendizaje.", Icon: BookOpen },
    { num: "03", titulo: "Seguimiento real", desc: "Acompañamiento continuo para consolidar los cambios y ajustar lo que sea necesario.", Icon: Users },
  ]

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#F4F4F4" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
          >
            ¿Cómo trabajo con vos?
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
          >
            Un proceso claro, personalizado y con resultados reales.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pasos.map((paso, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="flex flex-col items-center text-center md:items-start md:text-left p-6">
                <span
                  className="text-6xl font-black leading-none mb-4 select-none"
                  style={{
                    color: "#F5E47A",
                    fontFamily: "var(--font-montserrat-var), sans-serif",
                    WebkitTextStroke: "2px #2D6A3F",
                  }}
                >
                  {paso.num}
                </span>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#2D6A3F" }}
                >
                  <paso.Icon size={24} color="#F5E47A" />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
                >
                  {paso.titulo}
                </h3>
                <p
                  className="text-base text-gray-600 leading-relaxed"
                  style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
                >
                  {paso.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ------- SECCIÓN 4: TÉCNICAS PREVIEW -------
function SectionTecnicas() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#2D6A3F" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-montserrat-var), sans-serif" }}
          >
            Técnicas que vas a aprender
          </h2>
          <p
            className="text-lg text-white/70 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
          >
            Cada técnica está elegida por su efectividad comprobada y adaptada a tu nivel.
          </p>
          <p
            className="text-sm text-white/50 mt-3"
            style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
          >
            Acá hay algunas de las técnicas que trabajo. No están todas.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tecnicasPreview.map((tec, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <Link
                href={`/tecnicas/${tec.slug}`}
                className="group block rounded-2xl p-6 transition-all duration-200 h-full"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.15)"
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)"
                }}
              >
                <tec.icon size={32} color="#F5E47A" className="mb-4" />
                <h3
                  className="font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-montserrat-var), sans-serif" }}
                >
                  {tec.nombre}
                </h3>
                <p
                  className="text-sm text-white/70 mb-4 leading-relaxed"
                  style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
                >
                  {tec.desc}
                </p>
                <span
                  className="text-sm font-bold transition-colors group-hover:underline"
                  style={{ color: "#F5E47A", fontFamily: "var(--font-montserrat-var), sans-serif" }}
                >
                  Ver técnica →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="text-center mt-10">
          <Link
            href="/tecnicas"
            className="inline-flex items-center px-7 py-3.5 rounded-lg font-bold text-base transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: "#F5E47A",
              color: "#2D6A3F",
              fontFamily: "var(--font-montserrat-var), sans-serif",
            }}
          >
            Ver todas las técnicas
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

// ------- SECCIÓN 5: POMODORO -------
function SectionPomodoro() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#EAF4EC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
          >
            Probá la técnica Pomodoro ahora mismo
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
          >
            No hace falta esperar. Empezá una sesión de estudio con foco real ahora.
          </p>
        </FadeIn>
        <FadeIn>
          <PomodoroTimer />
        </FadeIn>
      </div>
    </section>
  )
}

// ------- SECCIÓN 6: NIVELES -------
function SectionNiveles() {
  const [activeTab, setActiveTab] = useState(0)

  const niveles = [
    {
      label: "Secundario",
      titulo: "Estudiantes de secundaria",
      incluye: [
        "Técnicas de lectura comprensiva",
        "Organización del tiempo de estudio",
        "Cómo manejar el estrés pre-evaluación",
        "Hábitos de estudio desde cero",
      ],
      idealPara: "Estudiantes de 1er a 5to año que quieren mejorar su rendimiento o aprovechar mejor el tiempo.",
    },
    {
      label: "Terciario",
      titulo: "Estudiantes terciarios",
      incluye: [
        "Método Feynman para contenidos técnicos",
        "Cuadros comparativos y mapas conceptuales",
        "Gestión del tiempo con carga horaria alta",
        "Estrategias para rendir finales y parciales",
      ],
      idealPara: "Estudiantes de carreras docentes, enfermería, diseño o técnicas que manejan mucho contenido.",
    },
    {
      label: "Universitario",
      titulo: "Estudiantes universitarios",
      incluye: [
        "Comprensión y análisis de textos académicos complejos",
        "Técnicas de síntesis y esquematización de contenido extenso",
        "Planificación estratégica de períodos de exámenes",
        "Trabajo con múltiples fuentes y bibliografía extensa",
        "Preparación para exposiciones orales y defensas",
        "Gestión del tiempo en carreras con alta carga académica",
        "Trabajo, vida y estudio en equilibrio",
        "Inteligencia artificial para el estudio universitario",
      ],
      idealPara: "Estudiantes universitarios en cualquier carrera que quieran rendir mejor sin estudiar el doble.",
    },
  ]

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
          >
            ¿En qué nivel estás?
          </h2>
          <p
            className="text-lg text-gray-600"
            style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
          >
            El trabajo se adapta completamente a tu realidad.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="flex rounded-xl overflow-hidden border mb-8" style={{ borderColor: "#2D6A3F" }}>
            {niveles.map((nivel, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className="flex-1 py-3 font-bold text-sm transition-all duration-200 cursor-pointer"
                style={{
                  fontFamily: "var(--font-montserrat-var), sans-serif",
                  backgroundColor: activeTab === i ? "#2D6A3F" : "transparent",
                  color: activeTab === i ? "#F5E47A" : "#2D6A3F",
                }}
              >
                {nivel.label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl p-8"
            style={{ backgroundColor: "#EAF4EC" }}
          >
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
            >
              {niveles[activeTab].titulo}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <p
                  className="text-sm font-bold uppercase tracking-wide mb-3"
                  style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
                >
                  Qué incluye
                </p>
                <ul className="space-y-2">
                  {niveles[activeTab].incluye.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm"
                      style={{ color: "#555", fontFamily: "var(--font-lato-var), sans-serif" }}
                    >
                      <span style={{ color: "#2D6A3F" }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p
                  className="text-sm font-bold uppercase tracking-wide mb-3"
                  style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
                >
                  Ideal para
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#555", fontFamily: "var(--font-lato-var), sans-serif" }}
                >
                  {niveles[activeTab].idealPara}
                </p>
              </div>
            </div>
            <Link
              href="/contacto"
              className="inline-flex items-center px-6 py-3 rounded-lg font-bold text-sm transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "#2D6A3F",
                color: "#F5E47A",
                fontFamily: "var(--font-montserrat-var), sans-serif",
              }}
            >
              Quiero empezar con {niveles[activeTab].label}
            </Link>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.2} className="text-center mt-6">
          <Link
            href="/niveles"
            className="text-sm font-bold"
            style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
          >
            Ver todos los niveles en detalle →
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

// ------- SECCIÓN 7: SOBRE -------
function SectionSobre() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#2D6A3F" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <FadeIn>
            <div
              className="w-48 h-48 rounded-full flex items-center justify-center flex-shrink-0 text-5xl font-black border-4"
              style={{
                backgroundColor: "#EAF4EC",
                borderColor: "#F5E47A",
                color: "#2D6A3F",
                fontFamily: "var(--font-montserrat-var), sans-serif",
              }}
            >
              MP
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-4 text-center lg:text-left">
              <h2
                className="text-3xl sm:text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-montserrat-var), sans-serif" }}
              >
                Soy María Paz Escobar
              </h2>
              <p
                className="text-white/80 text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
              >
                Soy Licenciada en Ciencias de la Educación y me especializo en acompañar a estudiantes a descubrir su propio método de aprendizaje. Creo que todos pueden estudiar mejor, solo necesitan las herramientas correctas y alguien que los acompañe.
              </p>
              <Link
                href="/sobre-mi"
                className="inline-flex items-center px-6 py-3 rounded-lg font-bold text-sm transition-all duration-200 hover:bg-white/10 border-2"
                style={{
                  borderColor: "rgba(255,255,255,0.6)",
                  color: "#fff",
                  fontFamily: "var(--font-montserrat-var), sans-serif",
                }}
              >
                Conocé más sobre mí →
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// ------- SECCIÓN 8: TESTIMONIOS -------
function SectionTestimonios() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonios.length) % testimonios.length)
  const next = () => setCurrent((c) => (c + 1) % testimonios.length)

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#F4F4F4" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
          >
            Lo que dicen los estudiantes
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl p-8 md:p-10"
                style={{ backgroundColor: "white" }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonios[current].stars }).map((_, i) => (
                    <Star key={i} size={20} fill="#F5E47A" color="#F5E47A" />
                  ))}
                </div>
                <p
                  className="text-lg leading-relaxed mb-6 italic"
                  style={{ color: "#444", fontFamily: "var(--font-lato-var), sans-serif" }}
                >
                  &ldquo;{testimonios[current].texto}&rdquo;
                </p>
                <div>
                  <p
                    className="font-bold"
                    style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
                  >
                    {testimonios[current].nombre}
                  </p>
                  <p
                    className="text-sm text-gray-500"
                    style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
                  >
                    {testimonios[current].nivel}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prev}
                className="p-2 rounded-full border-2 transition-colors hover:bg-white"
                style={{ borderColor: "#2D6A3F", color: "#2D6A3F" }}
                aria-label="Testimonio anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {testimonios.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="w-2.5 h-2.5 rounded-full transition-all duration-200"
                    style={{ backgroundColor: i === current ? "#2D6A3F" : "#D1D5DB" }}
                    aria-label={`Ir al testimonio ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-2 rounded-full border-2 transition-colors hover:bg-white"
                style={{ borderColor: "#2D6A3F", color: "#2D6A3F" }}
                aria-label="Siguiente testimonio"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// ------- SECCIÓN 9: FAQ -------
function SectionFaq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
          >
            Preguntas frecuentes
          </h2>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div className="rounded-xl border overflow-hidden" style={{ borderColor: "#E5E7EB" }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  style={{ backgroundColor: open === i ? "#EAF4EC" : "white" }}
                >
                  <span
                    className="font-bold text-base pr-4"
                    style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
                  >
                    {faq.pregunta}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border-2 font-bold text-lg leading-none"
                    style={{ borderColor: "#2D6A3F", color: "#2D6A3F" }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div
                        className="px-6 pb-5 text-base leading-relaxed"
                        style={{ color: "#555", fontFamily: "var(--font-lato-var), sans-serif" }}
                      >
                        {faq.respuesta}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ------- SECCIÓN 10: CTA FINAL -------
function SectionCta() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#F5E47A" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2
            className="text-3xl sm:text-5xl font-black mb-4"
            style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
          >
            Empezá a estudiar con sentido
          </h2>
          <p
            className="text-xl mb-8"
            style={{ color: "#2D6A3F", fontFamily: "var(--font-lato-var), sans-serif" }}
          >
            Primera consulta sin cargo. Sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "#2D6A3F",
                color: "white",
                fontFamily: "var(--font-montserrat-var), sans-serif",
              }}
            >
              Quiero empezar
            </Link>
            <a
              href="https://wa.me/5492494351282"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-base transition-all duration-200 hover:bg-black/5"
              style={{
                color: "#2D6A3F",
                fontFamily: "var(--font-montserrat-var), sans-serif",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#2D6A3F">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              O escribime por WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// ------- PAGE PRINCIPAL -------
export default function HomePage() {
  return (
    <>
      <SectionHero />
      <SectionProblema />
      <SectionComoTrabajo />
      <SectionTecnicas />
      <SectionPomodoro />
      <SectionNiveles />
      <SectionSobre />
      <SectionTestimonios />
      <SectionFaq />
      <SectionCta />
    </>
  )
}
