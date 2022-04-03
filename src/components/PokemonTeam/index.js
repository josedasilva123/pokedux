import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../store/reducers/PokemonTeam";

import PokemonDragList from "./DragAndDrop/PokemonDragList";

import { PokemonTeamBox } from "./style";

const PokemonTeam = () => {
  const dispatch = useDispatch();
  const { modal, list, error } = useSelector((store) => store.pokemonTeam);

  function handleClose() {
    dispatch(toggleModal(false));
  }

  return (
    <>
      {modal && (
        <PokemonTeamBox>
          <button onClick={handleClose}>Fechar</button>
          <PokemonDragList data={list} dropType="pokemon" />
          {error && <p>{error}</p>}
        </PokemonTeamBox>
      )}
    </>
  );
};

export default PokemonTeam;
