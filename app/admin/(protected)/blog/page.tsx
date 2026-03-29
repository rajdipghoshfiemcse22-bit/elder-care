import { requireBlogManageSession } from '@/lib/admin-auth'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { createBlogPostAction, deleteBlogPostAction, updateBlogPostAction } from './actions'

export default async function AdminBlogPage() {
  await requireBlogManageSession()

  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <main className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Content Studio</p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-foreground">Blog Management</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Create, edit, and delete blog posts from the admin panel.
        </p>
      </div>

      <Card className="border-border bg-card shadow-sm">
        <CardContent className="p-6">
          <h3 className="font-serif text-xl font-bold text-foreground">Create Blog Post</h3>
          <form action={createBlogPostAction} className="mt-4 grid gap-4 lg:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input id="slug" name="slug" placeholder="my-new-blog-post" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input id="category" name="category" placeholder="Health" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input id="image" name="image" placeholder="/images/blog-heart.jpg" required />
            </div>
            <div className="space-y-2 lg:col-span-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea id="excerpt" name="excerpt" rows={3} required />
            </div>
            <div className="space-y-2 lg:col-span-2">
              <Label htmlFor="body">Body (use blank lines for paragraphs)</Label>
              <Textarea id="body" name="body" rows={8} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="published">Status</Label>
              <select id="published" name="published" defaultValue="true" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
                <option value="true">Published</option>
                <option value="false">Draft</option>
              </select>
            </div>
            <div className="lg:col-span-2">
              <Button type="submit">Create Post</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="border-border bg-card shadow-sm">
            <CardContent className="p-6">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <h3 className="font-serif text-xl font-bold text-foreground">{post.title}</h3>
                <Badge variant={post.published ? 'default' : 'secondary'}>
                  {post.published ? 'Published' : 'Draft'}
                </Badge>
              </div>

              <form action={updateBlogPostAction} className="grid gap-4 lg:grid-cols-2">
                <input type="hidden" name="blogId" value={post.id} />
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input name="title" defaultValue={post.title} required />
                </div>
                <div className="space-y-2">
                  <Label>Slug</Label>
                  <Input name="slug" defaultValue={post.slug} required />
                </div>
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Input name="category" defaultValue={post.category} required />
                </div>
                <div className="space-y-2">
                  <Label>Image URL</Label>
                  <Input name="image" defaultValue={post.image} required />
                </div>
                <div className="space-y-2 lg:col-span-2">
                  <Label>Excerpt</Label>
                  <Textarea name="excerpt" rows={3} defaultValue={post.excerpt} required />
                </div>
                <div className="space-y-2 lg:col-span-2">
                  <Label>Body</Label>
                  <Textarea name="body" rows={8} defaultValue={post.body} required />
                </div>
                <div className="space-y-2">
                  <Label>Status</Label>
                  <select
                    name="published"
                    defaultValue={post.published ? 'true' : 'false'}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                  >
                    <option value="true">Published</option>
                    <option value="false">Draft</option>
                  </select>
                </div>
                <div className="lg:col-span-2 flex flex-wrap gap-3">
                  <Button type="submit">Save Changes</Button>
                </div>
              </form>

              <form action={deleteBlogPostAction} className="mt-3">
                <input type="hidden" name="blogId" value={post.id} />
                <Button type="submit" variant="outline" className="text-destructive hover:text-destructive">
                  Delete Post
                </Button>
              </form>
            </CardContent>
          </Card>
        ))}
        {posts.length === 0 ? (
          <Card className="border-border bg-card shadow-sm">
            <CardContent className="p-6 text-sm text-muted-foreground">
              No blog posts yet. Create your first one above.
            </CardContent>
          </Card>
        ) : null}
      </div>
    </main>
  )
}
