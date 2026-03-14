import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ReviewBadge from "@/components/ReviewBadge";
import CallToAction from "@/components/CallToAction";
import SchemaMarkup from "@/components/SchemaMarkup";
import AnimatedSection from "@/components/AnimatedSection";
import { GlowCard } from "@/components/GlowCard";
import { business } from "@/data/business";
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about A Plus Appliance Repair — over 20 years of expert appliance repair in Bradenton & Sarasota FL. LG Authorized Repair Center. 4.9 stars, 416 reviews.",
};

const trustSignals = [
  {
    icon: (
      <svg className="h-8 w-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Licensed & Insured",
    description:
      "Fully licensed and insured for your protection. Every repair is backed by our parts and labor warranty.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Upfront Pricing",
    description:
      "No hidden fees or surprise charges. We provide a written estimate before starting any work so you know the cost upfront.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Same-Day Service",
    description:
      "We understand appliance emergencies. Same-day and next-day appointments are available throughout our service area.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Customer Focused",
    description:
      "With 416 five-star Google reviews and a 4.9 rating, our dedication to customer satisfaction speaks for itself.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About A Plus Appliance Repair"
        subtitle="Over 20 years of trusted appliance repair in Bradenton, Sarasota, and surrounding communities."
      />

      {/* Company Story */}
      <section className="bg-white py-16 sm:py-20">
        <AnimatedSection className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
            Our Story
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-brand-body sm:text-lg">
            <p>
              Founded in {business.foundedYear}, A Plus Appliance Repair has grown
              from a one-person operation into the most trusted appliance repair
              company in the Bradenton-Sarasota region. With over{" "}
              {business.yearsInBusiness} years of hands-on experience, our team of
              factory-trained technicians has repaired thousands of appliances for
              homeowners and businesses throughout Manatee and Sarasota counties.
            </p>
            <p>
              We take pride in running our business with the values of a
              family-owned company: honest communication, fair pricing, and genuine
              care for every customer. When you call A Plus Appliance Repair, you
              get a real person who listens to your problem, schedules a convenient
              appointment, and sends a skilled technician who shows up on time and
              gets the job done right. No corporate runaround, no upselling, and no
              hidden fees.
            </p>
            <p>
              Over the years, we have built our reputation one repair at a time.
              Our {business.rating}-star rating from {business.reviewCount} Google
              reviews reflects the consistent quality and professionalism we bring
              to every service call. We treat your home with respect, explain every
              repair in plain language, and stand behind our work with a
              comprehensive parts and labor warranty.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* LG Authorized */}
      <section className="bg-gray-800 py-16 sm:py-20">
        <AnimatedSection className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              LG Authorized Repair Center
            </h2>
            <div className="mx-auto mt-8 max-w-3xl space-y-6 text-base leading-relaxed text-gray-300 sm:text-lg">
              <p>
                A Plus Appliance Repair is proud to be an LG Authorized Repair
                Center. This designation means our technicians have completed
                LG&apos;s rigorous factory training program and are certified to
                perform warranty and out-of-warranty repairs on all LG appliance
                products.
              </p>
              <p>
                As an authorized center, we have direct access to genuine LG
                replacement parts, specialized diagnostic tools, and technical
                support from LG engineers. Whether you own an LG refrigerator with
                InstaView, a TurboWash washing machine, or an LG smart range, you
                can trust that our technicians have the specific knowledge and
                factory-certified parts to repair it correctly.
              </p>
              <p>
                While we specialize in LG products, we service all major appliance
                brands with the same level of expertise and dedication. Our brand
                coverage includes {business.brands.join(", ")}, and more.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Why Customers Trust Us */}
      <section className="bg-gray-100 py-16 sm:py-20">
        <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
            Why Customers Trust Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-brand-body">
            Building trust through quality workmanship and honest service since{" "}
            {business.foundedYear}
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustSignals.map((signal) => (
              <GlowCard key={signal.title}>
                <div className="rounded-2xl border border-gray-700/50 bg-gray-800 p-8 text-center text-white shadow-md transition-all hover:border-brand-red/40 hover:shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-red text-white shadow-lg shadow-red-900/40">
                    {signal.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">
                    {signal.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">
                    {signal.description}
                  </p>
                </div>
              </GlowCard>
            ))}
          </div>

          {/* Review Badge */}
          <div className="mt-12 flex justify-center">
            <ReviewBadge />
          </div>
        </AnimatedSection>
      </section>

      {/* Call To Action */}
      <CallToAction
        title="Ready to Experience the A Plus Difference?"
        subtitle="Join thousands of satisfied customers across the Gulf Coast. Call us today."
      />

      {/* Schema Markup */}
      <SchemaMarkup data={generateLocalBusinessSchema(business)} />
      <SchemaMarkup
        data={generateBreadcrumbSchema([
          { name: "Home", url: business.url },
          { name: "About Us", url: `${business.url}/about` },
        ])}
      />
    </>
  );
}
