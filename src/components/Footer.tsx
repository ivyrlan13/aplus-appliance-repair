import Link from "next/link";

const services = [
  { name: "Washer Repair", href: "/services/washer-repair" },
  { name: "Dryer Repair", href: "/services/dryer-repair" },
  { name: "Refrigerator Repair", href: "/services/refrigerator-repair" },
  { name: "Dishwasher Repair", href: "/services/dishwasher-repair" },
  { name: "Oven & Range Repair", href: "/services/oven-range-repair" },
  { name: "Dryer Vent Cleaning", href: "/services/dryer-vent-cleaning" },
];

const serviceAreas = [
  { name: "Bradenton", href: "/service-areas/bradenton" },
  { name: "Sarasota", href: "/service-areas/sarasota" },
  { name: "Venice", href: "/service-areas/venice" },
  { name: "Palmetto", href: "/service-areas/palmetto" },
  { name: "Lakewood Ranch", href: "/service-areas/lakewood-ranch" },
  { name: "Ellenton", href: "/service-areas/ellenton" },
  { name: "Nokomis", href: "/service-areas/nokomis" },
  { name: "Osprey", href: "/service-areas/osprey" },
  { name: "Parrish", href: "/service-areas/parrish" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Business Info */}
          <div>
            <h3 className="text-lg font-bold text-white">
              A Plus Appliance Repair
            </h3>
            <div className="mt-4 space-y-3 text-sm text-gray-300">
              <p>
                <span className="block">Bradenton, FL 34205</span>
                <span className="block">Serving Sarasota & Manatee Counties</span>
              </p>
              <p>
                <a
                  href="tel:+19415272206"
                  className="transition-colors hover:text-white"
                >
                  (941) 527-2206
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@aplusappliancerepairfl.com"
                  className="transition-colors hover:text-white"
                >
                  info@aplusappliancerepairfl.com
                </a>
              </p>
              <div>
                <p className="font-medium text-gray-200">Business Hours:</p>
                <p>Open 24 Hours</p>
                <p>7 Days a Week</p>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-bold text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="text-lg font-bold text-white">Service Areas</h3>
            <ul className="mt-4 space-y-2">
              {serviceAreas.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: About */}
          <div>
            <h3 className="text-lg font-bold text-white">
              About A Plus
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              With over 20 years of experience, A Plus Appliance Repair is the
              trusted choice for appliance repair in Bradenton, Sarasota, and
              surrounding areas. As an LG Authorized Repair Center, we deliver
              expert service you can count on.
            </p>
            <Link
              href="/about"
              className="mt-4 inline-block text-sm font-medium text-brand-red transition-colors hover:text-red-400"
            >
              Learn More About Us &rarr;
            </Link>
            <a
              href="https://g.co/kgs/aplusappliancerepair"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-brand-red transition-colors hover:text-red-400"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Find Us on Google
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-center text-sm text-gray-400 sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>&copy; 2026 A Plus Appliance Repair. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-gray-400 transition-colors hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 transition-colors hover:text-gray-300">Terms</Link>
            <Link href="/sitemap.xml" className="text-gray-400 transition-colors hover:text-gray-300">Sitemap</Link>
          </div>
          <p className="font-medium text-gray-300">
            LG Authorized Repair Center
          </p>
        </div>
      </div>
    </footer>
  );
}
