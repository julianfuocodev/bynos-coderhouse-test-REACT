//Importo componentes
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./containers/Home/Home";
import { ItemDetailContainer } from "./containers/ItemDetail/ItemDetail";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import { Category } from "./components/Category/Category";
import { Checkout } from "./components/Checkout/Checkout";
import { Footer } from "./components/Footer/Footer";

//Componente
const App = () => {
  return (

    <CartProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>

        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/producto/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/categoria/:key">
            <Category />
          </Route>
          <Route path="/carrito">
            <Cart />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>

        <Footer />

      </BrowserRouter>
    </CartProvider>
  );
};

//Exporto componente
export default App;
