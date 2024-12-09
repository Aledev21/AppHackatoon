'use client';

import { Header } from '@/components/dashboard/header';
import { BenefitsCarousel } from '@/components/dashboard/benefits-carousel';
import { NewsCarousel } from '@/components/dashboard/news-carousel';
import { VideoSection } from '@/components/dashboard/video-section';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <section>
          <h1 className="text-2xl font-bold mb-6">Seus Benefícios</h1>
          <BenefitsCarousel />
        </section>
        
        <NewsCarousel />
        <VideoSection />
      </main>
    </div>
  );
}