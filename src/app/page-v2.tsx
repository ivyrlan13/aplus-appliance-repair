import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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

const whyUsItems = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Licensed & Insured",
    description: "Fully licensed professionals with comprehensive insurance coverage for your peace of mind.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Same-Day Service",
    description: "Urgent repair? We offer same-day and next-day appointments to minimize your downtime.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Upfront Pricing",
    description: "No hidden fees or surprise charges. We provide written estimates before any work begins.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Warranty Backed",
    description: "Every repair comes with a parts and labor warranty for your complete confidence.",
  },
];

const brands = ["LG", "GE", "Samsung", "Frigidaire", "Whirlpool", "Maytag", "Sears", "KitchenAid"];

export default function HomePageV2() {
  return (
    <>
      {/* ====== SPLIT HERO ====== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[70vh] items-center gap-8 py-12 lg:grid-cols-2 lg:gap-16 lg:py-0">
            {/* Left: Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-brand-red">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                4.9 Stars from 416 Reviews
              </div>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
                Bradenton &amp; Sarasota&apos;s Trusted
                <span className="text-brand-red"> Appliance Repair</span> Experts
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-relaxed text-brand-body">
                Fast, reliable appliance repair with over 20 years of experience.
                LG Authorized Repair Center serving Manatee and Sarasota counties.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+19415272206"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-red px-8 py-4 text-lg font-bold text-white shadow-sm transition-all hover:bg-red-700"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (941) 527-2206
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-brand-dark px-8 py-4 text-lg font-bold text-brand-dark transition-all hover:bg-brand-dark hover:text-white"
                >
                  Our Services
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-brand-body">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  20+ Years Experience
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  LG Authorized
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Available 24/7
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://aplus-appliancerepair.com/wp-content/uploads/2025/11/GettyImages-2205544744-scaled.jpg"
                  alt="A Plus Appliance Repair technician servicing an appliance"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-white px-4 py-3 shadow-lg sm:-bottom-6 sm:-left-6 sm:px-6 sm:py-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-extrabold text-brand-dark sm:text-3xl">{business.rating}</span>
                  <div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs text-brand-body">{business.reviewCount} Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== THIN RED ACCENT STATS BAR ====== */}
      <section className="bg-brand-red">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm font-semibold text-white sm:text-base">
            <span>20+ Years Experience</span>
            <span className="hidden h-4 w-px bg-red-300 sm:inline-block" />
            <span>416 Google Reviews</span>
            <span className="hidden h-4 w-px bg-red-300 sm:inline-block" />
            <span>24/7 Emergency Service</span>
            <span className="hidden h-4 w-px bg-red-300 sm:inline-block" />
            <span>LG Authorized Center</span>
          </div>
        </div>
      </section>

      {/* ====== SERVICES - CLEAN 3x2 GRID ====== */}
      <section className="bg-brand-light py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-brand-body">
            Expert repair for all major household appliances
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                {/* Red accent line on top */}
                <div className="absolute inset-x-0 top-0 h-1 bg-brand-red opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="mb-4 text-4xl">{service.icon}</div>
                <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-red">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-body">
                  {service.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-red opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== WHY A PLUS? ====== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
            Why A Plus?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-brand-body">
            What sets us apart from the rest
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyUsItems.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-brand-dark">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-body">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SERVICE AREAS - MAP-STYLE GRID ====== */}
      <section className="bg-brand-light py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
            Service Areas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-brand-body">
            Professional appliance repair throughout Manatee and Sarasota counties
          </p>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/service-areas/${location.slug}`}
                className="group flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-5 transition-all hover:border-brand-red hover:shadow-sm"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark group-hover:text-brand-red">
                    {location.name}, {location.state}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    ZIP: {location.zipCodes.join(", ")}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== BRANDS - SUBTLE GRAYSCALE ROW ====== */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            We service all major brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-xl font-bold text-gray-300 transition-colors hover:text-brand-dark sm:text-2xl"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ====== ELEGANT CTA ====== */}
      <section className="bg-brand-light py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
            Ready to Get Your Appliance Fixed?
          </h2>
          <p className="mt-4 text-lg text-brand-body">
            Same-day appointments available. No hidden fees. Satisfaction guaranteed.
          </p>
          <a
            href="tel:+19415272206"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-red px-8 py-4 text-lg font-bold text-white shadow-sm transition-all hover:bg-red-700"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call (941) 527-2206
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Or call us anytime &mdash; we&apos;re available 24/7
          </p>
        </div>
      </section>

      {/* Schema Markup */}
      <SchemaMarkup data={generateLocalBusinessSchema(business)} />
      <SchemaMarkup data={generateWebsiteSchema(business)} />
    </>
  );
}
