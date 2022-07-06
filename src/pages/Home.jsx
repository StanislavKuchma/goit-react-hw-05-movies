import { Container, Section } from 'components';
import { Link } from 'react-router-dom';
import { useFetchMovies } from '../Hooks/useFetchMovie';

const Home = () => {
  const { countries, error, isLoading } = useFetchMovies();
  return (
    <Section>
      <Container>
        {isLoading && <h1>LOADING...</h1>}
        {error && <h1>{error}</h1>}
        <ul>
          {countries.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};
export default Home;
