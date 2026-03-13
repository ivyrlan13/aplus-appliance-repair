interface CallToActionProps {
  title: string;
  subtitle?: string;
  variant?: "primary" | "secondary";
}

export default function CallToAction({
  title,
  subtitle,
  variant = "primary",
}: CallToActionProps) {
  const isPrimary = variant === "primary";

  return (
    <section
      className={
        isPrimary
          ? "bg-gray-900 py-16 sm:py-20"
          : "bg-gray-100 py-16 sm:py-20"
      }
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
            isPrimary ? "text-white" : "text-brand-dark"
          }`}
        >
          {title}
        </h2>

        {subtitle && (
          <p
            className={`mt-4 text-lg ${
              isPrimary ? "text-gray-300" : "text-brand-body"
            }`}
          >
            {subtitle}
          </p>
        )}

        <div className="mt-8">
          <a
            href="tel:+19415272206"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-brand-red px-8 py-4 text-lg font-bold text-white shadow-lg outline outline-1 outline-brand-red transition-all hover:shadow-xl"
          >
            <span className="absolute inset-0 bg-white translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
            <svg
              className="relative z-10 mr-2 h-5 w-5 transition-colors duration-300 group-hover:text-brand-red"
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
            <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-red">(941) 527-2206</span>
          </a>
        </div>

        <p
          className={`mt-4 text-sm ${
            isPrimary ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Or call us anytime &mdash; we&apos;re available 24/7
        </p>
      </div>
    </section>
  );
}
