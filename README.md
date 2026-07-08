# 🚗 autos-app — el proyecto del fin de semana de Camila

Este es el **proyecto del fin de semana de Camila** (Capítulo 1 de CampusHub).

Es un **monorepo** con React (Vite) y una **"API" falsa en memoria**: no hay
servidor ni base de datos, solo un array de JavaScript (`src/api.js`) que el
front consume directamente.

Es el **PUNTO DE PARTIDA del curso**. Está hecho de la forma más ingenua a
propósito: funciona, pero tiene un problema enorme que descubrirás en cuanto lo
pruebes. Aquí es donde entenderás **por qué necesitamos un backend de verdad**.

## ¿Qué hace?

- Un formulario para agregar un auto (su **marca**).
- Una lista que muestra los autos guardados.
- Todo se guarda llamando a `guardarAuto()` y se lee con `listarAutos()`,
  las dos funciones que exporta `src/api.js`.

## El problema (spoiler del curso)

El array `const autos = []` de `src/api.js` vive en la **memoria RAM** del
navegador. Pruébalo: agrega varios autos y luego **recarga la página**.

💥 Se borran todos.

No hay persistencia. No hay servidor. No hay base de datos. Eso es
exactamente lo que aprenderemos a construir de verdad más adelante.

## Cómo correrlo

```bash
npm install
npm run dev
```

Luego abre el navegador en **http://localhost:5173**.

## Scripts

| Comando           | Qué hace                                  |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Levanta el servidor de desarrollo (Vite). |
| `npm run build`   | Genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve el build ya generado.               |

## Estructura

```
autos-app/
├── index.html          # HTML raíz, monta la app
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx        # Punto de entrada: monta <App /> en #root
    ├── App.jsx         # El FRONT: formulario + lista (usa useState)
    ├── api.js          # La "API" FALSA en memoria (const autos = [])
    └── estilos.css     # Estilos simples
```
