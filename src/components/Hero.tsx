import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  showReviews?: boolean;
}

export default function Hero({
  title,
  subtitle,
  showReviews = true,
}: HeroProps) {
  return (
    <section className="relative bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://aplus-appliancerepair.com/wp-content/uploads/2025/11/GettyImages-2205544744-scaled.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gray-900/75" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-200 sm:text-xl">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+19415272206"
              className="inline-flex w-full items-center justify-center rounded-lg bg-brand-red px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl sm:w-auto"
            >
              <svg
                className="mr-2 h-5 w-5"
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
              Call Now (941) 527-2206
            </a>
            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-gray-900 sm:w-auto"
            >
              Our Services
            </Link>
          </div>

          {/* Trust Bar */}
          {showReviews && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-200 sm:text-base">
              <span className="flex items-center gap-1">
                <span className="text-yellow-400">4.9</span>
                <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              </span>
              <span className="hidden h-4 w-px bg-gray-500 sm:inline-block" />
              <span>416 Google Reviews</span>
              <span className="hidden h-4 w-px bg-gray-500 sm:inline-block" />
              <span>20+ Years Experience</span>
              <span className="hidden h-4 w-px bg-gray-500 sm:inline-block" />
              <span>LG Authorized</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
