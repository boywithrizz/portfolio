"use client"

import { motion } from 'framer-motion'
import { Badge } from './ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Clock, Zap, User, TrendingUp, ArrowRight } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      icon: Clock,
      title: "One-page Website",
      subtitle: "Ready in 2 Days",
      description: "Fast, professional landing pages that convert visitors into customers. Perfect for small businesses and startups.",
      features: ["Mobile responsive", "SEO optimized", "Contact forms", "Fast loading"],
      price: "Starting at $299"
    },
    {
      icon: Zap,
      title: "AI-Powered Business Website",
      subtitle: "Smart & Efficient",
      description: "Leverage AI for content creation, user experience optimization, and automated functionality.",
      features: ["AI-generated content", "Smart chatbots", "Personalization", "Analytics integration"],
      price: "Starting at $699"
    },
    {
      icon: User,
      title: "Custom Portfolio/Resume Site",
      subtitle: "Stand Out Online",
      description: "Professional portfolio websites that showcase your work and help you land your dream job or clients.",
      features: ["Custom design", "Project showcase", "Blog integration", "Social links"],
      price: "Starting at $199"
    },
    {
      icon: TrendingUp,
      title: "Speed & SEO Optimization",
      subtitle: "Boost Performance",
      description: "Optimize your existing website for speed, search engines, and better user experience.",
      features: ["Page speed optimization", "SEO audit & fixes", "Core Web Vitals", "Mobile optimization"],
      price: "Starting at $149"
    }
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What I Can Do For You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-sm text-purple-600 font-medium">{service.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-teal-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-lg font-semibold text-purple-600">{service.price}</span>
                    <Button variant="outline" size="sm">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
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