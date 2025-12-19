"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import MagneticButton from "@/components/ui/magnetic-button";
import siteConfig from "@/config/site.json";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Parallax effect for background
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      ref={ref}
    >
      {/* Full width container */}
      <div className="relative w-full overflow-hidden">
        {/* Parallax Background Image */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: backgroundY, scale }}
        >
          <div
            className="absolute inset-0 w-full h-[130%] -top-[15%]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </motion.div>

        {/* Dark overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backgroundColor: "rgba(22, 21, 20, 0.75)",
          }}
        />

        {/* Gradient overlay for extra depth */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, rgba(22, 22, 22, 0.4) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 py-24 md:py-32 lg:py-40 px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Badge>Get Started</Badge>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ready to Grow Your Business?
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Schedule a free discovery call and let&apos;s discuss how{" "}
              {siteConfig.name} can help you achieve your goals.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <MagneticButton
                variant="primary"
                href="/contact"
                className="text-lg px-8 py-4"
              >
                Book a Free Call
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
