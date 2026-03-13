import type { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import AnimatedHero from "@/components/AnimatedHero";
import GlowingCard from "@/components/GlowingCard";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import TestimonialMarquee from "@/components/TestimonialMarquee";
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
  ],
  openGraph: {
    title: "Appliance Repair Bradenton & Sarasota FL | A Plus Appliance Repair",
    description:
      "Fast, reliable appliance repair in Bradenton & Sarasota FL. 20+ years experience, LG Authorized, 4.9 stars. Call (941) 527-2206.",
    url: "https://aplusappliancerepairbradenton.com",
  },
};

const serviceCardColors = [
  "bg-red-900/40 border-red-700/30",
  "bg-blue-900/40 border-blue-700/30",
  "bg-amber-900/40 border-amber-700/30",
  "bg-emerald-900/40 border-emerald-700/30",
  "bg-purple-900/40 border-purple-700/30",
  "bg-cyan-900/40 border-cyan-700/30",
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

const brands = ["LG", "GE", "Samsung", "Frigidaire", "Whirlpool", "Maytag", "Sears", "KitchenAid"];

export default function HomePage() {
  return (
    <>
      {/* ====== ANIMATED HERO with cycling brand names ====== */}
      <AnimatedHero />

      {/* ====== GOOGLE REVIEWS — V3 layout, V1 dark/dramatic styling ====== */}
      <section className="bg-gray-900 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <GlowingCard>
            <div className="rounded-2xl border border-gray-700/50 bg-gray-800/60 p-8 shadow-2xl sm:p-12">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                  What Our Customers Say
                </p>

                {/* Stars — large like V1 */}
                <div className="mt-5 flex items-center justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-10 w-10 text-yellow-400 sm:h-12 sm:w-12"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Rating — massive V1 style */}
                <div className="mt-5">
                  <span className="text-6xl font-extrabold text-white sm:text-7xl">
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

                <p className="mt-8 text-xl italic leading-relaxed text-gray-200 sm:text-2xl">
                  &ldquo;The most reliable appliance repair company we&apos;ve ever used.
                  Fast, honest, and they truly care about their customers.&rdquo;
                </p>
                <p className="mt-3 text-base font-semibold text-brand-red">
                  &mdash; A satisfied Bradenton customer
                </p>
              </div>
            </div>
          </GlowingCard>

          {/* Scrolling testimonials */}
          <TestimonialMarquee />
        </div>
      </section>

      {/* ====== SERVICES — V3 tile grid, V1 bold dark styling ====== */}
      <section className="bg-gray-950 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            What We <span className="text-brand-red">Repair</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-400">
            Expert care for every appliance in your home
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <GlowingCard key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/50 shadow-lg transition-all hover:border-brand-red/50 hover:shadow-2xl hover:shadow-red-900/20"
                >
                  <div
                    className={`${serviceCardColors[index % serviceCardColors.length]} flex flex-col items-center border-b px-6 pb-8 pt-10`}
                  >
                    <span className="text-7xl sm:text-8xl">{service.icon}</span>
                    <h3 className="mt-5 text-2xl font-extrabold text-white group-hover:text-brand-red">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-center text-sm leading-relaxed text-gray-300">
                      {service.shortDescription}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-base font-bold text-brand-red">
                      Learn More
                      <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </GlowingCard>
            ))}
          </div>
        </div>
      </section>

      {/* ====== OUR PROMISE — V3 3-card layout, V1 dark bold styling ====== */}
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              <div
                key={promise.title}
                className="rounded-2xl border border-gray-700/50 bg-gray-800/60 p-8 text-center shadow-lg transition-all hover:border-brand-red/40 hover:shadow-xl"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* ====== SERVICE AREAS — V3 community messaging, V1 bold dark treatment ====== */}
      <section className="bg-gray-950 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Proudly Serving <span className="text-brand-red">Our Community</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-relaxed text-gray-400">
            From the beaches of Sarasota to the growing neighborhoods of Parrish,
            we&apos;re your neighbors. Our technicians live and work right here in
            Manatee and Sarasota counties, and we treat every customer like family.
          </p>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/service-areas/${location.slug}`}
                className="group rounded-full border-2 border-gray-600 bg-gray-800/60 px-6 py-3 text-base font-bold text-white shadow-sm transition-all hover:border-brand-red hover:bg-brand-red hover:shadow-lg hover:shadow-red-900/30"
              >
                {location.name}, {location.state}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== BRANDS — V3 "Trusted by Leading Brands", V1 bold dark grid ====== */}
      <section className="border-t border-gray-800 bg-gray-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              <div
                key={brand}
                className={`flex items-center justify-center rounded-xl border px-4 py-6 text-center transition-all ${
                  brand === "LG"
                    ? "border-brand-red bg-brand-red/10 shadow-lg shadow-red-900/20"
                    : "border-gray-700/50 bg-gray-800/40 hover:border-gray-500"
                }`}
              >
                <div>
                  <span
                    className={`text-2xl font-extrabold sm:text-3xl ${
                      brand === "LG" ? "text-brand-red" : "text-white"
                    }`}
                  >
                    {brand}
                  </span>
                  {brand === "LG" && (
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-red-400">
                      Authorized Repair Center
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA — V3 "Your Neighbors Trust Us" message, V1 dramatic red banner ====== */}
      <section className="bg-brand-red py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Your Neighbors Trust Us &mdash;
            <br />
            You Can Too
          </h2>
          <p className="mt-6 text-lg text-red-100 sm:text-xl">
            Join the hundreds of families in Bradenton and Sarasota who count on
            A Plus Appliance Repair. Same-day appointments. Fair pricing. Guaranteed work.
          </p>

          <a
            href="tel:+19415272206"
            className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-xl bg-white px-10 py-5 text-2xl font-extrabold text-brand-red shadow-2xl outline outline-1 outline-white transition-all hover:scale-105 sm:text-3xl"
          >
            <span className="absolute inset-0 bg-brand-red translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
            <svg
              className="relative z-10 h-7 w-7 transition-colors duration-300 group-hover:text-white"
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
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">(941) 527-2206</span>
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
        </div>
      </section>

      {/* Schema Markup */}
      <SchemaMarkup data={generateLocalBusinessSchema(business)} />
      <SchemaMarkup data={generateWebsiteSchema(business)} />
    </>
  );
}
