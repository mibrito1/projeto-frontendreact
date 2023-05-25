import React from "react"
import { ProductCard } from "../ProductCard/ProductCard"
import { HomePai, ProductCardDiv, QuantidadeDiv } from "./HomeStyles"

export function Home({ productlist }) {
  console.log(productlist)
  return (
    <>
      <HomePai>
        <QuantidadeDiv>
          <span>Quantidade de Produtos: {productlist.length} </span>
          <span>
            Ordenação
            <select>
              <option>Crescente</option>
              <option>Decrescente</option>
            </select>
          </span>
        </QuantidadeDiv>

        <ProductCardDiv>

          <ProductCard productlist={productlist[0]} />
          <ProductCard productlist={productlist[1]} />
          <ProductCard productlist={productlist[2]} />

        </ProductCardDiv>

      </HomePai>

    </>
  )
}
