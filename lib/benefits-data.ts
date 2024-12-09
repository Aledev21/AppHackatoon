import { Heart, Car, Utensils, GraduationCap, Building2, Stethoscope } from 'lucide-react';
import { Benefit } from './types';

export const benefitsData: Benefit[] = [
  {
    id: '1',
    title: 'Plano de Saúde',
    description: 'Cobertura médica completa para você e sua família',
    icon: Stethoscope,
  },
  {
    id: '2',
    title: 'Vale Refeição',
    description: 'Benefício alimentação para suas refeições diárias',
    icon: Utensils,
  },
  {
    id: '3',
    title: 'Seguro de Vida',
    description: 'Proteção financeira para você e seus beneficiários',
    icon: Heart,
  },
  {
    id: '4',
    title: 'Auxílio Educação',
    description: 'Apoio para desenvolvimento profissional e acadêmico',
    icon: GraduationCap,
  },
  {
    id: '5',
    title: 'Vale Transporte',
    description: 'Suporte para seu deslocamento diário',
    icon: Car,
  },
  {
    id: '6',
    title: 'Previdência Privada',
    description: 'Plano de aposentadoria complementar',
    icon: Building2,
  },
];