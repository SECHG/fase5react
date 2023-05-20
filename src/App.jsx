import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <a href="inicio.html"><h1>Fase 5 Operar Grupo 301122_5</h1></a>
      <div className="card">
          <h2>Integrantes:</h2>
          <h3>Sergio Estiven Chica Gallego</h3>
          <h3>Diego Esteban Gaviria</h3>
          <h3>Luis Eduardo Escobar</h3>
          <h3>Juan David Rivera Betancur</h3>
      </div>
      <a href="inicio.html"><h3>Ir al Proyecto Final</h3></a>
    </>
  )
}

export default App
