import { Container, Section } from 'components';
import { Suspense } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { useGetMovieDetails } from 'Hooks/useGetMovieDetails';
import {
  NavLinkStyled,
  Box,
  Text,
  LinkWrapper,
} from '../components/Header/Header.styled';
import PropTypes from 'prop-types';

const Movies = () => {
  const { movie, error, isLoading } = useGetMovieDetails();
  const location = useLocation();
  console.log(location);
  const path = location?.state?.from ?? '/';

  return (
    <Section>
      <Container>
        {isLoading && <h1>LOADING...</h1>}
        {error && <h1>{error}</h1>}

        <Link to={path}>
          <button
            style={{
              color: 'white',
              border: '1px solid',
              width: '120px',
              height: '35px',
              borderRadius: '4px',
            }}
          >
            {' '}
            Go back
          </button>
        </Link>
        <div>
          {movie && (
            <>
              <Box>
                <Text>
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt={movie.original_name}
                    width="500px"
                  />
                </Text>
                <Text>
                  <h2>{movie.title}</h2>
                  <p>User score: {movie.vote_average * 10}%</p>
                  <h3>Overview</h3>
                  <p>{movie.overview}</p>
                  <h3>Genres</h3>
                  {movie.genres.map(movie => {
                    return `${movie.name} `;
                  })}
                </Text>
              </Box>
            </>
          )}
          <>
            <hr />
            <h3>Additional information</h3>

            <ul>
              <LinkWrapper>
                <NavLinkStyled to="Cast" state={{ from: path }}>
                  Cast
                </NavLinkStyled>
              </LinkWrapper>
              <LinkWrapper>
                <NavLinkStyled to="Reviews" state={{ from: path }}>
                  Reviews
                </NavLinkStyled>
              </LinkWrapper>
            </ul>

            <hr />
            <Suspense fallback={<h1>Loading...</h1>}>
              <Outlet />
            </Suspense>
          </>
        </div>
      </Container>
    </Section>
  );
};
Movies.propTypes = {
  movie: PropTypes.array,
  error: PropTypes.bool,
  isLoading: PropTypes.bool,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};
export default Movies;
