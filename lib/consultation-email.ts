import nodemailer from 'nodemailer'

type ConsultationNotificationInput = {
  inquiryId: string
  firstName: string
  lastName: string
  email: string
  phone: string | null
  message: string
  service: string | null
  city: string | null
  createdAt: Date
}

const DEFAULT_RECIPIENT = 'rajdipghosh24680@gmail.com'

function getSmtpConfig() {
  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !port || !user || !pass) {
    return null
  }

  return {
    host,
    port,
    secure: process.env.SMTP_SECURE === 'true' || port === 465,
    auth: {
      user,
      pass,
    },
  }
}

export async function sendConsultationNotificationEmail(
  data: ConsultationNotificationInput,
) {
  const smtpConfig = getSmtpConfig()
  if (!smtpConfig) {
    console.warn(
      'Consultation email notification skipped: SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS not fully configured.',
    )
    return { sent: false as const, reason: 'smtp-not-configured' as const }
  }

  const recipient =
    process.env.CONSULTATION_NOTIFICATION_EMAIL?.trim() || DEFAULT_RECIPIENT
  const from = process.env.SMTP_FROM?.trim() || smtpConfig.auth.user

  const transporter = nodemailer.createTransport(smtpConfig)

  const subject = `New consultation request: ${data.firstName} ${data.lastName}`
  const submittedAt = data.createdAt.toISOString()

  const text = [
    'A new consultation request was submitted from the website.',
    '',
    `Inquiry ID: ${data.inquiryId}`,
    `Submitted At (UTC): ${submittedAt}`,
    `Name: ${data.firstName} ${data.lastName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || 'N/A'}`,
    `Service: ${data.service || 'General Consultation'}`,
    `City: ${data.city || 'N/A'}`,
    '',
    'Message:',
    data.message,
  ].join('\n')

  await transporter.sendMail({
    from,
    to: recipient,
    subject,
    text,
    replyTo: data.email,
  })

  return { sent: true as const }
}