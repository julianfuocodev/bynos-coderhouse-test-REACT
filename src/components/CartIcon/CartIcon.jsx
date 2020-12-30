//Importar Componentes
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineGlassAlt } from '@fortawesome/free-solid-svg-icons'

//Estilos
import "./CartIcon.css";

//Construccion del Componente
export const CartIcon = () => {
  const contexto = useContext(CartContext);

  return (
    <div>
      <FontAwesomeIcon icon={faWineGlassAlt} className="h1 cup"/>
      {contexto.cantidadItemsPedido !== 0 && (
        <span className="cart-icon-count">{contexto.cantidadItemsPedido}</span>
      )}
    </div>
  );
};
