import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const PokemonTeam = () => {
  const pokemonTeam = useSelector((store) => store.pokemonTeam); 

  return (
    <>
        <button onClick={() => console.log(pokemonTeam)}>Ver lista</button>
    </>
  )
}

export default PokemonTeam