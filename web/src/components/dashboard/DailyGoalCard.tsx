import { Target } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DailyGoalCard() {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
          <Target className="h-5 w-5" />
        </span>
        <div>
          <p className="font-semibold text-foreground">Daily Goal</p>
          <p className="text-sm text-muted-foreground">
            Great! You're on track to achieve your daily goal.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-foreground">
            3 / 5 topics
          </span>
          <div className="h-2 w-32 overflow-hidden rounded-full bg-white sm:w-40">
            <div className="h-full w-[60%] rounded-full bg-indigo-500" />
          </div>
        </div>
        <Button
          variant="outline"
          className="shrink-0 rounded-lg border-indigo-200 bg-white text-foreground hover:bg-indigo-50"
        >
          View Plan
        </Button>
      </div>
    </div>
  )
}
