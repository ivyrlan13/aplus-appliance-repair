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

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "416", label: "Google Reviews" },
  { value: "24/7", label: "Emergency Service" },
  { value: "LG", label: "Authorized Center" },
];

const brands = [
  { name: "LG", featured: true },
  { name: "GE", featured: false },
  { name: "Samsung", featured: false },
  { name: "Frigidaire", featured: false },
  { name: "Whirlpool", featured: false },
  { name: "Maytag", featured: false },
  { name: "Sears", featured: false },
  { name: "KitchenAid", featured: false },
];

export default function HomePageV1() {
  return (
    <>
      {/* ====== FULL-SCREEN HERO ====== */}
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
          <p className="mb-4 inline-block rounded-full bg-brand-red/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-brand-red">
            Bradenton &amp; Sarasota&apos;s #1 Choice
          </p>
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Expert Appliance
            <br />
            <span className="text-brand-red">Repair You Can Trust</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Over 20 years of fast, reliable service. LG Authorized Repair Center
            serving Manatee and Sarasota counties. Same-day appointments available.
          </p>

          {/* Phone Number - Front & Center */}
          <div className="mt-10">
            <a
              href="tel:+19415272206"
              className="inline-flex items-center gap-3 rounded-xl bg-brand-red px-10 py-5 text-2xl font-extrabold text-white shadow-2xl shadow-red-900/40 transition-all hover:scale-105 hover:bg-red-700 sm:text-3xl"
            >
              <svg
                className="h-8 w-8"
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
              (941) 527-2206
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-gray-400">
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
      </section>

      {/* ====== ANIMATED STATS BAR ====== */}
      <section className="bg-brand-red">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-extrabold text-white sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-medium text-red-100 sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SERVICES - ALTERNATING LEFT/RIGHT ====== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-brand-body">
            Expert repair for all major household appliances
          </p>

          <div className="mt-16 space-y-16">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className={`flex flex-col items-center gap-8 lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon Side */}
                <div className="flex h-40 w-40 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-light shadow-lg sm:h-48 sm:w-48">
                  <span className="text-7xl sm:text-8xl">{service.icon}</span>
                </div>

                {/* Content Side */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-extrabold text-brand-dark sm:text-3xl">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-brand-body">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-lg font-bold text-brand-red transition-colors hover:text-red-700"
                  >
                    Learn More
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TESTIMONIAL / SOCIAL PROOF ====== */}
      <section className="bg-brand-light py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          {/* Large quote marks */}
          <div className="text-8xl leading-none text-brand-red/20">&ldquo;</div>
          <p className="mt-2 text-2xl font-semibold italic leading-relaxed text-brand-dark sm:text-3xl">
            The most trusted appliance repair company in Bradenton and Sarasota.
            Over 20 years of keeping families running smoothly.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-8 w-8 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="mt-4">
            <span className="text-4xl font-extrabold text-brand-dark">{business.rating}</span>
            <span className="ml-2 text-lg text-brand-body">out of 5</span>
          </div>
          <p className="mt-2 text-lg text-brand-body">
            Based on <span className="font-bold text-brand-dark">{business.reviewCount}</span> Google Reviews
          </p>
        </div>
      </section>

      {/* ====== FULL-WIDTH RED CTA BANNER ====== */}
      <section className="bg-brand-red py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Need Appliance Repair? Call Us Now!
          </h2>
          <p className="mt-4 text-lg text-red-100">
            Same-day appointments available. No hidden fees. Satisfaction guaranteed.
          </p>
          <a
            href="tel:+19415272206"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-10 py-5 text-xl font-extrabold text-brand-red shadow-lg transition-all hover:scale-105 hover:bg-gray-100"
          >
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            (941) 527-2206
          </a>
          <p className="mt-3 text-sm text-red-200">
            Available 24/7 for emergency repairs
          </p>
        </div>
      </section>

      {/* ====== SERVICE AREAS - HORIZONTAL SCROLLING CITY CARDS ====== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
            Serving Bradenton, Sarasota &amp; Beyond
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-brand-body">
            Professional appliance repair throughout Manatee and Sarasota counties
          </p>

          <div className="mt-12 flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/service-areas/${location.slug}`}
                className="group flex-shrink-0 snap-start rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-brand-red hover:shadow-lg sm:p-8"
                style={{ minWidth: "260px" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10">
                    <svg
                      className="h-6 w-6 text-brand-red"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-brand-dark group-hover:text-brand-red">
                      {location.name}
                    </h3>
                    <p className="text-sm text-gray-500">{location.state}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-brand-body">
                  {location.zipCodes.length} zip codes served
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== BRANDS - SINGLE ROW ====== */}
      <section className="border-t border-gray-200 bg-brand-light py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-brand-body">
            Brands We Service
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {brands.map((brand) => (
              <span
                key={brand.name}
                className={`text-2xl font-bold transition-colors sm:text-3xl ${
                  brand.featured
                    ? "text-brand-red"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <SchemaMarkup data={generateLocalBusinessSchema(business)} />
      <SchemaMarkup data={generateWebsiteSchema(business)} />
    </>
  );
}
