"use client";
import { useState } from 'react';
import type { AppProps } from 'next/app';
import BenefitItem from '@/components/BenefitItem';

// Função para aplicar a máscara no CPF
const aplicarMascaraCPF = (cpf: string) => {
  // Remove tudo que não for número
  const apenasNumeros = cpf.replace(/\D/g, '');
  
  // Adiciona a máscara de CPF: XXX.XXX.XXX-XX
  return apenasNumeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

function MyApp({ Component, pageProps }: AppProps) {
  
  const [cpf, setCpf] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const cpfFormatado = aplicarMascaraCPF(value);  // Aplica a máscara no CPF
    setCpf(cpfFormatado);

    // Verifica se o CPF tem 11 dígitos
    const apenasNumeros = cpfFormatado.replace(/\D/g, "");
    if (apenasNumeros.length === 11) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <main>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'> 
      <img
            alt="Logo Vale"
            src="/logo.png"
            className="mx-auto h-10 w-auto"
          />
      </div>
      <div id="benefits">
        <h1>Beneficios</h1>
        <div className="content flex gap-2 items-center">
          <BenefitItem
            icon='/assets/icon/id-card.svg'
            name='Beneficio'
            url="/beneficio"
          />
        </div>
        <div className="content flex gap-2 items-center">
          <BenefitItem
            icon='/assets/icon/id-card.svg'
            name='Beneficio'
            url="/beneficio"
          />
        </div>
        <div className="content flex gap-2 items-center">
          <BenefitItem
            icon='/assets/icon/id-card.svg'
            name='Beneficio'
            url="/beneficio"
          />
        </div>
        <div className="content flex gap-2 items-center">
          <BenefitItem
            icon='/assets/icon/id-card.svg'
            name='Beneficio'
            url="/beneficio"
          />
        </div>
      </div>
    </main>
  );
}

export default MyApp;
