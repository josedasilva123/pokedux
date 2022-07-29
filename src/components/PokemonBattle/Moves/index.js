/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allMoves, pokemonMoves } from "../../../functions/pokemonMoves/data";
import {
  setChat,
  setPlayerHP,
  setEnemyHP,
  setEnemyDamage,
  setPlayerDamage,
} from "../../../store/reducers/PokemonBattle";
import { doPokemonMove } from "../../../store/reducers/PokemonBattle";
import { MoveButton } from "./styles";

const Moves = ({ move }) => {
  const dispatch = useDispatch();
  const { player, enemy, playerHP, enemyHP } = useSelector(
    (store) => store.pokemonBattle
  );

  const [currentPP, setCurrentPP] = useState(0);
  const [maxPP, setMaxPP] = useState(0);
  const [currentMove, setCurrentMove] = useState(null);

  useEffect(() => {
    const findMove = allMoves.find((m) => m.name === move);

    setCurrentMove(findMove);
    setCurrentPP(findMove.pp);
    setMaxPP(findMove.pp);
  }, [move]);

  async function handleClick() {
    // Dado de 4 (Retorna de 0 à 3)
    const dice = Math.round(Math.random() * 3);

    const playerSpeed = player.stats[5].value;
    const enemySpeed = enemy.stats[5].value;

    // Sorteia o move inimigo de forma aleatória
    const currentEnemyMoves = pokemonMoves.find(
      (pokemon) => pokemon.name === enemy.name
    ).mainMoves;
    
    const enemyMove = currentEnemyMoves[dice];
    const currentEnemyMove = allMoves.find(m => m.name === enemyMove);

    if (currentPP > 0) {
      const newPP = currentPP - 1;
      setCurrentPP(newPP);
    }

    if (playerSpeed > enemySpeed) {
      dispatch(
        doPokemonMove(
          currentMove,
          player,
          playerHP,
          setPlayerHP,         
          enemy,
          enemyHP,
          setEnemyHP,
          setEnemyDamage,
          currentEnemyMove,
          "player"
        )
      );
    } else {
      dispatch(
        doPokemonMove(
          currentEnemyMove,
          enemy,
          enemyHP,
          setEnemyHP,        
          player,
          playerHP,
          setPlayerHP,
          setPlayerDamage,
          currentMove,
          "enemy"
        )
      );
    }
  }

  return (
    <>
      {currentMove && (
        <MoveButton onClick={handleClick}>
          <span>
            PP: {currentPP}/{maxPP}
          </span>
          <h3>{currentMove.name}</h3>
          <small>{currentMove.type}</small>
        </MoveButton>
      )}
    </>
  );
};

export default Moves;
