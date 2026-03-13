import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  name: string;
  description: string;
  slug: string;
}

export default function ServiceCard({
  icon,
  name,
  description,
  slug,
}: ServiceCardProps) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand-red hover:shadow-lg">
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="mb-2 text-lg font-bold text-brand-dark">{name}</h3>
      <p className="mb-4 text-sm leading-relaxed text-brand-body">
        {description}
      </p>
      <Link
        href={`/services/${slug}`}
        className="inline-flex items-center text-sm font-semibold text-brand-red transition-colors group-hover:text-red-700"
      >
        Learn More
        <span className="ml-1 transition-transform group-hover:translate-x-1">
          &rarr;
        </span>
      </Link>
    </div>
  );
}
