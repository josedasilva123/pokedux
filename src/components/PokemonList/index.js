import React from "react";
import { useSelector } from "react-redux";
import PokemonListCard from "./PokemonListCard";
import { PokemonListBox } from "./styles";

const PokemonList = () => {
  const pokemonList = useSelector((store) => store.pokemonList);

  return (
    <PokemonListBox>
      {pokemonList?.data && (
        <ul>
          {pokemonList.data.map((pokemon, index) => (
            <PokemonListCard key={pokemon.name} index={index} pokemon={pokemon} cardStyle="pokemonlist" />
          ))}
        </ul>
      )}
    </PokemonListBox>
  );
};

export default PokemonList;
