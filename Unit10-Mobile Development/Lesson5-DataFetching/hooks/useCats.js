
import { useEffect, useRef, useState } from 'react';
import { getCatImages } from '../services/catApi';

const PAGE_SIZE = 10;

export default function useCats() {
  // ---- State: changing these re-renders the screen ----
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true); // true because we load on mount
  const [refreshing, setRefreshing] = useState(false); // pull-to-refresh spinner
  const [error, setError] = useState(null);

  // ---- Refs: values we need to remember WITHOUT re-rendering ----

  const nextPage = useRef(0);
  // Stops two requests running at once (e.g. a fast double scroll).
  const isFetching = useRef(false);

  const loadCats = async (reset = false) => {
    if (isFetching.current) return;
    isFetching.current = true;

    setLoading(true);
    setError(null);

    try {
      const page = reset ? 0 : nextPage.current;
      const data = await getCatImages({ page, limit: PAGE_SIZE });

      // Only move to the next page once this one has loaded successfully,
      // so a failed request can simply be retried.
      nextPage.current = page + 1;

      setCats((previous) => {
        const existing = reset ? [] : previous;
        // The API can return the same image twice. React needs unique keys,
        // so we skip any image we already have.
        const knownIds = new Set(existing.map((cat) => cat.id));
        const newCats = data.filter((cat) => !knownIds.has(cat.id));
        return [...existing, ...newCats];
      });
    } catch (err) {
      setError(err.message || 'Failed to load cat images');
    } finally {
      isFetching.current = false;
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Load the first page when the screen appears.
  // The empty array [] means "run this only once, on mount".
  useEffect(() => {
    loadCats();
  }, []);

  const loadMore = () => loadCats(false);

  // Pull-to-refresh: start again from page 0
  const refresh = () => {
    if (isFetching.current) return;
    setRefreshing(true);
    loadCats(true);
  };

  return { cats, loading, refreshing, error, loadMore, refresh };
}