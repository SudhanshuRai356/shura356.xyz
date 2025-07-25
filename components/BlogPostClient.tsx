'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Flame } from 'lucide-react'
import Link from 'next/link'
import type { BlogPost } from '@/blogData'

interface BlogPostClientProps {
  post: BlogPost
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
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
            href="/blog"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-red-400 transition-colors duration-300 font-mono text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO BLOG
          </Link>
        </motion.div>

        {/* Article */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/80 border-2 border-red-600 p-8 shadow-[0_0_20px_rgba(255,0,0,0.3)] backdrop-blur-sm"
        >
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
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
            
            <h1 className="text-3xl md:text-4xl font-mono font-black text-white mb-4 leading-tight">
              <span className="text-orange-400">[</span>
              {post.title}
              <span className="text-orange-400">]</span>
            </h1>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-orange max-w-none">
            <div 
              className="text-gray-300 font-mono leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </motion.article>

        {/* Back to Blog */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-3 font-bold font-mono uppercase tracking-wider border-2 border-red-400 hover:scale-105 transition-transform duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            BACK TO ALL POSTS
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
