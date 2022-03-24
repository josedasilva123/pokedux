import React from "react";
import { useSelector } from "react-redux";
import PokemonTeamCard from "./PokemonTeamCard";

const PokemonTeam = () => {
  const pokemonTeam = useSelector((store) => store.pokemonTeam);

  return (
    <>
      {pokemonTeam.list?.length > 0 && (
        <ul>
          {pokemonTeam.list?.map((pokemon, index) => (
            <PokemonTeamCard key={index} index={index} pokemon={pokemon} />
          ))}
        </ul>
      )}
      {pokemonTeam.error && <p>{pokemonTeam.error}</p>}
      <button onClick={() => console.log(pokemonTeam)}>Ver lista</button>
    </>
  );
};

export default PokemonTeam;
