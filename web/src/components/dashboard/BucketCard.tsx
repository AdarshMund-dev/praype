import { motion } from 'framer-motion'
import { MoreHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'

export type Bucket = {
  name: string
  icon: React.ReactNode
  iconClassName: string
  done: number
  total: number
  percent: number
  barColor: string
}

export default function BucketCard({
  bucket,
  index,
}: {
  bucket: Bucket
  index: number
}) {
  const { name, icon, iconClassName, done, total, percent, barColor } = bucket

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <span
          className={cn(
            'flex h-11 w-11 items-center justify-center rounded-xl',
            iconClassName
          )}
        >
          {icon}
        </span>
        <button
          type="button"
          className="text-muted-foreground transition-colors hover:text-foreground"
          aria-label={`${name} options`}
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      <h3 className="mt-4 text-base font-semibold text-foreground">{name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {done} / {total} topics
      </p>

      <div className="mt-4 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
          <div
            className={cn('h-full rounded-full', barColor)}
            style={{ width: `${percent}%` }}
          />
        </div>
        <span className="text-xs font-semibold text-muted-foreground">
          {percent}%
        </span>
      </div>
    </motion.div>
  )
}
