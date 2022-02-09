import { fetchPokemons } from './services/fetch-utils.js';
import { useEffect, useState } from 'react';
import PokemonList from './PokemonList';

export default function App() {

  const pokemonsPerPage = 40;
  const [page, setPage] = useState(1);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetch() {
      const start = page * pokemonsPerPage - pokemonsPerPage;
      const end = page * pokemonsPerPage;
      const data = await fetchPokemons(start, end);
      setPokemons(data);
    }
    fetch();
  }, [page]);

  return (
    <div className="pokemon-main-page">
      <div className="page-selection-section">
        <h2>Current Page: {page}</h2>
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Prev Page</button>
        <button onClick={() => setPage(page + 1)}>Next Page</button>
      </div>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}