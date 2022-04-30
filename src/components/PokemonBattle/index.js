/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  setPlayer,
  setEnemy,
  setPlayerHP,
  setEnemyHP,
  setChat,
  resetBattle,
  runFromBattle,
} from "../../store/reducers/PokemonBattle";
import { getBattleStats } from "../../functions/getPokemonPower";

import BattleChat from "./BattleChat";
import Moves from "./Moves";
import HPBox from "./HPBox";

import { Battle, BattleGrid, BattleBox, MoveListBox, Sprite } from "./styles";

const PokemonBattle = () => {
  const [starting, setStarting] = useState(false);

  const dispatch = useDispatch();
  const currentPokemon = useSelector((store) => store.currentPokemon);
  const {
    battle,
    battleChat,
    player,
    enemy,
    playerHP,
    enemyHP,
    playerDamage,
    enemyDamage,
  } = useSelector((store) => store.pokemonBattle);
  const { list } = useSelector((store) => store.pokemonTeam);

  // Efeito que inicia e reinicia a batalha
  useEffect(() => {
    if (battle) {
      setStarting(true);
      setTimeout(() => {
        setStarting(false);
      }, 800);
      // Player's Pokemon
      const newPlayerStats = getBattleStats(list[0].stats, 31, 50);
      const newPlayerMoves = [...list[0].moves];
      newPlayerMoves.length = 4;

      // Enemy's Pokemon
      const newEnemyStats = getBattleStats(currentPokemon.data.stats, 31, 50);
      const newEnemyMoves = currentPokemon.data.moves;
      newEnemyMoves.length = 4;

      //Max HP
      const maxPlayerHP = newPlayerStats[0].value;
      const maxEnemyHP = newEnemyStats[0].value;
      dispatch(setPlayerHP(maxPlayerHP));
      dispatch(setEnemyHP(maxEnemyHP));

      //Set o pokémon do jogador com base no primeiro Pokémon do time
      dispatch(
        setPlayer({
          name: list[0].name,
          types: list[0].types,
          stats: newPlayerStats,
          moves: newPlayerMoves,
        })
      );

      //Set o pokémon inimigo
      dispatch(
        setEnemy({
          name: currentPokemon.data.name,
          types: currentPokemon.data.types,
          stats: newEnemyStats,
          moves: newEnemyMoves,
        })
      );
    }
  }, [battle]);

  // Efeito que monitora a vida dos pokémon para declarar a vitória
  useEffect(() => {
    if (battle) {
      if (enemyHP <= 0) {
        dispatch(
          setChat([
            ...battleChat,
            {
              text: `${enemy.name.toUpperCase()} foi derrotado...`,
            },
            {
              text: "Parabéns, você venceu!!!",
              callback: () => dispatch(resetBattle()),
            },
          ])
        );
      } else if (playerHP <= 0) {
        dispatch(
          setChat([
            ...battleChat,
            {
              text: `${player.name.toUpperCase()} foi derrotado...`,
            },
            {
              text: "Que pena, você perdeu...",
              callback: () => dispatch(resetBattle()),
            },
          ])
        );
      }
    }
  }, [playerHP, enemyHP]);

  return (
    <>
      {battle && (
        <Battle>
          <div className="overlay">
            <BattleGrid>
              <BattleBox>
                <div>
                  <Sprite
                    starting={starting}
                    inDamage={enemyDamage}
                    owner="enemy"
                    src={currentPokemon.data.sprites.front_default}
                    alt="Enemy Sprite"
                    fainted={enemyHP > 0 ? false : true}
                  />

                  <HPBox
                    currentHP={enemyHP ? enemyHP : 0}
                    maxHP={enemy?.stats ? enemy?.stats[0].value : 0}
                  />
                </div>
                <div>
                  <Sprite
                    starting={starting}
                    inDamage={playerDamage}
                    owner="player"
                    src={list[0]?.sprites.back_default}
                    alt="Player Sprite"
                    fainted={playerHP > 0 ? false : true}
                  />

                  <HPBox
                    currentHP={playerHP ? playerHP : 0}
                    maxHP={player?.stats ? player?.stats[0].value : 0}
                  />
                </div>
              </BattleBox>
              {battleChat?.length > 0 && <BattleChat />}
              {!starting && (
                <MoveListBox hidden={battleChat?.length > 0 ? true : false}>
                  {player.moves?.map((move) => (
                    <Moves move={move.move} key={move.move.name} />
                  ))}
                  <button onClick={() => dispatch(runFromBattle())}>
                    Fugir
                  </button>
                </MoveListBox>
              )}
            </BattleGrid>
            )
          </div>
        </Battle>
      )}
    </>
  );
};

export default PokemonBattle;
