import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

type FeatureCardProps = {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      whileHover={{ y: -6 }}
    >
      <Card className="h-full rounded-2xl border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
        <CardContent className="flex flex-col gap-4 px-7 py-2">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
            <Icon className="h-6 w-6" />
          </span>
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
