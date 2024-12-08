"use client";
import { useState } from 'react';
import type { AppProps } from 'next/app';
import BenefitItem from '@/components/BenefitItem';
import Header from '@/components/Logo/Logo';

const aplicarMascaraCPF = (cpf: string) => {
  const apenasNumeros = cpf.replace(/\D/g, '');
  
  return apenasNumeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

function MyApp({ Component, pageProps }: AppProps) {
  
  const [cpf, setCpf] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const cpfFormatado = aplicarMascaraCPF(value);
    setCpf(cpfFormatado);

    const apenasNumeros = cpfFormatado.replace(/\D/g, "");
    if (apenasNumeros.length === 11) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <main>  

        <Header/>
      <div id="benefits" className="my-4">
  <h1 className="text-center text-2xl font-semibold">Benefícios</h1>
  <div className="content flex gap-2 items-center overflow-x-auto py-4 scrollbar-hidden">
    <BenefitItem
      icon="/assets/icon/id-card.svg"
      name="Benefício 1"
      url="/beneficio"
      color="red"
    />
    <BenefitItem
      icon="/assets/icon/id-card.svg"
      name="Benefício 2"
      url="/beneficio"
      color="pink"
    />
    <BenefitItem
      icon="/assets/icon/id-card.svg"
      name="Benefício 3"
      url="/beneficio"
      color="green"
    />
    <BenefitItem
      icon="/assets/icon/id-card.svg"
      name="Benefício 4"
      url="/beneficio"
      color="blue"
    />
    <BenefitItem
      icon="/assets/icon/id-card.svg"
      name="Benefício 5"
      url="/beneficio"
      color="yellow"
    />
  </div>
</div>

      <div>
        <h2> </h2>
      </div>
    </main>
  );
}

export default MyApp;
