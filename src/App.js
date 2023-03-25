import "./App.css";
import logoCasio from "./imagenes/logo.png";
import Boton from "./componentes/boton.js";
import Pantalla from "./componentes/pantalla.js";
import BotonBorrar from "./componentes/botonClear.js";
import { useState } from "react";
import { evaluate } from "mathjs";
import { computeHeadingLevel } from "@testing-library/react";


function App() {
  const [input, setInput] = useState("");

  const deshabilitarIgual = () =>  {
  
    const patron = /^([-]?\d+(\.\d+)?)[+\-*\/](?:([-]?\d+(\.\d+)?)([+\-*\/](?!$)){0,2})$/;


    const match = String(input).match(patron);
    
    if (match === null){
      return true;
    }else { return false};
  };

  const agregrarInput = (val) => {
    deshabilitarIgual()
    setInput(input + val);
  };
 
  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {  

      alert("Porfavor ingrese valores para realizar los calculos!!");
    }
  };

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img src={logoCasio} className="logoC" alt="Logo facherito" />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregrarInput}>1</Boton>
          <Boton manejarClic={agregrarInput}>2</Boton>
          <Boton manejarClic={agregrarInput}>3</Boton>
          <Boton manejarClic={agregrarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregrarInput}>4</Boton>
          <Boton manejarClic={agregrarInput}>5</Boton>
          <Boton manejarClic={agregrarInput}>6</Boton>
          <Boton manejarClic={agregrarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregrarInput}>7</Boton>
          <Boton manejarClic={agregrarInput}>8</Boton>
          <Boton manejarClic={agregrarInput}>9</Boton>
          <Boton manejarClic={agregrarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado} isDisabled={deshabilitarIgual()}>=</Boton>
          <Boton manejarClic={agregrarInput}>0</Boton>
          <Boton manejarClic={agregrarInput}>.</Boton>
          <Boton manejarClic={agregrarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonBorrar manejarClear={() => setInput("")}>CLEAR</BotonBorrar>
        </div>
      </div>
    </div>
  );
}

export default App;
