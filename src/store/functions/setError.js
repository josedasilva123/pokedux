import { setError } from "../reducers/PokemonTeam";

export const setGlobalError = (error, dispatch, value) => {
  if (!error) {
    dispatch(setError(value));
    setTimeout(() => { 
        dispatch(setError(null));
    }, 3000);
  } 
};