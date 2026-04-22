"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 1500
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function Numbers() {
  return (
    <section className="mx-auto px-4 py-16 text-foreground">
      <div className="mb-16 flex flex-col md:px-8">
        <h2 className="max-w-lg px-2 md:px-0 text-4xl font-bold md:text-5xl">
          Proven impact through
          <span className="text-amber-500"> real results</span>
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-4 md:px-8 text-center">
        <motion.div
          className="col-span-12 md:col-span-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-5xl md:text-6xl font-bold text-foreground">
            <Counter target={123} suffix="+" />
          </h3>
          <p className="mt-2 text-zinc-400">Satisfied Clients</p>
        </motion.div>
        <motion.div
          className="col-span-12 md:col-span-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-5xl md:text-6xl font-bold text-foreground">
            <Counter target={65} suffix="+" />
          </h3>
          <p className="mt-2 text-zinc-400">Projects Delivered</p>
        </motion.div>

        <motion.div
          className="col-span-12 md:col-span-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-5xl md:text-6xl font-bold text-foreground">
            <Counter target={1} suffix="+" />
          </h3>
          <p className="mt-2 text-zinc-400">Years Experience</p>
        </motion.div>

      </div>
    </section>
  )
}