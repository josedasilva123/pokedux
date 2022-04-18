import React from "react";
import DragableElement from "../DragableElement";
import { useDispatch, useSelector } from "react-redux";
import { changeTeam } from "../../../../store/reducers/PokemonTeam";
import { PokemonTeamCardBox } from "./styles";
import {MdDelete} from "react-icons/md";

const PokemonTeamCard = ({ itemData: pokemon, index, listIndex, dropType }) => {
  const dispatch = useDispatch();
  const pokemonTeam = useSelector((store) => store.pokemonTeam);

  function removePokemon() {
    const newTeam = [...pokemonTeam.list];
    if(pokemonTeam){
      newTeam.splice(index, 1);
      dispatch(changeTeam(newTeam))
    }
    ;
  }
  return (
    <DragableElement index={index} listIndex={listIndex} dropType={dropType}>
      <PokemonTeamCardBox>
        <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h3>{pokemon.name}</h3>
        </div>
        <button onClick={() => removePokemon()}>
          <MdDelete size={21} />
        </button>
      </PokemonTeamCardBox>
    </DragableElement>
  );
};

export default PokemonTeamCard;
