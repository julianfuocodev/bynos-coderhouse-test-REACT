//Importar Componentes
import React from "react";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm";
import { CartContext } from "../../context/CartContext";
import { PedidosAPI } from "../../scripst/pedidos";
import { Loading } from "../Loading/Loading";

//Estilos
import "./Checkout.css";

//Construccion del componente
export const Checkout = () => {
  const contexto = useContext(CartContext);
  const history = useHistory();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [idPedido, setIdPedido] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    if (contexto.cantidadItemsPedido === 0) {
      history.push("/");
    }
  }, []);

  const generarCheckout = (cliente) => {
    const pedidoFinal = {
      cliente,
      total: contexto.montoTotalPedido,
      pedido: contexto.pedido,
      estado: "Generado",
      fecha: new Date(),
    };
    setLoading(true);
    PedidosAPI.crearPedido(pedidoFinal)
      .then((response) => {
        setMensaje("Compra realizada exitosamente!");
        setIdPedido(response.id);
        setStep(2);
        contexto.limpiarPedido();
      })
      .catch((error) => {
        setMensaje(
          "Ocurrió un error procesando su pedido, intente nuevamente mas tarde"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <Loading />;
  }
  if (step === 1) {
    return (
      <div>
        <CheckoutForm onSuccess={generarCheckout} />
      </div>
    );
  } else {
    return (
      <div className="checkout-container">
        <h1 className="checkout-title text-white">{mensaje}</h1>
        {idPedido === "" ? (
          ""
        ) : (
          <div className="checkout-pedido text-white">
            Codigo de Pedido:{" "}
            <span className="checkout-codigo text-white">{idPedido}</span>
          </div>
        )}
      </div>
    );
  }
};
