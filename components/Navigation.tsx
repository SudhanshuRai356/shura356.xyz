'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X, Github, Linkedin, Flame } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'BLOG', href: '/blog' },
    { name: 'GITHUB', href: 'https://github.com/SudhanshuRai356', external: true },
    { name: 'LINKEDIN', href: 'https://www.linkedin.com/in/sudhanshu-rai-5a3290335/', external: true }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b-4 border-red-600"
      style={{
        boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Retro flame logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4"
          >
            <Flame className="w-10 h-10 text-red-500 animate-pulse" />
            <div className="flex flex-col">
              <span className="text-white font-mono font-black text-2xl tracking-wider">shura356</span>
              <span className="text-orange-400 font-mono text-xs font-bold tracking-widest">BURN_IT_DOWN</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  whileHover={{ 
                    scale: 1.1,
                    textShadow: "0 0 10px #ff6600, 0 0 20px #ff0000"
                  }}
                  className="text-gray-300 hover:text-orange-400 font-mono font-bold text-sm transition-all duration-300 hover:bg-red-900/20 px-4 py-2 border-2 border-transparent hover:border-red-500 uppercase tracking-wider relative group"
                >
                  <span className="relative z-10">[{item.name}]</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-400 p-2 border-2 border-red-600 hover:bg-red-900/20 font-mono"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t-2 border-red-600 bg-black/90"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 10 }}
                  className="block px-4 py-3 text-gray-300 hover:text-orange-400 font-mono font-bold border-l-4 border-transparent hover:border-red-500 hover:bg-red-900/20 uppercase tracking-wider transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  [{item.name}]
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation
