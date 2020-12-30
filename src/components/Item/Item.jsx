//Importar Componentes
import React from "react";
import { Link } from "react-router-dom";

//Estilos
import "./Item.css";

//Construccion del Componente
export const Item = (props) => {
  const { item } = props;
  return (
    <Link to={`/producto/${item.id}`} className="router-link">
      <div className="card item-card m-3">
        <img
          src={item.imagen}
          className="card-img-top ajustarTamaño"
          alt={item.name}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.type}</p>
          <p className="card-text">{item.description}</p>
          <p className="card-text precio">${item.price}</p>
        </div>
      </div>
    </Link>
  );
};
