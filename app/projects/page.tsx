'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LinkIcon, GithubLogoIcon } from '@phosphor-icons/react';
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect';

const PROJECTS = [
  {
    title: "HMK Interiors",
    description: "Full Stack Interior Design Website with admin dashboard. Built using Next.js, Prisma, and Postgres.",
    image: "https://ik.imagekit.io/j6ucmu8pi/hmk.png",
    live: "https://hmkinteriors.com",
    github: "",
    alt: "HMK Interiors Preview",
  },
  {
    title: "Brainwave Academy",
    description: "Learn smarter with Brain Waves’ AI-powered courses. Built using Next.js, Vapi, Prisma, and Postgres.",
    image: "https://ik.imagekit.io/j6ucmu8pi/brainwaves.jpeg",
    live: "https://brainwavezs.vercel.app",
    github: "https://github.com/AliAbdullah0/AI-Voice-Instructor-For-Studying",
    alt: "Brainwave Academy Preview",
  },
  {
    title: "AirWhite | Flight Reservation",
    description: "Real World Flight Reservation System with smooth UX using Tailwind CSS and Shadcn UI.",
    image: "https://ik.imagekit.io/j6ucmu8pi/airwhite.jpeg",
    live: "https://airwhite.vercel.app/",
    github: "https://github.com/AliAbdullah0/Flight-Reservation-System-with-Next.js-and-Neon-DB",
    alt: "AirWhite Flight Reservation Preview",
  },
  {
    title: "Verve AI Interviewer",
    description: "Create mock interviews and practice them using AI. Built with Next.js, Tailwind CSS, and Vapi AI.",
    image: "https://ik.imagekit.io/j6ucmu8pi/vervezz.jpeg",
    live: "https://vervez.vercel.app",
    github: "https://github.com/AliAbdullah0/AI-Mock-Interviewer",
    alt: "Verve AI Interviewer Preview",
  },
  {
    title: "Astrax | Personal Blog",
    description: "AI-powered blogging platform with PostgreSQL, Next.js, and Prisma. Features Chatbot integration.",
    image: "https://ik.imagekit.io/j6ucmu8pi/astrax.png",
    live: "https://astrax.vercel.app",
    github: "https://github.com/AliAbdullah0/PersonalBlogWithRAG-AI",
    alt: "Astrax Blog Preview",
  },
];

const AI_PROJECTS = [
  {
    title: "Full-Stack Workspace Agent",
    description: "Engineered a stateful AI agent using LangGraph with both parallel and sequential execution paths, enabling complex workflow orchestration. Integrated Human-in-the-Loop confirmation flows to ensure safe and controlled automation of Google Workspace operations. Developed a Vue 3 frontend with a RESTful FastAPI backend, real-time SSE streaming (<400ms latency), OAuth2 authentication with token caching, and Redis-backed rate limiting.",
  },
  {
    title: "Modular RAG Pipeline",
    description: "Architected a 4-stage modular RAG pipeline (Pre-retrieval → Indexing → Retrieval → Post-retrieval) using LlamaIndex, Qdrant, and FalkorDB. Fully configurable via YAML registry for rapid experimentation. Benchmarked on HotpotQA dataset achieving 0.72 faithfulness score (RAGAS). Integrated LangFuse for full observability and evaluation tracking.",
  },
  {
    title: "Fine-Tuned Llama 3 via QLoRA",
    description: "Performed Supervised Fine-Tuning (SFT) on Llama 3.1-8B using QLoRA. Reduced VRAM consumption by ~70% on RTX A4000 while boosting training efficiency. Structured raw clinical datasets into standardized chat templates for evidence-based mental health responses. Exported adapters to GGUF format for Ollama deployment (~74 tokens/sec offline inference).",
  },
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const visibleProjects = PROJECTS.slice(0, visibleCount);
  const hasMore = visibleCount < PROJECTS.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, PROJECTS.length));
  };

  return (
    <div className="min-h-screen text-foreground bg-background">
      {/* Hero Section - Spacious & Modern */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-amber-500">
        <BackgroundRippleEffect rows={16} />
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black leading-none"
          >
            Our <span className="text-white">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-2xl text-black/80 max-w-2xl mx-auto"
          >
            Real results. Real impact. From AI-powered platforms to enterprise-grade solutions.
          </motion.p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-black/60 text-sm tracking-widest"
          >
            SCROLL TO EXPLORE
          </motion.div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="space-y-32">
          {visibleProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                {/* Image */}
                <div className={`${isEven ? '' : 'md:order-2'}`}>
                  <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl aspect-video md:aspect-[16/10] group">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={index < 2}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${isEven ? '' : 'md:order-1'} space-y-8`}>
                  <h2 className="text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
                    {project.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-3xl font-medium transition-all"
                      >
                        View Live
                        <LinkIcon className="w-5 h-5" />
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="inline-flex items-center gap-3 border border-border hover:bg-accent px-8 py-4 rounded-3xl font-medium transition-all"
                      >
                        <GithubLogoIcon className="w-5 h-5" />
                        GitHub
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        {hasMore && (
          <div className="flex justify-center mt-24">
            <button
              onClick={loadMore}
              className="px-12 py-6 bg-foreground text-background rounded-3xl text-lg font-semibold flex items-center gap-3 hover:scale-105 active:scale-95 transition-all"
            >
              Load More Projects
              <span className="text-xl">↓</span>
            </button>
          </div>
        )}
      </div>

      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/6804098/pexels-photo-6804098.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/70" />
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-none"
          >
            AI <span className="text-amber-400">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-2xl text-white/90 max-w-2xl mx-auto"
          >
            Pushing the frontiers of artificial intelligence with production-grade systems and research-driven innovation.
          </motion.p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 text-sm tracking-widest"
          >
            DISCOVER AI INNOVATIONS
          </motion.div>
        </div>
      </div>
      <div className="max-w-8xl mx-auto px-6 py-24">
        <div className="space-y-32">
          {AI_PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto"
            >
              <div className="space-y-8 border-l-4 border-amber-400 pl-8">
                <h2 className="text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
                  {project.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;