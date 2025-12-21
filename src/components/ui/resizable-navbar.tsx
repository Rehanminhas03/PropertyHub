"use client";

import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

interface NavItem {
  name: string;
  link: string;
}

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: NavItem[];
  className?: string;
  onItemClick?: () => void;
}

interface NavbarLogoProps {
  className?: string;
}

interface NavbarButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
  href?: string;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ children, className }) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 w-full",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, {
            visible,
          });
        }
        return child;
      })}
    </motion.nav>
  );
};

export const NavBody: React.FC<NavBodyProps> = ({
  children,
  className,
  visible,
}) => {
  return (
    <motion.div
      animate={{
        width: visible ? "70%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "hidden lg:flex flex-row items-center justify-between mx-auto py-3 px-6 rounded-full relative z-50",
        visible
          ? "bg-[#161616]/80 backdrop-blur-[10px] border border-[#d5b367]/10 shadow-lg"
          : "bg-[#161616]/80 backdrop-blur-[10px] border border-[#d5b367]/10",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

// Custom smooth scroll function with easing
const smoothScrollTo = (targetId: string) => {
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;

  const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = Math.min(Math.abs(distance) * 1.2, 4000); // Slower animation, max 4s
  let startTime: number | null = null;

  // Cubic ease-in-out for smooth animation
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animateScroll = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

export const NavItems: React.FC<NavItemsProps> = ({ items, className, onItemClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    // Check if it's a hash link for the current page
    if (link.startsWith("/#") || link.startsWith("#")) {
      e.preventDefault();
      const targetId = link.replace("/#", "").replace("#", "");
      smoothScrollTo(targetId);
      onItemClick?.();
    }
  };

  return (
    <div className={cn("flex items-center gap-8", className)}>
      {items.map((item, idx) => (
        <Link
          key={idx}
          href={item.link}
          onClick={(e) => handleClick(e, item.link)}
          className="group relative text-neutral-300 hover:text-white text-sm font-medium overflow-hidden"
        >
          <span className="relative block overflow-hidden h-[1.2em]">
            {/* Original text - rolls up on hover */}
            <span className="block transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
              {item.name}
            </span>
            {/* Duplicate text - rolls in from below */}
            <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
              {item.name}
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
};

export const NavbarLogo: React.FC<NavbarLogoProps> = ({ className }) => {
  const siteConfig = require("@/config/site.json");

  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <span className="text-white font-bold text-xl">{siteConfig.name}</span>
    </Link>
  );
};

export const NavbarButton: React.FC<NavbarButtonProps> = ({
  children,
  className,
  variant = "primary",
  href = "#",
}) => {
  const baseStyles =
    "group px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 border border-white/10 overflow-hidden";

  const variants = {
    primary:
      "bg-[#d5b367] text-[#161616] hover:bg-[#c9a555] shadow-[0_0.7px_0.7px_-0.625px_rgba(0,0,0,0.15),0_1.8px_1.8px_-1.25px_rgba(0,0,0,0.14),0_3.6px_3.6px_-1.875px_rgba(0,0,0,0.14),0_6.9px_6.9px_-2.5px_rgba(0,0,0,0.13),0_13.6px_13.6px_-3.125px_rgba(0,0,0,0.1),0_30px_30px_-3.75px_rgba(0,0,0,0.05)]",
    secondary:
      "bg-transparent border border-white/20 text-white hover:bg-white/10",
    dark:
      "bg-[#161616] text-white border border-white/20 hover:bg-neutral-900",
    gradient:
      "bg-gradient-to-r from-[#d5b367] to-[#e8d5a3] text-[#161616] hover:opacity-90",
  };

  return (
    <Link href={href} className={cn(baseStyles, variants[variant], className)}>
      <span className="relative block overflow-hidden h-[1.2em]">
        {/* Original text - rolls up on hover */}
        <span className="flex items-center gap-2 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
          {children}
        </span>
        {/* Duplicate text - rolls in from below */}
        <span className="absolute left-0 top-0 flex items-center gap-2 translate-y-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
          {children}
        </span>
      </span>
    </Link>
  );
};

export const MobileNav: React.FC<MobileNavProps> = ({
  children,
  className,
  visible,
}) => {
  return (
    <motion.div
      animate={{
        y: visible ? 20 : 0,
        width: visible ? "95%" : "100%",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "flex lg:hidden flex-col mx-auto py-4 px-6 rounded-full relative z-50",
        visible
          ? "bg-[#161616]/90 backdrop-blur-md border border-[#d5b367]/10"
          : "bg-[#161616]/70 backdrop-blur-sm",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader: React.FC<MobileNavHeaderProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex items-center justify-between w-full", className)}>
      {children}
    </div>
  );
};

export const MobileNavToggle: React.FC<{
  isOpen: boolean;
  onClick: () => void;
}> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
    >
      {isOpen ? <IconX className="w-6 h-6" /> : <IconMenu2 className="w-6 h-6" />}
    </button>
  );
};

export const MobileNavMenu: React.FC<MobileNavMenuProps> = ({
  children,
  className,
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute top-full left-0 right-0 mt-4 bg-[#161616]/95 backdrop-blur-md border border-[#d5b367]/10 rounded-2xl p-6 flex flex-col gap-4",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Arrow Icon Component for the button - diagonal arrow pointing top-right (45 degrees)
export const ArrowIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-4 h-4", className)}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
};
