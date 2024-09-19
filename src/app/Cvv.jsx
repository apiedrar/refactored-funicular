export default function Cvv({cvv, setCvv}) {
    return (<div>
        <input
                  placeholder="CVV"
                  name="cvv"
                  type="tel"
                  maxLength={4}
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="inline p-[0.8rem] font-normal text-black ml-[1%] w-full md:w-[50%] h-full border border-current rounded"
                />
    </div>)
}