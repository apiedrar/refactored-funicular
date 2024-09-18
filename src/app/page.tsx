"use client";
import { useState } from "react";
import CardHoldersName from "./CardHoldersName.jsx";
import Cvv from "./Cvv.jsx";
import CardNum from "./CardNum.jsx";
import ExpirationDate from "./ExpirationDate.jsx";
import CardCompanies from "./CardCompanies.jsx";
import Image from "next/image";

export default function Home() {
  const [cardHoldersName, setHoldersName] = useState("");
  const [cvv, setCvv] = useState(null);
  const [cardNumber, setCardNumber] = useState(null);
  const [expiringMonth, setExpiringMonth] = useState(null);
  const [expiringYear, setExpiringYear] = useState(null);
  const authToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMjExNDNiZDllMDBmYWRhZDc2MmE1NWJiNWQ2NTUwNGFlOTAzZjMwYThlNjZhMjVmNzA3NjUyYTk3YjBjN2U5Y2U1MTVmMmZkYmMwMzc3YWIiLCJpYXQiOjE3MjE0NDE3MjAuMDE3MTkxLCJuYmYiOjE3MjE0NDE3MjAuMDE3MTk2LCJleHAiOjE3ODQ1MTM3MjAuMDExNTI2LCJzdWIiOiIxMjYiLCJzY29wZXMiOlsiY2xpZW50ZS10YXJqZXRhcyIsImNsaWVudGUtdHJhbnNhY2Npb25lcyIsImNsaWVudGUtY2xpZW50ZXMiLCJjbGllbnRlLXN1c2NyaXBjaW9uZXMiLCJjbGllbnRlLXBsYW5lcyIsImNsaWVudGUtYW50aWZyYXVkZSIsImNsaWVudGUtd2ViaG9va3MiXX0.jzCf5AFt30FkaEZFuJdK9KZHVVxkLRP6oBGDr4Jdlhz4CtVj5_2V8acSax4jyHyAdsOkMt9ANyyZlciX_6UHHEO5bsmVBeuAAX125jcsqH1Tyac7NU3qKAfQdPGHarWGXqrHvDz6DBICgTYiLIBWRZROE9Ctue6ooj-rpyFxC3GU7nFzLie4NtSsK9AQXb5kSQUXb3cuPA_UI6BMANZRHyxpzxcIAl3I_NC6xFSU5F6q6MoZV4cO8S5FCyjAStpp8RaCPQrPa1UlgfM4l5q8fAhVNwvmp1-C28t7yXC7WQewbNemqn0uSIH2o-8g1N98QT9axS-Oss3R9TE2k6vW2LL-um2b1vLW60zNp0mmZ4_eGpU4q0KL6bEAapKtiHVsfwIwBobWwkyhQbibaxs88SdA76ewKJzMuIHnzpvg_Nc8tO80Bv3hiqCkOTU-YFjY3EEJvHGBnQj-f2swXq5HvQYqRjRk5nutjcmc7NfyKLjfm2TEihOIoy4MKNMZ6FYeWf_4GUzFK720_Q5JPNSXiUUs7SeMCmohpagVmGA3-mirFc5CbSrMyMiVqAwQeXiKTe6J__lWkWCA1Z8KEmA3KqRNl3en_0Dc-wdO7oroOo63iRzylxw0BEU4L4EEjdF63sMoNbWDnpuY1GLZ-zOMLEtMlLbZYMuoQbsXT6PfwMg";

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col justify-center items-center w-[400px] md:w-[700px]">
          <h2 className="block text-3xl my-[5%] mx-[10%]">Datos de Pago</h2>
          <form className="flex flex-col justify-center items-center">
            <div className="flex flex-row flex-wrap justify-between items-center bg-transparent mb-[2%] py-[7px] px-[3%]">
              <label htmlFor="nombre-titular" className="text-lg mr-[20%]">
                Nombre del Titular
              </label>
              <label htmlFor="cvv" className="text-lg ml-[13%]">
                CVV
              </label>
              <br />
              <div className="flex flex-row justify-center items-center">
                <CardHoldersName
                  cardHoldersName={cardHoldersName}
                  setHoldersName={setHoldersName}
                />
                <Cvv cvv={cvv} setCvv={setCvv} />
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify- items-center bg-transparent mb-[2%] py-[7px] px-[3%]">
              <label htmlFor="numero-tarjeta" className="text-lg">
                Número de la Tarjeta
              </label>
              <br />
              <div className="flex flex-row w-full">
                <CardNum
                  cardNumber={cardNumber}
                  setCardNumber={setCardNumber}
                />
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-between items-center bg-transparent mb-[2%] py-[7px] px-[3%]">
              <label htmlFor="fecha-de-expiracion" className="text-lg">
                Fecha de Expiración
              </label>
              <br />
              <div className="flex flex-row ml-[1%]">
                <ExpirationDate
                  expiringMonth={expiringMonth}
                  setExpiringMonth={setExpiringMonth}
                  expiringYear={expiringYear}
                  setExpiringYear={setExpiringYear}
                />
                <CardCompanies />
              </div>
            </div>
            <button
              onSubmit={(formData) => {
                fetch("https://api.sandbox.claropagos.com/v1/cargo", {
                  method: "POST",
                  body: formData,
                });
              }}
              className="flex justify-center items-center self-center text-white bg-red-600 w-[90%] md:w-[4rem] h-[3rem] px-[25%] py-[2%] mx-[10%] mb-[5%] rounded"
            >
              Pagar
            </button>
          </form>
          <div></div>
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
