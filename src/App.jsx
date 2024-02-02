import logo from './logo.svg';
import DefaultLayout from './Layouts/DefaultLayout';
import List from './Components/List';

function App() {
  const dades = [
    {
      id: 1,
      producte: "Pantalons",
      quantitat: 100,
      dataCaducitat: "2023-12-31",
      dataFabricacio: "2023-01-01",
      preu: 10,
    },
    {
      id: 2,
      producte: "Camises",
      quantitat: 100,
      dataCaducitat: "2023-12-31",
      dataFabricacio: "2023-01-01",
      preu: 10,
    },
    {
      id: 3,
      producte: "Sabates",
      quantitat: 100,
      dataCaducitat: "2023-12-31",
      dataFabricacio: "2023-01-01",
      preu: 10,
    },
  ]

  return (
    <DefaultLayout>
      <h1 className="text-3xl my-5">Lots</h1>
      <List array={dades} />
    </DefaultLayout>
  );
}

export default App;