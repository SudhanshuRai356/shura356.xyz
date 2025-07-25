'use client'

import { motion } from 'framer-motion'
import { Flame, ArrowRight, FileText } from 'lucide-react'
import Link from 'next/link'

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 relative overflow-hidden bg-gradient-to-br from-black via-red-950/20 to-black">
      {/* Retro scan lines effect */}
      <div className="absolute inset-0 opacity-20" 
           style={{
             backgroundImage: `repeating-linear-gradient(
               0deg,
               transparent,
               transparent 2px,
               rgba(255, 0, 0, 0.1) 2px,
               rgba(255, 0, 0, 0.1) 4px
             )`
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
            BLOG
            <span className="text-orange-400 drop-shadow-[0_0_15px_rgba(255,165,0,0.8)] animate-pulse"> POSTS</span>
            <span className="text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">]</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-400 mx-auto shadow-[0_0_10px_rgba(255,0,0,0.5)]"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-black/80 border-2 border-red-600 p-12 shadow-[0_0_20px_rgba(255,0,0,0.3)] backdrop-blur-sm text-center">
            <div className="flex items-center justify-center mb-8">
              <Flame className="w-12 h-12 text-red-500 mr-4 animate-pulse" />
              <h3 className="text-3xl font-mono font-bold text-white uppercase tracking-wider">
                <span className="text-orange-400">[</span>LATEST POST<span className="text-orange-400">]</span>
              </h3>
            </div>
            
            <div className="space-y-6 text-gray-300 font-mono text-lg leading-relaxed mb-8">
              <div className="bg-gray-900/50 border border-red-600 p-6 text-left">
                <h4 className="text-xl font-bold text-orange-400 mb-3">
                  "So finally from getting the domain to creating the site"
                </h4>
                <p className="text-sm text-gray-400 mb-3">July 25, 2025 • 3 min read</p>
                <p>
                  Creating this website was a fresh opportunity to learn how modern static websites are built, 
                  especially with the help of AI. A reflection on the journey and what I learned along the way.
                </p>
              </div>
              <p>
                Plus more posts coming soon: CTF writeups, malware analysis deep-dives, 
                and interesting discoveries from the field.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-900/50 border border-red-600 p-4">
                <FileText className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <div className="font-mono text-sm text-white uppercase">CTF Writeups</div>
              </div>
              <div className="bg-gray-900/50 border border-orange-600 p-4">
                <Flame className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <div className="font-mono text-sm text-white uppercase">Malware Analysis</div>
              </div>
              <div className="bg-gray-900/50 border border-yellow-600 p-4">
                <FileText className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="font-mono text-sm text-white uppercase">Security Research</div>
              </div>
            </div>

            <Link 
              href="/blog"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 font-bold text-lg font-mono uppercase tracking-wider border-2 border-red-400 relative overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Flame className="w-6 h-6" />
                VISIT BLOG
                <ArrowRight className="w-6 h-6" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection
