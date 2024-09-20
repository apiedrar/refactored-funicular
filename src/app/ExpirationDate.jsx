export default function ExpirationDate({expiringMonth, setExpiringMonth, expiringYear, setExpiringYear }) {
return (<div className="flex flex-row">
          <label htmlFor="expiracion_mes" className="text-md">
                Mes Expiración
              </label>
              <br />
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
                 <label htmlFor="expiracion_anio" className="text-md">
                Mes Expiración
              </label>
              <br />
                <input
                name="expiracion_anio"
                  placeholder="2025"
                  type="number"
                  min={24}
                  minLength={2}
                  maxLength={2}
                  value={expiringYear}
                  onChange={(e) => setExpiringYear(e.target.value)}
                  className="inline p-[0.8rem] font-normal text-black ml-[1%] w-[5rem] md:w-[8rem] h-full border border-current rounded"
                  required
                />
</div>)
}