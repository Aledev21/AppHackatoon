// components/ui/modal.tsx
import { Dialog } from '@headlessui/react';
import { Button } from '@/components/ui/button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  benefits: string[];
}

export const Modal = ({ isOpen, onClose, title, benefits }: ModalProps) => {
  if (!Array.isArray(benefits)) {
    return <div>Erro: Benefícios não fornecidos corretamente.</div>;
  }

  return (
    <Dialog open={isOpen} onClose={onClose}>
      {/* Agora, usamos o Dialog.Overlay diretamente dentro do Dialog */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" />

      {/* Modal Content */}
      <Dialog.Panel className="fixed inset-0 flex items-center justify-center p-4 z-50">
        <div className="bg-white p-6 rounded-lg w-full max-w-md">
          <Dialog.Title className="text-2xl mb-4">{title}</Dialog.Title>
          
          <ul className="mb-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-lg text-gray-700 mb-2">{benefit}</li>
            ))}
          </ul>
          
          <Button onClick={onClose} className="w-full bg-primary hover:bg-primary/90">
            Fechar
          </Button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};
