import PokemonList from '../../components/pokemonList/PokemonList';
import Title from '../../components/title/Title';

const HomePage = () => {
  return (
    <div className="w-[90%] sm:w-[80%] mx-auto my-10">
      <Title title="Pokemon List" className="mb-10" />
      <PokemonList />
    </div>
  );
};

export default HomePage;
