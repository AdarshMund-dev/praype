import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle2, Sparkles } from 'lucide-react'

const HIGHLIGHTS = [
  'Organize every topic in one place',
  'Track progress with smart analytics',
  'Practice with AI-generated questions',
]

function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-lg ${
          light ? 'bg-white text-primary' : 'bg-primary text-primary-foreground'
        }`}
      >
        <Sparkles className="h-4 w-4" />
      </span>
      <span
        className={`text-lg font-bold ${light ? 'text-white' : 'text-foreground'}`}
      >
        Praype
      </span>
    </Link>
  )
}

export default function AuthLayout({
  heading,
  subheading,
  children,
}: {
  heading: string
  subheading: string
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Left branding panel */}
      <div className="relative hidden w-1/2 overflow-hidden bg-primary lg:flex lg:flex-col lg:justify-between lg:p-12">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <Logo light />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-10"
        >
          <h2 className="max-w-md text-3xl font-bold leading-tight text-white xl:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 max-w-sm text-base text-white/80">{subheading}</p>

          <ul className="mt-8 flex flex-col gap-3">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/90">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <p className="relative z-10 text-xs text-white/60">
          © {new Date().getFullYear()} Praype. All Rights Reserved.
        </p>
      </div>

      {/* Right form panel */}
      <div className="flex w-full flex-col justify-center px-6 py-12 sm:px-10 lg:w-1/2 lg:px-16 xl:px-24">
        <div className="mb-10 lg:hidden">
          <Logo />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto w-full max-w-sm"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}
