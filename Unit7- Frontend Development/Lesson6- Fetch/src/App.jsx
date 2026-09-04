import useFetch from './hooks/useFetch';
import useFetchData from './hooks/useFetchData';
import PokemonCardDetails from './components/PokemonCardDetails';
import Counter from './components/Counter';

function App() {
  // const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=15');
  // const {data, loading, error, refetch} = useFetchData('https://jsonplaceholder.typicode.com/posts');
  // console.log(data);
  // the above api will return list of pokemons, each item will have its name and url which will have all details of that pokemon
  return (
    <div className="app">
      {/* <h1 className="heading">Pokémon List</h1> */}
      {/* <h1 style={{marginBottom: '1rem'}}>Posts</h1>
      {/* conditional rendering */}
      {/* {loading && <p className="info">Loading...</p>}
      {error &&  */}
      {/* <>
      <p className="error">Error: {error}</p>
      <button onClick={refetch}>retry</button>
      </> */}
      

      {/* <div className="grid">
        {/* optional chaining syntax  */}
        {/* {data?.map(post => (
          <div key={post.id} >
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))}
      </div> */}
      {/* use reducer example */}
      <Counter/>
    </div>
  );
}

export default App;