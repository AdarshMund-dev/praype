import { Quote } from 'lucide-react'

export default function QuoteCard() {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-sky-100 bg-sky-50/60 p-5">
      <Quote className="h-6 w-6 shrink-0 text-sky-400" />
      <div>
        <p className="italic text-foreground">
          "The beautiful thing about learning is that no one can take it away
          from you."
        </p>
        <p className="mt-2 text-sm font-medium text-muted-foreground">
          — B.B. King
        </p>
      </div>
    </div>
  )
}
