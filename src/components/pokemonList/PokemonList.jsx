import { useEffect, useState } from 'react';
import PokemonCard from '../card/PokemonCard';
import { fetchWithCache } from '../../utils/cacheData';
import InputField from './../inputField/InputField';

/**
 * PokemonList component fetches and displays a list of Pokémon.
 */
const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [originalPokemons, setOriginalPokemons] = useState([]); // State to store original list of pokemons
  /**
   * Fetches Pokémon list and their details from the API and caches the data.
   */
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
      setOriginalPokemons(pokemonDetails); // Store original list of pokemons
    } catch (error) {
      console.error('Error in fetchPokemons:', error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const handleSearch = () => {
    // If search term is empty, reset the list of pokemons to original data
    if (!search.trim()) {
      setPokemons(originalPokemons);
      return;
    }
    // Filter pokemons based on search term
    const filteredPokemons = originalPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    // Update state with filtered pokemons
    setPokemons(filteredPokemons);
  };
  return (
    <>
      <div className="w-full">
        <InputField
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onSearch={handleSearch} // Pass the handleSearch function to the InputField component
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))
        ) : (
          <p>No Pokémon available</p>
        )}
      </div>
    </>
  );
};

export default PokemonList;
