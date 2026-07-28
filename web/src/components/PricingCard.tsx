import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export type PricingTier = {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  buttonLabel: string
  highlighted?: boolean
}

export default function PricingCard({
  tier,
  index,
}: {
  tier: PricingTier
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <Card
        className={cn(
          'relative flex h-full flex-col gap-6 rounded-3xl border-border p-8 shadow-sm',
          tier.highlighted &&
            'border-primary bg-primary text-primary-foreground shadow-xl'
        )}
      >
        {tier.highlighted && (
          <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-4 py-1 text-background">
            Most Popular
          </Badge>
        )}

        <div>
          <h3
            className={cn(
              'text-lg font-bold',
              !tier.highlighted && 'text-foreground'
            )}
          >
            {tier.name}
          </h3>
          <p
            className={cn(
              'mt-1 text-sm',
              tier.highlighted
                ? 'text-primary-foreground/80'
                : 'text-muted-foreground'
            )}
          >
            {tier.description}
          </p>
        </div>

        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold">{tier.price}</span>
          <span
            className={cn(
              'text-sm',
              tier.highlighted
                ? 'text-primary-foreground/80'
                : 'text-muted-foreground'
            )}
          >
            {tier.period}
          </span>
        </div>

        <ul className="flex flex-1 flex-col gap-3">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm">
              <Check
                className={cn(
                  'mt-0.5 h-4 w-4 shrink-0',
                  tier.highlighted ? 'text-primary-foreground' : 'text-primary'
                )}
              />
              <span
                className={
                  tier.highlighted
                    ? 'text-primary-foreground/90'
                    : 'text-muted-foreground'
                }
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <Button
          asChild
          size="lg"
          variant={tier.highlighted ? 'secondary' : 'default'}
          className="w-full rounded-full transition-transform hover:scale-105"
        >
          <Link to="/signup">{tier.buttonLabel}</Link>
        </Button>
      </Card>
    </motion.div>
  )
}
