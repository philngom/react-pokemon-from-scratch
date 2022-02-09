import './PokemonList.css';
import Pokemon from './Pokemon';

export default function PokemonList({ pokemons }) {

  return (
    <div className='pokemons-container'>
      {
        pokemons.map((pokemon, i) =>
          <Pokemon key={pokemon + i} pokemon={pokemon}/>
        )
      }
    </div>
  );
}