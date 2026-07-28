import { Bell, Menu, Search } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function DashboardTopbar({
  onMenuClick,
}: {
  onMenuClick: () => void
}) {
  return (
    <header className="flex h-[72px] shrink-0 items-center gap-3 border-b border-border bg-white px-4 sm:gap-4 sm:px-6">
      <button
        type="button"
        onClick={onMenuClick}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="relative hidden max-w-md flex-1 sm:block">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search topics, questions..."
          className="h-10 w-full rounded-lg border border-border bg-secondary/40 pl-10 pr-14 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-border bg-white px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
          ⌘K
        </span>
      </div>

      <div className="ml-auto flex items-center gap-3">
        <button
          type="button"
          className="relative flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
        </button>
        <Avatar>
          <AvatarFallback className="bg-indigo-600 font-semibold text-white">
            A
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
