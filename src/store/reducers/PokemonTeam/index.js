import getLocalStorage from "../../../functions/getLocalStorage";
import { getTeamPower } from "../../../functions/getPokemonPower";
import { setGlobalError } from "../../functions/setError";

const initialState = {
  modal: false,
  list: getLocalStorage("POKE_TEAM", []),
  maxPower: 2800,
  error: null,
};

const CHANGE_TEAM = "pokelist/CHANGE_TEAM";
const SET_ERROR = "pokelist/SET_ERROR";
const TOGGLE_MODAL = "pokelist/TOGGLE_MODAL";

export const toggleModal = (payload) => ({
  type: TOGGLE_MODAL,
  payload: payload,
});

export const changeTeam = (payload) => ({
  type: CHANGE_TEAM,
  payload: payload,
  meta: "POKE_TEAM",
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload: payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEAM:
      return { ...state, list: action.payload, error: null };
    case TOGGLE_MODAL:
      return { ...state, modal: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

/* Adicionar pokémon ao time */
export function addPokemon(currentPokemon) {
  return async (dispatch, getState) => {    
    const state = getState().pokemonTeam;    
    const team = [...state.list];

    /* Caso a equipe não estiver cheia */
    if (team.length < 6) {

      /* Caso o pokémon ainda não esteja no time */
      if (!team?.find((p) => p.name === currentPokemon.data.name)) {
        const newTeam = [...team, currentPokemon.data];
        const newTeamPower = getTeamPower(newTeam);
        
        /* Caso o poder máximo não seja excedido */
        if (state.maxPower > newTeamPower) {
          dispatch(changeTeam(newTeam));
        } else {
          setGlobalError(state.error, dispatch, "Desculpe, seu time está poderoso demais");
        }
      } else {
        setGlobalError(state.error, dispatch, "Desculpe, este pokemon já está no seu time.");
      }
    } else {
      setGlobalError(state.error, dispatch, "Desculpe, seu time está cheio.");
    }
    dispatch(toggleModal(true));
  };
}

/* Remover pokémon */
export function removePokemon(index){
  return async (dispatch, getState) => {
    const state = getState().pokemonTeam;  
    const newTeam = [...state.list];
    if(state){
      newTeam.splice(index, 1);
      dispatch(changeTeam(newTeam));
    }
  }
}

export default reducer;
