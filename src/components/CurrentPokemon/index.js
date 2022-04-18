/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../store/reducers/CurrentPokemon";
import {
  toggleModal,
  changeTeam,
} from "../../store/reducers/PokemonTeam";

import StatsBar from "./StatsBar";

import { useParams } from "react-router-dom";

import { getPowerLevel, getTierRank } from "../../functions/getPokemonPower";

import { ThemeButton } from "../../styles/GlobalComponents";
import { CurrentPokemonBox, ImageGrid, PowerLevel, StatsList } from "./styles";
import { getTeamPower } from "../../functions/getPokemonPower";

import { setGlobalError } from "../../store/functions/setError";

const CurrentPokemon = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentPokemon = useSelector((store) => store.currentPokemon);
  const {list, maxPower, error} = useSelector((store) => store.pokemonTeam);

  useEffect(() => {
    if (id) {
      dispatch(getPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`));
    }
  }, [id]);

  function addPokemon() {
    const team = [...list];
    if (team.length < 6) {
      if (!team?.find((p) => p.name === currentPokemon.data.name)) {
        const newTeam = [...team, currentPokemon.data];
        const newTeamPower = getTeamPower(newTeam);
        if(maxPower > newTeamPower){
          dispatch(changeTeam(newTeam));          
        } else {
          setGlobalError(error, dispatch, "Desculpe, seu time está poderoso demais");
        }      
      } else {
        setGlobalError(error, dispatch, "Desculpe, este pokemon já está no seu time.");
      }
    } else {
      setGlobalError(error, dispatch, "Desculpe, seu time está cheio.");      
    }
    dispatch(toggleModal(true));  
  }

  return (
    <CurrentPokemonBox>
      {currentPokemon?.data ? (
        <div>
          <header>
            <h1>
              {currentPokemon.data.name}
              <span>N°{currentPokemon.data.id}</span>
            </h1>
            <ThemeButton
              buttonSize
              buttonStyle="solid1"
              onClick={() => addPokemon()}
            >
              Adicionar ao time
            </ThemeButton>
          </header>
          <ImageGrid>
            <img
              src={currentPokemon.data.sprites.front_default}
              alt={currentPokemon.data.name}
            />
          </ImageGrid>
          <StatsList>
            <PowerLevel>
              <small>Poder total:</small>
              <p>{getPowerLevel(currentPokemon.data.stats)}</p>
              <span>
                {getTierRank(getPowerLevel(currentPokemon.data.stats))}
              </span>
            </PowerLevel>
            {currentPokemon.data.stats.map((stat) => (
              <StatsBar
                key={stat.name}
                statValue={stat.base_stat}
                statName={stat.stat.name}
              />
            ))}
          </StatsList>
        </div>
      ) : (
        <div>
          {currentPokemon?.loading ? (
            <span>Carregando...</span>
          ) : (
            <h1>Bem vindo ao Pokedex</h1>
          )}
        </div>
      )}
    </CurrentPokemonBox>
  );
};

export default CurrentPokemon;
