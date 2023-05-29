
import { useState } from "react";
import { Filtro } from "./Components/Filtro/Filtro";
import { Home } from "./Components/ProdutList/Home/Home";
import { Card } from "./Components/ShopngCard/Card/Card";
import Globalstyle from "./Globalstyle";
import { AppCaixa } from "./appStyle";
import { productlist } from "./assents/productList";
import { ServerStyleSheet } from "styled-components";

function App() {

  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [minfilter, setMinFilter] = useState(0); //quando digitar la no filtro vai começar no zero
  const [maxfilter, setMaxFilter] = useState(0); // esse zero nao é string
  const [searchfilter, setSearchFilter] = useState("");

  return (
    <>
      <Globalstyle />

      <AppCaixa>
        <Filtro
          filtroMinimo={minfilter}
          setFiltroMinimo={setMinFilter}
          filtroMaximo={maxfilter}
          setFiltroMaximo={setMaxFilter}
          filtroSearch={searchfilter}
          setFiltroSearch={setSearchFilter}
        />
        <Home
          product={productlist}
          valorTotal={amount}
          setValorTotal={setAmount}
          carrinho={cart}
          setCarrinho={setCart}
        />

        <Card
          valorTotal={amount}
          setValorTotal={setAmount}
          carrinho={cart}
          setCarrinho={setCart}
        />

      </AppCaixa>

    </>
  )

}
export default App;



