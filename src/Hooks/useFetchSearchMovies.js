import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovie } from '../service/movies-service';

export const useFetchSearchMovies = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getMovies = async () => {
      try {
        const movie = await getMovie(id);
        setMovie(movie);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, [id]);
  // if (movie) {
  console.log('ggg');
  // }
  return { movie, error, isLoading };
};
