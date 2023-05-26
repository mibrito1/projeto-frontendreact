import React, { useState } from "react"
import { ProductCard } from "../ProductCard/ProductCard"
import { HomePai, ProductCardDiv, QuantidadeDiv } from "./HomeStyles"

export function Home({ product, valorTotal, setValorTotal, carrinho, setCarrinho }) {

  const [ordination, setOrdination] = useState("");

  function handleSelect(event) {
    console.log(event.target.value);
    setOrdination(event.target.value);
  }

  return (
    <>
      <HomePai>
        <QuantidadeDiv>
          <span>Quantidade de Produtos: {product.length} </span>
          <span>
            Ordenação:
            <select value={ordination} onChange={handleSelect}>
              <option></option>
              <option>Crescente</option>
              <option>Decrescente</option>
            </select>
          </span>
        </QuantidadeDiv>

        <ProductCardDiv>

          <ProductCard produto={product[0]} />
          <ProductCard produto={product[1]} />
          <ProductCard produto={product[2]} />

        </ProductCardDiv>

      </HomePai>

    </>
  )
}
