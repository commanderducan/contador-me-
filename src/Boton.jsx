import "./App.css"

import { useState} from "react";

function Boton ({texto, manejador}) {
    let [numeroDeClicks, setNumeroDeClicks] = useState (0)

    function manejadorClick () {
        let nuevoNumeroDeClicks = numeroDeClicks + 1
        setNumeroDeClicks(nuevoNumeroDeClicks)
        manejador()
    }
    return (
        <button onClick = {manejadorClick}>{texto}({numeroDeClicks})</button>
    )
}

export default Boton