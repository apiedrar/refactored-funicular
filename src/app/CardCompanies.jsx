import Image from "next/image";

export default function CardCompanies() {
    return(<div className="flex flex-row justify-between ml-[5%] md:ml-[15%]">
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
      </div>)
}