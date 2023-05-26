
import React from "react"
import { FiltroPai } from "./FiltroStyles"


export function Filtro({
    filtroMinimo,
    setFiltroMinimo,
    filtroMaximo,
    setFiltroMaximo,
    filtroSearch,
    setFiltroSearch,
}) {

    function handlefiltroMinimo(event) {
        if (event.target.value < 0) {
            alert("OPS! VALOR MENOR QUE ZERO")
            setFiltroMinimo(0)
        } else {
            setFiltroMinimo(event.target.value)
        }
        //event- algo aconteceu, target - onde aconteceu, valeu- o valor do que aconteceu
    }
    console.log(filtroMinimo) //para ver o valor do filtro minimo no console


    function handlefiltroMaximo(event) {
        if (event.target.value < 0) {
            alert("OPS! VALOR MENOR QUE ZERO")
            setFiltroMaximo(0)
        } else {
            setFiltroMaximo(event.target.value)
        }
    }
    console.log(filtroMaximo) //para ver o valor do filtro maximo no console


    function handleFiltroSearch(event) {
        setFiltroSearch(event.target.value)
    }
    console.log(filtroSearch) //para ver o valor do filtro maximo no console



    return (
        <>
            <FiltroPai>
                <h2>Filters</h2>
                <label>Valor mínimo: <br /></label>
                <input type="number"
                    value={filtroMinimo}
                    onChange={handlefiltroMinimo}
                />
                <label>Valor máximo:<br /></label>
                <input type="number"
                    value={filtroMaximo}
                    onChange={handlefiltroMaximo}
                />
                <label>Busca por Nome: <br /></label>
                <input type="text"
                    value={filtroSearch}
                    onChange={handleFiltroSearch} />

            </FiltroPai>

        </>
    )
}