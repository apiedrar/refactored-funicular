export default function CardHoldersName({cardHoldersName, setHoldersName}) {
    return (<div>
        <input
                  placeholder="Daniel M."
                  name="nombre"
                  type="text"
                  value={cardHoldersName}
                  onChange={(e) => setHoldersName(e.target.value)}
                  className="inline p-[0.8rem] font-normal text-black mr-[1%] w-[6rem] md:w-[10rem] h-full border border-current rounded"
                />
    </div>)
}