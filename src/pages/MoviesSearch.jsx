import { Container, SearchForm, Section } from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovie } from '../service/movies-service';
import { Link, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MoviesSearch = () => {
  // const [_, setQuery] = useState('');
  // const notify = () => toast('Wow so easy!');
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    const filmName = searchParams.get('q');
    if (!filmName) {
      return;
    } else {
      getMovie(filmName).then(data => {
        if (data.length === 0) {
          toast('No results try again');
        } else {
          setData(data);
        }
      });
    }
  }, [searchParams, setSearchParams]);

  const handleSubmit = q => {
    // setQuery(searchParams.get('q'));
    setSearchParams({ q });
  };
  return (
    <Section>
      <Container>
        <h1>Movies Search</h1>
        <ToastContainer />
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
