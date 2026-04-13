'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretLeft, CaretRight, Quotes } from '@phosphor-icons/react';
const TESTIMONIALS = [
  {
    quote: "HAT delivered a stunning website for HMK Interiors that works flawlessly across all devices. They understood our vision perfectly and helped us increase client inquiries significantly.",
    name: "Shaheer Ahmed",
    title: "Owner HMK Interiors",
    company: "HMK Interiors",
  },
  {
    quote: "Working with HAT completely transformed how we deliver education at Brainwave Academy. Their AI solutions made our platform more engaging and improved student retention.",
    name: "Usama Khan",
    title: "Teacher at Brainwave Academy",
    company: "Brainwave Academy",
  },
  {
    quote: "HAT built Verve AI Interviewer with incredible precision and attention to detail. The platform delivers accurate feedback and has saved our team a lot of time.",
    name: "Talha Rehman",
    title: "CMO Klyver AI",
    company: "Klyver AI",
  },
  {
    quote: "HAT turned Astrax into a powerful AI-driven platform with a premium feel. Their work significantly improved engagement and overall user experience.",
    name: "Fatima Khan",
    title: "Content Director",
    company: "Astrax Media",
  },
];
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="px-6 py-20 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-md">
            Don’t just take our word for it
          </p>
        </div>
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 ">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="border border-border bg-card p-8 hover:bg-amber-50 dark:hover:bg-amber-950 transition-all duration-300 group"
            >
              <Quotes size={32} className="text-amber-500 mb-6 opacity-70" />

              <p className="text-[15px] leading-relaxed text-foreground/90 mb-8 italic">
                “{t.quote}”
              </p>

              <div className="flex items-center gap-4">
                <div className="h-11 w-11 flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-background font-bold text-xl shadow-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-base group-hover:text-amber-600 transition-colors">
                    {t.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{t.title}</p>
                  <p className="text-xs text-muted-foreground/80">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="border border-border bg-card p-8 "
              >
                <Quotes size={32} className="text-amber-500 mb-6 opacity-70" />

                <p className="text-[15px] leading-relaxed text-foreground/90 mb-8 italic">
                  “{TESTIMONIALS[currentIndex].quote}”
                </p>

                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white font-bold text-xl shadow-sm">
                    {TESTIMONIALS[currentIndex].name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-base">
                      {TESTIMONIALS[currentIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {TESTIMONIALS[currentIndex].title}
                    </p>
                    <p className="text-xs text-muted-foreground/80">
                      {TESTIMONIALS[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-border hover:bg-amber-50 hover:border-amber-200 transition-all active:scale-95"
              aria-label="Previous testimonial"
            >
              <CaretLeft size={24} weight="bold" />
            </button>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-border hover:bg-amber-50 hover:border-amber-200 transition-all active:scale-95"
              aria-label="Next testimonial"
            >
              <CaretRight size={24} weight="bold" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'bg-amber-600 w-6'
                    : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;