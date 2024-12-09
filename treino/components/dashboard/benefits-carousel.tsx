'use client';

import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BenefitCard } from './benefit-card';
import { benefitsData } from '@/lib/benefits-data';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

export function BenefitsCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: true })
  ]);

  return (
    <Carousel 
      opts={{ align: 'start', loop: true }}
      plugins={[
        Autoplay({ delay: 4000, stopOnInteraction: true })
      ]}
      className="w-full"
    >
      <CarouselContent className="-ml-1" ref={emblaRef}>
        {benefitsData.map((benefit) => (
          <CarouselItem key={benefit.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <BenefitCard {...benefit} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}