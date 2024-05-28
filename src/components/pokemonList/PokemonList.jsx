import { useEffect, useState } from 'react';
import PokemonCard from '../card/PokemonCard';
import { fetchWithCache } from '../../utils/cacheData';

/**
 * PokemonList component fetches and displays a list of Pokémon.
 */
const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  /**
   * Fetches Pokémon list and their details from the API and caches the data.
   */
  const fetchPokemons = async () => {
    try {
      // Fetch the initial list of Pokémon
      const data = await fetchWithCache(
        'pokemons',
        'https://pokeapi.co/api/v2/pokemon'
      );

      // Fetch details for each Pokémon in the list
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const pokemonData = await fetchWithCache(pokemon.name, pokemon.url);
          return {
            name: pokemonData.name,
            image: pokemonData.sprites.front_default,
            type: pokemonData.types.map((typeInfo) => typeInfo.type.name),
          };
        })
      );

      // Update state with the fetched Pokémon details
      setPokemons(pokemonDetails);
    } catch (error) {
      console.error('Error in fetchPokemons:', error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {pokemons.length > 0 ? (
        pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))
      ) : (
        <p>No Pokémon available</p>
      )}
    </div>
  );
};

export default PokemonList;
