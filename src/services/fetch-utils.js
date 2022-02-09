import { client, checkError } from 'client.js';

export async function fetchPokemons(start = 1, end = 100) {
  const data = await client
    .from('pokemon')
    .select()
    .range(start. end);
console.log(data);
  return checkError(data);
}