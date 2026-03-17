'use server'

import { revalidatePath } from 'next/cache'
import { InquiryPriority, InquiryStatus } from '@/lib/generated/prisma/enums'
import { logAdminAction, requireAdminSession, requireInquiryManageSession, requireInquiryViewSession } from '@/lib/admin-auth'
import { prisma } from '@/lib/prisma'

const statusValues = Object.values(InquiryStatus)
const priorityValues = Object.values(InquiryPriority)

export async function updateInquiryAction(inquiryId: string, formData: FormData) {
  const { adminUser } = await requireInquiryManageSession()

  const status = String(formData.get('status') || '')
  const priority = String(formData.get('priority') || '')
  const assignedAdminId = String(formData.get('assignedAdminId') || '')

  if (!statusValues.includes(status as InquiryStatus)) {
    throw new Error('Invalid status value')
  }

  if (!priorityValues.includes(priority as InquiryPriority)) {
    throw new Error('Invalid priority value')
  }

  await prisma.consultationRequest.update({
    where: { id: inquiryId },
    data: {
      status: status as InquiryStatus,
      priority: priority as InquiryPriority,
      assignedAdminId: assignedAdminId || null,
      contactedAt: status === InquiryStatus.CONTACTED ? new Date() : undefined,
      resolvedAt:
        status === InquiryStatus.CONVERTED || status === InquiryStatus.CLOSED
          ? new Date()
          : undefined,
    },
  })

  await logAdminAction({
    adminId: adminUser.id,
    action: 'UPDATE_INQUIRY',
    entityType: 'ConsultationRequest',
    entityId: inquiryId,
    metadata: {
      status,
      priority,
      assignedAdminId: assignedAdminId || null,
    },
  })

  revalidatePath('/admin/inquiries')
  revalidatePath(`/admin/inquiries/${inquiryId}`)
}

export async function addInquiryNoteAction(inquiryId: string, formData: FormData) {
  const { adminUser } = await requireInquiryViewSession()

  const body = String(formData.get('body') || '').trim()
  if (!body) {
    throw new Error('Note body is required')
  }

  await prisma.adminNote.create({
    data: {
      inquiryId,
      adminId: adminUser.id,
      body,
      isInternal: true,
    },
  })

  await logAdminAction({
    adminId: adminUser.id,
    action: 'ADD_NOTE',
    entityType: 'ConsultationRequest',
    entityId: inquiryId,
  })

  revalidatePath(`/admin/inquiries/${inquiryId}`)
}
