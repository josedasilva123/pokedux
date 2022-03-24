import { useSelector, useDispatch } from "react-redux";
import PokemonTeam from "./components/PokemonTeam";
import { getPokemon } from "./store/reducers/CurrentPokemon";
import { changeTeam, setError } from "./store/reducers/PokemonTeam"

function App() {
  const pokelist = useSelector((store) => store.pokemonList);
  const poketeam = useSelector((store) => store.pokemonTeam);
  const currentPokemon = useSelector((store) => store.currentPokemon);
  const dispatch = useDispatch();

  function addPokemon(){
    const team = [...poketeam.list];
    console.log(team);
    if(team.length < 6){
      if(!team?.find((p) => p.name === currentPokemon.data.name)){
        const newTeam = [...team, currentPokemon.data];
        dispatch(changeTeam(newTeam));
      } else {
        dispatch(setError('Desculpe, este pokemon já está no seu time.'))
      }     
    } else {
      dispatch(setError('Desculpe, seu time está cheio.'));
    }
  }

  return (
    <>
      {pokelist?.data && (
        <ul>
          {pokelist.data.map(p => (
            <li key={p.name} onClick={() => dispatch(getPokemon(p.url))}>
              {p.name}
            </li>
          ))}
        </ul>
      )}
      {currentPokemon?.data && (
        <>
          <img src={currentPokemon.data.sprites.front_default} alt={currentPokemon.data.name} />
          <p>{currentPokemon.data.name}</p>
          <button onClick={() => addPokemon()}>Adicionar ao time</button>
        </>
      )}
      <PokemonTeam />
    </>
  );
}

export default App;
