import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
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

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string; className?: string }>> = {
  Highlighter,
  Network,
  Clock,
  HelpCircle,
  Timer,
  Lightbulb,
  Table2,
}

export async function generateStaticParams() {
  return tecnicas.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const tecnica = tecnicas.find((t) => t.slug === slug)
  if (!tecnica) return {}

  return {
    title: `${tecnica.nombre} | Técnicas de Estudio`,
    description: tecnica.descripcion,
    keywords: tecnica.keywords,
    openGraph: {
      title: `${tecnica.nombre} | Estudia con Sentido`,
      description: tecnica.descripcion,
      type: "article",
    },
  }
}

export default async function TecnicaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const tecnica = tecnicas.find((t) => t.slug === slug)

  if (!tecnica) notFound()

  const Icon = iconMap[tecnica.icono]

  return (
    <>
      {/* HERO */}
      <section
        className="pt-32 pb-20 lg:pt-40 lg:pb-28"
        style={{ backgroundColor: "#2D6A3F" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/tecnicas"
            className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white mb-6 transition-colors"
            style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
          >
            ← Volver a técnicas
          </Link>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(245,228,122,0.15)" }}
            >
              {Icon && <Icon size={40} color="#F5E47A" />}
            </div>
            <div>
              <h1
                className="text-4xl sm:text-5xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-montserrat-var), sans-serif" }}
              >
                {tecnica.nombre}
              </h1>
              <p
                className="text-white/80 text-lg"
                style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
              >
                {tecnica.descripcion}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Para qué sirve */}
          <div>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
            >
              ¿Para qué sirve?
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#555", fontFamily: "var(--font-lato-var), sans-serif" }}
            >
              {tecnica.paraQueSirve}
            </p>
          </div>

          {/* Cómo se aplica */}
          <div>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
            >
              ¿Cómo se aplica?
            </h2>
            <ol className="space-y-4">
              {tecnica.comoSeAplica.map((paso, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      backgroundColor: "#F5E47A",
                      color: "#2D6A3F",
                      fontFamily: "var(--font-montserrat-var), sans-serif",
                    }}
                  >
                    {i + 1}
                  </span>
                  <p
                    className="text-base leading-relaxed pt-1"
                    style={{ color: "#555", fontFamily: "var(--font-lato-var), sans-serif" }}
                  >
                    {paso}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Ejemplo práctico */}
          <div
            className="rounded-2xl p-6 border-l-4"
            style={{ backgroundColor: "#EAF4EC", borderLeftColor: "#2D6A3F" }}
          >
            <h2
              className="text-xl font-bold mb-3"
              style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
            >
              Ejemplo práctico
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#555", fontFamily: "var(--font-lato-var), sans-serif" }}
            >
              {tecnica.ejemploPractico}
            </p>
          </div>

          {/* Nivel ideal */}
          <div>
            <h2
              className="text-xl font-bold mb-3"
              style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
            >
              ¿Para qué nivel es ideal?
            </h2>
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-bold"
              style={{
                backgroundColor: "#EAF4EC",
                color: "#2D6A3F",
                fontFamily: "var(--font-montserrat-var), sans-serif",
              }}
            >
              {tecnica.nivelIdeal}
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#2D6A3F" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-montserrat-var), sans-serif" }}
          >
            ¿Querés aprender esta técnica?
          </h2>
          <p
            className="text-white/80 mb-6"
            style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
          >
            En las sesiones la aplicamos directamente con tus materias y tu contenido real.
          </p>
          <a
            href={`https://wa.me/5492494351282?text=Hola%20María%20Paz!%20Me%20interesa%20aprender%20la%20técnica%20de%20${encodeURIComponent(tecnica.nombre)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-base transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: "#F5E47A",
              color: "#2D6A3F",
              fontFamily: "var(--font-montserrat-var), sans-serif",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#2D6A3F">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Quiero aprender esta técnica
          </a>
        </div>
      </section>

      {/* Más técnicas */}
      <section className="py-16" style={{ backgroundColor: "#F4F4F4" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl font-bold mb-6 text-center"
            style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
          >
            Otras técnicas que pueden interesarte
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tecnicas
              .filter((t) => t.slug !== tecnica.slug)
              .slice(0, 3)
              .map((t) => {
                const TIcon = iconMap[t.icono]
                return (
                  <Link
                    key={t.slug}
                    href={`/tecnicas/${t.slug}`}
                    className="bg-white rounded-xl p-4 flex gap-3 hover:shadow-md transition-shadow border border-transparent hover:border-green-100"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#EAF4EC" }}
                    >
                      {TIcon && <TIcon size={20} color="#2D6A3F" />}
                    </div>
                    <div>
                      <p
                        className="font-bold text-sm"
                        style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
                      >
                        {t.nombre}
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-0.5"
                        style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
                      >
                        {t.nivelIdeal}
                      </p>
                    </div>
                  </Link>
                )
              })}
          </div>
        </div>
      </section>
    </>
  )
}
