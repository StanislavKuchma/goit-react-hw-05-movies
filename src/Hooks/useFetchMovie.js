import { useEffect, useState } from 'react';
import { getMovies } from '../service/movies-service';

export const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (err) {
        setError(err.message);
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return { movies, error, isLoading };
};
