import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTeam, setError } from "../../store/reducers/PokemonTeam";
import { ThemeButton } from "../../styles/GlobalComponents";
import StatsBar from "./StatsBar";
import { CurrentPokemonBox, ImageGrid, StatsList } from "./styles";

const CurrentPokemon = () => {
  const dispatch = useDispatch();
  const currentPokemon = useSelector((store) => store.currentPokemon);
  const poketeam = useSelector((store) => store.pokemonTeam);

  function addPokemon() {
    const team = [...poketeam.list];
    console.log(team);
    if (team.length < 6) {
      if (!team?.find((p) => p.name === currentPokemon.data.name)) {
        const newTeam = [...team, currentPokemon.data];
        dispatch(changeTeam(newTeam));
      } else {
        dispatch(setError("Desculpe, este pokemon já está no seu time."));
      }
    } else {
      dispatch(setError("Desculpe, seu time está cheio."));
    }
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
            {currentPokemon.data.stats.map((stat) => (
              <StatsBar statValue={stat.base_stat} statName={stat.stat.name} />
            ))}
          </StatsList>
        </div>
      ) : (
        <div>
          <h1>Bem vindo ao Pokedex</h1>
        </div>
      )}
    </CurrentPokemonBox>
  );
};

export default CurrentPokemon;
