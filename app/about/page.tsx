'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">

      {/* HERO */}
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/4657257/pexels-photo-4657257.jpeg"
          alt="HAT Agency office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-20 md:pb-28 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/40 mb-6">
              About Us
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] max-w-4xl text-white">
              We build the future.{" "}
              <span className="text-amber-500">One intelligent system at a time.</span>
            </h1>

            <div className="w-24 h-px bg-amber-500 mt-10 mb-8" />

            <p className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed font-light">
              HAT is a Pakistan-based digital agency specializing in AI-powered solutions, full-stack development, and modern web experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">

            <div className="md:col-span-5">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Our Story
              </h2>

              <p className="mt-6 text-base sm:text-lg text-muted-foreground">
                Founded in Islamabad, we started with a simple belief: technology should feel human.
                Today, we help businesses build intelligent systems that solve real problems.
              </p>
            </div>

            <div className="md:col-span-7 text-base sm:text-lg leading-relaxed text-muted-foreground">
              From AI agents that automate workflows to high-performance websites,
              every project is crafted with precision and a deep understanding of your goals.
            </div>

          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12 sm:mb-16">
            What drives us
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {['Innovation', 'Clarity', 'Human-Centered Design'].map((value, i) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 sm:p-8 rounded-2xl"
              >
                <div className="text-amber-500 text-4xl sm:text-5xl mb-4">
                  0{i + 1}
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold">
                  {value}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                  We believe great technology should feel effortless and intuitive.
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-16 px-4 md:px-0 sm:py-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">

            <div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">
                Get in touch
              </h2>

              <div className="mt-8 space-y-2">
                <div className="flex items-center gap-3 md:gap-4">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  <Link href="mailto:hat.technologies.info@gmail.com" className="text-sm  sm:text-lg hover:underline ">
                    hat.technologies.info@gmail.com
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-amber-500 text-center px-4">
        <Link
          href="/contact"
          className="inline-flex items-center text-xl sm:text-3xl md:text-4xl font-semibold"
        >
          Ready to work together?
        </Link>
      </section>

    </div>
  );
}