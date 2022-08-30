import React, { useState } from "react";

function App() {
  const [gastos, setGastos] = useState([1500, 300, 450]);

  return (
    <div className="wrapper">
      <AgregarGasto setGastos={setGastos} gastos={gastos} />
      <Contador gastos={gastos} />
      <GastosMes gastos={gastos} />
      
    </div>
  );
}

function Contador({ gastos }) {
  let dataGasto = gastos.reduce((a, b) => a + b, 0);
  return <div className="contador"> Gasto mensual: {dataGasto}</div>;
}

function GastosMes(props) {
  const { gastos } = props;
  return (
    <ul>
      {gastos.map((gasto, index) => (
        <li key={index}>{gasto}</li>
      ))}
    </ul>
  );
}

function AgregarGasto({ gastos, setGastos }) {
  function handleSubmit(event) {
    event.preventDefault();
    const gasto = parseInt(event.target.elements.gasto.value);
    console.log(gasto);
    setGastos([...gastos, gasto]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input autocomplete="off" type="number" id="gasto" />
      <button type="Submit">Agregar</button>
    </form>
  );
}

export default App;
