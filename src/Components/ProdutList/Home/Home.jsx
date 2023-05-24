import React from "react"
import { ProductCard } from "../ProductCard/ProductCard"
import { HomePai, ProductCardDiv, QuantidadeDiv } from "./HomeStyles"





export function Home() {
  return (
    <>
      <HomePai>
        <QuantidadeDiv>
          <span>Quantidade de Produtos</span>
          <span>
            Ordenação
            <select>
              <option>Crescente</option>
              <option>Decrescente</option>
            </select>
          </span>
        </QuantidadeDiv>

        <ProductCardDiv>

          <ProductCard />
          <ProductCard />
          <ProductCard />

        </ProductCardDiv>

      </HomePai>

    </>
  )
}
