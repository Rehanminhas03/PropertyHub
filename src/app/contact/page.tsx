"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import NavbarDemo from "@/components/Navbar";
import ScrollProgress from "@/components/ui/scroll-progress";
import Footer from "@/components/sections/Footer";
import { Badge } from "@/components/ui/badge";
import { Spotlight, SpotlightCard } from "@/components/ui/spotlight";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandFacebook,
  IconSend,
  IconCheck,
} from "@tabler/icons-react";
import MagneticButton from "@/components/ui/magnetic-button";
import siteConfig from "@/config/site.json";

const contactInfo = [
  {
    icon: IconMail,
    label: "Email",
    value: "hello@prorealtify.com",
    href: "mailto:hello@prorealtify.com",
  },
  {
    icon: IconPhone,
    label: "Phone",
    value: "(555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: IconMapPin,
    label: "Location",
    value: "Los Angeles, CA",
    href: "#",
  },
];

const socialLinks = [
  { icon: IconBrandLinkedin, href: "#", label: "LinkedIn" },
  { icon: IconBrandInstagram, href: "#", label: "Instagram" },
  { icon: IconBrandFacebook, href: "#", label: "Facebook" },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setIsSubmitted(true);
      setFormState({ name: "", email: "", phone: "", company: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-black">
      <ScrollProgress />
      <NavbarDemo />

      <main className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Spotlight effect */}
        <Spotlight className="absolute -top-40 left-0 md:left-60" fill="#d5b367" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge>Contact Us</Badge>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Let&apos;s Grow Together
            </h1>
            <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
              Ready to transform your real estate business? Book a free discovery call and see how {siteConfig.name} can help you achieve your goals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SpotlightCard className="h-full">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>

                {error && (
                  <motion.div
                    className="mb-4 p-4 rounded-lg bg-red-500/20 border border-red-500/30"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-red-400 text-sm">{error}</p>
                  </motion.div>
                )}

                {isSubmitted ? (
                  <motion.div
                    className="flex flex-col items-center justify-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                      <IconCheck className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                    <p className="text-white/60 text-center">
                      We&apos;ll get back to you within 24 hours. Check your email for confirmation.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#d5b367] focus:ring-1 focus:ring-[#d5b367] transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#d5b367] focus:ring-1 focus:ring-[#d5b367] transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#d5b367] focus:ring-1 focus:ring-[#d5b367] transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-2">
                          Company/Brokerage
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#d5b367] focus:ring-1 focus:ring-[#d5b367] transition-colors"
                          placeholder="Keller Williams"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#d5b367] focus:ring-1 focus:ring-[#d5b367] transition-colors resize-none"
                        placeholder="Tell us about your goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#d5b367] text-[#161616] font-medium hover:bg-[#c9a555] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 overflow-hidden"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-[#161616]/30 border-t-[#161616] rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <span className="relative block overflow-hidden h-[1.2em]">
                          <span className="flex items-center gap-2 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                            Send Message
                            <IconSend className="w-5 h-5" />
                          </span>
                          <span className="absolute left-0 top-0 flex items-center gap-2 translate-y-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                            Send Message
                            <IconSend className="w-5 h-5" />
                          </span>
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </SpotlightCard>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Info Cards */}
              {contactInfo.map((info, idx) => (
                <SpotlightCard key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#d5b367]/20 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-[#d5b367]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">{info.label}</p>
                    <a
                      href={info.href}
                      className="text-lg font-medium text-white hover:text-[#d5b367] transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </SpotlightCard>
              ))}

              {/* Social Links */}
              <SpotlightCard>
                <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#d5b367]/20 hover:text-[#d5b367] transition-colors"
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </SpotlightCard>

              {/* CTA Card */}
              <SpotlightCard className="bg-gradient-to-br from-[#d5b367]/20 to-[#d5b367]/5">
                <h3 className="text-xl font-bold text-white mb-2">
                  Prefer a call?
                </h3>
                <p className="text-white/60 mb-4">
                  Book a free 30-minute discovery call and let&apos;s discuss your goals.
                </p>
                <MagneticButton
                  href="#"
                  variant="primary"
                  className="bg-white text-black hover:bg-white/90"
                >
                  <IconPhone className="w-5 h-5" />
                  Schedule Call
                </MagneticButton>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
