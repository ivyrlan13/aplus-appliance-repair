"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

const brands = ["LG", "GE", "Samsung", "Frigidaire", "Whirlpool", "Maytag", "Sears", "KitchenAid"];

export default function AnimatedHero() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % brands.length);
        setAnimate(true);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80" />
      </div>

      <motion.div
        initial={{ opacity: 0, filter: "blur(12px)", y: 30 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ type: "spring", bounce: 0.3, duration: 1.5, delay: 0.2 }}
        className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"
      >
        <div className="flex gap-8 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-center">
              <span className="block text-5xl md:text-7xl tracking-tighter font-extrabold text-white">
                Servicing All Major Brand
              </span>
              <span className="block text-5xl md:text-7xl tracking-tighter font-extrabold text-brand-red">
                Appliances
              </span>
              <span className="sr-only">Appliance Repair in Bradenton and Sarasota</span>
            </h1>

            <div className="h-[70px] sm:h-[80px] flex items-center justify-center overflow-hidden">
              <span
                className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white transition-all duration-300 ${
                  animate
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {brands[index]}
              </span>
            </div>

            <div className="space-y-1 text-center">
              <p className="mx-auto max-w-2xl text-xl font-semibold text-gray-300 sm:text-2xl">
                Delivering professional repairs and dryer vent cleanings in Bradenton &amp; Sarasota.
              </p>
              <p className="text-xl font-semibold text-gray-400 sm:text-2xl">
                20+ Years of Trusted Expertise
              </p>
              <p className="text-xl font-semibold text-brand-red sm:text-2xl">
                LG Authorized
              </p>
            </div>
          </div>

          <a
            href="tel:+19415272206"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-brand-red px-10 py-5 text-2xl font-extrabold text-white shadow-2xl shadow-red-900/40 transition-all hover:scale-105 outline outline-1 outline-brand-red sm:text-3xl"
          >
            <span className="absolute inset-0 bg-white translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
            <PhoneCall className="relative z-10 h-8 w-8 transition-colors duration-300 group-hover:text-brand-red" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-red">(941) 527-2206</span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services"
              className="text-lg font-semibold text-white underline decoration-brand-red underline-offset-4 transition-colors hover:text-brand-red"
            >
              View All Services
            </Link>
            <span className="hidden h-4 w-px bg-gray-600 sm:inline-block" />
            <Link
              href="/contact"
              className="text-lg font-semibold text-white underline decoration-brand-red underline-offset-4 transition-colors hover:text-brand-red"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
