export default function CardHoldersLastName({lastName, setLastName}) {
    return(<div>
        <input
                  placeholder="Ramirez"
                  name="apellido_paterno"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="inline p-[0.8rem] font-normal text-black mr-[1%] w-[6rem] md:w-[10rem] h-full border border-current rounded"
                />
    </div>)
}