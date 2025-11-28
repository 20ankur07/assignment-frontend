"use client"

import { useEffect, useRef, useState } from "react"

export function InteractiveGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const cards = [
    { icon: "⚡", label: "Fast", value: "<50ms" },
    { icon: "🎯", label: "Precise", value: "99.9%" },
    { icon: "🚀", label: "Projects", value: "500+" },
    { icon: "✨", label: "Quality", value: "A+" },
  ]

  return (
    <div ref={containerRef} className="relative h-[500px] w-[500px]">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-foreground/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* 3D Grid Cards */}
      <div
        className="relative grid h-full w-full grid-cols-2 gap-4 p-8"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * -10}deg) rotateY(${mousePosition.x * 10}deg)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative"
            style={{
              transform: hoveredCard === index ? "translateZ(40px) scale(1.05)" : "translateZ(0px)",
              transition: "transform 0.3s ease-out",
            }}
          >
            {/* Glow effect */}
            <div
              className={`absolute -inset-2 rounded-2xl bg-foreground/20 blur-xl transition-opacity duration-500 ${
                hoveredCard === index ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Card */}
            <div className="relative h-full overflow-hidden rounded-2xl border border-foreground/20 bg-gradient-to-br from-foreground/10 to-foreground/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-foreground/40">
              {/* Animated gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-foreground/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 ${
                  hoveredCard === index ? "opacity-100" : ""
                }`}
              />

              <div className="relative z-10">
                <div className="mb-3 text-4xl transition-transform duration-300 group-hover:scale-110">{card.icon}</div>
                <div className="font-mono text-xs text-foreground/60">{card.label}</div>
                <div className="mt-1 font-sans text-3xl font-bold text-foreground">{card.value}</div>
              </div>

              {/* Corner accent */}
              <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-foreground/30 transition-all duration-300 group-hover:scale-150 group-hover:bg-foreground/60" />
            </div>
          </div>
        ))}
      </div>

      {/* Center glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/10 blur-3xl" />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  )
}
