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

export function doPokemonMove(
  move,
  user,
  target,
  targetHP,
  setTargetHP,
  setTargetDamage,
  nextMove,
) {
  return async (dispatch, getState) => {
    const { battleChat } = getState().pokemonBattle;
    const newChat = [...battleChat];

    let attack;
    let defense;
    if (move.damage_class.name === "physical") {
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

    // Função de chamada de dano
    function doDamage(multiplier) {
      const damage = calculateDamage(
        move.power,
        multiplier,
        user.stats[attack].value,
        target.stats[defense].value
      );
      const newHP = targetHP - damage;
      // Aplica e em seguida remove estado de dano
      dispatch(setTargetHP(newHP));
      if (newHP > 0) {
        dispatch(setTargetDamage(true));
        setTimeout(() => {
          dispatch(setTargetDamage(false));
        }, 600);
        nextMove();
      }
    }

    function executeMove(multiplier, message) {
      if (multiplier !== 1) {
        newChat.push({
          text: textMove(user, move),
          callback: () => {
            doDamage(multiplier);
          },
        });
        newChat.push({
          text: message,
        });
      } else {
        newChat.push({
          text: textMove(user, move),
          callback: () => {
            doDamage(multiplier);
          },
        });
      }
    }

    const imune = isImune(move.type.name, target.types);
    if (move.damage_class.name === "status") {
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
      });
    } else {
      // É super efetivo?
      if (
        isSuperEffective(move.type.name, target.types) === "super-effective"
      ) {
        executeMove(2, "Foi super efetivo!");
      } else if (
        // Não foi muito efetivo?
        isSuperEffective(move.type.name, target.types) === "not-very-effective"
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
