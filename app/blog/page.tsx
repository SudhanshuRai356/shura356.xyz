'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Flame } from 'lucide-react'
import Link from 'next/link'

const BlogPage = () => {
  const blogPosts: Array<{
    slug: string
    title: string
    date: string
    readTime: string
    excerpt: string
  }> = [
    {
      slug: 'building-this-portfolio',
      title: 'So finally from getting the domain to creating the site',
      date: 'July 25, 2025',
      readTime: '3 min read',
      excerpt: 'Creating this website was a fresh opportunity to learn how modern static websites are built, especially with the help of AI. A reflection on the journey of building this portfolio and what I learned along the way.'
    }
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
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

      {/* Retro grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-red-400 transition-colors duration-300 font-mono text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO PORTFOLIO
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-mono font-black text-white mb-6 uppercase tracking-wider">
            <span className="text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">[</span>
            SHURA356
            <span className="text-orange-400 drop-shadow-[0_0_15px_rgba(255,165,0,0.8)] animate-pulse"> BLOG</span>
            <span className="text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">]</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-400 mx-auto shadow-[0_0_10px_rgba(255,0,0,0.5)] mb-4"></div>
          <p className="text-gray-300 font-mono text-lg max-w-2xl mx-auto">
            Thoughts on cybersecurity, CTF writeups, and discoveries from the trenches
          </p>
        </motion.div>

        {/* Blog Posts */}
        {blogPosts.length > 0 ? (
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black/80 border-2 border-red-600 p-8 shadow-[0_0_20px_rgba(255,0,0,0.3)] backdrop-blur-sm hover:border-orange-500 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Flame className="w-6 h-6 text-red-500 animate-pulse" />
                  <div className="flex items-center gap-4 text-sm font-mono text-gray-400">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-mono font-bold text-white mb-4 hover:text-orange-400 transition-colors duration-300">
                  <span className="text-orange-400">[</span>
                  {post.title}
                  <span className="text-orange-400">]</span>
                </h2>
                
                <p className="text-gray-300 font-mono leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-red-400 hover:text-orange-400 transition-colors duration-300 font-mono text-sm font-bold uppercase"
                >
                  READ MORE →
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-black/80 border-2 border-orange-500 p-12 shadow-[0_0_20px_rgba(255,165,0,0.3)]">
              <Flame className="w-16 h-16 text-orange-400 mx-auto mb-6 animate-pulse" />
              <h2 className="text-3xl font-mono font-bold text-white mb-4">
                <span className="text-orange-400">[</span>COMING SOON<span className="text-orange-400">]</span>
              </h2>
              <p className="text-gray-300 font-mono text-lg mb-6">
                First blog post is in the works... 
              </p>
              <p className="text-sm font-mono text-gray-400">
                Expect CTF writeups, malware analysis deep-dives, and security research findings.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default BlogPage
