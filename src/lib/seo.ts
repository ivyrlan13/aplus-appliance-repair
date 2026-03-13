import type { Service } from "@/data/services";
import type { Business } from "@/data/business";
import type { Location } from "@/data/locations";

// ---- JSON-LD Schema Types ----

interface SchemaBase {
  "@context": "https://schema.org";
  "@type": string;
  [key: string]: unknown;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

// ---- Schema Generators ----

/**
 * Generates a JSON-LD Service schema for a specific appliance repair service.
 * Used on individual service pages (e.g., /services/washer-repair).
 */
export function generateServiceSchema(
  service: Service,
  business: Business
): SchemaBase {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    url: `${business.url}/services/${service.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: business.phone,
      url: business.url,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.street,
        addressLocality: business.address.city,
        addressRegion: business.address.state,
        postalCode: business.address.zip,
        addressCountry: business.address.country,
      },
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
      geoRadius: `${business.serviceArea.radius.value} ${business.serviceArea.radius.unit}`,
    },
    serviceType: service.name,
    category: "Appliance Repair",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} Services`,
      itemListElement: service.commonProblems.map((problem, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: problem,
          description: problem,
        },
        position: index + 1,
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating,
      reviewCount: business.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

/**
 * Generates a JSON-LD LocalBusiness schema.
 * Used on the homepage and location pages.
 * When a location is provided, the schema is tailored to that service area.
 */
export function generateLocalBusinessSchema(
  business: Business,
  location?: Location
): SchemaBase {
  const schema: SchemaBase = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${business.url}/#localbusiness`,
    name: business.name,
    description: business.description,
    url: location
      ? `${business.url}/locations/${location.slug}`
      : business.url,
    telephone: business.phone,
    email: business.email,
    image: `${business.url}/images/logo.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: business.hours.daysOfWeek.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day,
      opens: business.hours.opens,
      closes: business.hours.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating,
      reviewCount: business.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    areaServed: location
      ? {
          "@type": "City",
          name: location.name,
          sameAs: `https://en.wikipedia.org/wiki/${encodeURIComponent(location.name.replace(/ /g, "_"))},_Florida`,
        }
      : business.serviceArea.counties.map((county) => ({
          "@type": "AdministrativeArea",
          name: county,
        })),
    makesOffer: [
      "Washer Repair",
      "Dryer Repair",
      "Refrigerator Repair",
      "Dishwasher Repair",
      "Oven & Range Repair",
      "Dryer Vent Cleaning",
    ].map((serviceName) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: serviceName,
      },
    })),
    brand: business.brands.map((brand) => ({
      "@type": "Brand",
      name: brand,
    })),
    hasCredential: business.certifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: cert,
    })),
    knowsAbout: business.brands.map(
      (brand) => `${brand} appliance repair`
    ),
  };

  return schema;
}

/**
 * Generates a JSON-LD BreadcrumbList schema.
 * Used on all pages for structured navigation data.
 *
 * @example
 * generateBreadcrumbSchema([
 *   { name: "Home", url: "https://example.com" },
 *   { name: "Services", url: "https://example.com/services" },
 *   { name: "Washer Repair", url: "https://example.com/services/washer-repair" },
 * ])
 */
export function generateBreadcrumbSchema(
  items: BreadcrumbItem[]
): SchemaBase {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generates a JSON-LD WebSite schema with SearchAction.
 * Used on the homepage for sitelinks search box in Google results.
 */
export function generateWebsiteSchema(business: Business): SchemaBase {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.name,
    url: business.url,
    description: business.description,
    publisher: {
      "@type": "Organization",
      name: business.name,
      url: business.url,
      logo: {
        "@type": "ImageObject",
        url: `${business.url}/images/logo.png`,
      },
    },
  };
}

/**
 * Generates a combined JSON-LD for a service+location page
 * (e.g., /services/washer-repair/bradenton).
 * Useful for hyper-local landing pages.
 */
export function generateServiceLocationSchema(
  service: Service,
  location: Location,
  business: Business
): SchemaBase {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in ${location.name}, ${location.state}`,
    description: `Professional ${service.name.toLowerCase()} services in ${location.name}, Florida. ${service.shortDescription}`,
    url: `${business.url}/services/${service.slug}/${location.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: business.phone,
      url: business.url,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.street,
        addressLocality: business.address.city,
        addressRegion: business.address.state,
        postalCode: business.address.zip,
        addressCountry: business.address.country,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: business.rating,
        reviewCount: business.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    },
    areaServed: {
      "@type": "City",
      name: location.name,
      containedInPlace: {
        "@type": "State",
        name: "Florida",
      },
    },
    serviceType: service.name,
    category: "Appliance Repair",
  };
}
