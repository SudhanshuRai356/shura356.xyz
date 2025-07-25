export interface BlogPost {
  slug: string
  title: string
  date: string
  readTime: string
  excerpt: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-this-portfolio',
    title: 'So finally from getting the domain to creating the site',
    date: 'July 25, 2025',
    readTime: '3 min read',
    excerpt: 'Creating this website was a fresh opportunity to learn how modern static websites are built, especially with the help of AI. A reflection on the journey of building this portfolio and what I learned along the way.',
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
