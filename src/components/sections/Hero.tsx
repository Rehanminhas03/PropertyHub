"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import AnimatedRings from "@/components/ui/animated-rings";
import NetworkAnimation from "@/components/ui/network-animation";
import CursorTrail from "@/components/ui/cursor-trail";
import Particles from "@/components/ui/particles";
import SplitText, { ShimmerText } from "@/components/ui/split-text";
import { TypewriterText } from "@/components/ui/text-reveal";
import MouseSpotlight from "@/components/ui/mouse-spotlight";
import MagneticButton from "@/components/ui/magnetic-button";
import siteConfig from "@/config/site.json";
import Image from "next/image";

// Brokerage logos for the marquee - using local images
const brokerageLogos = [
  {
    name: "Partner 1",
    logo: "/logos/1.png",
  },
  {
    name: "Partner 2",
    logo: "/logos/2.png",
  },
  {
    name: "Partner 3",
    logo: "/logos/3.png",
  },
  {
    name: "Partner 4",
    logo: "/logos/4.png",
  },
  {
    name: "Partner 5",
    logo: "/logos/5.png",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transformations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-32 px-4 overflow-hidden bg-[#161616]"
    >
      {/* Glassmorphism background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large glass panel - top left */}
        <div
          className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-3xl opacity-20"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        />
        {/* Medium glass panel - top right */}
        <div
          className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-2xl opacity-15"
          style={{
            background: "linear-gradient(135deg, rgba(213,179,103,0.08) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            border: "1px solid rgba(213,179,103,0.1)",
          }}
        />
        {/* Small glass panel - bottom */}
        <div
          className="absolute bottom-[25%] left-[20%] w-[250px] h-[200px] rounded-xl opacity-10"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 100%)",
            backdropFilter: "blur(25px)",
            WebkitBackdropFilter: "blur(25px)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        />
      </div>

      {/* Bottom fade gradient to blend with next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-20"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #161616 100%)",
        }}
      />
      {/* Cursor Trail Effect */}
      <CursorTrail particleCount={12} particleLifetime={600} />

      {/* Mouse-following spotlight */}
      <MouseSpotlight size={500} opacity={0.1} />

      {/* Network Animation Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ opacity }}
      >
        <NetworkAnimation
          nodeCount={50}
          connectionDistance={180}
          nodeColor="rgba(213, 179, 103, 0.6)"
          lineColor="rgba(213, 179, 103, 0.12)"
        />
      </motion.div>

      {/* Animated Rings Background - Like prorealtify.com */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{ y: backgroundY, opacity }}
      >
        <AnimatedRings className="opacity-90" />
      </motion.div>

      {/* Particle Background */}
      <Particles
        className="absolute inset-0 pointer-events-none"
        quantity={50}
        color="#d5b367"
        ease={80}
      />

      {/* Subtle overlay - minimal blur to keep animations visible */}
      <div
        className="absolute inset-0 z-[5] pointer-events-none"
        style={{
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          background: "rgba(22, 22, 22, 0.1)",
        }}
      />

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

        {/* Heading with letter-by-letter animation */}
        <h1 className="mt-8 text-5xl md:text-7xl lg:text-[80px] font-bold text-white tracking-tight leading-tight">
          <SplitText text="Marketing." delay={0.3} staggerDelay={0.04} />
          {" "}
          <ShimmerText>
            <SplitText
              text="Perfected."
              delay={0.7}
              staggerDelay={0.04}
              letterClassName="bg-gradient-to-r from-[#d5b367] via-[#e8d5a3] to-[#d5b367] bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient"
            />
          </ShimmerText>
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
        className="relative z-10 w-[80%] mx-auto mt-12 mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p className="text-sm text-white/40 text-center mb-6">Trusted by agents at leading brokerages</p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <motion.div
            className="flex items-center"
            animate={{ x: [0, -(brokerageLogos.length * (128 + 40))] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {/* Brokerage logos - duplicated twice for seamless infinite loop */}
            {[...brokerageLogos, ...brokerageLogos].map((brokerage, idx) => (
              <div
                key={idx}
                className="relative h-12 w-32 mx-5 opacity-60 hover:opacity-90 transition-opacity flex-shrink-0 grayscale hover:grayscale-0"
              >
                <Image
                  src={brokerage.logo}
                  alt={brokerage.name}
                  fill
                  className="object-contain brightness-0 invert"
                  sizes="128px"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
