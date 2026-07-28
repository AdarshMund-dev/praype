import { motion } from 'framer-motion'
import { useCountUp } from '@/hooks/use-count-up'

type Stat = {
  label: string
  value: number
  suffix: string
}

const STATS: Stat[] = [
  { label: 'Topics Managed', value: 12000, suffix: '+' },
  { label: 'Study Hours', value: 45000, suffix: '+' },
  { label: 'Interview Questions', value: 8500, suffix: '+' },
  { label: 'Completion Rate', value: 94, suffix: '%' },
]

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const { ref, value } = useCountUp(stat.value, 1800)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
      className="rounded-2xl border border-border bg-card px-6 py-10 text-center shadow-sm"
    >
      <p className="text-4xl font-bold text-primary sm:text-5xl">
        {value.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-muted-foreground">
        {stat.label}
      </p>
    </motion.div>
  )
}

export default function StatsSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:py-24 xl:px-8">
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {STATS.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} />
        ))}
      </div>
    </section>
  )
}
