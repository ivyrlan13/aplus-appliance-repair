import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import SchemaMarkup from "@/components/SchemaMarkup";
import AnimatedSection from "@/components/AnimatedSection";
import { GlowCard } from "@/components/GlowCard";
import { business } from "@/data/business";
import { locations } from "@/data/locations";
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact A Plus Appliance Repair for fast appliance repair in Bradenton & Sarasota FL. Call (941) 527-2206 or fill out our contact form. Available 24/7.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team for fast, reliable appliance repair. We're available 24/7 for emergency service."
      />

      {/* Contact Content */}
      <section className="bg-white py-16 sm:py-20">
        <AnimatedSection>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left Column - Contact Info */}
              <div>
                <div className="rounded-2xl bg-gray-800 p-8">
                  <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                    Get In Touch
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
                    Have a broken appliance? We&apos;re here to help. Call us directly
                    for the fastest response, or fill out the form and we&apos;ll get
                    back to you promptly.
                  </p>

                  {/* Phone */}
                  <div className="mt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                      Phone
                    </h3>
                    <a
                      href={`tel:${business.phoneRaw}`}
                      className="mt-2 block text-3xl font-extrabold text-brand-red transition-colors hover:text-red-400 sm:text-4xl"
                    >
                      {business.phone}
                    </a>
                    <p className="mt-1 text-sm text-gray-300">
                      Tap to call &mdash; available 24/7
                    </p>
                  </div>

                  {/* Email */}
                  <div className="mt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                      Email
                    </h3>
                    <a
                      href={`mailto:${business.email}`}
                      className="mt-2 block text-lg font-medium text-brand-blue transition-colors hover:text-blue-400"
                    >
                      {business.email}
                    </a>
                  </div>

                  {/* Address */}
                  <div className="mt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                      Address
                    </h3>
                    <p className="mt-2 text-lg text-gray-300">
                      {business.address.full}
                    </p>
                  </div>

                  {/* Hours */}
                  <div className="mt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                      Hours
                    </h3>
                    <p className="mt-2 text-lg font-medium text-white">
                      {business.hours.label}
                    </p>
                    <p className="mt-1 text-sm text-gray-300">
                      Emergency repairs available 7 days a week
                    </p>
                  </div>

                  {/* Service Areas */}
                  <div className="mt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                      Service Areas
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {locations.map((location) => (
                        <Link
                          key={location.slug}
                          href={`/service-areas/${location.slug}`}
                          className="rounded-full border border-gray-600 bg-gray-700 px-3 py-1 text-sm font-medium text-gray-300 transition-colors hover:border-brand-red hover:bg-red-900/40 hover:text-white"
                        >
                          {location.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div>
                <GlowCard>
                  <div className="rounded-xl bg-white p-6 sm:p-8">
                    <h2 className="text-2xl font-extrabold text-brand-dark">
                      Request Service
                    </h2>
                    <p className="mt-2 text-sm text-brand-body">
                      Fill out the form below and we&apos;ll contact you to schedule
                      your repair.
                    </p>

                    <form className="mt-6 space-y-5">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-brand-body"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          autoComplete="name"
                          required
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red"
                          placeholder="Your name"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-brand-body"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          autoComplete="tel"
                          required
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red"
                          placeholder="(941) 000-0000"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-brand-body"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          autoComplete="email"
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red"
                          placeholder="you@example.com"
                        />
                      </div>

                      {/* Appliance Type */}
                      <div>
                        <label
                          htmlFor="appliance"
                          className="block text-sm font-medium text-brand-body"
                        >
                          Appliance Type
                        </label>
                        <select
                          id="appliance"
                          name="appliance"
                          required
                          className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red"
                        >
                          <option value="">Select an appliance</option>
                          <option value="washer">Washer</option>
                          <option value="dryer">Dryer</option>
                          <option value="refrigerator">Refrigerator</option>
                          <option value="dishwasher">Dishwasher</option>
                          <option value="oven-range">Oven / Range</option>
                          <option value="dryer-vent">Dryer Vent Cleaning</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-brand-body"
                        >
                          Describe the Problem
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red"
                          placeholder="Tell us about the issue you're experiencing..."
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="group relative w-full overflow-hidden rounded-lg bg-brand-red px-6 py-4 text-base font-bold text-white shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
                      >
                        <span className="absolute inset-0 bg-white translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-red">
                          Request Service
                        </span>
                      </button>

                      <p className="text-center text-xs text-gray-500">
                        For fastest service, call us directly at{" "}
                        <a
                          href={`tel:${business.phoneRaw}`}
                          className="font-medium text-brand-red hover:text-red-700"
                        >
                          {business.phone}
                        </a>
                      </p>
                    </form>
                  </div>
                </GlowCard>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Call To Action */}
      <CallToAction
        title="Prefer to Call? We're Ready!"
        subtitle="Speak directly with our team for immediate scheduling and support."
      />

      {/* Schema Markup */}
      <SchemaMarkup data={generateLocalBusinessSchema(business)} />
      <SchemaMarkup
        data={generateBreadcrumbSchema([
          { name: "Home", url: business.url },
          { name: "Contact Us", url: `${business.url}/contact` },
        ])}
      />
    </>
  );
}
