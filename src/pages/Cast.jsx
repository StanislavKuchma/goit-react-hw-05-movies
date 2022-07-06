import { useGetMovieCredits } from 'Hooks/useGetMovieCredits';
import { Grid, GridItem } from 'components';

export const Cast = () => {
  const { cast, error, isLoading } = useGetMovieCredits();
  console.log(cast);
  return (
    <>
      {isLoading && <h1>LOADING...</h1>}
      {error && <h1>{error}</h1>}
      {cast && (
        <Grid>
          {cast.map(item => (
            <GridItem key={item.id}>
              <img
                alt={item.original_name}
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                width="100px"
              ></img>
              <h3>{item.name}</h3>
              <p>{item.character}</p>
            </GridItem>
          ))}
        </Grid>
      )}

      {/* {reviews.length > 0 ? (
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
      )} */}
    </>
  );
};
