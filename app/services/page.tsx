"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Search, X } from "lucide-react";
import { useState, useMemo } from "react";
import Image from "next/image";

const categories = [
  {
    id: "ai-solutions",
    label: "01",
    title: "AI Solutions",
    lead: "Intelligent systems that think, learn, and act — turning raw data into competitive advantage.",
    services: [
      {
        title: "Full Stack AI Development",
        desc: "End-to-end AI-powered applications built on modern frameworks",
        how: "We build custom interfaces that embed intelligence into your team's daily tools to automate complex tasks."
      },
      {
        title: "AI Agents",
        desc: "Autonomous agents that handle complex, multi-step business tasks",
        how: "We design self-correcting agents that work 24/7, reducing manual intervention in support and operations."
      },
      {
        title: "AI Chatbot",
        desc: "Advanced conversational AI with natural language understanding",
        how: "We train models on your proprietary company data to instantly resolve up to 80% of customer queries."
      },
      {
        title: "AI Websites & Software",
        desc: "Intelligent web and desktop solutions infused with ML",
        how: "We optimize customer touchpoints by integrating predictive features directly into your core user experience."
      },
      {
        title: "AI Mobile Apps",
        desc: "Smart mobile applications with on-device AI capabilities",
        how: "We deliver pocket-sized intelligence that keeps users engaged with personalized suggestions."
      },
      {
        title: "AI Integrations",
        desc: "Seamless AI integration into your existing tech stack",
        how: "We link legacy systems with modern intelligence to eliminate duplicate data entry and manual sync work."
      },
      {
        title: "AI Technology Consulting",
        desc: "Strategic guidance for your AI transformation roadmap",
        how: "We analyze workflows, identify high-yield automation opportunities, and build execution frameworks."
      },
      {
        title: "Rules Based Chatbot",
        desc: "Reliable, deterministic automation for support workflows",
        how: "We script structured flows that capture leads, route issues, and ensure strict compliance."
      },
    ],
  },
  {
    id: "full-stack",
    label: "02",
    title: "Full Stack Development",
    lead: "Modern, scalable digital foundations — from pixel-perfect frontends to bulletproof backends.",
    services: [
      {
        title: "Full Stack Web Apps",
        desc: "Production-grade web applications with modern architecture",
        how: "We deliver fast, responsive platforms designed to scale seamlessly as your customer base expands."
      },
      {
        title: "Automations & Agents",
        desc: "Process automation and intelligent workflow orchestration",
        how: "We replace repetitive tasks with instant event triggers, reducing operational errors and overhead."
      },
      {
        title: "APIs & Integrations",
        desc: "Robust REST/GraphQL APIs and third-party integrations",
        how: "We build highly secure bridges between software tools to synchronize your data in real-time."
      },
      {
        title: "Databases",
        desc: "Efficient database design, optimization, and migration",
        how: "We structure and secure your data storage to optimize search speed, reliability, and business analysis."
      },
    ],
  },
  {
    id: "maintenance",
    label: "03",
    title: "Website Maintenance",
    lead: "Keep your digital presence flawless — ongoing care, optimization, and continuous improvement.",
    services: [
      {
        title: "Website Customization",
        desc: "Tailored modifications and feature enhancements",
        how: "We implement direct feature updates that align your online presence with evolving business requirements."
      },
      {
        title: "Bug Fixes",
        desc: "Fast and reliable issue resolution with root-cause analysis",
        how: "We resolve errors quickly and implement preventative measures to ensure maximum platform uptime."
      },
      {
        title: "Backup & Migration",
        desc: "Secure data backup and zero-downtime migration",
        how: "We run continuous server syncs to protect user data and ensure absolute zero business disruption."
      },
      {
        title: "Speed Optimization",
        desc: "Performance tuning for sub-second loading times",
        how: "We optimize assets and load times to increase search rankings and maximize conversion rates."
      },
    ],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const ServiceRow = ({ service, index }: { service: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group border-t border-border/60 last:border-b transition-all duration-300 hover:bg-neutral-50 px-6 -mx-6"
    >
      <div className="flex items-start sm:items-center justify-between gap-4 py-6 md:py-7">
        <div className="flex items-start sm:items-center gap-4 md:gap-6 flex-1 min-w-0">
          <span className="text-xs font-mono text-muted-foreground/40 group-hover:text-amber-500 transition-colors duration-300 pt-1 sm:pt-0 w-6 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0 flex-1 relative overflow-hidden">
            <h3 className="text-lg md:text-xl font-medium text-foreground group-hover:text-foreground transition-colors duration-300">
              {service.title}
            </h3>
            <div className="relative mt-1 min-h-[20px] py-2 overflow-hidden">
              <motion.p
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? -20 : 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm text-muted-foreground/75 font-light"
              >
                {service.desc}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 text-sm font-light flex items-center"
              >
                <span className="text-black/60 font-light mr-1.5">Impact:</span>
                <span className="text-amber-600">{service.how}</span>
              </motion.p>
            </div>
          </div>
        </div>
        <ArrowUpRight
          size={18}
          className="text-muted-foreground/30 group-hover:text-amber-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 mt-1 sm:mt-0"
        />
      </div>
    </motion.div>
  );
};

export default function ServicesPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return categories;
    return categories
      .map((cat) => ({
        ...cat,
        services: cat.services.filter(
          (s) =>
            s.title.toLowerCase().includes(q) ||
            s.desc.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.services.length > 0);
  }, [query]);

  const totalResults = filtered.reduce((acc, cat) => acc + cat.services.length, 0);
  const isSearching = query.trim().length > 0;

  return (
    <>
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070"
          alt="Technology infrastructure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28 pt-40">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              custom={0}
              variants={fadeIn}
              className="text-sm font-medium tracking-[0.2em] uppercase text-white/40 mb-6"
            >
              Our Services
            </motion.p>

            <motion.h1
              custom={1}
              variants={fadeIn}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] max-w-4xl text-white"
            >
              Build systems that
              <span className="text-amber-500"> think</span>,
              <span className="text-amber-500"> act</span>, and
              <span className="text-amber-500"> scale</span>
            </motion.h1>

            <motion.div
              custom={2}
              variants={{
                hidden: { scaleX: 0 },
                visible: {
                  scaleX: 1,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
                },
              }}
              className="w-24 h-px bg-amber-500 mt-10 mb-8 origin-left"
            />

            <motion.p
              custom={3}
              variants={fadeIn}
              className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed font-light"
            >
              From intelligent AI systems to rock-solid development and ongoing maintenance — we engineer digital excellence.
            </motion.p>

            <motion.div custom={4} variants={fadeIn} className="mt-10">
              <Link
                href="#services"
                className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white/70 hover:text-amber-500 transition-colors"
              >
                Explore capabilities
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <div id="services" className="bg-background  sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="relative flex items-center gap-3">
            <Search size={15} className="absolute left-4 text-muted-foreground/40 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services…"
              className="w-full pl-10 pr-10 py-2.5 text-sm bg-transparent border border-border/60 rounded-[6px] text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-border transition-colors duration-150"
            />
            {isSearching && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 text-muted-foreground/40 hover:text-foreground transition-colors"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
          <AnimatePresence>
            {isSearching && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="mt-2 text-xs text-muted-foreground/50 font-mono"
              >
                {totalResults === 0
                  ? "No services found"
                  : `${totalResults} service${totalResults === 1 ? "" : "s"} found`}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="bg-background">
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto px-6 md:px-12 py-28 text-center"
            >
              <p className="text-muted-foreground/50 text-sm font-light">
                No services match &ldquo;{query}&rdquo;
              </p>
            </motion.div>
          ) : (
            <motion.div key="results">
              {filtered.map((category) => (
                <section key={category.id} className="">
                  <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-80px" }}
                      variants={stagger}
                      className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-16 border-b border-border/40 pb-8"
                    >
                      <div className="flex-1">
                        <motion.span
                          custom={0}
                          variants={fadeIn}
                          className="text-xs font-mono tracking-[0.25em] uppercase text-muted-foreground/50"
                        >
                          {category.label}
                        </motion.span>
                        <motion.h2
                          custom={1}
                          variants={fadeIn}
                          className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]"
                        >
                          {category.title}
                        </motion.h2>
                      </div>

                      {!isSearching && (
                        <div className="flex-1 md:max-w-md">
                          <motion.p
                            custom={2}
                            variants={fadeIn}
                            className="text-base md:text-lg text-muted-foreground leading-relaxed font-light"
                          >
                            {category.lead}
                          </motion.p>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-20 md:pb-28">
                    <AnimatePresence>
                      {category.services.map((service, i) => (
                        <ServiceRow key={service.title} service={service} index={i} />
                      ))}
                    </AnimatePresence>
                  </div>
                </section>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <section className="py-28 md:py-36 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              custom={0}
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Want to Know how we help businesses to
              <span className="text-amber-500"> grow ?</span>?
            </motion.h2>

            <motion.p
              custom={1}
              variants={fadeIn}
              className="mt-6 text-lg md:text-xl text-background/50 max-w-lg mx-auto font-light"
            >
              Let's discuss your business and talk about what can AI bring in to your workload
            </motion.p>

            <motion.div
              custom={2}
              variants={fadeIn}
              className="mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-4"
            >
              <Link
                href="https://calendly.com/freelance-aitr/30min"
                target="_blank"
                className="inline-flex items-center justify-center gap-3 bg-amber-500 text-neutral-900 px-8 py-4 text-base font-semibold hover:bg-amber-400 transition-colors"
              >
                Book a discovery call
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-3 border border-background/20 px-8 py-4 text-base font-medium hover:bg-background/5 transition-colors"
              >
                See our work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}