import Image from "next/image";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col justify- items-center">
          <h3 className="text-xl md:text-3xl">¡Bievenido, estimado cliente!</h3>
          <div className="flex flex-row justify-center items-baseline my-[10%]">
            <h1 className="inline text-7xl font-black text-red-500">T1</h1>
            <h2 className="inline text-5xl font-bold text-gray-500">Pagos</h2>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[300px] md:w-[400px] border border-current border-t-4 border-t-red-600 rounded-t">
          <h4 className="block text-xl my-[5%] mx-[10%]">
            Autenticarse para iniciar sesión
          </h4>
          <form action="" className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-between items-center border bg-white border-current w-[90%] md:w-[320px] mx-[20%] mb-[2%] rounded py-[7px] px-[10px]">
              <input
                placeholder="Email"
                name="nombredeusuario"
                type="email"
                className="inline p-[2%] font-normal text-black bg-transparent w-full h-full"
              />
              <EnvelopeIcon className="inline size-6 text-gray-400" />
            </div>
            <div className="flex flex-row justify-between items-center border bg-white border-current w-[90%] md:w-[320px] mx-[20%] mb-[2%] rounded py-[7px] px-[10px]">
              <input
                placeholder="Contraseña"
                name="contrasenia"
                type="password"
                className="inline p-[2%] font-normal text-black bg-transparent w-full h-full"
              />
              <LockClosedIcon className="inline size-6 text-gray-400" />
            </div>
            <button className="block bg-red-600 w-[90%] md:w-[320px] px-[25%] py-[2%] mx-[10%] mb-[5%] rounded">
              Acceder
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
