export default function CardNum({cardNumber, setCardNumber}) {
    return (<div>
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
                  className="inline p-[0.8rem] font-normal text-black w-[100%] h-full w-[24rem] md:w-[35.5rem] border border-current rounded"
                  required
                />
    </div>)
}