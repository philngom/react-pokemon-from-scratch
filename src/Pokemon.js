import './Pokemon.css';
import { Link } from 'react-router-dom';

export default function Pokemon({ pokemon }) {
  return (
    <Link to={`pokemon/${pokemon.id}`}>
      <div className="pokemon">
        <p>{pokemon.pokemon}</p>
        <img src={pokemon.url_image}/>
      </div>
    </Link>
  );
}