import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import SchemaMarkup from "@/components/SchemaMarkup";
import AnimatedSection from "@/components/AnimatedSection";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: location.keywords,
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `${business.url}/service-areas/${location.slug}`,
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  const descriptionParagraphs = location.description.split("\n\n");

  return (
    <>
      <Hero
        title={`${location.name} Appliance Repair`}
        subtitle={`Professional appliance repair services in ${location.name}, ${location.state}. Same-day appointments available. Call (941) 527-2206.`}
      />

      {/* Location Description */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">
              {descriptionParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-6 text-base leading-relaxed text-gray-700 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Available */}
      <section className="bg-gray-800 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Services Available in {location.name}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-300">
              Full-service appliance repair for all major brands
            </p>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex items-center gap-4 rounded-lg border border-gray-600 bg-gray-700/50 p-4 transition-all hover:border-brand-red hover:shadow-md sm:p-5"
                >
                  <span className="text-3xl">{service.icon}</span>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-brand-red">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      {service.shortDescription.split(".")[0]}.
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="bg-gray-100 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Neighborhoods We Serve
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
              Appliance repair throughout {location.name} and surrounding neighborhoods
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {location.neighborhoods.map((neighborhood) => (
                <span
                  key={neighborhood}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
                >
                  {neighborhood}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ZIP Codes */}
      <section className="bg-gray-800 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              ZIP Codes We Cover
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-300">
              Serving all {location.name} zip codes with fast response times
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {location.zipCodes.map((zip) => (
                <span
                  key={zip}
                  className="rounded-lg border-none bg-brand-red px-5 py-3 text-lg font-bold text-white"
                >
                  {zip}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call To Action */}
      <CallToAction
        title={`Need Appliance Repair in ${location.name}?`}
        subtitle="Fast, reliable service with upfront pricing. Same-day appointments available."
      />

      {/* Schema Markup */}
      <SchemaMarkup data={generateLocalBusinessSchema(business, location)} />
      <SchemaMarkup
        data={generateBreadcrumbSchema([
          { name: "Home", url: business.url },
          { name: "Service Areas", url: `${business.url}/service-areas` },
          {
            name: location.name,
            url: `${business.url}/service-areas/${location.slug}`,
          },
        ])}
      />
    </>
  );
}
