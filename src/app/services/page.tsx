import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/CallToAction";
import SchemaMarkup from "@/components/SchemaMarkup";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "A Plus Appliance Repair offers washer, dryer, refrigerator, dishwasher, oven & range repair, and dryer vent cleaning in Bradenton & Sarasota FL. Call (941) 527-2206.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Our Appliance Repair Services"
        subtitle="From washers and dryers to refrigerators and ovens, we repair all major household appliances with expert care and fast turnaround."
      />

      {/* Services Grid */}
      <section className="bg-gray-100 py-16 sm:py-20">
        <AnimatedSection>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Expert Appliance Repair
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
              Professional diagnostics and repairs for all major household appliances
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
        </AnimatedSection>
      </section>

      {/* Call To Action */}
      <CallToAction
        title="Ready to Schedule a Repair?"
        subtitle="Our expert technicians are standing by. Same-day appointments available."
      />

      {/* Schema Markup */}
      <SchemaMarkup
        data={generateBreadcrumbSchema([
          { name: "Home", url: business.url },
          { name: "Services", url: `${business.url}/services` },
        ])}
      />
    </>
  );
}
