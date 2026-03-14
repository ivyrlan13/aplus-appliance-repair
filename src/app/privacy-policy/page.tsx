import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { business } from "@/data/business";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for A Plus Appliance Repair. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        showReviews={false}
      />

      <section className="bg-white py-16 sm:py-20">
        <AnimatedSection className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-brand-body">
            <p className="text-sm text-gray-500">
              Last updated: March 13, 2026
            </p>

            <h2 className="mt-8 text-2xl font-extrabold text-brand-dark">
              Information We Collect
            </h2>
            <p className="mt-4 leading-relaxed">
              When you contact {business.name}, we may collect the following
              information:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Name and contact information (phone number, email address)</li>
              <li>Service address and location details</li>
              <li>Appliance information and service history</li>
              <li>
                Information you provide through our contact form or phone calls
              </li>
            </ul>

            <h2 className="mt-10 text-2xl font-extrabold text-brand-dark">
              How We Use Your Information
            </h2>
            <p className="mt-4 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Schedule and provide appliance repair services</li>
              <li>Communicate with you about your service appointments</li>
              <li>Send service reminders and follow-up communications</li>
              <li>Improve our services and customer experience</li>
              <li>Respond to your inquiries and provide customer support</li>
            </ul>

            <h2 className="mt-10 text-2xl font-extrabold text-brand-dark">
              Information Sharing
            </h2>
            <p className="mt-4 leading-relaxed">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information only in the following
              circumstances:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                With service providers who assist in our business operations
              </li>
              <li>When required by law or to respond to legal process</li>
              <li>To protect our rights, privacy, safety, or property</li>
            </ul>

            <h2 className="mt-10 text-2xl font-extrabold text-brand-dark">
              Data Security
            </h2>
            <p className="mt-4 leading-relaxed">
              We implement reasonable security measures to protect your personal
              information from unauthorized access, alteration, disclosure, or
              destruction. However, no method of transmission over the Internet
              is 100% secure.
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-brand-dark">
              Cookies and Analytics
            </h2>
            <p className="mt-4 leading-relaxed">
              Our website may use cookies and similar technologies to improve
              your browsing experience and analyze website traffic. You can
              control cookie settings through your browser preferences.
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-brand-dark">
              Your Rights
            </h2>
            <p className="mt-4 leading-relaxed">
              You have the right to request access to, correction of, or
              deletion of your personal information. To exercise these rights,
              please contact us at:
            </p>
            <ul className="mt-4 list-none space-y-1 pl-0">
              <li>
                <strong>Phone:</strong>{" "}
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="text-brand-red hover:text-red-700"
                >
                  {business.phone}
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${business.email}`}
                  className="text-brand-red hover:text-red-700"
                >
                  {business.email}
                </a>
              </li>
              <li>
                <strong>Address:</strong> {business.address.full}
              </li>
            </ul>

            <h2 className="mt-10 text-2xl font-extrabold text-brand-dark">
              Changes to This Policy
            </h2>
            <p className="mt-4 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <SchemaMarkup
        data={generateBreadcrumbSchema([
          { name: "Home", url: business.url },
          { name: "Privacy Policy", url: `${business.url}/privacy-policy` },
        ])}
      />
    </>
  );
}
