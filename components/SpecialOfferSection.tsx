"use client"

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Gift, ArrowRight } from 'lucide-react'

export function SpecialOfferSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-600 to-teal-600">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <div className="flex items-center justify-center mb-4">
            <Gift className="h-8 w-8 mr-3" />
            <span className="text-2xl font-bold">Special Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get a FREE Website Review &amp; AI Suggestions
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            I'll analyze your current website and provide actionable insights to improve performance, 
            SEO, and user experience - completely free!
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-purple-600 hover:bg-gray-100 font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://wa.me/15551234567?text=Hi! I would like to claim my free website review and AI suggestions.', '_blank')}
          >
            Claim Your Free Review
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}