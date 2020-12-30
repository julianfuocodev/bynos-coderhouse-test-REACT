//Importar Componentes
import React, { useState, useEffect } from "react";
import { ProductosAPI } from "../../scripst/productos";
import { GenericSerializer } from "../../scripst/serializer";
import { Item } from "../Item/Item";
import { Loading } from "../Loading/Loading";

//Estilos
import "./ItemList.css";

//Construir Componente
export const ItemList = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    ProductosAPI.getAllProducts().then((response) => {
      const productos = GenericSerializer.serializeAll(response);
      setItemList(productos);
      
    });
  }, []);

  
  if (itemList.length) {
    return (
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 item-list-row">
          {itemList.map((item, indice) => {
            return <Item item={item} key={indice} />;
          })}
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};
