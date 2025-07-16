"use client"

import { motion } from 'framer-motion'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'
import { Progress } from './ui/progress'

export function SkillsSection() {
  const skills = [
    { name: 'React', level: 95, icon: '⚛️' },
    { name: 'Node.js', level: 90, icon: '🟢' },
    { name: 'MongoDB', level: 85, icon: '🍃' },
    { name: 'Express.js', level: 88, icon: '🚀' },
    { name: 'Python', level: 80, icon: '🐍' },
    { name: 'ChatGPT/AI', level: 85, icon: '🤖' },
    { name: 'Figma', level: 75, icon: '🎨' },
    { name: 'Vercel/Netlify', level: 90, icon: '🌐' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">Technical Skills</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technologies I Master
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern web technologies and AI tools to deliver cutting-edge solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <h3 className="font-semibold">{skill.name}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}