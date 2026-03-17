import Link from 'next/link'
import { requireInquiryViewSession } from '@/lib/admin-auth'
import { prisma } from '@/lib/prisma'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default async function AdminInquiriesPage() {
  await requireInquiryViewSession()

  const inquiries = await prisma.consultationRequest.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      assignedAdmin: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      _count: {
        select: {
          notes: true,
        },
      },
    },
    take: 100,
  })

  return (
    <main>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Pipeline</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground">Inquiries</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Latest consultation requests submitted from your website.
          </p>
        </div>
      </div>

      <Card className="mt-6 overflow-hidden border-border bg-card shadow-sm">
        <CardContent className="p-0">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-border bg-secondary/40 text-xs uppercase text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">Assigned</th>
              <th className="px-4 py-3">Notes</th>
              <th className="px-4 py-3">Created</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inquiry) => (
              <tr key={inquiry.id} className="border-b border-border/70 last:border-b-0">
                <td className="px-4 py-3">
                  <Link href={`/admin/inquiries/${inquiry.id}`} className="font-medium text-primary hover:underline">
                    {inquiry.firstName} {inquiry.lastName}
                  </Link>
                  <p className="text-xs text-muted-foreground">{inquiry.email}</p>
                </td>
                <td className="px-4 py-3 text-foreground">{inquiry.service || 'General'}</td>
                <td className="px-4 py-3">
                  <Badge variant="secondary">{inquiry.status}</Badge>
                </td>
                <td className="px-4 py-3 text-foreground">{inquiry.priority}</td>
                <td className="px-4 py-3 text-foreground">{inquiry.assignedAdmin?.name || 'Unassigned'}</td>
                <td className="px-4 py-3 text-foreground">{inquiry._count.notes}</td>
                <td className="px-4 py-3 text-muted-foreground">
                  {new Date(inquiry.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
            {inquiries.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-sm text-muted-foreground">
                  No consultation requests yet.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
        </CardContent>
      </Card>
    </main>
  )
}
