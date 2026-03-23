import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getPublishedBlogPosts } from "@/lib/blog-store"

export async function BlogPreview() {
  const blogPosts = await getPublishedBlogPosts()

  return (
    <section className="bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Blog
          </span>
        </div>
        <h2 className="text-balance text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Latest Insights & Resources
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-center text-lg leading-relaxed text-muted-foreground">
          Stay informed with expert articles on elder care, health tips, and
          family guidance.
        </p>

        {/* Blog cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <Card
              key={post.slug}
              className="group overflow-hidden border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
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
              <CardContent className="flex flex-col p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-foreground transition-colors hover:text-primary">
                    {post.title}
                  </h3>
                </Link>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
