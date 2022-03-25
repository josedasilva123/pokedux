/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemon } from "../../../store/reducers/CurrentPokemon";
import PokeballVector from "../../../assets/PokeballSVG.svg"
import { PokemonCardBox } from "./styles";

const PokemonListCard = ({ index, pokemon, cardStyle }) => {
  const [active, setActive] = useState(false);  
  const currentPokemon = useSelector((store) => store.currentPokemon);  
  const dispatch = useDispatch();

  useEffect(() => {
    if(currentPokemon){
        if(currentPokemon.data?.name === pokemon.name){
            setActive(true);
            console.log(pokemon.name)
        } else {
            setActive(false);
        }
    }
  }, [currentPokemon]);   

  return (
    <PokemonCardBox active={active} onClick={() => dispatch(getPokemon(pokemon.url))}>
        <img src={PokeballVector} alt="Pokeball" />
        <div>
            {cardStyle === "pokemonlist" && <span>#{index + 1}</span>}
            <h3>{pokemon.name}</h3>
        </div>
    </PokemonCardBox>
  );
};

export default PokemonListCard;
