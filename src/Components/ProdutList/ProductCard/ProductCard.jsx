import { CardTextbox, Imagem, ProductCardPai } from "./productStyle"

export function ProductCard({ produto, addItens }) {

  return (
    <>
      <ProductCardPai>
        <Imagem src={produto.imageUrl} />
        <CardTextbox>
          <p>{produto.name} </p>
          <p>{produto.value} </p>
          <button onClick={() => addItens(produto)}>Adicionar ao carrinho</button>
        </CardTextbox>
      </ProductCardPai>
    </>
  )
}
