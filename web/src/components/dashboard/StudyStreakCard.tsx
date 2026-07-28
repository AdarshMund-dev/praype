import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const WEEK_DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const CHECKED_COUNT = 6

export default function StudyStreakCard() {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <span aria-hidden="true">🔥</span> Study Streak
      </h3>

      <p className="mt-4 text-3xl font-bold text-foreground">16</p>
      <p className="text-sm text-muted-foreground">days in a row</p>

      <div className="mt-5 flex items-center justify-between">
        {WEEK_DAYS.map((day, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5">
            <span
              className={cn(
                'flex h-6 w-6 items-center justify-center rounded-full',
                i < CHECKED_COUNT
                  ? 'bg-green-500 text-white'
                  : 'bg-secondary text-muted-foreground'
              )}
            >
              {i < CHECKED_COUNT && <Check className="h-3.5 w-3.5" />}
            </span>
            <span className="text-[10px] text-muted-foreground">{day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
