export default function List({ array }) {
  return (
    <ul className="rounded-xl border-blue-500 ">
      {array.map((item, index) => (
        <li
          key={index}
          className="flex justify-between items-center p-4 border-b-2 cursor-pointer border-blue-400 
          hover:bg-blue-100 transition duration-300 ease-in-out "
        >
          <span>{item.producte}</span>
          <span>{item.quantitat}</span>
          <span>{item.dataCaducitat}</span>
          <span>{item.dataFabricacio}</span>
          <span>{item.preu}</span>
        </li>
      ))}
    </ul>
  );
}
