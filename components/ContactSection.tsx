"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from './ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Mail, MessageSquare, Github, Linkedin, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Alert, AlertDescription } from './ui/alert'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://formsubmit.co/hello@yourwebdev.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New Portfolio Contact Form Submission',
          _captcha: 'false'
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
    <section id="contact" className="py-20 bg-muted/50 scroll-mt-20">
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
              <CardContent>
                {submitStatus === 'success' && (
                  <Alert className="mb-6 border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      Thank you! Your message has been sent successfully. I'll get back to you soon.
                    </AlertDescription>
                  </Alert>
                )}
                
                {submitStatus === 'error' && (
                  <Alert className="mb-6 border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Sorry, there was an error sending your message. Please try again or contact me directly.
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Your name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="your@email.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell me about your project..." 
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
                </form>
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