"use client";

import Image from "next/image";

const images = [
  // Ringling Museum
  "/community/ringling-museum.jpg",
  // Siesta Key Beach sign
  "/community/siesta-key-sign.jpg",
  // Siesta Key aerial
  "/community/siesta-key-aerial.jpeg",
  // Sarasota marina
  "/community/sarasota-marina.webp",
  // Downtown Bradenton
  "/community/bradenton-downtown.jpeg",
  // Manatee statue
  "/community/manatee-statue.jpg",
  // Bradenton aerial
  "/community/bradenton-aerial.jpg",
  // Unconditional Surrender statue
  "/community/unconditional-surrender.webp",
];

const duplicatedImages = [...images, ...images];

export default function ScrollingImages() {
  return (
    <div className="scroll-container w-full overflow-hidden py-8">
      <div className="infinite-scroll-images flex gap-6 w-max">
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={image}
              alt={`Bradenton and Sarasota area ${(index % images.length) + 1}`}
              width={288}
              height={288}
              sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 288px"
              className="w-full h-full object-cover brightness-90 contrast-110 saturate-[1.2]"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
