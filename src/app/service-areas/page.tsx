import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import SchemaMarkup from "@/components/SchemaMarkup";
import { business } from "@/data/business";
import { locations } from "@/data/locations";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "A Plus Appliance Repair serves Bradenton, Sarasota, Venice, Palmetto, Lakewood Ranch, Ellenton, Nokomis, Osprey, and Parrish FL. Call (941) 527-2206 for same-day service.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <Hero
        title="Our Service Areas"
        subtitle="Providing expert appliance repair throughout Manatee and Sarasota counties. Same-day and next-day appointments available in all areas."
      />

      {/* Locations Grid */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/service-areas/${location.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand-red hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red">
                  {location.name}, {location.state}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  ZIP Codes: {location.zipCodes.join(", ")}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-red transition-colors group-hover:text-red-700">
                  View Details
                  <span className="ml-1 transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <CallToAction
        title="Serving Your Area? Call Us Today!"
        subtitle="Professional appliance repair with fast response times throughout the region."
      />

      {/* Schema Markup */}
      <SchemaMarkup
        data={generateBreadcrumbSchema([
          { name: "Home", url: business.url },
          { name: "Service Areas", url: `${business.url}/service-areas` },
        ])}
      />
    </>
  );
}
