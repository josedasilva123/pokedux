import PokemonTeam from "./components/PokemonTeam";
import CurrentPokemon from "./components/CurrentPokemon";
import PokemonList from "./components/PokemonList";

import { Routes, Route } from "react-router-dom";

import { Container } from "./styles";

import "./styles/Global.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <Header />
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
           <Header />
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
