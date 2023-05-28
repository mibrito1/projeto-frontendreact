
import { Card } from "../Card/Card";

export function Itens({ nome, valor, quantidade, imagem, id, removerItem }) {
    return (
        <>
            <p>Nome:{nome} </p>
            <p>Valor: R${valor.toFixed(2)}  </p>
            <p>Quantidade: {quantidade} </p>
            <button onClick={() => removerItem(id)} > Remover </button>
        </>



    );
}