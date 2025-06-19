"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Globe,
  Award,
  GraduationCap,
  User,
  Send,
  Menu,
  X,
  ChevronDown,
  Star,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState({})

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errors: any = {}

    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid"
    if (!formData.message.trim()) errors.message = "Message is required"

    setFormErrors(errors)

    if (Object.keys(errors).length === 0) {
      // Handle form submission here
      console.log("Form submitted:", formData)
      alert("Thank you for your message! I'll get back to you soon.")
      setFormData({ name: "", email: "", message: "" })
    }
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-teal-600 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900">Kawal Preet Kaur</h1>
                <p className="text-xs text-slate-600">M.E. CSE</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                    activeSection === item.id ? "text-teal-600" : "text-slate-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <nav className="flex flex-col space-y-4">
                {[
                  { id: "hero", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "skills", label: "Skills" },
                  { id: "projects", label: "Projects" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-16 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-medium">
                    <Star className="w-4 h-4 mr-2" />
                    Engineering Student & Future Innovator
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent">
                      Kawal Preet Kaur
                    </span>
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    M.E. CSE student exploring technology, building innovative projects, and learning something new
                    every day. Passionate about creating solutions that make a difference.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-blue-900 hover:bg-blue-800 text-white"
                    onClick={() => scrollToSection("projects")}
                  >
                    View My Projects
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-300 text-slate-700 hover:bg-slate-50"
                    asChild
                  >
                    <Link href="/resume.pdf" target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Download Resume
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center space-x-6">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="https://github.com" target="_blank" className="text-slate-600 hover:text-blue-900">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="https://linkedin.com" target="_blank" className="text-slate-600 hover:text-blue-900">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="mailto:kawal@email.com" className="text-slate-600 hover:text-blue-900">
                      <Mail className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-900 to-teal-600 p-1">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      width={400}
                      height={400}
                      alt="Kawal Preet Kaur"
                      className="w-full h-full rounded-full object-cover bg-white"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center">
                    <Code className="h-8 w-8 text-teal-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
                <p className="text-lg text-slate-600">Get to know me better</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-6">
                  <div className="prose prose-lg text-slate-700">
                    <p>
                      I'm a passionate first-year Master of Engineering student in Computer Science and Engineering,
                      driven by curiosity and a love for technology. My journey in engineering began with a fascination
                      for how things work and a desire to create solutions that can make a positive impact.
                    </p>
                    <p>
                      Currently, I'm diving deep into various programming languages and technologies, from Python and
                      JavaScript to web development frameworks. I believe in learning by doing, which is why I'm
                      constantly working on projects that challenge me and help me grow as a developer.
                    </p>
                    <p>
                      My interests span across software development, artificial intelligence, and emerging technologies.
                      I'm particularly excited about the potential of technology to solve real-world problems and
                      improve people's lives. When I'm not coding, you can find me exploring new tech trends,
                      participating in hackathons, or collaborating with fellow students on innovative projects.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="border-slate-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center text-lg">
                        <GraduationCap className="h-5 w-5 mr-2 text-blue-900" />
                        Education
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-slate-900">M.E. Computer Science & Engineering</h4>
                        <p className="text-sm text-slate-600">University of Technology</p>
                        <p className="text-sm text-slate-500">2024 - 2026 (Expected)</p>
                      </div>
                      <div className="pt-2">
                        <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                          Current GPA: 3.9/4.0
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center text-lg">
                        <Award className="h-5 w-5 mr-2 text-blue-900" />
                        Achievements
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                          Dean's List - Fall 2024
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                          Merit Scholarship Recipient
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                          Hackathon Finalist
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Skills & Technologies</h2>
                <p className="text-lg text-slate-600">Technologies I work with and tools I use</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-3">
                    <Code className="h-8 w-8 mx-auto mb-2 text-blue-900" />
                    <CardTitle className="text-lg">Programming Languages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { name: "Python", level: 85 },
                        { name: "JavaScript", level: 80 },
                        { name: "Java", level: 75 },
                        { name: "C/C++", level: 70 },
                      ].map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-slate-700">{skill.name}</span>
                            <span className="text-slate-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-900 to-teal-600 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-3">
                    <Globe className="h-8 w-8 mx-auto mb-2 text-blue-900" />
                    <CardTitle className="text-lg">Web Technologies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["HTML/CSS", "React", "Node.js", "Next.js", "Tailwind CSS", "Express.js"].map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-teal-100 text-teal-800">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-3">
                    <Database className="h-8 w-8 mx-auto mb-2 text-blue-900" />
                    <CardTitle className="text-lg">Tools & Databases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "VS Code", "MongoDB", "MySQL", "Figma", "Arduino"].map((tool) => (
                        <Badge key={tool} variant="secondary" className="bg-blue-100 text-blue-800">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-3">
                    <User className="h-8 w-8 mx-auto mb-2 text-blue-900" />
                    <CardTitle className="text-lg">Soft Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Problem Solving",
                        "Teamwork",
                        "Communication",
                        "Leadership",
                        "Time Management",
                        "Adaptability",
                      ].map((skill) => (
                        <Badge key={skill} variant="outline" className="border-slate-300 text-slate-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
                <p className="text-lg text-slate-600">Some of my recent work and personal projects</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Smart Task Manager",
                    description:
                      "A full-stack web application for managing tasks with AI-powered prioritization and deadline tracking.",
                    image: "/placeholder.svg?height=200&width=300",
                    technologies: ["React", "Node.js", "MongoDB", "Express"],
                    github: "https://github.com",
                    demo: "https://demo.com",
                    featured: true,
                  },
                  {
                    title: "Weather Dashboard",
                    description: "Real-time weather application with location-based forecasts and interactive charts.",
                    image: "/placeholder.svg?height=200&width=300",
                    technologies: ["JavaScript", "API Integration", "Chart.js"],
                    github: "https://github.com",
                    demo: "https://demo.com",
                  },
                  {
                    title: "E-Commerce Platform",
                    description:
                      "Modern e-commerce website with shopping cart, payment integration, and admin dashboard.",
                    image: "/placeholder.svg?height=200&width=300",
                    technologies: ["Next.js", "Stripe", "Tailwind CSS"],
                    github: "https://github.com",
                    demo: "https://demo.com",
                  },
                  {
                    title: "Arduino IoT System",
                    description: "IoT-based home automation system with sensor monitoring and mobile app control.",
                    image: "/placeholder.svg?height=200&width=300",
                    technologies: ["Arduino", "C++", "IoT", "Mobile App"],
                    github: "https://github.com",
                  },
                  {
                    title: "Machine Learning Classifier",
                    description: "Image classification model using deep learning for recognizing handwritten digits.",
                    image: "/placeholder.svg?height=200&width=300",
                    technologies: ["Python", "TensorFlow", "Jupyter"],
                    github: "https://github.com",
                  },
                  {
                    title: "Portfolio Website",
                    description:
                      "This responsive portfolio website built with modern web technologies and best practices.",
                    image: "/placeholder.svg?height=200&width=300",
                    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
                    github: "https://github.com",
                  },
                ].map((project, index) => (
                  <Card
                    key={index}
                    className={`border-slate-200 hover:shadow-xl transition-all duration-300 group ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        width={300}
                        height={200}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {project.featured && (
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-teal-600 text-white">Featured</Badge>
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-slate-900 group-hover:text-blue-900 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-slate-100 text-slate-700 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" asChild className="flex-1">
                          <Link href={project.github} target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                        {project.demo && (
                          <Button size="sm" asChild className="flex-1 bg-blue-900 hover:bg-blue-800">
                            <Link href={project.demo} target="_blank">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
                <p className="text-lg text-slate-600">
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about
                  technology
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-6">Let's Connect</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Email</p>
                          <p className="text-slate-600">kawal.preet@email.com</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Phone</p>
                          <p className="text-slate-600">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Location</p>
                          <p className="text-slate-600">San Francisco, CA</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4">Follow Me</h4>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="lg" asChild>
                        <Link href="https://github.com" target="_blank" className="hover:bg-slate-900 hover:text-white">
                          <Github className="mr-2 h-5 w-5" />
                          GitHub
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <Link
                          href="https://linkedin.com"
                          target="_blank"
                          className="hover:bg-blue-600 hover:text-white"
                        >
                          <Linkedin className="mr-2 h-5 w-5" />
                          LinkedIn
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900">Send Me a Message</CardTitle>
                    <CardDescription>I'll get back to you as soon as possible</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-slate-700">
                          Name
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`mt-1 ${formErrors.name ? "border-red-500" : "border-slate-300"}`}
                          placeholder="Your full name"
                        />
                        {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-slate-700">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`mt-1 ${formErrors.email ? "border-red-500" : "border-slate-300"}`}
                          placeholder="your.email@example.com"
                        />
                        {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-slate-700">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className={`mt-1 ${formErrors.message ? "border-red-500" : "border-slate-300"}`}
                          placeholder="Tell me about your project or just say hello!"
                          rows={4}
                        />
                        {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                      </div>
                      <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold">Kawal Preet Kaur</h3>
                <p className="text-sm text-slate-400">M.E. CSE</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/resume.pdf" className="text-slate-400 hover:text-white transition-colors text-sm">
                Resume
              </Link>
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://github.com" target="_blank" className="text-slate-400 hover:text-white">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://linkedin.com" target="_blank" className="text-slate-400 hover:text-white">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Kawal Preet Kaur. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
