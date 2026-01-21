"use client";

import React, { useState, useRef, useEffect } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
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
  { name: "CRM", link: "/#crm" },
  { name: "FAQ", link: "/#faq" },
];

const portalItems = [
  { name: "SEO Portal", link: "/seo-portal" },
  { name: "RE Portal", link: "https://re.marketlyn.com/login" },
  { name: "SMM Portal", link: "/smm-portal" },
];

export default function NavbarDemo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portalDropdownOpen, setPortalDropdownOpen] = useState(false);
  const [mobilePortalOpen, setMobilePortalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setPortalDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-3">
          {/* Portal Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setPortalDropdownOpen(!portalDropdownOpen)}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              Portal
              <IconChevronDown className={`w-4 h-4 transition-transform ${portalDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {portalDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-neutral-900 border border-white/10 rounded-lg shadow-xl overflow-hidden z-50">
                {portalItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                    onClick={() => setPortalDropdownOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <NavbarButton variant="primary" href="/pricing">
            Get Started
            <ArrowIcon />
          </NavbarButton>
        </div>
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
            className="flex-col items-start gap-2"
            onItemClick={() => setMobileMenuOpen(false)}
          />
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
            {/* Mobile Portal Dropdown */}
            <div className="w-full">
              <button
                onClick={() => setMobilePortalOpen(!mobilePortalOpen)}
                className="flex items-center justify-center gap-1.5 w-full px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                Portal
                <IconChevronDown className={`w-4 h-4 transition-transform ${mobilePortalOpen ? "rotate-180" : ""}`} />
              </button>
              {mobilePortalOpen && (
                <div className="mt-2 bg-white/5 rounded-lg overflow-hidden">
                  {portalItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.link}
                      className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors text-center"
                      onClick={() => {
                        setMobilePortalOpen(false);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <NavbarButton
              variant="primary"
              href="/pricing"
              className="w-full justify-center"
            >
              Get Started
              <ArrowIcon />
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
