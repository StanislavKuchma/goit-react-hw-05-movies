import { Container, SearchForm, Section } from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovie } from '../service/movies-service';
import { Link, useLocation } from 'react-router-dom';

const MoviesSearch = () => {
  // const [_, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    const filmName = searchParams.get('q');

    if (!filmName) return;

    getMovie(filmName)
      .then(data => {
        setData(data);
      })
      .catch(() => {
        setSearchParams({});
      });
  }, [searchParams]);

  const handleSubmit = q => {
    // setQuery(searchParams.get('q'));
    setSearchParams({ q });
  };

  return (
    <Section>
      <Container>
        <h1>Movies Search</h1>
        {data.length === 0 && <h1> No results try again</h1>}

        <SearchForm onSubmit={handleSubmit} />
        {data &&
          data.map(movie => (
            <ul key={movie.id}>
              <li>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.original_title}
                </Link>
              </li>
            </ul>
          ))}
      </Container>
    </Section>
  );
};
export default MoviesSearch;
