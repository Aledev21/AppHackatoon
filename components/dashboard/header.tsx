'use client';

import { LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export function Header() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-primary">
            <Menu className="h-6 w-6" />
          </Button>
          <Image
            src="/logo-vale.png"
            alt="Vale Logo"
            width={100}
            height={40}
            priority
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleLogout}
          className="text-primary hover:text-primary/90"
        >
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}