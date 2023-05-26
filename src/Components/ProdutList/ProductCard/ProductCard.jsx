import { CardTextbox, Imagem, ProductCardPai } from "./productStyle"

export function ProductCard({ produto }) {
  console.log(produto)
  return (
    <>
      <ProductCardPai>
        <Imagem src={produto.imageUrl} />
        <CardTextbox>
          <p>{produto.name} </p>
          <p>{produto.value} </p>
          <button>Adicionar item</button>
        </CardTextbox>
      </ProductCardPai>
    </>
  )
}
