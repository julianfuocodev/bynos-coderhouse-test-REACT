//Importar Componentes
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductosAPI } from "../../scripst/productos";
import { GenericSerializer } from "../../scripst/serializer";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import { Loading } from "../../components/Loading/Loading";

//Estilos
import "./ItemDetail.css";


//Construccion del Componente
export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [itemNotFound, setItemNotFound] = useState(false);

  useEffect(() => {
    ProductosAPI.getProduct(id).then((response) => {
      if (response.exists) {
        const item = GenericSerializer.serialize(response);
        setItem(item);
      } else {
        setItemNotFound(true);
      }
    });
  }, [id]);

  if (item && item.id) {
    return <ItemDetail item={item} />;
  } else if (itemNotFound) {
    return <div className="item-detail-not-found">Producto no encontrado</div>;
  } else {
    return <Loading />;
  }
};