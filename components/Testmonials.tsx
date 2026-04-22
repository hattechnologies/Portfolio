'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CaretLeft, CaretRight, Quotes } from '@phosphor-icons/react';

const TESTIMONIALS = [
  {
    quote: "HAT delivered a stunning website for HMK Interiors that works flawlessly across all devices.",
    name: "Shaheer Ahmed",
    title: "Owner HMK Interiors",
    company: "HMK Interiors",
  },
  {
  quote: "Their AI solutions made our platform more engaging and significantly improved student retention.",
  name: "John Matthews",
  title: "Teacher",
  company: "BrightLearn Academy",
},
{
  quote: "The platform delivers accurate feedback and has saved our team a huge amount of time.",
  name: "Emily Carter",
  title: "CMO",
  company: "Klyver AI",
},
{
  quote: "Their work significantly improved engagement and overall user experience across our platform.",
  name: "Sophia Williams",
  title: "Content Director",
  company: "Astrax Media",
},
{
  quote: "Professional, fast, and highly reliable. They delivered beyond our expectations.",
  name: "Michael Anderson",
  title: "Founder",
  company: "NovaTech Solutions",
},
{
  quote: "They understood our business deeply and translated it into a powerful product.",
  name: "Daniel Brown",
  title: "Product Lead",
  company: "ScaleUp Labs",
}
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(4);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateCards();
    window.addEventListener('resize', updateCards);
    return () => window.removeEventListener('resize', updateCards);
  }, []);

  const maxIndex = TESTIMONIALS.length - visibleCards;

  const next = () => {
    if (index < maxIndex) {
      setIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="px-6 py-14 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-md">
            Don’t just take our word for it
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">

          <motion.div
            className="flex"
            animate={{ x: `-${(index * 100) / visibleCards}%` }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-colors border border-border bg-card p-8"
              >
                <Quotes size={32} className="text-amber-500 mb-6 opacity-70" />

                <p className="text-[15px] leading-relaxed text-foreground/90 mb-8 italic">
                  “{t.quote}”
                </p>

                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white font-bold text-xl">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-base">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.title}</p>
                    <p className="text-xs text-muted-foreground/80">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              disabled={index === 0}
              className={`p-3 rounded-full border transition ${
                index === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-amber-50 dark:hover:bg-amber-900/30"
              }`}
            >
              <CaretLeft size={24} weight="bold" />
            </button>

            <button
              onClick={next}
              disabled={index >= maxIndex}
              className={`p-3 rounded-full border transition ${
                index >= maxIndex
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-amber-50 dark:hover:bg-amber-900/30"
              }`}
            >
              <CaretRight size={24} weight="bold" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-amber-600"
                    : "w-2.5 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;