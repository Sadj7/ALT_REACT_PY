import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetchPokemons()
  }, [])

  const fetchPokemons = async () => {
    const response = await fetch("http://127.0.0.1:5000/pokemons")
    const data = await response.json()
    setPokemons(data.pokemons)
    console.log(data.pokemons)
  }

  return (
    <>

    </>
  )
}

export default App
