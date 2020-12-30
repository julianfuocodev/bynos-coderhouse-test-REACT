//Importar Componente
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import { Item } from "../Item/Item";
import { Loading } from "../Loading/Loading";

//Estilos
import "./Category.css";

//Construccion del Componente
export const Category = () => {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryNotFound, setCategoryNotFound] = useState(false);
  const { key } = useParams();
  console.log(key)

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db
      .collection("productos-ecommerce-react")
      .where("type", "==", key);

    itemCollection
      .get()
      .then((result) => {
        if (result.size === 0) {
          setCategoryNotFound(true);
        }
        setItemList(
          result.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((error) => console.log("Error", error))
      .finally(() => setLoading(false));
  }, [key]);


  console.log(itemList)

  if (itemList.length) {
    return (
      <>
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-5 category-list-row">
            {itemList.map((item, indice) => {
              return <Item item={item} key={indice} />;
            })}
          </div>
        </div>
      </>
    );
  }
  if (loading) {
    return <Loading />;
  }
  if (categoryNotFound) {
    return (
      <div className="category-list-not-found">Categoría no encontrada</div>
    );
  }
  return <> </>;
};
