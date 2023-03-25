import React from "react";
import "../hojas-de-estilo/boton.css";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=";
  };

  return (
    <button
      disabled={props.isDisabled}
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : null
      }`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </button>
  );
}

export default Boton;
