import PropTypes from 'prop-types';

/**
 * PokemonCard component to display individual Pokémon information.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.pokemon - The Pokémon data.
 * @param {string} props.pokemon.name - The name of the Pokémon.
 * @param {string} props.pokemon.image - The image URL of the Pokémon.
 * @param {Array<string>} props.pokemon.type - The type(s) of the Pokémon.
 */
const PokemonCard = ({ pokemon }) => {
  return (
    <div className="shadow-lg border-2">
      {/* Image container */}
      <div className="w-full h-auto sm:h-[15rem]">
        <img
          src={pokemon?.image}
          alt={pokemon?.name}
          className="w-full h-full object-contain"
        />
      </div>
      {/* Pokémon details */}
      <div className="w-full h-auto space-y-2 p-5">
        <h1 className="font-semibold capitalize">{pokemon?.name}</h1>
        <p className="capitalize">
          Type: <span className="ms-1">{pokemon?.type.join(', ')}</span>
        </p>
      </div>
    </div>
  );
};

// PropTypes validation for the PokemonCard component
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PokemonCard;
