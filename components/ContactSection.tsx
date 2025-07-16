"use client"

import { motion } from 'framer-motion'
import { Badge } from './ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Mail, MessageSquare, Github, Linkedin, MapPin, Phone } from 'lucide-react'

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@yourwebdev.com",
      href: "mailto:hello@yourwebdev.com"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "+1 (555) 123-4567",
      href: "https://wa.me/15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Available Worldwide",
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yourwebdev",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourwebdev",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:hello@yourwebdev.com",
      label: "Email"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">Contact</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Get in touch and let's discuss how I can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project inquiry" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..." 
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-teal-600 rounded-lg flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{info.title}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-purple-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="w-10 h-10 bg-gradient-to-r from-purple-600 to-teal-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-r from-purple-50 to-teal-50 dark:from-purple-950/20 dark:to-teal-950/20 border-purple-200 dark:border-purple-800">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Quick Response Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond to all inquiries within 24 hours. For urgent projects, 
                  feel free to reach out via WhatsApp for faster communication.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}