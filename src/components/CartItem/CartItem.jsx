//Importar Componentes
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

//Estilos
import "./CartItem.css";

//Construccion del Componente
export const CartItem = (props) => {
  const { item, cantidad } = props.item;
  const contexto = useContext(CartContext);

  return (
    <div className="cart-item-container">
      <div>
        <img
          src={process.env.PUBLIC_URL + item.imagen}
          className="cart-item-img"
          alt={item.name}
        />
      </div>
      <div className="cart-item-description">
        <div className="cart-item-name">{item.name}</div>
        <div>{item.description}</div>
        <div>
          Precio unitario:{" "}
          <span className="cart-item-precio">${item.price}</span> - cantidad:{" "}
          <span className="cart-item-precio">{cantidad}</span> - total:{" "}
          <span className="cart-item-precio">${cantidad * item.price}</span>
        </div>
      </div>
      <div>
        <button onClick={() => {
          contexto.eliminarItem(item.id);
        }}> x </button>
      </div>
    </div>
  );
};
