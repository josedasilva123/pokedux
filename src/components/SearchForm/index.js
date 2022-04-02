/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import PokemonListCard from '../PokemonList/PokemonListCard';

const SearchForm = () => {
  const pokemonList = useSelector((store) => store.pokemonList);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState(null); 
  useEffect(() => {
    if(search.length > 2){
      console.log(pokemonList.data);
     
      const regex = new RegExp(search);
      console.log(regex);
      
      const filter = pokemonList.data?.filter((pokemon) =>  pokemon.name.match(regex));      
      
      if(filter.length > 10){
        filter.length = 10;
      }
 
      setSearchResults(filter);   
        
    } else {
      setSearchResults(null);
    }
  }, [search])
  return (
    <div>
        <form>
            <input type="text" value={search} onInput={(e) => setSearch(e.target.value)} />
        </form>
        <div>
          {searchResults?.map((result, index) => (
            <PokemonListCard key={result.id} pokemon={result} index={index} onClick={() => setSearch('')}/>
          ))}
        </div>
    </div>
  )
}

export default SearchForm