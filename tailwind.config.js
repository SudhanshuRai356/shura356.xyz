/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Edgy flames "burn it down" aesthetic
        'burn': {
          'black': '#000000',
          'charcoal': '#0d0d0d',
          'ash': '#1a1a1a',
          'ember': '#2d1b0e',
          'flame-core': '#ff0000',
          'flame-mid': '#ff4500',
          'flame-tip': '#ff6b00',
          'flame-bright': '#ff8c00',
          'lava': '#ff1e00',
          'magma': '#b30000',
          'smoke': '#404040',
          'sparks': '#ffcc00',
        },
        // Block/geometric colors
        'edge': {
          'red': '#cc0000',
          'orange': '#ff4500',
          'yellow': '#ffaa00',
          'white': '#ffffff',
          'gray': '#666666',
          'dark': '#1a1a1a',
        },
        // Legacy compatibility
        'dark-bg': '#000000',
        'dark-surface': '#0d0d0d',
        'dark-card': '#1a1a1a',
        'text-primary': '#ffffff',
        'text-secondary': '#cccccc',
        'text-muted': '#666666',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'IBM Plex Mono', 'Courier New', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Orbitron', 'Rajdhani', 'Russo One', 'system-ui', 'sans-serif'],
        'display': ['Black Ops One', 'Orbitron', 'system-ui', 'sans-serif'],
      },
      animation: {
        'flame-flicker': 'flame-flicker 2s ease-in-out infinite alternate',
        'flame-dance': 'flame-dance 3s ease-in-out infinite',
        'ember-rise': 'ember-rise 4s linear infinite',
        'spark-fly': 'spark-fly 1.5s ease-out infinite',
        'burn-spread': 'burn-spread 2s ease-out forwards',
        'block-slam': 'block-slam 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'edge-cut': 'edge-cut 0.3s ease-out',
        'melt-in': 'melt-in 0.8s ease-out forwards',
        'char-burn': 'char-burn 0.6s ease-out forwards',
      },
      keyframes: {
        'flame-flicker': {
          '0%, 100%': { 
            transform: 'scaleY(1) scaleX(0.95)',
            filter: 'brightness(1) hue-rotate(0deg)',
          },
          '25%': { 
            transform: 'scaleY(1.1) scaleX(1.05)',
            filter: 'brightness(1.2) hue-rotate(5deg)',
          },
          '50%': { 
            transform: 'scaleY(0.9) scaleX(0.9)',
            filter: 'brightness(0.9) hue-rotate(-5deg)',
          },
          '75%': { 
            transform: 'scaleY(1.05) scaleX(1.1)',
            filter: 'brightness(1.1) hue-rotate(3deg)',
          },
        },
        'flame-dance': {
          '0%, 100%': { 
            transform: 'rotate(-2deg) scaleX(1)',
            transformOrigin: 'bottom center',
          },
          '33%': { 
            transform: 'rotate(3deg) scaleX(0.95)',
            transformOrigin: 'bottom center',
          },
          '66%': { 
            transform: 'rotate(-1deg) scaleX(1.05)',
            transformOrigin: 'bottom center',
          },
        },
        'ember-rise': {
          '0%': { 
            transform: 'translateY(100px) translateX(0px) scale(0)',
            opacity: '0',
          },
          '10%': { 
            opacity: '1',
            transform: 'translateY(80px) translateX(5px) scale(1)',
          },
          '90%': { 
            opacity: '0.8',
            transform: 'translateY(-80px) translateX(-10px) scale(0.5)',
          },
          '100%': { 
            opacity: '0',
            transform: 'translateY(-100px) translateX(-15px) scale(0)',
          },
        },
        'spark-fly': {
          '0%': { 
            transform: 'translate(0, 0) scale(1)',
            opacity: '1',
          },
          '100%': { 
            transform: 'translate(50px, -30px) scale(0)',
            opacity: '0',
          },
        },
        'burn-spread': {
          '0%': { 
            clipPath: 'polygon(0 100%, 0 100%, 0 100%, 0 100%)',
            filter: 'brightness(0.5)',
          },
          '100%': { 
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            filter: 'brightness(1)',
          },
        },
        'block-slam': {
          '0%': { 
            transform: 'translateY(-100px) rotateX(90deg)',
            opacity: '0',
          },
          '50%': { 
            transform: 'translateY(10px) rotateX(-5deg)',
            opacity: '1',
          },
          '100%': { 
            transform: 'translateY(0) rotateX(0deg)',
            opacity: '1',
          },
        },
        'edge-cut': {
          '0%': { 
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
          },
          '100%': { 
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          },
        },
        'melt-in': {
          '0%': { 
            transform: 'scaleY(0.1) skewX(45deg)',
            transformOrigin: 'bottom',
            filter: 'brightness(2)',
          },
          '100%': { 
            transform: 'scaleY(1) skewX(0deg)',
            transformOrigin: 'bottom',
            filter: 'brightness(1)',
          },
        },
        'char-burn': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.8)',
            filter: 'brightness(0) contrast(2)',
          },
          '50%': { 
            filter: 'brightness(1.5) contrast(1.5)',
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)',
            filter: 'brightness(1) contrast(1)',
          },
        },
      },
      boxShadow: {
        'flame-glow': '0 0 30px rgba(255, 30, 0, 0.6), 0 0 60px rgba(255, 69, 0, 0.4), 0 0 90px rgba(255, 107, 0, 0.2)',
        'ember-glow': '0 0 20px rgba(255, 69, 0, 0.8), 0 0 40px rgba(179, 0, 0, 0.6)',
        'burn-edge': '0 0 25px rgba(204, 0, 0, 0.7), inset 0 0 25px rgba(255, 69, 0, 0.3)',
        'lava-glow': '0 0 35px rgba(255, 30, 0, 0.9), 0 0 70px rgba(255, 30, 0, 0.5)',
        'block-shadow': '8px 8px 0px rgba(0, 0, 0, 0.8), 16px 16px 0px rgba(0, 0, 0, 0.4)',
        'edge-cut': 'inset 0 0 20px rgba(255, 69, 0, 0.5)',
      },
      backgroundImage: {
        'flame-gradient': 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FF4500 100%)',
        'ember-gradient': 'linear-gradient(45deg, #FF4500 0%, #CC5500 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0A0A0A 0%, #111111 100%)',
      },
    },
  },
  plugins: [],
}
