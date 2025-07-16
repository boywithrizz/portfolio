"use client"

import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-teal-50 dark:from-purple-950/20 dark:to-teal-950/20 pt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-teal-600 text-white">
            <Sparkles className="h-4 w-4 mr-2" />
            Building with MERN &amp; AI
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
            Your WebDev
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Smart, Fast, and Scalable Websites Tailored for You
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white">
              Get Free Website Review
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg">
              View Portfolio
            </Button>
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground mb-6">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['TechCorp', 'StartupX', 'DigitalPro', 'WebFlow', 'CodeBase'].map((company) => (
              <div key={company} className="text-lg font-semibold">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}