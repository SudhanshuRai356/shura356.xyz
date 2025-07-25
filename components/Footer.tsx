'use client'

import { motion } from 'framer-motion'
import { Flame, Skull, Github, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t-4 border-red-600 relative overflow-hidden">
      {/* Retro grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* ASCII Art Header */}
          <motion.div
            className="font-mono text-xs md:text-sm text-red-400 mb-8 whitespace-pre-line leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            {`
███████╗██╗   ██╗██████╗ ██╗  ██╗ █████╗ ███╗   ██╗███████╗██╗  ██╗██╗   ██╗
██╔════╝██║   ██║██╔══██╗██║  ██║██╔══██╗████╗  ██║██╔════╝██║  ██║██║   ██║
███████╗██║   ██║██║  ██║███████║███████║██╔██╗ ██║███████╗███████║██║   ██║
╚════██║██║   ██║██║  ██║██╔══██║██╔══██║██║╚██╗██║╚════██║██╔══██║██║   ██║
███████║╚██████╔╝██████╔╝██║  ██║██║  ██║██║ ╚████║███████║██║  ██║╚██████╔╝
╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝ 
            `}
          </motion.div>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <Flame className="w-10 h-10 text-red-500 animate-pulse" />
            <h3 className="text-3xl font-bold text-white font-mono uppercase tracking-wider">
              SUDHANSHU RAI | SHURA356
            </h3>
            <Skull className="w-10 h-10 text-orange-500 animate-pulse" />
          </div>
        </motion.div>

        {/* Content sections */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact section */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-red-400 font-mono uppercase tracking-wider border-b-2 border-red-600 pb-2">
              [ CONTACT CHANNELS ]
            </h4>
            <div className="space-y-4">
              <motion.a
                href="https://github.com/SudhanshuRai356"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  x: 10, 
                  color: "#ff6600",
                  textShadow: "0 0 10px #ff6600"
                }}
                className="flex items-center gap-3 text-gray-300 hover:text-orange-400 font-mono font-bold transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-red-500 group-hover:animate-pulse" />
                <span className="text-red-500">&gt;</span>
                GitHub Profile
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/sudhanshu-rai-5a3290335/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  x: 10, 
                  color: "#ff6600",
                  textShadow: "0 0 10px #ff6600"
                }}
                className="flex items-center gap-3 text-gray-300 hover:text-orange-400 font-mono font-bold transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-blue-500 group-hover:animate-pulse" />
                <span className="text-red-500">&gt;</span>
                LinkedIn Profile
              </motion.a>
            </div>
          </div>

          {/* Skills Arsenal */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-red-400 font-mono uppercase tracking-wider border-b-2 border-red-600 pb-2">
              [ SKILL ARSENAL ]
            </h4>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Languages:</span>
                <span className="text-orange-400">C, C++, Python, Java</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Tools:</span>
                <span className="text-orange-400">Wireshark, Burp Suite, Metasploit</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Focus:</span>
                <span className="text-orange-400">Malware Analysis, Cryptography</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Status:</span>
                <span className="text-green-400 animate-pulse">LEARNING & GROWING</span>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-red-400 font-mono uppercase tracking-wider border-b-2 border-red-600 pb-2">
              [ ACHIEVEMENTS ]
            </h4>
            <div className="space-y-4 font-mono text-sm">
              <div className="bg-red-900/20 border border-red-500 p-3 rounded">
                <div className="text-red-400 font-bold">HTB Tales of Aldoria</div>
                <div className="text-gray-300">Top 6 Percentile</div>
              </div>
              <div className="bg-orange-900/20 border border-orange-500 p-3 rounded">
                <div className="text-orange-400 font-bold">ApoorvCTF 2025</div>
                <div className="text-gray-300">26th Rank</div>
              </div>
              <div className="bg-green-900/20 border border-green-500 p-3 rounded">
                <div className="text-green-400 font-bold">CliffGuard Cybersecurity</div>
                <div className="text-gray-300">3-Month Internship</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="border-t-2 border-red-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="font-mono text-white font-bold text-lg mb-2">
                  SUDHANSHU RAI | SHURA356
                </p>
                <p className="font-mono text-gray-400 text-sm">
                  © {currentYear} • STUDENT_LEARNING_AND_BUILDING
                </p>
              </div>
              
              <div className="text-center md:text-right">
                <p className="font-mono text-orange-400 text-sm font-bold mb-1">
                  [SYSTEM_STATUS: ONLINE]
                </p>
                <p className="font-mono text-green-400 text-xs">
                  ∞ LEARNING_LOOP_ACTIVE
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer