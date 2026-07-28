import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Card } from '@/components/ui/card'

const CHECKLIST = [
  'Organized Buckets',
  'Revision Tracking',
  'Interview Questions',
  'Progress Dashboard',
  'Notes',
  'Learning Analytics',
]

const TOP_BUCKETS = [
  { name: 'Core Java', percent: 71, color: 'bg-emerald-500' },
  { name: 'Spring Boot', percent: 50, color: 'bg-amber-400' },
  { name: 'React', percent: 56, color: 'bg-sky-500' },
]

const WEEK = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const STUDY_HOURS = [2.4, 3.1, 2.8, 3.6, 2.2, 3.4, 1.2]

function CircularProgress({ percent }: { percent: number }) {
  const radius = 42
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percent / 100) * circumference

  return (
    <svg width="110" height="110" viewBox="0 0 100 100">
      <g transform="rotate(-90 50 50)">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="var(--color-secondary)"
          strokeWidth="8"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </g>
      <text
        x="50"
        y="55"
        textAnchor="middle"
        fontSize="20"
        fontWeight="700"
        fill="var(--color-foreground)"
      >
        {percent}%
      </text>
    </svg>
  )
}

function IllustrationCard() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
    >
      <Card className="grid grid-cols-1 gap-3 rounded-3xl border-border bg-card p-4 shadow-2xl ring-1 ring-black/5 sm:grid-cols-2 sm:p-5">
        <div className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-border bg-white p-4">
          <p className="self-start text-xs font-semibold text-muted-foreground">
            Overall Progress
          </p>
          <CircularProgress percent={68} />
          <p className="text-xs text-muted-foreground">340 / 500 topics</p>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-4">
          <p className="text-xs font-semibold text-muted-foreground">
            Study Streak
          </p>
          <p className="text-2xl font-bold text-foreground">
            🔥 16 <span className="text-sm font-medium text-muted-foreground">days in a row</span>
          </p>
          <div className="flex items-center justify-between">
            {WEEK.map((day, i) => (
              <span
                key={`${day}-${i}`}
                className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold ${
                  i < 5
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground'
                }`}
              >
                {day}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-4">
          <div className="flex items-baseline justify-between">
            <p className="text-xs font-semibold text-muted-foreground">
              Study Time
            </p>
            <p className="text-xs text-muted-foreground">This Week</p>
          </div>
          <p className="text-2xl font-bold text-foreground">18h 42m</p>
          <div className="flex h-14 items-end justify-between gap-1.5">
            {STUDY_HOURS.map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-full bg-primary/80"
                style={{ height: `${(h / 4) * 100}%` }}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-4">
          <p className="text-xs font-semibold text-muted-foreground">
            Top Buckets
          </p>
          <div className="flex flex-col gap-2.5">
            {TOP_BUCKETS.map((bucket) => (
              <div key={bucket.name}>
                <div className="mb-1 flex items-center justify-between text-[11px]">
                  <span className="font-medium text-foreground">
                    {bucket.name}
                  </span>
                  <span className="text-muted-foreground">
                    {bucket.percent}%
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className={`h-full rounded-full ${bucket.color}`}
                    style={{ width: `${bucket.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default function WhySection() {
  return (
    <section id="about" className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:py-28 xl:px-8">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="order-2 lg:order-1"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Why Praype?
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            A System That Works the Way You Learn
          </h2>

          <ul className="mt-8 flex flex-col gap-4">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-base text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="order-1 lg:order-2"
        >
          <IllustrationCard />
        </motion.div>
      </div>
    </section>
  )
}
