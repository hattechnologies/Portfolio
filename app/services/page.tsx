"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const categories = [
  {
    id: "ai-solutions",
    title: "AI Solutions",
    subtitle: "Intelligent systems that think, learn, and act",
    description:
      "Transform your business with cutting-edge artificial intelligence. From custom AI agents to intelligent automation.",
    bannerImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070",
    services: [
      { title: "Full Stack AI Development", desc: "End-to-end AI-powered applications" },
      { title: "AI Websites & Software", desc: "Intelligent web and desktop solutions" },
      { title: "AI Mobile Apps", desc: "Smart mobile applications with AI capabilities" },
      { title: "AI Integrations", desc: "Seamless AI integration into existing systems" },
      { title: "AI Agents", desc: "Autonomous AI agents for complex tasks" },
      { title: "AI Technology Consulting", desc: "Strategic guidance for AI transformation" },
      { title: "AI Chatbot", desc: "Advanced conversational AI solutions" },
      { title: "Rules Based Chatbot", desc: "Reliable rule-based automation chatbots" },
    ],
  },
  {
    id: "full-stack",
    title: "Full Stack Development",
    subtitle: "Modern, scalable digital foundations",
    description:
      "Robust web applications, APIs, and backend systems that power your business.",
    bannerImage: "https://images.pexels.com/photos/4657257/pexels-photo-4657257.jpeg",
    services: [
      { title: "Full Stack Web Apps", desc: "Modern, scalable web applications" },
      { title: "Automations & Agents", desc: "Process automation and intelligent agents" },
      { title: "APIs & Integrations", desc: "Robust APIs and third-party integrations" },
      { title: "Databases", desc: "Efficient database design and optimization" },
    ],
  },
  {
    id: "maintenance",
    title: "Website Maintenance",
    subtitle: "Keep your digital presence flawless",
    description:
      "Ongoing care, optimization, and improvements to ensure your website performs at its best.",
    bannerImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",
    services: [
      { title: "Website Customization", desc: "Tailored modifications and enhancements" },
      { title: "Bug Fixes", desc: "Fast and reliable issue resolution" },
      { title: "Backup & Migration", desc: "Secure data backup and seamless migration" },
      { title: "Speed Optimization", desc: "Performance tuning and faster loading times" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/812867/pexels-photo-812867.jpeg"
          alt="AI & Technology"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-white leading-none">
              Services that
              <span className="block text-amber-500">move you forward</span>
            </h1>
            <p className="mt-6 text-xl text-white/80">
              From intelligent AI systems to rock-solid development and ongoing maintenance.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-3 rounded-none bg-white px-8 py-4 text-lg font-medium text-black hover:bg-amber-500 hover:text-black transition-all"
              >
                Explore our services
                <ArrowRight className="w-5 h-5" />
              </Link>

            </div>
          </motion.div>
        </div>
      </section>
      <div id="services" className="bg-background w-full">
        {categories.map((category, index) => (
          <section
            key={category.id}
            className={`py-20 ${index % 2 === 0 ? "bg-background" : "bg-muted"}`}
          >
            {/* Full screen width banner */}
            <div className="relative  h-96 w-full md:h-[560px]">
              <Image
                src={category.bannerImage}
                alt={category.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              
              <div className="absolute bottom-12 left-6 md:left-12 max-w-md">
                <span className="inline-block px-6 py-3 bg-white text-black text-sm font-medium tracking-widest">
                  {category.subtitle}
                </span>
                <h2 className="mt-6 text-5xl md:text-6xl font-bold tracking-tighter text-white">
                  {category.title}
                </h2>
              </div>
            </div>

            {/* Content area */}
            <div className="max-w-none px-6 md:px-12 pt-16">
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center md:text-left mb-16">
                {category.description}
              </p>

              {/* Horizontal grid - no gaps, no rounded corners, no shadows */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 w-full">
                {category.services.map((service) => (
                  <motion.div
                    key={service.title}
                    whileHover={{ backgroundColor: "rgb(245 245 245)" }}
                    className="group border border-border bg-card p-8 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-amber-500 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-2xl group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="py-24 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold tracking-tighter">
            Ready to transform your business?
          </h2>
          <p className="mt-6 text-2xl text-background/70">
            Let’s build something extraordinary together.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link
              href="https://calendly.com/freelance-aitr/30min"
              target="_blank"
              className="inline-flex items-center gap-3 rounded-none bg-background px-10 py-6 text-xl font-semibold text-foreground hover:scale-105 transition-transform"
            >
              Book a 30-minute discovery call
              <ArrowRight className="w-6 h-6" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-3 rounded-none border border-white/30 px-10 py-6 text-xl font-medium hover:bg-white/10 transition-all"
            >
              See our recent work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}