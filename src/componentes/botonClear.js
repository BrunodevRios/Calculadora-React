import React from "react";
import "../hojas-de-estilo/boton-clear.css";

const BotonBorrar = (props) => (
  <div className="boton-clear" onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonBorrar;
