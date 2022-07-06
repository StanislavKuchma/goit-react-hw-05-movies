import { useGetMovieCredits } from 'Hooks/useGetMovieCredits';
import { Grid, GridItem } from 'components';
import image from '../components/Image/29797-9e9e9e.svg';

const Cast = () => {
  const { cast, error, isLoading } = useGetMovieCredits();

  return (
    <>
      {isLoading && <h1>LOADING...</h1>}
      {error && <h1>{error}</h1>}
      {cast && (
        <Grid>
          {cast.map(({ id, original_name, profile_path, name, character }) => (
            <GridItem key={id}>
              {profile_path == null ? (
                <img alt={original_name} src={image} width="130px"></img>
              ) : (
                <img
                  alt={original_name}
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  width="130px"
                ></img>
              )}

              <h3>{name}</h3>
              <p>{character}</p>
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
};
export default Cast;
