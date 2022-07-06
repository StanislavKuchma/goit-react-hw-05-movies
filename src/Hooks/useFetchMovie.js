import { useEffect, useState } from 'react';
import { getCountries } from '../service/movies-service';

export const useFetchMovies = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (err) {
        setError(err.message);
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return { countries, error, isLoading };
};
