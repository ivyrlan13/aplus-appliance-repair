import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import BrandGrid from "@/components/BrandGrid";
import CallToAction from "@/components/CallToAction";
import SchemaMarkup from "@/components/SchemaMarkup";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import {
  generateServiceSchema,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${business.url}/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const descriptionParagraphs = service.description.split("\n\n");

  return (
    <>
      <Hero
        title={service.name}
        subtitle={service.shortDescription}
      />

      {/* Service Description */}
      <section className="bg-white py-16 sm:py-20">
        <AnimatedSection>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
          </div>
        </AnimatedSection>
      </section>

      {/* Common Problems */}
      <section className="bg-gray-800 py-16 sm:py-20">
        <AnimatedSection>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Common Problems We Fix
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-300">
              Our experienced technicians diagnose and repair these issues and more
            </p>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {service.commonProblems.map((problem) => (
                <div
                  key={problem}
                  className="flex items-start gap-3 rounded-lg border border-gray-600 bg-gray-700/50 p-4 shadow-sm"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-100 sm:text-base">
                    {problem}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Brands We Service */}
      <BrandGrid />

      {/* Service Areas */}
      <section className="bg-gray-100 py-16 sm:py-20">
        <AnimatedSection>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Service Areas
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
              We provide {service.name.toLowerCase()} throughout these communities
            </p>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/service-areas/${location.slug}`}
                  className="group rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm transition-all hover:scale-[1.02] hover:border-brand-red hover:shadow-md sm:p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-red">
                    {location.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{location.state}</p>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Call To Action */}
      <CallToAction
        title={`Need ${service.name}? Call Now!`}
        subtitle="Fast, reliable service with upfront pricing. Same-day appointments available."
      />

      {/* Schema Markup */}
      <SchemaMarkup data={generateServiceSchema(service, business)} />
      <SchemaMarkup data={generateLocalBusinessSchema(business)} />
      <SchemaMarkup
        data={generateBreadcrumbSchema([
          { name: "Home", url: business.url },
          { name: "Services", url: `${business.url}/services` },
          {
            name: service.name,
            url: `${business.url}/services/${service.slug}`,
          },
        ])}
      />
      <SchemaMarkup data={generateFAQSchema(service, business)} />
    </>
  );
}
