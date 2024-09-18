export default function CardHoldersName({cardHoldersName, setHoldersName}) {
    return (<div>
        <input
                  placeholder="Daniel M. Ramirez"
                  name="nombre-titular"
                  type="text"
                  value={cardHoldersName}
                  onChange={(e) => setHoldersName(e.target.value)}
                  className="inline p-[0.8rem] font-normal text-black mr-[1%] w-[18rem] md:w-[30rem] h-full border border-current rounded"
                />
    </div>)
}