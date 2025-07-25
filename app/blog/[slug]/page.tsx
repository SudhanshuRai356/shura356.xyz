'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Flame } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface BlogPost {
  slug: string
  title: string
  date: string
  readTime: string
  content: string
}

// This will be populated with actual blog posts
const blogPosts: BlogPost[] = [
  {
    slug: 'building-this-portfolio',
    title: 'So finally from getting the domain to creating the site',
    date: 'July 25, 2025',
    readTime: '3 min read',
    content: `
      <p>Creating this website was a fresh opportunity to learn how modern static websites are built especially with the help of AI. I don't know enough about creating visually impressive designs with Next.js, so having access to examples from others online was incredibly helpful.</p>
      
      <p>Being able to find so many people giving the code of their portfolios as open repos and seeing how people structure and design their portfolios gave me both ideas and some practical elements I could apply directly.</p>
      
      <p>Building this portfolio also forced me to take a deeper look within myself. It made me think about what I've achieved so far and helped me clarify my goals moving forward. It's been more than just a technical project — it's been a personal one, too.</p>
      
      <h3><span class="text-orange-400">[</span>THE JOURNEY<span class="text-orange-400">]</span></h3>
      
      <p>From getting the domain <strong>shura356.xyz</strong> to deploying the final site, this project made me see that building something authentic takes more than just code. It requires honest self presentation and the courage to share your real story, not just the polished version.</p>
      
      <p>The retro cyberpunk aesthetic wasn't just a design choice, it shows exactly what made me fall in love with and still has me hooked about computers.</p>
      
      <h3><span class="text-orange-400">[</span>WHAT'S NEXT<span class="text-orange-400">]</span></h3>
      
      <p>This is just the start. I'll be sharing more about my experiences with CTFs, malware analysis finds, and the things I learn as I continue growing in cybersecurity.</p>
      
      <p>Stay tuned for more posts about breaking things (ethically) and building them back stronger.</p>
      
      <p class="text-center text-red-400 font-bold animate-pulse">— shura356</p>
    `
  }
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

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
