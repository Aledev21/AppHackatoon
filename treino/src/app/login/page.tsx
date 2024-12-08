"use client";
import { useState } from 'react';
import type { AppProps } from 'next/app';

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
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Logo Vale"
            src="/logo.png"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            QQ coisa
          </h2>
        </div>

        <div>
          <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
            CPF
          </label>
          <input
            id="cpf"
            name="cpf"
            type="text"
            required
            autoComplete="off"
            value={cpf}
            onChange={handleChange}
            placeholder="Digite seu CPF"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
            maxLength={14}  // Limita o número de caracteres para o CPF formatado
          />
          {!isValid && (
            <p className="text-red-500 text-sm">O CPF deve conter 11 dígitos numéricos.</p>
          )}
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
      </div>
    </>
  );
}

export default MyApp;
