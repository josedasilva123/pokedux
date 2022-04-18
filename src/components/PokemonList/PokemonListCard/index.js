/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import PokeballVector from "../../../assets/PokeballSVG.svg";

import { PokemonCardBox } from "./styles";

const PokemonListCard = ({ index, pokemon, cardStyle, onClick}) => {
  const [active, setActive] = useState(false);
  const [counter, setCounter] = useState(0);

  const currentPokemon = useSelector((store) => store.currentPokemon);

  function handleClick(){  
    if(window.innerWidth < 901){
      window.scrollTo(0,0);
    }
    onClick();
  }

  useEffect(() => {
    if (currentPokemon) {
      if (currentPokemon.data?.name === pokemon.name) {
        setActive(true);
        console.log(pokemon.name);
      } else {
        setActive(false);
      }
    }
  }, [currentPokemon]);

  return (
    <Link to={`/${pokemon.name}`}>
      <PokemonCardBox active={active} onClick={handleClick}>
        <img src={PokeballVector} alt="Pokeball" />
        <div>
          {cardStyle === "pokemonlist" && <span>#{index + 1}</span>}
          <h3>{pokemon.name}</h3>
        </div>
      </PokemonCardBox>
    </Link>
  );
};

export default PokemonListCard;
