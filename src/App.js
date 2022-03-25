import PokemonTeam from "./components/PokemonTeam";
import CurrentPokemon from "./components/CurrentPokemon";
import PokemonList from "./components/PokemonList";

import { Container } from "./styles";

import './styles/Global.css';

function App() {
  return (
    <>
      <Container>
        <PokemonList />  
        <CurrentPokemon />
      </Container>
      <PokemonTeam />
    </>
  );
}

export default App;
