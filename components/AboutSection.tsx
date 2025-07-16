"use client"

import { motion } from 'framer-motion'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'
import { Code, Zap, Users } from 'lucide-react'

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Expertise",
      description: "MERN Stack & Python mastery"
    },
    {
      icon: Zap,
      title: "AI-Powered Development",
      description: "Leveraging modern AI tools for efficiency"
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Tailored solutions for your business"
    }
  ]

  return (
    <section id="about" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">About Me</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Crafting Digital Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a skilled web developer specializing in the MERN stack, Python, and modern AI tools. 
            I build efficient, scalable websites that drive business growth and deliver exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}