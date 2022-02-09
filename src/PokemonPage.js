import { fetchPokemons } from '../services/fetch-utils.js';
import { useEffect, useState } from 'react';

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
    <div>

    </div>
  );
}