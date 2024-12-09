'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

const formSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push('/dashboard');
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Credenciais inválidas',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex items-center justify-center pb-2">
        <Image
          src="/vale-logo.png"
          alt="Vale Logo"
          width={150}
          height={60}
          priority
        />
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Input
              {...form.register('email')}
              type="email"
              placeholder="Email"
              disabled={isLoading}
            />
            {form.formState.errors.email && (
              <p className="text-sm text-red-500">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Input
              {...form.register('password')}
              type="password"
              placeholder="Senha"
              disabled={isLoading}
            />
            {form.formState.errors.password && (
              <p className="text-sm text-red-500">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90"
            disabled={isLoading}
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}