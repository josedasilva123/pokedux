/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setChat, setPlayerHP, setEnemyHP, setEnemyDamage, setPlayerDamage } from "../../../store/reducers/PokemonBattle";
import { doPokemonMove } from "../../../store/reducers/PokemonBattle";
import { MoveButton } from "./styles";

const Moves = ({ move }) => {
  const dispatch = useDispatch();
  const { player, enemy, playerHP, enemyHP } = useSelector(
    (store) => store.pokemonBattle
  );

  const [loading, setLoading] = useState();
  const [currentPP, setCurrentPP] = useState(0);
  const [maxPP, setMaxPP] = useState(0);
  const [currentMove, setCurrentMove] = useState(null);

  useEffect(() => {
    async function getMove() {
      try {
        setLoading(true);
        const response = await fetch(move.url);
        const json = await response.json();
        setCurrentMove(json);
        setCurrentPP(json.pp);
        setMaxPP(json.pp);
      } catch (error) {
        setCurrentMove(null);
        setCurrentPP(0);
        setMaxPP(0);
      } finally {
        setLoading(false);
      }
    }
    if (!currentMove) {
      getMove();
    }
  }, [move]);

  async function handleClick() {
    // Dado de 4 (Retorna de 0 à 3) 
    const dice = Math.round(Math.random() * 3);

    const playerSpeed = player.stats[5].value;
    const enemySpeed = enemy.stats[5].value;
    // Sorteia o move inimigo de forma aleatória 
    const enemyMove = enemy.moves[dice];

    if (currentPP > 0) {
      const newPP = currentPP - 1;
      setCurrentPP(newPP);
    }

    try {
      // Requisita a lista completa de informações do move inimigo */
      const response = await fetch(enemyMove.move.url);
      
      const currentEnemyMove = await response.json();
      console.log(currentEnemyMove);
      /* Avalia qual pokémon é mais rapido para definir o primeiro ataque */
      if (playerSpeed > enemySpeed) {
        dispatch(doPokemonMove(currentMove, player, enemy, enemyHP, setEnemyHP, setEnemyDamage, () => {
          dispatch(doPokemonMove(currentEnemyMove, enemy, player, playerHP, setPlayerHP, setPlayerDamage)); 
        })); 
        
      } else {
        dispatch(doPokemonMove(currentEnemyMove, enemy, player, playerHP, setPlayerHP, setEnemyDamage, () => {
          dispatch(doPokemonMove(currentMove, player, enemy, enemyHP, setEnemyHP, setPlayerDamage));  
        }));
                
      }
    } catch (error) {
      console.log("Desculpe, ocorreu um erro! :(");
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
          <small>{currentMove.type.name}</small>
        </MoveButton>
      )}
    </>
  );
};

export default Moves;
