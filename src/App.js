import "./App.css"

import { useState } from "react";
import Boton from "./Boton";

function App () {
  let [valorActual, setValorActual] = useState(0)

  function Incrementar () {
    let nuevoValor = valorActual + 1
    setValorActual(nuevoValor)
  }

  function Reducir () {
    let nuevoValor = valorActual - 1
    setValorActual(nuevoValor)
  }

  return (
    <>
    <h1>{valorActual}</h1>
    <Boton manejador={Incrementar} texto="Incrementar"/>
    <Boton manejador={Reducir} texto="Reducir"/>
    <button onClick = {Incrementar}>Incrementar</button>
    <button onClick = {Reducir}>Reducir</button>
    </>
  )
}

export default App;