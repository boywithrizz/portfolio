"use client"

import { motion } from 'framer-motion'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function PortfolioSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "eCommerce",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Restaurant Website",
      description: "Modern restaurant website with online ordering and reservation system",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      tags: ["React", "Express", "Menu API", "Booking"],
      category: "Restaurant Site",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "SaaS Landing Page",
      description: "High-converting landing page for a SaaS product with analytics integration",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      tags: ["React", "Tailwind", "Framer Motion", "Analytics"],
      category: "Landing Page",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "Creative portfolio website for a digital agency with stunning animations",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      tags: ["React", "GSAP", "Three.js", "CMS"],
      category: "Portfolio",
      demoUrl: "#",
      githubUrl: "#"
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">Portfolio</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Recent Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my latest work and see how I can help bring your vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-teal-600 text-white">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}