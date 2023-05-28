
import React from "react";
import { Itens } from "../Itens/Itens";
import { CardPai } from "./CardStyles";



export function Card({
  valorTotal,
  setValorTotal,
  carrinho,
  setCarrinho }) {

  function removeIten(id) {
    carrinho.map((produto) => {
      if (produto.id === id && produto.quantidade >= 1) {
        console.log(produto);
        produto.quantidade = produto.quantidade - 1;
        setCarrinho([...carrinho]);
        setValorTotal(valorTotal - produto.value);
      }

      if (produto.quantidade === 0) {
        const novoCarrinho = carrinho.filter((products) => products.quantidade !== 0);
        setCarrinho(novoCarrinho);

      }
    })
  }

  return (
    <>
      <CardPai>
        <p>Carrinho</p>
        {carrinho.map((produto) => {

          return (
            <Itens
              key={produto.id}
              nome={produto.name}
              valor={produto.value * produto.quantidade}
              quantidade={produto.quantidade}
              imagem={produto.imageUrl}
              id={produto.id}
              removerItem={removeIten} />


          );
        })}
        <h4>SOMA TOTAL: R${valorTotal.toFixed(2)} </h4>

      </CardPai>
    </>
  )
}