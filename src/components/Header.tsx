"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  { name: "Washer Repair", href: "/services/washer-repair" },
  { name: "Dryer Repair", href: "/services/dryer-repair" },
  { name: "Refrigerator Repair", href: "/services/refrigerator-repair" },
  { name: "Dishwasher Repair", href: "/services/dishwasher-repair" },
  { name: "Oven & Range Repair", href: "/services/oven-range-repair" },
  { name: "Dryer Vent Cleaning", href: "/services/dryer-vent-cleaning" },
];

const serviceAreas = [
  { name: "Bradenton", href: "/service-areas/bradenton" },
  { name: "Sarasota", href: "/service-areas/sarasota" },
  { name: "Venice", href: "/service-areas/venice" },
  { name: "Palmetto", href: "/service-areas/palmetto" },
  { name: "Lakewood Ranch", href: "/service-areas/lakewood-ranch" },
  { name: "Ellenton", href: "/service-areas/ellenton" },
  { name: "Nokomis", href: "/service-areas/nokomis" },
  { name: "Osprey", href: "/service-areas/osprey" },
  { name: "Parrish", href: "/service-areas/parrish" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const areasTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);

  function openServicesDropdown() {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesDropdownOpen(true);
  }

  function closeServicesDropdown() {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  }

  function openAreasDropdown() {
    if (areasTimeoutRef.current) clearTimeout(areasTimeoutRef.current);
    setAreasDropdownOpen(true);
  }

  function closeAreasDropdown() {
    areasTimeoutRef.current = setTimeout(() => {
      setAreasDropdownOpen(false);
    }, 150);
  }

  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      if (areasTimeoutRef.current) clearTimeout(areasTimeoutRef.current);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-shrink-0 items-center">
            <Image
              src="/images/logo.png"
              alt="A Plus Appliance Repair logo"
              width={644}
              height={89}
              className="h-10 w-auto"
              quality={100}
              unoptimized
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-brand-red"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={openServicesDropdown}
              onMouseLeave={closeServicesDropdown}
            >
              <Link
                href="/services"
                className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-brand-red"
              >
                Services
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              {servicesDropdownOpen && (
                <div className="absolute left-0 top-full w-64 rounded-md border border-gray-100 bg-white py-2 shadow-lg">
                  {services.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-red-50 hover:text-brand-red"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div
              ref={areasRef}
              className="relative"
              onMouseEnter={openAreasDropdown}
              onMouseLeave={closeAreasDropdown}
            >
              <Link
                href="/service-areas"
                className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-brand-red"
              >
                Service Areas
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${areasDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              {areasDropdownOpen && (
                <div className="absolute left-0 top-full w-56 rounded-md border border-gray-100 bg-white py-2 shadow-lg">
                  {serviceAreas.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-red-50 hover:text-brand-red"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-brand-red"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-brand-red"
            >
              Contact
            </Link>
          </div>

          {/* Phone CTA Button */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+19415272206"
              className="group relative hidden overflow-hidden rounded-lg bg-brand-red px-5 py-2 text-base font-bold text-white shadow-sm outline outline-1 outline-brand-red transition-all sm:inline-flex"
            >
              <span className="absolute inset-0 bg-white translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-red">(941) 527-2206</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-brand-red lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 pb-4 lg:hidden">
            <div className="space-y-1 pt-2">
              <Link
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-red"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <svg
                    className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="ml-4 space-y-1">
                    <Link
                      href="/services"
                      className="block rounded-md px-3 py-2 text-sm font-medium text-brand-red hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      All Services
                    </Link>
                    {services.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-red"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Service Areas Accordion */}
              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-red"
                  onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                >
                  Service Areas
                  <svg
                    className={`h-4 w-4 transition-transform ${mobileAreasOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {mobileAreasOpen && (
                  <div className="ml-4 space-y-1">
                    <Link
                      href="/service-areas"
                      className="block rounded-md px-3 py-2 text-sm font-medium text-brand-red hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      All Service Areas
                    </Link>
                    {serviceAreas.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-red"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
