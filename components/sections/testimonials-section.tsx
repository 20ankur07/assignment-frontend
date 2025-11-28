"use client"

import { useReveal } from "@/hooks/use-reveal"

export function TestimonialsSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-32 md:px-12 md:pt-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            What Clients Say
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Customer testimonials</p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {[
            {
              number: "01",
              quote: "FlowStudio transformed our digital presence with stunning visuals",
              name: "Raj Shamani",
              company: "TechCorp Inc.",
              direction: "left",
            },
            {
              number: "02",
              quote: "The attention to detail and performance optimization is unmatched",
              name: "Nandan Nilekani",
              company: "AceCloud Services",
              direction: "right",
            },
            {
              number: "03",
              quote: "Working with FlowStudio was a game-changer for our brand",
              name: "Ankit Patel",
              company: "Design Studio Co.",
              direction: "left",
            },
          ].map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  testimonial,
  index,
  isVisible,
}: {
  testimonial: { number: string; quote: string; name: string; company: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return testimonial.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-6 transition-all duration-700 hover:border-foreground/20 md:py-8 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "85%" : "90%",
      }}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
          {testimonial.number}
        </span>
        <div>
          <h3 className="mb-1 font-sans text-2xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
            "{testimonial.quote}"
          </h3>
          <p className="font-mono text-xs text-foreground/50 md:text-sm">
            {testimonial.name}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  )
}
