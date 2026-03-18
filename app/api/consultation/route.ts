import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { sendConsultationNotificationEmail } from '@/lib/consultation-email'

const consultationSchema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().max(30).optional(),
  message: z.string().trim().min(10).max(3000),
  service: z.string().trim().max(120).optional(),
  city: z.string().trim().max(120).optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = consultationSchema.parse(body)

    const inquiry = await prisma.consultationRequest.create({
      data: {
        firstName: parsed.firstName,
        lastName: parsed.lastName,
        email: parsed.email,
        phone: parsed.phone || null,
        message: parsed.message,
        service: parsed.service || null,
        city: parsed.city || null,
        source: 'website',
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        message: true,
        service: true,
        city: true,
        createdAt: true,
      },
    })

    try {
      await sendConsultationNotificationEmail({
        inquiryId: inquiry.id,
        firstName: inquiry.firstName,
        lastName: inquiry.lastName,
        email: inquiry.email,
        phone: inquiry.phone,
        message: inquiry.message,
        service: inquiry.service,
        city: inquiry.city,
        createdAt: inquiry.createdAt,
      })
    } catch (emailError) {
      console.error('Failed to send consultation notification email:', emailError)
    }

    return NextResponse.json({ ok: true, id: inquiry.id })
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Consultation validation error:', error.flatten())
      return NextResponse.json(
        {
          ok: false,
          error: 'Invalid form data',
          fieldErrors: error.flatten().fieldErrors,
        },
        { status: 400 },
      )
    }

    console.error('Consultation submission error:', error)
    return NextResponse.json(
      { ok: false, error: 'Failed to submit consultation request' },
      { status: 500 },
    )
  }
}
