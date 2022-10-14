/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../store/reducers/CurrentPokemon";
import { setBattle } from "../../store/reducers/PokemonBattle";
import StatsBar from "./StatsBar";

import { useParams } from "react-router-dom";

import { getPowerLevel, getTierRank } from "../../functions/getPokemonPower";

import { ThemeButton } from "../../styles/GlobalComponents";
import { CurrentPokemonBox, ImageGrid, PowerLevel, StatsList } from "./styles";
import { addPokemon } from '../../store/reducers/PokemonTeam/index'

const CurrentPokemon = () => {
  const { id } = useParams();

  const dispatch = useDispatch();  
  const currentPokemon = useSelector((store) => store.currentPokemon);
  const { list } = useSelector((store) => store.pokemonTeam);

  useEffect(() => {
    if (id) {
      dispatch(getPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`));
    }
  }, [id]);

  return (
    <CurrentPokemonBox>
      {currentPokemon?.data ? (
        <div>
          <header>
            <h1>
              {currentPokemon.data.name}
              <span>N°{currentPokemon.data.id}</span>
            </h1>
            <div>
              {list.length > 0 ? (
                <ThemeButton
                  buttonStyle="outline1"
                  onClick={() => dispatch(setBattle(true))}
                >
                  Desafiar
                </ThemeButton>
              ) : (
                <ThemeButton buttonStyle="outline1" disabled={true}>
                  Desafiar
                </ThemeButton>
              )}
              <ThemeButton
                buttonSize
                buttonStyle="solid1"
                onClick={() => dispatch(addPokemon(currentPokemon))}
              >
                Adicionar ao time
              </ThemeButton>
            </div>
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
            {currentPokemon.data.stats.map((stat, index) => (
              <StatsBar
                key={index}
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
