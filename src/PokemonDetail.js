import './PokemonDetail.css';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSinglePokemon } from './services/fetch-utils.js';


export default function PokemonDetail() {

  const [pokemon, setPokemon] = useState({});
  const params = useParams();

  useEffect(() => {
    async function fetchPokemon() {
      const data = await fetchSinglePokemon(params.id);
      setPokemon(data);
    }
    fetchPokemon();
  }, [params.id]);
  return (
    <div className="page">
      <Link to='/'>Home</Link>
      <div className="pokemon-detail">
        <div className='info'>
          <p>Name: {pokemon.pokemon}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Ability: {pokemon.ability_1}</p>
          <p>Attack: {pokemon.attack}</p>
          <p>Defense: {pokemon.defense}</p>
          <p>HP: {pokemon.hp}</p>

        </div>
        <div>
          <img src={`${pokemon.url_image}`}/>
        </div>
      </div>
    </div>
  );
}