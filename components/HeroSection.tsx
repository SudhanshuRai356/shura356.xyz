'use client'

import { motion } from 'framer-motion'
import { Flame, Target } from 'lucide-react'
import { useState, useEffect } from 'react'

const HeroSection = () => {
  const [burnProgress, setBurnProgress] = useState(0)
  const [glitchText, setGlitchText] = useState('CYBERSECURITY STUDENT')
  
  const glitchVariations = [
    'CYBERSECURITY STUDENT',
    'CTF COMPETITOR',
    'MALWARE ANALYST',
    'CRYPTO ENTHUSIAST',
    'PENETRATION TESTER'
  ]

  useEffect(() => {
    // Smooth burn progress animation
    const progressTimer = setInterval(() => {
      setBurnProgress(prev => {
        const newProgress = (prev + 1) % 101
        return newProgress
      })
    }, 200)

    // Smoother glitch text effect
    const glitchTimer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * glitchVariations.length)
      setGlitchText(glitchVariations[randomIndex])
      
      setTimeout(() => {
        setGlitchText('CYBERSECURITY STUDENT')
      }, 300)
    }, 4000)

    return () => {
      clearInterval(progressTimer)
      clearInterval(glitchTimer)
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-red-950 to-black pt-16">
      {/* Retro grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Smooth floating embers */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-to-t from-red-500 to-orange-400 rounded-full"
            style={{
              left: `${20 + i * 12}%`,
              top: `${70 + (i % 3) * 8}%`,
            }}
            animate={{
              y: [-10, -80, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 6 + i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2,
            }}
          />
        ))}
        
        {/* Subtle ambient glow orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute w-8 h-8 bg-gradient-radial from-orange-400/15 to-transparent rounded-full blur-md"
            style={{
              left: `${25 + i * 30}%`,
              top: `${45 + i * 10}%`,
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
        {/* Retro title with neon glow */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="relative mb-6">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 font-mono tracking-wider">
              SUDHANSHU RAI
            </h1>
            <motion.div 
              className="absolute inset-0 text-6xl md:text-8xl font-black text-red-500 font-mono tracking-wider opacity-60 blur-sm"
              animate={{ 
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              SUDHANSHU RAI
            </motion.div>
            <div className="text-2xl md:text-3xl font-bold text-orange-400 font-mono tracking-wider mt-2">
              [ AKA: SHURA356 ]
            </div>
          </div>
          
          <motion.div 
            className="text-3xl md:text-5xl font-bold text-orange-400 font-mono tracking-wide"
            animate={{ 
              textShadow: [
                "0 0 8px #ff6600, 0 0 16px #ff4400, 0 0 24px #ff2200",
                "0 0 12px #ff4400, 0 0 20px #ff6600, 0 0 28px #ff6600",
                "0 0 8px #ff6600, 0 0 16px #ff4400, 0 0 24px #ff2200"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {glitchText}
          </motion.div>
        </motion.div>

        {/* Retro description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed font-mono mb-6">
            <span className="text-orange-400">2nd Year</span> B.Tech CSE Student specializing in{' '}
            <motion.span 
              className="text-red-400 font-black"
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(255,100,100,0.8)",
                  "0 0 20px rgba(255,150,150,0.9)",
                  "0 0 10px rgba(255,100,100,0.8)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              CYBERSECURITY
            </motion.span>
          </p>
          
          <p className="text-lg text-gray-300 font-mono">
            CTF Competitor • Malware Enthusiast • Crypto Explorer • Security Researcher
          </p>
          
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-mono">
            <span className="bg-red-900/30 border border-red-500 px-3 py-1 text-red-400">
              HTB Top 6%
            </span>
            <span className="bg-orange-900/30 border border-orange-500 px-3 py-1 text-orange-400">
              ApoorvCTF 26th
            </span>
            <span className="bg-green-900/30 border border-green-500 px-3 py-1 text-green-400">
              CliffGuard Intern
            </span>
          </div>
        </motion.div>

        {/* Retro action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 0 25px rgba(255, 100, 0, 0.6)"
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 font-bold text-lg font-mono uppercase tracking-wider border-2 border-red-400 relative overflow-hidden group"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Flame className="w-6 h-6" />
              IGNITE PROJECTS
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
          </motion.button>
          
          <motion.button
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 0 25px rgba(255, 165, 0, 0.6)"
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-gradient-to-r from-orange-600 to-yellow-500 text-black px-8 py-4 font-bold text-lg font-mono uppercase tracking-wider border-2 border-orange-400 relative overflow-hidden group"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Target className="w-6 h-6" />
              VIEW DESTRUCTION
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
          </motion.button>
        </motion.div>

        {/* Retro stats display */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex justify-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="bg-black border-2 border-gray-700 p-8 text-center relative overflow-hidden group hover:border-red-500 transition-all duration-500 ease-out"
            style={{
              boxShadow: '0 0 15px rgba(0, 0, 0, 0.8), inset 0 0 15px rgba(255, 0, 0, 0.1)'
            }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <Flame className="w-12 h-12 mx-auto mb-4 text-red-500" />
            </motion.div>
            <motion.div 
              className="text-4xl font-bold font-mono mb-3 text-red-500"
              animate={{ 
                textShadow: [
                  "0 0 10px #ff0000",
                  "0 0 20px #ff4400",
                  "0 0 10px #ff0000"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ∞
            </motion.div>
            <div className="text-sm font-mono font-bold text-gray-400 uppercase tracking-wider">
              FIRES STARTED
            </div>
            
            {/* Smoother glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
