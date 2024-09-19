export default function ExpirationDate({expiringMonth, setExpiringMonth, expiringYear, setExpiringYear }) {
return (<div className="flex flex-row">
    <input
    name="expiracion_mes"
                  placeholder=""
                  type="number"
                  min={1}
                  max={12}
                  minLength={2}
                  maxLength={2}
                  value={expiringMonth}
                  onChange={(e) => setExpiringMonth(e.target.value)}
                  className="inline p-[0.8rem] font-normal text-black ml-[1%] w-[5rem] md:w-[8rem] h-full border border-current rounded"
                  required
                />
                <input
                name="expiracion_anio"
                  placeholder="2025"
                  type="number"
                  min={2024}
                  minLength={4}
                  maxLength={4}
                  value={expiringYear}
                  onChange={(e) => setExpiringYear(e.target.value)}
                  className="inline p-[0.8rem] font-normal text-black ml-[1%] w-[5rem] md:w-[8rem] h-full border border-current rounded"
                  required
                />
</div>)
}