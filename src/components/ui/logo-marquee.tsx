"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface LogoMarqueeProps {
  logos: Logo[];
  className?: string;
  speed?: number;
}

export const LogoMarquee: React.FC<LogoMarqueeProps> = ({
  logos,
  className,
  speed = 25,
}) => {
  return (
    <div
      className={cn(
        "w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent_0%,black_25%,black_75%,transparent_100%)]",
        className
      )}
    >
      <motion.div
        className="flex items-center gap-[75px]"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Duplicate logos for seamless loop */}
        {[...logos, ...logos, ...logos].map((logo, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 relative opacity-70 hover:opacity-100 transition-opacity"
            style={{ width: logo.width, height: logo.height }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
