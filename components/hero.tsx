"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { personalInfo } from "@/lib/data"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Building scalable enterprise solutions"
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [])
  // Use basePath from next.config for consistent paths
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="text-accent glow-text">{personalInfo.name}</span>
          </h1>
          <p className="text-2xl sm:text-3xl text-muted-foreground font-light">{personalInfo.title}</p>
          <div className="h-16 flex items-center justify-center">
            <p className="text-lg sm:text-xl text-foreground/80">
              {text}
              {showCursor && <span className="text-accent">|</span>}
            </p>
          </div>
          <div className="flex gap-4 justify-center mt-8">
            <a
                href={`${basePath}/CV_farouk_bouhaka.pdf`}
              download="CV_farouk_bouhaka"
              className="px-8 py-3 bg-accent text-background rounded-lg font-medium hover:bg-accent/90 transition-all hover:shadow-glow"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="h-8 w-8 text-accent" />
      </button>
    </section>
  )
}
