import React from "react";

import DragableElement from "../DragableElement";

import { useDispatch } from "react-redux";
import { removePokemon } from "../../../../store/reducers/PokemonTeam";

import { PokemonTeamCardBox } from "./styles";
import {MdDelete} from "react-icons/md";

const PokemonTeamCard = ({ itemData: pokemon, index, listIndex, dropType }) => {
  const dispatch = useDispatch();
  return (
    <DragableElement index={index} listIndex={listIndex} dropType={dropType}>
      <PokemonTeamCardBox>
        <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h3>{pokemon.name}</h3>
        </div>
        <button onClick={() => dispatch(removePokemon(index))}>
          <MdDelete size={21} />
        </button>
      </PokemonTeamCardBox>
    </DragableElement>
  );
};

export default PokemonTeamCard;
