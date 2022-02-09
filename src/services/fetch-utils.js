import { client, checkError } from './client.js';

export async function fetchPokemons(start = 1, end = 40) {
  const data = await client
    .from('pokemon')
    .select()
    .range(start, end);
  return checkError(data);
}

export async function fetchSinglePokemon(id) {
  const data = await client
    .from('pokemon')
    .select()
    .match({ id: id })
    .single();

  return checkError(data);
}