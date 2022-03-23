const initialState = {
    list: [],
    error: null,
};

const ADD_POKEMON = 'pokelist/ADD_POKEMON';
const REMOVE_POKEMON = 'pokelist/REMOVE_POKEMON';

export const addPokemon = (payload) => ({type: ADD_POKEMON, payload: payload});
export const removePokemon = (payload) => ({type: REMOVE_POKEMON, payload: payload});

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POKEMON:
            if(state.list.length < 6){
                const newTeam = [...state.list, action.payload];
                return {...state, list: newTeam, error: null};
            } else {
                return {...state, error: 'Seu time está cheio!'};
            } 
        case REMOVE_POKEMON:
            const newTeam = [...state.list];
            newTeam.splice(action.payload, 0);
            return {...state, list: newTeam, error: null}  
        default:
            return state;
    }
} 


export default reducer;