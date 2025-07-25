import type { Metadata } from 'next'
import { Orbitron, Rajdhani, Russo_One } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-orbitron',
})

const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-rajdhani',
})

const russoOne = Russo_One({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-russo-one',
})

export const metadata: Metadata = {
  title: 'shura356 - BURN IT DOWN',
  description: 'shura356 - Edgy cybersecurity researcher. I don\'t fix systems, I burn them down and forge better ones.',
  keywords: ['shura356', 'cybersecurity', 'burn it down', 'malware analysis', 'hacker', 'CTF', 'fire'],
  authors: [{ name: 'Sudhanshu Rai' }],
  creator: 'Sudhanshu Rai',
  openGraph: {
    title: 'shura356 - BURN IT DOWN',
    description: 'I don\'t patch flaws — I burn them down and rebuild from scratch.',
    type: 'website',
    url: 'https://shura356.xyz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'shura356 - BURN IT DOWN',
    description: 'I don\'t patch flaws — I burn them down and rebuild from scratch.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable} ${russoOne.variable}`}>
      <body className="font-heading antialiased">
        {children}
      </body>
    </html>
  )
}
