const initialState = {
    loading: false,
    data: null,
    error: null,
}

const FETCH_STARTED = 'currentpokemon/FETCH_STARDED';
const FETCH_SUCESS = 'currentpokemon/FETCH_SUCESS';
const FETCH_ERROR = 'currentpokemon/FETCH_ERROR';
const RESET_POKEMON = 'currentpokemon/RESET_POKEMON';

const fetchStarted = () => ({type: FETCH_STARTED});
const fetchSucess = (payload) => ({type: FETCH_SUCESS, payload: payload});
const fetchError = (payload) => ({type: FETCH_STARTED, payload: payload});
export const resetCurrentPokemon = () => ({type: RESET_POKEMON});

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_STARTED:
            return {...state, loading: true, data: null, error: null};
        case FETCH_SUCESS:
            return {...state, loading: false, data: action.payload};
        case FETCH_ERROR:
            return {...state, loading: false, data: null, error: action.payload};
        case RESET_POKEMON:
            return {...state, loading: false, data: null, error: null}        
        default:
            return state;
    }
} 


export function getPokemon(url){
    return async (dispatch, getState) => {
        try {
           dispatch(fetchStarted());
           const response = await fetch(url);
           const json = await response.json();
           dispatch(fetchSucess(json)); 
        } catch (error) {
           return dispatch(fetchError('Não foi possível carregar os pokémons.'));    
        }
    }
}

export default reducer;