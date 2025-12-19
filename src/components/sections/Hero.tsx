"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Particles from "@/components/ui/particles";
import AnimatedBlobs from "@/components/ui/animated-blobs";
import { TypewriterText } from "@/components/ui/text-reveal";
import MouseSpotlight from "@/components/ui/mouse-spotlight";
import FloatingIcons from "@/components/ui/floating-icons";
import MagneticButton from "@/components/ui/magnetic-button";
import siteConfig from "@/config/site.json";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transformations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const circlesY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-[#161616]"
    >
      {/* Mouse-following spotlight */}
      <MouseSpotlight size={500} opacity={0.12} />

      {/* Animated Blob Background - Salient Tether style with parallax */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <AnimatedBlobs className="pointer-events-none opacity-60" />
      </motion.div>

      {/* Particle Background */}
      <Particles
        className="absolute inset-0 pointer-events-none"
        quantity={60}
        color="#d5b367"
        ease={80}
      />

      {/* Floating Icons */}
      <FloatingIcons className="opacity-40" />

      {/* Rotating circles with parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: circlesY, opacity }}
      >
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#d5b367]/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#d5b367]/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#d5b367]/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Content with parallax */}
      <motion.div
        className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center"
        style={{ y: contentY }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge>
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#d5b367] to-[#e8d5a3] mr-2" />
            {siteConfig.name} - {siteConfig.tagline}
          </Badge>
        </motion.div>

        {/* Heading with text reveal animation */}
        <h1 className="mt-8 text-5xl md:text-7xl lg:text-[80px] font-bold text-white tracking-tight leading-tight">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Marketing.
          </motion.span>
          {" "}
          <motion.span
            className="bg-gradient-to-r from-[#d5b367] via-[#e8d5a3] to-[#d5b367] bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Perfected.
          </motion.span>
        </h1>

        {/* Subheading with typewriter effect */}
        <motion.div
          className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <TypewriterText
            text="Intent-verified referrals and AI-driven marketing to grow your business."
            delay={1}
            speed={0.03}
          />
          <br />
          <br />
          <motion.span
            className="font-semibold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.5 }}
          >
            Clarity. Consistency. Results.
          </motion.span>
        </motion.div>

        {/* CTA Buttons - Magnetic */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <MagneticButton variant="primary" href="/contact">
            Book a call
          </MagneticButton>
          <MagneticButton variant="secondary" href="#services">
            View Services
          </MagneticButton>
        </motion.div>

      </motion.div>

      {/* Logo Marquee - Outside parallax, stays visible */}
      <motion.div
        className="relative z-10 w-full mt-12 mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p className="text-sm text-white/40 text-center mb-6">Trusted by agents at leading brokerages</p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)]">
          <motion.div
            className="flex items-center gap-[75px]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          >
            {/* Company names as styled text - duplicated for seamless loop */}
            {[...Array(3)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-[60px] flex-shrink-0">
                <span className="text-2xl font-bold text-white/40 tracking-tight whitespace-nowrap">Zillow</span>
                <span className="text-2xl font-bold text-white/40 tracking-tight whitespace-nowrap">Berkshire Hathaway</span>
                <span className="text-2xl font-bold text-white/40 tracking-tight whitespace-nowrap">Keller Williams</span>
                <span className="text-2xl font-bold text-white/40 tracking-tight whitespace-nowrap">Century 21</span>
                <span className="text-2xl font-bold text-white/40 tracking-tight whitespace-nowrap">Realtor.com</span>
                <span className="text-2xl font-bold text-white/40 tracking-tight whitespace-nowrap">RE/MAX</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
