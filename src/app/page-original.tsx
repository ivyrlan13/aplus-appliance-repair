import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import BrandGrid from "@/components/BrandGrid";
import CallToAction from "@/components/CallToAction";
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

const features = [
  {
    icon: (
      <svg className="h-8 w-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "20+ Years Experience",
    description:
      "Two decades of expert appliance repair serving Bradenton, Sarasota, and surrounding communities.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "LG Authorized",
    description:
      "Factory-certified LG Authorized Repair Center with access to genuine parts and specialized training.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Available 24/7",
    description:
      "Emergency appliance repair available around the clock. Same-day and next-day appointments.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "4.9 Star Rating",
    description:
      "Rated 4.9 stars from 416 Google reviews. Our customers trust us for quality and reliability.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Bradenton & Sarasota's Trusted Appliance Repair Experts"
        subtitle="Fast, reliable appliance repair with over 20 years of experience. LG Authorized Repair Center serving Manatee and Sarasota counties. Same-day appointments available."
      />

      {/* Services Section */}
      <section className="bg-brand-light py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-brand-body">
            Expert repair for all major household appliances
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                name={service.name}
                description={service.shortDescription}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
            Why Choose A Plus Appliance Repair
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-brand-body">
            The trusted name in appliance repair across the Gulf Coast
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-brand-dark">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-body">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <BrandGrid />

      {/* Service Areas */}
      <section className="bg-brand-light py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
            Serving Bradenton, Sarasota &amp; Beyond
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-brand-body">
            Professional appliance repair throughout Manatee and Sarasota counties
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/service-areas/${location.slug}`}
                className="group rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm transition-all hover:border-brand-red hover:shadow-md sm:p-6"
              >
                <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-red">
                  {location.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {location.state}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <CallToAction
        title="Need Appliance Repair? Call Us Now!"
        subtitle="Same-day appointments available. No hidden fees. Satisfaction guaranteed."
      />

      {/* Schema Markup */}
      <SchemaMarkup data={generateLocalBusinessSchema(business)} />
      <SchemaMarkup data={generateWebsiteSchema(business)} />
    </>
  );
}
