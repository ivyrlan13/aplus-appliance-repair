"use client";

import { useEffect, useState } from "react";
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
          backgroundImage:
            "url('https://aplus-appliancerepair.com/wp-content/uploads/2025/11/GettyImages-2205544744-scaled.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="flex gap-8 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-extrabold text-white">
              Servicing All Major Brand
              <br />
              <span className="text-brand-red">Appliances</span>
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

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl text-center">
              For over 20 years, families across Bradenton and Sarasota have trusted
              A Plus Appliance Repair to keep their homes running. LG Authorized.
              Available 24/7.
            </p>
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
      </div>
    </section>
  );
}
