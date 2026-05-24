"use client"

import { motion } from "framer-motion"
import { BackgroundRippleEffect } from './ui/background-ripple-effect'
import DecryptedText from './DecryptedText'
import VapiButton from './VapiButton'
import { Sparkles, Zap, Clock, MessageCircle } from "lucide-react"

const trustBadges = [
  { icon: Zap, text: "Instant Responses" },
  { icon: Clock, text: "24/7 AI Assistance" },
  { icon: MessageCircle, text: "Automated Qualification" },
  { icon: Sparkles, text: "Faster Onboarding" },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full overflow-hidden bg-amber-500 pt-32 pb-16 md:pt-40 md:pb-20 items-end md:items-center">
      <BackgroundRippleEffect cols={60} rows={20} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl px-6 md:px-12 lg:px-20 text-center md:text-left flex flex-col items-center md:items-start"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full bg-foreground/10 backdrop-blur-sm border border-foreground/10"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-medium text-foreground/90 tracking-wide">
            AI Voice Agent — Live Now
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-bold text-foreground text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] max-w-3xl"
        >
          <DecryptedText
            text="Humanizing Automated Technologies"
            animateOn="view"
            revealDirection="start"
            sequential
            useOriginalCharsOnly={true}
            speed={60}
          />
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-xl text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed font-light"
        >
          <span className="hidden sm:inline">
            We build human-like automation that turns complex workflows into simple experiences. Talk with our AI agent and see customer engagement automated in seconds.
          </span>
          <span className="inline sm:hidden">
            Talk with our AI agent now and see customer engagement automated in seconds.
          </span>
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full justify-center md:justify-start"
        >
          <VapiButton variant="inline" label="Talk to AI Assistant" />

          <div className="text-xs sm:text-sm text-foreground/75 font-light text-center md:text-left max-w-xs">
            No signup needed · Get instant answers · Experience AI-powered engagement
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-2.5"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/5 backdrop-blur-sm border border-foreground/10"
            >
              <badge.icon size={13} className="text-foreground/75" />
              <span className="text-xs font-medium text-foreground/80">{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero