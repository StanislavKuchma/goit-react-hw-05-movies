import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../service/movies-service';

export const useGetMovieDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getCountry = async () => {
      try {
        const country = await getMovieDetails(id);
        setCountry(country);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCountry();
  }, [id]);
  return { country, error, isLoading };
};
