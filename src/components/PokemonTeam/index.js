import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../store/reducers/PokemonTeam";

import { MdClose } from "react-icons/md";

import PokemonDragList from "./DragAndDrop/PokemonDragList";

import { PokemonTeamBox, TeamPowerBox } from "./styles";
import { getTeamPower } from "../../functions/getPokemonPower";
import Error from "./Error";

const PokemonTeam = () => {
  const dispatch = useDispatch();
  const { modal, list, maxPower, error } = useSelector(
    (store) => store.pokemonTeam
  );

  function handleClose() {
    dispatch(toggleModal(false));
  }

  return (
    <>
      {modal && (
        <PokemonTeamBox active={modal}>
          <header>
            <h2>Poketime</h2>
            <button onClick={handleClose}>
              <MdClose size={24} />
            </button>
          </header>
          <TeamPowerBox
            powerPercent={`${(getTeamPower(list) / maxPower) * 100}%`}
          >
            <small>Poder da equipe</small>
            <h2>
              {getTeamPower(list)}/{maxPower}
            </h2>
            <div>
              <span></span>
            </div>
          </TeamPowerBox>
          <PokemonDragList data={list} dropType="pokemon" />
          {error && <Error error={error}/>}
        </PokemonTeamBox>
      )}
    </>
  );
};

export default PokemonTeam;
