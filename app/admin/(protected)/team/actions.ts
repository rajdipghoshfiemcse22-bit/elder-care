'use server'

import { randomUUID } from 'node:crypto'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { logAdminAction, requireSuperAdminSession } from '@/lib/admin-auth'
import { prisma } from '@/lib/prisma'
import { AdminRole } from '@prisma/client'
import { hashPassword } from 'better-auth/crypto'

const createTeamMemberSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(120),
  password: z.string().min(8).max(128),
  role: z.nativeEnum(AdminRole),
})

const updateTeamMemberSchema = z.object({
  userId: z.string().min(1),
  role: z.nativeEnum(AdminRole),
  isActive: z.boolean(),
})

export async function createTeamMemberAction(formData: FormData) {
  const { adminUser } = await requireSuperAdminSession()

  const input = createTeamMemberSchema.parse({
    name: String(formData.get('name') || ''),
    email: String(formData.get('email') || ''),
    password: String(formData.get('password') || ''),
    role: String(formData.get('role') || ''),
  })

  const existingUser = await prisma.user.findUnique({
    where: { email: input.email },
    select: { id: true },
  })

  if (existingUser) {
    throw new Error('A user with this email already exists')
  }

  const userId = randomUUID()
  const accountId = randomUUID()
  const passwordHash = await hashPassword(input.password)

  const createdUser = await prisma.user.create({
    data: {
      id: userId,
      name: input.name,
      email: input.email,
      role: input.role,
      isActive: true,
      emailVerified: true,
      accounts: {
        create: {
          id: accountId,
          accountId: userId,
          providerId: 'credential',
          password: passwordHash,
        },
      },
    },
    select: { id: true, email: true, role: true },
  })

  await prisma.adminActionLog.create({
    data: {
      id: randomUUID(),
      adminId: adminUser.id,
      action: 'CREATE_TEAM_MEMBER',
      entityType: 'User',
      entityId: createdUser.id,
      metadata: {
        email: createdUser.email,
        role: createdUser.role,
      },
    },
  })

  revalidatePath('/admin/team')
}

export async function updateTeamMemberAction(formData: FormData) {
  const { adminUser } = await requireSuperAdminSession()

  const input = updateTeamMemberSchema.parse({
    userId: String(formData.get('userId') || ''),
    role: String(formData.get('role') || ''),
    isActive: String(formData.get('isActive') || '') === 'true',
  })

  if (adminUser.id === input.userId && !input.isActive) {
    throw new Error('You cannot deactivate your own account')
  }

  if (adminUser.id === input.userId && input.role !== AdminRole.SUPER_ADMIN) {
    throw new Error('You cannot remove your own Super Admin role')
  }

  const updated = await prisma.user.update({
    where: { id: input.userId },
    data: {
      role: input.role,
      isActive: input.isActive,
    },
    select: { id: true, email: true, role: true, isActive: true },
  })

  await logAdminAction({
    adminId: adminUser.id,
    action: 'UPDATE_TEAM_MEMBER',
    entityType: 'User',
    entityId: updated.id,
    metadata: {
      email: updated.email,
      role: updated.role,
      isActive: updated.isActive,
    },
  })

  revalidatePath('/admin/team')
}
