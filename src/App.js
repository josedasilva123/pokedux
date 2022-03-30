import PokemonTeam from "./components/PokemonTeam";
import CurrentPokemon from "./components/CurrentPokemon";
import PokemonList from "./components/PokemonList";

import { Routes, Route } from "react-router-dom";

import { Container } from "./styles";

import "./styles/Global.css";

function App() {

 
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <Container>
                <PokemonList />
                <CurrentPokemon />
              </Container>
              <PokemonTeam />
            </>
          }
        ></Route>
        <Route path="/:id" element={
           <>
           <Container>
             <PokemonList />
             <CurrentPokemon />
           </Container>
           <PokemonTeam />
         </>
        }>
         
        </Route>
      </Routes>
    </>
  );
}

export default App;
