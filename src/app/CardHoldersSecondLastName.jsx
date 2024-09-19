export default function CardHoldersSecondLastName({secondLastName, setSecondLastName}) {
    return (<div>
        <input
                  placeholder="Gonzalez"
                  name="apellido_materno"
                  type="text"
                  value={secondLastName}
                  onChange={(e) => setSecondLastName(e.target.value)}
                  className="inline p-[0.8rem] font-normal text-black mr-[1%] w-[6rem] md:w-[10rem] h-full border border-current rounded"
                />
    </div>)
}