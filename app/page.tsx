import LoginForm from '@/components/auth/login-form';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <LoginForm />
    </main>
  );
}