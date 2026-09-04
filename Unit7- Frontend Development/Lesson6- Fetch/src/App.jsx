import useFetch from './hooks/useFetch';
import PokemonCardDetails from './components/PokemonCardDetails';
import Counter from './components/Counter';

function App() {
  const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=15');
  console.log(data);
  // the above api will return list of pokemons, each item will have its name and url which will have all details of that pokemon
  return (
    <div className="app">
      <h1 className="heading">Pokémon List</h1>
      {/* conditional rendering */}
      {loading && <p className="info">Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      <div className="grid">
        {/* optional chaining syntax  */}
        {data?.map(pokemon => (
          <PokemonCardDetails key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      {/* use reducer example */}
      {/* <Counter/> */}
    </div>
  );
}

export default App;