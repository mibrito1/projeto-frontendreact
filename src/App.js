
import { useState } from "react";
import { Filtro } from "./Components/Filtro/Filtro";
import { Home } from "./Components/ProdutList/Home/Home";
import { Card } from "./Components/ShopngCard/Card/Card";
import Globalstyle from "./Globalstyle";
import { AppCaixa } from "./appStyle";
import { productlist } from "./assents/productList";

function App() {

  const [cart, setCart] = useState("");
  const [amount, setamount] = useState("");
  const [minfilter, setMinFilter] = useState("");
  const [maxfilter, setMaxFilter] = useState("");
  const [searchfilter, setSearchFilter] = useState("");

  return (
    <>
      <Globalstyle />

      <AppCaixa>
        <Filtro />
        <Home product={productlist} />
        <Card />
      </AppCaixa>

    </>
  )

}
export default App;



