// api.js — el "BACK" del finde de Camila (Capítulo 1)
//
// ⚠️ OJO: esto NO es una API de verdad. Es una "API" FALSA en memoria.
// No hay servidor, no hay base de datos. Es solo un array de JavaScript que
// vive dentro del MISMO proyecto del front (un monorepo ingenuo).
//
// Como los datos viven en la memoria RAM del proceso, se PIERDEN al recargar
// la página (o al "bajar el servidor" con Ctrl+C). Este es exactamente el
// problema que nos va a empujar, más adelante en el curso, a construir un
// backend de verdad con base de datos.

const autos = [] // ⚠️ un array en memoria (se borra al recargar)

export function guardarAuto(auto) {
  autos.push(auto) // mete el objeto al arreglo
  return auto
}

export function listarAutos() {
  return autos
}
