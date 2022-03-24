import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTeam } from '../../../store/reducers/PokemonTeam';

const PokemonTeamCard = ({index, pokemon}) => {
  const pokemonTeam = useSelector((store) => store.pokemonTeam);  
  const dispatch = useDispatch();

  function removePokemon(){
      const newTeam = [...pokemonTeam.list];
      newTeam.splice(index, 1);
      dispatch(changeTeam(newTeam));
  }

  return (
    <li>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h3>{pokemon.name}</h3>
        <button onClick={() => removePokemon()}>Remover do time</button>
    </li>
  )
}

export default PokemonTeamCard