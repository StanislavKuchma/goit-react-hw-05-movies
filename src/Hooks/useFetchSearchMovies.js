import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCountry } from '../service/movies-service';

export const useFetchSearchMovies = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getCountry = async () => {
      try {
        const country = await fetchCountry(id);
        setCountry(country);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getCountry();
  }, []);
  return { country, error, isLoading };
};
