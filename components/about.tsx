"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { skillsData, personalInfo, languagesData } from "@/lib/data"
import Image from "next/image"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  const categoryOrder = ["Frameworks", "Languages", "Databases", "DevOps", "Management Tools"]

  const groupedSkills = skillsData.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, typeof skillsData>,
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            About <span className="text-accent">Me</span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="relative w-64 h-64 flex-shrink-0">
              <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-2xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-accent/30 glow">
                <Image src="/portfolio/professional-developer-portrait.png"
                  alt="Profile"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{personalInfo.bio}</p>
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">Languages</h4>
                <div className="flex flex-wrap gap-3">
                  {languagesData.map((lang) => (
                    <div key={lang.name} className="px-4 py-2 bg-surface rounded-lg border border-accent/20">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-muted-foreground text-sm ml-2">({lang.level})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Skills & Technologies</h3>
            <div className="space-y-8">
              {categoryOrder.map((category) => {
                const skills = groupedSkills[category]
                if (!skills) return null

                return (
                  <div key={category}>
                    <h4 className="text-xl font-bold text-accent mb-4 border-b border-accent/30 pb-2">
                      {category}
                      {category === "DevOps" && (
                        <span className="text-sm font-normal text-muted-foreground ml-2">(Enthusiast - Learning)</span>
                      )}
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {skills.map((skill, index) => (
                        <Card
                          key={skill.name}
                          className={`p-4 text-center glow transition-all duration-500 hover:scale-105 hover:border-accent/50 ${
                            isVisible ? "animate-fade-in" : "opacity-0"
                          }`}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <p className="font-semibold text-foreground">{skill.name}</p>
                        </Card>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
