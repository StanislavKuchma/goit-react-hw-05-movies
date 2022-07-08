import { Container, Section } from 'components';
import { Link } from 'react-router-dom';
import { useFetchMovies } from '../Hooks/useFetchMovie';

const Home = () => {
  const { movies, error, isLoading } = useFetchMovies();
  return (
    <Section>
      <Container>
        {isLoading && <h1>LOADING...</h1>}
        {error && <h1>{error}</h1>}
        <ul>
          {movies.map(({ id, name, original_title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                {original_title ? original_title : name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};
export default Home;
