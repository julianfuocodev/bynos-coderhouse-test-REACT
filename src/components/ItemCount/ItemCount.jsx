//Importar Componentes
import React from "react";
import { useState } from "react";

//Estilos
import "./ItemCount.css";

//Construccion del Componente
export const ItemCount = (props) => {
  const [contador, setContador] = useState(props.initial);

  const agregarUno = () => {
    if (contador < props.max) {
      setContador(contador + 1);
      props.onAdd(contador + 1);
    }
  };
  const restarUno = () => {
    if (contador > props.min) {
      setContador(contador - 1);
      props.onAdd(contador - 1);
    }
  };
  return (
    <div className="bg-dark text-center">
        <div className="item-count-counter-container">
          <button className="bg-dark text-center text-white" onClick={restarUno}> - </button>
          <span className="item-count-counter text-white">{contador}</span>
          <button className="bg-dark text-center text-white" onClick={agregarUno}> + </button>
        </div>
    </div>
  );
};
