'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import BlogSection from '@/components/BlogSection'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="relative min-h-screen bg-burn-black overflow-hidden">
      {/* Background flame effects */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 flame-particles opacity-30"></div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10"
      >
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
        <Footer />
      </motion.div>
      
      {/* Scroll to top */}
      <ScrollToTop />
    </main>
  )
}
