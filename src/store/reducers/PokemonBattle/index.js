import {
  isImune,
  isSuperEffective,
  calculateDamage,
} from "../../../functions/battleFuncions";

const initialState = {
  battle: false,
  battleChat: [],
  player: {
    type: "player",
    name: null,
    types: null,
    stats: null,
    moves: null,
  },
  playerHP: null,
  playerDamage: false,
  enemy: {
    type: "enemy",
    name: null,
    types: null,
    stats: null,
    moves: null,
  },
  enemyHP: null,
  enemyDamage: false,
};

const SET_BATTLE = "battle/SET_BATTLE";
const SET_PLAYER = "battle/SET_PLAYER";
const SET_ENEMY = "battle/SET_ENEMY";
const SET_CHAT = "battle/SET_CHAT";
const SET_PLAYER_HP = "battle/SET_PLAYER_HP";
const SET_ENEMY_HP = "battle/SET_ENEMY_HP";
const SET_PLAYER_DAMAGE = "battle/SET_PLAYER_DAMAGE";
const SET_ENEMY_DAMAGE = "battle/SET_ENEMY_DAMAGE";
const RESET_BATTLE = "battle/RESET_BATTLE";

export const setBattle = (payload) => ({ type: SET_BATTLE, payload: payload });
export const setPlayer = (payload) => ({ type: SET_PLAYER, payload: payload });
export const setEnemy = (payload) => ({ type: SET_ENEMY, payload: payload });
export const setChat = (payload) => ({ type: SET_CHAT, payload: payload });
export const setPlayerHP = (payload) => ({
  type: SET_PLAYER_HP,
  payload: payload,
});
export const setEnemyHP = (payload) => ({
  type: SET_ENEMY_HP,
  payload: payload,
});
export const setPlayerDamage = (payload) => ({
  type: SET_PLAYER_DAMAGE,
  payload: payload,
});
export const setEnemyDamage = (payload) => ({
  type: SET_ENEMY_DAMAGE,
  payload: payload,
});
export const resetBattle = () => ({ type: RESET_BATTLE });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BATTLE:
      return { ...state, battle: action.payload };
    case SET_PLAYER:
      const newPlayer = { ...state.player };
      newPlayer.name = action.payload.name;
      newPlayer.types = action.payload.types;
      newPlayer.stats = action.payload.stats;
      newPlayer.moves = action.payload.moves;
      return { ...state, player: newPlayer };
    case SET_ENEMY:
      const newEnemy = { ...state.enemy };
      newEnemy.name = action.payload.name;
      newEnemy.types = action.payload.types;
      newEnemy.stats = action.payload.stats;
      newEnemy.moves = action.payload.moves;
      return { ...state, enemy: newEnemy };
    case SET_CHAT:
      return { ...state, battleChat: action.payload };
    case SET_PLAYER_HP:
      return { ...state, playerHP: action.payload };
    case SET_ENEMY_HP:
      return { ...state, enemyHP: action.payload };
    case SET_PLAYER_DAMAGE:
      return { ...state, playerDamage: action.payload };
    case SET_ENEMY_DAMAGE:
      return { ...state, enemyDamage: action.payload };
    case RESET_BATTLE:
      return {
        battle: false,
        battleChat: [],
        player: {
          type: "player",
          name: null,
          types: null,
          stats: null,
          moves: null,
        },
        playerHP: null,
        playerDamage: false,
        enemy: {
          type: "enemy",
          name: null,
          types: null,
          stats: null,
          moves: null,
        },
        enemyHP: null,
        enemyDamage: false,
      };
    default:
      return state;
  }
};

// THUNKS

export function runFromBattle() {
  return async (dispatch, getState) => {
    dispatch(
      setChat([
        {
          text: "Você fugiu em segurança...",
          callback: () => dispatch(resetBattle()),
        },
      ])
    );
  };
}

//Reinicia o ciclo de vida da aplicação
export function doNextPokemonMove(move, userType) {
  return async (dispatch, getState) => {
    const { player, playerHP, enemy, enemyHP } = getState().pokemonBattle;

    if (userType === "player" && enemyHP > 0) {
      dispatch(
        doPokemonMove(
          move,
          enemy,
          enemyHP,
          setEnemyHP,
          player,
          playerHP,
          setPlayerHP,
          setPlayerDamage,
          false,
          "enemy"
        )
      );
    } else if (userType === "enemy" && playerHP > 0) {
      dispatch(
        doPokemonMove(
          move,
          player,
          playerHP,
          setPlayerHP,
          enemy,
          enemyHP,
          setEnemyHP,
          setEnemyDamage,
          false,
          "player"
        )
      );
    }
  };
}

export function doPokemonMove(
  move,
  user,
  userHP,
  setUserHP,
  target,
  targetHP,
  setTargetHP,
  setTargetDamage,
  nextMove,
  userType
) {
  return async (dispatch, getState) => {
    const { battleChat } = getState().pokemonBattle;
    const newChat = [...battleChat];

    let attack;
    let defense;
    if (move.category === "physical") {
      attack = 1;
      defense = 2;
    } else {
      attack = 3;
      defense = 4;
    }

    // Função para textos dos movimentos
    function textMove(pokemon, move) {
      return `${pokemon.name.toUpperCase()} utilizou ${move.name.toUpperCase()}`;
    }

    //Função de mecânica de flinch
    function flinch() {
      const dice = Math.random() * 100;
      if (move.chance === "flinch" && Math.round(dice) <= 20) {
        return true;
      } else {
        return false;
      }
    }

    // Função de chamada de dano
    function doDamage(multiplier, getState) {
      const { player, playerHP, enemy, enemyHP } = getState().pokemonBattle;

      const damage = calculateDamage(
        move.power,
        multiplier,
        user.stats[attack].value,
        target.stats[defense].value
      );

      let currentUser;
      let currentUserHP
      let currentTargetHP;
      let setCurrentUserHP;

      if (userType === "player") {
        currentUser = player;
        currentUserHP = playerHP;
        currentTargetHP = enemyHP;
        setCurrentUserHP = setPlayerHP;
      } else if (userType === "enemy") {
        currentUser = enemy;
        currentUserHP = enemyHP;
        currentTargetHP = playerHP;
        setCurrentUserHP = setEnemyHP;
      }

      // Efeito de drain
      if(move.effect === "drain"){
        const newUserHP = Math.round(currentUserHP + (damage/2));  
        
        if(newUserHP > currentUser.stats[0].value){
          dispatch(setCurrentUserHP(currentUser.stats[0].value));
        } else {
          dispatch(setCurrentUserHP(newUserHP));
        }
      }

      // Efeito de recoil
      if(move.effect === "recoil"){
        const newUserHP = Math.round(currentUserHP - (damage/4));  
        
        if(newUserHP < 1){
          dispatch(setCurrentUserHP(1));
        } else {
          dispatch(setCurrentUserHP(newUserHP));
        }
      }

      const newHP = currentTargetHP - damage; 
      // Aplica e em seguida remove estado de dano
      dispatch(setTargetHP(newHP));

      if (newHP > 0) {
        dispatch(setTargetDamage(true));
        setTimeout(() => {
          dispatch(setTargetDamage(false));
        }, 600);

        if (nextMove) {
          if (flinch()) {
            newChat.push({
              text: "O movimento ACOVARDOU o alvo",
            });
          } else {
            dispatch(doNextPokemonMove(nextMove, userType));
          }
        }
      }
    }

    //Executar cura
    function doHeal(power) {
      const healedHP = userHP + user.stats[0].value * (power / 100);

      if (healedHP > user.stats[0].value) {
        dispatch(setUserHP(user.stats[0].value));
      } else {
        dispatch(setUserHP(healedHP));
      }

      if (nextMove) {
        dispatch(doNextPokemonMove(nextMove, userType));
      }
    }

    //Moves de cura
    function executeHealMove() {
      newChat.push({
        text: textMove(user, move),
        callback: () => {
          doHeal(move.power);
        },
      });

      if (userHP === user.stats[0].value) {
        newChat.push({
          text: "A vida do pokémon já está no máximo",
        });
      } else {
        newChat.push({
          text: `${user.name.toUpperCase()} foi curado...`,
        });
      }
    }

    //Drain chat para função executeMove
    function effectChat(effect){
      const { player, playerHP, enemy, enemyHP } = getState().pokemonBattle;

      let currentUser;
      let currentUserHP;

      if (userType === "player") {
        currentUser = player;
        currentUserHP = playerHP;
      } else if (userType === "enemy") {
        currentUser = enemy;
        currentUserHP = enemyHP;
      }
      
      if(effect === "drain"){
        if(currentUserHP !== currentUser.stats[0].value){
          newChat.push({
            text: `${user.name.toUpperCase()} foi curado...`,
          });
        } else {
          newChat.push({
            text: `${user.name.toUpperCase()} já está com a vida cheia`,
          });
        }
      }

      if(effect === "recoil"){
        newChat.push({
          text: `${user.name.toUpperCase()} também sofreu dano...`,
        }); 
      }
    }

    //Moves de dano
    function executeMove(multiplier, message) {
      const dice = Math.random() * 100;
      if (Math.round(dice) < move.accuracy || !move.accuracy) {
        if (multiplier !== 1) {
          newChat.push({
            text: textMove(user, move),
            callback: () => {
              doDamage(multiplier, getState);
            },
          });
          newChat.push({
            text: message,
          });
        } else {
          newChat.push({
            text: textMove(user, move),
            callback: () => {
              doDamage(multiplier, getState);
            },
          });
        }
        if(move.effect){
          effectChat(move.effect);
        }
      } else {
        newChat.push({
          text: textMove(user, move),
        });

        newChat.push({
          text: `${user.name.toUpperCase()} errou o movimento...`,
          callback: () => {
            if (nextMove) {
              dispatch(doNextPokemonMove(nextMove, userType));
            }
          },
        });       
      }
    }

    const imune = isImune(move.type, target.types);

    if (move.effect === "heal") {
      executeHealMove();
    } else if (move.category === "status") {
      newChat.push({
        text: textMove(user, move),
      });
      newChat.push({
        text: "Mas este movimento não foi programado ainda :(",
      });
    } else if (imune) {
      newChat.push({
        text: textMove(user, move),
      });
      newChat.push({
        text: "Ops! O alvo é imune a este movimento...",
        callback: () => {
          if (nextMove) {
            dispatch(doNextPokemonMove(nextMove, userType));
          }
        },
      });
    } else {
      // É super efetivo?
      if (isSuperEffective(move.type, target.types) === "super-effective") {
        executeMove(2, "Foi super efetivo!");
      } else if (
        // Não foi muito efetivo?
        isSuperEffective(move.type, target.types) === "not-very-effective"
      ) {
        executeMove(0.5, "Não foi muito efetivo!");
      } else {
        executeMove(1);
      }
    }

    dispatch(setChat(newChat));
  };
}

export default reducer;
