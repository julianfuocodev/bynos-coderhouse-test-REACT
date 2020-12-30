import { getFirestore } from "../firebase";

const dataBase = getFirestore();
const itemCollection = dataBase.collection("Ventas");

const crearPedido = (pedido) => {
  return itemCollection.add(pedido);
};

export const PedidosAPI = {
  crearPedido,
};
