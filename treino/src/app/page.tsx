"use client";

import { useState } from "react";
import type { AppProps } from "next/app";
import BenefitItem from "@/components/BenefitItem";
import Header from "@/components/Logo/Logo";
import { useRouter } from "next/navigation";

const aplicarMascaraCPF = (cpf: string) => {
    const apenasNumeros = cpf.replace(/\D/g, "");
    return apenasNumeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
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
            <h1>Oi, Ivan</h1>
            <Header />
            <div id="benefits" className="my-4">
                <h1 className="text-center text-2xl font-semibold">Benefícios</h1>
                <div className="content flex gap-2 items-center overflow-x-auto py-4 scrollbar-hidden">
                    <BenefitItem
                        icon="/assets/icon/id-card.svg"
                        name="Benefício 1"
                        color="red"
                        onClick={() => router.push("/Social")}
                    />
                    <BenefitItem
                        icon="/assets/icon/id-card.svg"
                        name="Benefício 2"
                        color="pink"
                        onClick={() => router.push("/Fisico")}
                    />
                    <BenefitItem
                        icon="/assets/icon/id-card.svg"
                        name="Benefício 3"
                        color="green"
                        onClick={() => router.push("/Emocional")}
                    />
                    <BenefitItem
                        icon="/assets/icon/id-card.svg"
                        name="Benefício 4"
                        color="blue"
                        onClick={() => router.push("/Financeiro")}
                    />
                </div>
            </div>
            <div>
                <h2>CPF:</h2>
                <input
                    type="text"
                    value={cpf}
                    onChange={handleChange}
                    placeholder="Digite seu CPF"
                    className={`border p-2 rounded-md ${
                        isValid ? "border-green-500" : "border-red-500"
                    }`}
                />
                {!isValid && <p className="text-red-500">CPF inválido</p>}
            </div>
        </main>
    );
}

export default MyApp;
  