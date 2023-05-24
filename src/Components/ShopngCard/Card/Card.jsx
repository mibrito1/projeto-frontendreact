
import React from "react";
import { Itens } from "../Itens/Itens";
import { CardPai } from "./CardStyles";



export function Card() {
  return (
    <>
      <CardPai>
        <p>Esse é o Carrinho</p>
        <Itens />
      </CardPai>
    </>
  )
}