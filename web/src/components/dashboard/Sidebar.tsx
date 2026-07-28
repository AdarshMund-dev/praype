import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  Bookmark,
  BookOpen,
  Calendar,
  CheckCircle,
  Flame,
  FileText,
  Folder,
  HelpCircle,
  LayoutDashboard,
  Layers,
  LogOut,
  RotateCcw,
  Settings,
} from 'lucide-react'

type NavItem = { label: string; icon: LucideIcon }

const LEARNING: NavItem[] = [
  { label: 'Buckets', icon: Folder },
  { label: 'Topics', icon: Layers },
  { label: 'Questions', icon: HelpCircle },
  { label: 'Notes', icon: FileText },
  { label: 'Bookmarks', icon: Bookmark },
]

const PROGRESS_ITEMS: NavItem[] = [
  { label: 'Completed', icon: CheckCircle },
  { label: 'Revision', icon: RotateCcw },
  { label: 'Calendar', icon: Calendar },
]

const ANALYTICS_ITEMS: NavItem[] = [
  { label: 'Stats', icon: BarChart3 },
  { label: 'Study Streak', icon: Flame },
]

function NavGroup({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="px-3 text-[11px] font-semibold tracking-wider text-muted-foreground/60">
        {title}
      </p>
      {items.map((item) => (
        <button
          key={item.label}
          type="button"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <item.icon className="h-4 w-4" />
          {item.label}
        </button>
      ))}
    </div>
  )
}

export default function DashboardSidebar({
  onNavigate,
}: {
  onNavigate?: () => void
}) {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="px-6 py-6">
        <Link to="/" onClick={onNavigate} className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <BookOpen className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold text-foreground">Praype</span>
        </Link>
      </div>

      <nav className="flex flex-1 flex-col gap-6 overflow-y-auto px-3 pb-6">
        <button
          type="button"
          className="flex items-center gap-3 rounded-lg bg-indigo-50 px-3 py-2 text-left text-sm font-semibold text-indigo-600"
        >
          <LayoutDashboard className="h-4 w-4" />
          Dashboard
        </button>

        <NavGroup title="LEARNING" items={LEARNING} />
        <NavGroup title="PROGRESS" items={PROGRESS_ITEMS} />
        <NavGroup title="ANALYTICS" items={ANALYTICS_ITEMS} />
      </nav>

      <div className="flex flex-col gap-1 border-t border-border px-3 py-4">
        <button
          type="button"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Settings className="h-4 w-4" />
          Settings
        </button>
        <Link
          to="/"
          onClick={onNavigate}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-50"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Link>
      </div>
    </div>
  )
}
