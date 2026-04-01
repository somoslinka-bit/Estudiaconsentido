"use client"

import { useState, useEffect, useRef, useCallback } from "react"

type Phase = "trabajo" | "descanso-corto" | "descanso-largo"

const PHASES: Record<Phase, { label: string; duration: number; color: string }> = {
  trabajo: { label: "Trabajo", duration: 25 * 60, color: "#2D6A3F" },
  "descanso-corto": { label: "Descanso corto", duration: 5 * 60, color: "#F5E47A" },
  "descanso-largo": { label: "Descanso largo", duration: 15 * 60, color: "#4A9B6F" },
}

const RADIUS = 80
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function PomodoroTimer() {
  const [phase, setPhase] = useState<Phase>("trabajo")
  const [timeLeft, setTimeLeft] = useState(PHASES["trabajo"].duration)
  const [running, setRunning] = useState(false)
  const [pomodorosCompleted, setPomodorosCompleted] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const totalTime = PHASES[phase].duration
  const progress = timeLeft / totalTime
  const strokeDashoffset = CIRCUMFERENCE * (1 - progress)

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const tick = useCallback(() => {
    setTimeLeft((prev) => {
      if (prev <= 1) {
        setRunning(false)
        if (phase === "trabajo") {
          setPomodorosCompleted((c) => c + 1)
        }
        return 0
      }
      return prev - 1
    })
  }, [phase])

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(tick, 1000)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [running, tick])

  const handlePhaseChange = (newPhase: Phase) => {
    setRunning(false)
    setPhase(newPhase)
    setTimeLeft(PHASES[newPhase].duration)
  }

  const handleReset = () => {
    setRunning(false)
    setTimeLeft(PHASES[phase].duration)
  }

  const phaseColor = PHASES[phase].color

  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
      {/* Timer */}
      <div className="flex flex-col items-center gap-6">
        {/* Phase selector */}
        <div
          className="flex rounded-xl overflow-hidden border"
          style={{ borderColor: "#2D6A3F" }}
        >
          {(Object.keys(PHASES) as Phase[]).map((p) => (
            <button
              key={p}
              onClick={() => handlePhaseChange(p)}
              className="px-3 py-2 text-xs font-bold transition-all duration-200"
              style={{
                fontFamily: "var(--font-montserrat-var), sans-serif",
                backgroundColor: phase === p ? "#2D6A3F" : "transparent",
                color: phase === p ? "#F5E47A" : "#2D6A3F",
              }}
            >
              {PHASES[p].label}
            </button>
          ))}
        </div>

        {/* SVG Circle */}
        <div className="relative flex items-center justify-center">
          <svg width="200" height="200" viewBox="0 0 200 200">
            {/* Background track */}
            <circle
              cx="100"
              cy="100"
              r={RADIUS}
              fill="none"
              stroke="#D1E8D7"
              strokeWidth="10"
            />
            {/* Progress arc */}
            <circle
              cx="100"
              cy="100"
              r={RADIUS}
              fill="none"
              stroke={phaseColor}
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={strokeDashoffset}
              transform="rotate(-90 100 100)"
              style={{ transition: running ? "stroke-dashoffset 1s linear" : "none" }}
            />
          </svg>
          {/* Time display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span
              className="text-4xl font-bold tabular-nums"
              style={{ fontFamily: "var(--font-montserrat-var), sans-serif", color: phaseColor }}
            >
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </span>
            <span
              className="text-xs mt-1 font-medium"
              style={{ color: "#6B7280", fontFamily: "var(--font-lato-var), sans-serif" }}
            >
              {PHASES[phase].label}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3">
          <button
            onClick={() => setRunning(!running)}
            className="px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              backgroundColor: "#2D6A3F",
              color: "#F5E47A",
              fontFamily: "var(--font-montserrat-var), sans-serif",
            }}
          >
            {running ? "Pausar" : "Iniciar"}
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 border hover:bg-gray-100 active:scale-95"
            style={{
              borderColor: "#2D6A3F",
              color: "#2D6A3F",
              fontFamily: "var(--font-montserrat-var), sans-serif",
            }}
          >
            Reiniciar
          </button>
        </div>

        {/* Pomodoro counter */}
        <div className="flex items-center gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i < pomodorosCompleted % 4 ? "#2D6A3F" : "#D1E8D7",
              }}
            />
          ))}
          <span
            className="text-sm ml-1"
            style={{ color: "#6B7280", fontFamily: "var(--font-lato-var), sans-serif" }}
          >
            {pomodorosCompleted} Pomodoros
          </span>
        </div>
      </div>

      {/* Explanation */}
      <div className="flex-1 space-y-4 max-w-md">
        <h3
          className="text-xl font-bold"
          style={{ color: "#2D6A3F", fontFamily: "var(--font-montserrat-var), sans-serif" }}
        >
          ¿Cómo funciona?
        </h3>
        <div className="space-y-3">
          {[
            { num: "1", text: "Elegí una tarea concreta y específica para hacer." },
            { num: "2", text: "Trabajá sin interrupciones durante 25 minutos completos." },
            { num: "3", text: "Tomá 5 minutos de descanso real al terminar cada bloque." },
            { num: "4", text: "Después de 4 Pomodoros, tomá un descanso largo de 15 minutos." },
          ].map((step) => (
            <div key={step.num} className="flex gap-3 items-start">
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold"
                style={{
                  backgroundColor: "#F5E47A",
                  color: "#2D6A3F",
                  fontFamily: "var(--font-montserrat-var), sans-serif",
                }}
              >
                {step.num}
              </span>
              <p
                className="text-sm leading-relaxed pt-0.5"
                style={{ color: "#555", fontFamily: "var(--font-lato-var), sans-serif" }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>
        <div
          className="p-4 rounded-xl border-l-4 text-sm leading-relaxed"
          style={{
            backgroundColor: "white",
            borderLeftColor: "#2D6A3F",
            color: "#555",
            fontFamily: "var(--font-lato-var), sans-serif",
          }}
        >
          <strong style={{ color: "#2D6A3F" }}>Pro tip:</strong> Durante el descanso, alejate de la pantalla. Tomá agua, estirá, mirá por la ventana. Tu cerebro necesita desconectarse para volver mejor.
        </div>
      </div>
    </div>
  )
}
