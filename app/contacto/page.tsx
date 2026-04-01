"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { CheckCircle } from "lucide-react"

type FormData = {
  nombre: string
  email: string
  telefono?: string
  nivel: string
  mensaje: string
}

const labelStyle = {
  color: "#2D6A3F",
  fontFamily: "var(--font-montserrat-var), sans-serif",
}
const errorStyle = {
  color: "#E74C3C",
  fontFamily: "var(--font-lato-var), sans-serif",
}

export default function ContactoPage() {
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (_data: FormData) => {
    setEnviando(true)
    await new Promise((r) => setTimeout(r, 1200))
    setEnviado(true)
    setEnviando(false)
    reset()
  }

  return (
    <>
      {/* HERO */}
      <section
        className="pt-32 pb-16 lg:pt-40 lg:pb-20"
        style={{ backgroundColor: "#2D6A3F" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-montserrat-var), sans-serif" }}
          >
            Contacto
          </h1>
          <p
            className="text-white/80 text-lg"
            style={{ fontFamily: "var(--font-lato-var), sans-serif" }}
          >
            Primera consulta sin cargo. Contame dónde estás parado y vemos cómo puedo ayudarte.
          </p>
        </div>
      </section>

      {/* FORM + ALTERNATIVA */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F4F4F4" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Formulario */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
                >
                  Enviame un mensaje
                </h2>

                {enviado ? (
                  <div className="flex flex-col items-center text-center py-8 gap-4">
                    <CheckCircle size={56} color="#2D6A3F" />
                    <h3
                      className="text-xl font-bold"
                      style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
                    >
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-base" style={{ color: "#555", fontFamily: "var(--font-lato-var), sans-serif" }}>
                      Te respondo a la brevedad, generalmente en menos de 24 horas.
                    </p>
                    <button
                      onClick={() => setEnviado(false)}
                      className="text-sm font-bold underline mt-2"
                      style={{ color: "#2D6A3F", fontFamily: "var(--font-lato-var), sans-serif" }}
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                    {/* Nombre */}
                    <div>
                      <label className="block text-sm font-bold mb-1" style={labelStyle}>
                        Nombre completo <span style={{ color: "#E74C3C" }}>*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Tu nombre"
                        className={`form-input${errors.nombre ? " error" : ""}`}
                        {...register("nombre", { required: "El nombre es obligatorio." })}
                      />
                      {errors.nombre && (
                        <p className="text-xs mt-1" style={errorStyle}>{errors.nombre.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-bold mb-1" style={labelStyle}>
                        Email <span style={{ color: "#E74C3C" }}>*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="tucorreo@ejemplo.com"
                        className={`form-input${errors.email ? " error" : ""}`}
                        {...register("email", {
                          required: "El email es obligatorio.",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Ingresá un email válido.",
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="text-xs mt-1" style={errorStyle}>{errors.email.message}</p>
                      )}
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label className="block text-sm font-bold mb-1" style={labelStyle}>
                        Teléfono <span className="font-normal text-gray-400">(opcional)</span>
                      </label>
                      <input
                        type="tel"
                        inputMode="numeric"
                        placeholder="Ej: 1134567890"
                        className="form-input"
                        {...register("telefono")}
                      />
                    </div>

                    {/* Nivel */}
                    <div>
                      <label className="block text-sm font-bold mb-1" style={labelStyle}>
                        Nivel educativo <span style={{ color: "#E74C3C" }}>*</span>
                      </label>
                      <select
                        className={`form-input${errors.nivel ? " error" : ""}`}
                        defaultValue=""
                        {...register("nivel", { required: "Seleccioná un nivel." })}
                      >
                        <option value="" disabled>Seleccioná tu nivel...</option>
                        <option value="primario">Primario</option>
                        <option value="secundario">Secundario</option>
                        <option value="terciario">Terciario</option>
                        <option value="universitario">Universitario</option>
                        <option value="padres">Soy padre/madre de un estudiante</option>
                      </select>
                      {errors.nivel && (
                        <p className="text-xs mt-1" style={errorStyle}>{errors.nivel.message}</p>
                      )}
                    </div>

                    {/* Mensaje */}
                    <div>
                      <label className="block text-sm font-bold mb-1" style={labelStyle}>
                        Mensaje <span style={{ color: "#E74C3C" }}>*</span>
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Contame un poco sobre tu situación: qué materia te cuesta, en qué nivel estás, qué querés mejorar..."
                        className={`form-input resize-none${errors.mensaje ? " error" : ""}`}
                        {...register("mensaje", {
                          required: "El mensaje es obligatorio.",
                          minLength: { value: 10, message: "El mensaje es muy corto." },
                        })}
                      />
                      {errors.mensaje && (
                        <p className="text-xs mt-1" style={errorStyle}>{errors.mensaje.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={enviando}
                      className="w-full py-4 rounded-lg font-bold text-base transition-all duration-200 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{
                        backgroundColor: "#2D6A3F",
                        color: "#F5E47A",
                        fontFamily: "var(--font-montserrat-var), sans-serif",
                      }}
                    >
                      {enviando ? "Enviando..." : "Enviar mensaje"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Alternativa WhatsApp + Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* WhatsApp */}
              <div className="rounded-2xl p-6" style={{ backgroundColor: "#25D366" }}>
                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-montserrat-var), sans-serif" }}
                >
                  ¿Preferís WhatsApp?
                </h3>
                <p className="text-white/90 text-sm mb-4" style={{ fontFamily: "var(--font-lato-var), sans-serif" }}>
                  Escribime directo y te respondo a la brevedad.
                </p>
                <a
                  href="https://wa.me/5492494351282?text=Hola%20Mar%C3%ADa%20Paz!%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20las%20sesiones."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-bold text-sm transition-all duration-200 hover:opacity-90"
                  style={{
                    backgroundColor: "white",
                    color: "#25D366",
                    fontFamily: "var(--font-montserrat-var), sans-serif",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Escribir por WhatsApp
                </a>
              </div>

              {/* Info */}
              <div className="rounded-2xl p-6" style={{ backgroundColor: "#EAF4EC" }}>
                <h3
                  className="text-lg font-bold mb-4"
                  style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
                >
                  Información de contacto
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Modalidad", valor: "Presencial y online" },
                    { label: "Primera consulta", valor: "Sin cargo · 30 minutos" },
                    { label: "Respuesta", valor: "En menos de 24 horas" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p
                        className="text-xs font-bold uppercase tracking-wide"
                        style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
                      >
                        {item.label}
                      </p>
                      <p className="text-sm" style={{ color: "#555", fontFamily: "var(--font-lato-var), sans-serif" }}>
                        {item.valor}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
