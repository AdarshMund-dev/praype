import { ArrowRight, Check, ListChecks } from 'lucide-react'
import { cn } from '@/lib/utils'

type PlanStatus = 'done' | 'progress' | 'pending'

const PLAN_ITEMS: { label: string; status: PlanStatus }[] = [
  { label: 'Core Java – Collections', status: 'done' },
  { label: 'React – Hooks', status: 'done' },
  { label: 'DSA – 3 Questions', status: 'progress' },
  { label: 'System Design – Load Balancer', status: 'pending' },
  { label: 'Interview – Behavioral Qs', status: 'pending' },
]

function StatusMark({ status }: { status: PlanStatus }) {
  if (status === 'done') {
    return (
      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-green-500 text-white">
        <Check className="h-3 w-3" />
      </span>
    )
  }
  if (status === 'progress') {
    return (
      <span className="h-4 w-4 shrink-0 rounded border-2 border-indigo-500 bg-indigo-100" />
    )
  }
  return <span className="h-4 w-4 shrink-0 rounded border-2 border-border" />
}

export default function TodaysPlanCard() {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <ListChecks className="h-4 w-4 text-indigo-600" />
        Today's Plan
      </h3>

      <ul className="mt-4 flex flex-col gap-3">
        {PLAN_ITEMS.map((item) => (
          <li key={item.label} className="flex items-center gap-3 text-sm">
            <StatusMark status={item.status} />
            <span
              className={cn(
                item.status === 'pending'
                  ? 'text-muted-foreground'
                  : 'text-foreground'
              )}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
      >
        View Full Plan
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}
