"use client"

import { motion } from "framer-motion"
import VapiButton from "./VapiButton"
import {
  TrendingUp,
  Users,
  DollarSign,
  Headphones,
  Timer,
  ThumbsUp,
} from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Conversions",
    description: "AI voice agents that qualify & convert leads automatically",
  },
  {
    icon: Users,
    title: "Capture Leads 24/7",
    description: "Never miss a prospect — engage visitors around the clock",
  },
  {
    icon: DollarSign,
    title: "Cut Operational Costs",
    description: "Reduce support overhead by up to 60% with intelligent automation",
  },
  {
    icon: Headphones,
    title: "Scale Support Instantly",
    description: "Handle unlimited concurrent conversations without hiring",
  },
  {
    icon: Timer,
    title: "Faster Response Times",
    description: "From minutes to milliseconds — delight every customer",
  },
  {
    icon: ThumbsUp,
    title: "Boost Satisfaction",
    description: "Consistent, accurate, and always-available AI interactions",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

export default function AICtaBanner() {
  return (
    <section className="relative overflow-hidden bg-foreground text-background">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium">
            <TrendingUp size={14} />
            Revenue Accelerator
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Turn Every Visitor Into a{" "}
            <span className="text-amber-500">Revenue Opportunity</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-background/60 leading-relaxed">
            Our AI voice agent engages, qualifies, and converts — so your team can
            focus on closing deals instead of answering the same questions.
          </p>
        </motion.div>

        {/* ─── Benefits Grid ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative p-6  bg-background/[0.04] border border-background/[0.08]
                         hover:bg-background/[0.08] hover:border-amber-500/20
                         transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-xl bg-amber-500/10 text-amber-500
                              group-hover:bg-amber-500/20 transition-colors duration-300">
                <benefit.icon size={20} />
              </div>

              <h3 className="text-lg font-semibold mb-1.5 text-background">
                {benefit.title}
              </h3>
              <p className="text-sm text-background/50 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ─── CTA Strip ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center text-center gap-6 px-4 py-10 md:py-14 rounded-3xl
                     bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent
                     border border-amber-500/15"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-background max-w-xl">
            Ready to See AI in Action?
          </h3>
          <p className="text-background/60 max-w-lg text-sm md:text-base">
            Start a live conversation with our AI voice agent — experience instant
            demo, get answers in real time, and see how automation drives growth.
          </p>

          <VapiButton variant="inline" label="Get Instant Demo" />

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-background/40 mt-2">
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-500" />
              Free to try
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-500" />
              No credit card
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-500" />
              Talk in under 5 seconds
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
