//Importar Componentes
import React from "react";
import { ItemList } from "../../components/ItemList/ItemList";

//Estilos
import "./Home.css";


//Construccion del Componente
export const Home = () => {

  return (
    <div className="home">
      
        <div
          className="home-main-image-container col-10 mt-3"
          style={{
            background: `url("${process.env.PUBLIC_URL}/images/Hero.jpg") no-repeat left`,
            backgroundSize: "cover",
          }}
        >
        </div>


      <ItemList />
    </div>
  );
};
