import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Benefit } from '@/lib/types';

export function BenefitCard({ title, description, icon: Icon }: Benefit) {
  return (
    <Card className="h-full w-full flex flex-col justify-between hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="bg-primary p-2 rounded-lg">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 mb-4">{description}</p>
      </CardContent>
      <div className="p-4">
        <Button className="w-full bg-primary hover:bg-primary/90">
          Ver Detalhes
        </Button>
      </div>
    </Card>
  );
}
