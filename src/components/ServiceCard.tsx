"use client";

import Link from "next/link";
import { GlowCard } from "@/components/GlowCard";

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
    <GlowCard className="h-full">
      <div className="group h-full rounded-xl bg-white p-6 transition-all duration-300">
        <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
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
    </GlowCard>
  );
}
