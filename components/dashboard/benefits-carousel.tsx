'use client';

import { BenefitCard } from './benefit-card';
import { benefitsData } from '@/lib/benefits-data';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

export function BenefitsCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  ]);

  return (
    <div className="w-full overflow-hidden" ref={emblaRef}>
      <div className="flex -ml-1">
        {benefitsData.map((benefit) => (
          <div
            key={benefit.id}
            className="pl-1 md:basis-1/2 lg:basis-1/3 flex justify-center"
          >
            <div className="w-[300px] h-[250px]"> {/* Definir tamanho padrão aqui */}
              <BenefitCard {...benefit} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
