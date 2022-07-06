import { Container, SearchForm, Section } from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchCountry } from '../service/movies-service';
import { Link } from 'react-router-dom';

export const CountrySearch = () => {
  const [_, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const countryName = searchParams.get('q');

    if (!countryName) return;

    fetchCountry(countryName)
      .then(data => {
        setData(data);
      })
      .catch(() => {
        setSearchParams({});
      });
  }, [data, searchParams, setSearchParams]);

  const handleSubmit = q => {
    setQuery(searchParams.get('q'));
    setSearchParams({ q });
  };

  return (
    <Section>
      <Container>
        <h1>Movies Search</h1>
        <SearchForm onSubmit={handleSubmit} />
        {data &&
          data.map(movie => (
            <ul key={movie.id}>
              <li>
                <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
              </li>
            </ul>
          ))}
      </Container>
    </Section>
  );
};
