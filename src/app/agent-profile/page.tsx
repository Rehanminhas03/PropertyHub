"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import NavbarDemo from "@/components/Navbar";
import ScrollProgress from "@/components/ui/scroll-progress";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import Link from "next/link";
import MagneticButton from "@/components/ui/magnetic-button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  IconShieldCheck,
  IconKey,
  IconStar,
  IconUser,
  IconHeartHandshake,
  IconHome,
  IconBuildingSkyscraper,
  IconChartBar,
  IconMapPin,
  IconQuote,
} from "@tabler/icons-react";

// Trust badges data
const trustBadges = [
  {
    icon: IconShieldCheck,
    title: "Verified Listings",
    description: "Every property listed on our platform is thoroughly vetted and verified to ensure accuracy and legitimacy. You can browse with confidence knowing that all listings meet our strict quality standards.",
  },
  {
    icon: IconKey,
    title: "Secure Deals",
    description: "We prioritize your safety with every transaction. Our secure platform and transparent processes ensure that every deal is smooth, fair, and protected from start to finish.",
  },
  {
    icon: IconStar,
    title: "Top Ratings",
    description: "Our agents are trusted and top-rated by satisfied clients. With a strong track record of successful deals and excellent service, you're in good hands every step of the way.",
  },
];

// About features
const aboutFeatures = [
  {
    icon: IconUser,
    title: "Proven Track Record",
    description: "Successfully closed numerous property deals, consistently exceeding client expectations with honest guidance, timely communication, and results-driven service.",
  },
  {
    icon: IconHeartHandshake,
    title: "Trusted Advisor",
    description: "More than just a realtor - I'm your partner throughout the journey. Whether you're buying or selling, I provide transparent advice and personalized solutions tailored to your needs.",
  },
];

// Featured properties
const featuredProperties = [
  {
    title: "Greenwood Estate",
    description: "A sleek, contemporary masterpiece featuring open-plan living, floor-to-ceiling windows, and top-tier finishes. Located in a peaceful neighborhood, this home offers luxury and privacy in perfect balance.",
    address: "1847 Oakridge Boulevard, Beverly Hills",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    title: "Sunset Villa",
    description: "Spacious and stylish, this villa boasts breathtaking views, modern architecture, and smart-home integration. Ideal for families or entertainers looking for both space and sophistication.",
    location: "Malibu Coastal Heights",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
];

// Services
const services = [
  {
    icon: IconHome,
    title: "Home Buying",
    description: "Looking for your perfect home? I help you find properties that match your lifestyle, needs, and budget - with full support from search to closing.",
  },
  {
    icon: IconBuildingSkyscraper,
    title: "Property Selling",
    description: "Get expert advice, proper valuation, and professional marketing to sell your property faster and at the right price.",
  },
  {
    icon: IconChartBar,
    title: "Market Analysis",
    description: "Make smart decisions with detailed market reports, pricing trends, and investment insights specific to your local area.",
  },
];

// What sets apart features
const setApartFeatures = [
  {
    title: "Proven Experience",
    description: "With hands-on knowledge of the local market and years of real estate expertise, I guide clients through every step with confidence.",
  },
  {
    title: "Transparent Process",
    description: "From the first consultation to the final signature, I ensure full transparency, honest advice, and no hidden surprises.",
  },
];

// Testimonials
const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "First-Time Homebuyer",
    content: "Working with this agent was an absolute pleasure. They guided me through every step of buying my first home and made what could have been a stressful process completely seamless.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Property Investor",
    content: "Exceptional market knowledge and negotiation skills. They helped me secure multiple investment properties well below asking price. Highly recommend for serious investors.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Home Seller",
    content: "Sold my home in just two weeks at above asking price! The marketing strategy was brilliant and the communication throughout was outstanding.",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    role: "Relocating Professional",
    content: "As someone relocating from another state, I needed an agent who truly understood the local market. They found me the perfect home within my budget and timeline.",
    rating: 5,
  },
  {
    name: "Jennifer Adams",
    role: "Luxury Home Buyer",
    content: "The attention to detail and personalized service was remarkable. They understood exactly what I was looking for and delivered beyond my expectations.",
    rating: 5,
  },
  {
    name: "Robert Williams",
    role: "Commercial Client",
    content: "Professional, knowledgeable, and incredibly responsive. They handled our commercial property purchase with expertise and made the entire transaction smooth.",
    rating: 5,
  },
];


export default function AgentProfilePage() {
  const heroRef = useRef(null);
  const trustRef = useRef(null);
  const aboutRef = useRef(null);
  const propertiesRef = useRef(null);
  const servicesRef = useRef(null);
  const setApartRef = useRef(null);
  const testimonialsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const trustInView = useInView(trustRef, { once: true, margin: "-100px" });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const propertiesInView = useInView(propertiesRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const setApartInView = useInView(setApartRef, { once: true, margin: "-100px" });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]">
      <ScrollProgress />
      <NavbarDemo />

      <main className="relative overflow-hidden">
        {/* Hero Section with Background Image */}
        <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80"
              alt="Real Estate Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" />
          </div>

          <motion.div
            className="relative z-10 text-center px-4 pt-32 pb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Agent Profile
            </h1>
            <div className="flex items-center justify-center gap-3 text-white/70">
              <Link href="/" className="hover:text-[#d5b367] transition-colors">Home</Link>
              <span className="text-[#d5b367]">//</span>
              <span className="text-[#d5b367]">Agent Profile</span>
            </div>
          </motion.div>
        </section>

        {/* Hero Content Section */}
        <section className="relative py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge>Find Your Perfect Home</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight mt-6">
                  <span className="bg-gradient-to-r from-[#d5b367] via-[#e8d5a3] to-[#d5b367] bg-clip-text text-transparent">Expert Guidance</span><br />
                  Trusted Deals.
                </h2>
                <p className="text-white/60 text-lg mb-8 leading-relaxed">
                  With years of real estate expertise, I&apos;m here to help you buy, sell, or invest in properties across your area with ease and trust. Let&apos;s turn your goals into reality.
                </p>
                <MagneticButton variant="primary" href="/contact">
                  Schedule a Consultation
                </MagneticButton>
              </motion.div>

              {/* Right Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                    alt="Professional Real Estate Agent"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Badges Section */}
        <section ref={trustRef} className="relative py-20 px-4 md:px-8 bg-[#0f0f0f]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {trustBadges.map((badge, idx) => (
                <motion.div
                  key={badge.title}
                  className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#d5b367]/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={trustInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#d5b367]/20 flex items-center justify-center mx-auto mb-6">
                    <badge.icon className="w-8 h-8 text-[#d5b367]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{badge.title}</h3>
                  <p className="text-white/60 leading-relaxed">{badge.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section ref={aboutRef} className="relative py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80"
                    alt="About Me"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Right Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge>About Me</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight mt-4">
                  Driven by <span className="bg-gradient-to-r from-[#d5b367] via-[#e8d5a3] to-[#d5b367] bg-clip-text text-transparent">Passion</span>, Backed by <span className="bg-gradient-to-r from-[#d5b367] via-[#e8d5a3] to-[#d5b367] bg-clip-text text-transparent">Experience</span>
                </h2>
                <p className="text-white/60 text-lg mb-10 leading-relaxed">
                  With years of experience in the real estate industry, I bring a deep understanding of the market, a passion for helping people, and a commitment to delivering exceptional results for every client.
                </p>

                <div className="space-y-8">
                  {aboutFeatures.map((feature, idx) => (
                    <motion.div
                      key={feature.title}
                      className="flex gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-white/70" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-white/60 leading-relaxed">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Properties Section */}
        <section ref={propertiesRef} className="relative py-24 px-4 md:px-8 bg-[#0f0f0f]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={propertiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <Badge>Featured Properties</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mt-4">
                  <span className="bg-gradient-to-r from-[#d5b367] via-[#e8d5a3] to-[#d5b367] bg-clip-text text-transparent">Handpicked</span> Homes<br />You&apos;ll Love
                </h2>
              </motion.div>
              <motion.p
                className="text-white/60 text-lg leading-relaxed lg:pt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={propertiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Explore a curated selection of premium properties each chosen for its style, comfort, and value. Whether you&apos;re looking for modern elegance or cozy charm, we&apos;ve got the perfect home for you.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredProperties.map((property, idx) => (
                <motion.div
                  key={property.title}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={propertiesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/10">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{property.title}</h3>
                  <p className="text-white/60 mb-4 leading-relaxed">{property.description}</p>
                  <p className="flex items-center gap-2 text-white/70 mb-4">
                    <IconMapPin className="w-4 h-4 text-[#d5b367]" />
                    {property.address ? `Address: ${property.address}` : `Location: ${property.location}`}
                  </p>
                  <Button variant="secondary" href="#">
                    View Details
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="relative py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Badge>What I Offer</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 mt-4">
                Full-Service <span className="bg-gradient-to-r from-[#d5b367] via-[#e8d5a3] to-[#d5b367] bg-clip-text text-transparent">Real Estate</span><br />Solutions
              </h2>
              <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
                Whether you&apos;re buying your dream home or selling your property for the best value, I provide tailored services to make your real estate journey smooth, transparent, and successful.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  className="text-center p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#d5b367]/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 rounded-lg bg-[#d5b367]/10 flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-[#d5b367]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Sets Me Apart Section */}
        <section ref={setApartRef} className="relative py-24 px-4 md:px-8 bg-[#0f0f0f]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                animate={setApartInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                    alt="Real Estate Professional"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Stats */}
                <div className="flex gap-8 mt-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={setApartInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      <AnimatedCounter end={500} suffix="+" />
                    </div>
                    <div className="text-white/60">Homes Sold</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={setApartInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">5-Star</div>
                    <div className="text-white/60">Google Reviews</div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={setApartInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge>What Sets Me Apart</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight mt-4">
                  <span className="bg-gradient-to-r from-[#d5b367] via-[#e8d5a3] to-[#d5b367] bg-clip-text text-transparent">Experience</span>, Integrity, and Dedication
                </h2>
                <p className="text-white/60 text-lg mb-10 leading-relaxed">
                  My goal isn&apos;t just to close deals - it&apos;s to build lasting relationships based on trust, clear communication, and results that speak for themselves.
                </p>

                <div className="space-y-8">
                  {setApartFeatures.map((feature, idx) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={setApartInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    >
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-white/60 leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={setApartInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <MagneticButton variant="primary" href="/contact">
                    Let&apos;s Work Together
                  </MagneticButton>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section ref={testimonialsRef} className="relative py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <Badge>Happy Clients</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mt-4">
                  What They&apos;re <span className="bg-gradient-to-r from-[#d5b367] via-[#e8d5a3] to-[#d5b367] bg-clip-text text-transparent">Saying</span><br />About Me
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <MagneticButton variant="primary" href="#">
                  Read More Reviews
                </MagneticButton>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={testimonial.name}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#d5b367]/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-white font-semibold">{testimonial.name}</h3>
                      <div className="flex gap-0.5 my-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <IconStar key={i} className="w-4 h-4 text-[#d5b367] fill-[#d5b367]" />
                        ))}
                      </div>
                      <p className="text-white/50 text-sm">{testimonial.role}</p>
                    </div>
                    <IconQuote className="w-8 h-8 text-white/20" />
                  </div>
                  <p className="text-white/70 leading-relaxed">{testimonial.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Background Image */}
        <section className="relative py-32 px-4 md:px-8 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
              alt="Modern Home"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0a0a0a]/70" />
          </div>

          <motion.div
            className="relative z-10 max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-[#d5b367] font-medium tracking-wide mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Start Your Journey
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I&apos;m Here to Help You<br />Find <span className="bg-gradient-to-r from-[#d5b367] via-[#e8d5a3] to-[#d5b367] bg-clip-text text-transparent">Home</span>
            </motion.h2>
            <motion.p
              className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Whether you&apos;re buying your first home or making a smart investment, I&apos;m here to guide you with expert advice and full support. Let&apos;s make your real estate journey smooth, simple, and successful — together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <MagneticButton variant="primary" href="/contact">
                Schedule a Free Consultation
              </MagneticButton>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
