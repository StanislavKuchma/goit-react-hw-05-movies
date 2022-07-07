import { Container, Section } from 'components';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useGetMovieDetails } from 'Hooks/useGetMovieDetails';
import {
  NavLinkStyled,
  Box,
  Text,
  LinkWrapper,
} from '../components/Header/Header.styled';
import PropTypes from 'prop-types';

const Movies = () => {
  const { country, error, isLoading } = useGetMovieDetails();
  const location = useLocation();
  const path = location?.state?.from ?? '/';

  return (
    <Section>
      <Container>
        {isLoading && <h1>LOADING...</h1>}
        {error && <h1>{error}</h1>}

        <NavLinkStyled to={path}>
          <button> Go back</button>
        </NavLinkStyled>
        <div>
          {country && (
            <>
              <Box>
                <Text>
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${country.poster_path}`}
                    alt={country.original_name}
                    width="500px"
                  />
                </Text>
                <Text>
                  <h2>{country.title}</h2>
                  <p>User score: {country.vote_average * 10}%</p>
                  <h3>Overview</h3>
                  <p>{country.overview}</p>
                  <h3>Genres</h3>
                  {country.genres.map(movie => {
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
                <NavLinkStyled to="cast" state={{ from: path }}>
                  Cast
                </NavLinkStyled>
              </LinkWrapper>
              <LinkWrapper>
                <NavLinkStyled to="reviews" state={{ from: path }}>
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
  country: PropTypes.array,
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
