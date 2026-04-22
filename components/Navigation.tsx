"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { List, X } from "@phosphor-icons/react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

const navItems = [
  { name: "Services", link: "/services" },
  { name: "Projects", link: "/projects" },
  { name: "About", link: "/about" },
];

export function Navigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  const height = useTransform(scrollY, [0, 80], [68, 56]);

  const width = useTransform(
    scrollY,
    [0, 80],
    ["min(1100px, calc(100vw - 32px))", "min(780px, calc(100vw - 32px))"]
  );

  const padX = useTransform(scrollY, [0, 80], [28, 20]);

  const shadow = useTransform(
    scrollY,
    [0, 80],
    [
      "0 1px 0 0 hsl(var(--border) / 0.3)",
      "0 10px 30px hsl(0 0% 0% / 0.18), 0 0 0 1px hsl(var(--border) / 0.5)",
    ]
  );

  const borderRad = 9999;
  const navTop = 14;
  const logoMarkRad = useTransform(scrollY, [0, 80], [8, 9999]);

  const hoverItem = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.05,
      y: -2,
      transition: { type: "spring" as const, stiffness: 400, damping: 17 },
    },
  };

  const hoverButton = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.06,
      y: -2,
      transition: { type: "spring" as const, stiffness: 350, damping: 15 },
    },
    tap: { scale: 0.96 },
  };

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.nav
        style={{
          height,
          width,
          borderRadius: borderRad,
          top: navTop,
          paddingLeft: padX,
          paddingRight: padX,
          boxShadow: shadow,
          left: "50%",
          x: "-50%",
        }}
        className="fixed z-50 flex items-center justify-between
                   bg-background/90 backdrop-blur-2xl
                   border border-border/40"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.60, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href="/"
          className="flex items-center font-bold text-lg tracking-tight
                     shrink-0 no-underline text-foreground"
        >
          <motion.div
            style={{ borderRadius: logoMarkRad }}
            className="flex items-center text-2xl tracking-wide justify-center shrink-0"
          >
            HAT
          </motion.div>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={hoverItem}
            >
              <Link
                href={item.link}
                className=" tracking-wide text-foreground hover:text-foreground
                           px-7 py-2 rounded-full font-light transition-colors duration-200 hover:bg-accent"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
         
        </div>

        <div className="hidden md:flex items-center gap-2 shrink-0">
              <InteractiveHoverButton className="border-none">
              <Link href="https://calendly.com/freelance-aitr/30min" className="" target="_blank">Book a call</Link>
              </InteractiveHoverButton>
               <div className="flex items-center justify-center h-10 w-10 bg-amber-400 hover:bg-amber-600 dark:text-black dark:bg-amber-600  rounded-full hover:bg-accent transition">
    <AnimatedThemeToggler />
  </div>
        </div>

        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden p-2 rounded-lg text-foreground
                         hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? (
                <X size={22} weight="bold" />
              ) : (
                <List size={22} weight="bold" />
              )}
            </button>
          </SheetTrigger>

          <SheetContent
            side="bottom"
            className="pt-20 pb-10 px-8 flex flex-col gap-0 h-screen
                       bg-background/97 backdrop-blur-2xl border-none"
          >
            <SheetTitle />

            <nav className="flex flex-col">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.4,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={item.link}
                    onClick={() => setIsMobileOpen(false)}
                    className="block text-4xl font-bold tracking-tight
                               text-foreground hover:text-foreground/80 px-5
                               py-5 transition-colors no-underline"
                  >
                    {item.name}
                  </Link>
                  <Separator className="opacity-40" />
                </motion.div>
              ))}
               <div className="flex items-center justify-center h-10 w-full  font-light rounded-full hover:bg-accent transition">
                <div className="flex items-center justify-center w-10 h-10 dark:text-black rounded-full bg-amber-400">
                <AnimatedThemeToggler />
                </div>
  </div>
            </nav>

            <motion.div
              className="mt-auto flex flex-col gap-3 pt-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.35 }}
            >
              <Button
                className="w-full h-14 p-5 text-base rounded-full"
                onClick={() => setIsMobileOpen(false)}
                asChild
              >
                <Link href="https://calendly.com/freelance-aitr/30min" target="_blank">Book a call</Link>
              </Button>
              
            </motion.div>
          </SheetContent>
        </Sheet>
      </motion.nav>
    </>
  );
}