//Importar Componentes
import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../CartItem/CartItem";

//Estilos
import "./Cart.css";

//Construccion del Componente
export const Cart = () => {
  const contexto = useContext(CartContext);
  const history = useHistory();

  const finalizar = () => {
    history.push("/checkout");
  };

  if (contexto.pedido.length === 0) {
    return <div className="cart-empty rosado text-center h3 p-3 m-3">El carrito esta vacío</div>;
  } else {
    return (
      <>
        <div className="cart-list">
          {contexto.pedido.map((item, indice) => {
            return <CartItem item={item} key={indice} />;
          })}
        </div>
        <div className="cart-finalize-container">
          <div className="cart-total text-white">TOTAL: ${contexto.montoTotalPedido}</div>
          <div className="cart-finalize">
            <button className="btn btn-light
             text-dark rose" onClick={finalizar}>
              Comprar
            </button>
          </div>
        </div>
      </>
    );
  }
};
