"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Twitter, Send, MapPin, Phone } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate EmailJS integration
    // In production, replace with actual EmailJS implementation
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitting(false)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "faroukbouhaka@gmail.com",
      href: "mailto:faroukbouhaka@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+213 542 82 55 25",
      href: "tel:+213542825525",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tiaret, Algeria",
      href: null,
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/faroukbouhaka", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/faroukbouhaka", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/faroukbouhaka", label: "Twitter" },
  ]

  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Let's <span className="text-accent glow-text">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new
              opportunities and collaborations.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Column - Contact Info & Social */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Information Cards */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group relative p-4 rounded-xl bg-muted/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300"
                  >
                    {info.href ? (
                      <a href={info.href} className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                          <info.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                          <p className="font-medium text-foreground group-hover:text-accent transition-colors truncate">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-accent/10 text-accent">
                          <info.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                          <p className="font-medium text-foreground">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-4 rounded-xl bg-muted/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
                      <div className="absolute inset-0 rounded-xl bg-accent/0 group-hover:bg-accent/10 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Badge */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-3 h-3 bg-accent rounded-full animate-ping" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Available for Work</p>
                    <p className="text-sm text-muted-foreground">Open to new opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-3">
              <div className="relative p-8 rounded-2xl bg-muted/30 backdrop-blur-sm border border-border/50 hover:border-accent/30 transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-background/50 border-border/50 focus:border-accent transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-background/50 border-border/50 focus:border-accent transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or just say hi..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={8}
                      className="bg-background/50 border-border/50 focus:border-accent transition-colors resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-6 text-base font-semibold group relative overflow-hidden"
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
