//Importar Componentes
import React, { useEffect, useState } from "react";

//Construccion y exportacion del componente
export const CartContext = React.createContext();

//Construccion del componente
export const CartProvider = ({ children }) => {
  const [pedido, setPedido] = useState([]);
  const [cantidadItemsPedido, setCantidadItemsPedido] = useState(0);
  const [montoTotalPedido, setMontoTotalPedido] = useState(0);

  useEffect(() => {
    const pedido = localStorage.getItem("pedido");
    const cantidadItemsPedido = localStorage.getItem("cantidadItemsPedido");
    const montoTotalPedido = localStorage.getItem("montoTotalPedido");
    pedido && setPedido(JSON.parse(pedido));
    cantidadItemsPedido &&
      setCantidadItemsPedido(parseInt(cantidadItemsPedido));
    montoTotalPedido && setMontoTotalPedido(parseInt(montoTotalPedido));
  }, []);

  const eliminarItem = (id) => {
    const newPedido = pedido;
    const indice = newPedido.findIndex((elemento) => {
      return elemento.item.id === id;
    });
    newPedido.splice(indice, 1);
    setPedido([...newPedido]);
    localStorage.setItem("pedido", JSON.stringify([...newPedido]));
    calcularTotales();
  };

  const agregarItem = (item, cantidad) => {
    const detalle = {
      item,
      cantidad,
    };
    const indiceYaExiste = pedido.findIndex((item) => {
      return item.item.id === detalle.item.id;
    });
    if (indiceYaExiste === -1) {
      pedido.push(detalle);
    } else {
      pedido[indiceYaExiste].cantidad += detalle.cantidad;
    }
    setPedido([...pedido]);
    localStorage.setItem("pedido", JSON.stringify([...pedido]));
    calcularTotales();
  };

  const calcularTotales = () => {
    let cantidad = 0,
      total = 0;
    pedido.forEach((elemento) => {
      cantidad += elemento.cantidad;
      total += elemento.cantidad * elemento.item.price;
    });
    setCantidadItemsPedido(cantidad);
    localStorage.setItem("cantidadItemsPedido", cantidad);
    setMontoTotalPedido(total);
    localStorage.setItem("montoTotalPedido", total);
  };

  const limpiarPedido = () => {
    setPedido([]);
    localStorage.setItem("pedido", JSON.stringify([]));
    setCantidadItemsPedido(0);
    localStorage.setItem("cantidadItemsPedido", 0);
    setMontoTotalPedido(0);
    localStorage.setItem("montoTotalPedido", 0);
  };

  return (
    <CartContext.Provider
      value={{
        pedido,
        cantidadItemsPedido,
        montoTotalPedido,
        eliminarItem,
        agregarItem,
        limpiarPedido,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
