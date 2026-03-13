const brands = [
  { name: "LG", featured: true, subtitle: "Authorized Repair Center" },
  { name: "GE", featured: false },
  { name: "Samsung", featured: false },
  { name: "Frigidaire", featured: false },
  { name: "Whirlpool", featured: false },
  { name: "Maytag", featured: false },
  { name: "Sears", featured: false },
  { name: "KitchenAid", featured: false },
];

export default function BrandGrid() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
          Brands We Service
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-brand-body">
          Factory-trained technicians for all major appliance brands
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className={`flex flex-col items-center justify-center rounded-xl border-2 px-4 py-6 text-center transition-all duration-300 hover:shadow-md ${
                brand.featured
                  ? "border-brand-red bg-red-50 shadow-sm"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <span
                className={`font-bold ${
                  brand.featured
                    ? "text-2xl text-brand-red sm:text-3xl"
                    : "text-xl text-gray-800 sm:text-2xl"
                }`}
              >
                {brand.name}
              </span>
              {brand.featured && brand.subtitle && (
                <span className="mt-1 text-xs font-medium text-red-600 sm:text-sm">
                  {brand.subtitle}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
