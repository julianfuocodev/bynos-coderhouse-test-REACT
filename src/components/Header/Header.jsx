//Importar Componentes
import React from "react";
import { Link } from "react-router-dom";
import { CartIcon } from "../CartIcon/CartIcon";

//Estilos
import "./Header.css";

//Construccion del Componente
export const Header = () => {

  return (
    <div className="spink sticky-top">
      <nav className="navbar header">
        <div className="col-2">
          <Link to="/">
            <h4 className="bynos m-4">By-Nos</h4>
          </Link>
        </div>
        <div className="col-2 categoria">
          <Link to="/">
            <p className="text-center">Ver Todos</p>
          </Link>
        </div>
        <div className="col-2 categoria">
          <Link to="/categoria/Malbec">
            <p className="text-center">Vinos Malbec</p>
          </Link>
        </div>
        <div className="col-2 categoria">
          <Link to="/categoria/Cabernet">
            <p className="text-center">Vinos Cabernet</p>
          </Link>
        </div>
        <div className="col-2 categoria">
          <Link to="/categoria/Blanco">
            <p className="text-center">Vinos Blanco</p>
          </Link>
        </div>
        <div className="col-1 botoncarrito">
          <Link to="/carrito">
            <CartIcon />
          </Link>
        </div>
        <div className="col-1 categoria">
          <Link to="/informes">
          <p className="text-center">Informes</p>
          </Link>
        </div>
      </nav>

    </div >

  );
};
