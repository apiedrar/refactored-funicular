export default function ExpirationDate({expiringMonth, setExpiringMonth, expiringYear, setExpiringYear }) {
return (<div name="fecha-de-expiracion" className="flex flex-row">
    <input
                  placeholder=""
                  type="number"
                  min={1}
                  max={12}
                  maxLength={2}
                  value={expiringMonth}
                  onChange={(e) => setExpiringMonth(e.target.value)}
                  className="inline p-[0.8rem] font-normal text-black ml-[1%] w-[5rem] md:w-[8rem] h-full border border-current rounded"
                />
                <input
                  placeholder="2025"
                  type="number"
                  min={2024}
                  maxLength={4}
                  value={expiringYear}
                  onChange={(e) => setExpiringYear(e.target.value)}
                  className="inline p-[0.8rem] font-normal text-black ml-[1%] w-[5rem] md:w-[8rem] h-full border border-current rounded"
                />
</div>)
}