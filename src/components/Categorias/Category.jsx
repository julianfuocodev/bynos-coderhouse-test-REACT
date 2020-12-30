import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriasAPI } from "../../api/categorias.api";
import { ProductosAPI } from "../../api/productos.api";
import { GenericSerializer } from "../../api/generic.serializer";
import { Item } from "../Item/Item";
import { Loading } from "../Loading/Loading";

import "./category-list.component.css";

export const CategoryList = () => {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState({});
  const [categoryNotFound, setCategoryNotFound] = useState(false);
  const { key } = useParams();

  useEffect(() => {
    setCategoryNotFound(false);
    setItemList([]);
    getCategory();
  }, [key]);
console.log(getCategory);
console.log(getProducts);
  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    setLoading(true);
    CategoriasAPI.getCategoryByKey(key).then((response) => {
      if (response.size !== 0) {
        const categoria = GenericSerializer.serializeAll(response);
        getProducts(categoria[0].id);
        setCategory(categoria[0]);
      } else {
        setLoading(false);
        setCategoryNotFound(true);
      }
    });
  };

  const getProducts = (categoryId) => {
    ProductosAPI.getProductsByCategory(parseInt(categoryId)).then(
      (response) => {
        const productos = GenericSerializer.serializeAll(response);
        setItemList(productos);
        setLoading(false);
      }
    );
  };

  if (itemList.length) {
    return (
      <>
        <div
          className="category-list-image-container"
          style={{
            background: `url("${
              process.env.PUBLIC_URL + category.imagen
            }") no-repeat center`,
            backgroundSize: "cover",
          }}
        >
          <div className="category-list-text">{category.nombre}</div>
          <img
            src={process.env.PUBLIC_URL + "/images/arrow.png"}
            className="category-list-arrow"
            alt="arrow image"
          />
        </div>
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
