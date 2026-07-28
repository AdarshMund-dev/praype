import { useState } from 'react'
import {
  Braces,
  Brain,
  Cloud,
  Coffee,
  Container,
  Leaf,
  Network,
  Orbit,
  Plus,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import DashboardSidebar from '@/components/dashboard/Sidebar'
import DashboardTopbar from '@/components/dashboard/Topbar'
import BucketCard, { type Bucket } from '@/components/dashboard/BucketCard'
import DailyGoalCard from '@/components/dashboard/DailyGoalCard'
import QuoteCard from '@/components/dashboard/QuoteCard'
import OverallProgressCard from '@/components/dashboard/OverallProgressCard'
import StudyStreakCard from '@/components/dashboard/StudyStreakCard'
import TodaysPlanCard from '@/components/dashboard/TodaysPlanCard'

const BUCKETS: Bucket[] = [
  {
    name: 'Core Java',
    icon: <Coffee className="h-5 w-5" />,
    iconClassName: 'bg-indigo-50 text-indigo-600',
    done: 48,
    total: 68,
    percent: 71,
    barColor: 'bg-indigo-500',
  },
  {
    name: 'Spring Boot',
    icon: <Leaf className="h-5 w-5" />,
    iconClassName: 'bg-emerald-50 text-emerald-600',
    done: 26,
    total: 52,
    percent: 50,
    barColor: 'bg-emerald-500',
  },
  {
    name: 'React',
    icon: <Orbit className="h-5 w-5" />,
    iconClassName: 'bg-sky-50 text-sky-600',
    done: 34,
    total: 60,
    percent: 56,
    barColor: 'bg-sky-500',
  },
  {
    name: 'JavaScript',
    icon: <span className="text-xs font-bold">JS</span>,
    iconClassName: 'bg-amber-50 text-amber-600',
    done: 20,
    total: 55,
    percent: 36,
    barColor: 'bg-amber-400',
  },
  {
    name: 'Data Structures',
    icon: <Braces className="h-5 w-5" />,
    iconClassName: 'bg-orange-50 text-orange-600',
    done: 18,
    total: 40,
    percent: 45,
    barColor: 'bg-orange-500',
  },
  {
    name: 'System Design',
    icon: <Network className="h-5 w-5" />,
    iconClassName: 'bg-violet-50 text-violet-600',
    done: 12,
    total: 45,
    percent: 27,
    barColor: 'bg-violet-500',
  },
  {
    name: 'AWS',
    icon: <Cloud className="h-5 w-5" />,
    iconClassName: 'bg-rose-50 text-rose-600',
    done: 16,
    total: 35,
    percent: 46,
    barColor: 'bg-rose-500',
  },
  {
    name: 'Docker',
    icon: <Container className="h-5 w-5" />,
    iconClassName: 'bg-cyan-50 text-cyan-600',
    done: 10,
    total: 25,
    percent: 40,
    barColor: 'bg-cyan-500',
  },
  {
    name: 'Interview Prep',
    icon: <Brain className="h-5 w-5" />,
    iconClassName: 'bg-green-50 text-green-600',
    done: 22,
    total: 80,
    percent: 27,
    barColor: 'bg-green-500',
  },
]

export default function DashboardPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-[#FAFAFB]">
      <aside className="hidden w-[260px] shrink-0 border-r border-border lg:block">
        <DashboardSidebar />
      </aside>

      <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
        <SheetContent side="left" className="w-[280px] p-0">
          <DashboardSidebar onNavigate={() => setMobileNavOpen(false)} />
        </SheetContent>
      </Sheet>

      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardTopbar onMenuClick={() => setMobileNavOpen(true)} />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-6">
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                Good Morning, Adarsh! 👋
              </h1>
              <p className="mt-1 text-muted-foreground">
                Let's continue your learning journey.
              </p>

              <div className="mt-8 flex items-center justify-between">
                <h2 className="text-lg font-bold text-foreground">
                  Your Buckets
                </h2>
                <Button className="gap-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700">
                  <Plus className="h-4 w-4" />
                  New Bucket
                </Button>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {BUCKETS.map((bucket, index) => (
                  <BucketCard key={bucket.name} bucket={bucket} index={index} />
                ))}
              </div>

              <div className="mt-6">
                <DailyGoalCard />
              </div>

              <div className="mt-6">
                <QuoteCard />
              </div>
            </div>

            <div className="flex w-full flex-col gap-6 lg:w-[320px] lg:shrink-0">
              <OverallProgressCard />
              <StudyStreakCard />
              <TodaysPlanCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
