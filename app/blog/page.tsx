import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { getPublishedBlogPosts } from '@/lib/blog-store'

export default async function BlogListingPage() {
  const posts = await getPublishedBlogPosts()

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="bg-secondary/40 py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Blog</p>
            <h1 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl">
              Insights & Resources
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Articles on elder care, family support, and practical guidance for caregivers.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Card key={post.slug} className="group overflow-hidden border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative aspect-16/10 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                        {post.category}
                      </span>
                    </div>
                  </Link>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="mt-3 text-lg font-bold text-foreground transition-colors hover:text-primary">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80">
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
