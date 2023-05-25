
import { Filtro } from "./Components/Filtro/Filtro";
import { Home } from "./Components/ProdutList/Home/Home";
import { Card } from "./Components/ShopngCard/Card/Card";
import Globalstyle from "./Globalstyle";
import { AppCaixa } from "./appStyle";
import { productlist } from "./assents/productList";

function App() {

  console.log(productlist)

  return (
    <>
      <Globalstyle />

      <AppCaixa>
        <Filtro />
        <Home productlist={productlist} />
        <Card />
      </AppCaixa>

    </>
  )

}
export default App;



