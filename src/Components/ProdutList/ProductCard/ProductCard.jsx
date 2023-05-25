import { CardTextbox, Imagem, ProductCardPai } from "./productStyle"

export function ProductCard({ productlist }) {
  console.log(productlist)
  return (
    <>
      <ProductCardPai>
        <Imagem src={productlist.imageUrl} />
        <CardTextbox>
          <p>{productlist.name} </p>
          <p>{productlist.value} </p>
          <button>Adicionar item</button>
        </CardTextbox>
      </ProductCardPai>
    </>
  )
}
