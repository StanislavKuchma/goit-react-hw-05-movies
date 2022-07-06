import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../service/movies-service';

export const useGetMovieReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getCountry = async () => {
      try {
        const reviews = await getMovieReviews(id);
        setReviews(reviews.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCountry();
  }, [id]);
  return { reviews, error, isLoading };
};
