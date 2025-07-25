'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Flame, Zap, Shield, Target } from 'lucide-react'
import { useState } from 'react'

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: 'SecureLearnViz',
      description: 'Interactive data visualization platform for cybersecurity education. Helps students understand security concepts through visual learning and interactive demonstrations.',
      tech: ['React', 'D3.js', 'Node.js', 'Security APIs'],
      status: 'LIVE',
      github: 'https://github.com/SudhanshuRai356/SecureLearnViz',
      live: 'https://securelearnviz.pages.dev/',
      icon: Shield,
      intensity: 'HIGH'
    },
    {
      title: 'Traceless-Delivery',
      description: 'Anonymous delivery system architecture focused on privacy and operational security. Explores advanced cryptographic techniques for secure communications.',
      tech: ['Python', 'Cryptography', 'Blockchain', 'OPSEC'],
      status: 'RESEARCH',
      github: 'https://github.com/SudhanshuRai356/Traceless-Delivery',
      icon: Target,
      intensity: 'MAXIMUM'
    },
    {
      title: 'Playground-Virus',
      description: 'Educational malware research environment for safe analysis and learning. Controlled environment for understanding malware behavior and developing detection techniques.',
      tech: ['Assembly', 'C++', 'Reverse Engineering', 'Sandboxing'],
      status: 'EDUCATIONAL',
      github: 'https://github.com/SudhanshuRai356/Playground-Virus',
      icon: Flame,
      intensity: 'CRITICAL'
    }
  ]

  const statusColors = {
    'LIVE': 'text-green-400',
    'RESEARCH': 'text-blue-400',
    'EDUCATIONAL': 'text-orange-400'
  }

  const intensityColors = {
    'HIGH': 'border-orange-500',
    'MAXIMUM': 'border-red-500',
    'CRITICAL': 'border-red-600'
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: `
               linear-gradient(rgba(255,0,0,0.3) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,0,0,0.3) 1px, transparent 1px)
             `,
             backgroundSize: '50px 50px'
           }}></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-mono font-black text-white mb-6 uppercase tracking-wider">
            <span className="text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">[</span>
            MY 
            <span className="text-orange-400 drop-shadow-[0_0_15px_rgba(255,165,0,0.8)] animate-pulse"> PROJECTS</span>
            <span className="text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">]</span>
          </h2>
          <p className="text-xl font-mono text-gray-300 max-w-3xl mx-auto">
            Cybersecurity projects built during my learning journey
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-400 mx-auto mt-6 shadow-[0_0_10px_rgba(255,0,0,0.5)]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className={`bg-black/80 border-2 ${intensityColors[project.intensity as keyof typeof intensityColors]} p-6 h-full flex flex-col relative group shadow-[0_0_20px_rgba(255,0,0,0.3)] backdrop-blur-sm`}
            >
              <div className="absolute top-4 right-4">
                <div className={`w-3 h-3 rounded-full ${
                  project.status === 'LIVE' ? 'bg-green-400 animate-pulse' : 
                  project.status === 'RESEARCH' ? 'bg-blue-400' : 
                  'bg-orange-400 animate-pulse'
                }`}></div>
              </div>

              <div className="flex items-center mb-6">
                <project.icon className="w-10 h-10 text-orange-400 mr-4 group-hover:animate-pulse" />
                <div>
                  <h3 className="text-xl font-mono font-bold text-white uppercase tracking-wider group-hover:text-orange-400 transition-all duration-300">
                    [{project.title}]
                  </h3>
                  <div className={`text-sm font-mono font-bold uppercase tracking-wider ${statusColors[project.status as keyof typeof statusColors]}`}>
                    {project.status}
                  </div>
                </div>
              </div>

              <p className="text-gray-300 font-mono text-base leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-mono font-bold text-orange-400 mb-3 uppercase tracking-wider">
                  [TECH_STACK]
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 border border-gray-600 text-white font-mono text-xs font-semibold hover:border-red-500 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-auto">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-gray-800 hover:bg-red-600 border-2 border-gray-600 hover:border-red-500 text-white hover:text-white px-4 py-2 font-mono font-bold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  [SOURCE]
                </motion.a>
                
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-red-500 to-orange-400 hover:from-red-600 hover:to-orange-500 text-white px-4 py-2 font-mono font-bold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    [DEMO]
                  </motion.a>
                )}
              </div>

              {hoveredProject === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-orange-400/10 animate-pulse"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-orange-400 rounded-full animate-ping"></div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-black/80 border-2 border-red-600 p-8 max-w-2xl mx-auto shadow-[0_0_20px_rgba(255,0,0,0.3)]">
            <h3 className="text-2xl font-mono font-bold text-white mb-4 uppercase tracking-wider">
              [WANT_TO_COLLABORATE?]
            </h3>
            <p className="text-gray-300 font-mono text-lg mb-6">
              Always open to learning and collaborating on cybersecurity projects
            </p>
            <motion.a
              href="https://github.com/SudhanshuRai356"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255, 0, 0, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-500 to-orange-400 hover:from-red-600 hover:to-orange-500 text-white px-6 py-3 font-mono font-bold uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-3 border-2 border-transparent hover:border-white"
            >
              <Flame className="w-6 h-6 animate-pulse" />
              [VIEW_GITHUB]
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection