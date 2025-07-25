import { notFound } from 'next/navigation'
import { blogPosts } from '@/blogData'
import type { BlogPost } from '@/blogData'
import BlogPostClient from '@/components/BlogPostClient'

// Required for static export - generates all blog post paths at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}
