'use client'

import { motion } from 'framer-motion'
import { Shield, Flame, Zap, Target, Code, Lock } from 'lucide-react'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-black">
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
            ABOUT 
            <span className="text-orange-400 drop-shadow-[0_0_15px_rgba(255,165,0,0.8)] animate-pulse"> SUDHANSHU</span>
            <span className="text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">]</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-400 mx-auto shadow-[0_0_10px_rgba(255,0,0,0.5)]"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-black/80 border-2 border-red-600 p-8 shadow-[0_0_20px_rgba(255,0,0,0.3)] backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <Flame className="w-8 h-8 text-red-500 mr-4 animate-pulse" />
                <h3 className="text-2xl font-mono font-bold text-white uppercase tracking-wider">
                  <span className="text-orange-400">[</span>CYBERSECURITY STUDENT<span className="text-orange-400">]</span>
                </h3>
              </div>
              
              <div className="space-y-6 text-gray-300 font-mono text-lg leading-relaxed">
                <p>
                  Hey! I'm <span className="text-orange-400 font-bold">Sudhanshu Rai</span>, also known as <span className="text-red-400 font-bold">shura356</span> in CTF competitions. 
                  I'm a passionate cybersecurity student currently pursuing my B.Tech in CSE with specialization in Cyber Security. 
                  Based in <span className="text-red-400">India</span>, I'm entering my 2nd year of college.
                </p>
                
                <p>
                  Started my journey with curiosity about how systems work and how they can be secured. 
                  Over the past year, I've gained hands-on experience through a 
                  <span className="text-orange-400 font-bold"> 3-month internship at CliffGuard Cybersecurity</span> 
                  and countless hours in CTF competitions under the alias <span className="text-red-400 font-bold">shura356</span>.
                </p>
                
                <p>
                  My biggest achievements include reaching <span className="text-red-400 font-bold animate-pulse">Top 6 Percentile in HTB Tales of Aldoria</span> 
                  and securing <span className="text-orange-400 font-bold">26th rank in ApoorvCTF 2025</span>. 
                  I'm particularly interested in malware analysis and cryptography.
                </p>
              </div>
            </div>

            {/* CTF Team Badge */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-black/80 border-2 border-orange-500 p-6 text-center shadow-[0_0_20px_rgba(255,165,0,0.3)]"
            >
              <h4 className="text-xl font-mono font-bold text-orange-400 mb-3 uppercase tracking-wider">
                [EDUCATION_&_EXPERIENCE]
              </h4>
              <div className="space-y-3 text-gray-300 font-mono text-sm">
                <p><span className="text-white">B.Tech CSE</span> (Cyber Security Specialization)</p>
                <p><span className="text-green-400">Internship:</span> CliffGuard Cybersecurity (3 months)</p>
                <p><span className="text-blue-400">Certification:</span> Google Cybersecurity</p>
              </div>
              <div className="mt-4 flex justify-center">
                <div className="bg-gradient-to-r from-red-500 to-orange-400 text-black px-4 py-2 font-mono font-bold text-sm uppercase tracking-wider">
                  STUDENT STATUS: ACTIVE
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Philosophy Box */}
            <motion.div
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(255, 0, 0, 0.4)"
              }}
              className="bg-black/80 border-2 border-red-500 p-8 shadow-[0_0_20px_rgba(255,0,0,0.3)]"
            >
              <h4 className="text-2xl font-mono font-bold text-orange-400 mb-6 uppercase tracking-wider text-center flex items-center justify-center">
                <Flame className="w-8 h-8 text-red-500 mr-4 animate-pulse" />
                [CORE_PHILOSOPHY]
              </h4>
              <blockquote className="text-center text-xl font-mono font-semibold text-white italic mb-6">
                "Learning through <span className="text-red-400 animate-pulse">practice</span> — 
                breaking systems to understand how to defend them better."
              </blockquote>
              <div className="text-center">
                <div className="text-gray-400 font-mono text-lg">- Sudhanshu Rai (shura356)</div>
              </div>
            </motion.div>

            {/* Simple Skills List */}
            <motion.div
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(255, 165, 0, 0.3)"
              }}
              className="bg-black/80 border-2 border-orange-500 p-8 shadow-[0_0_20px_rgba(255,165,0,0.3)]"
            >
              <h4 className="text-2xl font-mono font-bold text-orange-400 mb-6 uppercase tracking-wider text-center flex items-center justify-center">
                <Shield className="w-8 h-8 text-orange-400 mr-4 animate-pulse" />
                [FOCUS_AREAS]
              </h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-900/50 border border-red-600 p-4">
                  <Lock className="w-6 h-6 text-red-400 mx-auto mb-2" />
                  <div className="font-mono text-sm text-white uppercase">Cryptography</div>
                </div>
                <div className="bg-gray-900/50 border border-orange-600 p-4">
                  <Shield className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <div className="font-mono text-sm text-white uppercase">Malware Analysis</div>
                </div>
                <div className="bg-gray-900/50 border border-yellow-600 p-4">
                  <Target className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                  <div className="font-mono text-sm text-white uppercase">Pentesting</div>
                </div>
                <div className="bg-gray-900/50 border border-green-600 p-4">
                  <Code className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className="font-mono text-sm text-white uppercase">CTF Challenges</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
