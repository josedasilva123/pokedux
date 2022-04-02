import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import localStorage from "./middlewares/localStorage";

import pokemonList, { getPokemonList } from './reducers/PokemonList'
import pokemonTeam from './reducers/PokemonTeam'
import currentPokemon from './reducers/CurrentPokemon'
import dragAndDrop from './reducers/DragAndDrop'

const reducers = combineReducers({pokemonList, pokemonTeam, currentPokemon, dragAndDrop});

const store = createStore(reducers, applyMiddleware(thunk, localStorage));

store.dispatch(
    getPokemonList(),
)

export default store;