//Importo Componente Firebase
import { getFirestore } from "../firebase";


//Construyo la base de la coleccion de los productos
const dataBase = getFirestore();
const itemCollection = dataBase.collection("productos-ecommerce-react");

const getAllProducts = () => {
  return itemCollection.get();
};

const getProduct = (id) => {
  const item = itemCollection.doc(id);
  return item.get();
};


const getProductsByCategory = (type) => {
  const filter = itemCollection.where("type", "==", type);
  return filter.get();
};
;

//Construyo la base de la coleccion de las categorias
const dataBaseCategory = getFirestore();
const itemCollectionCategory = dataBaseCategory.collection("categorias");

const getAllCategories = () => {
  return itemCollectionCategory.get();
};

const getCategory = (id) => {
  const item = itemCollectionCategory.doc(id);
  return item.get();
};

const getCategoryByKey = (key) => {
  const filter = itemCollectionCategory.where("key", "==", key);
  return filter.get();
};

export const ProductosAPI = {
  getAllProducts,
  getProduct,
  getProductsByCategory,
  getAllCategories,
  getCategory,
  getCategoryByKey,
};
