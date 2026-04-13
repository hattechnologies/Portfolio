"use client"

import  { ReactNode } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Services() {
  return (
    <section className="mx-auto px-4 py-16 text-foreground">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg px-2 md:px-0 text-4xl  font-bold md:text-5xl">
          Build systems that think, act, and scale for you
          <span className="text-amber-500"> not just automate</span>
        </h2>

        <Link href="/services">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-foreground px-6 py-3 font-medium whitespace-nowrap text-background shadow-xl transition-colors"
          >
            Explore all solutions
          </motion.button>
        </Link>
      </div>

      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Full Stack AI Development</CardTitle>
          <div className="absolute top-32 right-4 bottom-0 left-4 translate-y-8 rounded-t-2xl bg-gradient-to-br from-zinc-700 to-zinc-800 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-indigo-50">
              End-to-end AI-powered applications
            </span>
          </div>
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>AI Agents</CardTitle>
          <div className="absolute top-32 right-4 bottom-0 left-4 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-500 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-50">
              Autonomous agents that handle complex tasks
            </span>
          </div>
        </BounceCard>
      </div>

      {/* Feature Cards Row 2 */}
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Full Stack Web Apps</CardTitle>
          <div className="absolute top-32 right-4 bottom-0 left-4 translate-y-8 rounded-t-2xl bg-gradient-to-br from-orange-600 to-amber-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-emerald-50">
              Modern, scalable web applications
            </span>
          </div>
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>AI Chatbot</CardTitle>
          <div className="absolute top-32 right-4 bottom-0 left-4 translate-y-8 rounded-t-2xl bg-gradient-to-br from-zinc-700 to-zinc-800 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
              Advanced conversational AI solutions
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
  )
}

const BounceCard = ({
  className,
  children,
}: {
  className: string
  children: ReactNode
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl border border-amber-900/20 p-8 dark:bg-amber-500 ${className}`}
    >
      <Link href="/services">{children}</Link>
    </motion.div>
  )
}

const CardTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  )
}
