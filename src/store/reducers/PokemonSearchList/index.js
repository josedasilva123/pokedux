const initialState = {
    list: [],
    error: null,
}
const SET_SEARCH_POKEMONS = 'search/SET_SEARCH_POKEMONS';
const SET_SEARCH_ERROR = 'search/SET_SEARCH_ERROR';

export const setSearchPokemons = (payload) => ({type: SET_SEARCH_POKEMONS, payload: payload});
export const setError = (payload) => ({type: SET_SEARCH_ERROR, payload: payload});

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_SEARCH_POKEMONS:
            return {...state, list: action.payload, error: null}
        case SET_SEARCH_ERROR:
            return {...state, error: action.payload}    
        default:
            return state; 
    }
}
export default reducer;