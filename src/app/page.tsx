"use client";
import { useState, useEffect } from "react";
import CardHoldersName from "./CardHoldersName.jsx";
import Cvv from "./Cvv.jsx";
import CardNum from "./CardNum.jsx";
import ExpirationDate from "./ExpirationDate.jsx";
import CardCompanies from "./CardCompanies.jsx";
import Image from "next/image";

export default function Home() {
  const amountDue = 20.99;
  const mexicanPeso = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 2,
  });
  const [cardHoldersName, setHoldersName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState(undefined);
  const [expiringMonth, setExpiringMonth] = useState(undefined);
  const [expiringYear, setExpiringYear] = useState(undefined);
  const [apiData, setApiData] = useState();
  const [apiDataStatus, setApiDataStatus] = useState();
  const [cardData, setCardData] = useState();
  const [cardToken, setCardToken] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [isCancellationRequested, setIsCancellationRequested] = useState(false);
  const [isReimbursementRequested, setIsReimbursementRequested] =
    useState(false);

  const authToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMjExNDNiZDllMDBmYWRhZDc2MmE1NWJiNWQ2NTUwNGFlOTAzZjMwYThlNjZhMjVmNzA3NjUyYTk3YjBjN2U5Y2U1MTVmMmZkYmMwMzc3YWIiLCJpYXQiOjE3MjE0NDE3MjAuMDE3MTkxLCJuYmYiOjE3MjE0NDE3MjAuMDE3MTk2LCJleHAiOjE3ODQ1MTM3MjAuMDExNTI2LCJzdWIiOiIxMjYiLCJzY29wZXMiOlsiY2xpZW50ZS10YXJqZXRhcyIsImNsaWVudGUtdHJhbnNhY2Npb25lcyIsImNsaWVudGUtY2xpZW50ZXMiLCJjbGllbnRlLXN1c2NyaXBjaW9uZXMiLCJjbGllbnRlLXBsYW5lcyIsImNsaWVudGUtYW50aWZyYXVkZSIsImNsaWVudGUtd2ViaG9va3MiXX0.jzCf5AFt30FkaEZFuJdK9KZHVVxkLRP6oBGDr4Jdlhz4CtVj5_2V8acSax4jyHyAdsOkMt9ANyyZlciX_6UHHEO5bsmVBeuAAX125jcsqH1Tyac7NU3qKAfQdPGHarWGXqrHvDz6DBICgTYiLIBWRZROE9Ctue6ooj-rpyFxC3GU7nFzLie4NtSsK9AQXb5kSQUXb3cuPA_UI6BMANZRHyxpzxcIAl3I_NC6xFSU5F6q6MoZV4cO8S5FCyjAStpp8RaCPQrPa1UlgfM4l5q8fAhVNwvmp1-C28t7yXC7WQewbNemqn0uSIH2o-8g1N98QT9axS-Oss3R9TE2k6vW2LL-um2b1vLW60zNp0mmZ4_eGpU4q0KL6bEAapKtiHVsfwIwBobWwkyhQbibaxs88SdA76ewKJzMuIHnzpvg_Nc8tO80Bv3hiqCkOTU-YFjY3EEJvHGBnQj-f2swXq5HvQYqRjRk5nutjcmc7NfyKLjfm2TEihOIoy4MKNMZ6FYeWf_4GUzFK720_Q5JPNSXiUUs7SeMCmohpagVmGA3-mirFc5CbSrMyMiVqAwQeXiKTe6J__lWkWCA1Z8KEmA3KqRNl3en_0Dc-wdO7oroOo63iRzylxw0BEU4L4EEjdF63sMoNbWDnpuY1GLZ-zOMLEtMlLbZYMuoQbsXT6PfwMg";

  const cardSubmitUrl = "https://api.sandbox.claropagos.com/v1/tarjeta";

  const paymentUrl = "https://api.sandbox.claropagos.com/v1/cargo";

  const cardSubmition = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const validationToken = await fetch(cardSubmitUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: cardHoldersName,
          pan: cardNumber,
          expiracion_mes: expiringMonth,
          expiracion_anio: expiringYear,
          cvv2: cvv,
          default: true,
        }),
      });
      const cardData = await validationToken.json();
      setCardData(cardData);

      setCardToken(cardData.data.tarjeta.token);
      const paymentValidation = await fetch(paymentUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          monto: amountDue,
          descripcion: "Cargo de prueba",
          pedido: {
            device_fingerprint: "5834125431628311477",
          },
          metodo_pago: "tarjeta",
          tarjeta: {
            token: cardToken,
          },
        }),
      });
      const apiData = await paymentValidation.json();
      console.log(apiData);
      setApiData(apiData);

      setApiDataStatus(apiData.status);
      if (apiData?.data?.cargo?.id) {
        setPaymentId(apiData.data.cargo.id);
        console.log("Payment ID:", apiData.data.cargo.id);
      } else {
        console.log("Payment ID is not available");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const cancelPayment = async () => {
    if (!paymentId) {
      console.log("Payment ID is not available yet.");
      return;
    }

    const paymentCancellationUrl = `https://api.sandbox.claropagos.com/v1/cargo/${paymentId}/cancelar`;

    try {
      const paymentCancellation = await fetch(paymentCancellationUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ monto: amountDue }),
      });

      const cancellationResult = await paymentCancellation.json();
      console.log("Cancellation result:", cancellationResult);
    } catch (error) {
      console.error("Error during payment cancellation:", error);
    }

    setIsCancellationRequested(false);
  };

  const reimbursePayment = async () => {
    if (!paymentId) {
      console.log("Payment ID is not available yet.");
      return;
    }

    const reimbursementRequestUrl = `https://api.sandbox.claropagos.com/v1/cargo/${paymentId}/reembolsar`;

    try {
      const reimbursementRequest = await fetch(reimbursementRequestUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ monto: amountDue }),
      });

      const reimbursementResponse = await reimbursementRequest.json();
      console.log("Reimbursement result:", reimbursementResponse);
    } catch (error) {
      console.error("Error during reimbursement:", error);
    }

    setIsReimbursementRequested(false);
  };

  const handleCancellationRequest = () => {
    if (!paymentId) {
      console.log("Payment ID is not available yet.");
    } else {
      setIsCancellationRequested(true);
      cancelPayment();
    }
  };

  const handleReimbursementRequest = () => {
    if (!paymentId) {
      console.log("Payment ID is not available yet.");
    } else {
      setIsReimbursementRequested(true);
      reimbursePayment();
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col justify-center items-start md:items-center w-[400px] md:w-[700px]">
          <h2 className="block text-2xl md:text-5xl my-[2%]">
            MXN{mexicanPeso.format(amountDue)}
          </h2>
          <h2 className="block text-3xl my-[5%] mx-[10%]">Datos de Pago</h2>
          <div>
            {apiDataStatus === "success" ? (
              <label className="text-md">Tu pago ha sido aceptado</label>
            ) : apiDataStatus === "error" ? (
              <label className="text-md text-red-500">
                Tu pago ha sido rechazado
              </label>
            ) : (
              <label className="text-md">Procesando el pago...</label>
            )}
          </div>
          <form
            onSubmit={cardSubmition}
            className="flex flex-col justify-center items-center"
          >
            <div className="flex flex-row flex-wrap justify-between items-center bg-transparent mb-[2%] py-[7px] px-[3%]">
              <div className="flex flex-row justify-center items-center">
                <CardHoldersName
                  cardHoldersName={cardHoldersName}
                  setHoldersName={setHoldersName}
                />
                <Cvv cvv={cvv} setCvv={setCvv} />
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify- items-center bg-transparent mb-[2%] py-[7px] px-[3%]">
              <div className="flex flex-row w-full">
                <CardNum
                  cardNumber={cardNumber}
                  setCardNumber={setCardNumber}
                />
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-start items-center bg-transparent mb-[2%] py-[7px] px-[3%]">
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
            <button className="flex justify-center items-center self-center text-white bg-red-600 w-[90%] md:w-[4rem] h-[3rem] px-[25%] py-[2%] mx-[10%] mb-[5%] rounded">
              Pagar
            </button>
          </form>
          <div className="flex flex-row justify-evenly items-center w-full">
            {apiDataStatus === "success" ? (
              <>
                <button
                  onClick={handleCancellationRequest}
                  className="flex justify-center items-center self-center text-white bg-yellow-600 w-[40%] md:w-[50%] h-[3rem] px-[13%] py-[1%] mx-[5%] mb-[2%] rounded"
                >
                  Solicitar Cancelación
                </button>
                <button
                  onClick={handleReimbursementRequest}
                  className="flex justify-center items-center self-center text-white bg-green-600 w-[40%] md:w-[50%] h-[3rem] px-[13%] py-[1%] mx-[5%] mb-[2%] rounded"
                >
                  Solicitar Reembolso
                </button>
              </>
            ) : null}
          </div>
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
          href="https://www.t1pagos.com/"
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

/* 

 */
