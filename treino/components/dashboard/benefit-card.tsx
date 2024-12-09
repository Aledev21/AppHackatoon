import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Benefit } from '@/lib/types';

export function BenefitCard({ title, description, icon: Icon }: Benefit) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="bg-primary p-2 rounded-lg">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button className="w-full bg-primary hover:bg-primary/90">
          Ver Detalhes
        </Button>
      </CardContent>
    </Card>
  );
}