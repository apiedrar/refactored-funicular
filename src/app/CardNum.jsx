export default function CardNum({cardNumber, setCardNumber}) {
    return (<div>
        <input
                  placeholder="4111 1111 1111 1111"
                  name="numero-tarjeta"
                  type="tel"
                  pattern="\d*"
                  maxLength={19}
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="inline p-[0.8rem] font-normal text-black w-[100%] h-full w-[24rem] md:w-[35.5rem] border border-current rounded"
                />
    </div>)
}