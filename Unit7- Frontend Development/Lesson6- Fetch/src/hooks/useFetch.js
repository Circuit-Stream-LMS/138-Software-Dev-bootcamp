import { useState, useEffect } from "react";
import { getPokemonDetails } from "../api/pokemon";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // // for demostration purpose
        // await new Promise(resolve => setTimeout(resolve, 2000));
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch");
        const result = await response.json();
        let details;
        if (result.results && result.results.length > 0) {
          details = await Promise.all(
            result.results.map((pokemon) => getPokemonDetails(pokemon.url)),
          );
        }
        setData(details);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
