/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { getBattleStats } from '../../functions/getPokemonPower';
import Moves from './Moves';

const PokemonBattle = () => {   
  
  const currentPokemon = useSelector((store) => store.currentPokemon);
  const {list} = useSelector((store) =>  store.pokemonTeam);

  const [battle, setBattle] = useState(false);  
  const [playerStats, setPlayerStats] = useState([]);
  const [playerMoves, setPlayerMoves] = useState();
  const [enemyStats, setEnemyStats] = useState([]);
  const [enemyMoves, setEnemyMoves] = useState();
 

  useEffect(() => {
    if(battle){
        // Player's Pokemon 
        const newPlayerStats = getBattleStats(list[0].stats, 31, 50);
        const newPlayerMoves = list[0].moves;
        newPlayerMoves.length = 4;

        // Enemy's Pokemon
        const newEnemyStats = getBattleStats(currentPokemon.data.stats, 31, 50);
        const newEnemyMoves = currentPokemon.data.moves;
        newEnemyMoves.length = 4;
        
        setBattle(true);

        setPlayerStats(newPlayerStats);
        setPlayerMoves(newPlayerMoves);
        setEnemyStats(newEnemyStats);
        setEnemyMoves(newEnemyMoves);
    }
  }, [battle])

  return (
    <>
        {battle ? (
            <div>
                <img src={list[0].sprites.back_default} alt="Enemy Sprite" />
                {playerMoves?.map((move) => (
                  <Moves move={move.move} key={move.move.name} />
                ))}
                <button onClick={() => console.log(playerStats, playerMoves)}>Player Status</button>
                <img src={currentPokemon.data.sprites.front_default} alt="Enemy Sprite" />
                <button onClick={() => console.log(enemyStats, enemyMoves)}>Enemy Status</button>
                
            </div>
        ) : (
            <button onClick={() => setBattle(true)}>Start Battle</button>
        )}
    </>
  )
}

export default PokemonBattle