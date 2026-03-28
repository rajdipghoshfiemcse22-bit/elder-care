import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { InquiryStatus } from '@prisma/client'
import { requireAdminSession } from '@/lib/admin-auth'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default async function AdminDashboardPage() {
  await requireAdminSession()

  const [total, pending, converted, closed] = await Promise.all([
    prisma.consultationRequest.count(),
    prisma.consultationRequest.count({
      where: { status: { in: [InquiryStatus.NEW, InquiryStatus.CONTACTED, InquiryStatus.QUALIFIED] } },
    }),
    prisma.consultationRequest.count({ where: { status: InquiryStatus.CONVERTED } }),
    prisma.consultationRequest.count({ where: { status: InquiryStatus.CLOSED } }),
  ])

  const stats = [
    { label: 'Total Inquiries', value: total },
    { label: 'Open Pipeline', value: pending },
    { label: 'Converted', value: converted },
    { label: 'Closed', value: closed },
  ]

  return (
    <main>
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Overview</p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-foreground">Admin Dashboard</h2>
        <p className="mt-2 text-sm text-muted-foreground">Overview of consultation pipeline performance.</p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-border bg-card shadow-sm">
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="mt-1 text-3xl font-semibold text-foreground">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6 border-border bg-card shadow-sm">
        <CardContent className="p-5">
          <h3 className="font-serif text-xl font-bold text-foreground">Quick Actions</h3>
          <p className="mt-1 text-sm text-muted-foreground">Jump directly to your active lead pipeline.</p>
          <div className="mt-4">
            <Button asChild>
              <Link href="/admin/inquiries">Manage Inquiries</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
