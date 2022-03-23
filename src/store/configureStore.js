import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import localStorage from "./middlewares/localStorage";

import pokemonList, { getPokemonList } from './reducers/PokemonList/index'
import currentPokemon from './reducers/CurrentPokemon/index'

const reducers = combineReducers({pokemonList, currentPokemon});

const store = createStore(reducers, applyMiddleware(thunk, localStorage));

store.dispatch(
    getPokemonList(),
)

export default store;