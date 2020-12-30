//Importar Componentes
import React from "react";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

//Estilos
import "./ItemDetail.css";

//Construccion del componente
export const ItemDetail = (props) => {
  const { item } = props;
  const [cantidad, setCantidad] = useState(1);
  const contexto = useContext(CartContext);
  const history = useHistory();

  const actualizarCantidad = (valor) => {
    setCantidad(valor);
  };

  const comprar = () => {
    contexto.agregarItem(item, cantidad);
    history.push("/carrito");
  };

  return (
    <div className="card item-detail-card">
      <div className="row">
        <div className="col-md-4">
          <img
            src={item.imagen}
            className="card-img item-detail-image ajustarTamaño"
            alt={item.name}
          />
        </div>
        <div className="col-md-6">
          <div className="card-body item-detail-card-description">
            <div className="item-detail-card-description-body">
              <h5 className="card-title item-detail-name">{item.name}</h5>
              <p className="card-text item-detail-info">{item.description}</p>
              <p className="card-text item-detail-precio">${item.price}</p>
            </div>
            <div className="item-detail-card-description-footer">
              <ItemCount
                initial={1}
                min={1}
                max={item.stock}
                onAdd={actualizarCantidad}
              />
              <button className="btn btn-dark text-center" onClick={comprar}>
                Agregar al carrito {cantidad}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

