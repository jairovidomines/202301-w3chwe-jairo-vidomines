import type { PokemonData } from "./pokemonTypes.js";

const urlApi = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemonData = async (idPokemonUser: number) => {
  const result = await fetch(`${urlApi}${idPokemonUser}`);
  const data = (await result.json()) as PokemonData;

  return data;
};
