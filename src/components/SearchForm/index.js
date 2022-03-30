import React, {useState, useEffect} from 'react'

const SearchForm = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState(null); 
  return (
    <div>
        <form>
            <input type="text" value={search} onInput={(e) => setSearch(e.target.value)} />
        </form>
    </div>
  )
}

export default SearchForm