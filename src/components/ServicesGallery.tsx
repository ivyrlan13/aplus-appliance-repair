"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { services } from "@/data/services";

const serviceImages: Record<string, string> = {
  "washer-repair": "/appliances/washer.jpg",
  "dryer-repair": "/appliances/dryer.jpg",
  "refrigerator-repair": "/appliances/fridge.jpg",
  "dishwasher-repair": "/appliances/dishwasher.jpg",
  "oven-range-repair": "/appliances/oven.jpg",
  "dryer-vent-cleaning": "/appliances/vent.jpg",
};

export default function ServicesGallery() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-10 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div>
            <h2 className="mb-2 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:mb-4 md:text-4xl lg:mb-6 lg:text-5xl">
              What We <span className="text-brand-red">Repair</span>
            </h2>
            <p className="text-sm text-gray-500 sm:text-lg">
              Expert care for every appliance in your home
            </p>
          </div>
          <div className="mt-4 flex shrink-0 items-center justify-start gap-2 sm:mt-8">
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto border-gray-300 hover:border-brand-red hover:bg-brand-red/10 hover:text-brand-red"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto border-gray-300 hover:border-brand-red hover:bg-brand-red/10 hover:text-brand-red"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
          className="relative left-[-1rem]"
        >
          <CarouselContent className="-mr-4 ml-8 2xl:ml-[max(8rem,calc(50vw-700px+1rem))] 2xl:mr-[max(0rem,calc(50vw-700px-1rem))]">
            {services.map((service) => (
              <CarouselItem
                key={service.slug}
                className="pl-4 md:max-w-[452px]"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex aspect-[3/2] overflow-clip rounded-xl">
                      <div className="flex-1">
                        <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                          <img
                            src={serviceImages[service.slug]}
                            alt={service.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-extrabold text-gray-900 group-hover:text-brand-red md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                    {service.name}
                  </div>
                  <div className="mb-8 line-clamp-2 text-sm text-gray-500 md:mb-12 md:text-base lg:mb-9">
                    {service.shortDescription}
                  </div>
                  <div className="flex items-center text-sm font-bold text-brand-red">
                    Learn More
                    <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
