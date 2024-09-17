import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col justify-center items-center w-[400px] md:w-[700px]">
          <h2 className="block text-3xl my-[5%] mx-[10%]">Datos de Pago</h2>
          <form action="" className="flex flex-col justify-center items-center">
            <div className="flex flex-row flex-wrap justify- items-center bg-transparent mb-[2%] py-[7px] px-[3%]">
              <label htmlFor="nombre-titular" className="text-lg mr-[20%]">
                Nombre del Titular
              </label>
              <label htmlFor="cvv" className="text-lg ml-[13%]">
                CVV
              </label>
              <br />
              <div className="flex flex-row">
                <input
                  placeholder="Daniel M. Ramirez"
                  name="nombre-titular"
                  type="text"
                  className="inline p-[4%] font-normal text-black mr-[2%] w-[80%] h-full border border-current rounded"
                />
                <input
                  placeholder="123"
                  name="cvv"
                  type="tel"
                  maxLength={4}
                  className="inline p-[4%] font-normal text-black ml-[2%] w-[30%] h-full border border-current rounded"
                />
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify- items-center bg-transparent mb-[2%] py-[7px] px-[3%]">
              <label htmlFor="numero-tarjeta" className="text-lg">
                Número de la Tarjeta
              </label>
              <br />
              <div className="flex flex-row w-full">
                <input
                  placeholder="4111 1111 1111 1111"
                  name="numero-tarjeta"
                  type="tel"
                  pattern="\d*"
                  maxLength={19}
                  className="inline p-[3%] font-normal text-black w-[100%] h-full md:w-[390px] border border-current rounded"
                />
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-between items-center bg-transparent mb-[2%] py-[7px] px-[3%]">
              <label htmlFor="" className="text-lg">
                Fecha de Expiración
              </label>
              <br />
              <div className="flex flex-row ml-[1%]">
                <input
                  placeholder=""
                  name=""
                  type="number"
                  min={1}
                  max={12}
                  maxLength={2}
                  className="inline p-[4%] font-normal text-black ml-[2%] w-[30%] h-full border border-current rounded"
                />
                <input
                  placeholder=""
                  name=""
                  type="number"
                  min={2024}
                  maxLength={4}
                  className="inline p-[4%] font-normal text-black ml-[2%] w-[30%] h-full border border-current rounded"
                />
                <div className="flex flex-row justify-between ml-[7%]">
                  <Image
                    className="mx-[2%]"
                    src="/visa-logo-svgrepo-com.svg"
                    width={60}
                    height={60}
                    alt="visa logo"
                  />
                  <Image
                    className="mx-[2%]"
                    src="/mastercard-full-svgrepo-com.svg"
                    width={60}
                    height={60}
                    alt="mastercard logo"
                  />
                  <Image
                    className="mx-[2%]"
                    src="/amex-svgrepo-com.svg"
                    width={60}
                    height={60}
                    alt="american express logo"
                  />
                </div>
              </div>
            </div>
            <button className="block text-white bg-red-600 w-[90%] md:w-[70%] h-[45px] px-[25%] py-[2%] mx-[10%] mb-[5%] rounded">
              Pagar
            </button>
          </form>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://docs.t1pagos.com/docs/guardar-tarjeta.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Documentación
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://docs.t1pagos.com/api.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Ejemplos
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Ir a T1pagos →
        </a>
      </footer>
    </div>
  );
}
