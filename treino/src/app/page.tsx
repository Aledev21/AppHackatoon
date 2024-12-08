"use client"
import { useState } from 'react';
import type { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {

  const [matricula, setMatricula] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setMatricula(value);
    if (value.length === 7) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }
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
          <label htmlFor="matricula" className="block text-sm font-medium text-gray-700">
            Matrícula
          </label>
          <input
            id="matricula"
            name="matricula"
            type="text"
            required
            autoComplete="off"
            value={matricula}
            onChange={handleChange}
            placeholder="Digite sua matrícula"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
            pattern="\d{7}"
          />
          {!isValid && (
            <p className="text-red-500 text-sm">A matrícula deve conter 7 dígitos numéricos.</p>
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
