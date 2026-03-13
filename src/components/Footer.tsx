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
                <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
                <p>Sun: Emergency Calls Only</p>
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
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-center text-sm text-gray-400 sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>&copy; 2024 A Plus Appliance Repair. All rights reserved.</p>
          <p className="font-medium text-gray-300">
            LG Authorized Repair Center
          </p>
        </div>
      </div>
    </footer>
  );
}
