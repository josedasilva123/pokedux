import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import localStorage from "./middlewares/localStorage";

import pokemonList, { getPokemonList } from './reducers/PokemonList'
import pokemonTeam from './reducers/PokemonTeam'
import currentPokemon from './reducers/CurrentPokemon'

const reducers = combineReducers({pokemonList, pokemonTeam, currentPokemon});

const store = createStore(reducers, applyMiddleware(thunk, localStorage));

store.dispatch(
    getPokemonList(),
)

export default store;