import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import AnimatedHero from "@/components/AnimatedHero";
import { GlowCard } from "@/components/GlowCard";
import { business } from "@/data/business";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollingImages from "@/components/ScrollingImages";
import ServicesGallery from "@/components/ServicesGallery";
import {
  generateLocalBusinessSchema,
  generateWebsiteSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Appliance Repair Bradenton & Sarasota FL | A Plus Appliance Repair",
  description:
    "A Plus Appliance Repair provides fast, reliable appliance repair in Bradenton & Sarasota FL. 20+ years experience, LG Authorized, 4.9 stars from 416 reviews. Call (941) 527-2206.",
  keywords: [
    "appliance repair Bradenton",
    "appliance repair Sarasota",
    "appliance repair near me",
    "LG authorized repair",
    "washer repair Bradenton",
    "dryer repair Sarasota",
    "refrigerator repair Bradenton",
    "dryer vent cleaning Bradenton",
    "dryer vent cleaning Sarasota",
  ],
  openGraph: {
    title: "Appliance Repair Bradenton & Sarasota FL | A Plus Appliance Repair",
    description:
      "Fast, reliable appliance repair in Bradenton & Sarasota FL. 20+ years experience, LG Authorized, 4.9 stars. Call (941) 527-2206.",
    url: "https://aplusappliancerepairbradenton.com",
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const serviceCardColors = [
  "bg-red-50 border-red-200",
  "bg-blue-50 border-blue-200",
  "bg-amber-50 border-amber-200",
  "bg-emerald-50 border-emerald-200",
  "bg-purple-50 border-purple-200",
  "bg-cyan-50 border-cyan-200",
];

const promises = [
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast Response",
    description:
      "Same-day and next-day appointments available. We know a broken appliance can't wait, so we prioritize getting to you quickly.",
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Fair Pricing",
    description:
      "Upfront, written estimates before any work begins. No hidden fees, no surprise charges. You approve the price before we start.",
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Guaranteed Work",
    description:
      "Every repair is backed by our parts and labor warranty. If something isn't right, we come back and make it right at no extra cost.",
  },
];

const brands = [
  { name: "LG", logo: "/logos/lg.png" },
  { name: "GE", logo: "/logos/ge.png" },
  { name: "Samsung", logo: "/logos/samsung.png" },
  { name: "Frigidaire", logo: "/logos/frigidaire.png" },
  { name: "Whirlpool", logo: "/logos/whirlpool.png" },
  { name: "Maytag", logo: "/logos/maytag.png" },
  { name: "Sears", logo: "/logos/sears.png" },
  { name: "KitchenAid", logo: "/logos/kitchenaid.png" },
];

export default function HomePage() {
  return (
    <>
      {/* ====== ANIMATED HERO with cycling brand names ====== */}
      <AnimatedHero />

      {/* ====== GOOGLE REVIEWS ====== */}
      <section className="bg-gray-800 py-16 sm:py-20">
        <AnimatedSection className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <GlowCard>
            <div className="rounded-2xl border border-gray-700/50 bg-gray-700/50 p-5 shadow-xl sm:p-12">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                  What Our Customers Say
                </p>

                {/* Stars */}
                <div className="mt-5 flex items-center justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-7 w-7 text-yellow-400 sm:h-12 sm:w-12"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Rating */}
                <div className="mt-5">
                  <span className="text-5xl font-extrabold text-white sm:text-7xl">
                    {business.rating}
                  </span>
                  <span className="ml-3 text-2xl font-bold text-gray-400">/ 5.0</span>
                </div>

                <p className="mt-4 text-lg text-gray-300">
                  Based on{" "}
                  <span className="font-extrabold text-brand-red">
                    {business.reviewCount}
                  </span>{" "}
                  verified {business.reviewPlatform} reviews
                </p>

                {/* Divider */}
                <div className="mx-auto mt-8 h-px w-32 bg-brand-red/40" />

                <p className="mt-6 text-base italic leading-relaxed text-gray-200 sm:mt-8 sm:text-2xl">
                  &ldquo;The most reliable appliance repair company we&apos;ve ever used.
                  Fast, honest, and they truly care about their customers.&rdquo;
                </p>
                <p className="mt-3 text-base font-semibold text-brand-red">
                  &mdash; A satisfied Bradenton customer
                </p>
              </div>
            </div>
          </GlowCard>

          {/* Scrolling testimonials */}
          <TestimonialMarquee />
        </AnimatedSection>
      </section>

      {/* ====== SERVICES ====== */}
      <div className="bg-gray-100">
        <ServicesGallery />
      </div>

      {/* ====== OUR PROMISE ====== */}
      <section className="bg-gray-800 py-16 sm:py-24">
        <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Our Promise <span className="text-brand-red">to You</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              We treat every home like our own. Here&apos;s what you can always expect from us.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {promises.map((promise) => (
              <GlowCard key={promise.title}>
                <div className="rounded-2xl border border-gray-700/50 bg-gray-700/50 p-8 text-center shadow-md transition-all hover:border-brand-red/40 hover:shadow-xl">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-red text-white shadow-lg shadow-red-900/40">
                    {promise.icon}
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold text-white">
                    {promise.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-gray-300">
                    {promise.description}
                  </p>
                </div>
              </GlowCard>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ====== SERVICE AREAS ====== */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 z-0 flex items-center">
          <ScrollingImages />
        </div>
        <div className="absolute inset-0 z-[1] bg-gray-100/65" />
        <AnimatedSection className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Proudly Serving <span className="text-brand-red">Our Community</span>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm leading-relaxed text-gray-600 sm:mt-4 sm:text-lg">
            From the beaches of Sarasota to the growing neighborhoods of Parrish,
            we&apos;re your neighbors. Our technicians live and work right here in
            Manatee and Sarasota counties, and we treat every customer like family.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-14 sm:gap-4">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/service-areas/${location.slug}`}
                className="group relative overflow-hidden rounded-full border-2 border-gray-300 bg-white/90 px-4 py-2 text-sm font-bold text-gray-900 shadow-sm transition-all hover:border-brand-red hover:shadow-lg hover:shadow-red-900/30 sm:px-6 sm:py-3 sm:text-base"
              >
                <span className="absolute inset-0 bg-brand-red translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  {location.name}, {location.state}
                </span>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ====== BRANDS ====== */}
      <section className="border-t border-gray-700 bg-gray-800 py-16 sm:py-20">
        <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Trusted by <span className="text-brand-red">Leading Brands</span>
            </h2>
            <p className="mt-3 text-lg text-gray-400">
              Factory-trained technicians for all major appliance manufacturers
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
            {brands.map((brand) => (
              <GlowCard key={brand.name} className="rounded-xl">
                <div
                  className={`flex h-full flex-col items-center justify-center rounded-xl border px-4 py-6 text-center transition-all ${
                    brand.name === "LG"
                      ? "border-brand-red bg-brand-red/10 shadow-lg shadow-red-900/20"
                      : "border-gray-700/50 bg-gray-700/50 hover:border-gray-500"
                  }`}
                >
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={120}
                    height={96}
                    className={`w-auto object-contain brightness-0 invert ${
                      brand.name === "GE" ? "h-14 sm:h-28" : "h-12 sm:h-24"
                    }`}
                  />
                  {brand.name === "LG" && (
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-red-400">
                      Authorized Repair Center
                    </p>
                  )}
                </div>
              </GlowCard>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ====== CTA — V3 "Your Neighbors Trust Us" message, V1 dramatic red banner ====== */}
      <section className="relative py-16 sm:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/cta-bg.webp')" }}
        >
          <div className="absolute inset-0 bg-gray-900/80" />
        </div>
        <AnimatedSection className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Your Neighbors Trust Us
            <br />
            <span className="text-brand-red">You Can Too</span>
          </h2>
          <p className="mt-6 text-lg text-red-100 sm:text-xl">
            Join the hundreds of families in Bradenton and Sarasota who count on
            A Plus Appliance Repair. Same-day appointments. Fair pricing. Guaranteed work.
          </p>

          <a
            href="tel:+19415272206"
            className="group relative mt-8 inline-flex items-center gap-3 overflow-hidden rounded-xl bg-brand-red px-8 py-4 text-xl font-extrabold text-white shadow-2xl outline outline-1 outline-brand-red transition-all hover:scale-105 sm:mt-10 sm:px-10 sm:py-5 sm:text-3xl"
          >
            <span className="absolute inset-0 bg-white translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
            <svg
              className="relative z-10 h-7 w-7 transition-colors duration-300 group-hover:text-brand-red"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-red">(941) 527-2206</span>
          </a>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="text-lg font-bold text-white underline decoration-white/60 underline-offset-4 transition-colors hover:decoration-white"
            >
              Contact Us
            </Link>
          </div>

          <p className="mt-4 text-sm text-red-200">
            Available 24/7 &mdash; because appliance emergencies don&apos;t wait
          </p>
        </AnimatedSection>
      </section>

      {/* Schema Markup */}
      <SchemaMarkup data={generateLocalBusinessSchema(business)} />
      <SchemaMarkup data={generateWebsiteSchema(business)} />
    </>
  );
}
