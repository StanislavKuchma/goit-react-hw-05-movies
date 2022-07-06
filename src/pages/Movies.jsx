import { Container, Section } from 'components';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useGetMovieDetails } from 'Hooks/useGetMovieDetails';
import { NavLinkStyled, Box, Text } from '../components/Header/Header.styled';

export const Movies = () => {
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
                    alr=""
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

          {/* <button onClick={goBack}>Go back</button>
        
          <button onClick={goHome}>Go home</button> */}
          <>
            {/* {data && <MoviePublic movie={movie} />} */}
            <hr />
            <h3>Additional information</h3>

            <ul>
              <NavLinkStyled to="cast" state={{ from: path }}>
                Cast
              </NavLinkStyled>
              <li>
                <NavLinkStyled to="reviews" state={{ from: path }}>
                  Reviews
                </NavLinkStyled>
              </li>
            </ul>

            <hr />
            <Suspense>
              <Outlet />
            </Suspense>
          </>
        </div>
      </Container>
    </Section>
  );
};
