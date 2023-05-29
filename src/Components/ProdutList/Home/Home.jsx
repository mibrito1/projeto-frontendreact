import React, { useState } from "react"
import { ProductCard } from "../ProductCard/ProductCard"
import { HomePai, ProductCardDiv, QuantidadeDiv } from "./HomeStyles"

export function Home({ product,
  valorTotal,
  setValorTotal,
  carrinho,
  setCarrinho }) {
  const [ordination, setOrdination] = useState("");

  function handleSelect(event) {
    console.log(event.target.value);
    setOrdination(event.target.value);
  }
  // const renderizarCards = product.map((produtos) => {
  //   console.log(produtos)
  //   return <ProductCard produto={produtos} VERSAO EXTERNA AO RETURN/>
  // })

  function addAoCarrinho(itenAdicionado) {
    // console.log(itenAdicionado)
    const novoitem = carrinho.find((itenCallBack) => itenAdicionado.id === itenCallBack.id);

    if (novoitem === undefined) {

      itenAdicionado = { ...itenAdicionado, quantidade: 1 };
      setCarrinho([...carrinho, itenAdicionado]);

      const somaValor = valorTotal + itenAdicionado.value;
      setValorTotal(somaValor);

    } else {
      const novoCarrinho = carrinho.map((itemAdd) => {
        if (itemAdd.id === novoitem.id) {
          const somaValor = valorTotal + itenAdicionado.value;
          setValorTotal(somaValor);

          return { ...novoitem, quantidade: itemAdd.quantidade + 1 };
        } else {
          return itemAdd;
        }
      })
      setCarrinho(novoCarrinho);//se o valor estiver concatenando la no console, va no app e troque as strings do amont("") por zero ficando amont(0)
    }

  }
  // console.log(carrinho, "carrinho")
  console.log("Valor total", valorTotal)

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
          {/* {renderizarCards} */}
          {/* CHAMADA DE COMPONTENTE UTILIZANDO MAP */}

          {product.map((produto) => {

            return <ProductCard produto={produto}
              key={produto.id}
              addItens={addAoCarrinho}
            />
          })
          }

          {/* <ProductCard produto={product[0]} />
          <ProductCard produto={product[1]} />
          <ProductCard produto={product[2]} CHAMADA DO COMPONTENTE SEM USO DE MAP, ESSA É DENTRO DO RETURN /> */}


        </ProductCardDiv>

      </HomePai>

    </>
  )
}
