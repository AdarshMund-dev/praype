import { motion } from 'framer-motion'
import { BookOpen, Brain, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeatureCard from '@/components/FeatureCard'
import WhySection from '@/components/WhySection'
import PricingCard, { type PricingTier } from '@/components/PricingCard'
import StatsSection from '@/components/StatsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

const FEATURES = [
  {
    icon: BookOpen,
    title: 'Organize Topics',
    description:
      'Create technology buckets and organize every learning topic.',
  },
  {
    icon: CheckCircle2,
    title: 'Track Progress',
    description:
      'Mark completed topics and monitor your learning journey.',
  },
  {
    icon: Brain,
    title: 'AI Interview Prep',
    description:
      'Practice interview questions and improve your confidence.',
  },
]

const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Free',
    price: '₹0',
    period: '/ forever',
    description: 'For getting started with the basics.',
    features: ['3 Buckets', 'Basic progress tracking', 'Community support'],
    buttonLabel: 'Start Free',
  },
  {
    name: 'Pro',
    price: '₹199',
    period: '/ Month',
    description: 'For serious, consistent preparation.',
    features: [
      'Unlimited Buckets',
      'AI-generated interview questions',
      'Advanced analytics',
      'Priority support',
    ],
    buttonLabel: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '₹499',
    period: '/ 3 Months',
    description: 'Best value for long-term prep.',
    features: [
      'Everything in Pro',
      '3 months of access',
      '1-on-1 mentorship session',
      'Priority support',
    ],
    buttonLabel: 'Choose Premium',
  },
]

export default function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      <main>
        <HeroSection />

        <section id="features" className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:py-28 xl:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything You Need To Prepare Smarter
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Manage your interview preparation from one beautiful workspace.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {FEATURES.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </section>

        <WhySection />

        <section id="pricing" className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:py-28 xl:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Choose the plan that fits your interview prep journey.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PRICING_TIERS.map((tier, index) => (
              <PricingCard key={tier.name} tier={tier} index={index} />
            ))}
          </div>
        </section>

        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </motion.div>
  )
}
