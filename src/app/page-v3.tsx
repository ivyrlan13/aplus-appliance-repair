import type { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
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
  "bg-red-50",
  "bg-blue-50",
  "bg-amber-50",
  "bg-emerald-50",
  "bg-purple-50",
  "bg-cyan-50",
];

const promises = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast Response",
    description:
      "Same-day and next-day appointments available. We know a broken appliance can't wait, so we prioritize getting to you quickly.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Fair Pricing",
    description:
      "Upfront, written estimates before any work begins. No hidden fees, no surprise charges. You approve the price before we start.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Guaranteed Work",
    description:
      "Every repair is backed by our parts and labor warranty. If something isn't right, we come back and make it right at no extra cost.",
  },
];

const brands = ["LG", "GE", "Samsung", "Frigidaire", "Whirlpool", "Maytag", "Sears", "KitchenAid"];

export default function HomePageV3() {
  return (
    <>
      {/* ====== WARM HERO ====== */}
      <section className="relative bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://aplus-appliancerepair.com/wp-content/uploads/2025/11/GettyImages-2205544744-scaled.jpg')",
          }}
        >
          {/* Warm overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/60 via-gray-900/70 to-gray-900/85" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium text-amber-200">Family-Owned</span>
              <span className="h-1 w-1 rounded-full bg-amber-300" />
              <span className="text-sm font-medium text-amber-200">Trusted Since 2004</span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Family&apos;s Appliances
              <br />
              <span className="text-amber-300">Deserve the Best Care</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-200 sm:text-xl">
              For over 20 years, families across Bradenton and Sarasota have trusted
              A Plus Appliance Repair to keep their homes running. LG Authorized.
              Available 24/7.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+19415272206"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-red px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl sm:w-auto"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (941) 527-2206
              </a>
              <Link
                href="/services"
                className="inline-flex w-full items-center justify-center rounded-lg border-2 border-white/60 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-gray-900 sm:w-auto"
              >
                See Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====== GOOGLE REVIEWS - PROMINENT SOCIAL PROOF ====== */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-100 bg-gradient-to-b from-amber-50/50 to-white p-8 shadow-sm sm:p-12">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-body">
                What Our Customers Say
              </p>

              {/* Stars */}
              <div className="mt-4 flex items-center justify-center gap-1.5">
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

              {/* Rating */}
              <div className="mt-4">
                <span className="text-5xl font-extrabold text-brand-dark sm:text-6xl">
                  {business.rating}
                </span>
                <span className="ml-2 text-xl text-brand-body">/ 5.0</span>
              </div>

              <p className="mt-3 text-lg text-brand-body">
                Based on{" "}
                <span className="font-bold text-brand-dark">
                  {business.reviewCount}
                </span>{" "}
                verified {business.reviewPlatform} reviews
              </p>

              {/* Divider */}
              <div className="mx-auto mt-6 h-px w-24 bg-gray-200" />

              <p className="mt-6 text-base italic text-brand-body">
                &ldquo;The most reliable appliance repair company we&apos;ve ever used.
                Fast, honest, and they truly care about their customers.&rdquo;
              </p>
              <p className="mt-2 text-sm font-medium text-brand-dark">
                &mdash; A satisfied Bradenton customer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SERVICES - IMAGE-CARD TILES ====== */}
      <section className="bg-brand-light py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
            What We Repair
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-brand-body">
            Expert care for every appliance in your home
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group overflow-hidden rounded-2xl shadow-sm transition-all hover:shadow-lg"
              >
                <div
                  className={`${serviceCardColors[index % serviceCardColors.length]} flex flex-col items-center px-6 pb-6 pt-8`}
                >
                  <span className="text-6xl">{service.icon}</span>
                  <h3 className="mt-4 text-xl font-extrabold text-brand-dark group-hover:text-brand-red">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-center text-sm leading-relaxed text-brand-body">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-red">
                    Learn More
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== OUR PROMISE ====== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
              Our Promise to You
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-body">
              We treat every home like our own. Here&apos;s what you can always expect from us.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {promises.map((promise) => (
              <div
                key={promise.title}
                className="rounded-2xl border border-gray-100 bg-gradient-to-b from-amber-50/30 to-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-red text-white">
                  {promise.icon}
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-brand-dark">
                  {promise.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-body">
                  {promise.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SERVICE AREAS ====== */}
      <section className="bg-brand-light py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
            Proudly Serving Our Community
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-relaxed text-brand-body">
            From the beaches of Sarasota to the growing neighborhoods of Parrish,
            we&apos;re your neighbors. Our technicians live and work right here in
            Manatee and Sarasota counties, and we treat every customer like family.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/service-areas/${location.slug}`}
                className="group rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-brand-dark shadow-sm transition-all hover:border-brand-red hover:bg-brand-red hover:text-white"
              >
                {location.name}, {location.state}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== BRANDS - TRUSTED BY LEADING BRANDS ====== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-brand-dark sm:text-3xl">
              Trusted by Leading Brands
            </h2>
            <p className="mt-2 text-brand-body">
              Factory-trained technicians for all major appliance manufacturers
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
            {brands.map((brand) => (
              <div
                key={brand}
                className={`flex items-center justify-center rounded-xl border px-4 py-5 text-center transition-all ${
                  brand === "LG"
                    ? "border-brand-red bg-red-50"
                    : "border-gray-200 bg-gray-50 hover:border-gray-300"
                }`}
              >
                <div>
                  <span
                    className={`text-xl font-bold sm:text-2xl ${
                      brand === "LG" ? "text-brand-red" : "text-brand-dark"
                    }`}
                  >
                    {brand}
                  </span>
                  {brand === "LG" && (
                    <p className="mt-0.5 text-xs font-medium text-red-600">
                      Authorized Repair Center
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== WARM CTA ====== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-red-50 py-16 sm:py-24">
        {/* Decorative warm circles */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-amber-100/50" />
        <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-red-100/40" />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
            Your Neighbors Trust Us &mdash;
            <br />
            <span className="text-brand-red">You Can Too</span>
          </h2>
          <p className="mt-4 text-lg text-brand-body">
            Join the hundreds of families in Bradenton and Sarasota who count on
            A Plus Appliance Repair. Same-day appointments. Fair pricing. Guaranteed work.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+19415272206"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-red px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl sm:w-auto"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (941) 527-2206
            </a>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-lg border-2 border-brand-dark px-8 py-4 text-lg font-bold text-brand-dark transition-all hover:bg-brand-dark hover:text-white sm:w-auto"
            >
              Contact Us
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-500">
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
