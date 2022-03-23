const initialState = {
    loading: false,
    data: null,
    error: null,
}

const FETCH_STARTED = 'pokelist/FETCH_STARDED';
const FETCH_SUCESS = 'pokelist/FETCH_SUCESS';
const FETCH_ERROR = 'pokelist/FETCH_ERROR';

const fetchStarted = () => ({type: FETCH_STARTED});
const fetchSucess = (payload) => ({type: FETCH_SUCESS, payload: payload});
const fetchError = (payload) => ({type: FETCH_STARTED, payload: payload});

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_STARTED:
            return {...state, loading: true, error: null};
        case FETCH_SUCESS:
            return {...state, loading: false, data: action.payload};
        case FETCH_ERROR:
            return {...state, loading: false, data: null, error: action.payload}        
        default:
            return state;
    }
} 


export function getPokemonList(){
    return async (dispatch, getState) => {
        try {
           dispatch(fetchStarted());
           const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
           const json = await response.json();
           console.log(json);
           dispatch(fetchSucess(json.results)); 
        } catch (error) {
           return dispatch(fetchError('Não foi possível carregar os pokémons.'));    
        }
    }
}

export default reducer;