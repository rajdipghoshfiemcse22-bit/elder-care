import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function UnauthorizedPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-secondary/40" />
      <div className="pointer-events-none absolute -top-12 -left-16 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative w-full max-w-xl rounded-2xl border border-border bg-card p-8 shadow-lg">
        <div className="mb-4 flex items-center justify-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">G</span>
          </div>
          <span className="font-serif text-xl font-bold text-foreground">Ayushman Elder Care Service</span>
        </div>
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Admin Access</p>
        <h1 className="mt-3 font-serif text-3xl font-bold text-foreground">Unauthorized</h1>
        <p className="mt-3 text-muted-foreground">
          You do not have permission to access this admin area.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button asChild>
            <Link href="/admin/login">Go to Login</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
