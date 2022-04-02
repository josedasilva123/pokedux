import React from 'react'
import DragableElement from '../DragableElement'
import { useDispatch, useSelector } from 'react-redux';
import { changeTeam } from '../../../../store/reducers/PokemonTeam';

const PokemonTeamCard = ({itemData: pokemon, index, listIndex, dropType}) => {
  const dispatch = useDispatch();
  const pokemonTeam = useSelector((store) => store.pokemonTeam);    

  function removePokemon(){
      const newTeam = [...pokemonTeam.list];
      newTeam.splice(index, 1);
      dispatch(changeTeam(newTeam));
  }
  return (
    <DragableElement index={index} listIndex={listIndex} dropType={dropType}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <button onClick={() => removePokemon()}>Remover</button>
    </DragableElement>
  )
}

export default PokemonTeamCard