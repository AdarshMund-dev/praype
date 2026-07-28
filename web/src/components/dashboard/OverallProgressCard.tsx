import { ArrowRight } from 'lucide-react'

function CircularProgress({ percent }: { percent: number }) {
  const radius = 46
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percent / 100) * circumference

  return (
    <svg width="140" height="140" viewBox="0 0 120 120">
      <g transform="rotate(-90 60 60)">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#EEF2FF"
          strokeWidth="10"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#6366F1"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </g>
      <text
        x="60"
        y="57"
        textAnchor="middle"
        fontSize="26"
        fontWeight="700"
        fill="#111827"
      >
        {percent}%
      </text>
      <text x="60" y="76" textAnchor="middle" fontSize="10" fill="#6B7280">
        Overall Completion
      </text>
    </svg>
  )
}

export default function OverallProgressCard() {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <h3 className="text-sm font-semibold text-foreground">
        Overall Progress
      </h3>
      <div className="mt-4 flex justify-center">
        <CircularProgress percent={48} />
      </div>
      <p className="mt-2 text-center text-sm text-muted-foreground">
        260 / 540 topics completed
      </p>
      <button
        type="button"
        className="mt-4 flex w-full items-center justify-center gap-1.5 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
      >
        View detailed stats
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}
