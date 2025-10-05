"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { experienceData, educationData } from "@/lib/data"

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience")
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={ref} className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Experience & <span className="text-accent">Education</span>
          </h2>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "experience"
                  ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                  : "bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "education"
                  ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                  : "bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              Education
            </button>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30" />

            {activeTab === "experience" ? (
              <div className="space-y-8">
                {experienceData.map((exp, index) => (
                  <div
                    key={index}
                    className={`relative pl-20 transition-all duration-500 ${
                      isVisible ? "animate-fade-in" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-accent border-4 border-background shadow-lg shadow-accent/50" />

                    <Card className="p-6 glow hover:scale-[1.02] transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-xl font-bold text-foreground">{exp.position}</h4>
                          <p className="text-accent font-semibold">{exp.company}</p>
                        </div>
                        <span className="text-sm text-muted-foreground font-medium bg-muted px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    className={`relative pl-20 transition-all duration-500 ${
                      isVisible ? "animate-fade-in" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-accent border-4 border-background shadow-lg shadow-accent/50" />

                    <Card className="p-6 glow hover:scale-[1.02] transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                          <p className="text-accent font-semibold">{edu.institution}</p>
                        </div>
                        <span className="text-sm text-muted-foreground font-medium bg-muted px-3 py-1 rounded-full">
                          {edu.period}
                        </span>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
