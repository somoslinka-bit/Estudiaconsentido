import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, GraduationCap, School } from "lucide-react"

export const metadata: Metadata = {
  title: "Niveles | Estudia con Sentido",
  description:
    "Trabajo con estudiantes de primaria, secundaria y nivel superior. Cada nivel tiene un enfoque personalizado según las necesidades de esa etapa educativa.",
  openGraph: {
    title: "Niveles | Estudia con Sentido",
    description:
      "Primaria, secundaria y nivel superior. Técnicas de estudio adaptadas a cada nivel educativo.",
  },
}

const niveles = [
  {
    id: "primario",
    icon: BookOpen,
    label: "Primario",
    titulo: "Estudiantes de primaria",
    intro: "La primaria es donde todo empieza. Construir buenos hábitos desde esta etapa hace una diferencia enorme en el rendimiento futuro. Se trabaja con técnicas simples, concretas y adaptadas a la edad.",
    queTrabajamos: [
      "Primeros hábitos de estudio y organización del espacio",
      "Técnicas básicas de lectura y comprensión de textos",
      "Cómo repasar y memorizar de forma efectiva",
      "Concentración y manejo del tiempo de estudio",
      "Cómo preparar evaluaciones sin bloquearse",
      "Técnica Pomodoro adaptada para chicos",
    ],
    idealPara: "Estudiantes de los últimos años de primaria (4to a 7mo grado) que quieren empezar a construir hábitos de estudio sólidos desde temprano, con acompañamiento personalizado.",
    frase: "\"Nunca había pensado que se podía enseñar a estudiar desde chico. El cambio fue increíble desde las primeras sesiones.\"",
  },
  {
    id: "secundario",
    icon: School,
    label: "Secundario",
    titulo: "Estudiantes de secundaria",
    intro: "La secundaria es la etapa donde se forman los hábitos de estudio que van a durar toda la vida académica. Es el momento ideal para empezar a trabajar con técnicas concretas.",
    queTrabajamos: [
      "Lectura comprensiva y subrayado con criterio",
      "Organización del tiempo de estudio semanal",
      "Cómo manejar el estrés pre-evaluación",
      "Construcción de hábitos de estudio desde cero",
      "Manejo de la ansiedad ante los exámenes",
      "Técnica Pomodoro para mejorar la concentración",
    ],
    idealPara: "Estudiantes de 1er a 5to año (o 6to en algunas provincias) que quieren mejorar su rendimiento, que están desaprobando o que simplemente quieren aprovechar mejor el tiempo que estudian.",
    frase: "\"Antes estudiaba horas sin resultados. Ahora estudio menos tiempo y entiendo mucho más.\"",
  },
  {
    id: "superior",
    icon: GraduationCap,
    label: "Superior",
    titulo: "Estudiantes de nivel superior",
    intro: "El nivel superior —universitario y terciario— exige autonomía, trabajo con bibliografía extensa y capacidad para sintetizar información compleja. El método de estudio puede hacer una diferencia enorme.",
    queTrabajamos: [
      "Comprensión y análisis de textos académicos complejos",
      "Técnicas de síntesis y esquematización de contenido extenso",
      "Planificación estratégica de períodos de exámenes",
      "Trabajo con múltiples fuentes y bibliografía extensa",
      "Preparación para exposiciones orales y defensas",
      "Gestión del tiempo en carreras con alta carga académica",
      "Trabajo, vida y estudio en equilibrio",
      "Inteligencia artificial para el estudio universitario",
    ],
    idealPara: "Estudiantes universitarios y terciarios de cualquier carrera —exactas, humanidades, ciencias de la salud, diseño, docencia— que quieren rendir mejor sin tener que estudiar el doble.",
    frase: "\"Llegué a la facultad creyendo que era malo estudiando. Resultó que simplemente no tenía las herramientas correctas.\"",
  },
]

export default function NivelesPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="pt-32 pb-20 lg:pt-40 lg:pb-28"
        style={{ backgroundColor: "#2D6A3F" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-montserrat-var), sans-serif" }}
          >
            Niveles
          </h1>
          <p
            className="text-white/80 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
          >
            Trabajo con estudiantes de todos los niveles educativos. El enfoque se adapta completamente a la realidad de cada etapa.
          </p>
        </div>
      </section>

      {/* NIVELES */}
      {niveles.map((nivel, i) => (
        <section
          key={nivel.id}
          id={nivel.id}
          className="py-20 lg:py-24"
          style={{ backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F4F4F4" }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "#EAF4EC" }}
                  >
                    <nivel.icon size={24} color="#2D6A3F" />
                  </div>
                  <span
                    className="text-sm font-bold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "#EAF4EC",
                      color: "#2D6A3F",
                      fontFamily: "var(--font-montserrat-var), sans-serif",
                    }}
                  >
                    {nivel.label}
                  </span>
                </div>

                <h2
                  className="text-3xl font-bold"
                  style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
                >
                  {nivel.titulo}
                </h2>

                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#555", fontFamily: "var(--font-lato-var), sans-serif" }}
                >
                  {nivel.intro}
                </p>

                <blockquote
                  className="border-l-4 pl-4 italic text-sm"
                  style={{
                    borderLeftColor: "#F5E47A",
                    color: "#777",
                    fontFamily: "var(--font-lato-var), sans-serif",
                  }}
                >
                  {nivel.frase}
                </blockquote>

                <Link
                  href="/contacto"
                  className="inline-flex items-center px-6 py-3 rounded-lg font-bold text-sm transition-all duration-200 hover:opacity-90"
                  style={{
                    backgroundColor: "#2D6A3F",
                    color: "#F5E47A",
                    fontFamily: "var(--font-montserrat-var), sans-serif",
                  }}
                >
                  Quiero empezar con {nivel.label}
                </Link>
              </div>

              {/* Lista */}
              <div
                className="rounded-2xl p-6 space-y-3"
                style={{ backgroundColor: "#EAF4EC" }}
              >
                <h3
                  className="text-sm font-bold uppercase tracking-wide mb-4"
                  style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
                >
                  Qué trabajamos
                </h3>
                {nivel.queTrabajamos.map((item, j) => (
                  <div key={j} className="flex gap-3 items-start">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5"
                      style={{ backgroundColor: "#2D6A3F", color: "#F5E47A" }}
                    >
                      ✓
                    </span>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#555", fontFamily: "var(--font-lato-var), sans-serif" }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
                <div
                  className="pt-4 border-t"
                  style={{ borderTopColor: "#D1E8D7" }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-wide mb-2"
                    style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
                  >
                    Ideal para
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#555", fontFamily: "var(--font-lato-var), sans-serif" }}
                  >
                    {nivel.idealPara}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#F5E47A" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-3"
            style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
          >
            ¿No sabés por dónde empezar?
          </h2>
          <p
            className="mb-6"
            style={{ color: "#2D6A3F", fontFamily: "var(--font-lato-var), sans-serif" }}
          >
            En la primera consulta sin cargo evaluamos juntos cuál es el mejor punto de partida para vos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-bold text-base transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "#2D6A3F",
                color: "white",
                fontFamily: "var(--font-montserrat-var), sans-serif",
              }}
            >
              Contactarme
            </Link>
            <a
              href="https://wa.me/5492494351282"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold text-base transition-all duration-200 hover:bg-black/5 border-2"
              style={{
                borderColor: "#2D6A3F",
                color: "#2D6A3F",
                fontFamily: "var(--font-montserrat-var), sans-serif",
              }}
            >
              Escribime por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
