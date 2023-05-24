
import React from "react"
import { FiltroPai } from "./FiltroStyles"



export function Filtro() {
    return (
        <>
            <FiltroPai>
                <h2>Filters</h2>
                <label>Valor mínimo: <br /></label>
                <input type="number" />
                <label>Valor máximo:<br /></label>
                <input type="number" />
                <label>Busca por Nome: <br /></label>
                <input type="text" />



            </FiltroPai>

        </>
    )
}