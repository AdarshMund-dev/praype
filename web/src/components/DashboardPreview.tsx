import { motion } from 'framer-motion'
import {
  Bell,
  BookOpen,
  Braces,
  Coffee,
  LayoutGrid,
  Leaf,
  ListChecks,
  Network,
  Orbit,
  Search,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'

type Bucket = {
  name: string
  icon: React.ReactNode
  iconBg: string
  done: number
  total: number
  percent: number
  barColor: string
}

const BUCKETS: Bucket[] = [
  {
    name: 'Core Java',
    icon: <Coffee className="h-4 w-4" />,
    iconBg: 'bg-amber-100 text-amber-600',
    done: 48,
    total: 68,
    percent: 71,
    barColor: 'bg-emerald-500',
  },
  {
    name: 'Spring Boot',
    icon: <Leaf className="h-4 w-4" />,
    iconBg: 'bg-green-100 text-green-600',
    done: 26,
    total: 52,
    percent: 50,
    barColor: 'bg-amber-400',
  },
  {
    name: 'React',
    icon: <Orbit className="h-4 w-4" />,
    iconBg: 'bg-sky-100 text-sky-600',
    done: 34,
    total: 60,
    percent: 56,
    barColor: 'bg-sky-500',
  },
  {
    name: 'JavaScript',
    icon: <span className="text-[10px] font-bold">JS</span>,
    iconBg: 'bg-yellow-100 text-yellow-700',
    done: 20,
    total: 55,
    percent: 36,
    barColor: 'bg-yellow-400',
  },
  {
    name: 'Data Structures',
    icon: <Braces className="h-4 w-4" />,
    iconBg: 'bg-orange-100 text-orange-600',
    done: 18,
    total: 40,
    percent: 45,
    barColor: 'bg-orange-500',
  },
  {
    name: 'System Design',
    icon: <Network className="h-4 w-4" />,
    iconBg: 'bg-violet-100 text-violet-600',
    done: 12,
    total: 45,
    percent: 27,
    barColor: 'bg-violet-500',
  },
]

const SIDEBAR_LEARNING = [
  { label: 'Dashboard', icon: LayoutGrid, active: true },
  { label: 'Buckets', icon: BookOpen },
  { label: 'Progress', icon: TrendingUp },
]

const SIDEBAR_ANALYTICS = [
  { label: 'Analytics', icon: Sparkles },
  { label: 'Completed', icon: ListChecks },
  { label: 'Settings', icon: Settings },
]

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
      className="relative w-full"
    >
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
        className="relative rounded-3xl border border-border bg-card/80 p-2 shadow-2xl ring-1 ring-black/5 backdrop-blur-sm sm:p-3"
      >
        <div className="flex overflow-hidden rounded-2xl border border-border bg-white">
          {/* Sidebar */}
          <aside className="hidden w-[190px] shrink-0 flex-col gap-6 border-r border-border bg-white px-3 py-5 lg:flex">
            <div className="flex items-center gap-2 px-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm font-bold text-foreground">Praype</span>
            </div>

            <div className="flex flex-col gap-1">
              <p className="px-2 text-[10px] font-semibold tracking-wider text-muted-foreground/70">
                LEARNING
              </p>
              {SIDEBAR_LEARNING.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-medium ${
                    item.active
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  <item.icon className="h-3.5 w-3.5" />
                  {item.label}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              <p className="px-2 text-[10px] font-semibold tracking-wider text-muted-foreground/70">
                ANALYTICS
              </p>
              {SIDEBAR_ANALYTICS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  <item.icon className="h-3.5 w-3.5" />
                  {item.label}
                </div>
              ))}
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 p-3 sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-2">
              <div>
                <p className="text-sm font-bold text-foreground sm:text-base">
                  Good Morning, Adarsh 👋
                </p>
                <p className="hidden text-xs text-muted-foreground sm:block">
                  Let's continue your learning journey.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs text-muted-foreground sm:flex">
                  <Search className="h-3 w-3" />
                  Search topics...
                </div>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-muted-foreground">
                  <Bell className="h-3.5 w-3.5" />
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  A
                </span>
              </div>
            </div>

            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold text-foreground sm:text-sm">
                Your Buckets
              </p>
              <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold text-primary-foreground">
                + New
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
              {BUCKETS.map((bucket) => (
                <div
                  key={bucket.name}
                  className="rounded-xl border border-border bg-white p-2.5 shadow-sm sm:p-3"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-md ${bucket.iconBg}`}
                    >
                      {bucket.icon}
                    </span>
                    <span className="text-[10px] font-semibold text-muted-foreground">
                      {bucket.percent}%
                    </span>
                  </div>
                  <p className="truncate text-[11px] font-semibold text-foreground sm:text-xs">
                    {bucket.name}
                  </p>
                  <p className="mb-1.5 text-[9px] text-muted-foreground sm:text-[10px]">
                    {bucket.done}/{bucket.total} topics
                  </p>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className={`h-full rounded-full ${bucket.barColor}`}
                      style={{ width: `${bucket.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between rounded-xl border border-border bg-secondary/40 p-3">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Target className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold text-foreground sm:text-xs">
                    Daily Goal
                  </p>
                  <p className="text-[9px] text-muted-foreground sm:text-[10px]">
                    3 / 5 topics
                  </p>
                </div>
              </div>
              <span className="hidden rounded-full border border-border bg-white px-2.5 py-1 text-[10px] font-semibold text-foreground sm:block">
                View Plan
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* floating accent cards */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, delay: 0.5 }}
        className="absolute -left-4 -top-4 hidden rounded-xl border border-border bg-white px-3 py-2 shadow-lg sm:block"
      >
        <p className="text-[10px] text-muted-foreground">Study Streak</p>
        <p className="text-sm font-bold text-foreground">🔥 16 days</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, ease: 'easeInOut', repeat: Infinity, delay: 0.2 }}
        className="absolute -bottom-5 -right-3 hidden rounded-xl border border-border bg-white px-3 py-2 shadow-lg sm:block"
      >
        <p className="text-[10px] text-muted-foreground">Overall Progress</p>
        <p className="text-sm font-bold text-primary">68% Complete</p>
      </motion.div>
    </motion.div>
  )
}
