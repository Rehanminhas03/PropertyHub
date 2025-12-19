"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  IconTargetArrow,
  IconRobot,
  IconChartBar,
  IconUsers,
  IconClock,
  IconShieldCheck,
  IconArrowRight,
} from "@tabler/icons-react";

const benefits = [
  {
    icon: IconTargetArrow,
    badge: "Leads",
    title: "Intent-Verified Leads",
    description:
      "Get connected with prospects who are actively looking for your services, not cold contacts.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80",
    bgColor: "#161616",
    accentColor: "#a08a4c",
    tags: ["Buyer Leads", "Seller Leads", "Investor Leads"],
  },
  {
    icon: IconRobot,
    badge: "Automation",
    title: "AI-Powered Automation",
    description:
      "Let intelligent systems handle nurturing and follow-ups while you focus on closing deals.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    bgColor: "#161616",
    accentColor: "#4a7c59",
    tags: ["Email Sequences", "SMS Follow-ups", "Smart Routing"],
  },
  {
    icon: IconChartBar,
    badge: "Analytics",
    title: "Data-Driven Results",
    description:
      "Track every metric that matters with comprehensive analytics and reporting dashboards.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    bgColor: "#161616",
    accentColor: "#4a6fa5",
    tags: ["ROI Tracking", "Lead Scoring", "Performance"],
  },
  {
    icon: IconUsers,
    badge: "Support",
    title: "Dedicated Support",
    description:
      "Work with a dedicated team that understands your business and helps you succeed.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    bgColor: "#161616",
    accentColor: "#8b7355",
    tags: ["Account Manager", "Strategy Calls", "Priority Support"],
  },
  {
    icon: IconClock,
    badge: "Efficiency",
    title: "Save Time",
    description:
      "Automate repetitive tasks and focus on what matters most - building relationships and closing deals.",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80",
    bgColor: "#161616",
    accentColor: "#6b5b7a",
    tags: ["Task Automation", "Smart Scheduling", "Quick Setup"],
  },
  {
    icon: IconShieldCheck,
    badge: "Trust",
    title: "Proven Systems",
    description:
      "Leverage battle-tested marketing strategies that have helped hundreds of agents succeed.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    bgColor: "#161616",
    accentColor: "#4a7a7a",
    tags: ["Case Studies", "Testimonials", "Certifications"],
  },
];

export default function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate active index based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const index = Math.min(
        Math.floor(value * benefits.length),
        benefits.length - 1
      );
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Background color based on active section
  const backgroundColor = useTransform(
    scrollYProgress,
    benefits.map((_, i) => i / benefits.length),
    benefits.map((b) => b.bgColor)
  );

  const activeBenefit = benefits[activeIndex];

  return (
    <section
      id="benefits"
      ref={containerRef}
      className="relative"
      style={{ height: `${benefits.length * 100}vh` }}
    >
      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 -z-10 transition-colors duration-700"
        style={{ backgroundColor }}
      />

      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Main Content Grid */}
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 w-full items-center">
            {/* Left Side - Text Content (Changes with scroll) */}
            <div className="space-y-6 lg:pr-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge>Why Choose Us</Badge>
              </motion.div>

              {/* Animated Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="space-y-6"
                >
                  {/* Category Badge */}
                  <span
                    className="inline-block px-4 py-1.5 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: `${activeBenefit.accentColor}20`,
                      color: activeBenefit.accentColor,
                    }}
                  >
                    {activeBenefit.badge}
                  </span>

                  {/* Title */}
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    {activeBenefit.title}
                  </h2>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-lg">
                    {activeBenefit.description}
                  </p>

                  {/* CTA Button */}
                  <motion.button
                    className="group flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden"
                    style={{
                      backgroundColor: activeBenefit.accentColor,
                      color: "#161616",
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative block overflow-hidden h-[1.2em]">
                      <span className="flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                        Get Started
                        <IconArrowRight className="w-4 h-4" />
                      </span>
                      <span className="absolute left-0 top-0 flex items-center gap-2 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                        Get Started
                        <IconArrowRight className="w-4 h-4" />
                      </span>
                    </span>
                  </motion.button>
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicators */}
              <div className="flex gap-2 pt-8">
                {benefits.map((benefit, idx) => (
                  <button
                    key={idx}
                    className="group relative"
                    onClick={() => {
                      const element = containerRef.current;
                      if (element) {
                        const scrollTo = (idx / benefits.length) * element.scrollHeight;
                        window.scrollTo({ top: scrollTo, behavior: "smooth" });
                      }
                    }}
                  >
                    <div
                      className={`h-1 rounded-full transition-all duration-500 ${
                        idx === activeIndex ? "w-8" : "w-3"
                      }`}
                      style={{
                        backgroundColor:
                          idx === activeIndex
                            ? benefit.accentColor
                            : "rgba(255,255,255,0.2)",
                      }}
                    />
                    {/* Tooltip */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs text-white/60 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {benefit.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Image/Card (Changes with scroll) */}
            <div className="relative h-[500px] lg:h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95, y: 80 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -80 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0"
                >
                  {/* Main Image Container */}
                  <div className="relative h-full rounded-3xl overflow-hidden">
                    {/* Background Image */}
                    <Image
                      src={activeBenefit.image}
                      alt={activeBenefit.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        background: `linear-gradient(135deg, ${activeBenefit.accentColor}30 0%, transparent 60%)`,
                      }}
                    />

                    {/* Top Badge */}
                    <motion.div
                      className="absolute top-4 right-4 px-4 py-2 rounded-full backdrop-blur-md border border-white/20"
                      style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className="flex items-center gap-2">
                        <activeBenefit.icon
                          className="w-4 h-4"
                          style={{ color: activeBenefit.accentColor }}
                        />
                        <span className="text-white text-sm font-medium">
                          {activeBenefit.badge}
                        </span>
                      </div>
                    </motion.div>

                    {/* Bottom Tags Card */}
                    <motion.div
                      className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl backdrop-blur-xl border border-white/10"
                      style={{ backgroundColor: "rgba(22,22,22,0.8)" }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {activeBenefit.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-3 py-1 rounded-full text-xs text-white/70 border border-white/10"
                            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Decorative Blur */}
                  <div
                    className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30 pointer-events-none"
                    style={{ backgroundColor: activeBenefit.accentColor }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ opacity: activeIndex < benefits.length - 1 ? 1 : 0 }}
        >
          <span className="text-white/40 text-xs">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-white/40"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
