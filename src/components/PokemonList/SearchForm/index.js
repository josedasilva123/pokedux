/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import PokemonListCard from "../PokemonListCard";

import { MdSearch } from "react-icons/md";

import { SearchFormBox } from "./styles";

const SearchForm = () => {
  const pokemonList = useSelector((store) => store.pokemonList);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    if (search.length > 2) {
      const regex = new RegExp(search);

      const filter = pokemonList.data?.filter((pokemon) =>
        pokemon.name.match(regex)
      );

      if (filter.length > 10) {
        filter.length = 10;
      }

      setSearchResults(filter);
    } else {
      setSearchResults(null);
    }
  }, [search]);

  return (
    <SearchFormBox>
      <form>
        <label>
          <input
            type="text"
            placeholder="Busque um pokémon..."
            value={search}
            onInput={(e) => setSearch(e.target.value)}
          />
          <span>
            <MdSearch size={21} />
          </span>
        </label>
      </form>
      <div>
        {searchResults?.map((result, index) => (
          <PokemonListCard
            key={`search${index}`}
            pokemon={result}
            index={index}
            onClick={() => setSearch("")}
          />
        ))}
      </div>
    </SearchFormBox>
  );
};

export default SearchForm;
