'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { logAdminAction, requireBlogManageSession } from '@/lib/admin-auth'
import { prisma } from '@/lib/prisma'

const blogBaseSchema = z.object({
  title: z.string().trim().min(5).max(180),
  slug: z
    .string()
    .trim()
    .min(3)
    .max(160)
    .regex(/^[a-z0-9-]+$/, 'Slug must contain lowercase letters, numbers, and hyphens only'),
  excerpt: z.string().trim().min(20).max(320),
  category: z.string().trim().min(2).max(60),
  image: z.string().trim().min(1).max(300),
  body: z.string().trim().min(40),
  published: z.boolean(),
})

function parseBoolean(value: FormDataEntryValue | null) {
  return String(value || '') === 'true'
}

export async function createBlogPostAction(formData: FormData) {
  const { adminUser } = await requireBlogManageSession()

  const parsed = blogBaseSchema.safeParse({
    title: String(formData.get('title') || ''),
    slug: String(formData.get('slug') || ''),
    excerpt: String(formData.get('excerpt') || ''),
    category: String(formData.get('category') || ''),
    image: String(formData.get('image') || ''),
    body: String(formData.get('body') || ''),
    published: parseBoolean(formData.get('published')),
  })

  if (!parsed.success) {
    throw new Error(parsed.error.issues[0]?.message || 'Invalid blog post data')
  }

  const input = parsed.data

  const created = await prisma.blogPost.create({
    data: {
      title: input.title,
      slug: input.slug,
      excerpt: input.excerpt,
      category: input.category,
      image: input.image,
      body: input.body,
      published: input.published,
      publishedAt: input.published ? new Date() : null,
    },
  })

  await logAdminAction({
    adminId: adminUser.id,
    action: 'CREATE_BLOG_POST',
    entityType: 'BlogPost',
    entityId: created.id,
    metadata: { slug: created.slug },
  })

  revalidatePath('/admin/blog')
  revalidatePath('/')
  revalidatePath(`/blog/${created.slug}`)
}

export async function updateBlogPostAction(formData: FormData) {
  const { adminUser } = await requireBlogManageSession()

  const blogId = String(formData.get('blogId') || '')
  if (!blogId) {
    throw new Error('Blog post id is required')
  }

  const parsed = blogBaseSchema.safeParse({
    title: String(formData.get('title') || ''),
    slug: String(formData.get('slug') || ''),
    excerpt: String(formData.get('excerpt') || ''),
    category: String(formData.get('category') || ''),
    image: String(formData.get('image') || ''),
    body: String(formData.get('body') || ''),
    published: parseBoolean(formData.get('published')),
  })

  if (!parsed.success) {
    throw new Error(parsed.error.issues[0]?.message || 'Invalid blog post data')
  }

  const input = parsed.data

  const existing = await prisma.blogPost.findUnique({
    where: { id: blogId },
    select: { slug: true, publishedAt: true },
  })

  if (!existing) {
    throw new Error('Blog post not found')
  }

  const updated = await prisma.blogPost.update({
    where: { id: blogId },
    data: {
      title: input.title,
      slug: input.slug,
      excerpt: input.excerpt,
      category: input.category,
      image: input.image,
      body: input.body,
      published: input.published,
      publishedAt: input.published
        ? existing.publishedAt ?? new Date()
        : null,
    },
  })

  await logAdminAction({
    adminId: adminUser.id,
    action: 'UPDATE_BLOG_POST',
    entityType: 'BlogPost',
    entityId: updated.id,
    metadata: { slug: updated.slug },
  })

  revalidatePath('/admin/blog')
  revalidatePath('/')
  revalidatePath(`/blog/${existing.slug}`)
  revalidatePath(`/blog/${updated.slug}`)
}

export async function deleteBlogPostAction(formData: FormData) {
  const { adminUser } = await requireBlogManageSession()

  const blogId = String(formData.get('blogId') || '')
  if (!blogId) {
    throw new Error('Blog post id is required')
  }

  const deleted = await prisma.blogPost.delete({
    where: { id: blogId },
    select: { id: true, slug: true },
  })

  await logAdminAction({
    adminId: adminUser.id,
    action: 'DELETE_BLOG_POST',
    entityType: 'BlogPost',
    entityId: deleted.id,
    metadata: { slug: deleted.slug },
  })

  revalidatePath('/admin/blog')
  revalidatePath('/')
  revalidatePath(`/blog/${deleted.slug}`)
}
