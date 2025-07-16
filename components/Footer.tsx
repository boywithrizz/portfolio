"use client"

import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Your WebDev
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Creating modern, efficient, and scalable web solutions that drive business growth. 
              Specialized in MERN stack development with AI integration.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourwebdev"
                className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/yourwebdev"
                className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@yourwebdev.com"
                className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-purple-600 transition-colors">About</button></li>
              <li><button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-purple-600 transition-colors">Skills</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-purple-600 transition-colors">Services</button></li>
              <li><button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-purple-600 transition-colors">Portfolio</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-purple-600 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Web Development</li>
              <li>AI Integration</li>
              <li>SEO Optimization</li>
              <li>Performance Tuning</li>
              <li>Maintenance</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Your WebDev. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center mt-4 md:mt-0">
            Crafting websites with <Heart className="h-4 w-4 text-red-500 mx-1" /> using MERN &amp; AI
          </p>
        </div>
      </div>
    </footer>
  )
}