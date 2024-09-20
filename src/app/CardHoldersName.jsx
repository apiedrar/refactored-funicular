export default function CardHoldersName({ cardHoldersName, setHoldersName }) {
  return (
    <div>
      <label htmlFor="nombre" className="text-md">
        Nombre del Titular
      </label>
      <br />
      <input
        placeholder="Daniel A. Martin Z."
        name="nombre"
        type="text"
        value={cardHoldersName}
        onChange={(e) => setHoldersName(e.target.value)}
        className="inline p-[0.8rem] font-normal text-black mr-[1%] w-[18rem] md:w-[30rem] h-full border border-current rounded"
      />
    </div>
  );
}
