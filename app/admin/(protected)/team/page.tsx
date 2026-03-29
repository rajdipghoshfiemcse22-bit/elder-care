import { AdminRole } from '@prisma/client'
import { requireSuperAdminSession } from '@/lib/admin-auth'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { createTeamMemberAction, updateTeamMemberAction } from './actions'

export default async function TeamPage() {
  const { adminUser } = await requireSuperAdminSession()

  const teamMembers = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isActive: true,
      createdAt: true,
    },
  })

  return (
    <main className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Access Control</p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-foreground">Team Management</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Super Admin can create staff users and manage roles.
        </p>
      </div>

      <Card className="border-border bg-card shadow-sm">
        <CardContent className="p-6">
          <h3 className="font-serif text-xl font-bold text-foreground">Create Team Member</h3>
          <form action={createTeamMemberAction} className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="Aditi Sen" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="ayushmanecs@gmail.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Temporary Password</Label>
              <Input id="password" name="password" type="password" required minLength={8} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <select
                id="role"
                name="role"
                defaultValue={AdminRole.SUPPORT}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              >
                {Object.values(AdminRole).map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <Button type="submit">Create Team Member</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className="border-border bg-card shadow-sm">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-border bg-secondary/40 text-xs uppercase text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Created</th>
                  <th className="px-4 py-3">Update</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member) => (
                  <tr key={member.id} className="border-b border-border/70 last:border-b-0">
                    <td className="px-4 py-3">
                      <p className="font-medium text-foreground">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.email}</p>
                      {member.id === adminUser.id ? (
                        <p className="mt-1 text-xs font-medium text-primary">Current User</p>
                      ) : null}
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant="secondary">{member.role}</Badge>
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant={member.isActive ? 'default' : 'secondary'}>
                        {member.isActive ? 'Active' : 'Inactive'}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {new Date(member.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3">
                      <form action={updateTeamMemberAction} className="flex flex-wrap items-center gap-2">
                        <input type="hidden" name="userId" value={member.id} />
                        <select
                          name="role"
                          defaultValue={member.role}
                          className="rounded-md border border-border bg-background px-2 py-1 text-xs"
                        >
                          {Object.values(AdminRole).map((role) => (
                            <option key={role} value={role}>
                              {role}
                            </option>
                          ))}
                        </select>
                        <select
                          name="isActive"
                          defaultValue={member.isActive ? 'true' : 'false'}
                          className="rounded-md border border-border bg-background px-2 py-1 text-xs"
                        >
                          <option value="true">Active</option>
                          <option value="false">Inactive</option>
                        </select>
                        <Button type="submit" size="sm" variant="outline">
                          Save
                        </Button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
