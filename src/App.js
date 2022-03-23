import { useSelector, useDispatch } from "react-redux";
import { getPokemon } from "./store/reducers/CurrentPokemon";

function App() {
  const pokelist = useSelector((store) => store.pokemonList);
  const currentPokemon = useSelector((store) => store.currentPokemon);
  const dispatch = useDispatch();
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
        </>
      )}
    </>
  );
}

export default App;
