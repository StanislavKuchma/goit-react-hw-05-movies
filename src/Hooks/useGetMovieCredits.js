import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from '../service/movies-service';

export const useGetMovieCredits = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getCountry = async () => {
      try {
        const cast = await getMovieCredits(id);
        setCast(cast.cast);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCountry();
  }, [id]);
  return { cast, error, isLoading };
};
