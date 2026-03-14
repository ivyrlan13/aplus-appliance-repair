import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { business } from "@/data/business";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for A Plus Appliance Repair. Read our service terms, warranty information, and policies.",
};

export default function TermsPage() {
  return (
    <>
      <Hero
        title="Terms of Service"
        subtitle="Please review our service terms and policies."
        showReviews={false}
      />

      <section className="bg-white py-16 sm:py-20">
        <AnimatedSection className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-brand-body">
            <p className="text-sm text-gray-500">
              Last updated: March 13, 2026
            </p>

            <h2 className="mt-8 text-2xl font-extrabold text-brand-dark">
              Service Agreement
            </h2>
            <p className="mt-4 leading-relaxed">
              By scheduling a service appointment with {business.name}, you
              agree to the following terms and conditions. These terms govern the
              appliance repair services we provide throughout Bradenton,
              Sarasota, and surrounding areas.
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-brand-dark">
              Service Estimates
            </h2>
            <p className="mt-4 leading-relaxed">
              We provide written estimates before beginning any repair work. Our
              service call fee covers the diagnostic visit and is applied toward
              the cost of repair if you choose to proceed. Estimates are valid
              for 30 days from the date of the diagnostic visit.
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-brand-dark">
              Warranty
            </h2>
            <p className="mt-4 leading-relaxed">
              All repairs performed by {business.name} are backed by our parts
              and labor warranty. Warranty coverage applies to the specific
              repair performed and the parts installed. Warranty does not cover
              unrelated issues, misuse, or damage caused by external factors
              such as power surges or water damage.
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-brand-dark">
              Scheduling and Cancellations
            </h2>
            <p className="mt-4 leading-relaxed">
              We offer same-day and next-day appointments based on availability.
              We ask that you provide at least 2 hours notice if you need to
              reschedule or cancel an appointment. Repeated no-shows may result
              in a scheduling fee for future appointments.
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-brand-dark">
              Payment
            </h2>
            <p className="mt-4 leading-relaxed">
              Payment is due upon completion of the repair. We accept cash,
              checks, and major credit cards. For larger repairs, payment plans
              may be available upon request.
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-brand-dark">
              Liability
            </h2>
            <p className="mt-4 leading-relaxed">
              {business.name} is fully licensed and insured. Our liability is
              limited to the cost of the repair service performed. We are not
              responsible for pre-existing conditions, manufacturer defects, or
              damage resulting from causes unrelated to our repair work.
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-brand-dark">
              Website Use
            </h2>
            <p className="mt-4 leading-relaxed">
              The content on this website is provided for informational purposes
              only. While we strive to keep information accurate and up to date,
              we make no warranties about the completeness or accuracy of the
              information on this site.
            </p>

            <h2 className="mt-10 text-2xl font-extrabold text-brand-dark">
              Contact Us
            </h2>
            <p className="mt-4 leading-relaxed">
              If you have questions about these terms, please contact us:
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
          </div>
        </AnimatedSection>
      </section>

      <SchemaMarkup
        data={generateBreadcrumbSchema([
          { name: "Home", url: business.url },
          { name: "Terms of Service", url: `${business.url}/terms` },
        ])}
      />
    </>
  );
}
