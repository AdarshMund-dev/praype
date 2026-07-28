import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTASection() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:py-24 xl:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center gap-6 rounded-3xl bg-primary px-6 py-16 text-center shadow-xl sm:px-12 md:py-20"
      >
        <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl">
          Start Preparing Smarter Today
        </h2>
        <p className="max-w-xl text-base text-primary-foreground/80 sm:text-lg">
          Everything you need to stay consistent and interview-ready.
        </p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="gap-2 rounded-full px-8 text-base transition-transform hover:scale-105"
          >
            <Link to="/signup">
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-primary-foreground/30 bg-transparent px-8 text-base text-primary-foreground transition-transform hover:scale-105 hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
