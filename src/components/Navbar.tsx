"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  ArrowIcon,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "About Us", link: "/#about-us" },
  { name: "Benefits", link: "/#benefits" },
  { name: "Services", link: "/#services" },
  { name: "Testimonials", link: "/#testimonials" },
  { name: "FAQ", link: "/#faq" },
];

export default function NavbarDemo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <NavbarButton variant="primary" href="/contact">
          Get in touch
          <ArrowIcon />
        </NavbarButton>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <NavItems
            items={navItems}
            className="flex-col items-start gap-4"
            onItemClick={() => setMobileMenuOpen(false)}
          />
          <NavbarButton
            variant="primary"
            href="/contact"
            className="w-full justify-center mt-4"
          >
            Get in touch
            <ArrowIcon />
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
