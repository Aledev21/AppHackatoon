'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { newsData } from "@/lib/news-data";
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

export function NewsCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: true })
  ]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Últimas Notícias</h2>
      <Carousel
        opts={{ align: 'start', loop: true }}
        plugins={[
          Autoplay({ delay: 5000, stopOnInteraction: true })
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-1" ref={emblaRef}>
          {newsData.map((news) => (
            <CarouselItem key={news.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{news.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{news.date}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{news.excerpt}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}