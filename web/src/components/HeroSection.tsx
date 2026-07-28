import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import DashboardPreview from '@/components/DashboardPreview'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 px-5 py-16 sm:px-6 md:py-20 lg:min-h-[calc(100vh-72px)] lg:flex-row lg:justify-between lg:gap-8 lg:py-0 xl:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left"
      >
        <Badge
          variant="secondary"
          className="mb-6 gap-1.5 rounded-full bg-accent px-4 py-1.5 text-accent-foreground"
        >
          <Sparkles className="h-3.5 w-3.5" />
          AI Powered Learning Platform
        </Badge>

        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Master Your Interview Preparation
        </h1>

        <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
          Organize your learning, track every topic, revise smarter, and stay
          interview-ready with Praype.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="gap-2 rounded-full px-8 text-base transition-transform hover:scale-105"
          >
            <Link to="/signup">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="gap-2 rounded-full px-8 text-base transition-transform hover:scale-105"
          >
            <a href="#features">
              <Play className="h-4 w-4" />
              Learn More
            </a>
          </Button>
        </div>
      </motion.div>

      <div className="w-full lg:w-1/2">
        <DashboardPreview />
      </div>
    </section>
  )
}
