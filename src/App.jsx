// App.jsx — el FRONT (React)
import { useState } from 'react'
import { guardarAuto, listarAutos } from './api'

function App() {
  const [marca, setMarca] = useState('')
  const [autos, setAutos] = useState(listarAutos())

  const onGuardar = (e) => {
    e.preventDefault()
    if (!marca.trim()) return

    guardarAuto({ marca }) // llama a la "API"
    setAutos([...listarAutos()]) // vuelve a leer la lista completa
    setMarca('') // limpia el input
  }

  return (
    <main className="app">
      <h1>🚗 Mis autos</h1>

      <form className="form-row" onSubmit={onGuardar}>
        <label htmlFor="marca">Marca</label>
        <input
          id="marca"
          className="inp"
          type="text"
          placeholder="Toyota"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        />
        <button className="b-btn" type="submit">
          Guardar auto
        </button>
      </form>

      {autos.length === 0 ? (
        <p className="vacio">Todavía no hay autos. ¡Agrega el primero!</p>
      ) : (
        <ul className="b-list">
          {autos.map((auto, i) => (
            <li className="car" key={i}>
              <span className="ico">🚗</span> <b>{auto.marca}</b>
            </li>
          ))}
        </ul>
      )}

      <p className="nota">
        ⚠️ Estos autos viven en un array en memoria (<code>src/api.js</code>).
        Si recargas la página, se pierden. Ese es el problema que resolveremos
        con un backend de verdad.
      </p>
    </main>
  )
}

export default App
