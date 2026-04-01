import type { Metadata } from "next"
import { Montserrat, Lato } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat-var",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato-var",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://estudiaconsentido.com.ar"),
  title: {
    default: "Estudia con Sentido | Técnicas de Estudio para Estudiantes",
    template: "%s | Estudia con Sentido",
  },
  description:
    "Técnicas de estudio probadas para estudiantes de secundaria, terciario y universidad. Sesiones personalizadas presenciales y online con Lic. María Paz Escobar.",
  keywords: [
    "técnicas de estudio",
    "cómo estudiar mejor",
    "método de estudio",
    "aprender a estudiar",
    "apoyo escolar",
    "tutorías",
    "María Paz Escobar",
  ],
  authors: [{ name: "Lic. María Paz Escobar" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://estudiaconsentido.com.ar",
    siteName: "Estudia con Sentido",
    title: "Estudia con Sentido | Técnicas de Estudio para Estudiantes",
    description:
      "Técnicas de estudio probadas para estudiantes de secundaria, terciario y universidad. Presencial y online.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Estudia con Sentido",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudia con Sentido | Técnicas de Estudio",
    description:
      "Técnicas de estudio probadas para estudiantes de secundaria, terciario y universidad.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://estudiaconsentido.com.ar",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${lato.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
