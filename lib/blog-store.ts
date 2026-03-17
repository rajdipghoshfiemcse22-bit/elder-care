import { prisma } from '@/lib/prisma'
import { blogPosts as staticPosts } from '@/lib/blog-data'

export interface BlogPostView {
  title: string
  slug: string
  excerpt: string
  date: string
  image: string
  category: string
  content: string[]
}

function formatDate(date: Date | null | undefined) {
  const source = date ?? new Date()
  return source.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function splitBody(body: string) {
  return body
    .split(/\n\s*\n/g)
    .map((p) => p.trim())
    .filter(Boolean)
}

export async function getPublishedBlogPosts(): Promise<BlogPostView[]> {
  const dbPosts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: [{ publishedAt: 'desc' }, { createdAt: 'desc' }],
  })

  if (dbPosts.length === 0) {
    return staticPosts
  }

  return dbPosts.map((post) => ({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    date: formatDate(post.publishedAt ?? post.createdAt),
    image: post.image,
    category: post.category,
    content: splitBody(post.body),
  }))
}

export async function getPublishedBlogPostBySlug(slug: string): Promise<BlogPostView | null> {
  const post = await prisma.blogPost.findUnique({
    where: { slug },
  })

  if (!post || !post.published) {
    const staticPost = staticPosts.find((item) => item.slug === slug)
    return staticPost ?? null
  }

  return {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    date: formatDate(post.publishedAt ?? post.createdAt),
    image: post.image,
    category: post.category,
    content: splitBody(post.body),
  }
}
