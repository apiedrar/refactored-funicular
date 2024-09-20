export default function CardNum({ cardNumber, setCardNumber }) {
  return (
    <div>
      <label htmlFor="pan" className="text-md">
        Número de la Tarjeta
      </label>
      <br />
      <input
        placeholder="xxxx xxxx xxxx 1111"
        name="pan"
        type="text"
        inputMode="numeric"
        pattern="[0-9\s]{15,16}"
        autoComplete="cc-number"
        minLength={15}
        maxLength={16}
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        className="block p-[0.7rem] font-normal text-black w-[100%] h-[3.5rem] w-[24rem] md:w-[35.5rem] border border-current rounded md:mr-[5.35rem]"
        required
      />
    </div>
  );
}
