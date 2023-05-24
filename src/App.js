
import { Filtro } from "./Components/Filtro/Filtro";
import { Home } from "./Components/ProdutList/Home/Home";
import { Card } from "./Components/ShopngCard/Card/Card";
import Globalstyle from "./Globalstyle";
import { AppCaixa } from "./appStyle";

function App() {

  return (
    <>
      <Globalstyle />

      <AppCaixa>
        <Filtro />
        <Home />
        <Card />
      </AppCaixa>

    </>
  )

}
export default App;



