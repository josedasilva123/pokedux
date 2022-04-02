import React from "react";
import { useSelector } from "react-redux";
import PokemonDragList from "./DragAndDrop/PokemonDragList";

const PokemonTeam = () => {
  const pokemonTeam = useSelector((store) => store.pokemonTeam);
  
  return (
    <>
      <PokemonDragList data={pokemonTeam.list} dropType="pokemon" />
      {pokemonTeam.error && <p>{pokemonTeam.error}</p>}
    </>
    
  );
};

export default PokemonTeam;
