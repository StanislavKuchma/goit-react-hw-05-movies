import { useGetMovieReviews } from 'Hooks/useGetMovieReviews';

const Reviews = () => {
  const { reviews, error, isLoading } = useGetMovieReviews();
  return (
    <>
      {isLoading && <h1>LOADING...</h1>}
      {error && <h1>{error}</h1>}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>We don't have any review for this movie</h3>
      )}
    </>
  );
};
export default Reviews;
