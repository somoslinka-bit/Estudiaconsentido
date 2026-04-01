import type { Metadata } from "next"
import Link from "next/link"
import { Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Recursos y tips de estudio | Estudia con Sentido",
  description:
    "Artículos, guías y tips prácticos sobre técnicas de estudio, organización del tiempo y aprendizaje efectivo para estudiantes de todos los niveles.",
  openGraph: {
    title: "Recursos y tips de estudio | Estudia con Sentido",
    description:
      "Artículos y guías sobre técnicas de estudio, organización del tiempo y aprendizaje efectivo.",
  },
}

const posts = [
  {
    slug: "como-estudiar-para-un-examen-oral",
    titulo: "Cómo estudiar para un examen oral: 5 estrategias que funcionan",
    extracto: "Los exámenes orales tienen una lógica diferente a los escritos. Acá te explico cómo prepararte para hablar en voz alta sobre lo que estudiaste y no bloquearte en el momento.",
    tiempo: "6 min",
    categoria: "Exámenes",
    fecha: "15 mar 2026",
  },
  {
    slug: "organizacion-del-tiempo-estudiantes",
    titulo: "Cómo organizar tu tiempo si tenés muchas materias",
    extracto: "Cuando tenés 5 o 6 materias simultáneas, la organización es clave. Te muestro cómo hacer un plan de estudio semanal real que podés mantener.",
    tiempo: "8 min",
    categoria: "Organización",
    fecha: "8 mar 2026",
  },
  {
    slug: "por-que-no-te-acordas-de-lo-que-estudias",
    titulo: "¿Por qué no te acordás de lo que estudiás? La ciencia del olvido",
    extracto: "Estudiás, estudiás, y cuando llega el examen no te acordás de nada. Esto tiene una explicación científica, y también tiene solución.",
    tiempo: "7 min",
    categoria: "Aprendizaje",
    fecha: "28 feb 2026",
  },
  {
    slug: "ansiedad-ante-los-examenes",
    titulo: "Cómo manejar la ansiedad antes de un examen",
    extracto: "Un poco de nervios es normal y hasta necesario. Pero cuando la ansiedad te bloquea, hay estrategias concretas para manejarla antes y durante el examen.",
    tiempo: "5 min",
    categoria: "Bienestar",
    fecha: "20 feb 2026",
  },
  {
    slug: "subrayado-efectivo",
    titulo: "Por qué tu subrayado no te sirve (y cómo hacerlo bien)",
    extracto: "Subrayar todo no sirve. Subrayar al azar tampoco. Te explico el criterio para identificar qué es realmente importante en un texto.",
    tiempo: "5 min",
    categoria: "Técnicas",
    fecha: "10 feb 2026",
  },
  {
    slug: "habitos-de-estudio-desde-cero",
    titulo: "Cómo construir hábitos de estudio si nunca tuviste ninguno",
    extracto: "Empezar a estudiar de forma organizada cuando nunca lo hiciste puede parecer imposible. Pero los hábitos se construyen de a poco, con pasos pequeños y concretos.",
    tiempo: "9 min",
    categoria: "Hábitos",
    fecha: "1 feb 2026",
  },
]

const categorias = ["Todos", "Técnicas", "Organización", "Exámenes", "Hábitos", "Aprendizaje", "Bienestar"]

const colorPorCategoria: Record<string, string> = {
  Técnicas: "#2D6A3F",
  Organización: "#4A7C59",
  Exámenes: "#E67E22",
  Hábitos: "#8E44AD",
  Aprendizaje: "#2980B9",
  Bienestar: "#27AE60",
}

export default function RecursosPage() {
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
            Recursos y tips de estudio
          </h1>
          <p
            className="text-white/80 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
          >
            Artículos, guías y consejos prácticos para que estudies mejor. Sin relleno, solo lo que funciona.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F4F4F4" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categorías */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categorias.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 hover:opacity-80"
                style={{
                  backgroundColor: cat === "Todos" ? "#2D6A3F" : "#E5E7EB",
                  color: cat === "Todos" ? "white" : "#555",
                  fontFamily: "var(--font-lato-var), sans-serif",
                }}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                {/* Card color header */}
                <div
                  className="h-2"
                  style={{
                    backgroundColor: colorPorCategoria[post.categoria] || "#2D6A3F",
                  }}
                />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="flex items-center gap-1 text-xs px-2 py-1 rounded-full font-medium"
                      style={{
                        backgroundColor: "#EAF4EC",
                        color: "#2D6A3F",
                        fontFamily: "var(--font-lato-var), sans-serif",
                      }}
                    >
                      <Tag size={10} /> {post.categoria}
                    </span>
                    <span
                      className="flex items-center gap-1 text-xs text-gray-400"
                      style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
                    >
                      <Clock size={10} /> {post.tiempo} de lectura
                    </span>
                  </div>

                  <h2
                    className="text-lg font-bold mb-2 leading-snug"
                    style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
                  >
                    {post.titulo}
                  </h2>

                  <p
                    className="text-sm text-gray-600 leading-relaxed flex-1 mb-4"
                    style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
                  >
                    {post.extracto}
                  </p>

                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs text-gray-400"
                      style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
                    >
                      {post.fecha}
                    </span>
                    <span
                      className="text-sm font-bold"
                      style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
                    >
                      Leer más →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#F5E47A" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-3"
            style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
          >
            ¿Querés llevarlo a la práctica?
          </h2>
          <p
            className="mb-6"
            style={{ color: "#2D6A3F", fontFamily: "var(--font-lato-var), sans-serif" }}
          >
            Leer sobre técnicas es el primer paso. Aplicarlas con acompañamiento personalizado es donde está el cambio real.
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
            Empezar con una sesión
          </Link>
        </div>
      </section>
    </>
  )
}
