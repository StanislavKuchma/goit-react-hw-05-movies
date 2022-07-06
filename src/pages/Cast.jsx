import { useGetMovieCredits } from 'Hooks/useGetMovieCredits';
import { Grid, GridItem } from 'components';
// import { FiSmile } from 'react-icons/fi';

export const Cast = () => {
  const { cast, error, isLoading } = useGetMovieCredits();
  return (
    <>
      {isLoading && <h1>LOADING...</h1>}
      {error && <h1>{error}</h1>}
      {cast && (
        <Grid>
          {cast.map(({ id, original_name, profile_path, name, character }) => (
            <GridItem key={id}>
              <img
                alt={original_name}
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                // src={FiSmile}
                width="100px"
              ></img>
              <h3>{name}</h3>
              <p>{character}</p>
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
};
