
const initialState = {
  battle: false, // battle
  battleChat: [], // battleChat
  player: {  //player
    name: null,
    types: null,
    stats: null,
    moves: null,
  },
  playerHP: null, // playerHP
  playerDamage: false, // playerDamage
  enemy: {
    name: null,
    types: null,
    stats: null,
    moves: null,
  },
  enemyHP: null,
  enemyDamage: false,
};
/* const [battle, setBattle] = useState(initialState); 
  setBattle
*/

const SET_BATTLE = "battle/SET_BATTLE";
const SET_PLAYER = "battle/SET_PLAYER";
const SET_ENEMY = "battle/SET_ENEMY";
const SET_CHAT = "battle/SET_CHAT";
const SET_PLAYER_HP = "battle/SET_PLAYER_HP";
const SET_ENEMY_HP = "battle/SET_ENEMY_HP";
const SET_PLAYER_DAMAGE = "battle/SET_PLAYER_DAMAGE";
const SET_ENEMY_DAMAGE = "battle/SET_PLAYER_DAMAGE";
const RESET_BATTLE = "battle/RESET_BATTLE";

export const setBattle = (payload) => ({ type: SET_BATTLE, payload: payload});
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
})
export const setEnemyDamage = (payload) => ({
  type: SET_ENEMY_DAMAGE,
  payload: payload,
})
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
    case RESET_BATTLE:
      return {
        battle: false,
        battleChat: [],
        player: {
          name: null,
          types: null,
          stats: null,
          moves: null,
        },
        playerHP: null,
        enemy: {
          name: null,
          types: null,
          stats: null,
          moves: null,
        },
        enemyHP: null,
      };
    default:
      return state;
  }
};
export default reducer;
